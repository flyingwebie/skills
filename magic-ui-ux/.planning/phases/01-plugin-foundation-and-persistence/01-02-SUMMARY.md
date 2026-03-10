---
phase: 01-plugin-foundation-and-persistence
plan: 02
subsystem: skills
tags: [psychology, routing, cognitive-psychology, ux-analysis, skill-mapping]

# Dependency graph
requires:
  - phase: none
    provides: standalone skill definition
provides:
  - Psychology router SKILL.md with section-to-skill routing logic
  - Section-skill mapping reference covering 15 section types
  - Skill summaries for all 14 cognitive psychology skills
affects: [02-core-agents, 03-stitch-integration, ux-agent]

# Tech tracking
tech-stack:
  added: []
  patterns: [section-type routing, page-type modifiers, skill-cap enforcement]

key-files:
  created:
    - skills/psychology-router/SKILL.md
    - skills/psychology-router/references/section-skill-map.md
    - skills/psychology-router/references/skill-summaries.md
  modified: []

key-decisions:
  - "4-skill maximum cap per section to prevent psychology overload"
  - "Page-type modifiers promote existing secondaries only, never inject new skills"
  - "Content/blog pages capped at 2 skills for lighter editorial touch"

patterns-established:
  - "Router pattern: lookup table + modifier promotion + hard cap"
  - "Skill summary format: core principle + design application + key patterns + skill path"

requirements-completed: [FOUND-03]

# Metrics
duration: 3min
completed: 2026-03-10
---

# Phase 1 Plan 2: Psychology Router Summary

**Section-to-skill routing logic mapping 15 section types to 2-4 focused psychology skills with page-type modifiers and 4-skill cap**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-10T15:23:33Z
- **Completed:** 2026-03-10T15:26:50Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Master routing table mapping 15 section types (hero, CTA, pricing, testimonials, features, about, contact, FAQ, footer, navigation, portfolio, onboarding, blog, comparison, notification) to primary and secondary psychology skills
- Selection rules with 4-skill cap, landing-page hero/CTA override, and content/blog 2-skill reduction
- Accurate one-paragraph summaries of all 14 psychology skills extracted from actual skill files (not fabricated)
- Router SKILL.md with clear input/output contract, 7-step algorithm, and 4 worked examples

## Task Commits

Each task was committed atomically:

1. **Task 1: Create section-to-skill mapping and skill summaries** - `514d86c` (feat)
2. **Task 2: Create psychology router SKILL.md** - `882c641` (feat)

## Files Created/Modified
- `skills/psychology-router/SKILL.md` - Router skill with input/output contract, routing algorithm, and usage examples
- `skills/psychology-router/references/section-skill-map.md` - Master routing table, selection rules, and page-type modifiers
- `skills/psychology-router/references/skill-summaries.md` - One-paragraph summaries of all 14 cognitive psychology skills

## Decisions Made
- 4-skill maximum cap per section to prevent the "wall of psychology" anti-pattern
- Page-type modifiers only promote skills already in a section's secondary list (no injection of unrelated skills)
- Content/blog pages reduced to 2-skill cap for lighter editorial analysis
- Summaries are sufficient for brief generation; full skill files only loaded for deep analysis or primary conversion points

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Psychology router is complete and ready for the UX Agent to call during section analysis
- All 14 skill summaries available for quick reference without loading full skill files
- Router pattern established for future skill additions (add row to mapping table + summary entry)

## Self-Check: PASSED

- All 3 created files verified on disk
- Task 1 commit `514d86c` verified in git log
- Task 2 commit `882c641` verified in git log

---
*Phase: 01-plugin-foundation-and-persistence*
*Completed: 2026-03-10*
