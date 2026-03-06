/**
 * FWS Branded docx Template Builder
 *
 * Usage:
 *   const { buildFwsDocument } = require('./docx-template');
 *   const buffer = await buildFwsDocument({ title, subtitle, sections });
 *   fs.writeFileSync('output.docx', buffer);
 *
 * This is a REFERENCE template. Each research step builds a script
 * that uses these patterns to construct the .docx from its markdown.
 */

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  ImageRun, Header, Footer, AlignmentType, LevelFormat,
  ExternalHyperlink, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, PageBreak, TabStopType, TabStopPosition
} = require('docx');

// ──────────────────────────────────────────────
// BRAND CONSTANTS
// ──────────────────────────────────────────────

const FWS = {
  // Page
  PAGE_WIDTH: 11906,
  PAGE_HEIGHT: 16838,
  MARGIN: 1440,
  CONTENT_WIDTH: 9026, // PAGE_WIDTH - 2 * MARGIN
  HEADER_FOOTER_DIST: 720,

  // Colors
  ORANGE: 'b45f06',
  BLACK: '000000',
  DARK_GRAY: '434343',
  MED_GRAY: '666666',
  TABLE_HEADER_BG: 'E8F0FE',
  TABLE_BORDER: 'CCCCCC',
  TABLE_ALT_ROW: 'F8F9FA',
  TREE_BG: 'F5F5F5',
  BATTLECARD_HEADER: '2C3E50',
  SCORE_HIGH: '1B7A1B',
  SCORE_MED: 'b45f06',
  SCORE_LOW: 'CC0000',

  // Typography
  FONT: 'Arial',
  FOOTER_FONT: 'Inter',
  DEFAULT_SIZE: 22, // 11pt in half-points
  H1_SIZE: 40,      // 20pt
  H2_SIZE: 32,      // 16pt
  H3_SIZE: 28,      // 14pt
  H4_SIZE: 24,      // 12pt
  FOOTER_SIZE: 18,   // 9pt
  ACCENT_SIZE: 20,   // 10pt

  // Line spacing
  LINE_SPACING: 276,

  // Header logo EMU dimensions
  HEADER_LOGO_W: 2309813,
  HEADER_LOGO_H: 537166,
  // Footer logo EMU dimensions
  FOOTER_LOGO_W: 1347788,
  FOOTER_LOGO_H: 318111,

  // Contact info
  WEBSITE: 'flyingweb.ie',
  WEBSITE_URL: 'http://flyingweb.ie',
  EMAIL: 'info@flyingweb.ie',
  EMAIL_URL: 'mailto:info@flyingweb.ie',
  PHONE: '+353 (0) 26 20831',
  VAT: 'VAT: IE1020644DA',
  ADDRESS: '13 Gleann An Fhia, Gurteenroe, Macroom, Co. Cork, P12TF67 - Ireland',
};

// ──────────────────────────────────────────────
// LOGO LOADER
// ──────────────────────────────────────────────

function loadLogo(pluginRoot) {
  const logoPath = path.join(pluginRoot, 'skills', 'docx-export', 'assets', 'fws-logo.png');
  return fs.readFileSync(logoPath);
}

// ──────────────────────────────────────────────
// STYLES
// ──────────────────────────────────────────────

const fwsStyles = {
  default: {
    document: {
      run: {
        font: FWS.FONT,
        size: FWS.DEFAULT_SIZE,
        color: FWS.BLACK,
      },
      paragraph: {
        spacing: { after: 200, line: FWS.LINE_SPACING },
      },
    },
  },
  paragraphStyles: [
    {
      id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
      run: { size: FWS.H1_SIZE, font: FWS.FONT, color: FWS.BLACK },
      paragraph: { spacing: { before: 400, after: 120 }, outlineLevel: 0 },
    },
    {
      id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
      run: { size: FWS.H2_SIZE, font: FWS.FONT, color: FWS.BLACK },
      paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 1 },
    },
    {
      id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
      run: { size: FWS.H3_SIZE, font: FWS.FONT, color: FWS.DARK_GRAY },
      paragraph: { spacing: { before: 320, after: 80 }, outlineLevel: 2 },
    },
    {
      id: 'Heading4', name: 'Heading 4', basedOn: 'Normal', next: 'Normal', quickFormat: true,
      run: { size: FWS.H4_SIZE, font: FWS.FONT, color: FWS.MED_GRAY },
      paragraph: { spacing: { before: 280, after: 80 }, outlineLevel: 3 },
    },
  ],
};

// ──────────────────────────────────────────────
// NUMBERING (BULLETS + NUMBERS)
// ──────────────────────────────────────────────

const fwsNumbering = {
  config: [
    {
      reference: 'fws-bullets',
      levels: [{
        level: 0,
        format: LevelFormat.BULLET,
        text: '\u2022',
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } },
      }],
    },
    {
      reference: 'fws-numbers',
      levels: [{
        level: 0,
        format: LevelFormat.DECIMAL,
        text: '%1.',
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } },
      }],
    },
  ],
};

// ──────────────────────────────────────────────
// TABLE HELPERS
// ──────────────────────────────────────────────

const fwsBorder = { style: BorderStyle.SINGLE, size: 1, color: FWS.TABLE_BORDER };
const fwsBorders = { top: fwsBorder, bottom: fwsBorder, left: fwsBorder, right: fwsBorder };
const fwsCellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function fwsTableCell(content, opts = {}) {
  const { width, isHeader, isAltRow, color } = opts;
  const children = Array.isArray(content) ? content : [
    new Paragraph({
      children: [new TextRun({
        text: String(content),
        bold: isHeader || false,
        color: color || (isHeader ? FWS.BLACK : FWS.BLACK),
        font: FWS.FONT,
        size: FWS.DEFAULT_SIZE,
      })],
    }),
  ];

  return new TableCell({
    borders: fwsBorders,
    width: width ? { size: width, type: WidthType.DXA } : undefined,
    shading: {
      fill: isHeader ? FWS.TABLE_HEADER_BG : (isAltRow ? FWS.TABLE_ALT_ROW : 'FFFFFF'),
      type: ShadingType.CLEAR,
    },
    margins: fwsCellMargins,
    verticalAlign: VerticalAlign.CENTER,
    children,
  });
}

function fwsTable(headers, rows, columnWidths) {
  const totalWidth = columnWidths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths,
    rows: [
      new TableRow({
        children: headers.map((h, i) => fwsTableCell(h, { width: columnWidths[i], isHeader: true })),
      }),
      ...rows.map((row, ri) =>
        new TableRow({
          children: row.map((cell, ci) => fwsTableCell(cell, { width: columnWidths[ci], isAltRow: ri % 2 === 1 })),
        })
      ),
    ],
  });
}

// ──────────────────────────────────────────────
// SCORE HELPER
// ──────────────────────────────────────────────

function scoreColor(value) {
  const num = parseFloat(value);
  if (isNaN(num)) return FWS.BLACK;
  if (num >= 7) return FWS.SCORE_HIGH;
  if (num >= 4) return FWS.SCORE_MED;
  return FWS.SCORE_LOW;
}

// ──────────────────────────────────────────────
// HEADER + FOOTER BUILDERS
// ──────────────────────────────────────────────

function fwsHeader(logoData) {
  return new Header({
    children: [
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new ImageRun({
            type: 'png',
            data: logoData,
            transformation: {
              width: Math.round(FWS.HEADER_LOGO_W / 914400 * 96), // EMU to pixels at 96dpi
              height: Math.round(FWS.HEADER_LOGO_H / 914400 * 96),
            },
            altText: { title: 'Flying Web Solutions', description: 'FWS company logo', name: 'fws-logo' },
          }),
        ],
      }),
    ],
  });
}

function fwsFooter(logoData) {
  const sep = ' | ';
  const footerRun = (text, opts = {}) => new TextRun({
    text,
    font: FWS.FOOTER_FONT,
    size: FWS.FOOTER_SIZE,
    color: opts.color || FWS.DARK_GRAY,
    bold: opts.bold || false,
    ...opts,
  });

  return new Footer({
    children: [
      // Line 1: Logo + website | email (using tab stop for right alignment)
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        spacing: { before: 200, after: 40 },
        children: [
          new ImageRun({
            type: 'png',
            data: logoData,
            transformation: {
              width: Math.round(FWS.FOOTER_LOGO_W / 914400 * 96),
              height: Math.round(FWS.FOOTER_LOGO_H / 914400 * 96),
            },
            altText: { title: 'Flying Web Solutions', description: 'FWS footer logo', name: 'fws-footer-logo' },
          }),
          footerRun('\t'),
          new ExternalHyperlink({
            children: [footerRun(FWS.WEBSITE, { color: FWS.ORANGE })],
            link: FWS.WEBSITE_URL,
          }),
          footerRun(sep),
          new ExternalHyperlink({
            children: [footerRun(FWS.EMAIL)],
            link: FWS.EMAIL_URL,
          }),
        ],
      }),
      // Line 2: Phone | VAT
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 40 },
        children: [
          footerRun(FWS.PHONE),
          footerRun(sep),
          footerRun(FWS.VAT),
        ],
      }),
      // Line 3: Address
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 40 },
        children: [footerRun(FWS.ADDRESS)],
      }),
      // Line 4: Page number
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 0 },
        children: [
          footerRun('Page '),
          new TextRun({
            children: [PageNumber.CURRENT],
            font: FWS.FOOTER_FONT,
            size: FWS.FOOTER_SIZE,
            color: FWS.DARK_GRAY,
          }),
        ],
      }),
    ],
  });
}

// ──────────────────────────────────────────────
// HEADING ACCENT (:: keyword)
// ──────────────────────────────────────────────

function headingAccent(text) {
  return new Paragraph({
    spacing: { before: 400, after: 40 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: FWS.FONT,
        size: FWS.ACCENT_SIZE,
        color: FWS.ORANGE,
        allCaps: true,
      }),
    ],
  });
}

// ──────────────────────────────────────────────
// DOCUMENT BUILDER
// ──────────────────────────────────────────────

/**
 * Build a complete FWS branded document.
 *
 * @param {Object} opts
 * @param {string} opts.pluginRoot - Path to plugin root (for loading logo)
 * @param {string} opts.title - Document title (rendered as Title style)
 * @param {string} [opts.subtitle] - Optional subtitle
 * @param {string} [opts.date] - Optional date string
 * @param {Array} opts.children - Array of docx Paragraph/Table elements
 * @returns {Promise<Buffer>} - The .docx file buffer
 */
async function buildFwsDocument({ pluginRoot, title, subtitle, date, children }) {
  const logoData = loadLogo(pluginRoot);

  const titleChildren = [
    new Paragraph({
      spacing: { before: 0, after: 120 },
      children: [new TextRun({ text: title, font: FWS.FONT, size: 52, color: FWS.BLACK })],
    }),
  ];

  if (subtitle) {
    titleChildren.push(new Paragraph({
      spacing: { after: 80 },
      children: [new TextRun({ text: subtitle, font: FWS.FONT, size: 30, color: FWS.MED_GRAY })],
    }));
  }

  if (date) {
    titleChildren.push(new Paragraph({
      spacing: { after: 200 },
      children: [new TextRun({ text: date, font: FWS.FONT, size: FWS.DEFAULT_SIZE, color: FWS.MED_GRAY })],
    }));
  }

  const doc = new Document({
    styles: fwsStyles,
    numbering: fwsNumbering,
    sections: [{
      properties: {
        page: {
          size: { width: FWS.PAGE_WIDTH, height: FWS.PAGE_HEIGHT },
          margin: {
            top: FWS.MARGIN,
            right: FWS.MARGIN,
            bottom: FWS.MARGIN,
            left: FWS.MARGIN,
            header: FWS.HEADER_FOOTER_DIST,
            footer: FWS.HEADER_FOOTER_DIST,
          },
        },
      },
      headers: { default: fwsHeader(logoData) },
      footers: { default: fwsFooter(logoData) },
      children: [...titleChildren, ...children],
    }],
  });

  return Packer.toBuffer(doc);
}

// ──────────────────────────────────────────────
// EXPORTS
// ──────────────────────────────────────────────

module.exports = {
  FWS,
  fwsStyles,
  fwsNumbering,
  fwsBorder,
  fwsBorders,
  fwsCellMargins,
  fwsTableCell,
  fwsTable,
  fwsHeader,
  fwsFooter,
  headingAccent,
  scoreColor,
  loadLogo,
  buildFwsDocument,
};
