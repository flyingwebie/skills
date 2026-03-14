# Roadmap: etch-component-gen

## Overview

This roadmap delivers a Claude Code plugin that generates production-ready Etch + AutomaticCSS components with correct BEM naming, ACSS token usage, semantic HTML, and production-quality JavaScript. The build progresses from plugin scaffolding and persistence infrastructure (Phase 1), through HTML and CSS generation with the core `/generate` command (Phase 2), into JavaScript generation for interactive components (Phase 3), and finally the component library for search, filter, and quick-paste access (Phase 4). Each phase delivers a complete, verifiable capability that unblocks the next.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Plugin Foundation and Persistence** - Scaffold plugin structure, .etch-components/ persistence layer, ACSS token references, and Etch conventions skill (completed 2026-03-13)
- [x] **Phase 2: HTML and CSS Generation** - /generate command producing BEM-only semantic HTML and BEM-scoped CSS with ACSS token references (completed 2026-03-14)
- [x] **Phase 3: JS Generation and Interactive Components** - JavaScript generation skill with interactivity classification, event delegation, and accessibility for interactive components (completed 2026-03-14)
- [x] **Phase 4: Component Library** - /library command for searching, filtering, and copy-pasting generated components (completed 2026-03-14)

## Phase Details

### Phase 1: Plugin Foundation and Persistence
**Goal**: Plugin infrastructure exists with working persistence layer, ACSS token reference files, and Etch conventions skill so all downstream generation skills have stable foundations to build on
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04
**Success Criteria** (what must be TRUE):
  1. Plugin loads in Claude Code with CLAUDE.md, SKILL.md, plugin.json, commands/, and skills/ directories following FWS repo conventions
  2. `.etch-components/` folder is created on first use with registry.json tracking generated components and metadata across sessions
  3. ACSS 4.x token reference files exist covering colors (6 roles x 8 shades), spacing (xs-2xl), typography (h1-h6, text-xs-text-2xl), borders, and grid system
  4. Etch conventions skill encodes Section > Container hierarchy, AutoBEM alignment rules, container-query responsive approach, and accessibility defaults
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md — Plugin scaffolding and .etch-components/ persistence layer with registry.json
- [x] 01-02-PLAN.md — ACSS 4.x token reference files and Etch conventions skill

### Phase 2: HTML and CSS Generation
**Goal**: Users can generate complete HTML and CSS components via `/generate` that follow Etch best practices -- BEM-only semantic markup with all styling in CSS via ACSS custom properties, and correct section structures for all 7 layout types
**Depends on**: Phase 1
**Requirements**: GEN-01, GEN-02, GEN-03, GEN-05 (HTML/CSS sections), GEN-06, QUAL-01, QUAL-03, QUAL-04
**Success Criteria** (what must be TRUE):
  1. `/generate` command accepts a component name and description, producing `components/{name}/index.html` and `style.css` in the project directory
  2. Generated HTML uses semantic landmarks (`<section>`, `<nav>`, `<header>`, `<footer>`), correct heading hierarchy, BEM-only classes (no ACSS utility classes in markup), and `alt` text patterns
  3. Generated CSS uses BEM naming with `&__`/`&--` stemming (Etch CSS panel compatible), references only ACSS custom properties for color/spacing/typography values -- zero hardcoded values
  4. All 7 section types (hero, features grid, testimonials, pricing, CTA, footer, header/nav) generate with correct Etch Section > Container structure and container-query responsive behavior via `:has(> &)` pattern
  5. Pre-flight check reads registry.json before generation, warns on existing component overwrite (no confirmation prompt), and loads project ACSS context
**Plans**: 3 plans

Plans:
- [ ] 02-01-PLAN.md — /generate command orchestration with pre-flight checks and output presentation
- [ ] 02-02-PLAN.md — HTML generation skill with BEM-only semantic markup and 7 section type templates
- [ ] 02-03-PLAN.md — CSS generation skill with BEM scoping, ACSS token references, and :has(> &) container queries

### Phase 3: JS Generation and Interactive Components
**Goal**: Components that need interactivity receive production-quality vanilla JavaScript with event delegation, async patterns, state management, and full keyboard/ARIA accessibility
**Depends on**: Phase 2
**Requirements**: GEN-04, GEN-05 (JS for interactive sections), QUAL-02
**Success Criteria** (what must be TRUE):
  1. JS generation skill classifies components by interactivity level (none/interactive/dynamic) and only produces script.js when interactivity is needed
  2. Generated JavaScript uses vanilla ES2020+ with event delegation, async/await patterns, and state management appropriate to component complexity
  3. Interactive components include keyboard navigation, `aria-expanded`/`aria-hidden` attributes, and `:focus-visible` outline styles in their CSS
  4. Interactive section types (header/nav, pricing toggles, testimonial carousels) generate with working JS that handles real user interactions
**Plans**: 2 plans

Plans:
- [ ] 03-01-PLAN.md — JS generation skill with interactivity classification and event delegation patterns
- [ ] 03-02-PLAN.md — Interactive section types with keyboard navigation and ARIA accessibility

### Phase 4: Component Library
**Goal**: Users can discover, search, and reuse previously generated components through the `/library` command with instant copy-paste output for Etch
**Depends on**: Phase 2
**Requirements**: LIB-01, LIB-02, LIB-03
**Success Criteria** (what must be TRUE):
  1. `/library` command lists all generated components from registry.json with name, type, description, and file paths
  2. `/library` supports search by name and filter by component type (section, hero, nav, footer, custom)
  3. `/library --paste <name>` outputs the full HTML/CSS/JS content of a named component ready for copy-paste into Etch
**Plans**: 2 plans

Plans:
- [x] 04-01-PLAN.md — /library command with listing, search, and filter capabilities
- [x] 04-02-PLAN.md — Quick-paste output formatting for Etch copy-paste workflow

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Plugin Foundation and Persistence | 2/2 | Complete   | 2026-03-13 |
| 2. HTML and CSS Generation | 3/3 | Complete   | 2026-03-14 |
| 3. JS Generation and Interactive Components | 2/2 | Complete   | 2026-03-14 |
| 4. Component Library | 2/2 | Complete   | 2026-03-14 |
