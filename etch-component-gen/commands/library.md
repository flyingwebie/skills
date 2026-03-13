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

## Operations

**List all:**
Read `.etch-components/registry.json`. Format components as a table with columns: Name, Type, Description, Tags, Has JS, Created. Show total component count.

**Search by name/description:**
Filter registry `components` array where `name` or `description` contains the search term (case-insensitive). Display matching components as a table. Show match count.

**Filter by type or tag:**
Filter registry `components` array by `type` or `tags` field. Display matching components as a table.

**Paste a component:**
Look up the component in the registry by exact name. Read the files at the paths stored in the `files` field (`html`, `css`, `js`). Output each file's content in a labeled code block:
```
### components/pricing-table/index.html
[html content]

### components/pricing-table/style.css
[css content]

### components/pricing-table/script.js
[js content — if hasJs is true]
```

## Not Yet Implemented

This command is a **Phase 4 deliverable**. The operation definitions above describe the intent. Phase 4 will add:
- Full registry read and formatting logic
- Search and filter implementation
- Paste output formatting with syntax-highlighted code blocks
- Error handling for missing registry, missing component, and corrupted JSON
