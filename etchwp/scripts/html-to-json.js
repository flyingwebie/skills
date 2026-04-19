#!/usr/bin/env node

/**
 * HTML-to-JSON Converter for Etch WP
 *
 * Converts a component folder (index.html + style.css + optional script.js)
 * into an Etch-importable JSON file (etch-import.json).
 *
 * Usage:
 *   node scripts/html-to-json.js output/components/pricing-table/
 *   node scripts/html-to-json.js output/components/pricing-table/ --minified
 *   node scripts/html-to-json.js output/components/pricing-table/ --dry-run
 */

const fs = require('fs');
const path = require('path');

// ─── Constants ───

const GLOBAL_STYLES_PATH = path.join(__dirname, '..', 'docs', 'global-styles.json');

const SELF_CLOSING_TAGS = new Set([
  'img', 'input', 'br', 'source', 'hr', 'meta', 'link', 'col', 'area', 'base', 'embed', 'wbr',
]);

const SVG_TAGS = new Set(['svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'g', 'defs', 'use', 'text', 'tspan', 'clipPath', 'mask', 'filter', 'linearGradient', 'radialGradient', 'stop', 'symbol', 'pattern', 'image', 'foreignObject']);

const ETCH_SECTION_STYLE = {
  type: 'element',
  selector: ':where([data-etch-element="section"])',
  collection: 'default',
  css: 'inline-size: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;',
  readonly: true,
};

const ETCH_CONTAINER_STYLE = {
  type: 'element',
  selector: ':where([data-etch-element="container"])',
  collection: 'default',
  css: 'inline-size: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: var(--content-width, 1366px);\n  align-self: center;\n  margin-inline: auto;',
  readonly: true,
};

const FIGURE_RESET_STYLE = {
  type: 'custom',
  selector: 'body figure',
  collection: 'default',
  css: 'margin: 0;',
  readonly: false,
};

// ─── Style ID Generator ───

const usedIds = new Set();

function generateStyleId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id;
  do {
    id = '';
    for (let i = 0; i < 7; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (usedIds.has(id));
  usedIds.add(id);
  return id;
}

// ─── Global Styles Loader ───

function loadGlobalStyles() {
  try {
    return JSON.parse(fs.readFileSync(GLOBAL_STYLES_PATH, 'utf8'));
  } catch (e) {
    console.warn('Warning: Cannot load global-styles.json, global class matching disabled.');
    return {};
  }
}

// ─── Simple HTML Parser ───

/**
 * Parses well-structured HTML into a tree of nodes.
 * Each node: { tag, attributes, children, textContent, isSelfClosing, isSvg }
 * Text nodes: { type: 'text', content: '...' }
 */
function parseHTML(html) {
  // Normalize whitespace between tags but preserve text content
  html = html.trim();

  const nodes = [];
  let pos = 0;

  function parseNodes(stopTag) {
    const result = [];
    while (pos < html.length) {
      if (html[pos] === '<') {
        // Check for closing tag
        if (html[pos + 1] === '/') {
          const closeMatch = html.substring(pos).match(/^<\/([a-zA-Z0-9-]+)\s*>/);
          if (closeMatch) {
            if (stopTag && closeMatch[1].toLowerCase() === stopTag.toLowerCase()) {
              pos += closeMatch[0].length;
              return result;
            }
            // Unexpected closing tag, skip it
            pos += closeMatch[0].length;
            continue;
          }
        }

        // Check for comment
        if (html.substring(pos, pos + 4) === '<!--') {
          const endComment = html.indexOf('-->', pos + 4);
          if (endComment !== -1) {
            pos = endComment + 3;
            continue;
          }
        }

        // Check for doctype
        if (html.substring(pos, pos + 9).toLowerCase() === '<!doctype') {
          const endDoctype = html.indexOf('>', pos);
          if (endDoctype !== -1) {
            pos = endDoctype + 1;
            continue;
          }
        }

        // Parse opening tag
        const tagMatch = html.substring(pos).match(/^<([a-zA-Z][a-zA-Z0-9-]*)/);
        if (!tagMatch) {
          // Not a valid tag, treat as text
          const nextAngle = html.indexOf('<', pos + 1);
          const text = nextAngle === -1 ? html.substring(pos) : html.substring(pos, nextAngle);
          if (text.trim()) {
            result.push({ type: 'text', content: text.trim() });
          }
          pos = nextAngle === -1 ? html.length : nextAngle;
          continue;
        }

        const tagName = tagMatch[1].toLowerCase();
        pos += tagMatch[0].length;

        // Parse attributes
        const attributes = {};
        while (pos < html.length && html[pos] !== '>' && !(html[pos] === '/' && html[pos + 1] === '>')) {
          // Skip whitespace
          while (pos < html.length && /\s/.test(html[pos])) pos++;
          if (html[pos] === '>' || (html[pos] === '/' && html[pos + 1] === '>')) break;

          // Parse attribute name
          const attrNameMatch = html.substring(pos).match(/^([a-zA-Z_:][a-zA-Z0-9_.:-]*)/);
          if (!attrNameMatch) {
            pos++;
            continue;
          }
          const attrName = attrNameMatch[1];
          pos += attrName.length;

          // Skip whitespace
          while (pos < html.length && /\s/.test(html[pos])) pos++;

          if (html[pos] === '=') {
            pos++; // skip =
            while (pos < html.length && /\s/.test(html[pos])) pos++;

            let value;
            if (html[pos] === '"' || html[pos] === "'") {
              const quote = html[pos];
              pos++;
              const start = pos;
              while (pos < html.length && html[pos] !== quote) pos++;
              value = html.substring(start, pos);
              pos++; // skip closing quote
            } else {
              // Unquoted value
              const start = pos;
              while (pos < html.length && !/[\s>]/.test(html[pos])) pos++;
              value = html.substring(start, pos);
            }
            attributes[attrName] = value;
          } else {
            // Boolean attribute
            attributes[attrName] = '';
          }
        }

        // Check for self-closing tag
        const selfClosing = html[pos] === '/' || SELF_CLOSING_TAGS.has(tagName);
        if (html[pos] === '/') {
          pos++; // skip /
        }
        if (html[pos] === '>') {
          pos++; // skip >
        }

        const node = {
          type: 'element',
          tag: tagName,
          attributes,
          children: [],
          isSelfClosing: selfClosing || SELF_CLOSING_TAGS.has(tagName),
          isSvg: tagName === 'svg',
        };

        // For SVG, capture entire content as raw string
        if (tagName === 'svg') {
          const svgStart = html.lastIndexOf('<svg', pos - 1);
          const svgEndTag = '</svg>';
          const svgEnd = html.indexOf(svgEndTag, pos);
          if (svgEnd !== -1) {
            // Capture the full SVG from the opening tag
            const fullSvg = html.substring(svgStart === -1 ? pos : svgStart, svgEnd + svgEndTag.length);
            node.rawSvg = fullSvg;
            pos = svgEnd + svgEndTag.length;
          }
          result.push(node);
          continue;
        }

        if (!node.isSelfClosing) {
          // Parse children until closing tag
          node.children = parseNodes(tagName);
        }

        result.push(node);
      } else {
        // Text content
        const nextAngle = html.indexOf('<', pos);
        const text = nextAngle === -1 ? html.substring(pos) : html.substring(pos, nextAngle);
        if (text.trim()) {
          result.push({ type: 'text', content: text.trim() });
        }
        pos = nextAngle === -1 ? html.length : nextAngle;
      }
    }
    return result;
  }

  return parseNodes(null);
}

// ─── CSS Parser ───

/**
 * Parses a CSS file that uses BEM nesting (a single parent selector with nested children).
 * Flattens the nested CSS into individual selectors for Etch compatibility.
 *
 * Returns: { parentClass, parentCss, childStyles }
 * - parentClass: the main BEM class (e.g., 'pricing-table')
 * - parentCss: CSS properties directly on the parent (not nested)
 * - childStyles: Map of full selector → CSS string
 *   e.g. { 'pricing-table__heading': 'font-size: var(--h1);\n  text-align: center;' }
 */
function parseCSS(cssContent) {
  cssContent = cssContent.trim();
  if (!cssContent) return null;

  // Find the top-level selector (e.g., .pricing-table { ... })
  const topMatch = cssContent.match(/^\s*\.([a-zA-Z][a-zA-Z0-9-]*)\s*\{/);
  if (!topMatch) {
    console.warn('Warning: Could not find a top-level BEM class in style.css');
    return null;
  }

  const parentClass = topMatch[1];

  // Extract the content inside the top-level braces (respecting nesting)
  const startBrace = cssContent.indexOf('{');
  let depth = 0;
  let endBrace = -1;
  for (let i = startBrace; i < cssContent.length; i++) {
    if (cssContent[i] === '{') depth++;
    if (cssContent[i] === '}') {
      depth--;
      if (depth === 0) {
        endBrace = i;
        break;
      }
    }
  }

  if (endBrace === -1) {
    console.warn('Warning: Unmatched braces in style.css');
    return null;
  }

  const innerCss = cssContent.substring(startBrace + 1, endBrace).trim();

  // Parse the inner CSS into: parent direct properties + child blocks
  const parentCssLines = [];
  const childStyles = {};

  // Extract nested blocks and direct properties
  let pos = 0;
  const lines = innerCss;

  while (pos < lines.length) {
    // Skip whitespace
    while (pos < lines.length && /\s/.test(lines[pos])) pos++;
    if (pos >= lines.length) break;

    // Check for nested block: &__xxx { ... } or &--xxx { ... } or @container { ... } or :has(...) { ... }
    const remaining = lines.substring(pos);

    // Match nested selectors: &__element, &--modifier, @container, :has(...)
    const nestedMatch = remaining.match(/^(&[_-][a-zA-Z0-9_-]+|@container\s*\([^)]*\)|:has\([^)]*\))\s*\{/);

    if (nestedMatch) {
      const selectorPart = nestedMatch[1].trim();
      pos += nestedMatch[0].length;

      // Extract the block content (respecting nested braces)
      let blockDepth = 1;
      const blockStart = pos;
      while (pos < lines.length && blockDepth > 0) {
        if (lines[pos] === '{') blockDepth++;
        if (lines[pos] === '}') blockDepth--;
        if (blockDepth > 0) pos++;
      }
      const blockContent = lines.substring(blockStart, pos).trim();
      pos++; // skip closing }

      if (selectorPart.startsWith('@container')) {
        // Container query: wrap the inner content and resolve &__xxx references
        // Parse inner &__xxx blocks inside @container
        const containerRule = selectorPart;
        const innerBlocks = parseContainerInner(blockContent, parentClass);
        for (const [selector, css] of Object.entries(innerBlocks)) {
          // Append @container-wrapped CSS to existing child style
          const containerCss = `${containerRule} {\n    ${css}\n  }`;
          if (childStyles[selector]) {
            childStyles[selector] += '\n  ' + containerCss;
          } else {
            childStyles[selector] = containerCss;
          }
        }
      } else if (selectorPart.startsWith(':has(')) {
        // :has(> &) { container-type: inline-size; } → parent CSS
        parentCssLines.push(`${selectorPart} { ${blockContent} }`);
      } else if (selectorPart.startsWith('&__') || selectorPart.startsWith('&--')) {
        // BEM child or modifier: &__element or &--modifier
        const fullClass = parentClass + selectorPart.substring(1); // remove &
        const formattedCss = formatCssForEtch(blockContent);
        if (childStyles[fullClass]) {
          childStyles[fullClass] += '\n  ' + formattedCss;
        } else {
          childStyles[fullClass] = formattedCss;
        }
      }
    } else {
      // Direct CSS property line (e.g., padding-block: var(--section-space-l);)
      const lineEnd = lines.indexOf(';', pos);
      if (lineEnd === -1) break;
      const line = lines.substring(pos, lineEnd + 1).trim();
      if (line) parentCssLines.push(line);
      pos = lineEnd + 1;
    }
  }

  return {
    parentClass,
    parentCss: parentCssLines.join('\n  '),
    childStyles,
  };
}

/**
 * Parse the inner content of a @container block to extract &__xxx rules.
 * Returns: { 'parent__element': 'css properties' }
 */
function parseContainerInner(content, parentClass) {
  const result = {};
  let pos = 0;

  while (pos < content.length) {
    while (pos < content.length && /\s/.test(content[pos])) pos++;
    if (pos >= content.length) break;

    const remaining = content.substring(pos);
    const match = remaining.match(/^(&[_-][a-zA-Z0-9_-]+)\s*\{/);

    if (match) {
      const selectorPart = match[1];
      pos += match[0].length;

      let blockDepth = 1;
      const blockStart = pos;
      while (pos < content.length && blockDepth > 0) {
        if (content[pos] === '{') blockDepth++;
        if (content[pos] === '}') blockDepth--;
        if (blockDepth > 0) pos++;
      }
      const blockContent = content.substring(blockStart, pos).trim();
      pos++; // skip }

      const fullClass = parentClass + selectorPart.substring(1);
      result[fullClass] = blockContent;
    } else {
      // Skip to next line
      const nextLine = content.indexOf('\n', pos);
      pos = nextLine === -1 ? content.length : nextLine + 1;
    }
  }

  return result;
}

/**
 * Formats CSS content for the Etch style object.
 * Normalizes indentation: each line gets 2-space indent after newline.
 */
function formatCssForEtch(css) {
  // Split into lines, trim each, rejoin with \n  (newline + 2 spaces)
  const lines = css.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (lines.length === 0) return '';

  // Rebuild with proper nesting indentation
  let result = '';
  let depth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Decrease depth for closing braces
    if (line === '}' || line.startsWith('}')) {
      depth = Math.max(0, depth - 1);
    }

    const indent = '  '.repeat(depth);

    if (i === 0) {
      result += line;
    } else {
      result += '\n' + indent + line;
    }

    // Increase depth for opening braces
    if (line.endsWith('{')) {
      depth++;
    }
  }

  return result;
}

// ─── Metadata Name Inference ───

function inferMetadataName(tag, classes, componentName, isRoot) {
  const classList = classes ? classes.split(/\s+/) : [];

  // Root section: use component name in Title Case
  if (isRoot && (tag === 'section' || tag === 'footer' || tag === 'header' || tag === 'nav')) {
    return toTitleCase(componentName);
  }

  // Container
  if (tag === 'div' && classList.some(c => c.includes('__container'))) return 'Container';

  // Specific class-based names (check before generic tag names)
  if (classList.some(c => c.includes('eyebrow') || c === 'eyebrow')) return 'Eyebrow';
  if (classList.some(c => c.includes('lede') || c === 'lede')) return 'Lede';
  if (classList.some(c => c.includes('intro') || c === 'intro')) return 'Intro';
  if (classList.some(c => c.includes('cta-group') || c === 'cta-group')) return 'CTA Group';
  if (classList.some(c => c.includes('grid') || c === 'grid')) return 'Grid';
  if (classList.some(c => c.includes('card-body'))) return 'Card Body';
  if (classList.some(c => c.includes('card-header'))) return 'Card Header';
  if (classList.some(c => c.includes('card-footer'))) return 'Card Footer';
  if (classList.some(c => c.includes('card') || c === 'card')) return 'Card';
  if (classList.some(c => c.includes('content-wrapper') || c === 'content-wrapper')) return 'Content Wrapper';
  if (classList.some(c => c.includes('media-wrapper') || c === 'media-wrapper')) return 'Media Wrapper';
  if (classList.some(c => c.includes('overlay') || c === 'overlay')) return 'Overlay';
  if (classList.some(c => c.includes('divider') || c === 'divider')) return 'Divider';

  // CTA detection
  if (tag === 'a') {
    if (classList.some(c => c.includes('btn--primary') || c === 'button')) return 'Primary CTA';
    if (classList.some(c => c.includes('btn--secondary') || c.includes('btn--outline'))) return 'Secondary CTA';
    if (classList.some(c => c === 'link' || c.includes('link'))) return 'Link';
    return 'Link';
  }

  // Tag-based names
  switch (tag) {
    case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6':
      return 'Heading';
    case 'p':
      if (classList.some(c => c === 'lede' || c.includes('lede'))) return 'Lede';
      return 'Text';
    case 'img': return 'Image';
    case 'blockquote': return 'Blockquote';
    case 'ul': case 'ol': return 'List';
    case 'li': return 'List Item';
    case 'nav': return 'Navigation';
    case 'header': return 'Header';
    case 'footer': return 'Footer';
    case 'figure': return 'Figure';
    case 'figcaption': return 'Caption';
    case 'section': return 'Section';
    case 'span': return 'Span';
    case 'svg': return 'Icon';
    case 'video': return 'Video';
    case 'audio': return 'Audio';
    case 'form': return 'Form';
    case 'button': return 'Button';
    case 'time': return 'Time';
    default:
      return toTitleCase(tag);
  }
}

function toTitleCase(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// ─── innerHTML and innerContent Generators ───

function generateInnerHtmlAndContent(childCount, isTextBlock) {
  if (isTextBlock) {
    return { innerHTML: '', innerContent: [] };
  }

  if (childCount === 0) {
    return { innerHTML: '\n\n', innerContent: ['\n', '\n'] };
  }

  // Pattern: ["\n", null, ("\n\n", null) x (N-1), "\n"]
  let innerHTML = '\n';
  const innerContent = ['\n'];

  for (let i = 0; i < childCount; i++) {
    if (i > 0) {
      innerHTML += '\n';
    }
    innerHTML += '\n';
    innerContent.push(null);
    if (i < childCount - 1) {
      innerContent.push('\n\n');
    }
  }

  innerContent.push('\n');

  return { innerHTML, innerContent };
}

// ─── Main Conversion Logic ───

function convertToEtch(htmlNodes, cssData, scriptContent, globalStyles, componentName) {
  const styles = {};
  const styleIdMap = new Map(); // class name -> style ID
  let hasFigure = false;

  // Check if figure exists anywhere in the tree
  function checkForFigure(nodes) {
    for (const node of nodes) {
      if (node.type === 'element') {
        if (node.tag === 'figure') hasFigure = true;
        if (node.children) checkForFigure(node.children);
      }
    }
  }
  checkForFigure(htmlNodes);

  // Get or create a style ID for a class name
  function getStyleId(className) {
    if (styleIdMap.has(className)) return styleIdMap.get(className);
    const id = generateStyleId();
    styleIdMap.set(className, id);
    return id;
  }

  // Register a style in the styles map
  function registerStyle(id, styleObj) {
    styles[id] = styleObj;
  }

  // Check if a class is a global class from global-styles.json
  function isGlobalClass(className) {
    return globalStyles && globalStyles[className] !== undefined;
  }

  // Check if a class is BEM child (contains __)
  function isBemChild(className) {
    return className.includes('__');
  }

  // Check if a class is an ACSS utility class (btn--*, h1-h6, smart-spacing, etc.)
  // These are framework-provided classes that should not get Etch style entries.
  const ACSS_PREFIXES = ['btn--', 'bg-', 'clr-', 'fw-', 'fs-', 'ta-', 'mt-', 'mb-', 'ml-', 'mr-', 'pt-', 'pb-', 'pl-', 'pr-', 'gap-', 'g-', 'flex-', 'grid-', 'z-', 'w-', 'h-', 'o-', 'br-', 'bs-'];
  const ACSS_EXACT = new Set(['smart-spacing', 'accent-heading', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
  function isAcssUtilityClass(className) {
    if (ACSS_EXACT.has(className)) return true;
    for (const prefix of ACSS_PREFIXES) {
      if (className.startsWith(prefix)) return true;
    }
    return false;
  }

  /**
   * Convert a single HTML node to an Etch block.
   */
  function convertNode(node, isRoot, depth) {
    if (node.type === 'text') {
      // If content contains HTML tags (e.g. <strong>, <em>, <a>), use etch/raw-html
      // etch/text escapes HTML — etch/raw-html renders it as-is
      const hasHTML = /<[a-zA-Z][^>]*>/.test(node.content);
      if (hasHTML) {
        return {
          blockName: 'etch/raw-html',
          attrs: { content: node.content },
          innerBlocks: [],
          innerHTML: '',
          innerContent: [],
        };
      }
      // Plain text → etch/text
      return {
        blockName: 'etch/text',
        attrs: { metadata: { name: 'Text' }, content: node.content },
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      };
    }

    if (node.type !== 'element') return null;

    const tag = node.tag;
    const attrClass = node.attributes.class || '';
    const classList = attrClass ? attrClass.split(/\s+/).filter(Boolean) : [];

    // Determine if this is a section (root element)
    const isSection = isRoot && (tag === 'section' || tag === 'footer' || tag === 'header' || tag === 'nav');

    // Determine if this is a container
    const isContainer = tag === 'div' && classList.some(c => c.includes('__container'));

    // Handle SVG elements
    if (tag === 'svg') {
      return convertSvgNode(node, classList);
    }

    // Build Etch attributes (order matters: data-etch-element first, then class, then rest)
    const etchAttrs = {};

    // data-etch-element comes first for section and container
    if (isSection) etchAttrs['data-etch-element'] = 'section';
    if (isContainer) etchAttrs['data-etch-element'] = 'container';

    // class second
    if (attrClass) etchAttrs.class = attrClass;

    // Copy all other HTML attributes
    for (const [key, value] of Object.entries(node.attributes)) {
      if (key === 'class') continue; // already handled
      etchAttrs[key] = value;
    }

    // Build styles array for this block
    const blockStyles = [];

    if (isSection) {
      blockStyles.push('etch-section-style');
      if (!styles['etch-section-style']) {
        registerStyle('etch-section-style', { ...ETCH_SECTION_STYLE });
      }
    }

    if (isContainer) {
      blockStyles.push('etch-container-style');
      if (!styles['etch-container-style']) {
        registerStyle('etch-container-style', { ...ETCH_CONTAINER_STYLE });
      }
    }

    // Assign styles for each class on this element.
    // IMPORTANT: Etch requires every class to have a registered style entry,
    // otherwise it strips the class from the HTML output.
    for (const cls of classList) {
      if (isGlobalClass(cls)) {
        // Global class: use global-styles.json CSS
        const gId = getStyleId(cls);
        if (!styles[gId]) {
          registerStyle(gId, { ...globalStyles[cls] });
        }
        blockStyles.push(gId);
      } else if (cls === cssData?.parentClass) {
        // BEM parent class: use its direct CSS (not nested children)
        const pId = getStyleId(cls);
        if (!styles[pId]) {
          registerStyle(pId, {
            type: 'class',
            selector: '.' + cls,
            collection: 'default',
            css: cssData.parentCss || '',
            readonly: false,
          });
        }
        blockStyles.push(pId);
      } else if (isBemChild(cls) && cssData?.childStyles?.[cls]) {
        // BEM child with CSS from flattened parent: use its extracted CSS
        const cId = getStyleId(cls);
        if (!styles[cId]) {
          registerStyle(cId, {
            type: 'class',
            selector: '.' + cls,
            collection: 'default',
            css: cssData.childStyles[cls],
            readonly: false,
          });
        }
        blockStyles.push(cId);
      } else {
        // BEM child without specific CSS, ACSS utility (btn--*), or other class:
        // register with empty CSS so Etch keeps it in the class attribute.
        const oId = getStyleId(cls);
        if (!styles[oId]) {
          registerStyle(oId, {
            type: 'class',
            selector: '.' + cls,
            collection: 'default',
            css: '',
            readonly: false,
          });
        }
        blockStyles.push(oId);
      }
    }

    // Convert children
    const innerBlocks = [];
    const elementChildren = [];

    if (!node.isSelfClosing && node.children) {
      for (const child of node.children) {
        const converted = convertNode(child, false, depth + 1);
        if (converted) {
          innerBlocks.push(converted);
          elementChildren.push(converted);
        }
      }
    }

    // Build innerHTML/innerContent based on child count
    const { innerHTML, innerContent } = generateInnerHtmlAndContent(innerBlocks.length, false);

    const metadataName = inferMetadataName(tag, attrClass, componentName, isRoot);

    const block = {
      blockName: 'etch/element',
      attrs: {
        metadata: { name: metadataName },
        tag,
        attributes: etchAttrs,
        styles: blockStyles,
      },
      innerBlocks,
      innerHTML,
      innerContent,
    };

    return block;
  }

  /**
   * Convert an SVG node to etch/svg block.
   * SVGs are encoded as data URI in the src attribute.
   */
  function convertSvgNode(node, classList) {
    const attrClass = node.attributes.class || '';

    // Reconstruct the SVG as a data URI
    let svgContent = node.rawSvg || '';
    if (!svgContent) {
      // Fallback: build a minimal SVG string from attributes
      const attrs = Object.entries(node.attributes)
        .filter(([k]) => k !== 'class')
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ');
      svgContent = `<svg ${attrs}></svg>`;
    }

    const encodedSvg = 'data:image/svg+xml,' + encodeURIComponent(svgContent).replace(/%20/g, '%20');

    const etchAttrs = {};
    if (attrClass) etchAttrs.class = attrClass;
    etchAttrs.src = encodedSvg;
    etchAttrs.stripColors = 'true';

    // Build styles
    const blockStyles = [];
    const classes = attrClass ? attrClass.split(/\s+/).filter(Boolean) : [];
    for (const cls of classes) {
      if (isGlobalClass(cls)) {
        const gId = getStyleId(cls);
        if (!styles[gId]) {
          registerStyle(gId, { ...globalStyles[cls] });
        }
        blockStyles.push(gId);
      } else if (isBemChild(cls) || isBemModifier(cls)) {
        const cId = getStyleId(cls);
        if (!styles[cId]) {
          registerStyle(cId, {
            type: 'class',
            selector: '.' + cls,
            collection: 'default',
            css: '',
            readonly: false,
          });
        }
        blockStyles.push(cId);
      }
    }

    return {
      blockName: 'etch/svg',
      attrs: {
        metadata: { name: 'Icon' },
        tag: 'svg',
        attributes: etchAttrs,
        styles: blockStyles,
      },
      innerBlocks: [],
      innerHTML: '\n\n',
      innerContent: ['\n', '\n'],
    };
  }

  // Find the root element (skip text nodes at the top)
  let rootNode = null;
  for (const node of htmlNodes) {
    if (node.type === 'element') {
      rootNode = node;
      break;
    }
  }

  if (!rootNode) {
    throw new Error('No root HTML element found in index.html');
  }

  // Convert the tree starting from the root
  const rootBlock = convertNode(rootNode, true, 0);

  // Add figure reset style if needed
  if (hasFigure) {
    styles['s4gkacs'] = { ...FIGURE_RESET_STYLE };
  }

  // Add script to root block if present
  if (scriptContent) {
    const base64 = Buffer.from(scriptContent).toString('base64');
    rootBlock.attrs.script = {
      code: base64,
      id: generateStyleId(),
    };
  }

  // Build the final Etch JSON
  return {
    type: 'block',
    gutenbergBlock: rootBlock,
    version: 2.1,
    timestamp: new Date().toISOString(),
    styles,
    components: {},
  };
}

// ─── Dry Run Tree Printer ───

function printTree(block, indent) {
  indent = indent || 0;
  const prefix = '  '.repeat(indent);
  const name = block.attrs?.metadata?.name || 'Unknown';
  const tag = block.attrs?.tag || '';
  const classes = block.attrs?.attributes?.class || '';
  const styleCount = block.attrs?.styles?.length || 0;

  if (block.blockName === 'etch/text') {
    const content = block.attrs?.content || '';
    const truncated = content.length > 60 ? content.substring(0, 57) + '...' : content;
    console.log(`${prefix}[text] "${truncated}"`);
    return;
  }

  console.log(`${prefix}<${tag}> "${name}" classes="${classes}" (${styleCount} styles)`);

  if (block.innerBlocks) {
    for (const child of block.innerBlocks) {
      printTree(child, indent + 1);
    }
  }
}

// ─── Inline HTML Extraction ───

/**
 * For elements that contain mixed content (text + inline elements like <a>, <span>, <strong>),
 * we need to extract the full inner HTML as a single text content for etch/text.
 *
 * This function checks if an element's children are all "inline" content (text nodes
 * and inline elements like span, a, strong, em, etc.) and if so, returns the raw
 * inner HTML string instead of creating separate blocks for each.
 */
const INLINE_TAGS = new Set([
  'a', 'span', 'strong', 'em', 'b', 'i', 'u', 'small', 'sub', 'sup',
  'abbr', 'cite', 'code', 'mark', 'time', 'br', 'wbr',
]);

function isInlineContent(children) {
  if (!children || children.length === 0) return false;
  for (const child of children) {
    if (child.type === 'text') continue;
    if (child.type === 'element' && INLINE_TAGS.has(child.tag)) {
      // An inline tag with BEM classes (e.g., <a class="button btn--primary section__cta">)
      // should be treated as a block-level element, not inline text.
      const cls = (child.attributes && child.attributes.class) || '';
      if (cls.includes('__') || cls.includes('button') || cls.includes('link') || cls.includes('btn--')) {
        return false;
      }
      continue;
    }
    return false;
  }
  return true;
}

/**
 * Reconstruct the inner HTML from child nodes (text + inline elements).
 */
function reconstructInnerHTML(children, originalHTML) {
  let result = '';
  for (const child of children) {
    if (child.type === 'text') {
      result += child.content;
    } else if (child.type === 'element') {
      // Rebuild the element with its attributes
      const attrs = Object.entries(child.attributes || {})
        .map(([k, v]) => v === '' ? k : `${k}="${v}"`)
        .join(' ');
      const openTag = attrs ? `<${child.tag} ${attrs}>` : `<${child.tag}>`;

      if (child.isSelfClosing) {
        result += openTag;
      } else {
        const innerContent = child.children ? reconstructInnerHTML(child.children) : '';
        result += `${openTag}${innerContent}</${child.tag}>`;
      }
    }
  }
  return result;
}

// ─── Enhanced Conversion (with inline handling) ───

/**
 * This wraps the main conversion to handle inline content properly.
 * When an element contains only text and inline elements, its children
 * become a single etch/text block with the full inner HTML as content.
 */
function enhanceConversion(htmlNodes, cssData, scriptContent, globalStyles, componentName) {
  // Pre-process the tree: for elements with inline-only children,
  // collapse them into a single text node with the reconstructed HTML.
  function preprocessNode(node) {
    if (node.type !== 'element') return node;

    // First, recurse into non-inline children
    if (node.children) {
      // Check if all children are inline content
      if (node.children.length > 0 && isInlineContent(node.children)) {
        // Collapse into a single text node with the full inner HTML
        const htmlContent = reconstructInnerHTML(node.children);
        node.children = [{ type: 'text', content: htmlContent }];
      } else {
        // Recurse into block-level children
        node.children = node.children.map(child => preprocessNode(child));
      }
    }

    return node;
  }

  // Deep clone and preprocess
  const processedNodes = JSON.parse(JSON.stringify(htmlNodes)).map(n => preprocessNode(n));

  return convertToEtch(processedNodes, cssData, scriptContent, globalStyles, componentName);
}

// ─── CLI Entry Point ───

function main() {
  const args = process.argv.slice(2);
  const flags = args.filter(a => a.startsWith('--'));
  const positional = args.filter(a => !a.startsWith('--'));

  const minified = flags.includes('--minified');
  const dryRun = flags.includes('--dry-run');

  if (positional.length === 0) {
    console.error('Usage: node scripts/html-to-json.js <component-folder> [--minified] [--dry-run]');
    console.error('');
    console.error('Arguments:');
    console.error('  <component-folder>  Path to folder containing index.html, style.css, and optional script.js');
    console.error('');
    console.error('Flags:');
    console.error('  --minified          Output single-line JSON');
    console.error('  --dry-run           Print the block tree without writing the JSON file');
    process.exit(1);
  }

  const folder = path.resolve(positional[0]);

  // Validate folder exists
  if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) {
    console.error(`Error: "${folder}" is not a valid directory.`);
    process.exit(1);
  }

  // Read input files
  const htmlPath = path.join(folder, 'index.html');
  const cssPath = path.join(folder, 'style.css');
  const jsPath = path.join(folder, 'script.js');

  if (!fs.existsSync(htmlPath)) {
    console.error(`Error: index.html not found in "${folder}".`);
    process.exit(1);
  }

  if (!fs.existsSync(cssPath)) {
    console.error(`Error: style.css not found in "${folder}".`);
    process.exit(1);
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  const scriptContent = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, 'utf8') : null;

  // Infer component name from folder name
  const componentName = path.basename(folder);

  // Load global styles
  const globalStyles = loadGlobalStyles();

  // Parse HTML
  console.log(`Parsing ${htmlPath}...`);
  const htmlNodes = parseHTML(htmlContent);

  if (htmlNodes.length === 0) {
    console.error('Error: No HTML elements found in index.html.');
    process.exit(1);
  }

  // Parse CSS
  console.log(`Parsing ${cssPath}...`);
  const cssData = parseCSS(cssContent);

  if (!cssData) {
    console.warn('Warning: Could not parse CSS, proceeding without style data.');
  }

  // Convert to Etch JSON
  console.log('Converting to Etch JSON...');
  const etchJson = enhanceConversion(htmlNodes, cssData, scriptContent, globalStyles, componentName);

  // Dry run: print tree and exit
  if (dryRun) {
    console.log('\n--- Block Tree ---\n');
    printTree(etchJson.gutenbergBlock, 0);
    console.log(`\n--- Styles (${Object.keys(etchJson.styles).length}) ---\n`);
    for (const [id, style] of Object.entries(etchJson.styles)) {
      const cssPreview = style.css ? style.css.substring(0, 50) + (style.css.length > 50 ? '...' : '') : '(empty)';
      console.log(`  ${id}: ${style.selector} -> ${cssPreview}`);
    }
    if (scriptContent) {
      console.log(`\n--- Script ---\n  Encoded (${scriptContent.length} bytes)`);
    }
    return;
  }

  // Write output
  const outputPath = path.join(folder, 'etch-import.json');
  const jsonStr = minified
    ? JSON.stringify(etchJson)
    : JSON.stringify(etchJson, null, 2);

  fs.writeFileSync(outputPath, jsonStr, 'utf8');
  console.log(`\nDone. Written to: ${outputPath}`);
  console.log(`  Blocks: ${countBlocks(etchJson.gutenbergBlock)}`);
  console.log(`  Styles: ${Object.keys(etchJson.styles).length}`);
  if (scriptContent) {
    console.log(`  Script: included (${scriptContent.length} bytes)`);
  }
}

function countBlocks(block) {
  let count = 1;
  if (block.innerBlocks) {
    for (const child of block.innerBlocks) {
      count += countBlocks(child);
    }
  }
  return count;
}

main();
