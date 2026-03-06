# Git Master Plugin — Active

## Available Commands

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

## Active Safety Rules

The **PreToolUse** hook automatically blocks:
- `git push --force` (use `--force-with-lease` instead)
- `git reset --hard` (use `--soft` or `--mixed`)
- `git clean -f` (preview with `-n` first)
- `git branch -D main/master/develop`
- Direct pushes to `main`/`master` (use a PR)

The **PostToolUse** hook validates commit messages against Gitmoji + Conventional Commits format.

## Quick Start

Run `/git-master:workflow-status` to orient yourself in the current repository.
