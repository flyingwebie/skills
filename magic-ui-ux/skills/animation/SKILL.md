---
name: animation
description: >
  Generates per-page animation choreography specs. Reads UX briefs for psychology context
  and design tokens for style-appropriate motion. Produces implementation-ready specs with
  Framer Motion, GSAP + ScrollTrigger, Swup.js, and Lenis code patterns.
---

# Animation Choreography Skill

## Purpose

Generate per-page animation specs that translate UX psychology decisions into concrete motion. Every section in a designed page gets entrance animation, scroll behavior, and accessibility fallback specs -- with exact library APIs, timing values, and easing functions that a developer can implement without guessing.

Animation specs are supplementary deliverables. They can be generated after the UI Agent completes screen generation via the `/design` command, or run standalone for any page with status "designed" or "iterated" in state.json.

## Interface Contract

### Input

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | Yes | Page name (must have status "designed" or "iterated" in state.json) |
| `uxBrief` | file | Yes | UX brief from `.ui-ux/briefs/{page}-ux-brief.md` |
| `tokens` | object | Yes | Design tokens from `.ui-ux/tokens.json` |

### Output

- Animation spec file at `.ui-ux/briefs/{page}-animation-spec.md`
- Updated `state.json.animationSpecs[]` with new entry

## Process

### Step 1: Pre-Flight

1. Read `.ui-ux/state.json` -- verify the target page exists and has status `"designed"` or `"iterated"`. If not, halt with an error explaining the page must be designed first.
2. Read `.ui-ux/tokens.json` -- extract the UI style (e.g., "Minimalism", "Dark Mode Premium") to determine animation intensity.
3. Read `.ui-ux/briefs/{page}-ux-brief.md` -- extract the section structure, section types, and psychology skills applied to each section.
4. Read `skills/animation/references/animation-guide.md` -- load library-specific patterns for reference during choreography assembly.

### Step 2: Section Analysis

For each section in the UX brief:

1. **Identify section type** (hero, features, pricing, testimonials, CTA, footer, stats, portfolio, FAQ, about, etc.)
2. **Read psychology skills applied** from the brief's per-section rationale
3. **Look up animation-guide.md** for:
   - Recommended entrance animation for this section type (Section-Type-to-Entrance Mapping table)
   - Recommended scroll behavior for this section type (Section-Type-to-Scroll-Behavior Mapping table)
   - Psychology-animation mapping for the applied skills (Psychology-Animation Mapping table)
4. **Determine animation intensity** based on UI style from tokens:

| UI Style | Intensity | Notes |
|---|---|---|
| Minimalism | restrained | Fade-only entrances, no parallax, subtle scroll |
| Clean Modern | restrained | Fade + slight translate, minimal scroll effects |
| Editorial | moderate | Elegant reveals, text-focused animations |
| Bold / Vibrant | expressive | Larger transforms, parallax, energetic timing |
| Organic / Rounded | moderate | Soft, flowing animations, gentle easing |
| Technical / Data-Driven | restrained | Precise, grid-aligned reveals, counter animations |
| Dark Mode Premium | expressive | Dramatic reveals, glow effects, sophisticated scroll |

- **Restrained:** Use opacity-only entrances, no parallax, shorter durations (0.3-0.5s)
- **Moderate:** Use opacity + slight transform, selective scroll effects, standard durations (0.4-0.6s)
- **Expressive:** Use larger transforms, parallax backgrounds, longer durations (0.5-0.8s), more scroll-linked effects

### Step 3: Choreography Assembly

Build the full-page animation choreography:

**Entrance Sequence:**
- Each section triggers independently when it enters the viewport (no cross-section stagger delays)
- Within each section, child elements stagger at 100-150ms intervals
- Use Framer Motion `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- Select entrance type from animation-guide.md based on section type and intensity level

**Scroll Behaviors:**
- Assign parallax, pinning, or scrub-based effects based on section type and intensity
- Reference GSAP ScrollTrigger configs from animation-guide.md with exact `start`/`end` values
- Restrained intensity: skip parallax entirely; Moderate: parallax on hero only; Expressive: parallax + scroll effects on multiple sections

**Page Transitions:**
- If project has multiple designed pages in state.json, recommend a Swup.js transition type
- Match transition style to UI style: Minimalism = fade, Bold/Vibrant = slide, Editorial/Organic = cross-fade
- If single page only, note "Page transitions not applicable -- single page project"

**Smooth Scroll:**
- Recommend Lenis configuration based on content type from animation-guide.md
- Include GSAP integration snippet for synchronized ScrollTrigger animations
- For restrained intensity, use shorter duration (0.8-1.0s); for expressive, use longer (1.2-1.6s)

**Reduced Motion Fallback:**
- For every animation, specify the `prefers-reduced-motion` alternative:
  - Remove all transform-based animations (translate, scale, rotate)
  - Keep opacity fades at 50% of normal duration
  - Disable parallax effects completely
  - Disable Lenis smooth scroll (revert to native)
  - Disable Swup page transitions (use native navigation)

### Step 4: Spec Generation

Write the animation spec to `.ui-ux/briefs/{page}-animation-spec.md` with this structure:

```markdown
# Animation Spec: {Page Name}

## Overview
- **UI Style:** {from tokens}
- **Animation Intensity:** {restrained | moderate | expressive}
- **Smooth Scroll:** {Lenis config summary}
- **Page Transition:** {Swup type if multi-page, or "N/A -- single page"}

## Section Choreography

### {Section Name}
**Type:** {section type}
**Psychology:** {skills applied}
**Entrance:** {Framer Motion props -- initial, animate, transition}
**Scroll:** {GSAP ScrollTrigger config if applicable, or "None"}
**Children Stagger:** {staggerChildren value}
**Reduced Motion:** {fallback behavior}

[repeat for each section]

## Page Transition
{Swup.js configuration and CSS, or "Not applicable"}

## Smooth Scroll Setup
{Lenis initialization code with GSAP integration}

## Accessibility
{prefers-reduced-motion CSS media query}
{JS detection pattern}
{Summary of what changes under reduced motion}
```

### Step 5: Persistence

1. Add entry to `state.json.animationSpecs[]`:
   ```json
   { "page": "{page}", "specPath": ".ui-ux/briefs/{page}-animation-spec.md" }
   ```
2. Update `state.json.updatedAt` to current ISO timestamp

## Key Rules

1. **Always read the UX brief first.** Animation decisions are driven by psychology rationale, not aesthetic preference.
2. **Match intensity to UI style.** A minimalist design with expressive animations feels wrong. Let tokens guide motion energy.
3. **Respect the "Don'ts" in animation-guide.md.** No body text animation, no infinite loops, no layout-shifting properties, no competing motion directions.
4. **Every animation needs a reduced motion fallback.** Accessibility is not optional.
5. **Maximum 3 simultaneous animations per viewport.** Cognitive load applies to motion.

## Integration with /design Command

The `/design` command can optionally invoke this skill after the UI Agent completes screen generation. The animation spec is a supplementary deliverable -- not required for screen generation. It can also be run standalone for any page that has been designed:

```
# After /design completes, optionally run:
# "Generate animation spec for {page}"
```

## Reference

See `references/animation-guide.md` for detailed library-specific patterns, section-type mappings, psychology-animation mappings, and anti-patterns.
