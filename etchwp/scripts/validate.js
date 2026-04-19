#!/usr/bin/env node

/**
 * Etch WP JSON & HTML Validator
 *
 * Validates Etch JSON files and HTML component output against project rules.
 *
 * Usage:
 *   node scripts/validate.js output/mon-composant.json           # Single JSON file
 *   node scripts/validate.js output/                              # All JSON in folder (recursive)
 *   node scripts/validate.js output/components/pricing-table/ --html  # HTML validation mode
 */

const fs = require('fs');
const path = require('path');

// ─── Configuration ───

const GLOBAL_STYLES_PATH = path.join(__dirname, '..', 'docs', 'global-styles.json');

const GLOBAL_CLASSES = [
  'heading', 'headline', 'eyebrow', 'lede', 'text', 'label', 'caption',
  'blockquote-text', 'citation', 'intro', 'content-wrapper', 'media-wrapper',
  'card', 'card-body', 'card-header', 'card-footer', 'grid', 'cta-group',
  'list', 'list-item', 'overlay', 'divider', 'button', 'link', 'badge', 'tag',
  'avatar', 'icon', 'nav-link', 'form-field', 'input'
];

const ACSS_BTN_CLASSES = ['btn--primary', 'btn--secondary', 'btn--outline', 'btn--text'];
const ACSS_TYPO_CLASSES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'smart-spacing', 'accent-heading'];
const SELF_CLOSING_TAGS = ['img', 'input', 'br', 'source', 'hr'];

const ETCH_NATIVE_STYLES = ['etch-section-style', 'etch-container-style', 'etch-flex-div-style'];
const TEXT_FREE_BLOCKS = ['etch/svg', 'etch/raw-html', 'etch/dynamic-image', 'etch/condition', 'etch/loop', 'etch/slot-placeholder', 'etch/slot-content', 'etch/component'];

// Valid root HTML elements for HTML validation mode
const VALID_ROOT_ELEMENTS = ['section', 'header', 'footer', 'nav', 'article'];

// CSS properties where raw color-like values are acceptable (layout values)
const LAYOUT_CSS_PROPERTIES = ['grid-template-columns', 'grid-template-rows', 'grid-template-areas', 'grid-area', 'grid-column', 'grid-row'];

// ─── Helpers ───

function loadGlobalStyles() {
  try {
    return JSON.parse(fs.readFileSync(GLOBAL_STYLES_PATH, 'utf8'));
  } catch (e) {
    console.warn('⚠ Cannot load global-styles.json, skipping global CSS checks');
    return null;
  }
}

function getAllJsonFiles(target) {
  const stat = fs.statSync(target);
  if (stat.isFile() && target.endsWith('.json')) return [target];
  if (stat.isDirectory()) {
    const files = [];
    function walk(dir) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name.endsWith('.json') && !entry.name.startsWith('.')) files.push(full);
      }
    }
    walk(target);
    return files;
  }
  return [];
}

/**
 * Check if a BEM class uses flat naming (no nested __parent__child).
 * Valid: section__heading, section__cta-group
 * Invalid: section__content__heading (double __ separator)
 */
function hasFlatBEM(bemClass) {
  const parts = bemClass.split('__');
  // A valid flat BEM element class has exactly 2 parts: block__element
  // More than 2 parts means nested naming like block__parent__child
  return parts.length <= 2;
}

/**
 * Extract the BEM block prefix from a BEM class.
 * e.g., "pricing__heading" -> "pricing"
 */
function getBEMBlock(bemClass) {
  const idx = bemClass.indexOf('__');
  return idx > -1 ? bemClass.substring(0, idx) : null;
}

// ─── Single JSON file validation ───

function validateFile(filePath, globalStyles) {
  const errors = [];
  const warnings = [];
  let data;

  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(raw);
  } catch (e) {
    return { errors: [`JSON invalide: ${e.message}`], warnings: [] };
  }

  // Rule 1: Top-level structure
  if (data.type !== 'block') errors.push('Champ "type" manquant ou != "block"');
  if (!data.gutenbergBlock) errors.push('Champ "gutenbergBlock" manquant');
  if (!data.version) warnings.push('Champ "version" manquant');
  if (!data.styles || typeof data.styles !== 'object') errors.push('Objet "styles" manquant');

  const styles = data.styles || {};
  const styleIds = new Set(Object.keys(styles));
  const referencedStyleIds = new Set();
  const classesFound = [];
  const componentIds = new Set(Object.keys(data.components || {}));

  // Track BEM blocks and child elements per section for rules 14 & 15
  const sectionBEMData = []; // { path, name, bemBlocks: Set, hasChildren: bool, hasParentBEMStyle: bool }

  // Recursive block validation
  function validateBlock(block, blockPath, sectionContext) {
    if (!block || typeof block !== 'object') return;

    const bn = block.blockName;
    const attrs = block.attrs || {};
    const innerBlocks = block.innerBlocks || [];
    const name = attrs.metadata?.name;

    // Rule 1b: metadata.name
    if (!name && bn) {
      warnings.push(`${blockPath}: metadata.name manquant`);
    }

    // Rule 2: etch/text rule — text must be in etch/text, not innerHTML
    if (bn === 'etch/element') {
      const tag = attrs.tag;
      const hasTextChild = innerBlocks.some(b => b.blockName === 'etch/text');
      const hasChildBlocks = innerBlocks.length > 0;
      const isSelfClosing = SELF_CLOSING_TAGS.includes(tag);
      const isDecorative = (attrs.attributes?.class || '').match(/overlay|divider/);

      if (!isSelfClosing && !isDecorative && !hasChildBlocks) {
        warnings.push(`${blockPath} (${name || tag}): élément vide sans etch/text ni enfants`);
      }

      // Check for text in innerHTML that should be in etch/text
      if (block.innerHTML && block.innerHTML.replace(/\n/g, '').trim() !== '' && !hasTextChild) {
        errors.push(`${blockPath} (${name || tag}): texte trouvé dans innerHTML au lieu de etch/text`);
      }
    }

    // Rule 3: etch/text structure (innerBlocks empty, innerHTML empty, innerContent empty)
    if (bn === 'etch/text') {
      if (!attrs.content && attrs.content !== '') {
        errors.push(`${blockPath} (${name || 'Text'}): etch/text sans content`);
      }
      if (innerBlocks.length > 0) {
        errors.push(`${blockPath}: etch/text ne doit pas avoir d'innerBlocks`);
      }
      if (block.innerHTML !== '') {
        errors.push(`${blockPath}: etch/text.innerHTML doit être ""`);
      }
      if (block.innerContent && block.innerContent.length > 0) {
        errors.push(`${blockPath}: etch/text.innerContent doit être []`);
      }
    }

    // Rule 4: innerContent coherence (null count = innerBlocks count)
    if (bn && bn !== 'etch/text') {
      const nullCount = (block.innerContent || []).filter(x => x === null).length;
      if (nullCount !== innerBlocks.length) {
        errors.push(`${blockPath} (${name || bn}): innerContent a ${nullCount} null mais innerBlocks a ${innerBlocks.length} enfants`);
      }
    }

    // Rule 5: Style references check
    const blockStyles = attrs.styles || [];
    for (const sid of blockStyles) {
      referencedStyleIds.add(sid);
      if (!styleIds.has(sid) && !ETCH_NATIVE_STYLES.includes(sid)) {
        errors.push(`${blockPath} (${name || bn}): style "${sid}" référencé mais absent de l'objet styles`);
      }
    }

    // Rule 6 (modified): Classes validation — global + BEM + flat BEM naming
    const cls = attrs.attributes?.class || '';
    if (cls && bn === 'etch/element') {
      classesFound.push({ path: blockPath, name, classes: cls });

      const parts = cls.split(/\s+/);
      const hasGlobal = parts.some(p => GLOBAL_CLASSES.includes(p));
      const bemParts = parts.filter(p => p.includes('__'));
      const hasBEM = bemParts.length > 0;
      const hasACSSBtn = parts.some(p => ACSS_BTN_CLASSES.includes(p));
      const hasACSSTypo = parts.some(p => ACSS_TYPO_CLASSES.includes(p));
      const isSection = attrs.attributes?.['data-etch-element'] === 'section';
      const isContainer = attrs.attributes?.['data-etch-element'] === 'container';
      const isFlexDiv = attrs.attributes?.['data-etch-element'] === 'flex-div';
      const isRootElement = isSection || isContainer || isFlexDiv;

      // Root elements (section, container, flex-div) only need BEM block class
      if (!isRootElement && !hasACSSBtn) {
        if (!hasGlobal && !hasACSSTypo) {
          warnings.push(`${blockPath} (${name || cls}): pas de classe globale détectée`);
        }
        if (!hasBEM) {
          warnings.push(`${blockPath} (${name || cls}): pas de classe BEM détectée`);
        }
      }

      // CTA button check: must have global "button" + ACSS variant + BEM
      if (hasACSSBtn) {
        if (!parts.includes('button')) {
          errors.push(`${blockPath} (${name || cls}): bouton ACSS sans classe globale "button" (attendu: "button btn--xxx section__cta")`);
        }
        if (!hasBEM) {
          warnings.push(`${blockPath} (${name || cls}): bouton sans classe BEM`);
        }
      }

      // NEW: Check that BEM classes follow flat naming (no __parent__child)
      for (const bCls of bemParts) {
        if (!hasFlatBEM(bCls)) {
          errors.push(`${blockPath} (${name || cls}): classe BEM "${bCls}" utilise un nommage imbriqué (attendu: nommage plat, ex. "block__element" pas "block__parent__child")`);
        }
      }

      // Track BEM blocks in section context for rules 14 & 15
      if (sectionContext && !isRootElement) {
        for (const bCls of bemParts) {
          const block = getBEMBlock(bCls);
          if (block) sectionContext.bemBlocks.add(block);
        }
        sectionContext.hasChildren = true;
      }
    }

    // Rule 7: etch/component ref check
    if (bn === 'etch/component') {
      const ref = attrs.ref;
      if (ref && !componentIds.has(String(ref))) {
        errors.push(`${blockPath}: etch/component ref=${ref} mais composant non défini dans components`);
      }
    }

    // Rule 8: etch/condition check (condition + conditionString)
    if (bn === 'etch/condition') {
      if (!attrs.condition) errors.push(`${blockPath}: etch/condition sans objet condition`);
      if (!attrs.conditionString) errors.push(`${blockPath}: etch/condition sans conditionString`);
    }

    // Detect section-level blocks and create section context for child traversal
    const isSection = attrs.attributes?.['data-etch-element'] === 'section';
    let childSectionContext = sectionContext;
    if (isSection) {
      childSectionContext = { path: blockPath, name: name || cls, bemBlocks: new Set(), hasChildren: false, hasParentBEMStyle: false };
      sectionBEMData.push(childSectionContext);
    }

    // Recurse into children
    for (let i = 0; i < innerBlocks.length; i++) {
      validateBlock(innerBlocks[i], `${blockPath}[${i}]`, childSectionContext);
    }
  }

  // Validate gutenbergBlock
  if (data.gutenbergBlock) {
    validateBlock(data.gutenbergBlock, 'root', null);
  }

  // Validate component blocks
  for (const [cid, comp] of Object.entries(data.components || {})) {
    if (!comp.name) warnings.push(`Component ${cid}: name manquant`);
    if (!comp.key) warnings.push(`Component ${cid}: key manquant`);
    if (!comp.blocks || comp.blocks.length === 0) errors.push(`Component ${cid}: blocks vide`);
    for (let i = 0; i < (comp.blocks || []).length; i++) {
      validateBlock(comp.blocks[i], `components.${cid}.blocks[${i}]`, null);
    }

    // Validate properties
    for (const prop of (comp.properties || [])) {
      if (!prop.key) errors.push(`Component ${cid}: propriété sans key`);
      if (!prop.name) warnings.push(`Component ${cid}: propriété "${prop.key}" sans name`);
      if (!prop.type) errors.push(`Component ${cid}: propriété "${prop.key}" sans type`);
      if (prop.default === undefined) warnings.push(`Component ${cid}: propriété "${prop.key}" sans default`);
    }
  }

  // Rule 9: Style ID format (7 alphanumeric lowercase)
  for (const sid of styleIds) {
    if (!ETCH_NATIVE_STYLES.includes(sid) && sid !== 's4gkacs') {
      if (!/^[a-z0-9]{7}$/.test(sid)) {
        warnings.push(`Style "${sid}": ID non conforme (attendu: 7 caractères alphanumériques minuscules)`);
      }
    }
  }

  // Rule 10: Unreferenced styles warning
  for (const sid of styleIds) {
    if (!referencedStyleIds.has(sid) && sid !== 's4gkacs') {
      warnings.push(`Style "${sid}" défini mais jamais référencé dans un bloc`);
    }
  }

  // Rule 12 (modified): Global styles CSS consistency + orphan BEM style detection
  if (globalStyles) {
    for (const [sid, sdata] of Object.entries(styles)) {
      if (sdata.type === 'class' && !sdata.readonly) {
        const selector = sdata.selector;
        const className = selector?.replace(/^\./, '');

        // Check global class CSS matches global-styles.json
        if (GLOBAL_CLASSES.includes(className)) {
          const expected = globalStyles[className];
          if (expected && expected.css !== sdata.css) {
            errors.push(`Style "${sid}" (${selector}): CSS différent de global-styles.json. Attendu:\n  "${expected.css}"\n  Trouvé:\n  "${sdata.css}"`);
          }
        }
      }
    }
  }

  // Rule 13 (modified): Orphan BEM style detection
  // Warn if a BEM element style (e.g., .section__heading) exists as a separate style with CSS content,
  // suggesting it should be moved into the parent BEM nested style
  for (const [sid, sdata] of Object.entries(styles)) {
    if (sdata.type === 'class') {
      const selector = sdata.selector?.replace(/^\./, '') || '';
      // Detect BEM element selectors (has __)
      if (selector.includes('__') && sdata.css && sdata.css.trim() !== '') {
        warnings.push(`Style "${sid}" (${sdata.selector}): style BEM enfant avec du CSS propre — envisager de déplacer ce CSS dans le style BEM parent imbriqué`);
      }
    }
  }

  // Rule 14: Parent BEM style check
  // Warn if a section has child elements but no parent BEM style
  for (const sec of sectionBEMData) {
    if (sec.hasChildren) {
      // Look for a style whose selector is a BEM block (no __) that matches one of the BEM blocks used
      let foundParentStyle = false;
      for (const [sid, sdata] of Object.entries(styles)) {
        if (sdata.type === 'class') {
          const selector = sdata.selector?.replace(/^\./, '') || '';
          if (!selector.includes('__') && sec.bemBlocks.has(selector)) {
            foundParentStyle = true;
            break;
          }
        }
      }
      if (!foundParentStyle) {
        warnings.push(`${sec.path} (${sec.name}): section avec enfants mais aucun style BEM parent imbriqué détecté`);
      }
    }
  }

  // Rule 15: BEM naming consistency — all __element classes should share the same BEM block prefix
  for (const sec of sectionBEMData) {
    if (sec.bemBlocks.size > 1) {
      const blocks = [...sec.bemBlocks];
      warnings.push(`${sec.path} (${sec.name}): préfixes BEM multiples détectés: ${blocks.join(', ')} — tous les __element devraient partager le même préfixe de bloc`);
    }
  }

  return { errors, warnings };
}

// ─── Cross-file validation (site mode) ───

function validateCrossFiles(results) {
  const errors = [];
  const warnings = [];

  // Collect all global style CSS across files
  const globalCSS = {}; // className -> { css, files[] }
  const componentDefs = {}; // componentId -> { definition, files[] }

  for (const { file, data } of results) {
    if (!data) continue;

    // Check global styles consistency across files
    for (const [sid, sdata] of Object.entries(data.styles || {})) {
      if (sdata.type === 'class' && !sdata.readonly) {
        const className = sdata.selector?.replace(/^\./, '');
        if (GLOBAL_CLASSES.includes(className)) {
          if (!globalCSS[className]) {
            globalCSS[className] = { css: sdata.css, files: [file] };
          } else {
            globalCSS[className].files.push(file);
            if (globalCSS[className].css !== sdata.css) {
              errors.push(`Incohérence inter-fichiers: .${className} a un CSS différent dans:\n  ${globalCSS[className].files[0]}\n  ${file}`);
            }
          }
        }
      }
    }

    // Check component ID uniqueness across files
    for (const [cid, comp] of Object.entries(data.components || {})) {
      if (!componentDefs[cid]) {
        componentDefs[cid] = { name: comp.name, file };
      } else {
        if (componentDefs[cid].name !== comp.name) {
          errors.push(`Conflit d'ID composant ${cid}: "${componentDefs[cid].name}" dans ${componentDefs[cid].file} vs "${comp.name}" dans ${file}`);
        }
      }
    }
  }

  return { errors, warnings };
}

// ─── HTML validation mode ───

/**
 * Validate an HTML component directory.
 * Expects: index.html, style.css
 */
function validateHTMLComponent(dirPath) {
  const errors = [];
  const warnings = [];

  const indexPath = path.join(dirPath, 'index.html');
  const stylePath = path.join(dirPath, 'style.css');

  // Rule H1: index.html must exist
  if (!fs.existsSync(indexPath)) {
    errors.push('Fichier "index.html" manquant');
    return { errors, warnings };
  }

  // Rule H2: style.css must exist
  if (!fs.existsSync(stylePath)) {
    errors.push('Fichier "style.css" manquant');
  }

  const html = fs.readFileSync(indexPath, 'utf8');
  const css = fs.existsSync(stylePath) ? fs.readFileSync(stylePath, 'utf8') : null;

  // ─── HTML checks ───

  // Rule H3: Root element must be section, header, footer, nav, or article
  const rootMatch = html.match(/^\s*<([\w-]+)[\s>]/m);
  const rootTag = rootMatch ? rootMatch[1].toLowerCase() : null;
  if (!rootTag) {
    errors.push('Impossible de détecter l\'élément racine du HTML');
  } else if (!VALID_ROOT_ELEMENTS.includes(rootTag)) {
    errors.push(`Élément racine "${rootTag}" invalide (attendu: ${VALID_ROOT_ELEMENTS.join(', ')})`);
  }

  // Extract root element's class
  const rootClassMatch = html.match(/^\s*<[\w-]+[^>]*class="([^"]*)"/m);
  const rootClasses = rootClassMatch ? rootClassMatch[1].split(/\s+/) : [];
  // The BEM block is typically the first non-global class without __
  const rootBEMBlock = rootClasses.find(c => !GLOBAL_CLASSES.includes(c) && !c.includes('__'));

  // Rule H4: First child is a container div with __container class
  const containerPattern = new RegExp(`<div[^>]*class="[^"]*__container[^"]*"`, 'm');
  // More precise: look for the first child element inside the root
  const afterRoot = html.replace(/^\s*<[\w-]+[^>]*>/, '');
  const firstChildMatch = afterRoot.match(/^\s*<([\w-]+)[^>]*class="([^"]*)"/m);
  if (firstChildMatch) {
    const firstChildClasses = firstChildMatch[2];
    if (!firstChildClasses.includes('__container')) {
      warnings.push(`Le premier enfant devrait avoir une classe "__container" (trouvé: "${firstChildClasses}")`);
    }
  } else if (!containerPattern.test(html)) {
    warnings.push('Aucun conteneur avec classe "__container" détecté');
  }

  // Rule H5: All text elements have content (no empty <p> or <h2>)
  const emptyTextPattern = /<(p|h[1-6]|span|label|caption|blockquote|cite)(\s[^>]*)?>(\s*)<\/\1>/gi;
  let emptyMatch;
  while ((emptyMatch = emptyTextPattern.exec(html)) !== null) {
    errors.push(`Élément texte <${emptyMatch[1]}> vide détecté`);
  }

  // Rule H6: All images have alt, loading, decoding attributes
  const imgPattern = /<img\s[^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgPattern.exec(html)) !== null) {
    const imgTag = imgMatch[0];
    if (!/\balt\s*=/.test(imgTag)) {
      errors.push(`<img> sans attribut "alt": ${imgTag.substring(0, 80)}...`);
    }
    if (!/\bloading\s*=/.test(imgTag)) {
      warnings.push(`<img> sans attribut "loading": ${imgTag.substring(0, 80)}...`);
    }
    if (!/\bdecoding\s*=/.test(imgTag)) {
      warnings.push(`<img> sans attribut "decoding": ${imgTag.substring(0, 80)}...`);
    }
  }

  // Rule H7: BEM naming follows flat convention (no __parent__child)
  const classPattern = /class="([^"]*)"/gi;
  let classMatch;
  const allBEMClasses = new Set();
  while ((classMatch = classPattern.exec(html)) !== null) {
    const classes = classMatch[1].split(/\s+/);
    for (const cls of classes) {
      if (cls.includes('__')) {
        allBEMClasses.add(cls);
        if (!hasFlatBEM(cls)) {
          errors.push(`Classe BEM "${cls}" utilise un nommage imbriqué (attendu: nommage plat, ex. "block__element")`);
        }
      }
    }
  }

  // Rule H8: Double class check — child elements have global + BEM class
  // Re-scan all elements with classes (excluding root and container)
  const elementClassPattern = /<(?!\/)([\w-]+)\s[^>]*class="([^"]*)"/gi;
  let elemMatch;
  while ((elemMatch = elementClassPattern.exec(html)) !== null) {
    const tag = elemMatch[1].toLowerCase();
    const classes = elemMatch[2].split(/\s+/);
    const hasBEM = classes.some(c => c.includes('__'));
    const hasGlobal = classes.some(c => GLOBAL_CLASSES.includes(c));
    const hasACSSBtn = classes.some(c => ACSS_BTN_CLASSES.includes(c));
    const hasACSSTypo = classes.some(c => ACSS_TYPO_CLASSES.includes(c));

    // Skip root element and container
    const isRoot = VALID_ROOT_ELEMENTS.includes(tag) && rootClasses.length > 0 && classes.some(c => rootClasses.includes(c));
    const isContainer = classes.some(c => c.includes('__container'));

    if (!isRoot && !isContainer && hasBEM && !hasACSSBtn) {
      if (!hasGlobal && !hasACSSTypo) {
        warnings.push(`<${tag} class="${elemMatch[2]}">: élément enfant sans classe globale`);
      }
    }
  }

  // Rule H9: Buttons have button global + ACSS variant + BEM
  const buttonPattern = /<(button|a)\s[^>]*class="([^"]*)"/gi;
  let btnMatch;
  while ((btnMatch = buttonPattern.exec(html)) !== null) {
    const btnClasses = btnMatch[2].split(/\s+/);
    const hasACSSBtn = btnClasses.some(c => ACSS_BTN_CLASSES.includes(c));
    if (hasACSSBtn) {
      if (!btnClasses.includes('button')) {
        errors.push(`Bouton ACSS sans classe globale "button": class="${btnMatch[2]}"`);
      }
      if (!btnClasses.some(c => c.includes('__'))) {
        warnings.push(`Bouton sans classe BEM: class="${btnMatch[2]}"`);
      }
    }
  }

  // ─── CSS checks ───

  if (css) {
    // Rule H10: CSS file has a single root BEM selector matching the HTML root class
    // Look for top-level selectors (not nested)
    const topLevelSelectors = [];
    // Simple heuristic: lines starting with . that are not indented
    const cssLines = css.split('\n');
    for (const line of cssLines) {
      const selectorMatch = line.match(/^(\.[a-zA-Z][\w-]*)\s*\{/);
      if (selectorMatch) {
        topLevelSelectors.push(selectorMatch[1].replace(/^\./, ''));
      }
    }

    if (topLevelSelectors.length === 0) {
      warnings.push('Aucun sélecteur BEM racine détecté dans style.css');
    } else if (topLevelSelectors.length > 1) {
      warnings.push(`Plusieurs sélecteurs racine dans style.css: ${topLevelSelectors.map(s => '.' + s).join(', ')} — attendu: un seul sélecteur BEM racine`);
    }

    if (rootBEMBlock && topLevelSelectors.length > 0 && !topLevelSelectors.includes(rootBEMBlock)) {
      errors.push(`Sélecteur racine CSS (${topLevelSelectors.map(s => '.' + s).join(', ')}) ne correspond pas à la classe racine HTML (.${rootBEMBlock})`);
    }

    // Rule H11: Container query setup exists (:has(> &) pattern or container-type)
    const hasContainerQuery = css.includes(':has(>') || css.includes(':has( >') || css.includes('container-type');
    if (!hasContainerQuery) {
      warnings.push('Aucun container query détecté (pattern ":has(> &)" ou "container-type" attendu)');
    }

    // Rule H12: No hardcoded colors — only var(--token) allowed
    // Match hex (#xxx, #xxxxxx, #xxxxxxxx), rgb(), rgba(), hsl(), hsla()
    const colorPatterns = [
      { regex: /#(?:[0-9a-fA-F]{3,4}){1,2}\b/g, type: 'hex' },
      { regex: /\brgba?\s*\(/gi, type: 'rgb/rgba' },
      { regex: /\bhsla?\s*\(/gi, type: 'hsl/hsla' }
    ];

    // Parse CSS line by line, excluding layout property lines
    for (let i = 0; i < cssLines.length; i++) {
      const line = cssLines[i].trim();

      // Skip comments
      if (line.startsWith('//') || line.startsWith('/*')) continue;

      // Check if the line is a layout property (where raw values are acceptable)
      const isLayoutProp = LAYOUT_CSS_PROPERTIES.some(prop => line.startsWith(prop + ':') || line.startsWith(prop + ' :'));
      if (isLayoutProp) continue;

      for (const { regex, type } of colorPatterns) {
        regex.lastIndex = 0;
        const colorMatch = regex.exec(line);
        if (colorMatch) {
          errors.push(`style.css ligne ${i + 1}: couleur ${type} codée en dur détectée — utiliser var(--token) à la place: "${line.substring(0, 80)}"`);
        }
      }
    }
  }

  // Rule H15 (BEM consistency): Check all BEM element classes share the same block prefix
  const bemBlocks = new Set();
  for (const cls of allBEMClasses) {
    const block = getBEMBlock(cls);
    if (block) bemBlocks.add(block);
  }
  if (bemBlocks.size > 1) {
    warnings.push(`Préfixes BEM multiples détectés: ${[...bemBlocks].join(', ')} — tous les éléments devraient partager le même préfixe de bloc`);
  }

  return { errors, warnings };
}

// ─── Main ───

function main() {
  const args = process.argv.slice(2);
  const htmlMode = args.includes('--html');
  const target = args.find(a => !a.startsWith('--'));

  if (!target) {
    console.log('Usage:');
    console.log('  node scripts/validate.js <fichier.json | dossier/>          # JSON validation');
    console.log('  node scripts/validate.js <dossier-composant/> --html        # HTML validation');
    process.exit(1);
  }

  // ─── HTML validation mode ───
  if (htmlMode) {
    const resolved = path.resolve(target);
    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isDirectory()) {
      console.log('Erreur: --html attend un dossier de composant (contenant index.html + style.css)');
      process.exit(1);
    }

    const relPath = path.relative(process.cwd(), resolved);
    console.log(`─── Validation HTML: ${relPath} ───\n`);

    const { errors, warnings } = validateHTMLComponent(resolved);

    if (errors.length === 0 && warnings.length === 0) {
      console.log(`✅ ${relPath}: aucun problème détecté`);
    } else {
      if (errors.length > 0) {
        console.log(`❌ ${relPath} (${errors.length} erreur(s), ${warnings.length} avertissement(s))`);
        for (const e of errors) console.log(`   ERREUR: ${e}`);
      } else {
        console.log(`⚠  ${relPath} (${warnings.length} avertissement(s))`);
      }
      for (const w of warnings) console.log(`   WARN: ${w}`);
    }

    console.log('');
    console.log('─── Résumé ───');
    console.log(`Erreurs: ${errors.length}`);
    console.log(`Avertissements: ${warnings.length}`);

    process.exit(errors.length > 0 ? 1 : 0);
  }

  // ─── JSON validation mode ───
  const globalStyles = loadGlobalStyles();
  const files = getAllJsonFiles(target);

  if (files.length === 0) {
    console.log('Aucun fichier JSON trouvé.');
    process.exit(1);
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  const allResults = [];

  for (const file of files) {
    const relPath = path.relative(process.cwd(), file);
    const { errors, warnings } = validateFile(file, globalStyles);

    // Load data for cross-file validation
    let data = null;
    try { data = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {}
    allResults.push({ file: relPath, data });

    if (errors.length === 0 && warnings.length === 0) {
      console.log(`✅ ${relPath}`);
    } else {
      if (errors.length > 0) {
        console.log(`❌ ${relPath} (${errors.length} erreur(s), ${warnings.length} avertissement(s))`);
        for (const e of errors) console.log(`   ERREUR: ${e}`);
      } else {
        console.log(`⚠  ${relPath} (${warnings.length} avertissement(s))`);
      }
      for (const w of warnings) console.log(`   WARN: ${w}`);
    }
    console.log('');

    totalErrors += errors.length;
    totalWarnings += warnings.length;
  }

  // Cross-file validation if multiple files
  if (files.length > 1) {
    console.log('─── Vérification inter-fichiers ───\n');
    const cross = validateCrossFiles(allResults);
    for (const e of cross.errors) { console.log(`   ERREUR: ${e}`); totalErrors++; }
    for (const w of cross.warnings) { console.log(`   WARN: ${w}`); totalWarnings++; }
    if (cross.errors.length === 0 && cross.warnings.length === 0) {
      console.log('   ✅ Cohérence inter-fichiers OK');
    }
    console.log('');
  }

  // Summary
  console.log('─── Résumé ───');
  console.log(`Fichiers: ${files.length}`);
  console.log(`Erreurs: ${totalErrors}`);
  console.log(`Avertissements: ${totalWarnings}`);

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
