---
phase: 04-design-iteration-and-animation
plan: 02
subsystem: ui
tags: [framer-motion, gsap, scrolltrigger, swup, lenis, animation, choreography]

# Dependency graph
requires:
  - phase: 03-page-design-engine
    provides: UX briefs with psychology rationale per section
provides:
  - Animation choreography skill with per-page spec generation
  - Animation reference guide with 4 library patterns
  - Psychology-to-animation mapping for motion decisions
affects: [05-video-to-website]

# Tech tracking
tech-stack:
  added: [framer-motion, gsap, scrolltrigger, swup, lenis]
  patterns: [section-type-to-animation-mapping, ui-style-to-intensity-mapping, psychology-animation-mapping]

key-files:
  created:
    - skills/animation/SKILL.md
    - skills/animation/references/animation-guide.md
  modified:
    - SKILL.md

key-decisions:
  - "Animation intensity driven by UI style tokens (restrained/moderate/expressive)"
  - "Per-section choreography with independent viewport triggers, not cross-section sequencing"
  - "Reduced motion fallback mandatory for every animation spec"

patterns-established:
  - "UI style to animation intensity: Minimalism=restrained, Bold/Vibrant=expressive, etc."
  - "Animation spec output format: overview, section choreography, page transition, smooth scroll, accessibility"
  - "Psychology skills map to specific animation behaviors via reference table"

requirements-completed: [ANIM-01, ANIM-02]

# Metrics
duration: 3min
completed: 2026-03-10
---

# Phase 04 Plan 02: Animation Choreography Summary

**Per-page animation choreography skill producing Framer Motion, GSAP + ScrollTrigger, Swup.js, and Lenis specs driven by UX psychology rationale and UI style tokens**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-10T16:40:30Z
- **Completed:** 2026-03-10T16:43:40Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Animation reference guide covering 4 libraries with concrete code patterns, section-type mappings, and psychology-animation mappings
- Animation choreography skill with 5-step process reading UX briefs and tokens to produce implementation-ready specs
- Root SKILL.md updated with animation skill entry

## Task Commits

Each task was committed atomically:

1. **Task 1: Create animation reference guide with library-specific patterns** - `85ebbdd` (feat)
2. **Task 2: Create animation choreography skill with per-page spec generation** - `95b4494` (feat)

## Files Created/Modified
- `skills/animation/references/animation-guide.md` - Library-specific animation patterns (Framer Motion, GSAP + ScrollTrigger, Swup.js, Lenis) with section-type mappings, psychology mappings, and anti-patterns
- `skills/animation/SKILL.md` - Animation choreography skill with 5-step process, input/output contract, UI style intensity mapping
- `SKILL.md` - Added animation skill to root skills table

## Decisions Made
- Animation intensity driven by UI style from tokens.json (restrained for Minimalism/Clean Modern, moderate for Editorial/Organic, expressive for Bold/Dark Mode Premium)
- Each section triggers independently on viewport entry rather than cross-section sequencing -- simpler and more predictable
- Reduced motion fallback required for every animation (remove transforms, keep fades at 50% duration, disable parallax and smooth scroll)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Animation skill ready to generate per-page specs for any designed page
- Integrates with /design command as optional post-design step
- Reference guide provides developer-ready code patterns for all 4 animation libraries

---
*Phase: 04-design-iteration-and-animation*
*Completed: 2026-03-10*
