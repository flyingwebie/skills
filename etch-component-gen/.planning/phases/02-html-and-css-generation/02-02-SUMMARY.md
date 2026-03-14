---
phase: 02-html-and-css-generation
plan: "02"
subsystem: html-generation
tags: [html, bem, accessibility, section-patterns, placehold.co]
dependency_graph:
  requires: []
  provides: [html-generation-skill, section-patterns-bem-only]
  affects: [css-generation, js-generation, generate-command]
tech_stack:
  added: []
  patterns: [BEM-only HTML, placehold.co placeholders, ARIA landmark attributes]
key_files:
  created: []
  modified:
    - skills/html-generation/SKILL.md
    - skills/etch-conventions/references/section-patterns.md
decisions:
  - "BEM-only in HTML markup: all ACSS utility classes (section--l, grid--3, btn--primary, gap--m) moved entirely to CSS -- HTML only carries semantic structure and BEM class names"
  - "placehold.co as standard image placeholder: consistent dimensions per content type (1920x1080 hero, 64x64 avatar, 120x40 logo)"
  - "No HTML comments in output: BEM class names are self-documenting; comments add noise to copy-paste output"
metrics:
  duration: "3 min"
  completed_date: "2026-03-14"
  tasks_completed: 2
  files_modified: 2
---

# Phase 2 Plan 02: HTML Generation Skill and BEM-Only Section Templates Summary

BEM-only HTML generation algorithm with 6-step skill, placehold.co image URLs, and all 7 section templates stripped of ACSS utility classes.

## What Was Built

### Task 1: HTML Generation Skill Rewrite

`skills/html-generation/SKILL.md` replaced its "Not Yet Implemented" stub with a complete 6-step generation algorithm:

1. Determine outer semantic element (section, header, footer, article)
2. Apply BEM block class only -- no ACSS utility classes on outer element
3. Add container wrapper `{block}__container`
4. Map content to semantic elements with BEM element classes (full table: h1/h2, p, a, ul, li, img, svg, div)
5. Generate contextual placeholder content with placehold.co URLs by context (1920x1080 hero, 64x64 avatars, 120x40 logos)
6. Add accessibility attributes (aria-label on all landmarks, alt on all images, role=list, aria-expanded on toggles)

Output rules: zero ACSS utility classes in generated HTML, no HTML comments, standard SVG elements for icons.

### Task 2: Section Patterns BEM-Only Update

`skills/etch-conventions/references/section-patterns.md` had all 7 templates rewritten to remove ACSS utility classes:

- **Hero:** `class="hero"` (removed `section--l`); CTAs use `hero__cta` and `hero__cta-secondary` (removed `btn--primary btn--l`, `btn--outline btn--primary btn--l`); background image updated to `https://placehold.co/1920x1080` with `loading="eager"`
- **Features Grid:** `class="features-grid__list"` (removed `grid--3 grid--m-2 grid--s-1 gap--m`); `role="list"` preserved; SVG icon placeholders have inline rect paths
- **Testimonials:** `class="testimonials__grid"` (removed `grid--3 grid--m-2 grid--s-1 gap--m`); avatar images updated to `https://placehold.co/64x64` with `width="64" height="64"`
- **Pricing:** `class="pricing__grid"` (removed `grid--3 grid--m-1 gap--m`); all CTA `btn--*` classes removed, `pricing__cta` BEM class only; `pricing__card--popular` modifier preserved; all aria-labels on cards and feature lists preserved
- **CTA Section:** `class="cta-section"` (removed `section--l`); actions use `cta-section__primary` and `cta-section__secondary` (removed `btn--primary btn--l`, `btn--outline btn--primary btn--l`)
- **Footer:** `class="site-footer"` (removed `section--m`); top grid `class="site-footer__top"` (removed `grid--4 grid--m-2 grid--s-1 gap--l`); logo updated to `https://placehold.co/120x40`
- **Header/Nav:** Login uses `site-header__login`, CTA uses `site-header__cta`; mobile actions use `site-header__mobile-login` and `site-header__mobile-cta` (all `btn--*` classes removed); logo updated to `https://placehold.co/120x40`

All HTML comments removed from all templates. Notes sections updated to state "all styling handled in CSS via ACSS custom properties."

## Verification

- html-generation SKILL.md: complete 6-step algorithm, zero "Not Yet Implemented" markers
- html-generation SKILL.md: no ACSS utility classes in generated markup instructions
- html-generation SKILL.md: placehold.co specified for all images with dimension guidance
- html-generation SKILL.md: aria-label required on all landmark elements
- section-patterns.md: zero ACSS utility classes in any HTML template
- section-patterns.md: placehold.co URLs for all 6 image instances
- section-patterns.md: zero HTML comments
- section-patterns.md: all 7 section types present with correct semantic landmarks
- Hero template uses h1; all other sections use h2

## Deviations from Plan

None - plan executed exactly as written.

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| Task 1 | 650e75e | feat(02-02): rewrite HTML generation skill with BEM-only algorithm |
| Task 2 | 462fbae | feat(02-02): update all 7 section templates to BEM-only HTML |

## Self-Check: PASSED

- skills/html-generation/SKILL.md: FOUND
- skills/etch-conventions/references/section-patterns.md: FOUND
- Commit 650e75e: FOUND
- Commit 462fbae: FOUND
