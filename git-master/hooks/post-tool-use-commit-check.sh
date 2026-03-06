#!/usr/bin/env bash
# post-tool-use-commit-check.sh — Validates commit messages after git commit runs
# Reads tool input JSON from stdin. If the command was a git commit,
# extracts the message and pipes it through validate_commit.sh.
# Exit 0 = no issues, validation errors go to stderr for Claude to see.

set -euo pipefail

PLUGIN_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# Read the tool input from stdin
INPUT=$(cat)

# Extract the command field from JSON
COMMAND=$(echo "$INPUT" | grep -oP '"command"\s*:\s*"[^"]*"' | head -1 | sed 's/"command"\s*:\s*"//;s/"$//' || true)

# Only care about git commit commands
if ! echo "$COMMAND" | grep -qP 'git\s+commit'; then
    exit 0
fi

# Try to extract the commit message from -m flag
# Handles both single and double quotes
MSG=$(echo "$COMMAND" | grep -oP '(?<=-m\s)["\x27].*?["\x27]' | head -1 | sed "s/^[\"']//;s/[\"']$//" || true)

# If no -m message found (could be heredoc or --amend), try to get from last commit
if [ -z "$MSG" ]; then
    MSG=$(git log -1 --format="%s" 2>/dev/null || true)
fi

# If we still have no message, skip validation
if [ -z "$MSG" ]; then
    exit 0
fi

# Run the validator
if [ -x "$PLUGIN_ROOT/scripts/validate_commit.sh" ]; then
    echo "$MSG" | "$PLUGIN_ROOT/scripts/validate_commit.sh" >&2 || true
fi

# Always exit 0 — validation is advisory, not blocking
exit 0
