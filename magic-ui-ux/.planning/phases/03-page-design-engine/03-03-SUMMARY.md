---
phase: 03-page-design-engine
plan: 03
subsystem: ui
tags: [stitch, mcp, design-tokens, prompt-engineering, screen-generation]

requires:
  - phase: 02-branding-pipeline
    provides: Design tokens, branding.md, and token generation pipeline
provides:
  - Full UI Agent implementation with 7-step Stitch screen generation workflow
  - Stitch prompt crafting guide with section-specific templates for 14 section types
  - Token-faithful prompt assembly pattern ensuring brand consistency
affects: [04-design-iteration, 05-animation-motion]

tech-stack:
  added: []
  patterns: [stitch-prompt-crafting, token-embedding, full-page-prompt-assembly]

key-files:
  created:
    - skills/branding/references/stitch-prompt-guide.md
  modified:
    - agents/ui-agent.md

key-decisions:
  - "Full-page prompts preferred over per-section for Stitch visual cohesion"
  - "Failed prompts saved to .ui-ux/briefs/{page}-stitch-prompt.md for debugging"
  - "Quality checklist enforced before every Stitch call (3+ hex colors, font families, style adjectives)"

patterns-established:
  - "Prompt structure formula: Page Context + Section Layout + Visual Style + Colors + Typography + Content + Patterns + Mood"
  - "Token embedding: always exact hex values, font family names, UI style with adjectives -- never vague descriptions"

requirements-completed: [PAGE-03]

duration: 3min
completed: 2026-03-10
---

# Phase 3 Plan 3: UI Agent & Stitch Prompt Guide Summary

**Full UI Agent with 7-step Stitch workflow and prompt crafting guide with 14 section templates enforcing token-faithful screen generation**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-10T16:02:13Z
- **Completed:** 2026-03-10T16:05:24Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Stitch prompt crafting guide with templates for hero, features, pricing, testimonials, CTA, about, FAQ, contact, footer, navigation, portfolio, comparison, blog, onboarding, and notification sections
- Full UI Agent implementation replacing interface-only contract with 7-step workflow: pre-flight, brief analysis, prompt crafting, project management, screen generation, persistence, output summary
- Worked prompt assembly example demonstrating token + brief + copy to Stitch prompt transformation

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Stitch prompt crafting guide** - `46abbd4` (feat)
2. **Task 2: Implement full UI Agent workflow** - `98c3017` (feat)

## Files Created/Modified
- `skills/branding/references/stitch-prompt-guide.md` - Prompt structure formula, token embedding rules, 14 section templates, UI style modifiers, quality checklist, anti-patterns
- `agents/ui-agent.md` - Full 7-step process, prompt assembly example, error recovery, quality rules

## Decisions Made
- Full-page prompts preferred over per-section prompts because Stitch produces better visual cohesion when it sees all sections together
- Failed Stitch prompts saved to disk for debugging/retry rather than discarded
- Quality checklist is mandatory before every Stitch call (not optional)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- UI Agent is fully implemented and ready to generate screens when invoked via /design command
- Stitch MCP connection required at runtime (not configured by this plan)
- UX Agent (03-01, 03-02) provides the UX briefs that feed into this agent
- Phase 4 will handle design iteration (edit_screens, generate_variants)

---
*Phase: 03-page-design-engine*
*Completed: 2026-03-10*
