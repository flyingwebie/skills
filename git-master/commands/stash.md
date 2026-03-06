---
description: "Smart stash management: save, list, apply, pop"
allowed-tools: Bash, Read
argument-hint: "[save|list|apply|pop] [message]"
---

You are running the **git-master:stash** command — manage your git stash.

## Orient
1. Run `git status --short` to see current changes
2. Run `git stash list` to see existing stashes

## Arguments
- `$ARGUMENTS`
- `save [message]` (default if changes exist): stash current changes with a descriptive message
- `list`: show all stashes with details
- `apply [index]`: apply a stash without removing it (default: latest)
- `pop [index]`: apply and remove a stash (default: latest)
- No arguments: auto-detect — save if dirty, list if clean

## Execute

### Save
1. Check there are changes to stash: `git status --short`
2. If no changes, inform user there's nothing to stash
3. Stash with a descriptive message:
   ```bash
   git stash push -m "<message or auto-generated from changes>"
   ```
4. If no message provided, auto-generate from the changed files (e.g., "WIP: auth module changes")

### List
1. Show stashes with full details:
   ```bash
   git stash list --format='%gd | %cr | %gs'
   ```
2. If user wants to see what's in a specific stash: `git stash show -p stash@{N}`

### Apply / Pop
1. If an index is specified, use `stash@{N}`; otherwise use the latest
2. Show what will be applied: `git stash show stash@{N}`
3. Apply or pop:
   ```bash
   git stash apply stash@{N}   # or git stash pop stash@{N}
   ```
4. If conflicts occur during apply, help resolve them

## Verify
- `git status --short` — show the result
- `git stash list` — show remaining stashes
