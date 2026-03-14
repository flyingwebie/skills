---
name: html-generation
description: >
  Generates semantic HTML with BEM-only classes for Etch components.
  Handles element mapping, landmark selection, heading hierarchy, placeholder content,
  and accessibility attributes. No ACSS utility classes in markup -- all styling goes in CSS.
---

# HTML Generation Skill

Produces semantic HTML output for Etch components. Uses BEM-only class naming in markup. All visual styling (padding, grid layout, button appearance, typography scale) is handled exclusively in CSS via ACSS custom properties. No ACSS utility classes appear in generated HTML.

## Purpose

This skill generates `index.html` for each Etch component. It is responsible for:

- Selecting the correct semantic HTML element for the component type (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Applying BEM block and element classes ONLY -- no ACSS utility classes in markup
- Generating contextual placeholder content from the component name and description
- Using placehold.co URLs for all images
- Setting accessibility attributes: `aria-label` on landmarks, `alt` on images, `role` where needed
- Adding performance attributes: `loading="lazy" decoding="async"` on images (`loading="eager"` for hero images)
- Producing no HTML comments in output

## Algorithm

When generating HTML for a component:

### Step 1 — Determine outer semantic element

Select based on component type:

- `hero`, `features`, `testimonials`, `pricing`, `cta`, `custom` → `<section>`
- `header` → `<header>`
- `footer` → `<footer>`
- Standalone card or article → `<article>`

Always add `aria-label` with a descriptive label derived from the component description.

### Step 2 — Apply BEM block class

The component name in kebab-case becomes the block class on the outer element:

```html
<section class="pricing-table" aria-label="Pricing plans">
```

This is the ONLY class on the outer element. Do NOT add ACSS utility classes like `section--l`.

### Step 3 — Add container wrapper

Nest a `<div class="{block}__container">` inside the outer element. This div constrains content width — styling is applied in CSS, not via utility classes.

```html
<section class="pricing-table" aria-label="Pricing plans">
  <div class="pricing-table__container">
    ...
  </div>
</section>
```

### Step 4 — Map content to semantic elements using BEM element classes only

| Content | HTML | Class |
|---------|------|-------|
| Main heading (hero) | `<h1>` | `{block}__heading` |
| Main heading (non-hero) | `<h2>` | `{block}__heading` |
| Subheading | `<p>` | `{block}__subheading` |
| Body text | `<p>` | `{block}__text` |
| Primary CTA | `<a href="#">` | `{block}__cta` |
| Secondary CTA | `<a href="#">` | `{block}__link` or `{block}__cta-secondary` |
| Unordered list | `<ul role="list">` | `{block}__list` |
| List item | `<li>` | `{block}__item` |
| Image | `<img>` | `{block}__image` |
| Icon (SVG) | `<svg aria-hidden="true">` | `{block}__icon` |
| Card/item wrapper | `<article>` or `<div>` | `{block}__card` or `{block}__item` |
| Grid wrapper | `<div>` or `<ul role="list">` | `{block}__grid` or `{block}__list` |
| Actions wrapper | `<div>` | `{block}__actions` |

CRITICAL: Only BEM classes appear in HTML. No `btn--primary`, `grid--3`, `section--l`, `gap--m`, or any other ACSS utility class.

### Step 5 — Generate contextual placeholder content

Infer content from the component name and description:

- **Headings:** Use contextual text appropriate to the section type:
  - Pricing: "Simple, Transparent Pricing"
  - Features: "Why Choose Us"
  - Testimonials: "What Our Customers Say"
  - CTA: "Ready to Get Started?"
  - Hero: "Build Something Amazing"
  - When no description provided or description is generic: "Everything you need to succeed"

- **Images:** Always use `https://placehold.co/{width}x{height}` URLs with dimensions appropriate to context:
  - Hero backgrounds: `https://placehold.co/1920x1080`
  - Feature icons: use inline `<svg>` placeholders with `aria-hidden="true"` (not img)
  - Avatars: `https://placehold.co/64x64`
  - Card images: `https://placehold.co/600x400`
  - Logos: `https://placehold.co/120x40`

- **Pricing:** Use realistic tiers — Starter $19/mo, Pro $49/mo, Enterprise Custom
- **Testimonials:** Use realistic names and roles — Jane Doe, CEO at Acme Corp; John Smith, Marketing Director at Example Inc; Sarah Wilson, Product Manager at Tech Co
- **Repeating items:** Claude decides item count per section type based on what looks complete for that layout (typically 3 for features, testimonials, pricing; 4 nav columns in footer)

### Step 6 — Add accessibility attributes

- Every `<section>`, `<nav>`, `<header>`, `<footer>` must have `aria-label`
- All `<img>` elements must have descriptive `alt` text (empty `alt=""` for decorative images)
- All `<img>` elements must have `loading="lazy" decoding="async" width="{w}" height="{h}"` (hero images use `loading="eager"`)
- Feature lists and nav lists use `role="list"` on `<ul>`
- Price amounts use `aria-label` with full text ("19 dollars per month")
- Mobile toggle buttons use `aria-expanded`, `aria-controls`, `aria-label`
- Hidden content panels use `aria-hidden="true"` and `hidden` attribute
- Icon SVGs always have `aria-hidden="true"`

## Output Rules

- Generated HTML must contain ZERO ACSS utility classes. All styling is handled by the CSS generation skill.
- No HTML comments in output -- BEM class names are self-documenting.
- Use standard `<svg>` elements with placeholder paths for icons, not `<etch:svg />` (which is builder-specific, not valid in standalone HTML).

## Section Templates Reference

For complete HTML templates per section type, read `@${CLAUDE_PLUGIN_ROOT}/skills/etch-conventions/references/section-patterns.md`.

Templates show the exact BEM class structure, semantic elements, and accessibility attributes for each of the 7 section types: hero, features grid, testimonials, pricing, CTA, footer, and header/navigation.
