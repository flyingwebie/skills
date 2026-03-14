---
description: "Generate a production-ready Etch component from a name and description"
allowed-tools: Read, Write, Edit, Bash(ls:*,mkdir:*), Glob, Grep
argument-hint: "<component-name> [description] [--type <section|card|form|nav|footer|hero|custom>] [--no-js]"
---

# /generate

Generate a production-ready Etch + ACSS component from a name and description. Produces `index.html` and `style.css` in `components/{component-name}/` and updates the component registry.

## Purpose

The `/generate` command orchestrates the full component generation pipeline. It delegates all domain knowledge to skills — it never contains generation logic directly. The command handles: reading inputs, sequencing skill invocations, writing output files, and updating the registry. Skills handle: HTML semantics, CSS patterns, and Etch conventions.

## Arguments

- `$ARGUMENTS` — parsed as `<component-name> [description] [flags]`
- `component-name` (required): kebab-case name, e.g., `pricing-table`, `hero-split`
- `description` (optional): natural language description; if omitted, ask the user before generating
- `--type <type>`: hint the component type (`hero`, `features`, `testimonials`, `pricing`, `cta`, `footer`, `header`, `custom`); if omitted, infer from name/description
- `--no-js`: skip JS generation for purely static components

## Pipeline

### Step 1 — Pre-flight

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/persistence/SKILL.md`
2. Initialize `.etch-components/` if it does not exist (follow the persistence skill's Initialization flow)
3. Read `registry.json`
4. Check if component name already exists — if so, display warning and proceed automatically (warn-but-proceed per persistence skill — no confirmation prompt)
5. Load project ACSS context by reading `@${CLAUDE_PLUGIN_ROOT}/skills/css-generation/references/acss-tokens.md`

### Step 2 — Validate inputs

1. Validate `component-name` is kebab-case: lowercase letters and hyphens only, no leading or trailing hyphens, no consecutive hyphens
2. If no description was provided in the arguments, ask the user:
   > "Please provide a brief description of the {component-name} component (e.g., 'A pricing comparison table with 3 tiers'):"

   Wait for the user's response before continuing. Use the description they provide for all subsequent steps.
3. Normalize the component name for use as the BEM block class (it is already kebab-case at this point)

### Step 3 — Resolve type

1. If `--type` flag was provided, use that value directly
2. Otherwise, infer from the component name:
   - Name contains "hero" → `hero`
   - Name contains "nav" or "header" → `header`
   - Name contains "footer" → `footer`
   - Name contains "pricing" → `pricing`
   - Name contains "feature" → `features`
   - Name contains "testimonial" → `testimonials`
   - Name contains "cta" or "call-to-action" → `cta`
3. If the name does not match, infer from description keywords using the same mapping above
4. If still unclear, ask the user to select from: `hero`, `features`, `testimonials`, `pricing`, `cta`, `footer`, `header`, `custom`

### Step 4 — Load conventions

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/etch-conventions/SKILL.md`
2. Read `@${CLAUDE_PLUGIN_ROOT}/skills/etch-conventions/references/section-patterns.md`
3. Determine the section structure and grid pattern for this component type
4. Note the Section > Container > Content hierarchy requirement — every component must follow this

### Step 5 — Generate HTML

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/html-generation/SKILL.md`
2. Generate semantic HTML following the skill's algorithm:
   - HTML must contain **only BEM classes** — no ACSS utility classes in markup at all
   - Use `https://placehold.co/800x600` URLs for all image `src` attributes (adjust dimensions to fit the context, e.g., `400x400` for square, `1200x400` for wide banners)
   - Include contextual placeholder text inferred from the component name and description
   - When no description was provided and the user supplied one in Step 2, use that description for all content context
   - Use generic-contextual text when description is vague (e.g., "Build Something Amazing", "Simple, Transparent Pricing")
   - **No HTML comments** in generated output — BEM class names are self-documenting
   - Hero sections use `<h1>` for the main heading; all other section types use `<h2>`
   - Add descriptive `alt` text to all images; add `loading="lazy"` to non-hero images

### Step 6 — Generate CSS

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/css-generation/SKILL.md`
2. Read `@${CLAUDE_PLUGIN_ROOT}/skills/css-generation/references/acss-tokens.md`
3. Generate BEM-scoped CSS:
   - Use `&__element` and `&--modifier` nesting syntax (no repeated block name)
   - Use `:has(> &) { container-type: inline-size; }` pattern on the block to enable container queries from the parent
   - **All design values must use ACSS custom properties via `var(--token)`** — zero hardcoded colors, spacing, or typography values
   - Use `@container` queries for responsive behavior — not `@media` (exception: `prefers-reduced-motion`)
   - Include `:focus-visible` styles on all interactive elements (buttons, links, inputs)
   - Include `@media (prefers-reduced-motion: reduce)` rule if the component includes animations or CSS transitions

### Step 7 — Generate JS (Skip in Phase 2)

1. If `--no-js` flag is present OR the component type does not require interactivity, skip this step
2. For Phase 2: always skip JS generation regardless of component type — JS generation is a Phase 3 deliverable
3. If the component type would normally benefit from JavaScript (e.g., `header` with mobile nav, `pricing` with annual/monthly toggle), note this in the output: "Note: This component type may benefit from JavaScript interactivity (available in a future update)"

### Step 8 — Write files

1. Create `components/{component-name}/` directory
2. Write `index.html` with the generated HTML
3. Write `style.css` with the generated CSS
4. Do **not** write `script.js` in Phase 2

### Step 9 — Update registry

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/persistence/SKILL.md` (Register Component section)
2. Build the registry entry:
   - `name`: the kebab-case component name
   - `description`: the description used during generation
   - `type`: the resolved component type from Step 3
   - `tags`: inferred from name, description, and type (e.g., `["pricing", "comparison", "tiers"]`)
   - `files`: object with `html` and `css` paths; `js` set to `null`
   - `hasJs`: `false` (Phase 2 always)
   - `acssTokensUsed`: array of all ACSS custom property names referenced in the generated CSS (e.g., `["--primary", "--space-l", "--text-m"]`)
   - `createdAt`: current ISO 8601 datetime (or keep existing value if overwriting)
3. If overwriting an existing component, replace the matching entry in the `components` array
4. Write back to `.etch-components/registry.json` following the Write Registry procedure

### Step 10 — Present summary

Present the full output in this order:

1. **Generated HTML** — fenced code block:
   ````html
   <!-- generated HTML -->
   ````

2. **Generated CSS** — fenced code block:
   ````css
   /* generated CSS */
   ````

3. **ACSS Tokens Used** — list all ACSS custom properties referenced in the CSS:
   ```
   --primary, --space-l, --text-m, ...
   ```

4. **Files written** — show the paths:
   ```
   components/{component-name}/index.html
   components/{component-name}/style.css
   ```

5. If the component type would normally have JS but it was skipped, add:
   > "Note: This component type may benefit from JavaScript interactivity (available in a future update)"
