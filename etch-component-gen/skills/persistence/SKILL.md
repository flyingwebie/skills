---
name: persistence
description: >
  Manages .etch-components/ folder and registry.json. Handles initialization, reading,
  writing, and updating component metadata. Every command reads the registry before
  operating and writes back after completing.
---

# Persistence Skill

Manages the `.etch-components/` folder at the project root. All cross-session state — component catalog, page compositions, project configuration — lives here.

## Folder Structure

```
.etch-components/
  registry.json              # Master catalog of all generated components and pages
  config.json                # Project-level ACSS token overrides (optional, future use)
```

**Location:** Project root — wherever the user runs Claude Code from. This is NOT the plugin directory. If the user runs Claude Code from `/Users/jane/projects/client-site/`, the persistence folder is at `/Users/jane/projects/client-site/.etch-components/`.

## Initialization (First Use)

When a command is about to read the registry, check whether `.etch-components/` exists:

1. **Check for folder existence:**
   ```bash
   ls .etch-components/
   ```
   If the directory exists and `registry.json` is present, proceed to Read Registry.

2. **If `.etch-components/` does not exist, create it:**
   ```bash
   mkdir -p .etch-components
   ```

3. **Seed `registry.json` with an empty structure:**
   ```json
   {
     "projectName": "",
     "createdAt": "<current ISO 8601 datetime>",
     "updatedAt": "<current ISO 8601 datetime>",
     "components": [],
     "pages": []
   }
   ```
   Write this file to `.etch-components/registry.json`.

4. **Inform the user:**
   > "Created `.etch-components/` with an empty registry. All generated components will be tracked here."

## Read Registry

To read the current registry state:

1. Read `.etch-components/registry.json`
2. Parse the JSON content
3. Store the parsed object in memory for the current operation

If the file is missing (directory exists but registry.json does not), re-seed as per the Initialization section above.

If the JSON is malformed, report: "`.etch-components/registry.json` appears to be corrupted. Please review or delete it and re-run the command to reinitialize."

## Write Registry

After any operation that modifies the registry:

1. Update the `updatedAt` field to the current ISO 8601 datetime
2. Validate the updated object against the schema at `@${CLAUDE_PLUGIN_ROOT}/skills/persistence/schemas/registry.json`
3. Write the updated object back to `.etch-components/registry.json` with 2-space indentation

## Register Component

When a component has been successfully generated, add an entry to the `components` array:

```json
{
  "name": "pricing-table",
  "description": "3-tier pricing section with monthly/annual toggle",
  "type": "section",
  "tags": ["pricing", "toggle", "interactive"],
  "files": {
    "html": "components/pricing-table/index.html",
    "css": "components/pricing-table/style.css",
    "js": "components/pricing-table/script.js"
  },
  "hasJs": true,
  "variants": [],
  "acssTokensUsed": ["--primary", "--action", "--space-m", "--text-l"],
  "createdAt": "<current ISO 8601 datetime>"
}
```

**Field rules:**
- `name`: kebab-case, matches the component folder name
- `description`: the natural language description used during generation
- `type`: one of `section`, `card`, `form`, `nav`, `footer`, `hero`, `custom`
- `tags`: array of descriptive tags derived from the description and component type
- `files.js`: set to the JS file path if `hasJs` is true, `null` if false
- `hasJs`: `true` if JS was generated, `false` if `--no-js` was used
- `variants`: empty array on initial creation; populated when `/generate` is run with variant flags
- `acssTokensUsed`: list of ACSS custom property names referenced in the generated CSS and HTML

After adding the entry, follow the Write Registry procedure above.

## Check Existing Component

Before generating a component, check whether a component with the same name already exists:

1. Read the registry (see Read Registry above)
2. Search the `components` array for an entry with `name` matching the requested component name (case-insensitive, after normalizing to kebab-case)
3. If a match is found:
   - Warn the user: "A component named `{name}` already exists (created {createdAt}). Generating will overwrite the existing files."
   - Ask for confirmation before proceeding
4. If no match is found, proceed with generation

## Register Page

When a page has been successfully composed (via future `/page` command), add an entry to the `pages` array:

```json
{
  "name": "homepage",
  "sections": ["hero-split", "features-grid", "pricing-table", "testimonials", "cta"],
  "createdAt": "<current ISO 8601 datetime>"
}
```

After adding the entry, follow the Write Registry procedure above.

## Schema

The registry is validated against the JSON Schema at:
`@${CLAUDE_PLUGIN_ROOT}/skills/persistence/schemas/registry.json`

This schema enforces: required top-level fields, component entry shape (name pattern, type enum, files object), and page entry shape.
