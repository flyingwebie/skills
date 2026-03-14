# ACSS 4.x Utility Classes Reference

AutomaticCSS 4.x retained a focused set of utility classes. Most 3.x utility classes were removed in favor of using CSS custom properties directly in BEM-structured CSS.

**Key principle:** Utility classes go in HTML. ACSS custom properties go in CSS (via BEM classes). Do not put utility classes in your component's CSS file.

---

## Padding

Apply uniform padding to any element:

| Class | Usage |
|-------|-------|
| `.padding--xs` | Smallest padding |
| `.padding--s` | Small padding |
| `.padding--m` | Medium padding (most common) |
| `.padding--l` | Large padding |
| `.padding--xl` | Extra-large padding |
| `.padding--2xl` | Maximum standard padding |

Note: Maps to `--space-{size}` tokens.

---

## Section Padding

Apply top/bottom padding appropriate for page sections:

| Class | Usage |
|-------|-------|
| `.section--xs` | Minimal section padding |
| `.section--s` | Small section padding |
| `.section--m` | Medium section padding (default for most sections) |
| `.section--l` | Large section padding |
| `.section--xl` | Extra-large section padding |
| `.section--2xl` | Maximum section padding |

Maps to `--section-space-{size}` tokens.

---

## Gap

Control gap between flex or grid children:

| Class | Usage |
|-------|-------|
| `.gap--xs` | Smallest gap |
| `.gap--s` | Small gap |
| `.gap--m` | Medium gap |
| `.gap--l` | Large gap |
| `.gap--xl` | Extra-large gap |
| `.gap--2xl` | Maximum gap |
| `.grid-gap` | Applies `--grid-gap` contextual variable |

---

## Flexbox

Quick flex direction shortcuts. These set `display: flex` and the specified direction:

| Class | Effect |
|-------|--------|
| `.flex--row` | `display: flex; flex-direction: row` |
| `.flex--col` | `display: flex; flex-direction: column` |
| `.flex--row-reverse` | `display: flex; flex-direction: row-reverse` |
| `.flex--col-reverse` | `display: flex; flex-direction: column-reverse` |

---

## Width

Percentage-based width utilities, 10-point increments:

| Class | Width |
|-------|-------|
| `.width--10` | 10% |
| `.width--20` | 20% |
| `.width--30` | 30% |
| `.width--40` | 40% |
| `.width--50` | 50% |
| `.width--60` | 60% |
| `.width--70` | 70% |
| `.width--80` | 80% |
| `.width--90` | 90% |

---

## Buttons

Apply button styling to anchor or button elements.

### Base Color Variants

| Class | Color |
|-------|-------|
| `.btn--primary` | Primary color button |
| `.btn--secondary` | Secondary color button |
| `.btn--tertiary` | Tertiary color button |
| `.btn--accent` | Accent color button |
| `.btn--base` | Base color button |
| `.btn--neutral` | Neutral color button |

### Shade Variants

Apply after the base color class for shade variations:

| Class | Effect |
|-------|--------|
| `.btn--primary-light` | Light variant of primary button |
| `.btn--primary-dark` | Dark variant of primary button |
| `.btn--secondary-light` | Light variant of secondary button |
| `.btn--secondary-dark` | Dark variant of secondary button |
| (same pattern for tertiary, accent, base, neutral) | |

### Outline Variant

| Class | Effect |
|-------|--------|
| `.btn--outline` | Outline style button (transparent fill, colored border) |

### Size Variants

| Class | Size |
|-------|------|
| `.btn--xs` | Extra-small button |
| `.btn--s` | Small button |
| `.btn--m` | Medium button (default) |
| `.btn--l` | Large button |
| `.btn--xl` | Extra-large button |
| `.btn--2xl` | Maximum size button |

**Example usage:**
```html
<a href="#" class="hero__cta btn--primary">Get Started</a>
<a href="#" class="hero__cta btn--primary btn--l">Get Started</a>
<a href="#" class="hero__cta btn--outline btn--primary">Learn More</a>
```

---

## Grid

ACSS provides a 12-column CSS grid system.

### Column Count Classes

| Class | Columns |
|-------|---------|
| `.grid--1` | 1 column |
| `.grid--2` | 2 columns |
| `.grid--3` | 3 columns |
| `.grid--4` | 4 columns |
| `.grid--5` | 5 columns |
| `.grid--6` | 6 columns |
| `.grid--7` | 7 columns |
| `.grid--8` | 8 columns |
| `.grid--9` | 9 columns |
| `.grid--10` | 10 columns |
| `.grid--11` | 11 columns |
| `.grid--12` | 12 columns |

### Responsive Variants

Breakpoints: `l` (large), `m` (medium), `s` (small).

Pattern: `.grid--{breakpoint}-{n}`

| Example Class | Effect |
|---------------|--------|
| `.grid--l-3` | 3 columns at large breakpoint |
| `.grid--m-2` | 2 columns at medium breakpoint |
| `.grid--s-1` | 1 column at small breakpoint |

Common pattern for responsive grid: `.grid--3 .grid--m-2 .grid--s-1`

### Uneven Ratio Grids

| Class | Ratio |
|-------|-------|
| `.grid--1-2` | 1/3 + 2/3 columns |
| `.grid--2-1` | 2/3 + 1/3 columns |
| `.grid--1-3` | 1/4 + 3/4 columns |
| `.grid--3-1` | 3/4 + 1/4 columns |
| `.grid--3-2` | 3/5 + 2/5 columns |
| `.grid--2-3` | 2/5 + 3/5 columns |

### Cell Control

Control how individual grid cells span and position:

| Class | Effect |
|-------|--------|
| `.col-span--{n}` | Cell spans n columns (1–12) |
| `.row-span--{n}` | Cell spans n rows |
| `.col-start--{n}` | Cell starts at column n |
| `.col-end--{n}` | Cell ends at column n |

Responsive variants: `.col-span--l-2`, `.col-span--m-1`, etc.

### Ordering

| Class | Effect |
|-------|--------|
| `.order--first` | Move item to first position |
| `.order--last` | Move item to last position |

Responsive variants: `.order--first-m`, `.order--last-s`

---

## Recipes

Recipes expand into full CSS/HTML patterns inside Etch's inputs. Note: ACSS 4.x changed the prefix from `@` to `?`.

| Recipe | Purpose |
|--------|---------|
| `?btn` | Expand full button CSS |
| `?flex-grid` | Expand flex grid pattern |

**Critical:** The recipe prefix changed from `@` to `?` in ACSS 4.x. Always use `?btn`, `?flex-grid` with the `?` prefix. The `@` prefix is 3.x-only and must not be used.
