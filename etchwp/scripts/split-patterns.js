#!/usr/bin/env node

/**
 * Split etch-patterns-data.md into individual pattern files
 * 
 * Input:  docs/etch-patterns-data.md
 * Output: docs/patterns/<category>/<pattern-name>.json  (indented, readable)
 *         docs/patterns/INDEX.md                        (index of all patterns)
 * 
 * Usage:
 *   node scripts/split-patterns.js
 *   node scripts/split-patterns.js /path/to/etch-patterns-data.md
 */

const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2] || path.join(__dirname, '..', 'docs', 'etch-patterns-data.md');
const outputDir = path.join(__dirname, '..', 'docs', 'patterns');

function slugify(str) {
  return str.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function main() {
  if (!fs.existsSync(inputPath)) {
    console.error('Fichier introuvable:', inputPath);
    process.exit(1);
  }

  const content = fs.readFileSync(inputPath, 'utf8');
  const lines = content.split('\n');

  let currentCategory = 'uncategorized';
  let currentPattern = null;
  let inJsonBlock = false;
  let jsonBuffer = '';
  const patterns = [];

  for (const line of lines) {
    if (line.startsWith('## ') && !line.startsWith('### ')) {
      currentCategory = line.replace('## ', '').trim();
      continue;
    }
    if (line.startsWith('### ')) {
      currentPattern = line.replace('### ', '').trim();
      continue;
    }
    if (line.trim() === '```json' && currentPattern) {
      inJsonBlock = true;
      jsonBuffer = '';
      continue;
    }
    if (line.trim() === '```' && inJsonBlock) {
      inJsonBlock = false;
      if (jsonBuffer.trim()) {
        patterns.push({
          category: currentCategory,
          name: currentPattern,
          json: jsonBuffer.trim()
        });
      }
      currentPattern = null;
      continue;
    }
    if (inJsonBlock) {
      jsonBuffer += line + '\n';
    }
  }

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
  }

  const index = [];

  for (const pattern of patterns) {
    const catSlug = slugify(pattern.category);
    const patSlug = slugify(pattern.name);
    const dir = path.join(outputDir, catSlug);
    fs.mkdirSync(dir, { recursive: true });

    let prettyJson;
    try {
      const parsed = JSON.parse(pattern.json);
      prettyJson = JSON.stringify(parsed, null, 2);
    } catch (e) {
      prettyJson = pattern.json;
      console.warn('  W JSON invalide pour ' + pattern.name + ': ' + e.message);
    }

    const filePath = path.join(dir, patSlug + '.json');
    fs.writeFileSync(filePath, prettyJson);

    const relPath = path.relative(outputDir, filePath);
    index.push({ category: pattern.category, name: pattern.name, path: relPath });
    console.log('  OK ' + relPath);
  }

  let md = '# Etch Patterns Index\n\nSource: https://patterns.etchwp.com/layouts/\n\n';
  md += index.length + ' patterns disponibles.\n\n';
  let currentCat = '';
  for (const item of index) {
    if (item.category !== currentCat) {
      currentCat = item.category;
      md += '## ' + currentCat + '\n\n';
    }
    md += '- **' + item.name + '** : `' + item.path + '`\n';
  }
  md += '\n---\n\nChaque fichier contient le JSON indente du pattern.\n';
  md += 'Pour utiliser dans Etch, minifier le JSON avant de coller.\n';

  fs.writeFileSync(path.join(outputDir, 'INDEX.md'), md);
  console.log('\n  INDEX.md');
  console.log('\n' + patterns.length + ' patterns extraits dans docs/patterns/');
}

main();
