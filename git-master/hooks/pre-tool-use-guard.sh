#!/usr/bin/env bash
# pre-tool-use-guard.sh — Intercepts dangerous git operations before execution
# Reads tool input JSON from stdin, checks the "command" field for risky patterns.
# Exit 0 = allow, Exit 2 = block with warning message on stderr.

set -euo pipefail

# Read the tool input from stdin
INPUT=$(cat)

# Extract the command field from JSON
COMMAND=$(echo "$INPUT" | grep -oP '"command"\s*:\s*"[^"]*"' | head -1 | sed 's/"command"\s*:\s*"//;s/"$//' || true)

# If no command found, allow (not a Bash tool call we care about)
if [ -z "$COMMAND" ]; then
    exit 0
fi

# --- Dangerous pattern checks ---

# 1. git push --force (without --force-with-lease)
if echo "$COMMAND" | grep -qP 'git\s+push\s+.*--force(?!-with-lease)' && \
   ! echo "$COMMAND" | grep -q '\-\-force-with-lease'; then
    echo "BLOCKED: git push --force is dangerous — it can overwrite others' work." >&2
    echo "Use --force-with-lease instead, which checks that the remote hasn't changed." >&2
    echo "Command: $COMMAND" >&2
    exit 2
fi

# 2. git reset --hard
if echo "$COMMAND" | grep -qP 'git\s+reset\s+.*--hard'; then
    echo "BLOCKED: git reset --hard discards all uncommitted changes permanently." >&2
    echo "Consider --soft (keeps changes staged) or --mixed (keeps changes unstaged)." >&2
    echo "Command: $COMMAND" >&2
    exit 2
fi

# 3. git clean -f (force clean of untracked files)
if echo "$COMMAND" | grep -qP 'git\s+clean\s+.*-[a-zA-Z]*f'; then
    echo "BLOCKED: git clean -f permanently deletes untracked files." >&2
    echo "Run 'git clean -n' first to preview what would be deleted." >&2
    echo "Command: $COMMAND" >&2
    exit 2
fi

# 4. git branch -D on protected branches
if echo "$COMMAND" | grep -qP 'git\s+branch\s+-D\s+(main|master|develop)\b'; then
    echo "BLOCKED: Deleting the main/master/develop branch is almost never intended." >&2
    echo "Command: $COMMAND" >&2
    exit 2
fi

# 5. Direct push to main/master
if echo "$COMMAND" | grep -qP 'git\s+push\s+(origin\s+)?(main|master)\b' && \
   ! echo "$COMMAND" | grep -q '\-\-force-with-lease' && \
   ! echo "$COMMAND" | grep -q '\-\-tags'; then
    echo "BLOCKED: Direct push to main/master branch." >&2
    echo "Use a feature branch and create a PR instead." >&2
    echo "Command: $COMMAND" >&2
    exit 2
fi

# All checks passed — allow the command
exit 0
