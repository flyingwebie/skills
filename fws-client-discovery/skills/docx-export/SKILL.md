---
name: docx-export
description: >
  Generate branded .docx reports from markdown research outputs using the FWS template.
  Applies company header/footer, fonts, heading styles, and professional formatting.
  Use after completing any research step to produce a client-ready document.
version: 0.1.0
---

# Branded .docx Export — FWS Template

## Purpose
Convert markdown research reports into professionally branded .docx files using the Flying Web Solutions template. Each document includes the FWS header logo, branded footer with contact details, and consistent typography matching the company style guide.

## When to Use
- After completing ANY research step (Steps 1-6) to generate the client-facing .docx
- After generating the Content Plan (Step 8)
- When producing the Master Discovery Report (Step 0)
- **NOT used for**: Page content files (Step 7) or Blog posts (Step 9) — these stay markdown only

## Prerequisites
```bash
npm install -g docx
```

## Brand Specification
Read the full brand spec at `@${CLAUDE_PLUGIN_ROOT}/skills/docx-export/references/fws-brand-spec.md` for exact values. Key settings:

| Element | Value |
|---------|-------|
| Page | A4 (11906 x 16838 DXA) |
| Margins | 1" all sides (1440 DXA) |
| Content width | 9026 DXA |
| Default font | Arial 11pt (22 half-points) |
| H1 | Arial 20pt, normal weight |
| H2 | Arial 16pt, not bold |
| H3 | Arial 14pt, not bold, #434343 |
| H4 | Arial 12pt, #666666 |
| Line spacing | 276 (auto = 1.15) |
| Header | FWS logo, ~2.3" wide |
| Footer | FWS logo (smaller) + contact info in Inter 9pt |

## Workflow

### Step 1: Read the Markdown Report
Read the markdown report file that was just generated (e.g., `02-Sitemap-Report.md`).

### Step 2: Generate the .docx
Use the template builder at `@${CLAUDE_PLUGIN_ROOT}/skills/docx-export/references/docx-template.js` as the foundation. The template provides:
- FWS branded header with logo
- FWS branded footer with contact details, VAT, address, page number
- All heading styles pre-configured
- Bullet and numbered list configs
- Table styles with FWS colors

Write a Node.js script that:
1. Requires the `docx` package
2. Loads the FWS logo from `@${CLAUDE_PLUGIN_ROOT}/skills/docx-export/assets/fws-logo.png`
3. Builds document sections from the markdown content
4. Applies the correct heading level for each markdown heading
5. Converts markdown tables to docx tables with branded styling
6. Converts markdown lists to proper numbered/bullet lists
7. Adds page breaks between major sections
8. Packs and saves the .docx alongside the .md file

### Step 3: Validate
```bash
python scripts/office/validate.py output.docx
```

## Content Mapping Rules

### Markdown → docx Element Mapping

| Markdown | docx Element | Style |
|----------|-------------|-------|
| `# Heading` | HeadingLevel.HEADING_1 | 20pt Arial |
| `## Heading` | HeadingLevel.HEADING_2 | 16pt Arial |
| `### Heading` | HeadingLevel.HEADING_3 | 14pt Arial #434343 |
| `#### Heading` | HeadingLevel.HEADING_4 | 12pt Arial #666666 |
| Regular text | Normal paragraph | 11pt Arial |
| `**bold**` | TextRun with bold: true | |
| `*italic*` | TextRun with italics: true | |
| `- item` | Bullet list | LevelFormat.BULLET |
| `1. item` | Numbered list | LevelFormat.DECIMAL |
| `| table |` | Table with borders | #CCCCCC borders, #E8F0FE header |
| `> blockquote` | Indented paragraph | Left indent 720, #666666, italic |
| `---` | Page break | Between major sections |
| `[link](url)` | ExternalHyperlink | Hyperlink style |

### Special Elements

**Heading Accent (`:: keyword`)**:
- Render as a small-caps paragraph ABOVE the H1
- Font: Arial 10pt, #b45f06 (FWS orange), letter-spacing wide
- All uppercase

**Score Tables (ICE, APEX, CITE, CORE-EEAT)**:
- Use colored header row: #E8F0FE (light blue)
- Score cells: bold, centered
- High scores (7+): green text #1B7A1B
- Medium scores (4-6): orange text #b45f06
- Low scores (<4): red text #CC0000

**Competitive Matrix / Battlecards**:
- Full-width table
- Alternating row shading: white / #F8F9FA
- Header row: #2C3E50 background, white text

### Sitemap Visual Tree (Step 1 only)
For the Sitemap Report, generate a visual tree diagram:
- Use Courier New 10pt (monospace) for clean alignment
- Draw the tree with box-drawing characters (├── │ └──)
- Group by page type with clear section labels
- Add a light gray background block (#F5F5F5) behind the tree
- The tree shows the FULL site hierarchy with depth levels

Example rendering approach:
```javascript
// Build tree as monospace text block
const treeLines = [
  "Homepage",
  "├── About Us",
  "│   ├── Our Team",
  "│   └── Our Story",
  "├── Services",
  "│   ├── Web Design",
  "│   ├── SEO",
  "│   └── Content Marketing",
  "└── Contact"
];

// Render as paragraph with monospace font and gray background
new Paragraph({
  shading: { fill: "F5F5F5", type: ShadingType.CLEAR },
  spacing: { before: 120, after: 120, line: 300 },
  children: treeLines.map((line, i) => {
    const runs = [new TextRun({ text: line, font: "Courier New", size: 20 })];
    if (i < treeLines.length - 1) runs.push(new TextRun({ break: 1 })); // NOT \n
    return runs;
  }).flat()
})
```

## File Naming Convention
Each .docx file mirrors the markdown filename:

| Step | Markdown | .docx |
|------|----------|-------|
| Master Report | `00-Discovery-Report.md` | `00-Discovery-Report.docx` |
| Client Brief | `01-Client-Brief.md` | `01-Client-Brief.docx` |
| Sitemap | `02-Sitemap-Report.md` | `02-Sitemap-Report.docx` |
| Competitors | `03-Competitor-Report.md` | `03-Competitor-Report.docx` |
| Personas | `04-Buyer-Personas.md` | `04-Buyer-Personas.docx` |
| Keywords | `05-Keyword-Research.md` | `05-Keyword-Research.docx` |
| UX/UI | `06-UX-UI-Research.md` | `06-UX-UI-Research.docx` |
| FAQs | `07-FAQ-Research.md` | `07-FAQ-Research.docx` |
| Content Plan | `08-Content-Plan.md` | `08-Content-Plan.docx` |

## Critical Rules
1. **Always use WidthType.DXA** — never PERCENTAGE (breaks in Google Docs)
2. **Always use ShadingType.CLEAR** — never SOLID
3. **Never use `\n`** — use separate Paragraph elements or TextRun with `break: 1`
4. **Never use unicode bullets** — use LevelFormat.BULLET
5. **ImageRun requires `type: "png"`** — always specify
6. **Tables need dual widths** — columnWidths on table AND width on each cell
7. **Table width = content width** — 9026 DXA for A4 with 1" margins
8. **Override built-in styles** — use exact IDs: "Heading1", "Heading2", etc.
9. **Include outlineLevel** — required for TOC (0 for H1, 1 for H2, etc.)
10. **Validate after creation** — always run validate.py

## Quality Checklist
- [ ] FWS header logo appears on every page
- [ ] Footer shows: logo, flyingweb.ie (orange), email, phone, VAT, address, page number
- [ ] All headings use correct sizes and colors per brand spec
- [ ] Tables use DXA widths and render correctly in Google Docs
- [ ] Score tables use color-coded values
- [ ] Sitemap report includes visual tree diagram (Step 1 only)
- [ ] File saved as .docx alongside the .md version
- [ ] Validation passes
