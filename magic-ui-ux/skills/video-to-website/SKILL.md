---
name: video-to-website
description: >
  Generates scroll-driven animated site specifications that transform video content into
  interactive web experiences. Produces canvas frame rendering sequences, GSAP ScrollTrigger
  pin/scrub configurations, section choreography timing, and Lenis smooth scroll integration.
---

# Video-to-Website Skill

## Purpose

Generate scroll-driven video-style site specs -- the specifications needed to build pages where scrolling acts like video playback. Think Apple product pages, automotive showcases, or any site where image sequences play on scroll. The skill produces implementation-ready specs with exact frame counts, scroll distances, content overlay timing, and library configurations.

Scroll-video specs are supplementary deliverables. They can be generated after the animation skill completes for pages designated as video-style experiences, or run standalone for any page with status "designed" or "iterated" in state.json.

## Interface Contract

### Input

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | Yes | Page name (must have status "designed" or "iterated" in state.json) |
| `uxBrief` | file | Yes | UX brief from `.ui-ux/briefs/{page}-ux-brief.md` |
| `tokens` | object | Yes | Design tokens from `.ui-ux/tokens.json` |
| `sequences` | object[] | Yes | Frame sequence definitions (see below) |

#### Sequence Definition

```json
{
  "name": "hero-product-reveal",
  "frameCount": 300,
  "framePattern": "frames/hero/frame-{NNNN}.webp",
  "description": "Product rotates from side angle to front view"
}
```

- `name`: Identifier for this sequence (used in spec headings and CSS classes)
- `frameCount`: Total number of frames in the sequence (must be > 0, max 600)
- `framePattern`: Path pattern with `{NNNN}` placeholder for zero-padded frame numbers
- `description`: Human-readable description of what the sequence shows

### Output

- Scroll-video spec file at `.ui-ux/briefs/{page}-scroll-video-spec.md`
- Updated `state.json.scrollVideoSpecs[]` with new entry

## Process

### Step 1: Pre-Flight

1. Read `.ui-ux/state.json` -- verify the target page exists and has status `"designed"` or `"iterated"`. If not, halt with an error explaining the page must be designed first.
2. Read `.ui-ux/tokens.json` -- extract the UI style (e.g., "Minimalism", "Dark Mode Premium") to determine animation intensity.
3. Read `.ui-ux/briefs/{page}-ux-brief.md` -- extract the section structure, section types, and psychology skills applied to each section.
4. Read `skills/video-to-website/references/scroll-video-guide.md` -- load library-specific patterns for canvas rendering, scroll-to-frame mapping, and section choreography.
5. Validate sequence definitions: `frameCount > 0`, `frameCount <= 600`, `framePattern` contains `{NNNN}` placeholder.

### Step 2: Page Structure Analysis

For each section in the UX brief, determine its type:

- **Video sequence section** -- pinned canvas with frame scrubbing. Assigned when the user specifies a sequence for that section.
- **Content overlay section** -- text, CTAs, badges that appear over or between video sequences. Standard scroll sections positioned between sequences.
- **Standard section** -- normal scrolling content with no video (footer, FAQ, etc.). Uses animation skill patterns for entrance and scroll behaviors.

Map sequences from input to sections. A single page might have 1-3 video sequences interspersed with standard content.

Determine animation intensity from UI style:

| UI Style | Intensity | Scroll Distance | Overlay Transition | Lenis Duration |
|----------|-----------|----------------|-------------------|----------------|
| Minimalism | restrained | 200-300vh | Instant | 1.0-1.2s |
| Clean Modern | restrained | 200-300vh | Instant | 1.0-1.2s |
| Editorial | moderate | 300-400vh | 0.3s fade | 1.2-1.4s |
| Bold / Vibrant | expressive | 400-500vh | 0.5s fade + transform | 1.4-1.8s |
| Organic / Rounded | moderate | 300-400vh | 0.3s fade | 1.2-1.4s |
| Technical / Data-Driven | restrained | 200-300vh | Instant | 1.0-1.2s |
| Dark Mode Premium | expressive | 400-500vh | 0.5s fade + transform | 1.4-1.8s |

### Step 3: Choreography Assembly

For each **video sequence section**, build:

**a. Frame Timeline** -- map scroll progress (0.0-1.0) to frame ranges with descriptive labels:

| Scroll Progress | Frame Range | Description |
|----------------|-------------|-------------|
| 0.0-0.2 | 1-60 | Initial reveal, product enters frame |
| 0.2-0.5 | 60-150 | Key angle rotation, main feature visible |
| 0.5-0.8 | 150-240 | Detail zoom or secondary feature |
| 0.8-1.0 | 240-300 | Final position, hero pose |

**b. Content Overlays** -- choreography table mapping scroll progress to text/CTA visibility:

| Progress | Element | Enter | Exit | Position |
|----------|---------|-------|------|----------|
| 0.05 | Title | fade-in 0.3s | fade-out at 0.18 | center-top |
| 0.2 | Feature 1 | fade-in 0.3s | fade-out at 0.45 | bottom-left |
| 0.5 | Feature 2 | fade-in 0.3s | fade-out at 0.75 | bottom-right |
| 0.8 | CTA | fade-in 0.3s | hold | center-bottom |

**c. GSAP ScrollTrigger Config** -- pin: true, scrub value, start/end, onUpdate callback for frame rendering. Exact code pattern from `references/scroll-video-guide.md`.

**d. Canvas Setup** -- responsive sizing, poster frame source, preload strategy (eager for first sequence, lazy for subsequent).

For **standard sections** between sequences:
- Use the regular animation skill patterns (Framer Motion entrance, GSAP scroll behaviors)
- Reference `skills/animation/references/animation-guide.md` for these sections

For **content overlay sections**:
- Absolute positioning specs over canvas
- Fade/transform timing tied to scroll progress
- Z-index layering order (canvas: 1, overlays: 2, nav: 10)

### Step 4: Spec Generation

Write the spec to `.ui-ux/briefs/{page}-scroll-video-spec.md` with this structure:

```markdown
# Scroll-Video Spec: {Page Name}

## Overview
- **UI Style:** {from tokens}
- **Animation Intensity:** {restrained | moderate | expressive}
- **Total Sequences:** {count}
- **Total Scroll Distance:** {estimated vh}
- **Smooth Scroll:** Lenis {duration}s, GSAP ticker integration

## Frame Sequences

### Sequence: {name}
**Frames:** {count} ({format})
**Scroll Distance:** {N}vh
**Canvas:** Full viewport, responsive, poster frame at frame 1

#### Frame Timeline
| Scroll Progress | Frame Range | Description |
|----------------|-------------|-------------|
| 0.0-0.2 | 1-60 | {description} |
| ... | ... | ... |

#### Content Overlays
| Progress | Element | Enter | Exit | Position |
|----------|---------|-------|------|----------|
| 0.05 | Title | fade-in 0.3s | fade-out at 0.18 | center-top |
| ... | ... | ... | ... | ... |

#### GSAP Configuration
```js
// ScrollTrigger pin/scrub config
// Canvas frame rendering callback
// Overlay timeline
```

#### Preload Strategy
{Preload approach, mobile optimization, fallback}

[repeat for each sequence]

## Inter-Sequence Sections
{Standard scroll sections between sequences -- reference animation skill patterns}

## Smooth Scroll Setup
{Lenis config optimized for scroll-video, GSAP ticker integration}

## Performance Budget
{Frame counts, estimated sizes, mobile strategy}

## Accessibility
{prefers-reduced-motion: poster frames + static content, no frame sequences}
{Keyboard navigation: section jump links}
```

### Step 5: Persistence

1. Add entry to `state.json.scrollVideoSpecs[]`:
   ```json
   { "page": "{page}", "specPath": ".ui-ux/briefs/{page}-scroll-video-spec.md" }
   ```
2. Update `state.json.updatedAt` to current ISO timestamp

## Key Rules

1. **Always read the UX brief first.** Psychology rationale drives overlay timing and content placement -- not aesthetic preference.
2. **Match intensity to UI style.** Same mapping as the animation skill. A minimalist design with expressive 500vh scroll distances feels wrong.
3. **Every sequence needs a poster frame fallback and preload strategy.** No blank canvases on page load.
4. **Every animation needs a reduced motion fallback.** Show static poster frame + all content visible, skip frame sequences entirely.
5. **Maximum 3 video sequences per page.** More than 3 creates excessive load times and scroll fatigue.
6. **Canvas frame rendering only.** Never use `<video>` elements for scroll-controlled playback -- they cannot be scrubbed precisely.
7. **Mobile must have a fallback strategy.** Either reduced frame count (every 2nd/3rd frame) or static image replacement with CSS parallax.

## Integration with /design Command

The skill is invoked after the animation skill for pages designated as video-style experiences. It is a supplementary deliverable -- not required for standard page design. It can be run standalone:

```
# After /design completes, for video-style pages:
# "Generate scroll-video spec for {page}"
```

## Reference

See `references/scroll-video-guide.md` for detailed canvas rendering patterns, scroll-to-frame mapping, GSAP pin/scrub configurations, Lenis integration, performance guidelines, and anti-patterns.
