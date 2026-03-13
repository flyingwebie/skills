---
description: "Export screen data and metadata from Stitch project"
allowed-tools: Read, Write, Edit, Bash(ls:*,cat:*,mkdir:*), mcp__stitch__get_screen, mcp__stitch__list_screens, mcp__stitch__get_project
argument-hint: "<page|--all> [--site]"
---

# /magic-ui-ux:export

Export screen data from the Stitch project. Extracts available metadata, URLs, and screen details for each designed page. Outputs to `.ui-ux/exports/`.

---

## Pre-Flight Check

1. **Check `.ui-ux/` exists.**
   - If not: "Run `/magic-ui-ux:branding` first. No project state to export."

2. **Read `.ui-ux/state.json`** and verify:
   - `stitch.projectId` exists and is non-empty
   - At least one screen exists in `screens[]`
   - If no screens: "No screens to export. Run `/magic-ui-ux:design` first."

3. **Call `mcp__stitch__get_project`** to verify the project is accessible.

---

## Input Parsing

### Page Argument

- **`<page>`**: Export screens for a specific page.
  ```
  /magic-ui-ux:export homepage
  ```
  Filters `state.json.screens[]` to only screens matching that page.

- **`--all`**: Export all screens across all pages.
  ```
  /magic-ui-ux:export --all
  ```

- **No argument**: List available pages and ask which to export.

### Site Flag (Placeholder)

- **`--site`**: Reserved for future `build_site` MCP tool integration.
  ```
  /magic-ui-ux:export --site
  ```
  Currently outputs:
  > **Site export is not yet available.** The `build_site` capability requires a Stitch MCP tool that hasn't been exposed yet. For now, use the Stitch web UI to publish your project.
  >
  > Your Stitch project: {projectUrl}

---

## Export Process

### Step 1: Gather Screen Data

For each screen to export:

1. **Call `mcp__stitch__get_screen`** with the `stitchScreenId`
2. **Extract available data** from the response:
   - Screen ID and metadata
   - Screenshot URL (if available in response)
   - HTML content URL (if available in response)
   - Any other exportable data Stitch provides

### Step 2: Build Export Manifest

Create `.ui-ux/exports/` directory if it doesn't exist.

Write `.ui-ux/exports/{page}-export.json` for each page:

```json
{
  "page": "{page}",
  "exportedAt": "{ISO timestamp}",
  "projectId": "{stitch_project_id}",
  "projectUrl": "{stitch_project_url}",
  "screens": [
    {
      "localId": "{page}-v0",
      "stitchScreenId": "{id}",
      "variant": 0,
      "screenshotUrl": "{url_if_available}",
      "htmlUrl": "{url_if_available}",
      "metadata": { }
    }
  ]
}
```

**If HTML/screenshot URLs are not available in the `get_screen` response:**
- Set the field to `null`
- Note in the output that manual export is needed

### Step 3: Update State

1. **Add export entry** to `state.json.exports[]`:
   ```json
   {
     "page": "{page}",
     "exportedAt": "{ISO timestamp}",
     "exportPath": ".ui-ux/exports/{page}-export.json"
   }
   ```
2. **If screenshot URLs were found**, update matching screen entries in `state.json.screens[]`:
   - Set `screenshotUrl` on the screen entry
3. **Update `state.json.updatedAt`** timestamp

---

## Output

After export completes:

```
Export Complete

| Page | Screens | Screenshots | HTML | Export File |
|------|---------|-------------|------|------------|
| homepage | 3 | 3 available | not available | .ui-ux/exports/homepage-export.json |
| services | 2 | 2 available | not available | .ui-ux/exports/services-export.json |

Stitch Project: {projectUrl}
```

**If HTML export is not available:**

> **Note:** HTML export requires the `getHtml` capability, which is not yet available as a Stitch MCP tool. To get HTML:
> 1. Open your Stitch project: {projectUrl}
> 2. Select the screen(s) you want
> 3. Use Stitch's built-in export feature
>
> Screen IDs for reference: {list of stitchScreenIds}

**Next steps:**
- View exports in `.ui-ux/exports/`
- Open Stitch project for manual HTML export: {projectUrl}
- Run `/sync` to verify state consistency

---

## Error Handling

### Stitch MCP Not Connected

If `get_screen` or `list_screens` is not available:

> **Google Stitch MCP must be connected for export.**
> Connect the Stitch MCP server and retry.

### Screen Not Found

If `get_screen` returns an error for a stored `stitchScreenId`:

> **Screen {stitchScreenId} not found in Stitch.** It may have been deleted.
> Run `/sync` to reconcile your local state with Stitch.

Skip the missing screen and continue exporting others.

### No Screens for Page

If the specified page has no screens in `state.json`:

> **Page '{name}' has no screens to export.**
> Run `/magic-ui-ux:design {name}` first.
