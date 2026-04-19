# Etch WP Component Builder — Architecture Hybride

## 1. REGLES NON-NEGOCIABLES

**R1. DOUBLE CLASSE sur chaque element enfant : globale + BEM**
```
FAUX :  "heading"  |  "about__heading"
JUSTE : "heading about__heading"
```
La globale porte le style de base (via `global-styles.json`). La BEM est un hook pour overrides.

**R2. CTA : LINK vs BUTTON**
- Link : `"link section__cta"`
- Button : `"button btn--primary section__cta"` (globale + ACSS variante + BEM)
- Toujours dans un wrapper : `"cta-group section__cta-group"`
```html
<div class="cta-group section__cta-group">
  <a class="button btn--primary section__cta">Action</a>
  <a class="link section__cta-secondary">En savoir plus</a>
</div>
```

**R3. Texte TOUJOURS dans etch/text avec content**
Jamais dans `innerHTML` d'un `etch/element`.

**R4. Paragraphes : `text` par defaut, `lede` uniquement sur demande explicite**
`lede` reserve aux intros de hero / accroches. Doute = `text`.

---

## 2. ARCHITECTURE CSS HYBRIDE

### Principe
- **Classes globales** : portent le CSS atomique (typographie, reset) via `global-styles.json`
- **UN style BEM parent** par section : contient TOUT le layout + overrides en nesting `&__element`
- **Container queries** par defaut, `@media` uniquement pour le global

### Structure CSS d'une section
```css
/* Style BEM parent unique — contient tout le layout + overrides */
.pricing-table {
  :has(> &) {
    container-type: inline-size;
  }
  padding-block: var(--section-space-l);

  &__container {
    max-width: var(--content-width);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  &__heading {
    font-size: var(--h1);
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--grid-gap);
  }

  &__card {
    padding: var(--space-l);
    border: 1px solid var(--border);
    border-radius: var(--radius-m);
  }

  &__card--featured {
    border-color: var(--primary);
    box-shadow: 0 4px 24px color-mix(in oklch, var(--primary) 15%, transparent);
  }

  &__cta-group {
    margin-block-start: auto;
  }

  @container (width >= 600px) {
    &__grid { grid-template-columns: repeat(2, 1fr); }
  }
  @container (width >= 900px) {
    &__grid { grid-template-columns: repeat(3, 1fr); }
  }
}
```

### Regles CSS
- `:has(> &) { container-type: inline-size; }` sur le bloc parent pour activer les container queries
- `&__element` et `&--modifier` pour tout le nesting (BEM plat, jamais `&__parent__child`)
- `@container (width >= Xpx)` en fin de bloc parent (mobile-first)
- `@media` uniquement pour viewport global (nav mobile, prefers-reduced-motion, print)
- Les globales (heading, text, etc.) gardent leur CSS intact — les overrides vont dans le style BEM parent
- Jamais de valeurs hardcodees (hex, px pour spacing) — toujours `var(--token)`. Exception : layout (fr, aspect-ratio, z-index)
- **Toujours verifier le nom du token** dans `docs/acss-tokens.md` avant de l'utiliser. Erreurs courantes : `--border-radius` (faux) → `--radius`, `--space-xxl` (3.x) → `--space-2xl` (4.x), `--primary-trans-20` (n'existe plus) → `color-mix(in oklch, var(--primary) 20%, transparent)`

---

## 3. MODES DE SORTIE

### Mode HTML (defaut)
Genere dans `output/components/{name}/` :
- `index.html` — HTML semantique avec doubles classes
- `style.css` — styles globaux + style BEM parent
- `script.js` — JS interactif si necessaire

### Mode JSON (conversion)
```bash
node scripts/html-to-json.js output/components/{name}/
```
Convertit HTML+CSS+JS en `etch-import.json` importable dans Etch.

### Mode JSON direct
Quand l'utilisateur demande "JSON Etch" : generer directement le JSON selon la structure de `docs/instructions.md`.

---

## 4. CLASSES GLOBALES (31)

| Categorie    | Classes                                                                    |
|-------------|----------------------------------------------------------------------------|
| Typographie | `heading` `headline` `eyebrow` `lede` `text` `label` `caption` `blockquote-text` `citation` |
| Structure   | `intro` `content-wrapper` `media-wrapper` `card` `card-body` `card-header` `card-footer` `grid` `cta-group` `list` `list-item` `overlay` `divider` |
| Interactif  | `button` `link` `badge` `tag` `avatar` `icon` `nav-link` `form-field` `input` |

Chaque globale a son CSS dans `docs/global-styles.json`. Le copier tel quel, overrides dans le style BEM.

---

## 5. SYSTEME DE STYLES (mode JSON)

| Type | ID | Description |
|------|-----|-------------|
| Natif Etch | `etch-section-style` | Layout section racine (readonly) |
| Natif Etch | `etch-container-style` | Layout container (readonly) |
| Natif Etch | `etch-flex-div-style` | Layout flex div (readonly) |
| Figure reset | `s4gkacs` | `body figure { margin: 0; }` (si `<figure>`) |
| Style global | 7 chars aleatoires | CSS de `global-styles.json`, un par classe utilisee |
| Style BEM parent | 7 chars aleatoires | UN par section, tout le CSS nested |

- Format ID : **7 caracteres alphanumeriques minuscules**
- `s4gkacs` pour les `<figure>`
- Les styles globaux recopient exactement le CSS de `global-styles.json`
- Le style BEM parent contient layout + overrides + container queries

---

## 6. FICHIERS DE REFERENCE

| Priorite | Fichier | Usage |
|----------|---------|-------|
| 1 | `docs/global-styles.json` | CSS de chaque classe globale — copier tel quel |
| 1 | `docs/acss-tokens.md` | **Tous** les tokens ACSS 4.x (couleurs, spacing, typo, borders) — consulter AVANT de choisir un token |
| 1 | `docs/acss-classes.md` | **Toutes** les utility classes ACSS 4.x (btn, grid, padding, etc.) |
| 1 | `docs/section-patterns.md` | 7 templates HTML structurels (hero, features, testimonials, pricing, CTA, footer, header) |
| 1 | `docs/grid-system.md` | Systeme de grille ACSS 12 colonnes, ratios, responsive, cell control |
| 2 | `docs/instructions.md` | Reference avancee : composants, props, conditions, slots, loops, animations, sliders |
| 2 | `docs/patterns/INDEX.md` | 51 patterns officiels Etch (JSON) |
| 3 | `docs/automaticcss-docs.md` | Doc ACSS complete — fallback uniquement si token/classe introuvable dans les fichiers priorite 1 |
| 3 | `docs/etchwp-docs.md` | Doc Etch complete — fallback pour WP_Query, dynamic data, script lifecycle avances |

---

## 7. COMMANDES

```bash
# Validation
node scripts/validate.js output/mon-composant.json       # JSON
node scripts/validate.js output/                          # tout un dossier
node scripts/validate.js output/components/{name}/ --html # HTML

# Conversion HTML → JSON
node scripts/html-to-json.js output/components/{name}/
node scripts/html-to-json.js output/components/{name}/ --minified

# Registre de composants
node scripts/registry.js init                             # initialiser
node scripts/registry.js add output/components/{name}/    # enregistrer
node scripts/registry.js list                             # lister tout
node scripts/registry.js list --type=hero --tag=pricing   # filtrer
node scripts/registry.js search "pricing"                 # chercher
node scripts/registry.js info {name}                      # details
node scripts/registry.js stats                            # statistiques

# Split patterns
node scripts/split-patterns.js docs/etch-patterns-data.md
```

---

## 8. WORKFLOWS

### Composant unique
1. Consulter `docs/section-patterns.md` (template HTML) + `docs/patterns/INDEX.md` (pattern JSON le plus proche)
2. Consulter `docs/acss-tokens.md` pour les variables CSS a utiliser
3. Ecrire HTML + CSS (+ JS) dans `output/components/{name}/`
4. Appliquer R1-R4 sur chaque element
5. Valider : `node scripts/validate.js output/components/{name}/ --html`
6. Corriger en AJOUTANT (jamais supprimer)
7. Enregistrer : `node scripts/registry.js add output/components/{name}/`
8. Si JSON demande : `node scripts/html-to-json.js output/components/{name}/`

### Site complet
1. `node scripts/registry.js init` (si premier usage)
2. Lire `docs/instructions.md` (section 16: Mode site complet)
3. Plan de structure : pages, sections, composants reutilisables → validation utilisateur
4. Consulter le registre : `node scripts/registry.js list` pour reutiliser les composants existants
5. Produire les composants reutilisables dans `output/components/`
6. Enregistrer chaque composant : `node scripts/registry.js add output/components/{name}/`
7. Produire les sections par page dans `output/pages/<page>/`
8. Valider : `node scripts/validate.js output/`
9. Convertir si demande : `node scripts/html-to-json.js output/components/{name}/`
10. Livrer + `node scripts/registry.js stats` pour resume

### Arborescence de sortie
```
output/
  components/{name}/
    index.html
    style.css
    script.js
    etch-import.json    ← genere par html-to-json.js
  pages/
    home/
    about/
```
