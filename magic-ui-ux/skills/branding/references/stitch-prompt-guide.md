# Stitch Prompt Crafting Guide

How to translate UX briefs and design tokens into effective Stitch MCP prompts. This guide covers two distinct prompting approaches: **vibe-first for initial generation** and **targeted for edits**.

## Prompt Structure Formula

Every Stitch prompt follows this core formula:

```
[Idea] + [Theme/Vibe] + [Content] + [Image (optional)]
```

| Component | Source | Purpose |
|-----------|--------|---------|
| Idea | Page type, niche, conversion intent from UX brief | What you're building and why |
| Theme/Vibe | Brand personality, UI style, color mood from branding.md | How it should feel |
| Content | Approved copy from `{page}-copy.md`, section layout from UX brief | What it says and how it's arranged |
| Image | Optional image style guidance | Visual imagery direction |

## Two-Phase Token Strategy

Stitch responds differently to vibe language vs exact values depending on the operation.

### Phase A: Initial Generation (`generate_screen_from_text`)

Use **mood and vibe language**. Stitch interprets creative direction better when given atmosphere rather than specifications.

| Token Type | DO (Vibe Language) | DON'T (Exact Values) |
|------------|-------------------|---------------------|
| Colors | "deep navy primary with warm orange accents" | "#1A1A2E with #FF6B35 accents" |
| Colors | "crisp light background with dark readable text" | "#FAFAFA background, #2D2D3A text" |
| Fonts | "clean geometric sans-serif headings, readable body text" | "Inter Bold 700 headings, Inter Regular 400 body" |
| Fonts | "elegant serif headings with modern sans-serif body" | "Playfair Display 600, Open Sans 400" |
| Spacing | "generous whitespace, breathing room between sections" | "2rem gaps, 1.5rem padding" |
| Style | "minimalist with subtle shadows and clean lines" | "box-shadow: 0 2px 4px rgba(0,0,0,0.1)" |

**How to translate tokens to vibe language:**

- `colors.primary: #1A1A2E` → "deep navy" or "dark midnight blue"
- `colors.cta: #FF6B35` → "warm orange" or "vibrant tangerine"
- `colors.background: #FAFAFA` → "crisp light" or "clean off-white"
- `typography.heading.family: Inter` → "clean geometric sans-serif"
- `typography.heading.family: Playfair Display` → "elegant classic serif"
- `uiStyle: Minimalism` → "minimalist with generous whitespace and typography-driven hierarchy"

### Phase B: Edits and Refinements (`edit_screens`)

Use **exact token values** for targeted brand-specific changes. Stitch needs precision when modifying existing designs.

| Change Type | Prompt Approach |
|-------------|----------------|
| Color change | "Change the CTA button to #FF6B35" |
| Font change | "Update headings to Playfair Display semibold" |
| Layout change | "Switch to a two-column split layout" (no exact values needed) |
| Size change | "Make the hero CTA button larger" (no exact values needed) |
| Spacing change | "Add more whitespace between hero and features" (no exact values needed) |

**Edit prompt formula: Target + Instruction + UI/UX Keyword**

- Target: "the hero section CTA button"
- Instruction: "make it larger with more padding"
- UI/UX keyword: "rounded corners, high contrast"

## Section Templates

### For Initial Generation (Vibe-First)

Use these templates when building full-page prompts for `generate_screen_from_text`.

**Hero:**
```
Hero: {layout_pattern} layout with {spacing_feel}.
Headline: "{headline_text}"
Subheading: "{subheading_text}"
CTA: "{cta_text}" — prominent, {cta_color_mood}, {component_pattern_description}.
{psychology_visual_cues}
```

**Features / Benefits:**
```
Features: {number} items in {layout_pattern} grid.
{feature_titles_and_descriptions_verbatim}
Card style: {component_feel_description}. Accent color for icons.
{progressive_disclosure_notes}
```

**Pricing:**
```
Pricing: {number} tiers in horizontal cards.
{tier_names_prices_features_verbatim}
Recommended tier visually highlighted. Feature list with checkmarks.
{anchoring_notes}
```

**Testimonials:**
```
Testimonials: {layout_pattern} with {number} customer quotes.
{quote_text_name_role_verbatim}
Quote styling with subtle accent. Avatar placeholders.
{trust_psychology_notes}
```

**CTA / Conversion:**
```
CTA section: {layout_pattern}.
Headline: "{cta_headline}"
Body: "{cta_body}"
Button: "{cta_button_text}" — large, prominent, {cta_color_mood}.
Dark or gradient background for contrast.
{urgency_or_scarcity_notes}
```

**Navigation:**
```
Navigation: Logo left, links {center/right}, CTA button "{nav_cta_text}" right.
{nav_items_list}
{component_pattern_description}. Mobile: hamburger menu.
```

**Footer:**
```
Footer: {layout_pattern} with columns for {column_descriptions}.
Dark background with light text. Subtle link hover accents.
Copyright line at bottom.
```

### For Edits (Targeted)

Use these patterns when crafting `edit_screens` prompts.

```
Make the hero headline larger and bolder.
```

```
Change the CTA button color to #FF6B35 with white text.
```

```
Add more whitespace between the features section and testimonials.
```

```
Replace the 3-column features grid with a 2-column layout with larger cards.
```

```
Make the pricing cards more visually distinct — increase the highlight on the recommended tier.
```

## UI Style Modifiers

### Core Styles (from tokens.uiStyle)

**Minimalism:** Clean lines, generous whitespace, subtle shadows, restrained color palette. Typography-driven hierarchy. Flat or near-flat elements. No decorative flourishes.

**Glassmorphism:** Frosted glass panels, background blur effects, translucent layers, semi-transparent borders. Layered depth. Vibrant background gradients visible through glass elements.

**Neubrutalism:** Bold black outlines (2-4px), raw geometric shapes, high contrast, offset drop shadows, chunky elements. Bright accents against stark backgrounds.

**Soft UI (Neumorphism):** Subtle inner and outer shadows creating extruded/embossed effect, rounded corners, pastel or muted tones. Elements push out of or sink into the background.

**Editorial:** Large dramatic typography, generous whitespace, magazine-inspired grids. Serif fonts prominent. Strong contrast between heading and body sizes.

**Gradient-Rich:** Smooth gradient backgrounds, gradient text accents, vibrant color transitions. Modern SaaS aesthetic with depth through color rather than shadows.

**Dark Mode Premium:** Deep dark backgrounds (#0A0A0F to #1A1A2E range), high-contrast text, accent glow effects. Card elevation through subtle lighter backgrounds. Luminous CTA buttons.

### Stitch Style Word Bank (Supplementary)

Use these alongside core styles for more specific direction:

| Category | Keywords |
|----------|----------|
| Layout | Bento Grid, Editorial, Swiss Style, Split-Screen, Asymmetric, Card-Based |
| Texture | Glassmorphism, Claymorphism, Skeuomorphic, Grainy/Noise, Paper Texture |
| Atmosphere | Brutalist, Cyberpunk, Y2K, Retro-Futurism, Organic, Playful |
| Color | Duotone, Monochromatic, Pastel Goth, Dark Mode OLED, Earth Tones, Neon |

**Mapping to core styles:**
- Bento Grid → works with Minimalism, Neubrutalism
- Swiss Style → works with Minimalism, Editorial
- Glassmorphism → IS the Glassmorphism core style
- Brutalist → close to Neubrutalism
- Dark Mode OLED → IS the Dark Mode Premium core style

## Device Type Guidance

Pass `deviceType` to control the target viewport:

| Value | When to Use | Characteristics |
|-------|------------|-----------------|
| `DESKTOP` | Marketing sites, dashboards, content-heavy pages | Wide layouts, multi-column grids, hover states |
| `MOBILE` | Mobile apps, mobile-first sites | Single column, touch targets, bottom navigation |
| `TABLET` | Tablet-optimized apps | Hybrid layouts, sidebar + content |

**Default behavior:** If omitted, Stitch infers from the prompt content. Explicitly passing `deviceType` produces more accurate results.

## Design Mode Guidance

Pass `modelId` to control generation quality vs speed:

| Value | When to Use | Characteristics |
|-------|------------|-----------------|
| `GEMINI_3_PRO` | Production screens, final designs, complex layouts | Higher quality, more detail, slower |
| `GEMINI_3_FLASH` | Wireframing, quick exploration, early iteration | Faster, good enough for structure validation |

**Default:** Omit to let Stitch choose (typically PRO).

## Image Guidance

Include optional image direction in generation prompts:

**Patterns:**
- "Abstract geometric shapes, subtle and muted" — for tech/SaaS
- "Lifestyle photography with warm, natural tones" — for wellness/lifestyle
- "Bold illustrations with flat colors" — for creative/agency
- "Professional headshots and office environments" — for corporate/B2B
- "No images — typography and whitespace only" — for ultra-minimalist

**For edits targeting images:**
- "Replace the hero image with a lifestyle photo showing people collaborating"
- "Make the feature icons more colorful and playful"

## Variant Prompting

When calling `mcp__stitch__generate_variants`, both `prompt` and `variantOptions` are **required**.

### Writing Variant Prompts

The prompt should describe the direction for exploration:

- "Explore more dramatic color contrast and bolder typography"
- "Try a more playful, rounded aesthetic while keeping the same content"
- "Explore alternative hero layouts — try split-screen and asymmetric options"

### Creative Range Guidance

| Range | Effect | When to Use |
|-------|--------|-------------|
| `REFINE` | Subtle variations — spacing, sizing, minor color shifts | Polish an already-good design |
| `EXPLORE` | Moderate changes — layout alternatives, different visual weight | Default — good for comparing approaches |
| `REIMAGINE` | Dramatic redesign — completely different layout and visual treatment | Starting fresh or looking for bold alternatives |

### Aspect Focusing

Optionally narrow variant exploration to specific aspects:

| Aspect | What Changes |
|--------|-------------|
| `LAYOUT` | Grid, alignment, section arrangement |
| `COLOR_SCHEME` | Color palette variations |
| `IMAGES` | Image style, placement, treatment |
| `TEXT_FONT` | Typography choices and sizing |
| `TEXT_CONTENT` | Text arrangement and hierarchy |

## Prompt Quality Checklists

### Initial Generation Checklist

Before sending a `generate_screen_from_text` prompt:

- [ ] Describes the page idea and purpose clearly
- [ ] Includes vibe adjectives and color mood (NOT hex codes)
- [ ] Specifies font style description (NOT family names)
- [ ] Names UI style with descriptive adjectives
- [ ] Includes actual copy text from approved copy (NOT placeholder)
- [ ] Describes layout structure matching UX brief
- [ ] Includes image guidance if applicable
- [ ] Notes mobile adaptation for hero and navigation

### Edit Checklist

Before sending an `edit_screens` prompt:

- [ ] Targets a specific component or section
- [ ] Gives one clear, specific instruction
- [ ] Uses UI/UX keywords Stitch understands
- [ ] Includes exact token values ONLY for brand-specific changes (colors, fonts)
- [ ] Does NOT repeat token values for unchanged elements
- [ ] Limits to one major change per edit call

## Common Prompt Anti-Patterns

| Anti-Pattern | Problem | Fix |
|-------------|---------|-----|
| "Make it look professional" | Too vague — Stitch guesses style | Specify UI style + vibe adjectives |
| Hex codes in initial prompts | Over-constrains Stitch's interpretation | Use color mood language instead |
| "Lorem ipsum" placeholder | Generic filler produces generic designs | Use real approved copy |
| Ignoring UX brief layouts | Defeats psychology-informed design | Match section layout patterns from UX brief |
| Over-specifying pixels | Stitch handles responsive layout | Describe proportions and spatial relationships |
| Listing only section names | No design direction | Include content, mood, and style per section |
| Token dump in edit prompts | Confuses the edit intent | Target one component, give one instruction |
| "Change everything" edits | Too broad for Stitch to execute well | One major change per edit call |
| Missing prompt in variants | `prompt` is required, not optional | Always provide a direction for exploration |

## Full-Page Prompt Template

For complete page designs, use this structure:

```
A {page_type} for a {niche} brand that {conversion_intent}.

Theme: {vibe_adjectives}. {uiStyle} aesthetic. {color_mood} palette.

Navigation: {nav_description}

Hero: {layout_pattern}.
{hero_content_verbatim}
{psychology_notes}

Features: {layout_pattern}.
{features_content_verbatim}

[...additional sections...]

Footer: {footer_description}

Image style: {image_guidance}
```
