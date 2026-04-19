#!/usr/bin/env node

/**
 * Etch Component Registry Manager
 *
 * Manages .etch-registry.json at the project output root.
 * Tracks all generated components with metadata, enabling search/filter/reuse.
 *
 * Usage:
 *   node scripts/registry.js init                          # Initialize empty registry
 *   node scripts/registry.js add <folder>                  # Register a component from its folder
 *   node scripts/registry.js list                          # List all components
 *   node scripts/registry.js list --type=hero              # Filter by type
 *   node scripts/registry.js list --tag=pricing            # Filter by tag
 *   node scripts/registry.js search <query>                # Search by name/description
 *   node scripts/registry.js info <name>                   # Show component details
 *   node scripts/registry.js remove <name>                 # Remove from registry (keeps files)
 *   node scripts/registry.js stats                         # Show registry statistics
 */

const fs = require('fs');
const path = require('path');

// ─── Configuration ───

const OUTPUT_ROOT = path.join(__dirname, '..', 'output');
const REGISTRY_PATH = path.join(OUTPUT_ROOT, '.etch-registry.json');
const SCHEMA_PATH = path.join(__dirname, '..', 'schemas', 'registry.json');
const GLOBAL_STYLES_PATH = path.join(__dirname, '..', 'docs', 'global-styles.json');

const VALID_TYPES = ['section', 'card', 'form', 'nav', 'footer', 'hero', 'custom'];

// ─── Registry I/O ───

function readRegistry() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  } catch (e) {
    console.error(`❌ Registry corrupted: ${e.message}`);
    console.error('   Delete .etch-registry.json and run "init" to reinitialize.');
    process.exit(1);
  }
}

function writeRegistry(data) {
  data.updatedAt = new Date().toISOString();
  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function ensureRegistry() {
  const reg = readRegistry();
  if (!reg) {
    console.error('❌ No registry found. Run "node scripts/registry.js init" first.');
    process.exit(1);
  }
  return reg;
}

// ─── Component Analysis ───

/**
 * Analyze a component folder to extract metadata.
 * Reads HTML for structure, CSS for ACSS tokens used, checks for JS.
 */
function analyzeComponent(folderPath) {
  const absPath = path.resolve(folderPath);
  const name = path.basename(absPath);

  // Check required files
  const htmlPath = path.join(absPath, 'index.html');
  const cssPath = path.join(absPath, 'style.css');
  const jsPath = path.join(absPath, 'script.js');

  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ ${htmlPath} not found`);
    return null;
  }
  if (!fs.existsSync(cssPath)) {
    console.error(`❌ ${cssPath} not found`);
    return null;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');
  const hasJs = fs.existsSync(jsPath);

  // Detect component type from HTML root element and classes
  const type = detectType(html, name);

  // Extract ACSS tokens from CSS
  const acssTokens = extractAcssTokens(css);

  // Generate tags from name and content
  const tags = generateTags(name, html, type);

  // Build relative file paths from output root
  const relBase = path.relative(OUTPUT_ROOT, absPath);

  return {
    name,
    description: '',
    type,
    tags,
    files: {
      html: path.join(relBase, 'index.html'),
      css: path.join(relBase, 'style.css'),
      js: hasJs ? path.join(relBase, 'script.js') : null,
    },
    hasJs,
    variants: [],
    acssTokensUsed: acssTokens,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Detect component type from HTML structure.
 */
function detectType(html, name) {
  const lower = name.toLowerCase();
  const htmlLower = html.toLowerCase();

  // Check root element
  if (htmlLower.match(/^<header[\s>]/)) return 'nav';
  if (htmlLower.match(/^<footer[\s>]/)) return 'footer';
  if (htmlLower.match(/^<nav[\s>]/)) return 'nav';

  // Check name patterns
  if (lower.includes('hero')) return 'hero';
  if (lower.includes('header') || lower.includes('nav')) return 'nav';
  if (lower.includes('footer')) return 'footer';
  if (lower.includes('form') || lower.includes('contact')) return 'form';
  if (lower.includes('card')) return 'card';

  // Check HTML content hints
  if (htmlLower.includes('pricing') || htmlLower.includes('__plan')) return 'section';
  if (htmlLower.includes('testimonial') || htmlLower.includes('__quote')) return 'section';

  return 'section';
}

/**
 * Extract all ACSS custom property names from CSS content.
 */
function extractAcssTokens(css) {
  const tokens = new Set();
  const regex = /var\(--([a-z0-9-]+)/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    tokens.add('--' + match[1]);
  }
  return Array.from(tokens).sort();
}

/**
 * Generate descriptive tags from component name and content.
 */
function generateTags(name, html, type) {
  const tags = new Set();
  tags.add(type);

  // From name
  const parts = name.split('-');
  for (const part of parts) {
    if (part.length > 2) tags.add(part);
  }

  // From HTML content patterns
  const htmlLower = html.toLowerCase();
  if (htmlLower.includes('toggle') || htmlLower.includes('aria-pressed')) tags.add('interactive');
  if (htmlLower.includes('carousel') || htmlLower.includes('swiper')) tags.add('carousel');
  if (htmlLower.includes('grid')) tags.add('grid');
  if (htmlLower.includes('card')) tags.add('card');
  if (htmlLower.includes('cta') || htmlLower.includes('btn--')) tags.add('cta');
  if (htmlLower.includes('form') || htmlLower.includes('<input')) tags.add('form');
  if (htmlLower.includes('avatar')) tags.add('avatar');
  if (htmlLower.includes('testimonial') || htmlLower.includes('blockquote')) tags.add('testimonial');
  if (htmlLower.includes('pricing') || htmlLower.includes('__plan')) tags.add('pricing');
  if (htmlLower.includes('img') || htmlLower.includes('image')) tags.add('media');

  return Array.from(tags).sort();
}

// ─── Commands ───

function cmdInit() {
  if (fs.existsSync(REGISTRY_PATH)) {
    const reg = readRegistry();
    if (reg && reg.components && reg.components.length > 0) {
      console.log(`⚠  Registry already exists with ${reg.components.length} component(s).`);
      console.log('   Delete .etch-registry.json manually to reinitialize.');
      return;
    }
  }

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_ROOT)) {
    fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
  }

  const registry = {
    projectName: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    components: [],
    pages: [],
  };

  writeRegistry(registry);
  console.log(`✅ Registry initialized at ${path.relative(process.cwd(), REGISTRY_PATH)}`);
}

function cmdAdd(folderPath) {
  if (!folderPath) {
    console.error('Usage: node scripts/registry.js add <component-folder>');
    process.exit(1);
  }

  const reg = ensureRegistry();
  const component = analyzeComponent(folderPath);
  if (!component) process.exit(1);

  // Check for existing component with same name
  const existingIdx = reg.components.findIndex(c => c.name === component.name);
  if (existingIdx >= 0) {
    console.log(`⚠  Component "${component.name}" already exists (created ${reg.components[existingIdx].createdAt}). Overwriting.`);
    reg.components[existingIdx] = component;
  } else {
    reg.components.push(component);
  }

  writeRegistry(reg);

  console.log(`✅ Registered: ${component.name}`);
  console.log(`   Type: ${component.type}`);
  console.log(`   Tags: ${component.tags.join(', ')}`);
  console.log(`   JS: ${component.hasJs ? 'yes' : 'no'}`);
  console.log(`   ACSS tokens: ${component.acssTokensUsed.length}`);
}

function cmdList(args) {
  const reg = ensureRegistry();

  let filtered = reg.components;

  // Parse filters
  const typeFilter = args.find(a => a.startsWith('--type='));
  const tagFilter = args.find(a => a.startsWith('--tag='));

  if (typeFilter) {
    const type = typeFilter.split('=')[1];
    filtered = filtered.filter(c => c.type === type);
  }

  if (tagFilter) {
    const tag = tagFilter.split('=')[1].toLowerCase();
    filtered = filtered.filter(c => c.tags && c.tags.some(t => t.includes(tag)));
  }

  if (filtered.length === 0) {
    console.log('Aucun composant trouvé.');
    return;
  }

  // Display as table
  console.log('');
  console.log(`  ${'Nom'.padEnd(30)} ${'Type'.padEnd(10)} ${'JS'.padEnd(5)} ${'Tags'.padEnd(30)} Créé`);
  console.log(`  ${'─'.repeat(30)} ${'─'.repeat(10)} ${'─'.repeat(5)} ${'─'.repeat(30)} ${'─'.repeat(10)}`);

  for (const c of filtered) {
    const date = c.createdAt ? c.createdAt.substring(0, 10) : '?';
    const tags = (c.tags || []).slice(0, 4).join(', ');
    console.log(`  ${c.name.padEnd(30)} ${c.type.padEnd(10)} ${(c.hasJs ? 'oui' : 'non').padEnd(5)} ${tags.padEnd(30)} ${date}`);
  }

  console.log(`\n  Total: ${filtered.length} composant(s)`);
}

function cmdSearch(query) {
  if (!query) {
    console.error('Usage: node scripts/registry.js search <query>');
    process.exit(1);
  }

  const reg = ensureRegistry();
  const q = query.toLowerCase();

  const results = reg.components.filter(c =>
    c.name.includes(q) ||
    (c.description && c.description.includes(q)) ||
    (c.tags && c.tags.some(t => t.includes(q)))
  );

  if (results.length === 0) {
    console.log(`Aucun résultat pour "${query}".`);
    return;
  }

  for (const c of results) {
    console.log(`\n  ${c.name} (${c.type})`);
    if (c.description) console.log(`    ${c.description}`);
    console.log(`    Tags: ${(c.tags || []).join(', ')}`);
    console.log(`    Fichiers: ${c.files.html}`);
  }

  console.log(`\n  ${results.length} résultat(s)`);
}

function cmdInfo(name) {
  if (!name) {
    console.error('Usage: node scripts/registry.js info <component-name>');
    process.exit(1);
  }

  const reg = ensureRegistry();
  const comp = reg.components.find(c => c.name === name);

  if (!comp) {
    console.error(`❌ Composant "${name}" non trouvé.`);
    process.exit(1);
  }

  console.log(`\n  Composant: ${comp.name}`);
  console.log(`  Type: ${comp.type}`);
  if (comp.description) console.log(`  Description: ${comp.description}`);
  console.log(`  Tags: ${(comp.tags || []).join(', ')}`);
  console.log(`  JavaScript: ${comp.hasJs ? 'oui' : 'non'}`);
  console.log(`  Créé: ${comp.createdAt}`);
  console.log(`\n  Fichiers:`);
  console.log(`    HTML: ${comp.files.html}`);
  console.log(`    CSS:  ${comp.files.css}`);
  if (comp.files.js) console.log(`    JS:   ${comp.files.js}`);
  if (comp.acssTokensUsed && comp.acssTokensUsed.length > 0) {
    console.log(`\n  Tokens ACSS (${comp.acssTokensUsed.length}):`);
    // Group by prefix
    const groups = {};
    for (const token of comp.acssTokensUsed) {
      const prefix = token.replace(/^--/, '').split('-')[0];
      if (!groups[prefix]) groups[prefix] = [];
      groups[prefix].push(token);
    }
    for (const [prefix, tokens] of Object.entries(groups)) {
      console.log(`    ${prefix}: ${tokens.join(', ')}`);
    }
  }
  if (comp.variants && comp.variants.length > 0) {
    console.log(`\n  Variantes: ${comp.variants.join(', ')}`);
  }
}

function cmdRemove(name) {
  if (!name) {
    console.error('Usage: node scripts/registry.js remove <component-name>');
    process.exit(1);
  }

  const reg = ensureRegistry();
  const idx = reg.components.findIndex(c => c.name === name);

  if (idx < 0) {
    console.error(`❌ Composant "${name}" non trouvé.`);
    process.exit(1);
  }

  const removed = reg.components.splice(idx, 1)[0];
  writeRegistry(reg);

  console.log(`✅ "${removed.name}" retiré du registre.`);
  console.log(`   Les fichiers n'ont pas été supprimés.`);
}

function cmdStats() {
  const reg = ensureRegistry();

  console.log(`\n  Registre: ${path.relative(process.cwd(), REGISTRY_PATH)}`);
  console.log(`  Projet: ${reg.projectName || '(non défini)'}`);
  console.log(`  Créé: ${reg.createdAt}`);
  console.log(`  Mis à jour: ${reg.updatedAt}`);
  console.log(`\n  Composants: ${reg.components.length}`);
  console.log(`  Pages: ${(reg.pages || []).length}`);

  if (reg.components.length > 0) {
    // Type breakdown
    const types = {};
    let withJs = 0;
    const allTokens = new Set();

    for (const c of reg.components) {
      types[c.type] = (types[c.type] || 0) + 1;
      if (c.hasJs) withJs++;
      for (const t of (c.acssTokensUsed || [])) allTokens.add(t);
    }

    console.log(`\n  Par type:`);
    for (const [type, count] of Object.entries(types).sort((a, b) => b[1] - a[1])) {
      console.log(`    ${type}: ${count}`);
    }

    console.log(`\n  Avec JS: ${withJs}/${reg.components.length}`);
    console.log(`  Tokens ACSS uniques: ${allTokens.size}`);
  }
}

// ─── CLI Entry Point ───

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'init':
      cmdInit();
      break;
    case 'add':
      cmdAdd(args[1]);
      break;
    case 'list':
      cmdList(args.slice(1));
      break;
    case 'search':
      cmdSearch(args[1]);
      break;
    case 'info':
      cmdInfo(args[1]);
      break;
    case 'remove':
      cmdRemove(args[1]);
      break;
    case 'stats':
      cmdStats();
      break;
    default:
      console.log(`Etch Component Registry Manager

Usage:
  node scripts/registry.js init                   Initialiser le registre
  node scripts/registry.js add <dossier>          Enregistrer un composant
  node scripts/registry.js list                   Lister les composants
  node scripts/registry.js list --type=hero       Filtrer par type
  node scripts/registry.js list --tag=pricing     Filtrer par tag
  node scripts/registry.js search <query>         Chercher par nom/description/tag
  node scripts/registry.js info <nom>             Détails d'un composant
  node scripts/registry.js remove <nom>           Retirer du registre (fichiers conservés)
  node scripts/registry.js stats                  Statistiques du registre

Types valides: ${VALID_TYPES.join(', ')}
`);
      break;
  }
}

main();
