---
name: etch-conventions
description: >
  Etch best practices for component generation. Encodes Section > Container hierarchy,
  AutoBEM naming alignment, container-query responsive approach, and accessibility defaults.
  Consult this skill before generating any HTML, CSS, or JS for Etch components.
---

# Etch Conventions

This skill defines the structural rules that govern all generated Etch output. Every generation skill (html-generation, css-generation, js-generation) must consult this skill before producing output.

---

## Element Hierarchy

Etch provides 15 fundamental elements. The plugin generates HTML that maps to these elements.

| Etch Element | HTML Tag | Purpose |
|-------------|----------|---------|
| Section | `<section>` | Top-level page section; handles semantic structure and spacing |
| Container | `<div>` | Inner wrapper inside Section; constrains width, organizes content |
| Div | `<div>` | Generic wrapper (defaults `display: flex; width: 100%` when "Flex Div") |
| Heading | `<h1>`–`<h6>` | Text hierarchy; defaults to `<h2>` (most common in page building) |
| Text | `<p>`, `<span>`, `<li>` | Paragraph by default; tag is changeable |
| Anchor | `<a>` | Link functionality |
| Image | `<img>` | Static image |
| Dynamic Image | `<img>` | WordPress dynamic image (recommended for WP integration) |
| Svg | `<svg>` | Vector graphics |
| Iframe | `<iframe>` | Embedded content |
| Html | raw HTML | Parses raw HTML; used for dynamic data and component props containing HTML |
| Element | any tag | Dynamic element — tag changeable via prop |
| Condition | ghost | Conditional rendering (no DOM output) |
| Loop | ghost | Iterative rendering (no DOM output) |
| Empty | ghost | Placeholder element |

**Core structural pattern:**

```
Section > Container > [content elements]
```

- **Section** is always the outermost structural unit
- **Container** lives inside Section and constrains content width
- **Content elements** (Heading, Text, Div, Image, Anchor) are nested within Containers

This hierarchy is non-negotiable. Every generated component must follow it.

---

## AutoBEM Naming Rules

Etch has a built-in AutoBEM feature that generates BEM classes from the element tree. Generated output must match what AutoBEM would produce so users can paste HTML into Etch without class conflicts.

### Block

The component name in kebab-case:

```
pricing-table
hero
features-grid
```

### Elements

Flat — single depth only. Elements are direct conceptual children of the block regardless of DOM depth:

```css
/* Correct */
.pricing-table__heading
.pricing-table__text
.pricing-table__image
.pricing-table__cta

/* Wrong — never nest BEM elements */
.pricing-table__header__heading
.pricing-table__body__text
```

### Element Names Map to Etch Element Types

| Etch Element | BEM Element Suffix |
|-------------|-------------------|
| Heading | `__heading` |
| Text | `__text` |
| Image, Dynamic Image | `__image` |
| Container | `__container` |
| Anchor (CTA) | `__cta` |
| Div (wrapper) | `__wrapper` |
| Svg | `__icon` |

### Modifiers

Double hyphen separator:

```css
.pricing-table--featured
.pricing-table--popular
.hero--dark
```

### CSS Stemming

In Etch's CSS panel, use `&__` and `&--` stemming patterns. Etch's CSS panel expands these into full selectors:

```css
.pricing-table {
  padding: var(--space-l);

  &__heading {
    font-size: var(--h2);
    color: var(--heading-color);
  }

  &__text {
    font-size: var(--text-m);
    color: var(--text-color);
  }

  &--featured {
    border: var(--border);
    border-color: var(--primary);
  }
}
```

---

## Container-Query Responsive Approach

Etch uses a **container-query-first** philosophy. Do not use `@media` queries with fixed device breakpoints for component-level responsive behavior.

### Core Rules

1. **No global breakpoints for components.** Each component adapts based on its available space, not the device viewport.
2. Use `@container` syntax — same syntax as `@media` but scoped to the component's container context.
3. The component declares its own container query context using the `:has(> &)` pattern, which sets `container-type: inline-size` on whatever parent wraps it.
4. Thresholds are component-specific — a card adapts at 412px, a navigation at 322px.

### Pattern

```css
.hero {
  :has(> &) {
    container-type: inline-size;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @container (width >= 600px) {
    &__container {
      grid-template-columns: 1fr 1fr;
    }
  }
}
```

### Note

The `:has(> &)` pattern is recommended by Etch documentation. It makes components portable — they work regardless of what parent element wraps them. The component self-declares its container query needs.

---

## Accessibility Defaults

All generated output must include these accessibility patterns. Do not omit accessibility features to keep output "cleaner" — they are required defaults.

### Semantic Landmarks

Use semantic elements as wrappers — not generic `<div>`:

| Content Type | Element |
|-------------|---------|
| Page section | `<section>` |
| Navigation | `<nav>` |
| Page header | `<header>` |
| Page footer | `<footer>` |
| Main content | `<main>` |
| Article content | `<article>` |

### Heading Hierarchy

- One `<h1>` per page — reserved for the primary page title
- Sequential levels: h2 follows h1, h3 follows h2
- Never skip heading levels (e.g., h1 then h3 is wrong)
- Hero sections typically use `<h1>` if the component is the page hero; inner sections use `<h2>` by default

### Image Defaults

All `<img>` elements must include:

```html
<img
  src="image.jpg"
  alt="Descriptive text about the image content"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
>
```

- `alt` text is required (empty string `alt=""` for decorative images)
- `loading="lazy"` for all non-hero images (prevents layout shift for hero images)
- `decoding="async"` always
- `width` and `height` attributes prevent layout shift

### Motion

Respect user preference for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .component-name {
    animation: none;
    transition: none;
  }
}
```

### Focus Visibility

All interactive elements must have visible focus indicators:

```css
.component-name__cta:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

Never use `outline: none` without providing an alternative focus indicator.

### ARIA Patterns

| Use Case | Pattern |
|---------|---------|
| Toggle buttons (open/close) | `aria-expanded="true/false"` |
| Hidden content | `aria-hidden="true"` |
| Icon-only buttons | `aria-label="Descriptive action"` |
| Navigation landmark | `aria-label="Primary navigation"` |
| Live region updates | `aria-live="polite"` |

### Skip Links and Landmarks

For components that contain navigation or repeated interactive patterns, include:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## Section Structure

Read `references/section-patterns.md` for HTML templates of all 7 section types with correct Etch Section > Container structure, BEM naming, and accessibility attributes.

---

## Grid System

Read `references/grid-system.md` for ACSS grid classes, responsive variants, uneven ratios, and common layout patterns.

---

## CSS Output Rules

When generating CSS for Etch components, follow these rules without exception:

1. **Use `&__` and `&--` stemming.** Etch's CSS panel expands these natively. Write `&__heading { }` not `.block__heading { }` (unless the class needs to be reachable outside the parent scope).

2. **Reference only ACSS custom properties for design values.** Colors, spacing, typography, borders — all must use `var(--token-name)`. Acceptable exceptions: layout geometry values that have no ACSS equivalent (grid-template-columns fractions, aspect-ratio, specific z-index values).

3. **Component-specific layout gets raw CSS values.** Grid layout, flex configuration, positioning — these are component-specific and may use raw CSS values (fr units, flex: 0 0 auto, etc.).

4. **Read ACSS token reference for token lookup.** Consult `@${CLAUDE_PLUGIN_ROOT}/skills/css-generation/references/acss-tokens.md` for the complete token catalog. Never guess a token name — look it up.

5. **Container queries for responsive.** Use `@container (width >= X)` with modern range syntax. Not `@media`. Container query context is set via `:has(> &) { container-type: inline-size; }` inside the block selector.

6. **BEM flat naming.** No grandchild BEM elements. If you need to target a deeply nested element, create a flat BEM element class for it.
