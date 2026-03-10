---
name: persistence
description: >
  Manages the .ui-ux/ persistence folder. Handles initialization, reading, and writing
  of design tokens, project state, and screen references. Every command MUST read from
  .ui-ux/ before any design operation.
---

# Persistence Skill

## Purpose

`.ui-ux/` is the **single source of truth** for all design operations. It persists design tokens (JSON), screen IDs, project state, branding guidelines, and UX briefs across sessions. Every command reads from it before generating, and writes back after completing.

## Folder Structure

```
.ui-ux/
  tokens.json        # Design system tokens (colors, typography, spacing, patterns)
  state.json         # Project state (screens, pages, Stitch IDs, status)
  branding.md        # Human-readable design system description
  briefs/            # UX briefs per page ({page}-ux-brief.md)
  references/        # Reference screenshots and assets
```

## Initialization (First Use)

When `.ui-ux/` does not exist, initialize it:

1. Create the directory structure:
   ```bash
   mkdir -p .ui-ux/briefs .ui-ux/references
   ```

2. Create `state.json` with initial values:
   ```json
   {
     "projectName": "<ask user>",
     "niche": "<ask user>",
     "createdAt": "<ISO 8601 timestamp>",
     "updatedAt": "<ISO 8601 timestamp>",
     "screens": [],
     "pages": [],
     "brandingComplete": false,
     "animationSpecs": []
   }
   ```

3. Do **NOT** create `tokens.json` yet -- that comes from the `/branding` command (Phase 2).

4. Do **NOT** create `branding.md` yet -- that also comes from `/branding`.

## Reading (Before Every Design Operation)

Before any design command executes:

1. **Check** `.ui-ux/` exists. If not, run initialization (above).
2. **Read** `state.json` for current project status (pages designed, screens generated, branding state).
3. **Read** `tokens.json` if it exists (indicates branding is complete -- design tokens are available).
4. **Read** `branding.md` if it exists (human-readable design system for context).

If `tokens.json` does not exist and the command requires design tokens (e.g., `/design`), prompt the user to run `/branding` first.

## Writing (After Design Operations)

After any design command completes:

1. **Update** `state.json` with new screen IDs, page statuses, and `updatedAt` timestamp.
2. **Never** overwrite `tokens.json` during design operations -- only `/branding` writes tokens.
3. **Save** UX briefs to `briefs/{page}-ux-brief.md`.
4. **Save** reference screenshots to `references/` when reverse-engineering designs.

## Schema References

Design tokens and project state are validated against JSON Schema (draft-07):

- **tokens.json**: See `schemas/tokens.json` -- defines colors (primary, secondary, CTA, background, text, semantic), typography (heading, body, accent with Google Fonts), spacing, UI style, industry, and component patterns.
- **state.json**: See `schemas/state.json` -- defines project name, niche, timestamps, Stitch project reference, screens array, pages array with status tracking, branding completion flag, and animation specs.

## Key Rule

> "Always read `.ui-ux/` before generating. Never design blind."
