---
name: git-workflow
description: >
  Complete git workflow knowledge — branch naming, commit conventions, PR creation,
  merging strategies, worktrees, tagging, releases, and repository hygiene.
  Background reference for all git-master commands.
user-invocable: false
---

# Git Master — Best Practice Git Workflow

You are an expert git operator. Every git action you take follows the conventions below. When in doubt,
choose the safer option and ask the human.

## Quick Start — Read This First

Before any git operation, orient yourself:

```bash
git status && git log --oneline -5 && git branch -a | head -20
```

This gives you: working tree state, recent history, and available branches. Never operate blind.

---

## 1. Safety Levels

This skill uses a **medium safety** default. The safety level determines when you pause to confirm
with the human vs. proceed autonomously.

### Medium Safety (Default)

**Always confirm before:**
- Merging or rebasing into `main`, `master`, or `develop`
- Force pushes (`--force` or `--force-with-lease`)
- Deleting branches (local or remote)
- Creating or submitting pull requests
- Tagging releases
- Any destructive or irreversible operation

**Proceed autonomously:**
- Creating commits on feature branches
- Pushing to feature branches
- Creating new feature branches
- Stashing and unstashing
- Fetching and pulling on feature branches

### If the user requests a different safety level

- **High safety**: Confirm before every push, commit, and branch operation
- **Low safety**: Only confirm merges to main/develop and force pushes

Always respect the user's preference if they state one. When unsure, default to confirming.

---

## 2. Branch Naming Conventions

### Format

```
<type>/<ticket-or-short-description>
```

### Types

| Type        | Purpose                          | Example                          |
|-------------|----------------------------------|----------------------------------|
| `feature/`  | New functionality                | `feature/user-auth`              |
| `fix/`      | Bug fix                          | `fix/login-redirect-loop`        |
| `hotfix/`   | Urgent production fix            | `hotfix/payment-crash`           |
| `chore/`    | Maintenance, deps, config        | `chore/upgrade-node-20`          |
| `docs/`     | Documentation only               | `docs/api-endpoint-guide`        |
| `refactor/` | Code restructuring, no behavior change | `refactor/extract-auth-module` |
| `test/`     | Adding or fixing tests           | `test/payment-edge-cases`        |
| `release/`  | Release preparation              | `release/v2.4.0`                 |

### Rules

- Use kebab-case (lowercase, hyphens)
- Keep it short but descriptive (3-5 words max after the type prefix)
- Include ticket number if available: `feature/PROJ-123-user-auth`
- Never work directly on `main` or `develop` — always branch

### Creating a Branch

```bash
# Always start from an up-to-date main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

---

## 3. Commit Messages — Gitmoji + Conventional Commits

### Format

```
<emoji> <type>(<scope>): <subject>

<body>          <- optional, wrap at 72 chars
<footer>        <- optional (breaking changes, ticket refs)
```

### The Golden Rules

1. **Subject line**: imperative mood, no period, max 72 chars total (including emoji)
2. **Body**: explain *why*, not *what* — the diff shows the what
3. **One logical change per commit** — if you say "and", split it
4. **Never commit generated files, secrets, or large binaries**

### Gitmoji + Type Reference

Read the full reference from `references/gitmoji-map.md` when composing commits. Here are the most common:

| Emoji | Type         | When to use                                    |
|-------|------------- |------------------------------------------------|
| ✨    | `feat`       | New feature                                    |
| 🐛    | `fix`        | Bug fix                                        |
| 📝    | `docs`       | Documentation changes                          |
| 💄    | `style`      | UI/style changes (not CSS-in-code formatting)  |
| ♻️    | `refactor`   | Code change that neither fixes nor adds        |
| ⚡    | `perf`       | Performance improvement                        |
| ✅    | `test`       | Adding or updating tests                       |
| 🔧    | `chore`      | Build process, tooling, config                 |
| 🚀    | `ci`         | CI/CD changes                                  |
| ⬆️    | `deps`       | Dependency upgrades                            |
| 🔒    | `security`   | Security fix or improvement                    |
| 🗑️    | `remove`     | Removing code or files                         |
| 🚨    | `breaking`   | Breaking change (also add `BREAKING CHANGE:` footer) |

### Examples

**Simple feature commit:**
```
✨ feat(auth): add JWT refresh token rotation

Tokens now rotate on each refresh request to prevent replay attacks.
Expired refresh tokens invalidate the entire token family.

Refs: PROJ-456
```

**Bug fix with context:**
```
🐛 fix(cart): prevent duplicate items on rapid double-click

The add-to-cart handler now debounces within 300ms.
Root cause was a missing loading state check before dispatch.
```

**Breaking change:**
```
🚨 feat(api)!: change pagination from offset to cursor-based

BREAKING CHANGE: All list endpoints now require `cursor` param instead
of `page`. Offset-based pagination is removed.

Migration guide: docs/migration/v3-pagination.md
```

### Composing Commits — Decision Process

Before committing, think:

1. `git diff --staged` — review what's staged. Does it represent ONE logical change?
2. If mixed concerns -> `git reset HEAD` and re-stage selectively with `git add -p`
3. Pick the emoji + type that best describes the *primary* intent
4. Write the subject: imperative, concise, specific
5. Need a body? Add it if the *why* isn't obvious from the subject alone

---

## 4. Feature Branch Workflow

### Starting a Feature

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### Working on the Feature

Make small, focused commits as you go. Each commit should compile/pass tests on its own.

### Keeping Up to Date

Prefer rebasing your feature branch onto main to keep a clean linear history:

```bash
git fetch origin
git rebase origin/main
```

If conflicts arise during rebase, resolve them file by file, then `git rebase --continue`.
If the rebase becomes too complex, `git rebase --abort` and discuss with the user.

**When to merge instead of rebase**: If the branch is shared with others or already has PRs
referencing specific commits, use merge to preserve the history.

### Before Opening a PR

Run this checklist:

1. Rebase onto latest main: `git fetch origin && git rebase origin/main`
2. Run tests (if applicable)
3. Review your own changes: `git diff main...HEAD`
4. Clean up commit history if needed: interactive rebase to squash WIP commits
5. Push: `git push origin feature/your-feature-name`

---

## 5. Pull Requests

### Creating a PR

Always use the `gh` CLI. Confirm with the user before creating.

```bash
gh pr create \
  --title "✨ feat(auth): add JWT refresh token rotation" \
  --body "$(cat <<'EOF'
## Summary
- Implemented JWT refresh token rotation for enhanced security
- Added token family tracking to prevent replay attacks

## Changes
- `src/auth/token.service.ts` — rotation logic
- `src/auth/token.guard.ts` — family validation
- `tests/auth/token.spec.ts` — new test cases

## Test Plan
- [ ] Unit tests pass
- [ ] Manual test: login -> wait for token expiry -> verify auto-refresh
- [ ] Verify old refresh tokens are invalidated after rotation

## Related
Closes #456
EOF
)"
```

### PR Title Convention

Mirror the commit message format: `<emoji> <type>(<scope>): <description>`

If the PR contains multiple commits, the title should summarize the overall change.

### PR Body Template

```markdown
## Summary
<1-3 bullet points: what and why>

## Changes
<Key files changed and what was done>

## Test Plan
<How to verify this works — automated and/or manual steps>

## Related
<Issue refs, related PRs, docs>
```

### Reviewing PRs

When asked to review a PR:

```bash
gh pr view <number>
gh pr diff <number>
gh pr checks <number>
```

Look for: correctness, test coverage, naming clarity, potential edge cases, and adherence
to the project's conventions.

---

## 6. Merging to Main

**This always requires human confirmation.** Never auto-merge to main/develop.

### Pre-Merge Checklist

Present this to the user before merging:

```
Ready to merge to main:
  Branch: feature/your-feature-name
  PR: #123
  Checks: All passing (or list failures)
  Conflicts: None (or list them)
  Strategy: Squash and merge (recommended for feature branches)

Proceed? [Confirm required]
```

### Merge Strategies

| Strategy       | When to use                                              |
|----------------|----------------------------------------------------------|
| **Squash**     | Feature branches — collapses into one clean commit       |
| **Merge commit** | Release branches or when preserving granular history matters |
| **Rebase**     | Small, clean branches where every commit should be on main |

Default to **squash and merge** for feature branches via:
```bash
gh pr merge <number> --squash --delete-branch
```

The `--delete-branch` flag cleans up the remote branch after merge. Always clean up.

---

## 7. Worktrees

Worktrees let you work on multiple branches simultaneously without stashing or switching.

### When to Use Worktrees

- Reviewing a PR while your feature branch has uncommitted work
- Running tests on main while developing on a feature branch
- Comparing behavior between branches side by side
- Hotfixing production while mid-feature

### Creating a Worktree

```bash
# Create a worktree for an existing branch
git worktree add ../project-hotfix hotfix/payment-crash

# Create a worktree with a new branch
git worktree add -b fix/urgent-bug ../project-urgent-fix main
```

### Managing Worktrees

```bash
# List all worktrees
git worktree list

# Remove when done (clean up!)
git worktree remove ../project-hotfix
```

### Rules

- Keep worktrees in a sibling directory (not inside the repo)
- Always clean up worktrees when done — they're temporary
- Don't forget which worktree you're in: check `pwd` before committing

---

## 8. Tagging & Releases

### Semantic Versioning

```
v<MAJOR>.<MINOR>.<PATCH>
```

- **MAJOR**: breaking changes (commits with breaking type)
- **MINOR**: new features (feat commits), backward compatible
- **PATCH**: bug fixes (fix commits), backward compatible

### Automated Releases (Recommended)

Use the bundled `scripts/release.sh` for smart, automated releases. It reads your
Gitmoji + Conventional Commits since the last tag, auto-determines the semver bump,
generates a grouped changelog, and creates a GitHub Release — all with a single command.

```bash
# Auto-detect version bump from commits (asks for confirmation before creating)
./scripts/release.sh

# Preview without creating anything
./scripts/release.sh --dry-run

# Force a specific bump
./scripts/release.sh --minor
./scripts/release.sh --major

# Pre-release
./scripts/release.sh --pre beta    # -> v1.3.0-beta.1
```

The script will: parse all commits since the last tag, group them by type (Features,
Fixes, Performance, etc.), determine the correct semver bump, show a full preview,
ask for confirmation, then create the tag + GitHub Release with the grouped changelog.

### Manual Tagging (When Needed)

```bash
git tag -a v1.2.0 -m "Release v1.2.0 — user auth overhaul"
git push origin v1.2.0
```

Always confirm with the user before tagging or releasing.

---

## 9. Repository Hygiene

### Stale Branch Cleanup

Periodically list and prune merged branches:

```bash
# Show merged branches (safe to delete)
git branch --merged main | grep -v "main\|develop\|\*"

# Prune remote tracking branches that no longer exist
git fetch --prune
```

Confirm with the user before deleting branches.

### .gitignore Best Practices

Ensure the repo has a `.gitignore` that covers:
- OS files (`.DS_Store`, `Thumbs.db`)
- IDE files (`.idea/`, `.vscode/` unless shared settings)
- Dependencies (`node_modules/`, `venv/`, `vendor/`)
- Build outputs (`dist/`, `build/`, `*.pyc`)
- Environment files (`.env`, `.env.local`)
- Secrets (keys, tokens, certificates)

### Pre-Commit Checks

Before committing, always verify:

1. No secrets in staged files: `git diff --staged | grep -iE "(api_key|secret|password|token)"`
2. No large binary files accidentally staged
3. Files are properly formatted (if project has formatters)

---

## 10. Dangerous Operations — Extra Caution

These operations rewrite history or are destructive. Always confirm with the user AND
explain what will happen.

| Operation                | Risk Level | When It's OK                           |
|--------------------------|------------|----------------------------------------|
| `git push --force`       | High       | Almost never. Use `--force-with-lease`  |
| `git push --force-with-lease` | Medium | After rebase on YOUR branch only  |
| `git reset --hard`       | High       | Only on local unpushed work             |
| `git rebase -i` (on shared branch) | High | Don't. Rebase only your own branches |
| `git clean -fd`          | Medium     | After confirming no untracked files needed |

### Force Push Safety

If a force push is truly needed:

```bash
# NEVER this:
git push --force

# ALWAYS this (prevents overwriting someone else's work):
git push --force-with-lease
```

---

## 11. Common Workflows — Quick Reference

### "I need to undo my last commit"

```bash
# Keep changes staged:
git reset --soft HEAD~1

# Keep changes unstaged:
git reset HEAD~1

# Discard everything (CONFIRM WITH USER):
git reset --hard HEAD~1
```

### "I committed to the wrong branch"

```bash
# Save the commit hash
git log --oneline -1

# Move to correct branch
git checkout correct-branch
git cherry-pick <hash>

# Remove from wrong branch
git checkout wrong-branch
git reset --soft HEAD~1
git stash
```

### "I need to update my PR with latest main"

```bash
git fetch origin
git rebase origin/main
# Fix any conflicts
git push --force-with-lease
```

### "I need to split a PR that got too big"

1. Create a new branch from main
2. Cherry-pick the relevant commits
3. Open a new PR with the subset
4. Remove those commits from the original branch via interactive rebase

---

## 12. Git Config Recommendations

Suggest these to the user for a better git experience (but never apply without asking):

```bash
# Better diff algorithm
git config --global diff.algorithm histogram

# Auto-prune on fetch
git config --global fetch.prune true

# Rebase by default on pull
git config --global pull.rebase true

# Sign commits (if GPG is set up)
git config --global commit.gpgsign true

# Default branch name
git config --global init.defaultBranch main
```

---

## Skill Behavior Summary

When the user asks you to do something git-related:

1. **Orient**: Run `git status`, `git log --oneline -5`, check current branch
2. **Plan**: Identify what operations are needed
3. **Confirm** (if required by safety level): Present the plan, wait for approval
4. **Execute**: Run commands, compose proper commit messages
5. **Verify**: Show the result (`git log`, `git status`, PR URL)
6. **Clean up**: Prune merged branches, remove worktrees if temporary

Always prioritize: **safety > clarity > speed**
