---
phase: 06-wire-animation-and-video-skills
plan: 01
subsystem: ui
tags: [animation, video-to-website, commands, schema, gsap, framer-motion, lenis]

# Dependency graph
requires:
  - phase: 04-iterate-and-animate
    provides: "Animation choreography skill"
  - phase: 05-video-to-website
    provides: "Video-to-website skill"
provides:
  - "Step 5 animation choreography in /design pipeline"
  - "/video command entry point for video-to-website skill"
  - "scrollVideoSpecs[] property in state.json schema"
affects: [06-02-PLAN]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Command frontmatter pattern for /video matching existing commands"
    - "Sequential pipeline extension -- animation runs after UI Agent per page"

key-files:
  created:
    - commands/video.md
  modified:
    - commands/design.md
    - skills/persistence/schemas/state.json

key-decisions:
  - "Animation step is mandatory in /design pipeline, not optional -- per ANIM requirements"
  - "/video command follows same pre-flight/input/invoke/summary/error pattern as existing commands"
  - "scrollVideoSpecs schema mirrors animationSpecs structure for consistency"

patterns-established:
  - "Command entry points wire to skills via skill invocation sections"
  - "State schema extended with matching array properties for each skill output"

requirements-completed: [ANIM-01, ANIM-02, ANIM-03]

# Metrics
duration: 3min
completed: 2026-03-10
---

# Phase 06 Plan 01: Wire Animation and Video Skills Summary

**Animation choreography wired as Step 5 in /design pipeline, /video command created for scroll-driven video specs, scrollVideoSpecs[] added to state schema**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-10T17:35:41Z
- **Completed:** 2026-03-10T17:38:41Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Added Step 5 (Animation Choreography) to the /design command, making animation specs a standard deliverable for every designed page
- Created /video command with full pre-flight checks, interactive and file-based sequence input, skill invocation, summary output, and comprehensive error handling
- Extended state.json schema with scrollVideoSpecs[] array matching the video-to-website skill output contract

## Task Commits

Each task was committed atomically:

1. **Task 1: Add animation choreography step to /design command pipeline** - `d224eb7` (feat)
2. **Task 2: Create /video command and add scrollVideoSpecs to state schema** - `6ce7c57` (feat)

## Files Created/Modified
- `commands/design.md` - Added Step 5 invoking animation skill after UI Agent, updated summary output with Animation column, added /video to next steps
- `commands/video.md` - New command entry point for video-to-website skill with pre-flight, input parsing, skill invocation, and error handling
- `skills/persistence/schemas/state.json` - Added scrollVideoSpecs[] array property at same level as animationSpecs[]

## Decisions Made
- Animation step is mandatory (not optional) in /design pipeline -- every page gets animation specs as a standard deliverable per ANIM requirements
- /video command follows the same structural pattern as /branding, /design, and /iterate for consistency
- scrollVideoSpecs schema structure mirrors animationSpecs exactly (page + specPath) for uniformity

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All command entry points now exist for animation and video-to-website skills
- Plan 06-02 can proceed with any remaining gap closure work
- SKILL.md plugin index should be updated to reference the new /video command

---
*Phase: 06-wire-animation-and-video-skills*
*Completed: 2026-03-10*
