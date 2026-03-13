# Theme Mapping Guide

Maps `tokens.json` design tokens to Stitch-compatible theme language. Use this guide when crafting prompts in the UI Agent (Step 3) to ensure consistent vibe-language that Stitch interprets well.

---

## tokens.json → Vibe Language

When building initial generation prompts, translate exact token values into descriptive mood language. Stitch responds better to vibe descriptions than raw values for initial generation.

### Color Mood Mapping

| Token Path | Example Value | Vibe Translation |
|-----------|---------------|-----------------|
| `colors.primary` (dark blue/navy) | `#1A1A2E`, `#0D1B2A` | "deep navy", "midnight blue", "dark sophisticated blue" |
| `colors.primary` (light blue) | `#4A90D9`, `#5B9BD5` | "calm sky blue", "soft professional blue" |
| `colors.primary` (green) | `#2D6A4F`, `#1B4332` | "rich forest green", "deep emerald" |
| `colors.primary` (red/coral) | `#E63946`, `#FF6B6B` | "bold coral red", "vibrant warm red" |
| `colors.primary` (purple) | `#7B2D8E`, `#6A0572` | "rich plum purple", "deep royal purple" |
| `colors.primary` (black/charcoal) | `#1A1A1A`, `#2D2D2D` | "sleek charcoal", "refined dark" |
| `colors.cta` (orange) | `#FF6B35`, `#F77F00` | "warm energetic orange", "bold sunset orange" |
| `colors.cta` (green) | `#06D6A0`, `#2EC4B6` | "fresh mint green", "inviting teal" |
| `colors.cta` (blue) | `#0077B6`, `#023E8A` | "confident action blue", "strong trust blue" |
| `colors.background` (white) | `#FFFFFF`, `#FAFAFA` | "crisp white", "clean light background" |
| `colors.background` (off-white) | `#F5F5F5`, `#EBEBEB` | "soft warm gray", "gentle off-white" |
| `colors.background` (dark) | `#0D1117`, `#1A1A2E` | "rich dark background", "deep dark mode" |

### Typography Style Mapping

| Token Path | Example Value | Vibe Translation |
|-----------|---------------|-----------------|
| `typography.heading.family` (geometric sans) | Inter, Poppins, Montserrat | "clean geometric sans-serif headings" |
| `typography.heading.family` (humanist sans) | Open Sans, Lato, Source Sans | "friendly approachable headings" |
| `typography.heading.family` (serif) | Playfair Display, Merriweather | "elegant editorial serif headings" |
| `typography.heading.family` (display) | Oswald, Bebas Neue | "bold impactful display headings" |
| `typography.heading.family` (slab) | Roboto Slab, Zilla Slab | "sturdy authoritative slab headings" |
| `typography.body.family` (sans) | Inter, Roboto, Open Sans | "readable modern body text" |
| `typography.body.family` (serif) | Georgia, Merriweather | "classic editorial body text" |
| `typography.body.family` (mono) | JetBrains Mono, Fira Code | "technical monospace body text" |

### UI Style Mapping

| `uiStyle` Token | Vibe Phrases |
|-----------------|-------------|
| Minimalism | "clean and spacious", "generous whitespace", "typography-driven", "restrained elegance" |
| Glassmorphism | "frosted glass layers", "translucent depth", "blurred transparency", "floating glass panels" |
| Neomorphism | "soft embossed surfaces", "subtle 3D depth", "tactile shadow play", "raised matte elements" |
| Brutalism | "raw and unapologetic", "thick borders and bold type", "high-contrast stark layout", "intentionally rough" |
| Material Design | "structured card-based", "subtle elevation shadows", "systematic grid", "deliberate motion" |
| Flat Design | "crisp flat colors", "no shadows or gradients", "bold simple shapes", "icon-driven" |
| Retro / Vintage | "nostalgic warm palette", "textured backgrounds", "classic serif pairings", "analog warmth" |
| Dark Mode | "deep dark surfaces", "luminous accent pops", "high-contrast readability", "sleek night aesthetic" |
| Gradient | "smooth color transitions", "vibrant gradient flows", "dynamic color blending", "rich chromatic depth" |

---

## tokens.json → Stitch DesignTheme (Future MCP Support)

When Stitch MCP accepts structured `DesignTheme` parameters (not yet available), map tokens as follows:

| Token Path | DesignTheme Field | Notes |
|-----------|-------------------|-------|
| `colors.primary` | `primaryColor` | Direct hex pass-through |
| `colors.secondary` | `secondaryColor` | Direct hex pass-through |
| `colors.cta` | `accentColor` | Maps CTA to Stitch's accent concept |
| `colors.background` | `backgroundColor` | Direct hex pass-through |
| `colors.text` | `textColor` | Direct hex pass-through |
| `typography.heading.family` | `headingFont` | Font family name |
| `typography.body.family` | `bodyFont` | Font family name |
| `uiStyle` | `style` | Lowercase match (e.g., "minimalism" → "minimalist") |
| `spacing.sectionPadding` | `density` | Map to "compact", "normal", or "spacious" |

### Style Name Normalization

| `uiStyle` Token | DesignTheme `style` |
|-----------------|---------------------|
| Minimalism | `minimalist` |
| Glassmorphism | `glassmorphism` |
| Neomorphism | `neomorphism` |
| Brutalism | `brutalist` |
| Material Design | `material` |
| Flat Design | `flat` |
| Dark Mode | `dark` |
| Gradient | `gradient` |

---

## Usage in UI Agent

Reference this guide in **Step 3: Prompt Crafting** (Phase A — Initial Generation):

1. Look up the project's `uiStyle` in the UI Style Mapping table above
2. Translate `colors.primary`, `colors.cta`, and `colors.background` to vibe phrases using the Color Mood Mapping
3. Translate `typography.heading.family` and `typography.body.family` using the Typography Style Mapping
4. Combine into the Theme/Vibe section of the prompt:

```
Theme: {typography_vibe}. {uiStyle_vibe}. {color_primary_vibe} with {color_cta_vibe} accents on a {color_background_vibe}.
```

**Example:**
- tokens: primary=#1A1A2E, cta=#FF6B35, bg=#FFFFFF, heading=Inter, body=Roboto, uiStyle=Minimalism
- Result: "Theme: Clean geometric sans-serif headings with readable modern body text. Clean and spacious, typography-driven aesthetic. Deep navy with warm energetic orange accents on a crisp white background."
