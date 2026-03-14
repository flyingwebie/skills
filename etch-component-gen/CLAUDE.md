# etch-component-gen Plugin

## What This Plugin Does

Generates production-ready Etch + AutomaticCSS (ACSS) components with correct BEM naming, ACSS token usage, semantic HTML, and vanilla JavaScript. Given a component name and description, the plugin produces three files — `index.html`, `style.css`, `script.js` — in a per-component folder, written to disk and ready for copy-paste into Etch sections.

All output encodes Etch + ACSS best practices by default: correct Section > Container > Content hierarchy, BEM-scoped styles with ACSS custom property references, semantic landmark elements, container-query responsive design, and production-quality JavaScript. Users new to the platform get correct patterns from the start without manual fixing.

## Design Philosophy

1. **BEM for scoping, ACSS for values** — Component CSS uses BEM class naming to scope styles to a component. All color, spacing, and typography values reference ACSS custom properties (`var(--primary)`, `var(--space-m)`, `var(--text-l)`). Never hard-code design values.
2. **Section > Container > Content hierarchy** — Every Etch section wraps content in a section element, then a container div with the BEM block class, then content elements. This matches Etch's AutoBEM behavior and grid system expectations.
3. **Container queries, not media queries** — Responsive behavior uses `@container` rules. Etch's layout engine is container-query-first. Media queries are only for global breakpoints outside Etch sections.
4. **Vanilla JS with event delegation** — JavaScript uses no framework dependencies. Event listeners are attached via delegation on container elements. State is managed with simple objects or closures. Third-party SDK patterns are supported but never required.
5. **Per-component folders** — Each component lives in `components/{name}/index.html`, `style.css`, `script.js`. This maps 1:1 to how developers paste components into Etch sections and supports version control of individual components.
6. **ACSS 4.x only, no 3.x patterns** — Use `--space-2xl` not `--space-xxl`. Use `?btn` recipe syntax not `@btn`. Use `color-mix(in oklch, var(--primary) 20%, transparent)` not transparency tokens (`--primary-trans-20` does not exist in ACSS 4.x).

## Plugin Architecture

```
etch-component-gen/
  CLAUDE.md                        # This file — plugin context Claude Code reads first
  SKILL.md                         # Plugin index: trigger words, commands table, skills table
  .claude-plugin/
    plugin.json                    # Plugin manifest (name, version, keywords)
  commands/
    generate.md                    # /generate — produce a component from name + description
    library.md                     # /library — search, filter, list, paste generated components
  skills/
    persistence/
      SKILL.md                     # .etch-components/ folder management, registry read/write
      schemas/
        registry.json              # JSON Schema draft-07 for registry validation
    html-generation/
      SKILL.md                     # Semantic HTML + ACSS utility class generation
    css-generation/
      SKILL.md                     # BEM-scoped CSS with ACSS token custom properties
    js-generation/
      SKILL.md                     # Production vanilla JS patterns
    etch-conventions/
      SKILL.md                     # Etch best practices: sections, grid, responsive, a11y
```

## Persistence

All cross-session state lives in `.etch-components/` at the **project root** (where the user runs Claude Code from — not inside this plugin folder). This mirrors the `.ui-ux/` pattern from `magic-ui-ux`.

```
.etch-components/
  registry.json              # Master catalog of all generated components
  config.json                # Project-level ACSS token overrides (optional, future use)
```

**`registry.json` is the single source of truth.** It records every generated component with its name, type, tags, file paths, JS flag, ACSS tokens used, and creation date. The `/library` command reads from it directly — no filesystem scanning.

**Rule: Always read the registry before operating, write back after completing.** Every command that modifies components must:
1. Read `.etch-components/registry.json`
2. Perform the operation
3. Update `updatedAt` and write back

## Key Rules

1. **Never hard-code colors, spacing, or typography.** All design values must reference ACSS custom properties. Raw CSS values (specific hex colors, pixel sizes for spacing, font sizes) are not acceptable in generated output. Exception: layout-specific values (grid-template-columns with fr units, specific aspect ratios) that have no ACSS equivalent.
2. **Flatten BEM — no grandchild nesting.** Use `.card__title` not `.card__header__title`. BEM elements are direct children of the block conceptually, regardless of DOM depth. Etch's AutoBEM produces flat names; generated CSS must match.
3. **Use `&__` and `&--` stemming in CSS.** Etch's CSS panel supports native CSS nesting with `&__element` and `&--modifier` expansion. Generated CSS should use this pattern rather than repeating the full block name.
4. **No framework dependencies (vanilla JS only).** Generated JavaScript must run in Etch's runtime without imports, bundlers, or framework initialization. Third-party SDKs (e.g., Swiper, Lenis) may be referenced but must be declared as explicit dependencies in the component summary.
5. **Container queries for responsive design.** Use `@container (width >= ...)` rules for component-level responsive behavior. Declare container context via `:has(> &) { container-type: inline-size; }` inside the block selector — this makes components portable regardless of parent element.

## Available Skills

- **persistence** — `skills/persistence/SKILL.md` — Manages `.etch-components/` folder initialization, registry read/write, component registration, and conflict detection.
- **html-generation** — `skills/html-generation/SKILL.md` — Generates semantic HTML with ACSS utility classes for spacing, typography, and colors. Handles element mapping, landmark selection, and accessibility attributes.
- **css-generation** — `skills/css-generation/SKILL.md` — Generates BEM-scoped CSS with `&__`/`&--` stemming and ACSS custom property references. Zero hardcoded values.
- **js-generation** — `skills/js-generation/SKILL.md` — Generates vanilla ES2020+ JavaScript with event delegation, async patterns, and state management for interactive components.
- **etch-conventions** — `skills/etch-conventions/SKILL.md` — Encodes Etch best practices: Section > Container > Content hierarchy, AutoBEM alignment, container-query responsive, accessibility defaults, grid system.
