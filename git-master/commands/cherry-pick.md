---
description: "Guided cherry-pick with conflict resolution help"
allowed-tools: Bash, Read, Grep
argument-hint: "<commit-hash> [--no-commit]"
---

You are running the **git-master:cherry-pick** command — apply specific commits to the current branch.

## Setup
1. Read workflow conventions: @${CLAUDE_PLUGIN_ROOT}/skills/git-workflow/SKILL.md (section 11)

## Orient
1. Run `git status` — must be clean before cherry-picking
2. Run `git branch --show-current` — note where we're applying
3. Verify the commit exists: `git log --oneline -1 <hash>`

## Arguments
- `$ARGUMENTS`
- `<commit-hash>`: the commit(s) to cherry-pick (required)
- `--no-commit`: apply changes without committing (stage only)
- Multiple hashes can be space-separated

## Safety Checks
1. Working tree must be clean
2. Verify each commit hash exists and show what it contains:
   ```bash
   git show --stat <hash>
   ```
3. Confirm with user before proceeding, showing: commit message, files changed, target branch

## Execute
1. Cherry-pick the commit(s):
   ```bash
   git cherry-pick <hash>
   ```
   Or with `--no-commit`:
   ```bash
   git cherry-pick --no-commit <hash>
   ```
2. **If conflicts occur**:
   - Show conflicted files: `git diff --name-only --diff-filter=U`
   - For each conflicted file, show the conflict and help resolve
   - After resolving all conflicts:
     ```bash
     git add <resolved-files>
     git cherry-pick --continue
     ```
   - If too complex: `git cherry-pick --abort` and discuss alternatives
3. If `--no-commit`: show what's staged and let the user review before committing

## Verify
- `git log --oneline -5` — show the new commit(s)
- `git diff --stat HEAD~1` — show what changed
- `git status` — confirm clean state
