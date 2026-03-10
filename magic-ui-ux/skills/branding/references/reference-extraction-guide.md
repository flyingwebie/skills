# Reference Extraction Guide

Extract a complete design system from an existing website or screenshot. Both methods produce the same output format as niche-based generation (tokens.json + branding.md).

---

## Method 1: URL Extraction (`--from-url`)

Use WebFetch to load and analyze a reference URL.

### Step 1: Fetch the reference

```
WebFetch the provided URL to get page content as markdown.
```

Note: WebFetch returns structured markdown, not raw HTML/CSS. Exact CSS values are often unavailable. Use structural and content cues to infer design direction.

### Step 2: Extract design signals

Analyze the fetched content for these signals:

#### Colors

- **CSS custom properties**: Look for `--color-*`, `--brand-*`, or similar variable patterns in any inline styles
- **Brand colors**: Identify colors mentioned in headers, CTA buttons, navigation, and backgrounds from the page structure
- **Dominant palette**: Infer primary color from the brand's logo area and header treatment; secondary from supporting sections
- **CTA color**: Identify the most prominent action button color (often distinct from primary)
- When exact hex values are visible (inline styles, color references), use them directly
- When only visual descriptions are available, estimate appropriate hex values based on the described aesthetic

#### Typography

- **Font-family declarations**: Look for Google Fonts links, `@import` statements, or font-family CSS
- **Font identification**: If font names appear (e.g., "Inter", "Playfair Display"), record them directly
- **Weight patterns**: Note heading vs body weight differences from structural emphasis
- **Fallback inference**: If no font names are found, classify as serif/sans-serif/display from content tone and structure, then select the closest Google Fonts match

#### Spacing

- **Density**: Classify as tight (content-heavy, minimal whitespace), standard (balanced), or generous (lots of breathing room)
- **Section rhythm**: Note whether sections have uniform or varied spacing
- Spacing scale is universal (same rem scale regardless of extraction), but density classification informs application guidance

#### UI Style

Classify the overall aesthetic into one of:
- **Minimalism**: Clean lines, maximum whitespace, understated elements
- **Glassmorphism**: Frosted glass effects, transparency, blur backgrounds
- **Neubrutalism**: Bold borders, raw aesthetics, high contrast, visible structure
- **Soft UI**: Subtle shadows, rounded corners, gentle gradients
- **Editorial**: Typography-driven, magazine-like layouts, strong type hierarchy
- **Gradient-Rich**: Vibrant gradients, colorful overlays, dynamic backgrounds
- **Dark Mode Premium**: Dark backgrounds, luminous accents, high-end feel

#### Component Patterns

Describe the visible patterns:
- **Header**: sticky-minimal | transparent-overlay | bold-branded | classic-nav
- **Hero**: centered-text | split-content | full-bleed-image | gradient-overlay | video-background
- **CTA**: bold-contrast | subtle-inline | floating-sticky | card-embedded
- **Footer**: minimal-links | mega-footer | centered-simple | dark-contrast

### Step 3: Handle design-focused sources

For **Dribbble shots**, **Awwwards sites**, and **Behance projects**:
- Prioritize visual design cues over textual content
- These sources are design showcases -- the visual language IS the content
- Pay special attention to color palette choices, typography craft, and interaction patterns
- Component patterns may be more creative/experimental than standard sites

### Step 4: Fill gaps with industry defaults

If extraction yields incomplete data (common with WebFetch markdown output):
- Load `skills/branding/references/industry-design-rules.md`
- Identify the closest industry match from the reference site's domain
- Use industry defaults for any missing values (colors, typography, UI style)
- Note in branding.md which values were extracted vs inferred

---

## Method 2: Screenshot Extraction (`--from-screenshot`)

Read and analyze a screenshot image file using Claude's multimodal capabilities.

### Step 1: Load the image

```
Read the screenshot file using the Read tool.
Claude can natively analyze images -- no external OCR or vision API needed.
```

Supported formats: PNG, JPG, JPEG, WebP, GIF

### Step 2: Analyze visual elements

#### Colors

- **Dominant color**: The most prevalent brand color (usually header, navigation, or primary buttons)
- **Secondary color**: Supporting color used in accents, secondary buttons, or section backgrounds
- **CTA color**: The color of the most prominent call-to-action button
- **Background color**: Main page background (often white/near-white or dark)
- **Text color**: Primary body text color
- **Estimate hex values**: Based on visual analysis, provide best-effort hex codes. Exact precision is not required -- close approximations produce usable design systems
- **Success/Warning/Error**: If visible in the screenshot (form states, alerts), extract them. Otherwise, derive from the primary palette warmth

#### Typography

- **Serif vs Sans-serif**: Identify the typeface category for headings and body text
- **Weight**: Note heading boldness (bold, semibold, regular) and body weight
- **Approximate font identification**: Match to the closest Google Fonts equivalent:
  - Geometric sans-serif: Inter, Plus Jakarta Sans, DM Sans
  - Humanist sans-serif: Open Sans, Nunito, Lato
  - Modern serif: Playfair Display, Cormorant Garamond, Libre Baskerville
  - Monospace: JetBrains Mono, Fira Code, Source Code Pro
  - Display: Syne, Space Grotesk, Outfit
- **Google Fonts URLs**: Generate valid URLs for identified fonts

#### Layout and Spacing

- **Grid structure**: Number of columns, alignment patterns
- **Whitespace usage**: Tight, standard, or generous
- **Section spacing**: Uniform or varied rhythm between sections
- **Content density**: How much content appears per viewport

#### UI Style

Classify using the same 7 categories as URL extraction (Minimalism, Glassmorphism, Neubrutalism, Soft UI, Editorial, Gradient-Rich, Dark Mode Premium).

#### Component Patterns

Identify visible component styles:
- **Header**: Describe the navigation pattern
- **Hero**: Describe the hero section approach
- **CTA**: Describe button and call-to-action treatment
- **Footer**: Describe footer layout (if visible)

Map each to the closest standard pattern name.

### Step 3: Generate token values

Compile all visual analysis into concrete values:
- Every color as a 6-digit hex code (`#XXXXXX`)
- Font families as real Google Fonts names
- UI style as one of the 7 standard options
- Component patterns as standard pattern names

---

## Output Rules

Both extraction methods produce the same output format as niche-based generation.

### tokens.json

Must conform to `skills/persistence/schemas/tokens.json` schema:

```json
{
  "colors": {
    "primary": "#XXXXXX",
    "secondary": "#XXXXXX",
    "cta": "#XXXXXX",
    "background": "#XXXXXX",
    "text": "#XXXXXX",
    "success": "#XXXXXX",
    "warning": "#XXXXXX",
    "error": "#XXXXXX"
  },
  "typography": {
    "heading": {
      "family": "Font Name",
      "weight": "600",
      "googleFontsUrl": "https://fonts.google.com/specimen/Font+Name"
    },
    "body": {
      "family": "Font Name",
      "weight": "400",
      "googleFontsUrl": "https://fonts.google.com/specimen/Font+Name"
    },
    "accent": {
      "family": "Font Name (if applicable)"
    }
  },
  "spacing": {
    "unit": "rem",
    "scale": [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8]
  },
  "uiStyle": "Extracted style",
  "industry": "Inferred from reference source",
  "componentPatterns": {
    "header": "pattern-name",
    "hero": "pattern-name",
    "cta": "pattern-name",
    "footer": "pattern-name"
  }
}
```

### branding.md

Same template as niche-based generation, but with source attribution:

- Header includes: `**Extracted from:** {URL or screenshot filename}`
- When values were inferred (not directly extracted), note: `(inferred)` next to the value
- All hex codes and font names must match tokens.json exactly

### state.json updates

- Set `brandingComplete` to `true`
- Set `niche` to the inferred industry/niche from the reference
- Update `updatedAt` to current ISO 8601 timestamp

### Reference archival

Save the reference source for future use:
- **URL path**: Write the URL to `.ui-ux/references/source-url.txt`
- **Screenshot path**: Note the screenshot path in `.ui-ux/references/source-screenshot.txt`

This allows later re-extraction or comparison if the design system needs updating.
