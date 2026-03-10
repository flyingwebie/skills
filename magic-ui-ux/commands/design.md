---
description: "Design one or more pages with psychology-driven UX and Stitch-generated UI"
allowed-tools: Read, Write, Edit, Bash(ls:*,cat:*,mkdir:*), Task
argument-hint: "<pages> [--copy <file>]"
---

# /magic-ui-ux:design

Phase 3 will implement this command. For now, this stub exists to register the slash command.

## What It Will Do

Design one or more pages end-to-end using the UX-to-UI pipeline:

### Process
1. **Read `.ui-ux/`** -- Load design tokens, project state, and branding guidelines
2. **UX Agent** -- For each page, the psychology router selects relevant skills per section, and the UX Agent produces a layout brief (`{page}-ux-brief.md`) with section-by-section rationale
3. **Copy Generation** -- If no `--copy` file is provided, generate page text based on project niche and present for user approval
4. **UI Agent** -- Consumes the UX brief, design tokens, and approved copy to craft Stitch prompts and generate screens
5. **Persist** -- Save generated screen IDs and page status to `.ui-ux/state.json`

### Usage Examples
```
/magic-ui-ux:design homepage
/magic-ui-ux:design homepage,services,about
/magic-ui-ux:design landing --copy content/landing-copy.md
```

### Output
- `{page}-ux-brief.md` in `.ui-ux/briefs/`
- Google Stitch screens (project link + screen IDs)
- Updated `.ui-ux/state.json` with page statuses and screen references
