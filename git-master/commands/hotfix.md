---
description: "Hotfix workflow: branch from main, fix, open PR"
allowed-tools: Bash, Read, Grep, Glob
argument-hint: "<description>"
---

You are running the **git-master:hotfix** command — urgent fix workflow from branch to PR.

## Setup
1. Read workflow conventions: @${CLAUDE_PLUGIN_ROOT}/skills/git-workflow/SKILL.md (sections 2, 3, 5)
2. Read commit conventions: @${CLAUDE_PLUGIN_ROOT}/skills/commit-conventions/SKILL.md

## Orient
1. Run `git status` — check for uncommitted work (stash if needed)
2. Run `git branch --show-current` — note current branch
3. Run `git fetch origin` — ensure we have latest main

## Arguments
- `$ARGUMENTS` — a short description of the hotfix (used for branch name)

## Execute
1. **Stash current work** if there are uncommitted changes:
   ```bash
   git stash push -m "WIP before hotfix"
   ```
2. **Create hotfix branch** from latest main:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/<kebab-case-description>
   ```
3. **Help the user fix the issue**:
   - Ask what needs to be fixed if not clear from the description
   - Make the minimal change needed
   - Stage and commit with proper format: `🐛 fix(<scope>): <description>`
4. **Push and create PR**:
   ```bash
   git push -u origin hotfix/<branch-name>
   ```
   - Create PR targeting `main` with urgency noted in the body
5. **Offer to return** to the previous branch and restore stash

## Verify
- Show the PR URL
- Show `git status` on the hotfix branch
- Remind user to get the PR reviewed and merged quickly
