---
description: "Generate scroll-driven video-style site specs for designed pages"
allowed-tools: Read, Write, Edit, Bash(ls:*,cat:*,mkdir:*)
argument-hint: "<page> --sequences <json-file>"
---

# /magic-ui-ux:video

Generate scroll-driven video-style site specifications for a designed page. Transforms video content into interactive web experiences where scrolling acts like video playback -- canvas frame rendering sequences, GSAP ScrollTrigger pin/scrub configurations, and Lenis smooth scroll integration.

---

## Pre-Flight Check

Before doing anything, read the project's persistence layer.

1. **Check `.ui-ux/` exists.**
   - If `.ui-ux/` does not exist: "Run `/magic-ui-ux:branding` first. The design pipeline requires a design system."

2. **Read `.ui-ux/state.json`** for project context:
   - `niche` -- needed for content overlay copy alignment
   - `pages` -- existing pages and their statuses
   - Verify the target page has status `"designed"` or `"iterated"`
   - If the page does not exist or has status `"planned"` or `"ux-briefed"`, **HALT**: "Run `/magic-ui-ux:design` for this page first. Video specs require a fully designed page."

3. **Read `.ui-ux/tokens.json`** -- REQUIRED.
   - If `tokens.json` does not exist, **HALT**: "Run `/magic-ui-ux:branding` first. The design pipeline requires a design system."
   - Extract `uiStyle` for animation intensity mapping.

4. **Read `.ui-ux/briefs/{page}-ux-brief.md`** -- REQUIRED.
   - If the UX brief does not exist, **HALT**: "No UX brief found for this page. Run `/magic-ui-ux:design {page}` first."

---

## Input Parsing

### Page Argument

- **`<page>` (required):** Single page name. Must be lowercase, alphanumeric, and hyphens only.
  ```
  /magic-ui-ux:video homepage
  ```

- **Validation:** Page must exist in `state.json` with status `"designed"` or `"iterated"`.

### Sequences Flag

- **`--sequences <json-file>` (optional):** Path to a JSON file containing sequence definitions array.

  Expected format:
  ```json
  [
    {
      "name": "hero-product-reveal",
      "frameCount": 300,
      "framePattern": "frames/hero/frame-{NNNN}.webp",
      "description": "Product rotates from side angle to front view"
    }
  ]
  ```

  Each sequence must have:
  - `name` (string): Identifier for the sequence
  - `frameCount` (number): Total frames, must be > 0 and <= 600
  - `framePattern` (string): Path pattern with `{NNNN}` placeholder for zero-padded frame numbers
  - `description` (string): Human-readable description of what the sequence shows

  **Validation:**
  - Maximum 3 sequences per page (more creates excessive load times and scroll fatigue)
  - `frameCount` must be between 1 and 600
  - `framePattern` must contain `{NNNN}` placeholder

- **If no `--sequences` flag:** Prompt the user to define sequences interactively:

  > **Define your video sequences for {page}.**
  > For each sequence, I need:
  > 1. **Name** (e.g., "hero-product-reveal")
  > 2. **Frame count** (total frames, max 600)
  > 3. **Frame pattern** (path with {NNNN} placeholder, e.g., "frames/hero/frame-{NNNN}.webp")
  > 4. **Description** (what the sequence shows)
  >
  > You can define up to 3 sequences. Type "done" when finished.

  Collect sequences one at a time. After each, ask if the user wants to add another (up to 3 max).

---

## Skill Invocation

Invoke the video-to-website skill (`skills/video-to-website/SKILL.md`) with:

| Parameter | Value |
|-----------|-------|
| `page` | From `<page>` argument |
| `uxBrief` | `.ui-ux/briefs/{page}-ux-brief.md` |
| `tokens` | `.ui-ux/tokens.json` |
| `sequences` | Parsed from `--sequences` file or interactive input |

The video-to-website skill:
1. Analyzes the UX brief section structure for sequence-to-section mapping
2. Builds frame timelines, content overlay choreography, and GSAP ScrollTrigger configs
3. Determines animation intensity and scroll distances from UI style tokens
4. Produces `.ui-ux/briefs/{page}-scroll-video-spec.md`
5. Updates `state.json.scrollVideoSpecs[]` with the new entry

---

## Summary Output

After the skill completes, present a summary:

```
Video Spec Complete

Page:        {page}
Sequences:   {count}
Spec:        .ui-ux/briefs/{page}-scroll-video-spec.md

| Sequence | Frames | Scroll Distance | Description |
|----------|--------|----------------|-------------|
| hero-product-reveal | 300 | 400vh | Product rotates from side angle to front view |

Estimated total scroll distance: {N}vh

Next steps:
- Review the spec for overlay timing and content placement
- Prepare frame assets matching the framePattern paths
- Run /magic-ui-ux:iterate to refine page designs
```

---

## Error Handling

### Page Not Designed

If the target page does not have status `"designed"` or `"iterated"`:

> **This page must be designed before generating video specs.**
> Run `/magic-ui-ux:design {page}` first. Video specs require a fully designed page with a UX brief.

### Tokens Missing

If `tokens.json` does not exist:

> **Design tokens are required.** Run `/magic-ui-ux:branding` to generate a design system first.

### UX Brief Missing

If `.ui-ux/briefs/{page}-ux-brief.md` does not exist:

> **No UX brief found for {page}.** Run `/magic-ui-ux:design {page}` to generate the UX brief and design the page.

### Invalid Sequences

If sequence validation fails:

- Frame count <= 0 or > 600: "Frame count must be between 1 and 600. Got: {value}"
- Missing `{NNNN}` placeholder: "Frame pattern must contain `{NNNN}` placeholder for zero-padded frame numbers."
- More than 3 sequences: "Maximum 3 video sequences per page. Reduce to 3 or fewer to prevent scroll fatigue."

### Sequences File Not Found

If `--sequences` flag points to a non-existent file:

> **Sequences file not found:** {path}
> Provide a valid JSON file path or omit the flag to define sequences interactively.
