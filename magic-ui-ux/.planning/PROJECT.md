# magic-ui-ux

## What This Is

A Claude Code plugin that orchestrates expert-level UI/UX design by combining psychology-driven UX decisions with premium visual design execution. It separates UX (how users think and behave) from UI (how things look and move), uses MCP design tools (Google Stitch, Figma, Pencil) to generate screens, and applies 10+ cognitive psychology skills to every design decision. Output: production-ready Stitch screens for iteration.

## Core Value

Every page designed through this plugin is psychologically informed and visually premium — not generic AI output, but design that understands why users click, scroll, and convert.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Plugin scaffolding with CLAUDE.md, skills, and agent definitions
- [ ] `/branding` command — create design system from scratch or reverse-engineer from reference sites (URLs, Dribbble, Awwwards screenshots)
- [ ] `/design <pages>` command — design one or more pages outputting Google Stitch screens
- [ ] `.ui-ux/` persistence folder — stores branding guidelines, reference screenshots, Stitch project/screen links, and design system tokens
- [ ] UX Agent — applies psychology skills (cognitive load, Hick's law, loss aversion, trust, social proof, visual cues, halo effect, cognitive fluency, progressive disclosure) to make layout/interaction decisions
- [ ] UI Agent — applies design-taste-frontend, frontend-design, animation specs (Framer Motion, GSAP, Swup, Lenis) to generate premium visual output
- [ ] Reference site reverse-engineering — given a URL or screenshot, extract design system (colors, typography, spacing, component patterns, animation style)
- [ ] Copy generation — if no copy markdown provided, generate page copy based on project name/niche with human-in-the-loop approval
- [ ] Cross-page consistency — agent always reads `.ui-ux/` before designing any page to maintain design system coherence
- [ ] Human-in-the-loop at key decision points — branding choices, layout direction, copy approval, design review
- [ ] Google Stitch MCP integration — create projects, generate screens, edit screens, generate variants
- [ ] UX research import — optionally consume fws-client-discovery UX research (06-UX-UI-Research.md) if available
- [ ] Animation specification — include Framer Motion, Swup.js page transitions, and Lenis smooth scroll recommendations per page
- [ ] Video-to-website capability — scroll-driven animated sites with GSAP, canvas frame rendering, Lenis

## Context

### Existing Ecosystem
- **Psychology skills available** (in ~/.claude/skills/): cognitive-load, hicks-law, cognitive-fluency-psychology, cognitive-biases, halo-effect-psychology, loss-aversion-psychology, visual-cues-cta-psychology, trust-psychology, social-proof-psychology, progressive-disclosure, hooked-model, fogg-behavior-model, curiosity-gap, status-quo-bias
- **Design skills available**: design-taste-frontend (metric-based rules, anti-AI-generic patterns), frontend-design (production-grade interfaces), framer-motion-animator, svg-logo-designer, redesign-existing-projects
- **MCP tools available**: Google Stitch (create_project, generate_screen_from_text, edit_screens, generate_variants), Figma (get_design_context, get_screenshot), Pencil (batch_design, batch_get, get_guidelines, get_style_guide)
- **Animation libraries**: Framer Motion (React), GSAP + ScrollTrigger (vanilla/any), Swup.js (page transitions), Lenis (smooth scroll)
- **Reference skill**: fws-client-discovery/ux-ui-research — proven UX research workflow with industry design rules, color palettes, font pairings
- **Reference skill**: video-to-website (Downloads/SKILL.md) — scroll-driven animated sites with canvas frame rendering

### Plugin Architecture
Lives in `/Volumes/Productivity/Coding/skills/magic-ui-ux/` within the FWS skills repository. Follows the same plugin structure as `git-master` and `fws-client-discovery` (CLAUDE.md + skills/ directory with SKILL.md files).

### Design Philosophy
- UX and UI are distinct disciplines — psychology informs structure, visual design executes it
- Design consistency is non-negotiable — `.ui-ux/` is the single source of truth
- Human-in-the-loop keeps the designer in control — AI proposes, human decides
- Reference-driven design beats blank-canvas generation — reverse-engineer what works

## Constraints

- **Output format**: Primary output is Google Stitch screens (not raw code) for design iteration
- **MCP dependency**: Requires Google Stitch MCP server to be connected for screen generation
- **Standalone**: Must work without fws-client-discovery (can optionally consume its research)
- **Plugin format**: Must follow FWS skills repository conventions (CLAUDE.md, SKILL.md, skills/ directory)
- **Copy generation**: When generating copy, always confirm with user before using in designs

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Separate UX and UI agents | UX (psychology/research) and UI (visual/animation) are distinct disciplines requiring different skill sets | — Pending |
| Google Stitch as primary output | Stitch provides iterative AI-powered screen generation with variant exploration — faster than coding | — Pending |
| `.ui-ux/` persistence folder | Design systems must persist across sessions and pages — a folder beats in-memory state | — Pending |
| Standalone plugin | Not everyone uses fws-client-discovery — broader adoption if self-contained | — Pending |
| Human-in-the-loop for copy | AI-generated copy needs domain expertise validation — never auto-commit | — Pending |
| Page-based granularity | `/design homepage,services` is more flexible than designing everything at once | — Pending |
| Reference reverse-engineering | Analyzing existing great designs beats generating from nothing — better quality baseline | — Pending |

---
*Last updated: 2026-03-10 after initialization*
