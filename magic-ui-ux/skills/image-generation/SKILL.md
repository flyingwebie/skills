---
name: image-generation
description: >
  Generates comprehensive JSON visual specifications from text descriptions, reference images,
  or both. Translates photography/cinematography parameters into rich natural-language image
  guidance that dramatically improves Stitch's image rendering in generated screens.
---

# Image Generation Skill

## Purpose

Transform minimal image input (text description, reference image, or both) into comprehensive JSON visual specifications covering photography and cinematography parameters. The critical output is a **pre-translated natural-language guidance text** that Stitch consumes as "Image style:" content -- converting technical photography specs into mood/feel language that produces superior image rendering.

Image specs are both a standalone deliverable (via `/image` command) and an auto-integrated pipeline step in `/design`. In pipeline mode, the skill reads the UX brief to determine photography needs per section without user prompting.

## Interface Contract

### Input

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | Yes (pipeline) | Page name from state.json |
| `description` | string | Yes (standalone) | Text description of desired imagery |
| `referenceImage` | file | No | Reference image path for reverse-engineering |
| `tokens` | object | Yes | Design tokens from `.ui-ux/tokens.json` |
| `uxBrief` | file | Yes (pipeline) | UX brief from `.ui-ux/briefs/{page}-ux-brief.md` |

### Output

- JSON spec file at `.ui-ux/briefs/{page}-image-spec.json`
- Pre-translated natural-language guidance text
- Updated `state.json.imageSpecs[]` with new entry including `guidanceText`

## Process

### Step 1: Pre-Flight

1. Read `.ui-ux/state.json` -- verify the target page exists (pipeline mode) or that the project is initialized.
2. Read `.ui-ux/tokens.json` -- extract color palette, UI style, and niche to inform photography mood.
   - If `tokens.json` does not exist, **HALT**: "Run `/magic-ui-ux:branding` first. Image specs require a design system for mood coherence."
3. Load `skills/image-generation/references/visual-spec-schema.md` -- reference for JSON structure, inference rules, and translation dictionary.

### Step 2: Analysis

Detect the operating mode and gather context:

1. **Mode Detection:**
   - **Text-to-Spec:** `description` provided, no `referenceImage` -- extract explicit info, infer gaps
   - **Image-to-Spec:** `referenceImage` provided, no `description` -- reverse-engineer all visual elements
   - **Hybrid:** Both provided -- analyze image as base, apply text modifications

2. **Pipeline Mode (when `uxBrief` is provided):**
   - Read the UX brief to identify sections needing imagery
   - Map section types to photography contexts:

     | Section Type | Photography Context | Style |
     |---|---|---|
     | hero | lifestyle / product | Wide, aspirational, brand-defining |
     | about | portrait / team | Warm, authentic, approachable |
     | testimonials | headshot | Professional, trustworthy, clean |
     | services | documentary / process | Action-oriented, real-world context |
     | portfolio | editorial / showcase | High-quality, detailed, curated |
     | features | product / abstract | Clean, focused, explanatory |
     | contact | environmental | Welcoming, accessible, human |

   - Skip sections that don't need imagery: pricing tables, FAQ, forms, footer
   - Use panel_specifications to handle per-section variations within a unified style

3. **Declare Assumptions:** Before generating, state key creative decisions:
   - Photography context chosen and why
   - Mood/tone derived from niche and tokens
   - Lighting approach based on UI style
   - Any inferred demographics or setting details

### Step 3: JSON Spec Generation

Generate the complete JSON specification covering all 11 top-level keys from the visual-spec-schema reference. Apply inference rules per photography context.

**The 11 required keys:**

1. **meta** -- intent, priorities, overall creative direction
2. **frame** -- aspect ratio, composition rule, layout structure
3. **subject** -- identity, demographics, expression, pose, body language
4. **wardrobe** -- garments with material, color, fit, light behavior
5. **accessories** -- jewelry, eyewear, props relevant to the scene
6. **environment** -- setting, surfaces, depth, atmosphere, background
7. **lighting** -- key light, fill light, rim light, shadows, color temperature
8. **camera** -- lens, aperture, focus, perspective, distortion
9. **post_processing** -- color grading, tonality, texture, film qualities
10. **negative_specifications** -- what to explicitly avoid
11. **panel_specifications** -- per-section variations (pipeline mode) or single-panel (standalone)

**Rules:**
- Every field populated through extraction or expert inference -- no placeholders
- Apply inference rules from visual-spec-schema.md based on photography context
- Lighting, environment, and style must cohere within the spec
- Color palette from tokens informs post-processing and environment tones
- UI style informs overall photography mood (see Niche-to-Mood mapping in schema reference)

### Step 4: JSON-to-Natural-Language Translation

The critical step. Transform the technical JSON specification into 2-5 sentences of rich descriptive image guidance that Stitch interprets effectively.

**Translation principles:**
- Convert technical photography parameters into mood/feel language
- Stitch understands emotional descriptors better than camera settings
- Keep descriptions vivid but concise -- Stitch works best with focused guidance

**Translation examples:**

| JSON Parameter | Technical Value | Translated Language |
|---|---|---|
| lighting.key | softbox 45-degrees-left | soft directional lighting from the left |
| camera.lens | 85mm | intimate, portrait-style framing |
| camera.aperture | f/2 | beautifully blurred background |
| post_processing.color | warm tone +15 | warm, golden color palette |
| environment.atmosphere | morning haze | dreamy, ethereal atmosphere |
| lighting.color_temperature | 5600K | natural daylight feel |
| camera.perspective | slightly low angle | empowering, aspirational perspective |

**Output format:**
Generate a `guidanceText` string of 2-5 sentences that weaves together:
- Overall mood and atmosphere
- Lighting quality and direction
- Color treatment and palette feel
- Composition and perspective
- Subject presentation style

**Example output:**
> "Warm lifestyle photography with soft directional lighting and a golden color palette. Intimate portrait-style framing with beautifully blurred backgrounds creates depth and focus. Dreamy, ethereal atmosphere with natural daylight tones. Empowering perspective that feels aspirational and authentic."

### Step 5: Persistence

1. Save the complete JSON spec to `.ui-ux/briefs/{page}-image-spec.json`
2. Add entry to `state.json.imageSpecs[]`:
   ```json
   {
     "page": "{page}",
     "specPath": ".ui-ux/briefs/{page}-image-spec.json",
     "guidanceText": "{pre-translated natural language text}"
   }
   ```
3. Update `state.json.updatedAt` to current ISO timestamp

## Key Rules

1. **Read tokens first.** Color palette and UI style inform photography mood. A minimalist design needs clean, restrained imagery. A bold design needs vibrant, energetic photography.
2. **Every JSON field populated.** Through extraction or expert inference -- never placeholders. If a field isn't explicitly specified, infer from context using the inference rules table.
3. **Lighting, environment, and style must cohere.** A warm candlelit environment cannot have cool 7500K lighting. A clean modern office cannot have grungy post-processing.
4. **Translated text is what reaches Stitch, not the JSON.** The JSON is the structured intermediate artifact for inspection and editing. The `guidanceText` is the consumable output.
5. **Pipeline mode auto-determines needs from UX brief.** No user prompting required. Section types map to photography contexts automatically.
6. **One spec per page, not per section.** Visual coherence across the page. Use `panel_specifications` for per-section variations within the unified style.

## Integration with /design Command

The `/design` command auto-invokes this skill between copy generation and UI Agent screen generation (Step 3.5). In pipeline mode:
- Reads the UX brief to identify sections needing imagery
- Generates the JSON spec and translated guidance text
- Passes `guidanceText` to the UI Agent for the "Image style:" field
- No user approval needed -- image specs are technical photography parameters, not brand content

## Reference

See `references/visual-spec-schema.md` for the full JSON schema, inference rules, section-to-photography mappings, niche-to-mood mappings, and the translation dictionary.
