---
name: ux-ui-research
description: >
  Generate data-driven design system recommendations matched to industry, audience,
  and brand. Includes color palettes, typography, UI styles, and accessibility.
  Triggers: "UX research", "design system", "UI style", "color palette", "typography".
version: 0.2.0
---

# UX/UI Research & Design System

## Purpose
Generate a data-driven design system recommendation for the client's website. Matches industry, target audience, and brand positioning to specific UI styles, color palettes, typography, and component patterns. Supports both full assessment and quick branding compatibility check.

## When to Use
- Step 5 of FWS Discovery workflow
- When starting a new web design project
- When redesigning to improve conversion or brand perception
- Use `--quick` flag for branding compatibility check only

## Inputs Required
1. **Client website URL** — for current design analysis (if exists)
2. **Industry** — from discovery context
3. **Buyer personas** — from Step 3 (for audience-appropriate design)
4. **Competitor UX findings** — from Step 2 (discovery-context.md)
5. **Brand assets** — logo, existing colors, brand guidelines (if available)

## Modes

### Full Mode (default)
Complete design system recommendation including style, colors, typography, components, accessibility, and responsive breakpoints.

### Quick Mode (`--quick`)
Brand compatibility check only — assesses whether current branding works with recommended design direction, flags conflicts, and provides evolution path.

## Workflow

### Step 1: Industry Design Intelligence
Look up the client's industry in the design rules database to determine:

**Recommended UI Style** — Select from available styles based on industry:

| Industry Category | Typical Styles | Key Reasoning |
|------------------|---------------|---------------|
| Professional Services | Minimalism, Corporate, Swiss | Trust, authority, clarity |
| Healthcare/Medical | Clean, Accessible, Calm | Trust, readability, compliance |
| Creative/Agency | Bold, Experimental, Dark Mode | Creativity, portfolio showcase |
| E-commerce | Card-based, Flat, Conversion-focused | Product browsing, speed, CTAs |
| Technology/SaaS | Glassmorphism, Neubrutalism, Modern | Innovation, product showcase |
| Restaurant/Food | Warm, Photographic, Appetizing | Atmosphere, menu readability |
| Construction/Trades | Industrial, Bold, Trust | Strength, reliability, portfolio |
| Education | Friendly, Accessible, Organized | Learning, navigation, clarity |
| Finance/Insurance | Conservative, Data-driven, Trustworthy | Security, compliance, clarity |
| Luxury/Fashion | Elegant, Minimalist, High-contrast | Premium feel, visual impact |

Reference `references/industry-design-rules.md` for the complete 100-rule database.

**Anti-Patterns for Industry** — What design choices to avoid.

### Step 2: Color Palette Selection
Based on industry, audience psychology, and brand positioning:

**Color Role Assignment**:
| Role | Purpose | Selection Criteria |
|------|---------|-------------------|
| Primary | Brand identity, headers, nav | Industry norm + brand recognition |
| Secondary | Supporting elements, accents | Complements primary |
| CTA/Action | Buttons, links, key actions | High contrast, action-driving |
| Background | Page backgrounds, cards | Neutral, non-fatiguing |
| Text | Body copy, headings | High contrast ratio (WCAG AA) |
| Success | Positive feedback | Green family |
| Warning | Caution states | Amber/orange family |
| Error | Error states | Red family |

**Contrast Requirements** (WCAG AA minimum):
- Normal text on background: 4.5:1
- Large text on background: 3:1
- UI components: 3:1

Reference `references/color-palettes.md` for curated industry palettes.

### Step 3: Typography Selection
Select a font pairing based on industry, readability, and brand voice:

**Pairing Structure**:
- **Heading font**: Personality and impact
- **Body font**: Readability and professionalism
- **Accent font**: Optional, for callouts or special elements

**Selection Criteria**:
| Factor | Weight | Notes |
|--------|--------|-------|
| Readability | 30% | Body text must be effortless to read |
| Industry fit | 25% | Match audience expectations |
| Brand alignment | 25% | Consistent with brand personality |
| Performance | 20% | Google Fonts availability, file size |

Reference `references/font-pairings.md` for curated combinations with Google Fonts URLs.

### Step 4: Branding Assessment
Analyze the client's existing brand:

**If brand assets exist**:
1. Extract current colors from logo/website
2. Identify current typography
3. Assess brand voice/tone
4. Check compatibility with recommended design system

**Compatibility Matrix**:
| Element | Current | Recommended | Compatible? | Action |
|---------|---------|------------|-------------|--------|
| Primary Color | | | Yes/Partial/No | Keep/Adjust/Replace |
| Typography | | | Yes/Partial/No | Keep/Adjust/Replace |
| UI Style | | | Yes/Partial/No | Keep/Adjust/Replace |
| Tone/Voice | | | Yes/Partial/No | Keep/Adjust/Replace |

**Evolution Strategy**:
- **Compatible**: Keep existing, enhance with design system
- **Partial**: Gradual evolution, keep recognition, improve execution
- **Incompatible**: Brand refresh recommended alongside web redesign

**If no brand exists**:
- Full design system becomes the brand foundation
- Recommend logo direction aligned with chosen style
- Define brand voice based on persona preferences

### Step 5: Component Patterns
Recommend specific UI component patterns:

**Layout**:
- Header pattern (sticky, minimal, mega-menu)
- Hero section pattern
- Service/feature showcase pattern
- Testimonial display pattern
- CTA section pattern
- Footer pattern

**Interactive Elements**:
- Button styles (primary, secondary, ghost)
- Form field styles
- Card patterns
- Modal/dialog patterns
- Navigation patterns (mobile and desktop)

**Conversion Elements**:
- Lead capture forms
- Trust badge placement
- Social proof sections
- Pricing table patterns
- Contact/CTA patterns

### Step 6: Accessibility Requirements
Document WCAG compliance requirements:

| Requirement | Standard | Implementation |
|------------|----------|---------------|
| Color Contrast (text) | WCAG AA 4.5:1 | Test all color combinations |
| Color Contrast (large) | WCAG AA 3:1 | Headings, large text |
| Touch Targets | Min 44x44px | All interactive elements |
| Focus States | Visible focus rings | Tab navigation support |
| Alt Text | All meaningful images | SEO + accessibility |
| Keyboard Navigation | Full tab support | All interactive elements |
| Screen Reader | Semantic HTML | Proper heading hierarchy |
| Motion | Reduced motion support | Respect prefers-reduced-motion |

### Step 7: Responsive Breakpoints
Define responsive design strategy:

| Breakpoint | Width | Priority | Design Notes |
|-----------|-------|----------|-------------|
| Mobile S | 375px | High | iPhone SE baseline |
| Mobile L | 428px | High | iPhone Pro Max |
| Tablet | 768px | Medium | iPad portrait |
| Desktop | 1024px | High | Laptop |
| Desktop L | 1440px | Medium | Standard monitor |
| Desktop XL | 1920px | Low | Large monitors |

### Step 8: Frontend Experience Libraries

Assess whether the project would benefit from smooth interaction libraries. Provide a recommendation based on industry, audience, and UX goals.

**Recommended Libraries**:

| Library | Purpose | When to Recommend |
|---------|---------|-------------------|
| [Lenis](https://github.com/darkroomengineering/lenis) | Smooth, buttery scroll behavior with momentum and easing | Sites with long scrolling pages, storytelling layouts, portfolio showcases, parallax sections, or any project where scroll feel is a brand differentiator. Particularly strong for creative agencies, luxury brands, real estate, restaurants, and architecture firms. |
| [Swup](https://github.com/swup/swup) | SPA-like page transitions without a full SPA framework | Multi-page sites that need seamless navigation feel — especially sites with strong visual identity where hard page reloads break the experience. Great for portfolios, agencies, hospitality, e-commerce product browsing, and any project where perceived speed and polish matter. |

**Decision Criteria**:
| Factor | Consider Lenis | Consider Swup |
|--------|---------------|---------------|
| Content-heavy / long pages | ✓ | — |
| Multiple distinct pages with visual continuity | — | ✓ |
| Portfolio / showcase site | ✓ | ✓ |
| Performance-sensitive (mobile-first) | Assess — adds ~12KB | Assess — adds ~15KB |
| Accessibility requirement | ✓ (respects `prefers-reduced-motion`) | ✓ (maintains browser history, focus management) |
| Static site / Jamstack | ✓ | ✓ |
| React/Next.js SPA | Skip (use native scroll libs) | Skip (built-in routing) |

**Project-Specific Recommendation Format**:
For each library, write:
- **Recommend / Consider / Skip** — clear verdict
- **Why**: 1-2 sentences specific to this client's project, audience, and design style
- **Where it shines**: which pages or sections benefit most (e.g., "homepage hero → services scroll", "service page → case study transitions")
- **Implementation note**: any considerations (e.g., "pair Lenis with GSAP ScrollTrigger for parallax hero" or "Swup works well with the recommended CSS transition style")

If **both** libraries are recommended, note that they work well together — Lenis handles scroll behavior while Swup handles page transitions. They don't conflict.

If the project is a SPA (React/Next.js/Nuxt), skip Swup and note that Lenis can still add value for scroll feel within pages.

### Step 9: Update Discovery Context
Append to `discovery-context.md`:
- Recommended UI style and rationale
- Color palette (hex values)
- Typography pairing
- Brand compatibility summary
- Key UX patterns recommended
- Accessibility requirements

## Output
Write findings to `06-UX-UI-Research.md` using the template.

## Quality Checklist
- [ ] Industry-matched design style selected with rationale
- [ ] Color palette with all roles defined and contrast-checked
- [ ] Typography pairing selected with Google Fonts URL
- [ ] Branding compatibility assessed (if existing brand)
- [ ] Component patterns recommended
- [ ] Accessibility requirements documented
- [ ] Responsive breakpoints defined
- [ ] Frontend experience libraries assessed (Lenis/Swup recommendation)
- [ ] Discovery context updated with design findings

## Reference Files
- `references/industry-design-rules.md` — 100 industry-specific design rules
- `references/color-palettes.md` — Curated color palettes by industry
- `references/font-pairings.md` — Typography combinations with Google Fonts
- `references/ui-styles-guide.md` — Detailed UI style descriptions and when to use each
