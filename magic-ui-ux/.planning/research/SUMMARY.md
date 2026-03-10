# Project Research Summary

**Project:** magic-ui-ux
**Domain:** Claude Code plugin -- AI-orchestrated UI/UX design with cognitive psychology
**Researched:** 2026-03-10
**Confidence:** MEDIUM

## Executive Summary

magic-ui-ux is a Claude Code plugin that orchestrates UI/UX design through two sequential "agents" (instruction files, not separate processes): a UX Agent grounded in cognitive psychology that produces layout briefs, and a UI Agent that translates those briefs into visual designs via Google Stitch MCP. The plugin follows the exact same structural conventions as git-master and fws-client-discovery -- SKILL.md, .claude-plugin/, commands/, skills/, hooks/ -- with one architectural novelty: the agents/ directory that separates orchestration personas from knowledge skills. The entire system runs on markdown and JSON with zero build dependencies.

The recommended approach is to build the persistence layer (.ui-ux/ folder) and branding pipeline first, because every downstream feature depends on a stable design system. The core differentiator -- psychology-driven layout decisions -- is genuinely novel in the AI design space (no competitor applies cognitive psychology systematically), but it is also the highest-risk feature due to "skill cacophony" where 14 psychology principles compete and contradict each other. The skill router (a lookup table mapping page-type + section-type to 2-4 relevant psychology skills) is the single most critical piece of infrastructure in the entire plugin. Without it, the UX Agent produces incoherent layouts.

Key risks center on three areas: (1) psychology skill conflicts overwhelming the UX Agent, mitigated by the skill router and strict per-section skill limits; (2) design drift across pages generated in different sessions, mitigated by structured design tokens (not prose) and a page manifest with Stitch screen IDs; and (3) MCP tool fragility, mitigated by saving prompts on failure and providing text-based fallback output. The HITL workflow must be precisely calibrated to exactly three approval gates per /design invocation -- branding, layout direction, and design review -- to avoid both rubber-stamping fatigue and silent mistakes.

## Key Findings

### Recommended Stack

The plugin is pure markdown/JSON with no runtime dependencies. It generates design specifications and orchestrates MCP tools, not code. Three MCP integrations drive visual output: Google Stitch (primary screen generation), Figma (read-only reference extraction), and Pencil (batch concept exploration and style guide extraction). Animation libraries (Framer Motion, GSAP, Swup, Lenis) are specified in output documents, not installed by the plugin.

**Core technologies:**
- Claude Code plugin architecture (SKILL.md, commands/, skills/, hooks/) -- proven convention from git-master and fws-client-discovery
- .ui-ux/ persistence folder -- cross-session design state (tokens, screen IDs, copy, context)
- Google Stitch MCP -- primary screen generation via create_project, generate_screen_from_text, edit_screens, generate_variants
- Figma MCP -- read-only reference extraction via get_design_context, get_screenshot
- Pencil MCP -- batch concept generation and style guide extraction
- 14 existing psychology skills (cognitive-load, hicks-law, loss-aversion, etc.) -- referenced by path, not duplicated
- 5 existing design skills (design-taste-frontend, frontend-design, framer-motion-animator, etc.)

**Version note:** All animation library versions (Framer Motion 11.x, GSAP 3.12.x, Swup 4.x, Lenis 1.x, Tailwind CSS 4.x) need verification via npm. Framer Motion may have been renamed to `motion` package.

### Expected Features

**Must have (table stakes):**
- Design system generation (colors, typography, spacing tokens)
- Page layout generation via Stitch MCP
- Multi-page consistency via .ui-ux/ persistence
- Human-in-the-loop checkpoints (branding, layout, design review)
- Component-level granularity (heroes, navs, footers, cards)
- Variant exploration (generate_variants)
- Design iteration (edit_screens)
- Responsive design awareness
- Export as Stitch screen URLs

**Should have (differentiators):**
- Psychology-driven layout decisions (the core differentiator -- no competitor does this)
- Reference site reverse-engineering ("design like this site but for my brand")
- Separated UX and UI agents (mirrors senior design team workflow)
- Animation choreography specification (Framer Motion, GSAP, Swup, Lenis specs)
- Cross-session design memory (.ui-ux/ persistence)
- Discovery research integration (consume fws-client-discovery output)
- Copy generation with psychology framing

**Defer (v2+):**
- Video-to-website scroll experiences -- high complexity, niche use case
- Full code generation -- solved problem, not the plugin's value
- Pixel-perfect mockup rendering -- delegate to Stitch/Figma
- Real-time collaboration -- Figma owns this
- Accessibility auditing -- use dedicated tools
- Image/asset generation -- use dedicated tools

### Architecture Approach

The architecture follows a four-layer model: Command layer (slash commands), Agent layer (UX + UI instruction files), MCP Tool layer (Stitch, Figma, Pencil), and Persistence layer (.ui-ux/ folder). Commands orchestrate agents sequentially -- UX Agent produces a layout brief, UI Agent consumes it and generates Stitch screens. The handoff artifact (the brief) is the contract between agents and doubles as a HITL checkpoint. A psychology-index.md lookup table routes page types to relevant psychology skills, keeping context window usage lean.

**Major components:**
1. Command layer (commands/*.md) -- parse user intent, route to agents, manage HITL gates
2. UX Agent (agents/ux-agent.md) -- compose psychology skills per page type, produce layout briefs with section-by-section rationale
3. UI Agent (agents/ui-agent.md) -- consume layout briefs, apply design tokens, generate Stitch prompts, produce animation specs
4. Skill router (references/psychology-index.md) -- map page-type + section-type to 2-4 psychology skills
5. Persistence layer (.ui-ux/) -- context.md accumulator, branding.md tokens, per-page briefs and outputs, Stitch project links
6. MCP abstraction -- tool selection logic, error handling, fallback outputs

### Critical Pitfalls

1. **Psychology skill cacophony** -- 14 skills loaded simultaneously produce contradictory recommendations. Prevent with skill router that selects max 2-4 skills per section, never per page. This is the highest-risk pitfall.
2. **Design drift across pages** -- subtle visual inconsistencies accumulate across sessions. Prevent with structured design tokens (exact hex values, pixel spacing scales), not prose descriptions. Store page manifest with Stitch screen IDs.
3. **MCP tool failure cascade** -- Stitch goes down, everything breaks. Prevent by saving generated prompts to .ui-ux/prompts/ on every call (success or failure), providing text-based wireframe fallback, and limiting retries to 2.
4. **Generic AI aesthetic** -- designs converge on the same gradient-heavy, blob-decorated look. Prevent with explicit anti-patterns in UI Agent ("do NOT use blob shapes, do NOT use 3-column equal card grids"), reference reverse-engineering as default entry point, and aggressive variant generation.
5. **HITL interruption fatigue** -- too many approval checkpoints cause rubber-stamping; too few cause silent mistakes. Prevent with exactly 3 gates: branding confirmation, layout direction, design review. Everything else is autonomous.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Plugin Scaffolding and Persistence

**Rationale:** Every feature depends on the plugin structure and the .ui-ux/ persistence layer. The skill router must exist before any psychology skills are invoked. The persistence schema must be defined before any screens are generated. This is pure infrastructure with zero user-facing output, but skipping it guarantees pitfalls 1, 2, 5, 6, and 10.
**Delivers:** Working plugin skeleton (.claude-plugin/, SKILL.md, hooks/, CONNECTORS.md), .ui-ux/ persistence schema with validation, agents/ directory with UX and UI agent instruction files and interface contracts, psychology-index.md skill router, session context injection via SessionStart hook
**Addresses:** Multi-page consistency (table stakes), HITL checkpoint architecture (table stakes)
**Avoids:** Psychology skill cacophony (pitfall 1), design drift (pitfall 2), state corruption (pitfall 6), agent boundary confusion (pitfall 10), HITL fatigue (pitfall 5)

### Phase 2: Branding Pipeline

**Rationale:** Branding must exist before any page design. This is the entry point for every user journey. The /branding command establishes the design system that all subsequent /design calls consume. Reference reverse-engineering is high-value and should be built alongside from-scratch branding, not deferred.
**Delivers:** /branding command (from-scratch and from-reference modes), reference extractor skill with multi-pass extraction (colors, typography, spacing, components, visual character), design token output in .ui-ux/branding.md, brand voice attributes for copy generation, integration with Figma MCP for reference extraction
**Addresses:** Design system generation (table stakes), reference site reverse-engineering (differentiator)
**Avoids:** Generic AI aesthetic (pitfall 4), shallow reference extraction (pitfall 9), copy without brand voice (pitfall 7)

### Phase 3: Core Design Generation

**Rationale:** With persistence and branding in place, the core /design loop can work end-to-end. This phase implements the full UX Agent -> Layout Brief -> UI Agent -> Stitch Screen pipeline with the 3-gate HITL workflow. Start with 3-4 core psychology skills (cognitive-load, hicks-law, social-proof, trust) and expand later.
**Delivers:** /design command, UX Agent with skill-routed psychology application, UI Agent with Stitch MCP integration (create_project, generate_screen_from_text), layout brief generation and persistence, 3-gate HITL workflow, MCP error handling with prompt saving and fallback
**Addresses:** Page layout generation (table stakes), psychology-driven layout decisions (differentiator), separated UX/UI agents (differentiator), component-level granularity (table stakes)
**Avoids:** MCP tool failure cascade (pitfall 3), HITL interruption fatigue (pitfall 5)

### Phase 4: Iteration and Multi-Page Flows

**Rationale:** Once single-page generation works, extend to multi-page consistency, variant exploration, and design iteration. This is where the persistence layer proves its value -- designing page 2 must reference page 1's tokens, navigation, and footer.
**Delivers:** Variant exploration via generate_variants, design iteration via edit_screens, multi-page consistency checking against design tokens, page manifest with cross-page element tracking (nav, footer), copy generation with psychology framing and brand voice calibration
**Addresses:** Variant exploration (table stakes), design iteration (table stakes), multi-page consistency (table stakes), copy generation (differentiator)
**Avoids:** Design drift across pages (pitfall 2), copy without brand voice (pitfall 7)

### Phase 5: Animation and Advanced Features

**Rationale:** Animation specs, discovery integration, and advanced MCP tool usage (Pencil batch exploration) are high-value but non-blocking. They enhance output quality but are not needed for the core design loop.
**Delivers:** /animate command with per-page animation specs, animation budget enforcement (max 3-4 animated elements per viewport), Framer Motion / GSAP / Swup / Lenis recommendation framework, fws-client-discovery integration (consume personas, competitors, UX research when available), Pencil MCP batch exploration for concept brainstorming
**Addresses:** Animation choreography specification (differentiator), discovery research integration (differentiator)
**Avoids:** Animation specification bloat (pitfall 8)

### Phase Ordering Rationale

- **Phase 1 before everything:** The skill router, persistence schema, and agent contracts are load-bearing infrastructure. 6 of 10 identified pitfalls must be addressed here.
- **Phase 2 before Phase 3:** The /design command reads branding tokens on every invocation. Without structured tokens, every generated screen will drift.
- **Phase 3 is the core product:** This is where the psychology differentiator materializes. Start with 3-4 psychology skills, not all 14.
- **Phase 4 extends Phase 3:** Variant exploration and iteration are enhancements to a working design loop, not prerequisites.
- **Phase 5 is additive:** Animation specs and discovery integration are high-value polish, not core functionality.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2:** Reference reverse-engineering is complex -- multi-pass extraction from URLs/screenshots needs detailed prompt engineering. Figma MCP capabilities need validation against current API.
- **Phase 3:** Google Stitch MCP prompt patterns need experimentation. The quality of Stitch output depends heavily on prompt structure, and optimal patterns are not well-documented.
- **Phase 5:** Animation library versions need npm verification. Framer Motion may have been renamed. GSAP ScrollTrigger integration patterns with Lenis need validation.

Phases with standard patterns (skip research-phase):
- **Phase 1:** Plugin scaffolding follows established conventions from git-master and fws-client-discovery. No novel patterns.
- **Phase 4:** Variant exploration and iteration are direct Stitch MCP API mappings. Multi-page consistency is a persistence read/compare pattern.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | Plugin architecture is HIGH (based on 2 production plugins in same repo). Animation library versions are LOW (training data, needs npm verification). MCP tool capabilities are MEDIUM (based on PROJECT.md, not verified against live APIs). |
| Features | MEDIUM | Table stakes well-established by competitor analysis. Psychology differentiator is novel -- no prior art to validate against. Competitor landscape based on training data (early 2025). |
| Architecture | HIGH | Directly derived from analysis of git-master and fws-client-discovery plugins in the same repository. Plugin conventions are proven and tested. |
| Pitfalls | MEDIUM | Based on domain expertise and project context analysis. MCP-specific failure modes need validation against live Stitch/Figma/Pencil behavior. Psychology skill conflict patterns are theoretical -- need empirical testing. |

**Overall confidence:** MEDIUM

### Gaps to Address

- **MCP tool API verification:** Google Stitch, Figma, and Pencil MCP function signatures, response formats, and error codes need validation against live servers. Current knowledge is from PROJECT.md descriptions only.
- **Animation library versions:** All versions (Framer Motion, GSAP, Swup, Lenis, Tailwind CSS) need npm verification before any build-phase documentation is written.
- **Stitch prompt patterns:** What makes a good Stitch screen generation prompt is unknown. Phase 3 planning should include prompt experimentation before committing to a prompt template.
- **Psychology skill interaction effects:** How 2-4 psychology skills interact when composed is theoretical. Early Phase 3 testing should validate that the skill router produces coherent, non-contradictory layout briefs.
- **Figma MCP read capabilities:** The extent of design context extractable via get_design_context needs testing -- it determines how good reference reverse-engineering can be.

## Sources

### Primary (HIGH confidence)
- git-master plugin (v1.1.0) in /Volumes/Productivity/Coding/skills/git-master/ -- plugin architecture conventions
- fws-client-discovery plugin (v1.0.0) in /Volumes/Productivity/Coding/skills/fws-client-discovery/ -- context chain pattern, connector pattern, UX research skill structure
- magic-ui-ux PROJECT.md -- project requirements, MCP tool list, psychology skill inventory
- 14 psychology skill files in ~/.claude/skills/ -- confirmed existence and content
- 5 design skill files in ~/.claude/skills/ -- confirmed existence and content

### Secondary (MEDIUM confidence)
- Competitor landscape (v0, Galileo AI, Figma AI, Relume, Uizard) -- based on training data through early 2025
- MCP tool capabilities (Stitch, Figma, Pencil) -- based on PROJECT.md descriptions

### Tertiary (LOW confidence)
- Animation library versions -- based on training data, needs npm verification
- Stitch prompt effectiveness patterns -- no empirical data, needs experimentation

---
*Research completed: 2026-03-10*
*Ready for roadmap: yes*
