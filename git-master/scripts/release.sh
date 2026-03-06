#!/usr/bin/env bash
# release.sh — Smart semver release with auto-grouped changelog from Gitmoji commits
#
# Usage:
#   ./release.sh              # Auto-detect version bump from commits
#   ./release.sh --patch      # Force patch bump
#   ./release.sh --minor      # Force minor bump
#   ./release.sh --major      # Force major bump
#   ./release.sh --dry-run    # Preview without creating anything
#   ./release.sh --pre alpha  # Pre-release: v1.3.0-alpha.1
#
# Requires: git, gh (GitHub CLI, authenticated)

set -euo pipefail

# ─── Colors ───────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

# ─── Args ─────────────────────────────────────────────────────────────
FORCE_BUMP=""
DRY_RUN=false
PRE_RELEASE=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --patch) FORCE_BUMP="patch"; shift ;;
        --minor) FORCE_BUMP="minor"; shift ;;
        --major) FORCE_BUMP="major"; shift ;;
        --dry-run) DRY_RUN=true; shift ;;
        --pre) PRE_RELEASE="$2"; shift 2 ;;
        -h|--help)
            echo "Usage: ./release.sh [--patch|--minor|--major] [--dry-run] [--pre <label>]"
            exit 0 ;;
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
done

# ─── Preflight Checks ────────────────────────────────────────────────
echo -e "${BOLD}🔍 Preflight checks...${NC}"

# Must be in a git repo
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo -e "${RED}❌ Not inside a git repository${NC}"
    exit 1
fi

# Must have gh CLI
if ! command -v gh &>/dev/null; then
    echo -e "${RED}❌ GitHub CLI (gh) not found. Install: https://cli.github.com${NC}"
    exit 1
fi

# Must be on main or master
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
    echo -e "${YELLOW}⚠️  You're on '${CURRENT_BRANCH}', not main/master.${NC}"
    read -rp "Continue anyway? (y/N) " CONFIRM
    [[ "$CONFIRM" =~ ^[Yy]$ ]] || exit 0
fi

# Working tree must be clean
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo -e "${RED}❌ Working tree is dirty. Commit or stash changes first.${NC}"
    exit 1
fi

# Pull latest
echo -e "${CYAN}  Pulling latest...${NC}"
git pull --rebase origin "$CURRENT_BRANCH" 2>/dev/null || true

echo -e "${GREEN}  ✅ All checks passed${NC}"
echo ""

# ─── Get Last Tag ─────────────────────────────────────────────────────
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")

if [ -z "$LAST_TAG" ]; then
    echo -e "${YELLOW}No previous tags found. Starting from v0.0.0${NC}"
    LAST_TAG="v0.0.0"
    COMMIT_RANGE="HEAD"
else
    echo -e "${CYAN}Last tag: ${BOLD}$LAST_TAG${NC}"
    COMMIT_RANGE="${LAST_TAG}..HEAD"
fi

# ─── Parse Commits ───────────────────────────────────────────────────
echo -e "${BOLD}📝 Analyzing commits since ${LAST_TAG}...${NC}"
echo ""

# Get raw commit subjects
COMMITS=$(git log "$COMMIT_RANGE" --pretty=format:"%s" 2>/dev/null || echo "")

if [ -z "$COMMITS" ]; then
    echo -e "${YELLOW}No new commits since ${LAST_TAG}. Nothing to release.${NC}"
    exit 0
fi

# Categorize commits by Gitmoji + Conventional type
declare -A CATEGORIES
CATEGORIES=(
    ["breaking"]=""
    ["feat"]=""
    ["fix"]=""
    ["perf"]=""
    ["refactor"]=""
    ["docs"]=""
    ["test"]=""
    ["chore"]=""
    ["ci"]=""
    ["deps"]=""
    ["security"]=""
    ["other"]=""
)

HAS_BREAKING=false
HAS_FEAT=false
HAS_FIX=false

while IFS= read -r commit; do
    [ -z "$commit" ] && continue

    # Detect category from conventional commit type
    TYPE="other"
    if echo "$commit" | grep -qiP '(feat|feature)\(?'; then
        TYPE="feat"
        HAS_FEAT=true
    elif echo "$commit" | grep -qiP '(fix|bugfix|hotfix)\(?'; then
        TYPE="fix"
        HAS_FIX=true
    elif echo "$commit" | grep -qiP 'perf\(?'; then
        TYPE="perf"
    elif echo "$commit" | grep -qiP 'refactor\(?'; then
        TYPE="refactor"
    elif echo "$commit" | grep -qiP 'docs\(?'; then
        TYPE="docs"
    elif echo "$commit" | grep -qiP 'test\(?'; then
        TYPE="test"
    elif echo "$commit" | grep -qiP '(chore|build)\(?'; then
        TYPE="chore"
    elif echo "$commit" | grep -qiP 'ci\(?'; then
        TYPE="ci"
    elif echo "$commit" | grep -qiP 'deps\(?'; then
        TYPE="deps"
    elif echo "$commit" | grep -qiP 'security\(?'; then
        TYPE="security"
    fi

    # Detect breaking changes
    if echo "$commit" | grep -qiP '(breaking|🚨|!)'; then
        HAS_BREAKING=true
        TYPE="breaking"
    fi

    CATEGORIES[$TYPE]+="- ${commit}"$'\n'
done <<< "$COMMITS"

# ─── Determine Version Bump ──────────────────────────────────────────
if [ -n "$FORCE_BUMP" ]; then
    BUMP="$FORCE_BUMP"
elif $HAS_BREAKING; then
    BUMP="major"
elif $HAS_FEAT; then
    BUMP="minor"
elif $HAS_FIX; then
    BUMP="patch"
else
    BUMP="patch"
fi

# Parse current version
VERSION="${LAST_TAG#v}"
IFS='.' read -r MAJOR MINOR PATCH <<< "${VERSION%%-*}"
MAJOR=${MAJOR:-0}
MINOR=${MINOR:-0}
PATCH=${PATCH:-0}

# Bump
case $BUMP in
    major) MAJOR=$((MAJOR + 1)); MINOR=0; PATCH=0 ;;
    minor) MINOR=$((MINOR + 1)); PATCH=0 ;;
    patch) PATCH=$((PATCH + 1)) ;;
esac

NEW_VERSION="v${MAJOR}.${MINOR}.${PATCH}"

# Handle pre-release
if [ -n "$PRE_RELEASE" ]; then
    # Find existing pre-release tags for this version
    EXISTING_PRE=$(git tag -l "${NEW_VERSION}-${PRE_RELEASE}.*" | sort -V | tail -1 || echo "")
    if [ -n "$EXISTING_PRE" ]; then
        PRE_NUM=$(echo "$EXISTING_PRE" | grep -oP '\d+$')
        PRE_NUM=$((PRE_NUM + 1))
    else
        PRE_NUM=1
    fi
    NEW_VERSION="${NEW_VERSION}-${PRE_RELEASE}.${PRE_NUM}"
fi

# ─── Generate Changelog ──────────────────────────────────────────────
CHANGELOG=""

# Section headers with emojis
declare -A SECTION_HEADERS
SECTION_HEADERS=(
    ["breaking"]="🚨 Breaking Changes"
    ["feat"]="✨ New Features"
    ["fix"]="🐛 Bug Fixes"
    ["perf"]="⚡ Performance"
    ["security"]="🔒 Security"
    ["refactor"]="♻️ Refactoring"
    ["deps"]="⬆️ Dependencies"
    ["docs"]="📝 Documentation"
    ["test"]="✅ Tests"
    ["chore"]="🔧 Chores"
    ["ci"]="🚀 CI/CD"
    ["other"]="📦 Other"
)

# Order matters — show important stuff first
SECTION_ORDER=("breaking" "feat" "fix" "perf" "security" "refactor" "deps" "docs" "test" "chore" "ci" "other")

for section in "${SECTION_ORDER[@]}"; do
    CONTENT="${CATEGORIES[$section]:-}"
    if [ -n "$CONTENT" ]; then
        HEADER="${SECTION_HEADERS[$section]}"
        CHANGELOG+="## ${HEADER}"$'\n'
        CHANGELOG+="${CONTENT}"$'\n'
    fi
done

# Add commit count summary
COMMIT_COUNT=$(echo "$COMMITS" | wc -l | tr -d ' ')
CONTRIBUTORS=$(git log "$COMMIT_RANGE" --pretty=format:"%an" 2>/dev/null | sort -u | tr '\n' ', ' | sed 's/,$//')
CHANGELOG+="---"$'\n'
CHANGELOG+="**${COMMIT_COUNT} commits** by ${CONTRIBUTORS}"$'\n'

# ─── Preview ──────────────────────────────────────────────────────────
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}📦 Release Preview${NC}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  Version:  ${BOLD}${LAST_TAG} → ${GREEN}${NEW_VERSION}${NC}"
echo -e "  Bump:     ${CYAN}${BUMP}${NC}"
echo -e "  Commits:  ${COMMIT_COUNT}"
echo -e "  Branch:   ${CURRENT_BRANCH}"
echo ""
echo -e "${BOLD}📋 Changelog:${NC}"
echo ""
echo "$CHANGELOG"
echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

if $DRY_RUN; then
    echo -e "${YELLOW}🏃 Dry run — no changes made.${NC}"
    exit 0
fi

# ─── Confirm ──────────────────────────────────────────────────────────
echo ""
echo -e "${YELLOW}This will:${NC}"
echo -e "  1. Create annotated tag ${GREEN}${NEW_VERSION}${NC}"
echo -e "  2. Push the tag to origin"
echo -e "  3. Create a GitHub Release with the changelog above"
echo ""
read -rp "$(echo -e "${BOLD}Proceed? (y/N) ${NC}")" CONFIRM

if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Cancelled.${NC}"
    exit 0
fi

# ─── Execute ──────────────────────────────────────────────────────────
echo ""
echo -e "${CYAN}🏷️  Creating tag ${NEW_VERSION}...${NC}"
git tag -a "$NEW_VERSION" -m "🔖 Release ${NEW_VERSION}"

echo -e "${CYAN}📤 Pushing tag to origin...${NC}"
git push origin "$NEW_VERSION"

echo -e "${CYAN}📝 Creating GitHub Release...${NC}"

RELEASE_FLAGS="--latest"
if [ -n "$PRE_RELEASE" ]; then
    RELEASE_FLAGS="--prerelease"
fi

gh release create "$NEW_VERSION" \
    --title "${NEW_VERSION}" \
    --notes "$CHANGELOG" \
    $RELEASE_FLAGS

echo ""
echo -e "${GREEN}${BOLD}✅ Release ${NEW_VERSION} created successfully!${NC}"
echo ""
RELEASE_URL=$(gh release view "$NEW_VERSION" --json url -q '.url' 2>/dev/null || echo "")
if [ -n "$RELEASE_URL" ]; then
    echo -e "  🔗 ${RELEASE_URL}"
fi
echo ""
