# Requirements: etch-component-gen

**Defined:** 2026-03-13
**Core Value:** Generate Etch components that follow best practices out of the box — correct BEM naming, proper ACSS token usage, semantic HTML structure, and production-quality JavaScript — so developers spend time on business logic, not learning framework conventions.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [x] **FOUND-01**: Plugin scaffolded with CLAUDE.md, SKILL.md, plugin.json, commands/, skills/ following FWS repo conventions (magic-ui-ux, git-master patterns)
- [x] **FOUND-02**: `.etch-components/` persistence folder with registry.json tracking all generated components, metadata, and page compositions
- [x] **FOUND-03**: ACSS 4.x token reference files covering colors (6 roles × 8 shades), spacing (xs–2xl + bridge vars), typography (h1–h6, text-xs–text-2xl), borders, and grid system
- [x] **FOUND-04**: Etch conventions skill encoding Section > Container hierarchy, AutoBEM alignment, container-query responsive approach, and accessibility defaults

### Generation

- [x] **GEN-01**: `/generate` command accepts component name + description, produces `components/{name}/index.html`, `style.css`, and optionally `script.js`
- [ ] **GEN-02**: HTML generation skill produces semantic markup with ACSS utility classes in HTML (grid, spacing, typography) and correct Etch element mapping
- [x] **GEN-03**: CSS generation skill produces BEM-scoped styles with `&__`/`&--` stemming (Etch CSS panel compatible) and ACSS custom property references — zero hardcoded color/spacing/typography values
- [ ] **GEN-04**: JS generation skill produces vanilla ES2020+ code with event delegation, async patterns, and state management — classified by interactivity level (none/interactive/dynamic)
- [ ] **GEN-05**: 7 layout section types supported: hero, features grid, testimonials, pricing, CTA, footer, header/nav — each with correct Etch structure and ACSS patterns
- [x] **GEN-06**: Pre-flight check reads registry before generation, warns on existing component overwrite, loads project ACSS context

### Library

- [ ] **LIB-01**: `/library` command lists all generated components from registry.json with name, type, description, and file paths
- [ ] **LIB-02**: `/library` supports search by name and filter by component type (section, hero, nav, footer, custom)
- [ ] **LIB-03**: `/library --paste <name>` outputs full HTML/CSS/JS content of a component for copy-paste into Etch

### Quality

- [ ] **QUAL-01**: Every generated component includes semantic HTML landmarks (`<section>`, `<nav>`, `<header>`, `<footer>`), correct heading hierarchy, and `alt` text patterns
- [ ] **QUAL-02**: Interactive components include keyboard navigation, `aria-expanded`/`aria-hidden` attributes, and `:focus-visible` outlines
- [x] **QUAL-03**: Images use `loading="lazy"` and `decoding="async"` by default; animations respect `prefers-reduced-motion`
- [x] **QUAL-04**: Generated CSS uses container queries (`@container`) for responsive behavior, not media query breakpoints

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Composition

- **COMP-01**: `/page` command generates a full page as an ordered sequence of components with shared ACSS token context and visual rhythm
- **COMP-02**: Component-composition skill plans section order based on page type (landing, about, services, contact, blog) with suggestions and user confirmation

### Variants

- **VAR-01**: Component variant system supporting color scheme (light/dark), size (compact/standard/expanded), and content density (minimal/standard/full) via BEM modifiers
- **VAR-02**: ACSS dark mode integration using native `color-scheme` and `light-dark()` with section-level protection classes
- **VAR-03**: Variants stored as BEM modifier classes in a single CSS file with `variants.json` manifest per component

### UI Elements

- **ELEM-01**: Modal component with focus trap, Escape key close, body scroll lock, and aria-hidden toggle
- **ELEM-02**: Accordion component with aria-expanded, smooth height animation, and optional single-open mode
- **ELEM-03**: Tabs component with arrow key navigation, panel association, and aria-selected state management
- **ELEM-04**: Form component with semantic fieldsets, real-time validation, and accessible error messages

### Design Input

- **DESIGN-01**: Accept Figma designs via MCP (`get_design_context`) and map extracted values (layout, spacing, colors, typography) to nearest ACSS tokens
- **DESIGN-02**: Accept Pencil designs via MCP (`batch_get`, `get_guidelines`) and translate to Etch component output
- **DESIGN-03**: Token mapping flags significant mismatches (>20% deviation from nearest ACSS token) for developer review

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Etch Props/Slots integration | Requires deeper platform investigation; generate static HTML first, add prop annotations later |
| Visual preview rendering in terminal | CLI cannot render HTML well; rely on Etch's own preview |
| Build step / transpilation | Etch expects plain browser-ready files |
| Component marketplace / sharing | Local generation tool, not a platform |
| Template engine / dynamic rendering | Etch handles dynamic rendering via its own component props and loop system |
| Full WordPress theme generation | Plugin generates components, not themes |
| Pixel-perfect Figma reproduction | Map to nearest ACSS tokens instead |
| jQuery or framework dependencies | Vanilla JS only; Etch is a modern builder |
| ACSS 3.x backward compatibility | Default to 4.x; 3.x is deprecated |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Complete |
| FOUND-02 | Phase 1 | Complete |
| FOUND-03 | Phase 1 | Complete |
| FOUND-04 | Phase 1 | Complete |
| GEN-01 | Phase 2 | Complete |
| GEN-02 | Phase 2 | Pending |
| GEN-03 | Phase 2 | Complete |
| GEN-04 | Phase 3 | Pending |
| GEN-05 | Phase 2 | Pending |
| GEN-06 | Phase 2 | Complete |
| LIB-01 | Phase 4 | Pending |
| LIB-02 | Phase 4 | Pending |
| LIB-03 | Phase 4 | Pending |
| QUAL-01 | Phase 2 | Pending |
| QUAL-02 | Phase 3 | Pending |
| QUAL-03 | Phase 2 | Complete |
| QUAL-04 | Phase 2 | Complete |
