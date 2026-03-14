---
description: "Search, filter, and paste previously generated Etch components"
allowed-tools: Read, Bash(ls:*,cat:*), Glob, Grep
argument-hint: "[search-term] [--type <type>] [--tag <tag>] [--paste <component-name>]"
---

# /library

Browse and retrieve previously generated Etch components from the component registry. Read-only — this command never modifies files or the registry.

## Purpose

The `/library` command provides read-only access to the component registry at `.etch-components/registry.json`. It enables developers to discover, search, filter, and paste previously generated components without regenerating them. By reading from the registry rather than scanning the filesystem, it returns rich metadata (description, type, tags, ACSS tokens used) instantly.

**Arguments:**
- `$ARGUMENTS` — parsed as `[search-term] [flags]`
- No arguments: list all components in the registry with name, type, description, and creation date
- `search-term`: filter components by name or description (case-insensitive substring match)
- `--type <type>`: filter by component type (`section`, `card`, `form`, `nav`, `footer`, `hero`, `custom`)
- `--tag <tag>`: filter by tag
- `--paste <component-name>`: output the full HTML, CSS, and JS for a named component as a ready-to-paste block

## Pipeline

### Step 1 — Read Registry

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/persistence/SKILL.md`
2. Initialize `.etch-components/` if it does not exist (follow the persistence skill's Initialization flow)
3. Read `.etch-components/registry.json` and parse the JSON content
4. If the JSON is malformed, report: "`.etch-components/registry.json` appears to be corrupted. Please review or delete it and re-run the command to reinitialize." and stop.
5. If the `components` array is empty, display: "No components in the library yet. Use `/generate` to create your first component." and stop.

### Step 2 — Parse Arguments

Parse `$ARGUMENTS` to determine the operation mode and extract filters:

1. If `$ARGUMENTS` is empty → mode is **list-all**
2. If `$ARGUMENTS` contains `--paste <name>` → mode is **paste**. Extract the component name from the `--paste` flag value. If mode is paste, skip Steps 3-4 and proceed to Step 5.
3. If `$ARGUMENTS` contains `--type <type>`:
   - Extract the type value
   - Validate it against the type enum: `section`, `card`, `form`, `nav`, `footer`, `hero`, `custom`
   - If the type value is not in the enum, display: "Invalid type '{value}'. Valid types: section, card, form, nav, footer, hero, custom" and stop.
   - Any remaining non-flag text becomes the search term
4. If `$ARGUMENTS` contains `--tag <tag>`:
   - Extract the tag value
   - Any remaining non-flag text becomes the search term
5. If `$ARGUMENTS` is a plain string with no flags → mode is **search**, the entire string is the search term

**Note:** Search term, `--type`, and `--tag` can all be combined in a single invocation. When combined, apply intersection logic — all conditions must match for a component to be included.

### Step 3 — Filter Components

Filter the `components` array based on the parsed mode from Step 2:

**List all:** Use the full `components` array unfiltered.

**Search:** Filter where `name` OR `description` contains the search term as a case-insensitive substring match.

**Filter by type:** Filter where `type` equals the provided type value (case-insensitive comparison).

**Filter by tag:** Filter where `tags` array contains an entry matching the provided tag (case-insensitive comparison).

**Combined:** Apply all active filters as an intersection — a component must match ALL provided criteria (search term AND type AND tag, whichever are present).

After filtering, if no components match, display: "No components match your search." and stop.

### Step 4 — Display Results

If the mode was search or filter (not list-all), display a context line above the table describing the active filters. Examples:
- "Showing results for: 'hero'" (search term only)
- "Showing results for: type = hero" (type filter only)
- "Showing results for: tag = interactive" (tag filter only)
- "Showing results for: 'pricing' + type = section" (search + type combined)
- "Showing results for: 'pricing' + type = section + tag = interactive" (all three combined)

Format the filtered components as a markdown table with these columns:

| Name | Type | Description | Has JS | Created |
|------|------|-------------|--------|---------|

Column formatting rules:
- **Name:** The component's `name` field as-is (kebab-case)
- **Type:** The component's `type` field
- **Description:** The component's `description` field, truncated to 50 characters with "..." appended if longer than 50 characters
- **Has JS:** "Yes" if `hasJs` is `true`, "No" if `false`
- **Created:** The `createdAt` field formatted as date only (YYYY-MM-DD), not the full ISO timestamp

After the table, display the count: "**{N} component(s) found.**"

### Step 5 — Paste Component (--paste mode)

When Step 2 determined the mode is **paste**:

1. Search the `components` array for an entry where `name` matches the provided component name (exact match, case-insensitive).
2. If no matching component is found, display: "Component '{name}' not found in the registry. Run `/library` to see available components." and stop.
3. Read the file at the path stored in `files.html`. If the file does not exist at that path, display: "File missing: {files.html}. The component files may have been moved or deleted. Use `/generate {name}` to regenerate." and stop.
4. Read the file at the path stored in `files.css`. If the file does not exist at that path, display: "File missing: {files.css}. The component files may have been moved or deleted. Use `/generate {name}` to regenerate." and stop.
5. If `hasJs` is `true`, read the file at the path stored in `files.js`. If the file does not exist at that path, display: "File missing: {files.js}. The component files may have been moved or deleted. Use `/generate {name}` to regenerate." and stop.
6. Output the content in this exact format:

```
### {files.html}

\`\`\`html
{html file content}
\`\`\`

### {files.css}

\`\`\`css
{css file content}
\`\`\`
```

7. If `hasJs` is `true`, also output:

```
### {files.js}

\`\`\`javascript
{js file content}
\`\`\`
```

8. After the code blocks, display: "Paste each block into the corresponding Etch panel (HTML, CSS, JS)."

## Notes

- This command is **read-only**. It never modifies files or the registry.
- Component file paths in the registry are relative to the project root.
- Use `/generate` to create new components or overwrite existing ones.
