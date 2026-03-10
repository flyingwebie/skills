# Token Generation Guide

Step-by-step guide for generating the two output files from a branding generation: `tokens.json` (machine-readable) and `branding.md` (human-readable).

---

## Part 1: Generating tokens.json

### Required Fields

Every tokens.json MUST include these fields with valid values. Missing any of these is a generation failure.

```json
{
  "colors": {
    "primary": "#XXXXXX",
    "secondary": "#XXXXXX",
    "cta": "#XXXXXX",
    "background": "#XXXXXX",
    "text": "#XXXXXX"
  },
  "typography": {
    "heading": {
      "family": "Font Name"
    },
    "body": {
      "family": "Font Name"
    }
  }
}
```

### Complete tokens.json Structure

```json
{
  "colors": {
    "primary": "#1A365D",
    "secondary": "#2D9F83",
    "cta": "#E86C4F",
    "background": "#FAFAFA",
    "text": "#1A1A2E",
    "success": "#16A34A",
    "warning": "#D97706",
    "error": "#DC2626"
  },
  "typography": {
    "heading": {
      "family": "Space Grotesk",
      "weight": "700",
      "googleFontsUrl": "https://fonts.google.com/specimen/Space+Grotesk"
    },
    "body": {
      "family": "DM Sans",
      "weight": "400",
      "googleFontsUrl": "https://fonts.google.com/specimen/DM+Sans"
    },
    "accent": {
      "family": "JetBrains Mono"
    }
  },
  "spacing": {
    "unit": "rem",
    "scale": [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8]
  },
  "uiStyle": "Minimalism",
  "industry": "SaaS fintech",
  "componentPatterns": {
    "header": "sticky-minimal",
    "hero": "split-content",
    "cta": "bold-contrast",
    "footer": "minimal-links"
  }
}
```

### Color Generation Rules

1. **Start from industry direction** in `industry-design-rules.md`. The direction gives you the color family and mood -- not the exact hex values.

2. **Generate specific hex codes** that match the direction:
   - Primary: The dominant brand color. Sets the emotional tone.
   - Secondary: Complements primary through analogous (adjacent on color wheel) or complementary (opposite) relationship.
   - CTA: Must contrast against BOTH primary and background. Users must instantly see it. Never similar to primary.
   - Background: Typically near-white (#F8F9FA to #FFFFFF) or dark (#0A0A0B to #1A1A2E). Match industry mood.
   - Text: Dark on light backgrounds (#1A1A2E range), light on dark backgrounds (#E8E8E8 range).

3. **Validate WCAG AA contrast**:
   - Text on background: minimum 4.5:1 contrast ratio
   - CTA text on CTA background: minimum 4.5:1 contrast ratio (CTA button text is typically white #FFFFFF or dark #1A1A2E depending on CTA lightness)

4. **Semantic colors are fixed families** (adjust only lightness/saturation to match overall palette warmth):
   - Success: green family (#16A34A as default, adjust toward teal if palette is cool, toward warm green if palette is warm)
   - Warning: amber family (#D97706 as default, adjust toward orange if palette is warm, toward gold if palette is cool)
   - Error: red family (#DC2626 as default, adjust toward warm red if palette is warm, toward cool red if palette is cool)

### Typography Rules

1. **Use real Google Fonts names** exactly as they appear on fonts.google.com:
   - Correct: "Space Grotesk", "DM Sans", "Playfair Display"
   - Wrong: "Space-Grotesk", "DmSans", "Playfair"

2. **Generate Google Fonts URLs** using this format:
   ```
   https://fonts.google.com/specimen/{Font+Name}
   ```
   Replace spaces with `+` in the URL. Example: "Space Grotesk" becomes `https://fonts.google.com/specimen/Space+Grotesk`

3. **Weight values are strings**: "400", "500", "600", "700" -- not numbers.

4. **Heading weight** is typically "600" or "700" (semibold to bold).

5. **Body weight** is typically "400" (regular).

6. **Accent font** is optional. Use it for code blocks (monospace), special callouts, or decorative elements. Omit if the design does not call for it.

### Spacing Rules

The spacing scale is universal and does not change with industry:

```json
{
  "unit": "rem",
  "scale": [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8]
}
```

This maps to: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px at default 16px root font size.

How spacing is *applied* (generous vs tight) is documented in branding.md, not in the token values.

### UI Style Values

Use exactly one of these string values for `uiStyle`:

- `"Minimalism"`
- `"Glassmorphism"`
- `"Neubrutalism"`
- `"Soft UI"`
- `"Editorial"`
- `"Gradient-Rich"`
- `"Dark Mode Premium"`

### Component Pattern Values

For each component pattern field, use one of the allowed values:

**header**: `"sticky-minimal"`, `"transparent-overlay"`, `"bold-branded"`, `"classic-nav"`

**hero**: `"centered-text"`, `"split-content"`, `"full-bleed-image"`, `"gradient-overlay"`, `"video-background"`

**cta**: `"bold-contrast"`, `"subtle-inline"`, `"floating-sticky"`, `"card-embedded"`

**footer**: `"minimal-links"`, `"mega-footer"`, `"centered-simple"`, `"dark-contrast"`

### Industry Field

Set this to the user's original niche description string, exactly as provided. Examples:
- `"SaaS fintech"`
- `"luxury wellness spa"`
- `"e-commerce streetwear"`

---

## Part 2: Generating branding.md

### Template Structure

```markdown
# {Project Name} Design System

> {One-sentence brand personality summary that captures the mood and positioning}

## Brand Personality

{2-3 sentences describing the brand's visual personality. What feeling should every page evoke? What adjectives define the brand? How does this niche's audience expect to feel when interacting with the product?}

**Mood keywords:** {keyword1}, {keyword2}, {keyword3}, {keyword4}, {keyword5}

## Color Palette

| Role | Hex | Preview | Usage |
|------|-----|---------|-------|
| Primary | `#XXXXXX` | {color-block} | {When and where to use this color} |
| Secondary | `#XXXXXX` | {color-block} | {When and where to use this color} |
| CTA | `#XXXXXX` | {color-block} | {When and where to use this color} |
| Background | `#XXXXXX` | {color-block} | {When and where to use this color} |
| Text | `#XXXXXX` | {color-block} | {When and where to use this color} |
| Success | `#XXXXXX` | {color-block} | Success states, confirmations, positive feedback |
| Warning | `#XXXXXX` | {color-block} | Warnings, caution states, attention needed |
| Error | `#XXXXXX` | {color-block} | Error states, destructive actions, critical alerts |

**Why this palette:** {2-3 sentences explaining the color psychology rationale. Why these colors for this industry? What emotions do they trigger? How do they differentiate from competitors?}

## Typography

### Heading: {Font Name}

- **Family:** {Font Name}
- **Weight:** {weight}
- **Google Fonts:** [{Font Name}]({googleFontsUrl})
- **Usage:** Page titles, section headers, hero text, feature headlines

### Body: {Font Name}

- **Family:** {Font Name}
- **Weight:** {weight}
- **Google Fonts:** [{Font Name}]({googleFontsUrl})
- **Usage:** Paragraphs, descriptions, form labels, UI text

### Accent: {Font Name} (if applicable)

- **Family:** {Font Name}
- **Usage:** {specific usage -- code blocks, callouts, decorative elements}

**Why this pairing:** {2-3 sentences explaining why these fonts work together for this niche. What does the heading font communicate? How does the body font complement it? Why does this pairing serve the target audience?}

## Spacing System

- **Base unit:** 0.5rem (8px)
- **Scale:** 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem, 8rem
- **Application:** {Industry-appropriate guidance -- e.g., "Use generous spacing (2rem+) between sections to create the breathing room luxury brands demand" or "Use moderate spacing (1-2rem) between elements to maintain the energy fitness audiences expect"}

## UI Style: {Style Name}

{2-3 sentences describing the chosen UI style and how it manifests in this design system. What visual characteristics define this style? How does it align with the brand personality and industry expectations?}

**Key characteristics:**
- {Visual characteristic 1}
- {Visual characteristic 2}
- {Visual characteristic 3}
- {Visual characteristic 4}

## Component Patterns

### Header: {pattern-name}
{1-2 sentences describing how the header should look and behave for this brand.}

### Hero: {pattern-name}
{1-2 sentences describing the hero approach and what content it should emphasize.}

### CTA: {pattern-name}
{1-2 sentences describing CTA button styling, placement, and tone of voice.}

### Footer: {pattern-name}
{1-2 sentences describing footer content organization and visual treatment.}

## Usage Guidelines

1. **Always read tokens.json** before any design operation. It is the single source of truth for all design values.
2. **Primary color** is for brand elements: logo treatments, active states, links, key UI borders.
3. **Secondary color** is for supporting elements: badges, tags, secondary buttons, hover states, backgrounds for cards or sections.
4. **CTA color** is reserved exclusively for primary call-to-action buttons and critical interactive elements. Do not dilute it by using it on non-action elements.
5. **Background and text** define the default canvas. All content sits on background; all readable text uses the text color (or white on dark sections).
6. **Semantic colors** (success, warning, error) are for system states only -- never for branding or decoration.
7. **Heading font** is for titles and headers only -- never for body text.
8. **Body font** is the default for all running text and UI labels.
9. **Respect the spacing scale** -- do not invent spacing values outside the defined scale.
```

### Field Substitutions

- `{Project Name}`: From state.json `projectName` field, or ask the user if not set.
- `{color-block}`: A visual hint. In markdown this can be rendered as a colored emoji or simply omitted. The hex code itself is the primary reference.
- All `{descriptions}` should be specific to the industry and niche. Never use generic placeholder text.

### Quality Checklist

Before writing branding.md, verify:

- [ ] Every color hex in the table matches tokens.json exactly
- [ ] Every font name matches tokens.json exactly
- [ ] Typography rationale explains WHY the pairing works for THIS niche
- [ ] Color rationale references industry psychology, not just aesthetics
- [ ] Component pattern names match tokens.json componentPatterns values
- [ ] Usage guidelines are actionable and specific
- [ ] Spacing application guidance matches industry tendency from design rules

---

## Part 3: Writing to Persistence

After generating both files:

1. **Write tokens.json** to `.ui-ux/tokens.json`
2. **Write branding.md** to `.ui-ux/branding.md`
3. **Update state.json** at `.ui-ux/state.json`:
   - Set `brandingComplete` to `true`
   - Set or update `niche` field with the user's niche description
   - Update `updatedAt` with current ISO 8601 timestamp
   - If `projectName` was asked during generation, update that too

4. **Present summary** to user showing:
   - Primary, secondary, and CTA colors as hex values
   - Heading and body font names
   - Chosen UI style
   - A note that full design system is in `.ui-ux/branding.md` and tokens in `.ui-ux/tokens.json`
