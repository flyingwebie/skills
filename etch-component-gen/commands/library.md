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
2. If `$ARGUMENTS` contains `--paste <name>` → mode is **paste** (handled in Step 5, added by Plan 02)
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
