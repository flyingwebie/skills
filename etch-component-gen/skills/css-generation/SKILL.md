---
name: css-generation
description: >
  Generates BEM-scoped CSS with ACSS custom property references for Etch components.
  Uses &__/&-- stemming compatible with Etch CSS panel. All design values via ACSS tokens --
  zero hardcoded values. Container queries via :has(> &) pattern.
---

# CSS Generation Skill

Produces BEM-scoped CSS for Etch components using native CSS nesting with `&__`/`&--` stemming. All design values reference ACSS 4.x custom properties — no hardcoded colors, spacing, or typography values. Container queries use the `:has(> &)` pattern for portability.

## Purpose

This skill generates the `style.css` for each Etch component. It is responsible for:

- Generating the block selector with all elements nested using `&__`/`&--` stemming
- Referencing ACSS custom properties for ALL design values: colors, spacing, typography, borders
- Using `:has(> &) { container-type: inline-size; }` for container query setup — never on the block itself
- Writing `@container` rules for responsive layout changes (never `@media` for component-level behavior)
- Providing complete button/CTA styling since no ACSS utility classes are used in HTML
- Adding `:focus-visible` styles on interactive elements
- Adding `@media (prefers-reduced-motion: reduce)` when the component has transitions or animations

## Algorithm

When generating CSS for a component, follow these 8 steps in order:

### Step 1 — Create block selector with container query setup

```css
.{component-name} {
  :has(> &) {
    container-type: inline-size;
  }

  /* component-level styles */
}
```

The `:has(> &)` pattern tells the **parent** of the component to become a container. This makes the component portable — it works regardless of where it is placed in the DOM. Do NOT put `container-type: inline-size` directly on the block selector.

### Step 2 — Add section-level styles on block selector

Add layout and spacing properties directly on the block selector:

```css
.{component-name} {
  :has(> &) {
    container-type: inline-size;
  }

  padding-block: var(--section-space-l);
  background: var(--base-ultra-light); /* only if needed */
}
```

Use ACSS section spacing tokens for vertical padding. Background is only added when the design calls for it. Only layout and spacing properties go directly on the block selector.

### Step 3 — Add container wrapper styles

```css
&__container {
  max-width: var(--content-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
```

### Step 4 — Nest element selectors using `&__` stemming

For each BEM element in the HTML, create a nested selector with ACSS token values.

**Typography elements:**

```css
&__heading {
  font-size: var(--h2);  /* or var(--h1) for hero */
  color: var(--heading-color);
  line-height: var(--heading-line-height);
  margin-block-end: var(--space-xs);
}

&__subheading {
  font-size: var(--text-l);
  color: var(--text-color);
  margin-block-end: var(--space-xl);
}

&__text {
  font-size: var(--text-m);
  color: var(--text-color);
  line-height: var(--text-line-height);
}
```

**Grid and list containers:**

```css
&__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap);
}

&__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap);
  list-style: none;
  padding: 0;
  margin: 0;
}
```

**Card elements:**

```css
&__card {
  background: var(--base-ultra-light);
  border: var(--border);
  border-radius: var(--radius);
  padding: var(--space-l);
  display: flex;
  flex-direction: column;
}
```

**Image elements:**

```css
&__image {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
  object-fit: cover;
}
```

### Step 5 — Add CTA/button styling (CRITICAL — no btn-- classes in HTML)

Since generated HTML uses BEM classes only (no ACSS utility classes like `btn--primary`), the CSS must provide complete button appearance.

**Primary CTA:**

```css
&__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-s) var(--space-l);
  background: var(--primary);
  color: var(--neutral-ultra-light);
  border-radius: var(--btn-radius);
  font-size: var(--text-m);
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--primary-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}
```

**Secondary or outline CTA:**

```css
&__cta-secondary,
&__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-s) var(--space-l);
  background: transparent;
  color: var(--primary);
  border: var(--border-size) solid var(--primary);
  border-radius: var(--btn-radius);
  font-size: var(--text-m);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--primary);
    color: var(--neutral-ultra-light);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}
```

### Step 6 — Add modifier selectors using `&--` stemming

```css
&__card--popular {
  border-color: var(--primary);
  box-shadow: 0 4px 24px color-mix(in oklch, var(--primary) 15%, transparent);
}
```

Use modifiers for: featured/popular states, dark variants, size variations. Decide whether modifiers are appropriate based on the component type and requirements.

### Step 7 — Add container query responsive rules

```css
@container (width >= 600px) {
  &__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (width >= 900px) {
  &__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Use `width >=` syntax (modern range syntax). Breakpoint thresholds are component-specific — decide based on the content layout. These rules nest inside the block selector.

### Step 8 — Add accessibility and motion styles

```css
@media (prefers-reduced-motion: reduce) {
  &__cta,
  &__cta-secondary,
  &__link {
    transition: none;
  }
}
```

Include this rule whenever the component has CSS transitions or animations. Ensure all interactive elements have `:focus-visible` styles (added in Step 5 for CTAs). Also add `:focus-visible` on any interactive elements that are part of JS-driven interactions (toggle buttons, carousel buttons, dot indicators) — see Interactive Component CSS Patterns section below.

---

## Interactive Component CSS Patterns

These patterns are only added when the component has JavaScript interactivity (Level 1+ per js-generation skill classification). They supplement the standard 8-step algorithm.

### Pattern 1 — Toggle button styling (for pricing toggle)

```css
&__toggle {
  display: flex;
  justify-content: center;
  gap: var(--space-xs);
  margin-block-end: var(--space-xl);
}

&__toggle-btn {
  padding: var(--space-xs) var(--space-m);
  background: transparent;
  color: var(--text-color);
  border: var(--border-size) solid var(--neutral-light);
  border-radius: var(--btn-radius);
  font-size: var(--text-s);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &--active {
    background: var(--primary);
    color: var(--neutral-ultra-light);
    border-color: var(--primary);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}
```

### Pattern 2 — Carousel CSS (for testimonials scroll-snap)

```css
&__grid {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: var(--grid-gap);
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

&__item {
  flex: 0 0 100%;
  scroll-snap-align: start;
}

@container (width >= 600px) {
  &__item {
    flex: 0 0 calc(50% - var(--grid-gap) / 2);
  }
}

@container (width >= 900px) {
  &__item {
    flex: 0 0 calc(33.333% - var(--grid-gap) * 2 / 3);
  }
}
```

### Pattern 3 — Carousel navigation styling

```css
&__carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
  margin-block-start: var(--space-l);
}

&__prev,
&__next {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xs);
  background: transparent;
  border: var(--border-size) solid var(--neutral-light);
  border-radius: var(--radius);
  color: var(--text-color);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}

&__dots {
  display: flex;
  gap: var(--space-xs);
}

&__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--neutral-light);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease;

  &--active {
    background: var(--primary);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}
```

### Pattern 4 — Mobile nav :focus-visible (for header)

```css
&__mobile-toggle {
  /* ... existing mobile toggle styles ... */

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}

&__mobile-link {
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}
```

---

## Anti-Patterns

Avoid these errors — they produce broken or non-portable output:

- **NEVER** hardcode hex colors, pixel spacing, or font sizes. Always use `var(--token)`
- **NEVER** use `container-type: inline-size` directly on the block selector. Always use `:has(> &)` pattern
- **NEVER** use `@media` for component-level responsive behavior. Always use `@container`
- **NEVER** use old ACSS 3.x tokens: no `--space-xxl` (use `--space-2xl`), no `--primary-trans-20` (use `color-mix()`)
- **NEVER** use grandchild BEM nesting: `.block__parent__child` — use `.block__child` (flat)
- **NEVER** forget `:focus-visible` on interactive elements (CTAs, links, buttons)
- **NEVER** forget `:focus-visible` on interactive elements added for JS interactivity (toggle buttons, carousel nav, dot indicators) — same pattern as CTA focus-visible
- Layout-specific raw values ARE acceptable: `grid-template-columns: repeat(3, 1fr)`, `aspect-ratio: 16/9`, `z-index: 10`

---

## Token Lookup

Always consult `@${CLAUDE_PLUGIN_ROOT}/skills/css-generation/references/acss-tokens.md` for the complete token catalog before choosing any token name.

Never guess a token name — look it up. Common mistakes:

- Using `--border-radius` instead of `--radius`
- Using `--body-color` instead of `--text-color`
- Using `--space-xxl` (3.x) instead of `--space-2xl` (4.x)
- Using `--primary-trans-20` (does not exist) instead of `color-mix(in oklch, var(--primary) 20%, transparent)`
