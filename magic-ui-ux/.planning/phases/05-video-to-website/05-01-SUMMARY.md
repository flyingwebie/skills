---
phase: 05-video-to-website
plan: 01
subsystem: ui
tags: [canvas, gsap, scrolltrigger, lenis, scroll-video, frame-rendering, webp]

requires:
  - phase: 04-design-iteration-and-animation
    provides: Animation skill structure and patterns (SKILL.md, animation-guide.md) used as template
provides:
  - Video-to-website skill for generating scroll-driven animated site specs
  - Scroll-video reference guide with canvas frame rendering, scroll-to-frame mapping, GSAP pin/scrub patterns
  - Spec output template with frame timelines, content overlay choreography, performance budgets
affects: []

tech-stack:
  added: [canvas-frame-rendering, scroll-to-frame-mapping, webp-sequences]
  patterns: [pinned-canvas-scrub, overlay-choreography-table, section-lazy-preload]

key-files:
  created:
    - skills/video-to-website/SKILL.md
    - skills/video-to-website/references/scroll-video-guide.md
  modified:
    - SKILL.md
    - CLAUDE.md

key-decisions:
  - "Canvas frame rendering only -- no <video> elements for scroll-controlled playback"
  - "Maximum 3 video sequences per page to cap load times"
  - "Mobile fallback: reduced frame count or static image replacement"
  - "Lenis duration 1.4-1.8s for expressive scroll-video (longer than standard animation)"

patterns-established:
  - "Scroll-to-frame formula: Math.floor(scrollProgress * (totalFrames - 1))"
  - "Choreography table format: Progress | Frame Range | Content Visible | Animation"
  - "Sequence definition object: name, frameCount, framePattern, description"
  - "UI style intensity mapping extended for scroll distance and overlay transitions"

requirements-completed: [ANIM-03]

duration: 3min
completed: 2026-03-10
---

# Phase 05 Plan 01: Video-to-Website Skill Summary

**Scroll-driven video-style site specs with canvas frame rendering, GSAP ScrollTrigger pin/scrub, content overlay choreography, and Lenis integration for Apple-style product pages**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-10T16:55:15Z
- **Completed:** 2026-03-10T16:59:14Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Reference guide with 633 lines of implementation-ready patterns for canvas frame rendering, scroll-to-frame mapping, GSAP pin/scrub for sequences, section choreography, Lenis integration, and performance optimization
- Video-to-website skill with 5-step process, interface contract (page, uxBrief, tokens, sequences), spec output template, and key rules
- Plugin index files updated with new skill entry in both SKILL.md and CLAUDE.md architecture tree

## Task Commits

Each task was committed atomically:

1. **Task 1: Create scroll-driven video reference guide** - `593f0c4` (feat)
2. **Task 2: Create video-to-website skill and update plugin index** - `d28cd7e` (feat)

## Files Created/Modified
- `skills/video-to-website/references/scroll-video-guide.md` - Canvas rendering, scroll-to-frame, GSAP pin/scrub, Lenis, performance, don'ts
- `skills/video-to-website/SKILL.md` - Skill process, interface contract, spec template, key rules
- `SKILL.md` - Added video-to-website row to skills table
- `CLAUDE.md` - Added animation/ and video-to-website/ to architecture tree

## Decisions Made
- Canvas frame rendering only -- `<video>` elements cannot be scrubbed precisely with scroll position
- Maximum 3 video sequences per page -- each adds 15-25MB of assets, three is the practical ceiling
- Mobile fallback required -- either reduced frame count (every 2nd/3rd frame) or static image replacement
- Lenis duration extended to 1.4-1.8s for expressive scroll-video pages (vs 1.0-1.2s standard)
- UI style intensity mapping extended with scroll distance and overlay transition speed columns

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase 05 complete -- all planned skills delivered
- Plugin has full capability set: branding, psychology routing, copy generation, persistence, animation choreography, and video-to-website specs
- No blockers for milestone completion

---
*Phase: 05-video-to-website*
*Completed: 2026-03-10*
