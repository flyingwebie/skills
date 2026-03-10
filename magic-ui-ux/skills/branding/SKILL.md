---
name: branding
description: >
  Generates complete design systems from project niche/industry descriptions. Produces
  machine-readable tokens (tokens.json) and human-readable design documentation (branding.md)
  using industry-specific design rules and color psychology.
---

# Branding Skill - Niche-Based Design System Generation

## Purpose

Transform a project niche description (e.g., "SaaS fintech", "luxury wellness") into a complete, opinionated design system with exact values. Every downstream design operation depends on the tokens this skill produces.

## Input / Output Contract

### Input

```
niche: string (required)
  Project niche or industry description. Examples:
  - "SaaS fintech"
  - "luxury wellness spa"
  - "e-commerce streetwear"
  - "edtech for K-12"

mood_keywords: string[] (optional)
  Additional personality descriptors to refine the design direction.
  Examples: ["playful", "premium", "minimalist", "bold"]
```

### Output

```
tokens.json
  Machine-readable design tokens conforming to skills/persistence/schemas/tokens.json.
  Contains: colors (hex), typography (Google Fonts families + URLs), spacing (rem scale),
  uiStyle, industry, componentPatterns.

branding.md
  Human-readable design system documentation. Contains: brand personality, color palette
  with rationale, typography pairing explanation, spacing system, UI style recommendation,
  component pattern descriptions, usage guidelines.
```

## Generation Algorithm

Follow these steps in order. Each step narrows the design space from broad industry conventions to specific, exact values.

### Step 1: Identify Industry Category

Map the user's niche description to one of the industry categories in `references/industry-design-rules.md`. If the niche spans multiple industries (e.g., "SaaS fintech"), use the more specific one (fintech) as primary and the other (SaaS) as secondary influence.

### Step 2: Load Industry Design Rules

Read `references/industry-design-rules.md` and extract the matching industry's design directions:
- Color psychology and palette direction
- Typography direction and recommended pairings
- UI style tendency
- Component pattern preferences
- Spacing tendency
- Mood keywords

### Step 3: Select Color Palette

Using the industry color direction as a starting point:
1. Pick a primary color that aligns with the industry's color psychology
2. Derive secondary from a complementary or analogous relationship to primary
3. Choose CTA color that contrasts against both primary and background
4. Set background (typically near-white or dark depending on industry mood)
5. Set text color ensuring WCAG AA contrast ratio (4.5:1 minimum) against background
6. Add semantic colors: success (green family), warning (amber family), error (red family)

If mood_keywords are provided, adjust: "bold" shifts toward higher saturation, "minimal" toward muted tones, "playful" toward brighter accents, "premium" toward deeper tones.

All colors output as 6-digit hex codes (e.g., `#1A2B3C`).

### Step 4: Choose Typography Pairing

From the industry's typography direction:
1. Select heading font family (real Google Fonts name)
2. Select body font family (must pair well with heading)
3. Optionally select accent font family for special elements
4. Set weight recommendations (heading typically 600-700, body typically 400)
5. Generate Google Fonts URLs: `https://fonts.google.com/specimen/{Font+Name}`

### Step 5: Define Spacing Scale

Use 8px (0.5rem) base unit with the following scale in rem:
```
[0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8]
```

This is consistent across industries. Spacing *application* (generous vs tight) is a usage guideline in branding.md, not a token difference.

### Step 6: Recommend UI Style

Based on the industry tendency from design rules, select one of:
- **Minimalism** -- Clean lines, generous whitespace, flat design
- **Glassmorphism** -- Frosted glass, transparency, layered depth
- **Neubrutalism** -- Bold borders, raw aesthetic, high contrast
- **Soft UI (Neumorphism)** -- Subtle shadows, extruded elements
- **Editorial** -- Magazine-style, serif-heavy, dramatic typography
- **Gradient-Rich** -- Vibrant gradients, modern SaaS aesthetic
- **Dark Mode Premium** -- Dark backgrounds, luminous accents

### Step 7: Define Component Patterns

For each pattern, select a style that aligns with industry and UI style:

- **header**: sticky-minimal, transparent-overlay, bold-branded, classic-nav
- **hero**: centered-text, split-content, full-bleed-image, gradient-overlay, video-background
- **cta**: bold-contrast, subtle-inline, floating-sticky, card-embedded
- **footer**: minimal-links, mega-footer, centered-simple, dark-contrast

### Step 8: Generate tokens.json

Assemble all values into a JSON object conforming to `skills/persistence/schemas/tokens.json`. Validate that:
- All required color fields are populated with valid hex codes
- Both heading and body typography have family names
- Spacing scale is present
- uiStyle and industry fields are set

Write to `.ui-ux/tokens.json`.

### Step 9: Generate branding.md

Write human-readable design system documentation to `.ui-ux/branding.md`. See `references/token-generation-guide.md` for the exact template structure.

## Reference Files

- `references/industry-design-rules.md` -- Industry-to-design mapping for 12+ industries with color psychology, typography direction, UI style tendency, component patterns, and mood keywords
- `references/token-generation-guide.md` -- Step-by-step guide for generating tokens.json and branding.md with exact output format specifications
