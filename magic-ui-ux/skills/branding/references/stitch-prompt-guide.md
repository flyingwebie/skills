# Stitch Prompt Crafting Guide

How to translate UX briefs and design tokens into effective Google Stitch `generate_screen_from_text` prompts that produce premium, brand-consistent screens.

## Prompt Structure Formula

Every Stitch prompt follows this structure. Each component is required unless marked optional.

```
[Page Context] + [Section Layout] + [Visual Style] + [Color Specification] + [Typography Specification] + [Content] + [Component Patterns] + [Mood/Feel]
```

Build each component from the corresponding source:

| Component | Source |
|-----------|--------|
| Page Context | Page type, niche, conversion intent from UX brief strategy section |
| Section Layout | Layout pattern and element arrangement from each UX brief section |
| Visual Style | `tokens.uiStyle` with descriptive visual adjectives (see UI Style Modifiers) |
| Color Specification | Exact hex values from `tokens.colors` |
| Typography Specification | Font family names and weights from `tokens.typography` |
| Content | Approved copy from `{page}-copy.md`, or UX brief placeholder text |
| Component Patterns | Pattern names from `tokens.componentPatterns` |
| Mood/Feel | Interaction hints and psychology notes from UX brief sections |

## Token Embedding Rules

Stitch generates better results when given exact design values instead of vague descriptions.

**ALWAYS include exact hex values:**
- "Primary color: #1A1A2E" -- not "use a dark color"
- "CTA button in #FF6B35 with white (#FFFFFF) text" -- not "use an orange button"

**ALWAYS include font family names:**
- "Headings in Inter Bold 600, body in Inter Regular 400" -- not "use a clean font"
- Include the weight number for precision

**ALWAYS include UI style with visual adjectives:**
- "Minimalist design style with generous whitespace and subtle shadows" -- not "make it clean"
- See UI Style Modifiers section for the right adjectives per style

**Include component patterns by name:**
- "Use glass-card pattern for feature cards" -- not "make the cards look modern"
- Reference tokens.componentPatterns values directly

**Include spacing intent from tokens.spacing:**
- "Use generous spacing (1.5rem-2rem between sections)" -- not "add some space"
- Reference the spacing scale values from tokens

## Section-Specific Prompt Templates

Use these templates when building prompt fragments for each section in a UX brief. Replace `{placeholders}` with actual values from tokens, UX brief, and approved copy.

### Hero

```
Design a {layout_pattern} hero section for a {niche} {page_type}.
Headline: "{headline_text}"
Subheading: "{subheading_text}"
CTA button: "{cta_text}"
Primary color: {colors.primary}, CTA color: {colors.cta}, Background: {colors.background}, Text: {colors.text}
Heading font: {typography.heading.family} {typography.heading.weights[0]}, Body font: {typography.body.family}
Style: {uiStyle} -- {style_specific_notes}
{component_pattern_notes}
{psychology_visual_cues}
Mobile: Stack headline, subheading, and CTA vertically with full-width button.
```

### Features / Benefits

```
Features section displaying {number_of_features} items in a {layout_pattern} grid.
Each feature has: icon area, title, description.
{feature_titles_and_descriptions}
Card style: {component_pattern} pattern with {colors.background} background.
Accent color: {colors.secondary} for icons, heading font: {typography.heading.family}, body: {typography.body.family} in {colors.text}.
Style: {uiStyle} -- {style_specific_notes}
{progressive_disclosure_notes}
```

### Pricing

```
Pricing section with {number_of_tiers} tiers in horizontal card layout.
{tier_names_prices_features}
Recommended tier highlighted with {colors.cta} border or background accent.
Card background: {colors.background}, text: {colors.text}, price in {typography.heading.family} bold.
Feature list in {typography.body.family} with checkmarks in {colors.semantic.success}.
CTA buttons: recommended tier uses {colors.cta}, others use {colors.secondary} or outlined.
Style: {uiStyle} -- {style_specific_notes}
{anchoring_notes}
```

### Testimonials / Social Proof

```
Testimonials section with {layout_pattern} layout showing {number} customer quotes.
Each testimonial: quote text, customer name, role/company, avatar placeholder.
Quote text in {typography.body.family} italic, name in {typography.heading.family} semibold.
Text color: {colors.text}, subtle accent: {colors.secondary}.
Background: {colors.background} with card or quote-mark styling using {component_pattern}.
Style: {uiStyle} -- {style_specific_notes}
{trust_psychology_notes}
```

### CTA / Conversion

```
Call-to-action section with {layout_pattern} layout.
Headline: "{cta_headline}"
Supporting text: "{cta_body}"
Button: "{cta_button_text}" in {colors.cta} with white text, large and prominent.
Background: {colors.primary} or gradient from {colors.primary} to {colors.secondary}.
Text in white or {colors.background} for contrast.
Heading font: {typography.heading.family}, body: {typography.body.family}.
Style: {uiStyle} -- {style_specific_notes}
{urgency_or_scarcity_notes}
```

### About / Team

```
About section with {layout_pattern} layout for a {niche} brand.
Heading: "{about_heading}"
Body text: "{about_body}"
Team members: {team_grid_or_list_description}
Photo placeholders with names in {typography.heading.family}, roles in {typography.body.family}.
Colors: text {colors.text}, background {colors.background}, accent {colors.secondary}.
Style: {uiStyle} -- {style_specific_notes}
{trust_and_credibility_notes}
```

### FAQ

```
FAQ section with {number} questions in expandable accordion layout.
{questions_and_answers}
Question text: {typography.heading.family} medium weight in {colors.text}.
Answer text: {typography.body.family} regular in {colors.text} at reduced opacity.
Expand/collapse icons using {colors.secondary}.
Background: {colors.background}, subtle dividers between items.
Style: {uiStyle} -- {style_specific_notes}
{cognitive_load_notes}
```

### Contact / Form

```
Contact section with {layout_pattern} layout.
Form fields: {field_list}
Submit button: "{submit_text}" in {colors.cta} with white text.
Labels in {typography.body.family} medium, inputs with {colors.text} text on {colors.background}.
Input borders: subtle gray, focus state: {colors.primary}.
Optional: contact info (email, phone, address) alongside form.
Style: {uiStyle} -- {style_specific_notes}
{form_friction_reduction_notes}
```

### Footer

```
Footer section with {layout_pattern} layout.
Columns: {column_descriptions} (e.g., navigation links, company info, social icons, newsletter signup).
Background: {colors.primary} or dark variant, text in white or {colors.background}.
Link hover color: {colors.cta} or {colors.secondary}.
Font: {typography.body.family} at smaller size.
Copyright line at bottom.
Style: {uiStyle} -- {style_specific_notes}
```

### Navigation / Header

```
Navigation bar with {component_pattern} header pattern.
Logo area (left), navigation links (center or right), CTA button (right).
Links: {nav_items}
CTA: "{nav_cta_text}" button in {colors.cta}.
Background: {colors.background} (or transparent for overlay style).
Text: {colors.text}, active link accent: {colors.primary}.
Font: {typography.body.family} medium weight.
Style: {uiStyle} -- {style_specific_notes}
Mobile: hamburger menu icon, slide-out or dropdown navigation.
```

### Portfolio / Gallery

```
Portfolio section with {layout_pattern} grid layout showing {number} items.
Each item: image placeholder, project title, category tag.
Title in {typography.heading.family}, category in {typography.body.family} small.
Hover effect: overlay with {colors.primary} at 80% opacity showing project details.
Background: {colors.background}, accent: {colors.secondary}.
Style: {uiStyle} -- {style_specific_notes}
{visual_hierarchy_notes}
```

### Comparison

```
Comparison section with {layout_pattern} table or card layout.
Comparing: {comparison_items}
{feature_rows_with_checkmarks_and_crosses}
Highlight column: {recommended_option} with {colors.cta} header or border.
Checkmarks in {colors.semantic.success}, crosses in {colors.semantic.error}.
Font: headers in {typography.heading.family}, rows in {typography.body.family}.
Background: {colors.background}, alternating row shading for readability.
Style: {uiStyle} -- {style_specific_notes}
{anchoring_and_framing_notes}
```

### Blog / Content

```
Blog listing section with {layout_pattern} layout showing {number} article cards.
Each card: featured image placeholder, category tag, title, excerpt, author, date.
Title in {typography.heading.family} medium, excerpt in {typography.body.family}.
Category tag: {colors.secondary} background with white text, small rounded pill.
Text: {colors.text}, background: {colors.background}.
Card style: {component_pattern} pattern.
Style: {uiStyle} -- {style_specific_notes}
```

### Onboarding / Steps

```
Onboarding section showing {number} steps in {layout_pattern} layout.
{step_titles_and_descriptions}
Step numbers or icons in {colors.primary}, connecting line or arrow between steps.
Active/current step highlighted with {colors.cta}.
Title: {typography.heading.family}, description: {typography.body.family}.
Background: {colors.background}, step indicators: {colors.secondary}.
Style: {uiStyle} -- {style_specific_notes}
{progressive_disclosure_notes}
```

### Notification / Alert

```
Notification component for {alert_type} messages.
Success: {colors.semantic.success} accent with checkmark icon.
Warning: {colors.semantic.warning} accent with warning icon.
Error: {colors.semantic.error} accent with error icon.
Info: {colors.semantic.info} accent with info icon.
Text in {typography.body.family}, dismiss button subtle.
Rounded corners, subtle background tint of the accent color.
Style: {uiStyle} -- {style_specific_notes}
```

## UI Style Modifiers

How each of the 7 UI styles affects prompt language. Include these descriptors when specifying the style in prompts.

### Minimalism
Clean lines, generous whitespace, subtle shadows, restrained color palette. Typography-driven hierarchy. Flat or near-flat elements. No decorative flourishes. Let content breathe.

### Glassmorphism
Frosted glass panels, background blur effects, translucent layers, light semi-transparent borders. Layered depth with see-through cards. Vibrant background gradients visible through glass elements.

### Neubrutalism
Bold black outlines (2-4px), raw geometric shapes, high contrast, offset drop shadows, chunky elements. Bright accent colors against stark backgrounds. Intentionally "unpolished" aesthetic.

### Soft UI (Neumorphism)
Subtle inner and outer shadows creating extruded/embossed effect, rounded corners, pastel or muted tones, gentle depth perception. Elements appear to push out of or sink into the background. Monochromatic shadow pairs (light + dark).

### Editorial
Large dramatic typography, generous whitespace, magazine-inspired grid layouts, typography-first hierarchy. Serif fonts prominent. Strong contrast between heading and body text sizes. Content as visual element.

### Gradient-Rich
Smooth gradient backgrounds, gradient text accents, vibrant color transitions between primary and secondary. Gradient overlays on images. Modern SaaS aesthetic with depth through color transitions rather than shadows.

### Dark Mode Premium
Deep dark backgrounds (#0A0A0F to #1A1A2E range), high-contrast text (white or near-white), accent glow effects around interactive elements, card elevation through subtle lighter backgrounds. Luminous CTA buttons.

## Prompt Quality Checklist

Before sending any prompt to Stitch via `generate_screen_from_text`, verify every item:

- [ ] Contains at least 3 exact hex color values from tokens
- [ ] Names specific font families from tokens (heading and body)
- [ ] Specifies UI style with descriptive visual adjectives (not just the style name)
- [ ] Includes actual copy text from approved copy (not placeholder "Lorem ipsum")
- [ ] Describes layout structure matching UX brief section patterns
- [ ] Mentions component patterns from tokens if applicable to the section
- [ ] Includes mobile adaptation notes for hero and navigation sections
- [ ] References psychology or interaction notes from UX brief where relevant

## Multi-Section vs Single-Section Prompts

### Full-Page Prompts (Recommended)

For complete page designs, combine all sections into one prompt for visual cohesion. List sections top to bottom with clear delineation:

```
Design a complete {page_type} page for a {niche} brand.

Navigation: [nav prompt fragment]

Hero: [hero prompt fragment]

Features: [features prompt fragment]

Testimonials: [testimonials prompt fragment]

CTA: [cta prompt fragment]

Footer: [footer prompt fragment]

Overall style: {uiStyle} with consistent {colors.primary} and {colors.secondary} accents throughout.
Typography: {typography.heading.family} for all headings, {typography.body.family} for all body text.
```

Stitch `generate_screen_from_text` works best with full-page prompts that establish complete visual context. Sections designed together share visual rhythm and consistent spacing.

### Single-Section Iteration

For iterating on individual sections (e.g., redesigning just the hero), focus the prompt on one section but reference adjacent sections for context:

```
Redesign the hero section of a {page_type} page. The section below is a features grid with {description}.
[hero prompt fragment with full detail]
Ensure visual continuity with the rest of the page using {colors.primary}, {typography.heading.family}, and {uiStyle} style.
```

## Common Prompt Anti-Patterns

Avoid these patterns that produce inconsistent or low-quality Stitch output:

| Anti-Pattern | Problem | Fix |
|-------------|---------|-----|
| "Make it look professional" | Too vague -- Stitch guesses style | Specify UI style + exact colors + font families |
| Missing color values | Stitch invents colors, breaking brand consistency | Always include 3+ hex values from tokens |
| "Lorem ipsum" placeholder text | Generic filler text produces generic designs | Use real approved copy from `{page}-copy.md` |
| Ignoring UX brief layout decisions | Defeats the psychology-informed design process | Match section layout patterns from UX brief exactly |
| Over-specifying pixel dimensions | Stitch handles responsive layout internally | Describe spatial relationships and proportions instead |
| Listing only section names | "Hero, Features, Pricing, Footer" gives no design direction | Include content, colors, typography, and style for each section |
| Single-word style descriptors | "Modern" or "clean" mean different things to everyone | Use full style modifier descriptions from this guide |
