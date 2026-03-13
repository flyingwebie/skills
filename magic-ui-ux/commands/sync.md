---
description: "Reconcile local state with Stitch project — detect drift, sync screens"
allowed-tools: Read, Write, Edit, Bash(ls:*,cat:*,mkdir:*), mcp__stitch__list_screens, mcp__stitch__get_screen, mcp__stitch__get_project
argument-hint: "[--fix]"
---

# /magic-ui-ux:sync

Reconcile the local `.ui-ux/state.json` with the actual Stitch project state. Detects screens added or deleted in the Stitch web UI, reports drift, and offers reconciliation.

---

## Pre-Flight Check

1. **Check `.ui-ux/` exists.**
   - If not: "Run `/magic-ui-ux:branding` first. No project state to sync."

2. **Read `.ui-ux/state.json`** and verify:
   - `stitch.projectId` exists and is non-empty
   - If no `stitch.projectId`: "No Stitch project linked. Run `/magic-ui-ux:design` to create one first."

---

## Sync Process

### Step 1: Fetch Remote State

1. **Call `mcp__stitch__get_project`** with the `projectId` from `state.json.stitch.projectId`
   - Verify the project is accessible. If not, report: "Stitch project {projectId} is not accessible. Check your Stitch MCP connection."
2. **Call `mcp__stitch__list_screens`** with the `projectId`
   - Capture the full list of remote screen IDs

### Step 2: Compare States

Build two lists:

| Category | Description |
|----------|-------------|
| **Local-only** | Screens in `state.json.screens[]` whose `stitchScreenId` is NOT in the remote list |
| **Remote-only** | Screens in the remote list that have no matching `stitchScreenId` in `state.json.screens[]` |
| **Synced** | Screens present in both local and remote |

### Step 3: Report Drift

Present a drift report:

```
Sync Report

| Status | Count |
|--------|-------|
| Synced | {n} screens match |
| Local-only | {n} screens exist locally but not in Stitch |
| Remote-only | {n} screens exist in Stitch but not locally |

Stitch Project: {projectUrl}
```

**If no drift detected:**
> All {n} screens are in sync. No action needed.

**If drift detected, list details:**

```
Local-only screens (may have been deleted in Stitch):
- {screen.id} (stitchScreenId: {id}) — page: {page}

Remote-only screens (added in Stitch web UI):
- stitchScreenId: {id} — not tracked locally
```

### Step 4: Reconciliation

**If `--fix` flag provided**, auto-reconcile:

1. **Local-only screens:** Mark them in `state.json` with `"syncStatus": "stale"` (do NOT delete — user may want to re-generate)
2. **Remote-only screens:** For each, call `mcp__stitch__get_screen` to fetch metadata, then add a new screen entry:
   ```json
   {
     "id": "imported-{stitchScreenId}",
     "page": "unassigned",
     "variant": 0,
     "createdAt": "{ISO timestamp}",
     "stitchScreenId": "{remote_screen_id}",
     "syncStatus": "imported"
   }
   ```
3. **Update `state.json.updatedAt`** with current ISO timestamp

**If no `--fix` flag**, just report drift and suggest:
> Run `/magic-ui-ux:sync --fix` to reconcile, or manually update state.json.

---

## Output

After sync completes:

```
Sync Complete

| Metric | Value |
|--------|-------|
| Synced | {n} |
| Stale (local-only) | {n} marked |
| Imported (remote-only) | {n} added |
| Project | {projectUrl} |

Next steps:
- Assign imported screens to pages: edit state.json "page" field
- Re-generate stale screens: /design {page}
- Run /sync again to verify
```

---

## Error Handling

### Stitch MCP Not Connected

If `list_screens` or `get_project` is not available:

> **Google Stitch MCP must be connected for sync.**
> Connect the Stitch MCP server and retry. Your local state is unchanged.

### Project Not Found

If `get_project` returns an error for the stored `projectId`:

> **Stitch project {projectId} not found.** It may have been deleted.
> Options: create a new project with `/design`, or update `state.json.stitch.projectId` manually.
