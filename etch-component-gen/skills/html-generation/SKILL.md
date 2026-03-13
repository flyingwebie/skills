---
name: html-generation
description: >
  Generates semantic HTML with ACSS utility classes for Etch components.
  Handles element mapping, landmark selection, heading hierarchy, and accessibility attributes.
---

# HTML Generation Skill

Produces semantic HTML output for Etch components. Applies ACSS utility classes directly in the HTML for spacing and typography. All structural decisions follow the Section > Container > Content hierarchy from the etch-conventions skill.

## Purpose

This skill generates the `index.html` for each Etch component. It is responsible for:
- Selecting the correct semantic HTML element for the component type (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<aside>`)
- Applying the BEM block class and element classes to all elements
- Adding ACSS utility classes for spacing and typography directly in the markup (not in CSS)
- Setting accessibility attributes: `aria-label` on landmarks, `alt` on images, correct heading hierarchy
- Adding performance attributes: `loading="lazy"` and `decoding="async"` on images

## Algorithm

When generating HTML for a component:

1. **Determine the outer semantic element** — Select based on component type:
   - `hero`, `section`, `custom`: `<section>`
   - `nav`: `<nav>`
   - `footer`: `<footer>`
   - `card`, `form`: `<article>` (if standalone) or `<div>` (if inside a grid)
   - If uncertain, use `<section>` and add `aria-label` with the component name

2. **Apply BEM block class** — Add the component name as the block class on the outer element: `class="pricing-table"`

3. **Add container wrapper** — Nest a `<div class="{block}__container">` inside the outer element for content width and padding

4. **Map content to semantic elements:**
   - Main heading: `<h2 class="{block}__heading">` (h2 assuming one h1 per page; use h1 for hero sections)
   - Subheading/kicker: `<p class="{block}__kicker">` or `<h3 class="{block}__subheading">`
   - Body text: `<p class="{block}__text">`
   - Primary CTA: `<a href="#" class="{block}__cta">` — never `<button>` for navigation
   - Secondary CTA: `<a href="#" class="{block}__link">`
   - List: `<ul class="{block}__list"><li class="{block}__item">...</li></ul>`
   - Image: `<img class="{block}__image" src="" alt="" loading="lazy" decoding="async">`

5. **Add ACSS utility classes** — Apply spacing and typography via ACSS utility classes alongside BEM classes. Utility classes go in HTML, component-specific layout goes in CSS.

6. **Add accessibility attributes** — Every `<section>` and `<nav>` needs `aria-label` or `aria-labelledby`. Interactive elements need appropriate roles and states.

## References

The following reference files will be added in Phase 2:
- `skills/html-generation/references/acss-class-map.md` — ACSS 4.x utility class reference for spacing, typography, and colors
- `skills/html-generation/references/semantic-patterns.md` — Pre-built semantic HTML patterns for common component types (hero, pricing, features, testimonials, CTA, nav, footer)

## Not Yet Implemented

This skill is a **Phase 2 deliverable**. Phase 2 will add:
- Complete ACSS 4.x utility class map (spacing, typography, color utility classes)
- Semantic HTML pattern templates for each component type
- Full heading hierarchy logic
- Accessibility attribute generation rules
