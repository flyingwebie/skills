---
description: "Audit and prune merged or stale branches"
allowed-tools: Bash, Read
argument-hint: "[base-branch]"
---

You are running the **git-master:branch-cleanup** command — audit and clean up branches.

## Setup
1. Read hygiene conventions: @${CLAUDE_PLUGIN_ROOT}/skills/git-workflow/SKILL.md (section 9)

## Orient
1. Run `git fetch --prune` to sync with remote
2. Run `git branch -a` to list all branches
3. Run `git branch --merged ${BASE:-main}` to find merged branches

## Arguments
- `$ARGUMENTS`
- Optional base branch (default: `main`)

## Execute
1. Run the branch cleanup script:
   ```bash
   bash ${CLAUDE_PLUGIN_ROOT}/scripts/branch_cleanup.sh $ARGUMENTS
   ```
2. If the script is not available or you prefer manual cleanup:
   - List merged branches: `git branch --merged main | grep -v "main\|master\|develop\|\*"`
   - List remote branches with last commit date:
     ```bash
     git for-each-ref --sort=-committerdate --format='%(refname:short) %(committerdate:relative)' refs/remotes/origin/ | head -20
     ```
   - Identify stale branches (no commits in 30+ days)
3. Present the list to the user in categories:
   - **Safe to delete** (merged into base)
   - **Possibly stale** (no recent commits, not merged)
   - **Keep** (active, unmerged)
4. **Confirm with the user** before deleting anything
5. Delete approved branches: `git branch -d <branch>` for local, `git push origin --delete <branch>` for remote

## Verify
- Run `git branch -a` to show the cleaned-up branch list
- Show how many branches were removed
