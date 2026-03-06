---
description: "Stage and commit with Gitmoji + Conventional Commits format"
allowed-tools: Bash, Read, Grep, Glob
argument-hint: "[files] [--amend]"
---

You are running the **git-master:commit** command — stage changes and create a well-formatted commit.

## Setup
1. Read commit conventions: @${CLAUDE_PLUGIN_ROOT}/skills/commit-conventions/SKILL.md
2. Read the gitmoji reference: @${CLAUDE_PLUGIN_ROOT}/references/gitmoji-map.md

## Orient
1. Run `git status` to see working tree state
2. Run `git diff --stat` to see what changed
3. Run `git log --oneline -5` to see recent commit style

## Arguments
- `$ARGUMENTS`
- If specific files are listed, only stage those files
- If `--amend` is specified, amend the last commit (confirm with user first)

## Execute
1. **Review changes**: Show `git diff` (or `git diff --staged` if already staged) so you understand what's being committed
2. **Stage files**: Use `git add <specific-files>` — avoid `git add -A` unless the user explicitly asks
3. **Check for secrets**: Run `git diff --staged | grep -iE "(api_key|secret|password|token|private_key)" || true` — warn if found
4. **Compose the commit message** following Gitmoji + Conventional Commits:
   - Pick the right emoji + type from the decision guide
   - Write an imperative subject line (max 72 chars)
   - Add a body if the *why* isn't obvious
5. **Create the commit** using a heredoc for proper formatting
6. If `--amend` was requested: confirm with user, then use `git commit --amend`

## Verify
- Run `git log --oneline -3` to show the new commit
- Run `git status` to confirm clean working tree (or show remaining changes)
