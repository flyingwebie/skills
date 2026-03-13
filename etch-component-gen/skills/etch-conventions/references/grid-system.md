# ACSS Grid System Reference

Complete reference for the AutomaticCSS 12-column CSS grid system used in Etch components.

**Usage:** Apply grid classes to the container element. Grid children do not need special classes unless using cell control or ordering.

---

## Column Count Classes

Apply to any wrapper to create an equal-column CSS grid:

| Class | Columns | Typical Use |
|-------|---------|------------|
| `.grid--1` | 1 column | Single column stacked content |
| `.grid--2` | 2 columns | Two-equal split: hero image/text, alternating rows |
| `.grid--3` | 3 columns | Features, testimonials, pricing cards |
| `.grid--4` | 4 columns | Footer nav columns, stats, icon features |
| `.grid--5` | 5 columns | Uncommon; use with cell control |
| `.grid--6` | 6 columns | Logo clouds, gallery rows |
| `.grid--7` | 7 columns | Rarely needed; use with cell control |
| `.grid--8` | 8 columns | Rarely needed; use with cell control |
| `.grid--9` | 9 columns | Rarely needed; use with cell control |
| `.grid--10` | 10 columns | Rarely needed; use with cell control |
| `.grid--11` | 11 columns | Rarely needed; use with cell control |
| `.grid--12` | 12 columns | Full grid control with cell spans |

---

## Responsive Variants

Breakpoints available: `l` (large), `m` (medium), `s` (small).

Pattern: `.grid--{breakpoint}-{n}` where `n` is 1–12.

| Class Example | Effect |
|---------------|--------|
| `.grid--l-4` | 4 columns at large breakpoint |
| `.grid--m-2` | 2 columns at medium breakpoint |
| `.grid--s-1` | 1 column at small breakpoint (stack) |

**Common responsive patterns:**

```html
<!-- 3-column features: collapses to 2 on medium, 1 on small -->
<ul class="features-grid__list grid--3 grid--m-2 grid--s-1 gap--m">

<!-- 4-column footer: collapses to 2 on medium, 1 on small -->
<div class="footer__nav-grid grid--4 grid--m-2 grid--s-1 gap--l">

<!-- Hero 2-column split: stacks on small -->
<div class="hero__inner grid--2 grid--s-1 gap--l">
```

---

## Uneven Ratio Grids

For asymmetric two-column layouts:

| Class | Ratio | Typical Use |
|-------|-------|------------|
| `.grid--1-2` | 1/3 + 2/3 | Sidebar left with wide main content |
| `.grid--2-1` | 2/3 + 1/3 | Wide content with narrow sidebar right |
| `.grid--1-3` | 1/4 + 3/4 | Narrow icon/label with wide content |
| `.grid--3-1` | 3/4 + 1/4 | Wide content with narrow meta column |
| `.grid--3-2` | 3/5 + 2/5 | Slightly uneven split |
| `.grid--2-3` | 2/5 + 3/5 | Inverse of 3-2 |

**Example:**
```html
<!-- Feature row: image right, text left (2/3 : 1/3) -->
<div class="feature-row__inner grid--2-1 grid--s-1 gap--l">
  <div class="feature-row__content">
    <h2>Feature Heading</h2>
    <p>Description text</p>
  </div>
  <div class="feature-row__image">
    <img src="feature.jpg" alt="Feature illustration" loading="lazy" decoding="async">
  </div>
</div>
```

---

## Cell Control

Control how individual cells span multiple columns or rows:

### Column Spanning

| Class | Effect |
|-------|--------|
| `.col-span--1` | Cell spans 1 column (default) |
| `.col-span--2` | Cell spans 2 columns |
| `.col-span--3` | Cell spans 3 columns |
| `.col-span--4` | Cell spans 4 columns |
| `.col-span--6` | Cell spans 6 columns (half of 12) |
| `.col-span--12` | Cell spans full width |

Responsive variants: `.col-span--l-2`, `.col-span--m-1`

### Row Spanning

| Class | Effect |
|-------|--------|
| `.row-span--2` | Cell spans 2 rows |
| `.row-span--3` | Cell spans 3 rows |

### Column Positioning

| Class | Effect |
|-------|--------|
| `.col-start--1` | Cell starts at column line 1 |
| `.col-start--2` | Cell starts at column line 2 |
| `.col-start--{n}` | Cell starts at column line n |
| `.col-end--{n}` | Cell ends at column line n |
| `.col-end--13` | Cell ends at last column line (full width) |

Responsive variants: `.col-start--m-1`, `.col-end--l-7`

---

## Ordering

Control visual order independent of DOM order. Useful for responsive reordering:

| Class | Effect |
|-------|--------|
| `.order--first` | Move item to first position visually |
| `.order--last` | Move item to last position visually |

**Responsive variants** — apply reordering at specific breakpoints:

| Class | Effect |
|-------|--------|
| `.order--first-l` | First at large breakpoint |
| `.order--first-m` | First at medium breakpoint |
| `.order--first-s` | First at small breakpoint |
| `.order--last-l` | Last at large breakpoint |
| `.order--last-m` | Last at medium breakpoint |
| `.order--last-s` | Last at small breakpoint |

**Example — image above text on mobile:**
```html
<div class="feature__inner grid--2 grid--s-1 gap--l">
  <div class="feature__text">
    <!-- Naturally first in DOM -->
    <h2>Feature Heading</h2>
    <p>Description</p>
  </div>
  <div class="feature__image order--first-s">
    <!-- Moves above text on small screens -->
    <img src="feature.jpg" alt="Feature" loading="lazy" decoding="async">
  </div>
</div>
```

---

## Grid Gap

Use the grid gap contextual variable or utility class:

| Option | Usage |
|--------|-------|
| `.grid-gap` class | Applies `gap: var(--grid-gap)` contextual variable |
| `.gap--{size}` class | Applies fixed size gap (xs through 2xl) |
| `gap: var(--grid-gap)` in CSS | Reference token directly in custom CSS |

---

## Common Patterns

### 3-Column Features Grid (Responsive)

```html
<div class="features__grid grid--3 grid--m-2 grid--s-1 gap--m">
  <div class="features__item">...</div>
  <div class="features__item">...</div>
  <div class="features__item">...</div>
</div>
```

### 2-Column Hero Split (Text + Image)

```html
<div class="hero__inner grid--2 grid--s-1 gap--l">
  <div class="hero__content">
    <h1 class="hero__heading">Headline</h1>
    <p class="hero__text">Supporting text.</p>
    <a href="#" class="hero__cta btn--primary">Get Started</a>
  </div>
  <div class="hero__media">
    <img src="hero.jpg" alt="Hero illustration" loading="eager" decoding="async" width="800" height="600">
  </div>
</div>
```

### 4-Column Pricing Cards (Collapses to 1)

```html
<div class="pricing__grid grid--4 grid--m-2 grid--s-1 gap--m">
  <article class="pricing__card">...</article>
  <article class="pricing__card pricing__card--popular">...</article>
  <article class="pricing__card">...</article>
  <article class="pricing__card">...</article>
</div>
```

### Featured Item Spanning (Bento Grid)

```html
<!-- 12-column bento: first item takes 8 cols, two items take 4 cols each -->
<div class="bento__grid grid--12 gap--m">
  <div class="bento__item col-span--8 col-span--m-12">Large featured item</div>
  <div class="bento__item col-span--4 col-span--m-6 col-span--s-12">Item 2</div>
  <div class="bento__item col-span--4 col-span--m-6 col-span--s-12">Item 3</div>
</div>
```
