#!/usr/bin/env bash
# validate_commit.sh — Validates a commit message against Gitmoji + Conventional Commits format
# Usage: echo "your commit message" | ./validate_commit.sh
#    or: ./validate_commit.sh "your commit message"

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if [ $# -gt 0 ]; then
    MSG="$1"
else
    read -r MSG
fi

SUBJECT=$(echo "$MSG" | head -1)
ERRORS=()
WARNINGS=()

# Check for emoji prefix (common gitmoji unicode chars)
if ! echo "$SUBJECT" | grep -qP '^[\x{2728}\x{1F41B}\x{1F4DD}\x{1F484}\x{267B}\x{26A1}\x{2705}\x{1F527}\x{1F680}\x{2B06}\x{1F512}\x{1F6A8}\x{1F525}\x{1F389}\x{1F516}\x{23EA}\x{1F500}\x{1F4E6}\x{1F5C3}\x{1F310}\x{267F}\x{1F3D7}\x{1F4A1}\x{1F3F7}\x{1F4AC}\x{1F6D1}\x{1FA79}\x{1F691}\x{2795}\x{2796}\x{1F433}\x{1F528}\x{1F331}]'; then
    # Fallback: check for any emoji-like character at start
    if ! echo "$SUBJECT" | grep -qP '^\p{So}|^\p{Sk}'; then
        WARNINGS+=("No gitmoji emoji detected at start of subject line")
    fi
fi

# Check for conventional commit type
if ! echo "$SUBJECT" | grep -qiP '(feat|fix|docs|style|refactor|perf|test|chore|ci|deps|security|breaking|hotfix|remove|revert|build|db|i18n|a11y|init|release|merge|types)\(?'; then
    ERRORS+=("Missing conventional commit type (feat, fix, docs, etc.)")
fi

# Check subject length
SUBJECT_LEN=${#SUBJECT}
if [ "$SUBJECT_LEN" -gt 72 ]; then
    ERRORS+=("Subject line too long: ${SUBJECT_LEN} chars (max 72)")
elif [ "$SUBJECT_LEN" -gt 60 ]; then
    WARNINGS+=("Subject line is ${SUBJECT_LEN} chars — consider shortening (ideal < 60)")
fi

# Check for period at end of subject
if echo "$SUBJECT" | grep -qP '\.$'; then
    WARNINGS+=("Subject line ends with a period — convention is to omit it")
fi

# Check for imperative mood (common non-imperative patterns)
if echo "$SUBJECT" | grep -qiP ':\s*(added|fixed|removed|updated|changed|deleted|created|modified|implemented)'; then
    WARNINGS+=("Use imperative mood in subject (e.g., 'add' not 'added')")
fi

# Check body formatting (if present)
LINE_COUNT=$(echo "$MSG" | wc -l)
if [ "$LINE_COUNT" -gt 1 ]; then
    SECOND_LINE=$(echo "$MSG" | sed -n '2p')
    if [ -n "$SECOND_LINE" ]; then
        WARNINGS+=("Second line should be blank (separates subject from body)")
    fi
fi

# Print results
echo ""
echo "📋 Commit Message Validation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Subject: $SUBJECT"
echo ""

if [ ${#ERRORS[@]} -eq 0 ] && [ ${#WARNINGS[@]} -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
    exit 0
fi

if [ ${#ERRORS[@]} -gt 0 ]; then
    echo -e "${RED}❌ Errors:${NC}"
    for err in "${ERRORS[@]}"; do
        echo -e "  ${RED}• $err${NC}"
    done
fi

if [ ${#WARNINGS[@]} -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Warnings:${NC}"
    for warn in "${WARNINGS[@]}"; do
        echo -e "  ${YELLOW}• $warn${NC}"
    done
fi

echo ""
[ ${#ERRORS[@]} -gt 0 ] && exit 1 || exit 0
