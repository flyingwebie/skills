---
description: "Generate a production-ready Etch component from a name and description"
allowed-tools: Read, Write, Edit, Bash(ls:*,mkdir:*), Glob, Grep
argument-hint: "<component-name> [description] [--type <section|card|form|nav|footer|hero|custom>] [--no-js]"
---

# /generate

Generate a production-ready Etch + ACSS component from a name and description. Produces `index.html`, `style.css`, and `script.js` in `components/{component-name}/` and updates the component registry.

## Purpose

The `/generate` command orchestrates the full component generation pipeline. It delegates all domain knowledge to skills — it never contains generation logic directly. The command handles: reading inputs, sequencing skill invocations, writing output files, and updating the registry. Skills handle: HTML semantics, CSS patterns, JS patterns, and Etch conventions.

**Arguments:**
- `$ARGUMENTS` — parsed as `<component-name> [description] [flags]`
- `component-name` (required): kebab-case name, e.g., `pricing-table`, `hero-split`
- `description` (optional): natural language description; if omitted, infer from the component name
- `--type <type>`: hint the component type (`section`, `card`, `form`, `nav`, `footer`, `hero`, `custom`); if omitted, infer from name/description
- `--no-js`: skip JS generation for purely static components

## Pipeline

1. **Pre-flight** — Read `@${CLAUDE_PLUGIN_ROOT}/skills/persistence/SKILL.md`. Initialize `.etch-components/` if it does not exist. Read `registry.json`. Check if component name already exists — if so, warn the user and ask to confirm overwrite before proceeding.

2. **Resolve type** — Determine component type from `--type` flag, component name analysis, or description analysis. If still ambiguous, ask the user.

3. **Load conventions** — Read `@${CLAUDE_PLUGIN_ROOT}/skills/etch-conventions/SKILL.md`. Determine section structure, grid pattern, and responsive approach for this component type.

4. **Generate HTML** — Read `@${CLAUDE_PLUGIN_ROOT}/skills/html-generation/SKILL.md`. Produce semantic HTML with: correct Section > Container > Content hierarchy, ACSS utility classes for spacing and typography, semantic landmark elements, accessibility attributes (aria-label, role where needed), `loading="lazy"` on images.

5. **Generate CSS** — Read `@${CLAUDE_PLUGIN_ROOT}/skills/css-generation/SKILL.md`. Produce BEM-scoped CSS with: `&__`/`&--` stemming, ACSS custom property references for all design values, `container-type: inline-size` on the block wrapper, `@container` rules for responsive behavior.

6. **Generate JS** — (Skip if `--no-js`) Read `@${CLAUDE_PLUGIN_ROOT}/skills/js-generation/SKILL.md`. Produce vanilla ES2020+ JavaScript with: event delegation, DOMContentLoaded init, state management appropriate to the component's interactivity level.

7. **Write files** — Create `components/{component-name}/` directory. Write `index.html`, `style.css`, and (if applicable) `script.js`.

8. **Update registry** — Read `@${CLAUDE_PLUGIN_ROOT}/skills/persistence/SKILL.md` (Register Component section). Add the new component entry with name, description, type, tags, file paths, hasJs, and acssTokensUsed. Update `updatedAt`. Write back to `.etch-components/registry.json`.

9. **Present summary** — Show the generated file paths, a brief description of what was created, the ACSS tokens used, and a quick-paste block with the HTML output.

## Not Yet Implemented

This command is a **Phase 2 deliverable**. The pipeline structure above defines the intent. Phase 2 will add:
- Complete HTML generation algorithm with ACSS class map reference
- Complete CSS generation algorithm with ACSS token reference
- Complete JS generation with interactivity classification
- Full Etch conventions skill with section structure templates
- Input validation and error handling
