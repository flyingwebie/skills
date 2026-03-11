---
description: "Generate rich image specifications from text descriptions, reference images, or both"
allowed-tools: Read, Write, Edit, Bash(ls:*,cat:*,mkdir:*)
argument-hint: "<description> [--page <page>] [--section <section>] [--from-image <path>]"
---

# /magic-ui-ux:image

Generate comprehensive JSON visual specifications that translate into rich natural-language image guidance for Stitch screen generation. Supports three modes: text-to-spec, image-to-spec, and hybrid.

---

## Pre-Flight Check

Before doing anything, read the project's persistence layer.

1. **Check `.ui-ux/` exists.**
   - If `.ui-ux/` does not exist: "Run `/magic-ui-ux:branding` first. The design pipeline requires a design system."

2. **Read `.ui-ux/state.json`** for project context:
   - `niche` -- needed for mood and photography style inference
   - `pages` -- existing pages and their statuses

3. **Read `.ui-ux/tokens.json`** -- REQUIRED.
   - If `tokens.json` does not exist, **HALT**: "Run `/magic-ui-ux:branding` first. Image specs require a design system for mood coherence."
   - Extract `uiStyle` for photography intensity mapping
   - Extract color palette for post-processing tone alignment

4. **If `--page` provided:** Read `.ui-ux/briefs/{page}-ux-brief.md` for section context.

---

## Input Parsing

### Description Argument

- **`<description>` (required unless `--from-image`):** Text description of desired imagery.
  ```
  /magic-ui-ux:image "Warm lifestyle photography of a young professional working at a cafe"
  ```

### Flags

- **`--page <page>` (optional):** Associate the spec with a specific page in state.json. If provided, the spec is saved as `{page}-image-spec.json` and linked in state.
  ```
  /magic-ui-ux:image "Professional team portraits" --page about
  ```

- **`--section <section>` (optional):** Target a specific section type for focused inference. Activates section-to-photography mapping from the schema reference.
  ```
  /magic-ui-ux:image "Team photos" --page about --section team
  ```

- **`--from-image <path>` (optional):** Reference image to reverse-engineer into a spec.
  ```
  /magic-ui-ux:image --from-image ./references/hero-inspiration.jpg
  ```

### Mode Detection

| Inputs Provided | Mode | Behavior |
|---|---|---|
| `description` only | Text-to-Spec | Extract explicit info, infer gaps, generate complete JSON |
| `--from-image` only | Image-to-Spec | Reverse-engineer all visual elements into specification |
| Both `description` and `--from-image` | Hybrid | Analyze image as base, apply text modifications |

---

## Skill Invocation

Invoke the image generation skill (`skills/image-generation/SKILL.md`) with:

| Parameter | Value |
|-----------|-------|
| `page` | From `--page` flag (or generate a timestamp-based name if standalone) |
| `description` | From `<description>` argument |
| `referenceImage` | From `--from-image` flag (if provided) |
| `tokens` | `.ui-ux/tokens.json` |
| `uxBrief` | `.ui-ux/briefs/{page}-ux-brief.md` (if `--page` points to a designed page) |

The image generation skill:
1. Analyzes inputs and detects photography context
2. Declares assumptions about creative decisions
3. Generates complete JSON spec with all 11 top-level keys
4. Translates JSON into natural-language guidance text
5. Saves spec to `.ui-ux/briefs/{page}-image-spec.json`
6. Updates `state.json.imageSpecs[]` with the entry

---

## Summary Output

After the skill completes, present a summary:

```
Image Spec Complete

Page:        {page}
Mode:        {Text-to-Spec | Image-to-Spec | Hybrid}
Spec:        .ui-ux/briefs/{page}-image-spec.json

Photography Context: {context}
Mood:               {mood from meta}
Lighting:           {lighting summary}
Camera:             {lens + aperture summary}

Guidance Text:
"{pre-translated natural language text}"

Variation Suggestions:
- Adjust lighting to {alternative} for a {different mood} feel
- Try {alternative lens} for {different framing effect}
- Shift color grading to {alternative} for {different tone}

Next steps:
- Review the JSON spec and adjust parameters if needed
- Run /magic-ui-ux:design to use this spec in screen generation
- Run /magic-ui-ux:image with different parameters for alternatives
```

---

## Error Handling

### Tokens Missing

If `tokens.json` does not exist:

> **Design tokens are required.** Run `/magic-ui-ux:branding` to generate a design system first.

### UX Brief Missing (with --page)

If `--page` is provided but no UX brief exists for that page:

> **No UX brief found for {page}.** The image spec will use niche-level defaults instead of section-specific photography mapping. For richer results, run `/magic-ui-ux:design {page}` first.

Proceed with niche-level defaults rather than halting.

### No Description or Image

If neither `description` nor `--from-image` is provided:

> **Provide a text description, a reference image, or both.**
> Examples:
> - `/magic-ui-ux:image "Warm lifestyle photography with natural light"`
> - `/magic-ui-ux:image --from-image ./photo.jpg`
> - `/magic-ui-ux:image "Make it warmer and more intimate" --from-image ./photo.jpg`

### Reference Image Not Found

If `--from-image` points to a non-existent file:

> **Reference image not found:** {path}
> Provide a valid image file path or use a text description instead.
