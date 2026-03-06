# FWS Brand Specification — docx Template Values

Extracted from the Flying Web Solutions branded template (`Head letter.docx`).

## Page Layout

| Property | Value | Unit |
|----------|-------|------|
| Page width | 11906 | DXA |
| Page height | 16838 | DXA |
| Top margin | 1440 | DXA (1 inch) |
| Bottom margin | 1440 | DXA (1 inch) |
| Left margin | 1440 | DXA (1 inch) |
| Right margin | 1440 | DXA (1 inch) |
| Content width | 9026 | DXA (page - margins) |
| Header distance | 720 | DXA (0.5 inch) |
| Footer distance | 720 | DXA (0.5 inch) |
| Paper size | A4 | — |

## Typography

### Default Document Font
- **Font family**: Arial
- **Size**: 22 half-points (11pt)
- **Color**: #000000 (black)
- **Line spacing**: 276 (auto spacing = 1.15x)

### Heading Styles

| Style ID | Level | Size (hp) | Size (pt) | Bold | Color | outlineLevel |
|----------|-------|-----------|-----------|------|-------|-------------|
| Heading1 | H1 | 40 | 20 | No | #000000 | 0 |
| Heading2 | H2 | 32 | 16 | No | #000000 | 1 |
| Heading3 | H3 | 28 | 14 | No | #434343 | 2 |
| Heading4 | H4 | 24 | 12 | No | #666666 | 3 |
| Heading5 | H5 | 22 | 11 | No | #666666 | 4 |
| Heading6 | H6 | 22 | 11 | Yes (italic) | #666666 | 5 |
| Title | — | 52 | 26 | No | #000000 | — |
| Subtitle | — | 30 | 15 | No | #666666 | — |

### Heading Spacing

| Style | Before (DXA) | After (DXA) |
|-------|-------------|------------|
| H1 | 400 | 120 |
| H2 | 360 | 120 |
| H3 | 320 | 80 |
| H4 | 280 | 80 |
| Normal | 0 | 200 |

## Colors

| Usage | Hex | Name |
|-------|-----|------|
| FWS Orange (accent) | #b45f06 | Brand orange — used for links, heading accents |
| Body text | #000000 | Black |
| H3 / Footer text | #434343 | Dark gray |
| H4-H6 / Subtitle | #666666 | Medium gray |
| Table header bg | #E8F0FE | Light blue |
| Table border | #CCCCCC | Light gray |
| Table alt row | #F8F9FA | Very light gray |
| Tree diagram bg | #F5F5F5 | Pale gray |
| Battlecard header | #2C3E50 | Dark navy |
| Score high (7+) | #1B7A1B | Green |
| Score medium (4-6) | #b45f06 | Orange (brand) |
| Score low (<4) | #CC0000 | Red |

## Header

- **Content**: FWS logo image only (no text)
- **Image file**: `assets/fws-logo.png`
- **Image dimensions**: 2309813 × 537166 EMU (~2.3" × 0.54")
- **Alignment**: Left-aligned
- **Spacing below**: 200 DXA

## Footer

The footer contains two elements side by side (using tab stops, NOT tables):

### Left Side — Small Logo
- Same `fws-logo.png` but rendered smaller
- Dimensions: 1347788 × 318111 EMU (~1.35" × 0.32")

### Right Side — Contact Block
All text in **Inter** 9pt (18 half-points), color #434343, right-aligned via tab stop.

**Line 1**: `flyingweb.ie` (color: #b45f06, hyperlink) ` | ` `info@flyingweb.ie` (hyperlink)
**Line 2**: `+353 (0) 26 20831` ` | ` `VAT: IE1020644DA`
**Line 3**: `13 Gleann An Fhia, Gurteenroe, Macroom, Co. Cork, P12TF67 - Ireland`
**Line 4**: Page number (centered or right-aligned)

### Footer Separators
Use ` | ` (space-pipe-space) between inline items.

## Table Standards

| Property | Value |
|----------|-------|
| Width type | WidthType.DXA (NEVER percentage) |
| Full width | 9026 DXA |
| Border style | BorderStyle.SINGLE |
| Border size | 1 |
| Border color | #CCCCCC |
| Cell margins | top: 80, bottom: 80, left: 120, right: 120 |
| Shading type | ShadingType.CLEAR (NEVER SOLID) |
| Header row bg | #E8F0FE |
| Header text | Bold |
| Alt row bg | #F8F9FA (optional) |

## Bullet & Number Lists

| Property | Value |
|----------|-------|
| Format (bullets) | LevelFormat.BULLET |
| Bullet char | • |
| Indent left | 720 DXA |
| Hanging indent | 360 DXA |
| Format (numbers) | LevelFormat.DECIMAL |
| Number pattern | %1. |

## Image Notes

- **Logo type**: PNG
- **ImageRun requires**: `type: "png"`, `data`, `transformation`, `altText`
- **altText requires all three**: `title`, `description`, `name`
- Header logo altText: `{ title: "Flying Web Solutions", description: "FWS company logo", name: "fws-logo" }`
