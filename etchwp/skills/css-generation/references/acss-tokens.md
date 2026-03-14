# ACSS 4.x Token Reference

Complete catalog of AutomaticCSS 4.x custom properties. All generation skills read this file at generation time to look up token names. Never hard-code color, spacing, or typography values — always reference these tokens.

**Color space:** OKLCH (perceptual uniformity)
**Version:** 4.x (NOT backward-compatible with 3.x)

---

## Color Roles

6 roles x 8 shades = 48 color tokens. All colors are in OKLCH color space.

| Role | Base | Ultra-Light | Light | Semi-Light | Semi-Dark | Dark | Ultra-Dark | Hover |
|------|------|-------------|-------|------------|-----------|------|------------|-------|
| Primary | `--primary` | `--primary-ultra-light` | `--primary-light` | `--primary-semi-light` | `--primary-semi-dark` | `--primary-dark` | `--primary-ultra-dark` | `--primary-hover` |
| Secondary | `--secondary` | `--secondary-ultra-light` | `--secondary-light` | `--secondary-semi-light` | `--secondary-semi-dark` | `--secondary-dark` | `--secondary-ultra-dark` | `--secondary-hover` |
| Tertiary | `--tertiary` | `--tertiary-ultra-light` | `--tertiary-light` | `--tertiary-semi-light` | `--tertiary-semi-dark` | `--tertiary-dark` | `--tertiary-ultra-dark` | `--tertiary-hover` |
| Accent | `--accent` | `--accent-ultra-light` | `--accent-light` | `--accent-semi-light` | `--accent-semi-dark` | `--accent-dark` | `--accent-ultra-dark` | `--accent-hover` |
| Base | `--base` | `--base-ultra-light` | `--base-light` | `--base-semi-light` | `--base-semi-dark` | `--base-dark` | `--base-ultra-dark` | `--base-hover` |
| Neutral | `--neutral` | `--neutral-ultra-light` | `--neutral-light` | `--neutral-semi-light` | `--neutral-semi-dark` | `--neutral-dark` | `--neutral-ultra-dark` | `--neutral-hover` |

**Color role purposes:**

| Role | Purpose |
|------|---------|
| `--primary` | Main brand color; action color for primary CTAs |
| `--secondary` | Supporting brand color |
| `--tertiary` | Third brand color |
| `--accent` | Least-used brand color; highlights, badges |
| `--base` | Backgrounds and body text |
| `--neutral` | Greys, black, white |

---

## Semantic Status Colors

4 statuses x 8 shades = 32 status tokens. Same shade pattern as color roles.

| Status | Base | Ultra-Light | Light | Semi-Light | Semi-Dark | Dark | Ultra-Dark | Hover |
|--------|------|-------------|-------|------------|-----------|------|------------|-------|
| Warning | `--warning` | `--warning-ultra-light` | `--warning-light` | `--warning-semi-light` | `--warning-semi-dark` | `--warning-dark` | `--warning-ultra-dark` | `--warning-hover` |
| Info | `--info` | `--info-ultra-light` | `--info-light` | `--info-semi-light` | `--info-semi-dark` | `--info-dark` | `--info-ultra-dark` | `--info-hover` |
| Success | `--success` | `--success-ultra-light` | `--success-light` | `--success-semi-light` | `--success-semi-dark` | `--success-dark` | `--success-ultra-dark` | `--success-hover` |
| Danger | `--danger` | `--danger-ultra-light` | `--danger-light` | `--danger-semi-light` | `--danger-semi-dark` | `--danger-dark` | `--danger-ultra-dark` | `--danger-hover` |

---

## Transparency

ACSS 4.x removed all transparency tokens (`--{color}-trans-{n}` no longer exists). Use `color-mix()` instead:

```css
/* Correct ACSS 4.x pattern */
background: color-mix(in oklch, var(--primary) 20%, transparent);
box-shadow: 0 4px 24px color-mix(in oklch, var(--primary) 15%, transparent);
border-color: color-mix(in oklch, var(--neutral) 30%, transparent);
```

The percentage is the opacity of the color (20% = 80% transparent).

---

## Spacing

### Standard Spacing

6 tokens covering small to extra-extra-large. Note: ACSS 4.x uses `2XL` for the largest size (not the old 3.x double-X naming).

| Size | Variable | Usage |
|------|----------|-------|
| XS | `--space-xs` | Smallest gap; icon spacing, tight padding |
| S | `--space-s` | Small padding; compact components |
| M | `--space-m` | Default padding; most common |
| L | `--space-l` | Larger sections; generous padding |
| XL | `--space-xl` | Very large spacing |
| 2XL | `--space-2xl` | Maximum standard spacing |

### Section Spacing

6 tokens for section-level padding + gutter:

| Variable | Purpose |
|----------|---------|
| `--section-space-xs` | Minimal section padding |
| `--section-space-s` | Small section padding |
| `--section-space-m` | Default section padding (applied to sections automatically) |
| `--section-space-l` | Larger section padding |
| `--section-space-xl` | Very large section padding |
| `--section-space-2xl` | Maximum section padding |
| `--gutter` | Side gutter for containers |

### Bridge Variables (Fluid Transitions)

15 standard spacing bridge variables (fluid between two size points):

| Variable | Transition |
|----------|-----------|
| `--space-2xl-to-xl` | Fluid from 2xl down to xl |
| `--space-2xl-to-l` | Fluid from 2xl down to l |
| `--space-2xl-to-m` | Fluid from 2xl down to m |
| `--space-2xl-to-s` | Fluid from 2xl down to s |
| `--space-2xl-to-xs` | Fluid from 2xl down to xs |
| `--space-xl-to-l` | Fluid from xl down to l |
| `--space-xl-to-m` | Fluid from xl down to m |
| `--space-xl-to-s` | Fluid from xl down to s |
| `--space-xl-to-xs` | Fluid from xl down to xs |
| `--space-l-to-m` | Fluid from l down to m |
| `--space-l-to-s` | Fluid from l down to s |
| `--space-l-to-xs` | Fluid from l down to xs |
| `--space-m-to-s` | Fluid from m down to s |
| `--space-m-to-xs` | Fluid from m down to xs |
| `--space-s-to-xs` | Fluid from s down to xs |

Section-space equivalents follow the same pattern: `--section-space-{large}-to-{small}`.

### Contextual Spacing

| Variable | Purpose |
|----------|---------|
| `--container-gap` | Gap between containers within a section |
| `--content-gap` | Gap between content elements within a container |
| `--grid-gap` | Gap between grid cells |

---

## Typography

### Font Size Variables

| Type | Variable | Purpose |
|------|----------|---------|
| H1 | `--h1` | Largest heading |
| H2 | `--h2` | Second heading level |
| H3 | `--h3` | Third heading level |
| H4 | `--h4` | Fourth heading level |
| H5 | `--h5` | Fifth heading level |
| H6 | `--h6` | Smallest heading |
| Text 2XL | `--text-2xl` | Extra-extra-large body text |
| Text XL | `--text-xl` | Extra-large body text |
| Text L | `--text-l` | Large body text |
| Text M | `--text-m` | Default body text size |
| Text S | `--text-s` | Small body text |
| Text XS | `--text-xs` | Extra-small text; captions, labels |

### Global Heading Properties

Applied to all headings unless overridden at per-level:

| Variable | Controls |
|----------|---------|
| `--heading-font-family` | Heading font stack |
| `--heading-color` | Default heading color |
| `--heading-line-height` | Line height for all headings |
| `--heading-font-weight` | Font weight for all headings |
| `--heading-font-style` | Font style (normal, italic) |
| `--heading-letter-spacing` | Letter spacing |
| `--heading-text-transform` | Text transform (uppercase, etc.) |
| `--heading-text-wrap` | Text wrap behavior |

### Per-Heading Level Overrides (h1–h6)

Each heading level can override global heading properties. Replace `{n}` with 1–6:

| Variable | Controls |
|----------|---------|
| `--h{n}-font-family` | Override font family for this level |
| `--h{n}-color` | Override color for this level |
| `--h{n}-line-height` | Override line height for this level |
| `--h{n}-font-weight` | Override font weight for this level |
| `--h{n}-font-style` | Override font style for this level |
| `--h{n}-letter-spacing` | Override letter spacing for this level |
| `--h{n}-text-transform` | Override text transform for this level |
| `--h{n}-max-width` | Max width constraint for this level |

**Examples:** `--h1-color`, `--h2-font-weight`, `--h3-max-width`

### Global Text Properties

Applied to all text elements unless overridden per size:

| Variable | Controls |
|----------|---------|
| `--text-font-family` | Text font stack |
| `--text-color` | Default text color |
| `--text-line-height` | Line height for all text |
| `--text-font-weight` | Font weight for all text |
| `--text-font-style` | Font style |
| `--text-letter-spacing` | Letter spacing |
| `--text-max-width` | Max width for readability |
| `--text-text-wrap` | Text wrap behavior |

### Per-Text-Size Overrides (2xl, xl, l, m, s, xs)

Replace `{size}` with: `2xl`, `xl`, `l`, `m`, `s`, `xs`:

| Variable | Controls |
|----------|---------|
| `--text-{size}-line-height` | Override line height for this size |
| `--text-{size}-font-weight` | Override font weight for this size |
| `--text-{size}-letter-spacing` | Override letter spacing for this size |
| `--text-{size}-max-width` | Override max width for this size |

**Examples:** `--text-xl-line-height`, `--text-s-font-weight`

---

## Borders and Radius

| Variable | Purpose |
|----------|---------|
| `--radius` | Primary border-radius token |
| `--radius-m` | Medium radius variant |
| `--border` | Shorthand: width + style + color |
| `--border-light` | Light border variant (lighter color) |
| `--border-dark` | Dark border variant (darker color) |
| `--border-size` | Border width only |
| `--border-style` | Border style only |
| `--border-color-light` | Light border color only |
| `--border-color-dark` | Dark border color only |
| `--btn-radius` | Button-specific border-radius |

---

## ACSS 4.x Breaking Changes

Quick reference of what changed in 4.x that generation skills must NOT produce:

**Size naming:** The old "double-X-L" suffix was renamed to "2XL" across all tokens. Use `--space-2xl`, `--section-space-2xl` — never the old double-X form.

**Recipe syntax:** The recipe prefix changed from `@` to `?`. Use `?btn`, `?flex-grid` — never the old `@` prefix.

**Transparency tokens removed:** The old `--{color}-trans-{n}` tokens do not exist in 4.x. Use `color-mix()` instead:
```css
background: color-mix(in oklch, var(--primary) 50%, transparent);
```

**Color space:** ACSS 4.x uses OKLCH (not sRGB). The `color-mix()` function must specify `in oklch`.

**Responsive approach:** Use `@container` queries, not `@media` breakpoints with fixed widths.

**CSS Layers (new in 4.x):**
- `@layer etch-defaults` — Etch default styles
- `@layer etch-reset` — Etch CSS reset
- Use these layers for specificity control when needed
