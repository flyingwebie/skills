---
name: git-master
description: >
  Best-practice git workflow manager for feature-branch development on GitHub. Handles commit messages
  (Gitmoji + Conventional Commits), branch creation/naming, PR creation via gh CLI, merges with
  human-in-the-loop confirmation, worktrees, rebasing, tagging, and repository hygiene. Use this skill
  whenever the user mentions git, commits, branches, pull requests, PRs, merges, rebasing, tagging,
  releases, git workflow, version control, repository management, or any git-related operation — even
  if they don't explicitly say "git". Also trigger when users say things like "push my changes",
  "create a feature branch", "ship this", "merge to main", "open a PR", "clean up branches",
  "tag a release", or "set up a worktree".
---

# Git Master Plugin

This skill has been upgraded to a full Claude Code plugin with slash commands and safety hooks.

## Commands

| Command | Description |
|---------|-------------|
| `/git-master:commit` | Stage and commit with Gitmoji + Conventional Commits format |
| `/git-master:pr` | Create or review pull requests via `gh` CLI |
| `/git-master:release` | Semver release with auto-changelog via `release.sh` |
| `/git-master:branch-cleanup` | Audit and prune merged/stale branches |
| `/git-master:hotfix` | Hotfix workflow: branch from main, fix, PR |
| `/git-master:workflow-status` | Show current git state at a glance |
| `/git-master:rebase` | Rebase with safety checks and conflict guidance |
| `/git-master:stash` | Smart stash management (save, list, apply, pop) |
| `/git-master:cherry-pick` | Guided cherry-pick with conflict resolution help |

## Safety Hooks

**PreToolUse** automatically blocks dangerous git operations:
- `git push --force` (use `--force-with-lease`)
- `git reset --hard` (use `--soft` or `--mixed`)
- `git clean -f` (preview with `-n` first)
- `git branch -D main/master/develop`
- Direct pushes to `main`/`master`

**PostToolUse** validates commit messages against Gitmoji + Conventional Commits format.

## Full Reference

For the complete git workflow knowledge base (branch naming, commit conventions, PR templates,
merge strategies, worktrees, tagging, releases, repository hygiene), see:

- `skills/git-workflow/SKILL.md` — Full workflow reference (12 sections)
- `skills/commit-conventions/SKILL.md` — Commit message format and gitmoji guide
- `references/gitmoji-map.md` — Complete emoji reference
