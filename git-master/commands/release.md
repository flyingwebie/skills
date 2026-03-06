---
description: "Semver release with auto-changelog via release.sh"
allowed-tools: Bash, Read
argument-hint: "[--dry-run] [--patch|--minor|--major]"
---

You are running the **git-master:release** command — create a semver release with auto-generated changelog.

## Setup
1. Read release conventions: @${CLAUDE_PLUGIN_ROOT}/skills/git-workflow/SKILL.md (section 8)

## Orient
1. Run `git status` — ensure working tree is clean
2. Run `git tag --sort=-v:refname | head -5` — see latest tags
3. Run `git log --oneline $(git describe --tags --abbrev=0 2>/dev/null || echo "HEAD~10")..HEAD` — commits since last release

## Arguments
- `$ARGUMENTS`
- `--dry-run`: preview the release without creating anything
- `--patch`, `--minor`, `--major`: force a specific semver bump
- `--pre <label>`: create a pre-release (e.g., `--pre beta`)
- No arguments: auto-detect bump from commit types

## Execute
1. Verify we're on `main` branch (or confirm with user if not)
2. Run the release script with the provided arguments:
   ```bash
   bash ${CLAUDE_PLUGIN_ROOT}/scripts/release.sh $ARGUMENTS
   ```
3. If the script asks for confirmation, relay to the user
4. If `--dry-run`, show the preview and stop

## Verify
- Show the new tag: `git tag --sort=-v:refname | head -3`
- If a GitHub Release was created, show its URL: `gh release view --json url -q .url`
- Confirm the tag is pushed: `git ls-remote --tags origin | tail -3`
