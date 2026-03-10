# Requirements: magic-ui-ux

**Defined:** 2026-03-10
**Core Value:** Every page designed through this plugin is psychologically informed and visually premium — not generic AI output, but design that understands why users click, scroll, and convert.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [x] **FOUND-01**: Plugin scaffolded with CLAUDE.md, SKILL.md, plugin.json, commands/, skills/ following repo conventions (git-master, fws-client-discovery patterns)
- [x] **FOUND-02**: `.ui-ux/` persistence folder stores design tokens (JSON), screen IDs, project state, and reference assets across sessions
- [x] **FOUND-03**: Psychology skill router selects 2-4 relevant skills per page section based on section type (hero, CTA, pricing, etc.) — not all 14 at once

### Branding

- [x] **BRAND-01**: `/branding` command generates design system (colors, typography, spacing, component patterns) from project niche/industry using industry design rules
- [x] **BRAND-02**: `/branding` reverse-engineers design system from reference URL, Dribbble screenshot, or Awwwards site into structured design tokens
- [x] **BRAND-03**: Design system persists in `.ui-ux/branding.md` (human-readable) + `.ui-ux/tokens.json` (machine-readable) with exact values
- [x] **BRAND-04**: Agent reads `.ui-ux/` before every design operation to enforce cross-page consistency

### Page Design

- [x] **PAGE-01**: `/design <pages>` generates Google Stitch screens for specified pages (asks user which pages if not specified)
- [x] **PAGE-02**: UX Agent applies selected psychology skills to produce a layout brief (`{page}-ux-brief.md`) before UI Agent generates visuals
- [x] **PAGE-03**: UI Agent crafts Stitch prompts incorporating design system tokens, layout brief, and animation specs to generate screens
- [ ] **PAGE-04**: User can generate variants via Stitch `generate_variants` and iterate via `edit_screens` with design system constraints
- [x] **PAGE-05**: Copy generation produces page text based on niche/project with human-in-the-loop approval before use in designs

### Animation

- [ ] **ANIM-01**: Each page design includes animation choreography specs (entrance animations, scroll behaviors, page transitions)
- [ ] **ANIM-02**: Animation specs reference Framer Motion, GSAP + ScrollTrigger, Swup.js page transitions, and Lenis smooth scroll with timing/easing values
- [ ] **ANIM-03**: Video-to-website capability generates scroll-driven animated site specs with canvas frame rendering, section choreography, and Lenis integration

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Integrations

- **INTG-01**: Consume fws-client-discovery research (personas, competitors, UX research) when available to personalize designs
- **INTG-02**: Figma MCP integration for reading existing designs and extracting design systems
- **INTG-03**: Pencil MCP integration for batch concept generation with style guide awareness

### Workflow

- **WRKF-01**: Formal human-in-the-loop gates (3 checkpoints: branding approval, layout direction, design review)
- **WRKF-02**: Design history log in `.ui-ux/` tracking decisions, iterations, and rationale
- **WRKF-03**: `/review` command for psychology-based design audit of existing pages

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Full code generation (HTML/CSS/React output) | Code gen is solved (v0, Bolt, Claude). Plugin outputs designs + specs, not code |
| Pixel-perfect mockup rendering | Runs in terminal — delegate rendering to Stitch/Figma/Pencil via MCP |
| Real-time collaborative editing | Figma owns this space — share Stitch project links for team review |
| Design system management (tokens versioning, publishing) | Style Dictionary, Tokens Studio handle this — export from `.ui-ux/` if needed |
| Accessibility auditing | axe, Lighthouse are better — include WCAG-compliant defaults in generated designs |
| User testing / analytics integration | Hotjar, FullStory own this — apply psychology proactively instead |
| Image/asset generation | Midjourney, DALL-E own this — specify image requirements in design specs |
| Custom component library builder | Storybook, Bit own this — leverage Stitch's built-in components |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Complete |
| FOUND-02 | Phase 1 | Complete |
| FOUND-03 | Phase 1 | Complete |
| BRAND-01 | Phase 2 | Complete |
| BRAND-02 | Phase 2 | Complete |
| BRAND-03 | Phase 2 | Complete |
| BRAND-04 | Phase 2 | Complete |
| PAGE-01 | Phase 3 | Complete |
| PAGE-02 | Phase 3 | Complete |
| PAGE-03 | Phase 3 | Complete |
| PAGE-04 | Phase 4 | Pending |
| PAGE-05 | Phase 3 | Complete |
| ANIM-01 | Phase 4 | Pending |
| ANIM-02 | Phase 4 | Pending |
| ANIM-03 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 15 total
- Mapped to phases: 15
- Unmapped: 0

---
*Requirements defined: 2026-03-10*
*Last updated: 2026-03-10 after roadmap creation*
