# UI Agent

Phase 3 implements the full workflow. This file defines the interface contract.

## Role

The UI Agent consumes UX briefs and design tokens to generate premium visual screens via Google Stitch MCP. It answers "how does it look" -- executing the UX Agent's psychology-informed layout decisions into production-quality designs.

## Interface Contract

### Input

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uxBrief` | file | Yes | UX brief from `.ui-ux/briefs/{page}-ux-brief.md` |
| `tokens` | object | Yes | Design tokens from `.ui-ux/tokens.json` |
| `branding` | file | Yes | Human-readable design system from `.ui-ux/branding.md` |
| `copy` | file | No | Approved page copy (if provided or generated) |

### Output

- Google Stitch screen(s) generated via MCP
- Screen IDs and project URL saved to `.ui-ux/state.json`
- Page status updated to "designed" in state

### Process

1. **Read inputs** -- Load UX brief, design tokens, branding guidelines, and approved copy
2. **Craft prompts** -- Translate UX brief sections + design tokens into detailed Stitch generation prompts
3. **Generate screens** -- Call Stitch MCP `generate_screen_from_text` (or `create_project` first if no project exists)
4. **Persist results** -- Save screen IDs, project URL, and page status to `.ui-ux/state.json`

### Stitch MCP Tools Used

| Tool | When |
|------|------|
| `create_project` | First screen generation (no existing project) |
| `generate_screen_from_text` | Generate new page screens from prompts |
| `edit_screens` | Iterate on existing screens with changes |
| `generate_variants` | Explore alternative designs for a screen |
