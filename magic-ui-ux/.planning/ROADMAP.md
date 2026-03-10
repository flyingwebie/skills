# Roadmap: magic-ui-ux

## Overview

This roadmap delivers a Claude Code plugin that produces psychologically-informed, visually premium page designs through Google Stitch MCP. The build progresses from plugin infrastructure and persistence (the foundation everything reads from), through branding pipeline (the design system every page consumes), into the core UX-to-UI design engine, then iteration and animation capabilities, and finally the advanced video-to-website feature. Each phase delivers a complete, verifiable capability that unblocks the next.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Plugin Foundation and Persistence** - Scaffold plugin structure, .ui-ux/ persistence layer, and psychology skill router (completed 2026-03-10)
- [x] **Phase 2: Branding Pipeline** - /branding command generates design systems from scratch or by reverse-engineering reference sites (completed 2026-03-10)
- [x] **Phase 3: Page Design Engine** - /design command runs UX Agent (psychology) into UI Agent (Stitch) pipeline with copy generation (completed 2026-03-10)
- [x] **Phase 4: Design Iteration and Animation** - Variant exploration, screen editing, and per-page animation choreography specs (completed 2026-03-10)
- [x] **Phase 5: Video-to-Website** - Scroll-driven animated site specs with canvas frame rendering and section choreography (completed 2026-03-10)
- [ ] **Phase 6: Wire Animation and Video-to-Website Skills** - Connect existing animation and video-to-website skills to command entry points, fix schema gap and data sync issues

## Phase Details

### Phase 1: Plugin Foundation and Persistence
**Goal**: Plugin skeleton exists with working persistence layer and psychology skill routing so all downstream features have stable infrastructure to build on
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03
**Success Criteria** (what must be TRUE):
  1. Plugin loads in Claude Code with CLAUDE.md, SKILL.md, plugin.json, commands/, skills/, and agents/ directories following repo conventions
  2. `.ui-ux/` folder is created on first use and persists design tokens (JSON), screen IDs, and project state across sessions
  3. Psychology skill router accepts a page-type + section-type input and returns 2-4 relevant psychology skills (not all 14)
  4. UX Agent and UI Agent instruction files exist with clear interface contracts (what goes in, what comes out)
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md — Plugin scaffolding, persistence layer, and agent contract stubs
- [x] 01-02-PLAN.md — Psychology skill router with section-to-skill mappings

### Phase 2: Branding Pipeline
**Goal**: Users can generate a complete design system either from their project niche or by reverse-engineering an existing reference site, stored as persistent tokens that all future design operations consume
**Depends on**: Phase 1
**Requirements**: BRAND-01, BRAND-02, BRAND-03, BRAND-04
**Success Criteria** (what must be TRUE):
  1. `/branding` command generates a design system (colors, typography, spacing, component patterns) from a project niche/industry description
  2. `/branding` command extracts a design system from a reference URL, Dribbble screenshot, or Awwwards site into structured tokens
  3. Design system persists in `.ui-ux/branding.md` (human-readable) and `.ui-ux/tokens.json` (machine-readable) with exact values
  4. Every subsequent design operation reads `.ui-ux/` before generating anything, enforcing cross-page consistency
**Plans**: 2 plans

Plans:
- [x] 02-01-PLAN.md — Branding skill with industry design rules and niche-based generation flow
- [x] 02-02-PLAN.md — Reference extraction path (URL/screenshot) and .ui-ux/ consistency enforcement

### Phase 3: Page Design Engine
**Goal**: Users can design pages end-to-end where psychology skills inform layout decisions and Stitch MCP generates production-quality screens, with copy generated when needed
**Depends on**: Phase 2
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-05
**Success Criteria** (what must be TRUE):
  1. `/design <pages>` generates Google Stitch screens for specified pages (prompts user for page selection if not specified)
  2. UX Agent produces a layout brief (`{page}-ux-brief.md`) with section-by-section psychology rationale before any visual generation
  3. UI Agent crafts Stitch prompts incorporating design tokens from `.ui-ux/`, the layout brief, and outputs generated screens
  4. When no copy is provided, plugin generates page text based on project niche and presents it for user approval before use
  5. Generated Stitch screen IDs and project links are saved to `.ui-ux/` for future reference and iteration
**Plans**: 3 plans

Plans:
- [x] 03-01-PLAN.md — /design command orchestration and copy generation skill
- [x] 03-02-PLAN.md — UX Agent full implementation with psychology-informed layout briefs
- [x] 03-03-PLAN.md — UI Agent full implementation with Stitch prompt crafting

### Phase 4: Design Iteration and Animation
**Goal**: Users can explore design variants, iterate on screens, and receive animation choreography specs for every designed page
**Depends on**: Phase 3
**Requirements**: PAGE-04, ANIM-01, ANIM-02
**Success Criteria** (what must be TRUE):
  1. User can generate variants of any existing screen via Stitch `generate_variants` while maintaining design system constraints
  2. User can iterate on screens via Stitch `edit_screens` with specific change requests that respect design tokens
  3. Each page design includes animation choreography specs (entrance animations, scroll behaviors, page transitions) as a deliverable
  4. Animation specs reference concrete library APIs (Framer Motion, GSAP + ScrollTrigger, Swup.js, Lenis) with timing values, easing functions, and implementation notes
**Plans**: 2 plans

Plans:
- [x] 04-01-PLAN.md — /iterate command with variant generation and screen editing via Stitch MCP
- [x] 04-02-PLAN.md — Animation choreography skill with per-page specs referencing Framer Motion, GSAP, Swup.js, Lenis

### Phase 5: Video-to-Website
**Goal**: Users can generate scroll-driven animated site specifications that transform video content into interactive web experiences
**Depends on**: Phase 4
**Requirements**: ANIM-03
**Success Criteria** (what must be TRUE):
  1. Plugin generates scroll-driven animated site specs with canvas frame rendering sequences and section choreography
  2. Output includes GSAP ScrollTrigger pin/scrub configurations, Lenis smooth scroll integration, and frame-by-frame timing
**Plans**: 1 plan

Plans:
- [x] 05-01-PLAN.md — Video-to-website skill with scroll-video reference guide, canvas frame rendering, and section choreography specs

### Phase 6: Wire Animation and Video-to-Website Skills
**Goal**: Connect existing animation and video-to-website skills to command-level entry points so all v1 requirements are reachable by users, and fix schema/data sync gaps identified by milestone audit
**Depends on**: Phase 4, Phase 5
**Requirements**: ANIM-01, ANIM-02, ANIM-03
**Gap Closure**: Closes gaps from v1.0 milestone audit
**Success Criteria** (what must be TRUE):
  1. `/design` command pipeline includes animation skill invocation as a step after UI Agent completion, producing per-page animation choreography specs
  2. A command entry point exists for video-to-website skill (`/video` or integrated into `/design`), allowing users to generate scroll-driven animated site specs
  3. `state.json` schema includes `scrollVideoSpecs[]` property for video-to-website skill persistence
  4. REQUIREMENTS.md checkboxes for ANIM-01 and ANIM-02 reflect actual completion status; ROADMAP.md Phase 5 checkbox synced with STATE.md
**Plans**: 2 plans

Plans:
- [ ] 06-01-PLAN.md — Wire animation into /design pipeline, create /video command, add scrollVideoSpecs to schema
- [ ] 06-02-PLAN.md — Update plugin indexes and sync requirement/roadmap completion status

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Plugin Foundation and Persistence | 2/2 | Complete   | 2026-03-10 |
| 2. Branding Pipeline | 2/2 | Complete   | 2026-03-10 |
| 3. Page Design Engine | 3/3 | Complete | 2026-03-10 |
| 4. Design Iteration and Animation | 2/2 | Complete | 2026-03-10 |
| 5. Video-to-Website | 1/1 | Complete | 2026-03-10 |
| 6. Wire Animation and Video-to-Website Skills | 0/2 | In progress | - |
