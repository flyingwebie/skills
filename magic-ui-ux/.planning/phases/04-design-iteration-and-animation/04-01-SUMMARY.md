---
phase: 04-design-iteration-and-animation
plan: 01
subsystem: ui
tags: [stitch, iteration, variants, design-system, mcp]

# Dependency graph
requires:
  - phase: 03-page-design-engine
    provides: UI Agent with 7-step workflow, Stitch screen generation, state persistence
provides:
  - /iterate command with variant generation and screen editing modes
  - UI Agent iteration workflow (Variant Generation 4-step + Screen Edit 5-step)
  - Token constraint enforcement for design system consistency during iteration
affects: [04-design-iteration-and-animation]

# Tech tracking
tech-stack:
  added: []
  patterns: [token-constraint-enforcement, edit-prompt-crafting, variant-tracking]

key-files:
  created: [commands/iterate.md]
  modified: [agents/ui-agent.md, SKILL.md]

key-decisions:
  - "Default to variant mode when no flag provided -- most common iteration intent"
  - "Screen selection defaults to highest variant number -- users typically iterate on latest"
  - "Token conflicts warn but allow with confirmation -- users may intentionally diverge"

patterns-established:
  - "Token constraint enforcement: cross-reference edits against tokens.json before Stitch calls"
  - "Edit prompt crafting: include unchanged element tokens to maintain full-page consistency"
  - "Variant tracking: incremented variant numbers with full state persistence"

requirements-completed: [PAGE-04]

# Metrics
duration: 2min
completed: 2026-03-10
---

# Phase 4 Plan 1: Iterate Command Summary

**/iterate command with variant generation and token-constrained screen editing via Stitch MCP**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-10T16:40:25Z
- **Completed:** 2026-03-10T16:42:42Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Created /iterate command with two modes: variant generation (--variants) and screen editing (--edit)
- Extended UI Agent with Iteration Workflow section containing Variant Generation (4 steps) and Screen Edit (5 steps) sub-workflows
- Token constraint enforcement warns users when edits conflict with design system values
- Screen selection handles multi-screen pages with default to most recent variant

## Task Commits

Each task was committed atomically:

1. **Task 1: Create /iterate command with variant and edit flows** - `a453dde` (feat)
2. **Task 2: Extend UI Agent with iteration workflow steps** - `4d32e11` (feat)

## Files Created/Modified
- `commands/iterate.md` - /iterate command with variant mode, edit mode, token constraint enforcement, screen selection, error handling
- `agents/ui-agent.md` - Added Iteration Workflow section with Variant Generation and Screen Edit sub-workflows, plus quality rules 6-7
- `SKILL.md` - Added /iterate command to Commands table

## Decisions Made
- Default to variant mode when no flag is provided, as exploring alternatives is the most common iteration intent
- Screen selection defaults to the highest variant number (most recent), since users typically iterate forward
- Token conflicts warn but allow with user confirmation, supporting intentional design system divergence

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- /iterate command ready for use on any page with status "designed"
- UI Agent iteration workflows integrate seamlessly with existing 7-step generation workflow
- Plan 04-02 (animation) can proceed independently

---
*Phase: 04-design-iteration-and-animation*
*Completed: 2026-03-10*
