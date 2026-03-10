# UX Brief Template

Standard output format for the UX Agent. Every UX brief follows this structure to ensure consistent, psychology-informed layout decisions across all page types.

## Brief Header

```markdown
# {Page Name} UX Brief

Page Type: {page_type}
Niche: {niche}
Generated: {timestamp}
Design Tokens: {yes/no}
```

- **Page Type**: One of landing-page, homepage, product/service, content/blog, checkout/signup
- **Niche**: The project industry/vertical from state.json or user input
- **Design Tokens**: Indicates whether `.ui-ux/tokens.json` was available during analysis. When "no", layout decisions are still specific but visual treatment is deferred to UI Agent.

## Page-Level Strategy

This section comes before individual section analysis. It establishes the psychological thread for the entire page.

```markdown
## Page-Level Strategy

**Conversion Intent:** {high | medium | low}
Based on page type: landing-page/checkout = high, homepage/product = medium, content/blog = low.

**User Journey Context:**
- **Entry points:** {Where visitors typically arrive from -- search, ads, internal link, direct}
- **User goals:** {What visitors seek on this page type -- information, comparison, purchase, trust}
- **Exit expectations:** {Where visitors should go next -- signup, contact, product page, checkout}

**Psychology Themes:**
{1-3 overarching psychology themes that should thread through every section of this page. These are not skill names but behavioral goals.}

Example: "For a SaaS pricing page: reduce decision anxiety, establish value before cost, make the recommended option feel obvious."
```

## Per-Section Template

Repeat this block for every section in the page. All four subsections are mandatory -- no shortcuts.

```markdown
## Section: {section-name}

Position: {above-fold | below-fold}
Psychology Skills: {skill-1, skill-2[, skill-3, skill-4]}

### Layout Decision

**Pattern:** {Recommended layout pattern -- e.g., centered-stack, split-image, 3-col grid, alternating rows, accordion}
**Content Hierarchy:**
- Primary: {What gets the most visual weight}
- Secondary: {Supporting element}
- Tertiary: {Background or supplementary element}

**Spatial Relationships:**
- Grouped: {Elements that should be visually connected}
- Separated: {Elements that need distinct visual space}

### Psychology Rationale

**{skill-1}:** {1-2 sentences on how this skill applies to THIS section for THIS niche. Not generic -- specific.}
**{skill-2}:** {1-2 sentences on specific application.}
{Repeat for each selected skill.}

### Content Recommendations

**Elements needed:**
- {Element type}: {quantity and specifics} -- {why this element}
  Example: "Testimonial cards: 3 cards with photo + name + role + quote -- social proof needs identifiable humans"

**Content priority:** {What gets emphasis, what is secondary, what is optional}

### Interaction Notes

**Scroll behavior:** {Any scroll-triggered animations, parallax, sticky elements}
**Hover/click:** {Interactive states, expandable content, click targets}
**Mobile adaptation:** {How this section reflows on mobile -- stack order, hidden elements, touch targets}
**Accessibility:** {Key a11y considerations for this section -- contrast, focus order, screen reader notes}
```

## Section Transitions

After all sections, describe how adjacent sections connect psychologically and visually.

```markdown
## Section Transitions

**{Section A} -> {Section B}:**
{What Section A establishes psychologically, and how Section B builds on or resolves it.}
Example: "Hero -> Features: The curiosity-gap in the hero headline creates anticipation. Features resolves it with concrete capabilities, shifting from emotion to logic."

**{Section B} -> {Section C}:**
{Continuation of psychological flow.}

{Repeat for each adjacent pair.}
```

Flag any potential psychology skill conflicts between adjacent sections (rare but worth noting). For example, if one section uses loss-aversion heavily and the next uses trust-psychology, note whether the fear-then-trust sequence is intentional or needs reordering.

## Brief Footer

```markdown
## Brief Summary

**Skills Used:** {Deduplicated list of all psychology skills applied across the page}

**Page Flow Narrative:**
{1-2 sentences describing the overall psychological journey of the page. What emotional/cognitive state does the visitor start in, and where do they end up?}
Example: "Visitor arrives curious (hero curiosity-gap), gains confidence through proof (features + testimonials), and converts with reduced friction (simplified CTA with loss-aversion nudge)."

**Notes for UI Agent:**
- {Any constraints from tokens that affect visual execution}
- {Preferences from branding that should carry through}
- {Sections that need extra visual attention or special treatment}
- {If no tokens: "Visual treatment to be determined by UI Agent based on design tokens when available."}
```

## Usage Notes

- The UX Agent fills this template during Step 5 (Compile Brief) of its workflow
- Every field must be populated -- empty subsections indicate incomplete analysis
- Psychology rationale must name specific skills and explain their application, not just list skill names
- Content recommendations must include quantities and priorities, not vague suggestions like "add testimonials"
- The completed brief is saved to `.ui-ux/briefs/{page}-ux-brief.md`
