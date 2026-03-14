---
phase: 02-html-and-css-generation
plan: "03"
subsystem: css-generation
tags: [css, bem, acss, container-queries, accessibility]
dependency_graph:
  requires: []
  provides: [css-generation/SKILL.md complete algorithm]
  affects: [etch-conventions/SKILL.md, CLAUDE.md]
tech_stack:
  added: []
  patterns: [":has(> &) container query portability", "BEM flat stemming with &__/&--", "color-mix() for transparency", "modern range syntax (width >=)"]
key_files:
  created: []
  modified:
    - skills/css-generation/SKILL.md
    - skills/etch-conventions/SKILL.md
    - CLAUDE.md
decisions:
  - ":has(> &) container query pattern standardized across all three files for consistency"
  - "Complete button styling in CSS (no ACSS utility classes in generated HTML)"
  - "Modern range syntax (width >=) preferred over min-width for container queries"
metrics:
  duration: "2 min"
  completed: "2026-03-14"
requirements_satisfied: [GEN-03, QUAL-03, QUAL-04]
---

# Phase 2 Plan 3: CSS Generation Skill Summary

**One-liner:** Complete 8-step CSS generation algorithm with `:has(> &)` container queries, BEM stemming, ACSS 4.x token references, button styling, focus-visible, and prefers-reduced-motion.

## What Was Built

### Task 1 — CSS generation skill complete rewrite

Replaced the Phase 1 stub (`skills/css-generation/SKILL.md`) with a fully specified 8-step algorithm:

1. Block selector with `:has(> &) { container-type: inline-size; }` container query setup
2. Section-level styles on the block selector (padding-block, background)
3. Container wrapper styles (max-width, margin-inline, padding-inline)
4. Element selectors using `&__` stemming (typography, grid, list, card, image)
5. CTA/button styling (primary and secondary/outline, with hover and focus-visible)
6. Modifier selectors using `&--` stemming
7. Container query responsive rules using modern range syntax (`width >=`)
8. Accessibility styles (prefers-reduced-motion, focus-visible)

Also added: anti-patterns section (hardcoding, wrong container pattern, old 3.x tokens, grandchild BEM), and token lookup guidance referencing `acss-tokens.md`.

### Task 2 — Container query pattern updated in etch-conventions and CLAUDE.md

Updated three locations from the old `container-type: inline-size` on the block selector approach to the `:has(> &)` portable pattern:

- `skills/etch-conventions/SKILL.md` Container-Query Responsive Approach section: updated Core Rule 3 and the Pattern code block
- `skills/etch-conventions/SKILL.md` CSS Output Rules rule 5: updated to `width >=` modern range syntax and `:has(> &)` context declaration
- `CLAUDE.md` Key Rules rule 5: updated language to reference `:has(> &)` pattern and portability benefit

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | d61f238 | feat(02-03): rewrite CSS generation skill with complete 8-step algorithm |
| 2 | acc7ba2 | feat(02-03): update container query pattern to :has(> &) in conventions and CLAUDE.md |

## Deviations from Plan

None - plan executed exactly as written.

## Self-Check: PASSED

Files verified:
- skills/css-generation/SKILL.md - exists, contains :has(> &), @container, focus-visible, prefers-reduced-motion, acss-tokens.md reference, zero "Not Yet Implemented" markers
- skills/etch-conventions/SKILL.md - contains 4 occurrences of :has(> &)
- CLAUDE.md - contains :has(> &), old "outer wrapper needs" language removed
