#!/usr/bin/env bash
# branch_cleanup.sh — Lists stale/merged branches for cleanup review
# Usage: ./branch_cleanup.sh [main|develop]
# This script ONLY lists branches — it does NOT delete anything.

set -euo pipefail

BASE_BRANCH="${1:-main}"
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo "🔍 Branch Cleanup Report"
echo "━━━━━━━━━━━━━━━━━━━━━━━"
echo "Base branch: $BASE_BRANCH"
echo ""

# Fetch latest
git fetch --prune 2>/dev/null

# Merged local branches (safe to delete)
echo -e "${GREEN}✅ Local branches merged into $BASE_BRANCH (safe to delete):${NC}"
MERGED=$(git branch --merged "$BASE_BRANCH" | grep -v "^\*\|main\|master\|develop" || true)
if [ -z "$MERGED" ]; then
    echo "  (none)"
else
    echo "$MERGED" | while read -r branch; do
        LAST_COMMIT=$(git log -1 --format="%cr" "$branch" 2>/dev/null || echo "unknown")
        echo "  • $(echo $branch | xargs) (last commit: $LAST_COMMIT)"
    done
fi

echo ""

# Remote branches merged
echo -e "${GREEN}✅ Remote branches merged into origin/$BASE_BRANCH:${NC}"
REMOTE_MERGED=$(git branch -r --merged "origin/$BASE_BRANCH" | grep -v "origin/main\|origin/master\|origin/develop\|HEAD" || true)
if [ -z "$REMOTE_MERGED" ]; then
    echo "  (none)"
else
    echo "$REMOTE_MERGED" | while read -r branch; do
        echo "  • $(echo $branch | xargs)"
    done
fi

echo ""

# Stale branches (no commits in 30+ days)
echo -e "${YELLOW}⚠️  Local branches with no commits in 30+ days:${NC}"
STALE_FOUND=false
for branch in $(git branch --format='%(refname:short)' | grep -v "main\|master\|develop"); do
    LAST_DATE=$(git log -1 --format="%ci" "$branch" 2>/dev/null || continue)
    DAYS_AGO=$(( ($(date +%s) - $(date -d "$LAST_DATE" +%s 2>/dev/null || date -j -f "%Y-%m-%d %H:%M:%S %z" "$LAST_DATE" +%s 2>/dev/null || echo 0)) / 86400 ))
    if [ "$DAYS_AGO" -gt 30 ]; then
        STALE_FOUND=true
        echo "  • $branch ($DAYS_AGO days since last commit)"
    fi
done
$STALE_FOUND || echo "  (none)"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━"
echo "To delete a local branch:  git branch -d <branch-name>"
echo "To delete a remote branch: git push origin --delete <branch-name>"
echo "⚠️  Always confirm with your team before deleting shared branches."
