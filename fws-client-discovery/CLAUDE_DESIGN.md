# CLAUDE_DESIGN.md, Claude Design (Anthropic Labs) Compatibility

Defines how FWS Client Discovery emits UX/UI output that feeds directly into **Claude Design**.

**References**
- https://www.anthropic.com/news/claude-design-anthropic-labs
- https://support.claude.com/en/articles/14604416-get-started-with-claude-design

## Output Contract

Every `06-UX-UI-Research.md` MUST end with a `## Claude Design Brief` section containing:
1. **Prompt paragraph**, plain-English, self-contained
2. **Design tokens**, YAML with OKLCH + hex, semantic layer, light + dark modes, fluid type, motion
3. **Page hints**, table linking to `./02-Sitemap-Report.md`
4. **Component hints**, primitives with state variants
5. **Cross-links**, to personas, keywords, sitemap, FAQs

## 1. Prompt Paragraph

Plain-English, self-contained. Example shape:

> "Trust-forward website for [Client], a [industry] serving [persona summary]. Mood, [keywords]. Style verdict, [UI style]. Emphasize [CTA behavior]. Accessibility, WCAG AA 2.2. Respect `prefers-reduced-motion` and `prefers-color-scheme`."

## 2. Design Tokens (YAML)

Every token has an OKLCH value AND a fallback hex. Light + dark pairs required. Semantic layer references raw tokens by name (not value).

```yaml
meta:
  client: "[Client Name]"
  industry: "[Industry]"
  style: "minimalism | corporate | editorial | brutalist | glass | ..."
  mood: ["calm", "confident", "precise"]
  logo:
    path: "./brand/logo.svg"          # null if not provided
    colors_extracted: ["#...", "#..."] # from Step 8.5
    shape_language: "geometric | organic | script | wordmark"
    type_classifier: "serif | sans-humanist | sans-geometric | slab | display"

# --- RAW COLOR TOKENS (light + dark pairs) ---
color_light:
  brand_primary:   { oklch: "0.55 0.18 255", hex: "#2B5BD6" }
  brand_secondary: { oklch: "0.70 0.12 180", hex: "#3FA79E" }
  brand_accent:    { oklch: "0.75 0.19  60", hex: "#E8A33D" }
  bg_canvas:       { oklch: "0.99 0.00 0",   hex: "#FDFDFD" }
  bg_surface:      { oklch: "0.96 0.01 250", hex: "#F3F5F9" }
  bg_raised:       { oklch: "1.00 0.00 0",   hex: "#FFFFFF" }
  text_primary:    { oklch: "0.18 0.02 260", hex: "#0D1117" }
  text_muted:      { oklch: "0.48 0.02 260", hex: "#5A6372" }
  text_inverse:    { oklch: "0.99 0.00 0",   hex: "#FDFDFD" }
  border_subtle:   { oklch: "0.90 0.01 260", hex: "#E1E4EA" }
  border_strong:   { oklch: "0.75 0.02 260", hex: "#A9AEBA" }
  state_success:   { oklch: "0.60 0.17 150", hex: "#1E9E5A" }
  state_warning:   { oklch: "0.75 0.16  80", hex: "#D18A1A" }
  state_error:     { oklch: "0.55 0.22  25", hex: "#C83A1A" }
  state_info:      { oklch: "0.65 0.14 230", hex: "#2E8ACB" }
  focus_ring:      { oklch: "0.65 0.22 255", hex: "#3A6EEC" }

color_dark:
  brand_primary:   { oklch: "0.70 0.16 255", hex: "#6F90E8" }
  brand_secondary: { oklch: "0.75 0.11 180", hex: "#6AC3BC" }
  brand_accent:    { oklch: "0.80 0.17  60", hex: "#F0B660" }
  bg_canvas:       { oklch: "0.15 0.01 260", hex: "#0B0D12" }
  bg_surface:      { oklch: "0.20 0.01 260", hex: "#141821" }
  bg_raised:       { oklch: "0.25 0.01 260", hex: "#1C2130" }
  text_primary:    { oklch: "0.97 0.00 0",   hex: "#F4F6FA" }
  text_muted:      { oklch: "0.70 0.02 260", hex: "#A5ADBD" }
  text_inverse:    { oklch: "0.15 0.01 260", hex: "#0B0D12" }
  border_subtle:   { oklch: "0.32 0.01 260", hex: "#262B38" }
  border_strong:   { oklch: "0.50 0.02 260", hex: "#5C6374" }
  state_success:   { oklch: "0.70 0.17 150", hex: "#4CC087" }
  state_warning:   { oklch: "0.82 0.15  80", hex: "#EAB154" }
  state_error:     { oklch: "0.70 0.20  25", hex: "#E87057" }
  state_info:      { oklch: "0.75 0.14 230", hex: "#62B0E8" }
  focus_ring:      { oklch: "0.80 0.18 255", hex: "#90AFF4" }

# --- SEMANTIC TOKENS (reference raw tokens by name, do not repeat values) ---
semantic:
  action_primary_bg:        "brand_primary"
  action_primary_fg:        "text_inverse"
  action_primary_hover_bg:  "brand_primary"   # apply +8% lightness on hover
  action_secondary_bg:      "bg_surface"
  action_secondary_fg:      "brand_primary"
  action_destructive_bg:    "state_error"
  surface_card:             "bg_raised"
  surface_overlay:          "bg_raised"       # + 12% opacity scrim
  link_default:             "brand_primary"
  link_visited:             "brand_secondary"
  input_bg:                 "bg_raised"
  input_border:             "border_subtle"
  input_border_focus:       "focus_ring"
  input_border_error:       "state_error"

# --- TYPOGRAPHY ---
typography:
  heading:
    family: "Inter"
    weight: 700
    google_fonts_url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    letter_spacing: "-0.02em"
    feature_settings: '"ss01", "cv11"'
  body:
    family: "Inter"
    weight: 400
    letter_spacing: "0"
  scale_fluid:   # clamp(min, preferred-vw, max)
    h1:    "clamp(2.25rem, 1.5rem + 3.5vw, 4rem)"
    h2:    "clamp(1.75rem, 1.25rem + 2vw, 2.75rem)"
    h3:    "clamp(1.375rem, 1.1rem + 1vw, 1.875rem)"
    body:  "clamp(1rem, 0.95rem + 0.2vw, 1.125rem)"
    small: "0.875rem"
    caption: "0.75rem"
  line_height:
    heading: 1.1
    body: 1.6

# --- SPACING (4pt grid) ---
spacing:
  unit: "4px"
  scale: { "0": 0, "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px", "8": "32px", "12": "48px", "16": "64px", "24": "96px" }
  container_max: "1200px"
  section_y_compact: "48px"
  section_y_normal: "96px"
  section_y_spacious: "160px"

# --- RADIUS ---
radius:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  pill: "9999px"

# --- RESPONSIVE ---
responsive:
  strategy: "mobile-first"
  container_queries: true
  breakpoints: { xs: 375, sm: 428, md: 768, lg: 1024, xl: 1440, xxl: 1920 }

# --- MOTION ---
motion:
  reduced_motion_fallback: true      # honor prefers-reduced-motion, cut durations to 0ms
  duration:
    instant: "0ms"
    fast: "150ms"
    normal: "250ms"
    slow: "400ms"
    ambient: "800ms"
  easing:
    standard: "cubic-bezier(0.2, 0, 0, 1)"
    emphasized: "cubic-bezier(0.3, 0, 0, 1.2)"
    exit: "cubic-bezier(0.4, 0, 1, 1)"
  page_transition_library: "none | lenis | swup"
  scroll_library: "none | lenis"

# --- ACCESSIBILITY ---
a11y:
  contrast_min: "WCAG AA 2.2"
  contrast_target: "WCAG AAA where feasible"
  focus_ring:
    token: "focus_ring"
    offset: "2px"
    width: "2px"
    style: "solid"
  touch_target_min_px: 44
  color_blind_safe: true
  supports:
    - "prefers-color-scheme"
    - "prefers-reduced-motion"
    - "prefers-contrast"
    - "forced-colors"
```

## 3. Page Hints

Table with state variants in the Sections column.

| Page | Template | Sections (top to bottom) | Primary CTA |
|------|----------|--------------------------|-------------|
| `./pages/homepage.md` | hero-led | hero, trust-strip, services, proof, faq, cta-banner | [CTA] |
| `./pages/about.md` | story | hero, story, team, values, cta | [CTA] |

See [Sitemap Report](./02-Sitemap-Report.md) for full list.

## 4. Component Hints (include state variants)

Every interactive primitive lists its states. Claude Design generates every state.

- `Button/primary` + `--hover`, `--active`, `--disabled`, `--loading`, `--focus-visible`
- `Button/secondary` + same state set
- `Button/destructive` + same state set
- `Input/text` + `--focus`, `--error`, `--disabled`, `--with-helper`, `--with-error-msg`
- `Card/service`, `Card/testimonial`, `Card/pricing`
- `Nav/sticky-minimal` + `--scrolled`, `--mobile-open`
- `FAQ/accordion` + `--expanded`, `--collapsed`
- `Form/lead-capture` + submit `--idle`, `--submitting`, `--success`, `--error`
- `EmptyState/*`, `LoadingSkeleton/*`, `ErrorBoundary/*`, `Toast/success|warning|error|info`
- `Footer/dense`

## 5. Logo Handling

If a logo was uploaded in `/discovery` preflight:
- Fill `meta.logo.*` fields in the YAML
- Run logo-analysis sub-step (`skills/ux-ui-research/SKILL.md`, Step 8.5)
- Bias `color_light.brand_*` tokens toward extracted brand colors
- Bias `typography.heading.family` toward the detected classifier

If no logo, set `meta.logo.path: null` and choose tokens from industry-design-rules.

## 6. Cross-Linking (REQUIRED)

The `## Claude Design Brief` section must link to:
- [Buyer Personas](./04-Buyer-Personas.md)
- [Keyword Research](./05-Keyword-Research.md)
- [Sitemap Report](./02-Sitemap-Report.md)
- [FAQ Research](./07-FAQ-Research.md)

## Writing Rules

- No em dashes, use a comma
- Markdown only, no binary exports
- No Pencil `.pen` references (deprecated)
- Relative internal links between all discovery files
