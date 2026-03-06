---
description: "Create or review pull requests via gh CLI"
allowed-tools: Bash, Read, Grep, Glob
argument-hint: "[create|review] [pr-number]"
---

You are running the **git-master:pr** command — create or review pull requests.

## Setup
1. Read PR conventions: @${CLAUDE_PLUGIN_ROOT}/skills/git-workflow/SKILL.md (sections 5 and 6)

## Orient
1. Run `git status` and `git branch --show-current`
2. Check if `gh` CLI is available: `gh --version`
3. If creating: run `git log --oneline main..HEAD` to see commits for this PR

## Arguments
- `$ARGUMENTS`
- `create` (default if no PR number): create a new PR from current branch
- `review <pr-number>`: review an existing PR
- Just a PR number: review that PR

## Execute — Create Mode
1. Ensure the branch is pushed: `git push -u origin $(git branch --show-current)` if needed
2. Analyze all commits since branching from main: `git log --oneline main..HEAD`
3. Also check `git diff main...HEAD --stat` for a file summary
4. Draft a PR title using Gitmoji + Conventional Commits format
5. Draft the PR body using the template:
   ```
   ## Summary
   <1-3 bullet points>

   ## Changes
   <Key files changed>

   ## Test Plan
   <How to verify>

   ## Related
   <Issue refs>
   ```
6. Confirm title and body with the user before creating
7. Create via `gh pr create --title "..." --body "$(cat <<'EOF' ... EOF)"`
8. Return the PR URL

## Execute — Review Mode
1. `gh pr view <number>` — read the PR description
2. `gh pr diff <number>` — review the code changes
3. `gh pr checks <number>` — check CI status
4. Provide a review summary: correctness, test coverage, naming, edge cases, convention adherence

## Verify
- For create: show the PR URL and status
- For review: summarize findings and recommend approve/request-changes
