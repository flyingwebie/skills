---
description: "Rebase with safety checks and conflict guidance"
allowed-tools: Bash, Read
argument-hint: "[branch] [--interactive]"
---

You are running the **git-master:rebase** command — safe rebasing with conflict resolution guidance.

## Setup
1. Read rebase conventions: @${CLAUDE_PLUGIN_ROOT}/skills/git-workflow/SKILL.md (sections 4 and 10)

## Orient
1. Run `git status` — must be clean before rebasing
2. Run `git branch --show-current` — note current branch
3. Run `git log --oneline -5` — current commit history
4. Check if branch is shared: `git branch -r --contains HEAD 2>/dev/null | head -5`

## Arguments
- `$ARGUMENTS`
- Target branch to rebase onto (default: `origin/main`)
- `--interactive`: request interactive rebase guidance

## Safety Checks
1. **Working tree must be clean** — if dirty, ask user to commit or stash first
2. **Never rebase shared/public branches** — if the current branch has remote tracking AND others may be using it, warn the user and suggest merge instead
3. **Never rebase main/master/develop** — block this entirely

## Execute
1. Fetch latest: `git fetch origin`
2. If `--interactive`:
   - Show the commits that will be rebased: `git log --oneline ${TARGET}..HEAD`
   - Note: interactive rebase (`-i`) requires terminal interaction — instead, guide the user on what to squash/reword/drop and use `git rebase` with appropriate fixup commits
3. Standard rebase:
   ```bash
   git rebase origin/main
   ```
4. **If conflicts occur**:
   - Show which files conflict: `git diff --name-only --diff-filter=U`
   - For each conflicted file, show the conflict markers and help resolve
   - After resolving: `git add <file>` then `git rebase --continue`
   - If too complex: suggest `git rebase --abort` and discuss strategy
5. After successful rebase, if branch was already pushed:
   - Inform user they'll need `git push --force-with-lease`
   - **Confirm before force pushing**

## Verify
- `git log --oneline -10` — show the rebased history
- `git status` — confirm clean state
- Show if push is needed
