# Instructions Avancées Etch WP — Référence

> Les règles fondamentales (double classe, CTA, etch/text, text vs lede) sont dans `CLAUDE.md`. Ce fichier est la référence avancée pour la syntaxe JSON, les composants, les animations et les patterns CSS.

---

## 1. Structure JSON racine

> Consulter quand : création d'un nouveau JSON from scratch.

### Pattern "section" (bloc de page, non réutilisable)

```json
{
  "type": "block",
  "gutenbergBlock": {
    "blockName": "etch/element",
    "attrs": {
      "metadata": {"name": "Nom du Pattern"},
      "tag": "section",
      "attributes": {"data-etch-element": "section", "class": "nom-du-pattern"},
      "styles": ["etch-section-style", "custom-id"]
    },
    "innerBlocks": [...],
    "innerHTML": "\n\n",
    "innerContent": ["\n", null, "\n"]
  },
  "version": 2,
  "styles": {...},
  "components": {...}
}
```

### Pattern "component" (réutilisable avec props)

```json
{
  "type": "block",
  "gutenbergBlock": {
    "blockName": "etch/component",
    "attrs": {
      "ref": <component_id>,
      "attributes": { ... props overrides ... }
    },
    "innerBlocks": [],
    "innerHTML": "\n\n",
    "innerContent": ["\n", "\n"]
  },
  "version": 2,
  "styles": {...},
  "components": {
    "<component_id>": {
      "id": <component_id>,
      "name": "Component Name",
      "key": "ComponentNamePascalCase",
      "properties": [...],
      "description": "",
      "legacyId": "",
      "blocks": [...]
    }
  }
}
```

`version` : `2` par défaut, `2.1` avec champ `"timestamp"` ISO 8601 pour les patterns récents.

### Section vs Component

**Section** (`etch/element`, tag `section`) : bloc de page complet. Gère layout, padding, container. Jamais un composant.

**Component** (`etch/component`, `ref`) : élément réutilisable à l'intérieur d'une section.

```
section (etch/element, <section>)          ← jamais un composant
  container (etch/element, <div>)
    etch/component ref=XX (Section Intro)  ← composant réutilisable
    grid (etch/element)
      etch/component ref=YY (Card)         ← instancié N fois
```

### Détection des composants

Un élément DOIT devenir un composant dès qu'il remplit AU MOINS UN critère :

1. **Répétition intra-section** : même structure, contenus différents (3 cards, 5 testimonials)
2. **Répétition inter-pages** : même structure HTML/design sur plusieurs pages (Section Intro, Avatar)
3. **Variations masquables** : deux versions (avec/sans CTA, avec/sans image) → un composant + props booléennes `showXxx` + `etch/condition`

Si l'élément n'apparait qu'une seule fois avec une structure unique → `etch/element`.

---

## 2. Types de blocs

> Consulter quand : doute sur le blockName à utiliser.

| blockName | Usage |
|-----------|-------|
| `etch/element` | Élément HTML standard (div, section, h1-h6, p, a, img, ul, li, span, figure, nav, header, footer, form, blockquote, cite, article, etc.) |
| `etch/text` | Contenu texte (OBLIGATOIRE pour tout texte visible) |
| `etch/component` | Référence composant réutilisable via `ref` |
| `etch/condition` | Affichage conditionnel (props/data) |
| `etch/slot-placeholder` | Point d'insertion dans un composant (définition) |
| `etch/slot-content` | Contenu injecté dans un slot (utilisation) |
| `etch/svg` | SVG avec `src` (URL ou data URI) |
| `etch/dynamic-element` | Tag dynamique via `{props.xxx}` |
| `etch/dynamic-image` | Image liée au média WordPress via `mediaId` |
| `etch/raw-html` | HTML brut (markup dynamique) |
| `etch/loop` | Boucle sur des données (wp-query, json) |

---

## 3. Règle etch/text

> Consulter quand : doute sur où placer le texte.

Tout texte visible → `etch/text` avec `content`. Le texte dans `innerHTML` d'un `etch/element` est IGNORÉ.

```json
{
  "blockName": "etch/element",
  "attrs": {"metadata": {"name": "Title"}, "tag": "h1", "attributes": {"class": "heading component__title"}, "styles": ["styleid1", "styleid2"]},
  "innerBlocks": [
    {"blockName": "etch/text", "attrs": {"metadata": {"name": "Text"}, "content": "Mon titre"}, "innerBlocks": [], "innerHTML": "", "innerContent": []}
  ],
  "innerHTML": "\n\n",
  "innerContent": ["\n", null, "\n"]
}
```

### Exceptions (pas de etch/text)

- Auto-fermants : `img`, `input`, `br`, `source`
- Vides décoratifs : overlays, dividers, burger lines
- `etch/svg` (contenu via `src`)
- `etch/raw-html` (contenu via `attrs.content`)
- `etch/dynamic-image` (image via `mediaId`)

---

## 4. Système de composants

> Consulter quand : création d'un composant réutilisable avec props.

### Définition dans `components`

```json
"<id>": {
  "id": <id>,
  "name": "Component Name",
  "key": "ComponentNamePascalCase",
  "description": "",
  "legacyId": "",
  "properties": [...],
  "blocks": [...]
}
```

`id` : entier > 5000 (éviter collisions avec patterns officiels). `key` : PascalCase.

### Types de propriétés

| primitive | specialized | description | default exemple |
|-----------|-------------|-------------|-----------------|
| `string` | — | Texte libre | `"Hello World"` |
| `string` | `select` | Dropdown (avec `selectOptionsString`) | `"Left"` |
| `string` | `image` | Sélecteur d'image | URL |
| `string` | `array` | Référence à un loop | Nom du loop |
| `boolean` | — | Toggle | `true` / `false` |
| `object` | — | Objet/Array JSON | `[{"key": "val"}]` |
| `array` | `class` | Classes CSS dynamiques | `["classid1"]` |

### Format d'une propriété

```json
{
  "key": "propKey",
  "name": "Prop Display Name",
  "keyTouched": false,
  "type": {"primitive": "string", "specialized": "select"},
  "default": "Left",
  "selectOptionsString": "Left\nCenter\nTwo Column"
}
```

Select avec valeur distincte du label : `"1/2 : 2\n1/3 : 3\n1/4 : 4"`

### Utilisation d'un composant enfant

```json
{
  "blockName": "etch/component",
  "attrs": {"ref": 1455, "attributes": {"layout": "center", "name": "John Doe"}},
  "innerBlocks": [],
  "innerHTML": "\n\n",
  "innerContent": ["\n", "\n"]
}
```

Avec slots :

```json
{
  "blockName": "etch/component",
  "attrs": {"ref": 3312, "attributes": {}},
  "innerBlocks": [
    {
      "blockName": "etch/slot-content",
      "attrs": {"name": "items"},
      "innerBlocks": [
        {"blockName": "etch/component", "attrs": {"ref": 3328, "attributes": {"label": "Item 1"}}, "innerBlocks": [], "innerHTML": "\n\n", "innerContent": ["\n", "\n"]},
        {"blockName": "etch/component", "attrs": {"ref": 3328, "attributes": {"label": "Item 2"}}, "innerBlocks": [], "innerHTML": "\n\n", "innerContent": ["\n", "\n"]}
      ],
      "innerHTML": "\n\n\n\n",
      "innerContent": ["\n", null, "\n\n", null, "\n"]
    }
  ],
  "innerHTML": "\n\n",
  "innerContent": ["\n", null, "\n"]
}
```

### Référence aux props

Syntaxe : `{props.propKey}`

Utilisable dans : `attrs.attributes` (class, href, src, alt, style, data-*, aria-*), `etch/text` content, `etch/raw-html` content, `etch/condition` conditionString, inline CSS variables.

### Méthodes sur les valeurs

`.toLowercase()`, `.truncateWords(N)`, `.includes('.')`, `.endsWith('.0')`, `.format('Y')` / `.dateFormat('Y')`

---

## 5. Conditions

> Consulter quand : affichage conditionnel d'un élément.

### Structure de base

```json
{
  "blockName": "etch/condition",
  "attrs": {
    "metadata": {"name": "Show Lede"},
    "condition": {"leftHand": "props.showLede", "operator": "isTruthy", "rightHand": null},
    "conditionString": "props.showLede"
  },
  "innerBlocks": [...],
  "innerHTML": "\n\n",
  "innerContent": ["\n", null, "\n"]
}
```

### Opérateurs

`isTruthy`, `isFalsy`, `>=`, `!==`, `||`, `&&`

### Condition composée (OR)

```json
{
  "condition": {
    "leftHand": {"leftHand": "props.showName", "operator": "isTruthy", "rightHand": null},
    "operator": "||",
    "rightHand": {"leftHand": "props.showCitation", "operator": "isTruthy", "rightHand": null}
  },
  "conditionString": "props.showName || props.showCitation"
}
```

### Négation

```json
{
  "condition": {"leftHand": "props.minimalist", "operator": "isFalsy", "rightHand": null},
  "conditionString": "!props.minimalist"
}
```

---

## 6. Slots

> Consulter quand : composant avec contenu injectable.

### Définition (dans le composant)

```json
{"blockName": "etch/slot-placeholder", "attrs": {"name": "features"}, "innerBlocks": [], "innerHTML": "\n\n", "innerContent": ["\n", "\n"]}
```

### Injection (à l'utilisation)

```json
{
  "blockName": "etch/slot-content",
  "attrs": {"name": "features"},
  "innerBlocks": [...children...],
  "innerHTML": "...",
  "innerContent": [...]
}
```

Un slot peut être dupliqué (ex: Logo Carousel qui duplique le contenu).

---

## 7. Loops

> Consulter quand : boucle sur des données (articles, items JSON).

### Définition au niveau racine

```json
"loops": {
  "k7mrbkq": {
    "name": "Posts",
    "key": "posts",
    "global": true,
    "config": {
      "type": "wp-query",
      "args": {"post_type": "post", "posts_per_page": "$count ?? -1", "orderby": "date", "order": "DESC", "post_status": "publish"}
    }
  }
}
```

Types : `wp-query`, `json`

### Utilisation

```json
{"blockName": "etch/loop", "attrs": {"metadata": {"name": "Loop"}, "loopId": "k7mrbkq", "itemId": "item"}, "innerBlocks": [...], "innerHTML": "\n\n", "innerContent": ["\n", null, "\n"]}
```

Pour boucler sur un prop array : `"target": "props.loopName"` au lieu de `"loopId"`.

---

## 8. SVG, Dynamic Element, Dynamic Image

> Consulter quand : SVG inline, tag dynamique, ou image WordPress.

### etch/svg

```json
{"blockName": "etch/svg", "attrs": {"metadata": {"name": "Icon"}, "tag": "svg", "attributes": {"class": "icon component__icon", "src": "data:image/svg+xml,...", "stripColors": "true"}, "styles": ["styleid"]}, "innerBlocks": [], "innerHTML": "\n\n", "innerContent": ["\n", "\n"]}
```

`stripColors: "true"` : le SVG hérite de `currentColor`.

### etch/dynamic-element

```json
{"blockName": "etch/dynamic-element", "attrs": {"metadata": {"name": "Heading"}, "tag": "{props.headingLevel}", "attributes": {"class": "heading section-intro__heading", "tag": "{props.headingLevel}"}, "styles": ["styleid"]}, "innerBlocks": [...], "innerHTML": "\n\n", "innerContent": ["\n", null, "\n"]}
```

Le champ `"tag"` apparait dans `attrs` ET dans `attrs.attributes`.

### etch/dynamic-image

```json
{"blockName": "etch/dynamic-image", "attrs": {"metadata": {"name": "Image"}, "tag": "img", "attributes": {"class": "component__image", "mediaId": "34"}, "styles": ["styleid"]}, "innerBlocks": [], "innerHTML": "\n\n", "innerContent": ["\n", "\n"]}
```

---

## 9. JavaScript

> Consulter quand : composant interactif nécessitant du JS.

Script encodé en base64 dans `attrs.script.code`, avec `id` de 7 caractères aléatoires. Placer sur le bloc racine du composant.

```json
"script": {"code": "BASE64_ENCODED_JS", "id": "pqu932x"}
```

### Pattern IIFE

```javascript
(function() {
  function init() {
    const el = document.querySelector('.component-name');
    if (!el || el.dataset.init) return;
    el.dataset.init = '1';
    // Code
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
})();
```

---

## 10. Animations (Reveal)

> Consulter quand : animations d'entrée au scroll.

### Architecture

```
etch/component (Reveal)
  etch/element <div> .reveal (props: effect, direction, duration, delay, easing, threshold, once)
    etch/slot-placeholder "content"
```

### Classes d'état CSS

- `.reveal--hidden` : invisible (état initial)
- `.reveal--ready` : `will-change` activé
- `.reveal--visible` : transition en cours
- `.reveal--done` : animation terminée, GPU libéré
- `.reveal--leaving` : sortie (si `once: false`)

### Effets

| Effet | Description |
|-------|-------------|
| `clip` | Révélation par découpe (clip-path progressif) |
| `slide` | Glissement (translateX/translateY) |
| `fade` | Opacité 0→1, direction ignorée |
| `scale` | Zoom entrant (scale 1.12→1 + opacité) |
| `blur` | Flou progressif (blur 16px→0 + opacité) |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `effect` | string/select | `clip` | clip, slide, fade, scale, blur |
| `direction` | string/select | `up` | up, down, left, right |
| `duration` | string | `900` | ms |
| `delay` | string | `0` | ms |
| `easing` | string | `cubic-bezier(0.22, 1, 0.36, 1)` | Courbe |
| `threshold` | string | `0.2` | Seuil IntersectionObserver (0-1) |
| `once` | boolean | `true` | true = une fois, false = reverse |

### Utilisation

```
grid feature-section__grid
  etch/component ref=Reveal (effect="slide", direction="up", delay="0")
    slot-content → etch/component ref=FeatureCard (card 1)
  etch/component ref=Reveal (effect="slide", direction="up", delay="100")
    slot-content → etch/component ref=FeatureCard (card 2)
```

Le stagger est obtenu en variant `delay` entre les instances (ex: 0, 100, 200).

---

## 11. Swiper Sliders

> Consulter quand : slider/carousel demandé.

### 3 couches

1. **Dépendances** (côté thème WordPress, pas dans Etch) : `swiper-bundle.min.css` + `swiper-bundle.min.js` (CDN Swiper v12). Si effet custom : `effect-xxx.min.css` + `effect-xxx.min.js`.

2. **Structure HTML** (composant Etch) :

Pattern A (effets natifs : slide, coverflow, cards, creative) :
```
.swiper > .swiper-wrapper > .swiper-slide > contenu
  + .swiper-pagination (opt) + .swiper-button-prev/next (opt)
```

Pattern B (effets custom : expo, super-flow, material) :
```
.swiper > .swiper-wrapper > .swiper-slide > .effet-container > contenu
```

3. **Script d'init** (base64 dans `attrs.script`) : `new Swiper(el, { effect, slidesPerView, spaceBetween, speed, ... })`

### Props recommandées

| Prop | Type | Description |
|------|------|-------------|
| `sliderId` | string | ID unique pour sélecteur JS |
| `slidesPerView` | string | Slides visibles |
| `spaceBetween` | string | Espacement px |
| `speed` | string | Vitesse transition ms |
| `loop` | boolean | Boucle infinie |
| `autoplay` | boolean | Défilement auto |
| `showPagination` | boolean | Pagination |
| `showNavigation` | boolean | Flèches prev/next |

### Workflow

1. Lire le fichier source ou l'exemple dans `docs/patterns/sliders/`
2. Identifier l'effet et la structure HTML des slides
3. Construire le composant Etch, encoder le script en base64
4. Livrer : arbre + JSON + JS décodé + liste des snippets thème

---

## 12. innerHTML / innerContent

> Consulter quand : doute sur les valeurs innerHTML/innerContent.

| innerBlocks | innerHTML | innerContent |
|-------------|-----------|--------------|
| 0 (element vide) | `"\n\n"` | `["\n", "\n"]` |
| 0 (etch/text) | `""` | `[]` |
| 1 enfant | `"\n\n"` | `["\n", null, "\n"]` |
| 2 enfants | `"\n\n\n\n"` | `["\n", null, "\n\n", null, "\n"]` |
| 3 enfants | `"\n\n\n\n\n\n"` | `["\n", null, "\n\n", null, "\n\n", null, "\n"]` |
| N enfants | `"\n"` + `"\n\n"` x (N-1) + `"\n"` | `["\n", null, ("\n\n", null) x (N-1), "\n"]` |

Chaque `null` correspond à la position d'un innerBlock.

---

## 13. Dynamic Data Keys

> Consulter quand : données dynamiques WordPress dans un loop ou template.

Syntaxe : `{context.key}`

| Contexte | Keys courantes |
|----------|---------------|
| `item.*` | `title`, `content`, `excerpt`, `permalink.relative`, `featuredImage.url`, `featuredImage.alt`, `date`, `author.displayName`, `readingTime` |
| `site.*` | `name`, `home_url` |
| `user.*` | `displayName`, `loggedIn` |
| `url.*` | Paramètres URL |
| `options.*` | Options globales WordPress |

Loop helpers : `{@index}`, `{@first}`, `{@last}`

Custom fields : `{item.acf.field}`, `{item.meta.field}`, `{this.acf.field}`, `{options.acf.field}`

---

## 14. Patterns CSS récurrents

> Consulter quand : besoin d'un pattern CSS courant.

### Content Grid (full-bleed)

Permet des éléments full-width dans une section contrainte. Voir les patterns Hero Fizzy, Hero Zelda pour le CSS complet.

### Auto Grid

```css
--min: to-rem(350px);
display: grid !important;
grid-template-columns: repeat(auto-fit, minmax(min(var(--min), 100%), 1fr));
gap: var(--grid-gap, 1em);
```

### Concentric Radius

```css
--padding: var(--space-l, 1.5em);
--inner-radius: var(--radius, 1em);
padding: var(--padding);
border-radius: calc(var(--inner-radius) + var(--padding));
> * { border-radius: var(--inner-radius); }
```

### Fade (mask-image)

```css
--fade-amount: 25%;
mask-image: linear-gradient(to top, transparent 0%, black var(--fade-amount));
```

### Background element

```css
:has(> &) { position: relative; isolation: isolate; }
position: absolute; inset: 0; z-index: -2; pointer-events: none;
```

### Clickable parent

```css
position: relative;
a::after { content: ''; position: absolute; inset: 0; z-index: 10; }
```

---

## 15. Checklist JSON

> Vérifier AVANT chaque export.

- [ ] Tout texte visible dans `etch/text` avec `content` (jamais dans `innerHTML`)
- [ ] `innerHTML`/`innerContent` cohérents avec le nombre d'innerBlocks
- [ ] IDs de styles : 7 caractères alphanumériques, uniques par JSON
- [ ] Styles natifs Etch inclus quand `data-etch-element` est utilisé
- [ ] `s4gkacs` (body figure margin:0) inclus si `<figure>` présent
- [ ] `etch/text` : `innerBlocks: [], innerHTML: "", innerContent: []`
- [ ] Double classe sur chaque élément enfant (voir CLAUDE.md)
- [ ] Boutons : `button` + ACSS variante + BEM (voir CLAUDE.md)
- [ ] Styles globaux = CSS identique à `global-styles.json`, styles BEM vides par défaut
- [ ] Props typées avec defaults utiles
- [ ] `conditionString` correspond à la structure `condition`
- [ ] Composants enfants dans `components` avec `ref` correct
- [ ] Éléments optionnels wrappés dans `etch/condition` + prop `showXxx`
- [ ] Sections = `etch/element`, réutilisables = `etch/component`
- [ ] Composants cross-pages : même id, name, key, properties partout
- [ ] JSON autonome : contient tous ses styles (globaux inclus, identiques à `global-styles.json`)
- [ ] JSON valide et minifié sur une seule ligne

---

## 16. Mode site complet

> Consulter quand : production multi-sections ou multi-pages.

### Détection des composants réutilisables

Analyser l'ensemble du contenu pour identifier :
1. **Même structure, contenus différents** entre pages → composant avec props
2. **Éléments répétés** (cards, intros, témoignages) → composant unique instancié
3. **Variations masquables** → un composant + `showXxx` booléens

### Cohérence inter-JSON

- Classes globales : CSS strictement identique (copié de `global-styles.json`) dans chaque JSON
- Composants réutilisables : définition identique dans chaque JSON qui les référence
- BEM : kebab-case partout, pas de mélange camelCase/snake_case
- Hiérarchie titres : un seul `h1` par page, `h2` pour sections, `h3` pour sous-sections
- Variables ACSS : mêmes variables pour mêmes usages partout
- IDs composants : uniques sur l'ensemble du site
- IDs styles : uniques par JSON (peuvent varier entre JSON pour mêmes classes globales)

---

## 17. Exemple condensé : Composant avec props et condition

```
TestimonialCard (component, id: 5001)
  card testimonial-card__wrapper (blockquote)
    blockquote-text testimonial-card__quote → "{props.quote}"
    card-footer testimonial-card__footer (footer)
      [condition: props.showAvatar]
        avatar testimonial-card__avatar (img, src="{props.avatarUrl}")
      label testimonial-card__name → "{props.name}"
      citation testimonial-card__role → "{props.role}"
```

Points clés :
- `gutenbergBlock.blockName` = `etch/component` avec `ref: 5001`
- Définition dans `components.5001` avec `properties` et `blocks`
- Textes via `{props.xxx}`
- `etch/condition` wrap l'avatar avec `conditionString: "props.showAvatar"`
- Styles BEM avec overrides uniquement si nécessaire (ex: `.testimonial-card__avatar` → `width/height: 3rem`)
