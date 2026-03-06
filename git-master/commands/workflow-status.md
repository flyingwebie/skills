---
description: "Show current git state at a glance"
allowed-tools: Bash
argument-hint: ""
---

You are running the **git-master:workflow-status** command — comprehensive git state overview.

## Execute

Run these commands to gather the full picture:

1. **Current branch and status**:
   ```bash
   git branch --show-current && git status --short
   ```

2. **Recent commits**:
   ```bash
   git log --oneline --graph --decorate -10
   ```

3. **Branch list with last commit dates**:
   ```bash
   git for-each-ref --sort=-committerdate --format='%(refname:short)|%(committerdate:relative)|%(subject)' refs/heads/ | head -10 | column -t -s'|'
   ```

4. **Remote sync status**:
   ```bash
   git fetch --dry-run 2>&1 || true
   git rev-list --left-right --count HEAD...@{upstream} 2>/dev/null || echo "No upstream set"
   ```

5. **Stash list** (if any):
   ```bash
   git stash list 2>/dev/null | head -5
   ```

6. **Latest tags**:
   ```bash
   git tag --sort=-v:refname | head -5
   ```

## Present

Format the output as a clear status report:

```
Git Workflow Status
===================
Branch:     <current-branch>
Status:     <clean / N files modified / N staged>
Upstream:   <ahead N / behind N / up to date / no upstream>
Last commit: <hash> <message> (<time>)

Recent branches:
  <branch> — <last commit time> — <subject>
  ...

Stashes: <count or "none">
Latest tag: <tag or "none">
```

Suggest next actions based on the state (e.g., "You have uncommitted changes — consider committing or stashing").
