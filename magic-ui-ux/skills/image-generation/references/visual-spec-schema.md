# Visual Spec Schema Reference

Complete reference for generating JSON visual specifications. Covers schema structure, inference rules, context mappings, and the translation dictionary for converting technical parameters to natural language.

---

## Full JSON Schema

All 11 top-level objects with field types and descriptions.

### 1. meta

| Field | Type | Description |
|-------|------|-------------|
| `intent` | string | Overall creative intent ("lifestyle brand imagery", "professional headshots") |
| `priorities` | string[] | Ordered list of visual priorities ("warmth", "authenticity", "professionalism") |
| `mood` | string | Single-word or short phrase mood descriptor ("aspirational", "calm confidence") |
| `target_audience` | string | Who the imagery speaks to ("young professionals", "health-conscious families") |

### 2. frame

| Field | Type | Description |
|-------|------|-------------|
| `aspect_ratio` | string | Frame ratio ("16:9", "4:3", "1:1", "3:2") |
| `composition_rule` | string | Primary composition approach ("rule-of-thirds", "centered", "golden-ratio", "diagonal") |
| `layout` | string | Overall spatial arrangement ("single-subject-centered", "environmental-wide", "tight-crop") |
| `negative_space` | string | Intentional empty space usage ("generous-left", "minimal", "top-heavy") |

### 3. subject

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Subject category ("person", "product", "group", "abstract", "environment-only") |
| `demographics` | object | `{ age_range, gender_presentation, ethnicity_note }` -- infer if not specified |
| `face` | object | `{ expression, gaze_direction, features_emphasis }` |
| `hair` | object | `{ style, color, texture, length }` |
| `body` | object | `{ build, posture, positioning }` |
| `expression` | string | Emotional read ("confident smile", "thoughtful gaze", "relaxed neutral") |
| `pose` | string | Body arrangement ("standing-relaxed", "seated-leaning", "walking-natural", "hands-working") |

### 4. wardrobe

| Field | Type | Description |
|-------|------|-------------|
| `garments` | object[] | Array of `{ item, material, color, fit, light_behavior }` |
| `style_category` | string | Overall wardrobe vibe ("business-casual", "athleisure", "formal", "creative-professional") |
| `color_coordination` | string | How garment colors relate to brand palette ("complementary-to-primary", "neutral-base") |

### 5. accessories

| Field | Type | Description |
|-------|------|-------------|
| `items` | object[] | Array of `{ type, material, color, placement }` |
| `props` | object[] | Scene-relevant objects `{ item, purpose, placement }` (laptop, coffee cup, notebook) |

### 6. environment

| Field | Type | Description |
|-------|------|-------------|
| `setting` | string | Location type ("modern-office", "outdoor-urban", "studio-backdrop", "home-workspace") |
| `surfaces` | object | `{ floor, walls, furniture }` with material and color |
| `depth` | string | Background depth ("shallow-blurred", "deep-environmental", "infinite-seamless") |
| `atmosphere` | string | Air quality ("clean-crisp", "morning-haze", "golden-hour-warm", "overcast-soft") |
| `color_palette` | string | Environment's dominant colors ("warm neutrals", "cool grays", "earth tones") |
| `season` | string | Time context if relevant ("spring", "autumn", "timeless") |

### 7. lighting

| Field | Type | Description |
|-------|------|-------------|
| `key_light` | object | `{ type, position, intensity, modifier }` -- primary light source |
| `fill_light` | object | `{ type, position, intensity }` -- shadow fill |
| `rim_light` | object | `{ type, position, intensity }` -- edge separation |
| `shadows` | string | Shadow quality ("soft-gradual", "crisp-defined", "minimal-flat") |
| `color_temperature` | string | Kelvin range or descriptor ("5600K-daylight", "3200K-tungsten", "mixed-warm") |
| `overall_quality` | string | Summary descriptor ("soft-diffused", "dramatic-directional", "flat-even") |

### 8. camera

| Field | Type | Description |
|-------|------|-------------|
| `lens` | string | Focal length ("85mm", "35mm", "50mm", "24mm") |
| `aperture` | string | F-stop ("f/2", "f/2.8", "f/5.6", "f/8") |
| `focus` | object | `{ point, depth_of_field }` ("eyes", "shallow-bokeh") |
| `perspective` | string | Camera angle ("eye-level", "slightly-low", "overhead", "three-quarter") |
| `distortion` | string | Lens character ("minimal", "slight-wide-angle", "compressed-telephoto") |
| `movement` | string | Implied motion ("static", "slight-motion-blur", "frozen-action") |

### 9. post_processing

| Field | Type | Description |
|-------|------|-------------|
| `color_grading` | object | `{ tone, saturation, vibrance, split_toning }` |
| `tonality` | string | Overall tonal character ("high-key-bright", "low-key-moody", "balanced-natural") |
| `texture` | string | Surface quality ("clean-digital", "subtle-grain", "film-organic") |
| `film_emulation` | string | Film stock reference if applicable ("Portra 400", "none", "Fuji Pro 400H") |
| `contrast` | string | Contrast level ("soft-low", "medium-natural", "punchy-high") |
| `sharpness` | string | Detail level ("soft-dreamy", "crisp-detailed", "selectively-sharp") |

### 10. negative_specifications

| Field | Type | Description |
|-------|------|-------------|
| `avoid_elements` | string[] | Elements to exclude ("harsh shadows", "cluttered backgrounds", "forced smiles") |
| `avoid_styles` | string[] | Style directions to avoid ("overly filtered", "stock-photo-generic", "HDR-look") |
| `avoid_technical` | string[] | Technical pitfalls ("blown highlights", "chromatic aberration", "noise") |

### 11. panel_specifications

| Field | Type | Description |
|-------|------|-------------|
| `panels` | object[] | Per-section variations: `{ section, context_override, subject_override, lighting_override }` |
| `consistency_rules` | string[] | What must stay constant across panels ("color_temperature", "post_processing", "wardrobe") |

---

## Inference Rules by Photography Context

Default parameters when not explicitly specified. Apply based on detected photography context.

| Context | Lens | Aperture | Lighting | Subject Default | Mood |
|---------|------|----------|----------|----------------|------|
| Fashion/Editorial | 85mm | f/2.8 | Controlled studio or shaped natural | Styled model, 25-30 age range | Aspirational, polished |
| Street/Documentary | 35mm | f/8 | Natural available | Authentic subjects, real context | Raw, genuine, energetic |
| Portrait | 85mm | f/2 | Flattering soft light | Direct expression, 30-40 if professional | Warm, personal, trustworthy |
| Dynamic/Action | 24-35mm | f/5.6 | High-energy, mixed | Motion-implied pose | Energetic, bold, exciting |
| Product | 50-100mm | f/5.6-f/8 | Controlled, even | Product as hero, minimal distraction | Clean, precise, focused |
| Lifestyle | 35-50mm | f/2.8 | Natural or soft shaped | People in context, candid feel | Authentic, relatable, warm |
| Environmental | 24-35mm | f/5.6-f/8 | Available + fill | Setting as co-subject | Immersive, contextual, spacious |

**Default rules when info is missing:**
- No age given: 25-30 (fashion/lifestyle), 30-40 (professional/corporate)
- No expression given: Neutral with direct eye contact
- No environment given: Clean, simple backdrop appropriate to context
- No post-processing given: Natural, clean-digital with medium contrast

---

## Section-to-Photography Mapping

Maps UX brief section types to photography contexts for pipeline auto-detection.

| Section Type | Photography Context | Reasoning |
|---|---|---|
| hero | lifestyle / product | Brand-defining first impression -- needs aspirational, wide imagery |
| about | portrait / team | Human connection -- warm, authentic representations of people |
| testimonials | headshot | Trust signals -- professional, clean headshots build credibility |
| services | documentary / process | Show work in action -- real-world context demonstrates capability |
| portfolio | editorial / showcase | Curated quality -- high-detail work showcases demand editorial treatment |
| features | product / abstract | Explain capabilities -- clean, focused imagery that doesn't distract |
| contact | environmental | Welcoming -- accessible, human spaces invite connection |
| team | portrait / group | Relatability -- consistent, well-lit team portraits build rapport |
| stats / metrics | abstract | Data visualization -- geometric or abstract patterns complement numbers |
| CTA | lifestyle | Aspiration trigger -- imagery that represents the desired outcome |

**Skip these sections (no imagery needed):**
- pricing (tables/cards, no photographic content)
- FAQ (text-focused, accordion patterns)
- forms (input fields, no photographic content)
- footer (navigation/legal, minimal or no imagery)
- newsletter (CTA-focused, text-driven)

---

## Niche-to-Mood Mapping

Maps project niche to default photography mood and tone. Tokens UI style refines this further.

| Niche Category | Default Mood | Color Tendency | Lighting Tendency | Post-Processing |
|---|---|---|---|---|
| SaaS / Software | Cool, clean, professional | Blues, grays, white space | Even, soft, controlled | Clean digital, medium contrast |
| Wellness / Health | Warm, calm, nurturing | Earth tones, greens, soft pastels | Soft natural, golden hour | Warm tones, low contrast, dreamy |
| Finance / Legal | Neutral, stable, trustworthy | Navy, charcoal, muted gold | Even, professional, flat | Natural, crisp, balanced |
| Creative / Agency | Bold, variable, expressive | Saturated, high-contrast pairs | Dramatic, directional | Punchy contrast, vibrant saturation |
| E-commerce / Retail | Bright, inviting, aspirational | Brand-dependent, clean white | Bright, even product lighting | Clean, true-color, sharp |
| Real Estate | Warm, spacious, luxurious | Warm neutrals, wood, stone | Natural window light, golden | Warm correction, HDR-balanced |
| Education | Approachable, energetic, inclusive | Primary colors, warm accents | Bright natural, cheerful | Clean, vibrant, optimistic |
| Restaurant / Food | Warm, sensory, appetizing | Warm tones, rich earth | Dramatic side light, warm | Film-like warmth, rich shadows |
| Nonprofit | Authentic, empathetic, hopeful | Earth tones, warm accents | Natural available, documentary | Authentic grain, warm tones |
| Technology / Hardware | Precise, innovative, sleek | Cool grays, accent blues | Controlled studio, rim-lit | Sharp, high-contrast, clean |

---

## Translation Dictionary

Comprehensive mapping from JSON technical values to natural-language descriptions for Stitch.

### Lighting Translations

| Technical | Natural Language |
|-----------|-----------------|
| softbox 45-degrees-left | soft directional lighting from the left |
| beauty dish overhead | flattering overhead glow |
| natural window light | gentle natural light streaming through windows |
| rim light from behind | subtle edge lighting that separates subject from background |
| 3200K tungsten | warm, cozy tungsten warmth |
| 5600K daylight | clean natural daylight |
| 7500K overcast | cool, even overcast light |
| high-key flat | bright, airy, evenly lit |
| low-key dramatic | moody, dramatic with deep shadows |
| soft-diffused | gentle, wrapping light with soft transitions |
| hard-directional | bold, sculpting light with defined shadows |

### Camera Translations

| Technical | Natural Language |
|-----------|-----------------|
| 24mm wide | expansive, immersive wide perspective |
| 35mm standard | natural, true-to-life perspective |
| 50mm normal | balanced, classic framing |
| 85mm portrait | intimate, portrait-style framing |
| 100mm+ telephoto | compressed, focused, isolated framing |
| f/1.4-f/2 | dreamy, beautifully blurred background |
| f/2.8-f/4 | gentle background separation |
| f/5.6-f/8 | balanced depth with environmental context |
| f/11+ | everything sharp, deep focus |
| eye-level | natural, relatable perspective |
| slightly-low angle | empowering, aspirational perspective |
| overhead | graphic, pattern-revealing viewpoint |
| three-quarter | dynamic, engaging angle |

### Post-Processing Translations

| Technical | Natural Language |
|-----------|-----------------|
| Portra 400 emulation | soft, film-like tones with creamy skin rendering |
| high saturation | rich, vibrant colors |
| desaturated | muted, sophisticated color palette |
| warm split-toning | golden highlights with warm shadow tones |
| cool split-toning | blue-tinted highlights with cool shadows |
| subtle grain | organic, film-like texture |
| clean digital | crisp, modern digital clarity |
| high contrast | bold, punchy tonal range |
| soft contrast | gentle, airy tonal transitions |
| selectively-sharp | focused subject with soft surroundings |

### Environment Translations

| Technical | Natural Language |
|-----------|-----------------|
| modern-office | clean, contemporary workspace |
| studio-backdrop | seamless, distraction-free background |
| outdoor-urban | dynamic city environment |
| home-workspace | comfortable, lived-in setting |
| morning-haze | dreamy, ethereal atmosphere |
| golden-hour-warm | warm, glowing sunset light |
| overcast-soft | soft, even natural lighting (no harsh shadows) |
| clean-crisp | clear, sharp atmospheric conditions |

### Composition Translations

| Technical | Natural Language |
|-----------|-----------------|
| rule-of-thirds | naturally balanced composition |
| centered | strong, symmetrical framing |
| golden-ratio | harmoniously proportioned layout |
| generous negative space | breathing room, clean and uncluttered |
| tight-crop | close-up, intimate detail |
| environmental-wide | spacious, context-rich framing |

---

## UI Style to Photography Intensity

Maps the tokens UI style to photography treatment intensity, paralleling the animation skill's intensity mapping.

| UI Style | Photography Intensity | Notes |
|---|---|---|
| Minimalism | Restrained | Clean, simple compositions. Muted tones. Generous negative space. Minimal styling. |
| Clean Modern | Restrained | Crisp, professional. Natural colors. Even lighting. No heavy processing. |
| Editorial | Moderate | Considered compositions. Film-like processing. Intentional mood. |
| Bold / Vibrant | Expressive | Saturated colors. Dramatic lighting. Strong compositions. High energy. |
| Organic / Rounded | Moderate | Soft, natural tones. Warm lighting. Organic textures. Gentle processing. |
| Technical / Data-Driven | Restrained | Precise, clean. Cool tones. Even lighting. Sharp focus. Minimal atmosphere. |
| Dark Mode Premium | Expressive | Low-key dramatic. Rich shadows. Rim lighting. Sophisticated processing. |
