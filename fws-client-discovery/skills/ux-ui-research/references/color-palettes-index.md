# Color Palettes, Index (Progressive Disclosure)

Slim index of every curated palette. Read this first. Use Grep on `color-palettes.md` with the selected ID (e.g., `### PS-1`) to pull the full palette only when needed.

| ID | Name | Industry Fit | Primary | Mood |
|----|------|--------------|---------|------|
| PS-1 | Corporate Trust | Law, Accounting, Consulting | `#1B365D` | authoritative, calm |
| PS-2 | Modern Authority | Tech Consulting, Management | `#0F2027` | sharp, modern |
| HC-1 | Calming Care | Medical, Dental, Therapy | `#2B6CB0` | clinical, trustworthy |
| HC-2 | Warm Wellness | Alternative, Wellness, Mental Health | `#5B8C5A` | earthy, restorative |
| EC-1 | Clean Convert | General Retail E-commerce | `#1A1A2E` | punchy, conversion-led |
| EC-2 | Premium Retail | Luxury, Fashion | `#1C1C1C` | refined, golden |
| TS-1 | Tech Modern | B2B SaaS | `#6C5CE7` | fresh, product-led |
| TS-2 | Developer Focus | Dev Tools, APIs | `#0D1117` | technical, dark-native |
| RF-1 | Warm Appetite | Casual Dining, Cafe | `#8B4513` | cozy, inviting |
| RF-2 | Upscale Dining | Fine Dining, Wine | `#1B1B1B` | elegant, intimate |
| CT-1 | Industrial Strength | Construction, Electrical, Plumbing | `#2C3E50` | sturdy, safety-forward |
| CT-2 | Clean Build | Architecture, Interior Design | `#34495E` | precise, considered |
| CA-1 | Bold Creative | Design Agency, Marketing | `#000000` | punchy, contrast-driven |
| CA-2 | Dark Portfolio | Photography, Film, Art | `#0A0A0A` | cinematic, immersive |
| FI-1 | Trust Finance | Banking, Insurance, Wealth | `#003366` | institutional, secure |

## How to use this index

1. Read this file (small).
2. Pick 1-2 candidate palette IDs based on industry + persona mood.
3. Fetch the full palette row for each candidate using Grep on `color-palettes.md`: search `### [ID]:` to retrieve the full role table (primary, secondary, CTA, background, surface, text, text-light).
4. Upgrade each hex to OKLCH + dark-mode pair per `CLAUDE_DESIGN.md` token schema before emitting.

Do NOT load `color-palettes.md` in full unless comparing 3+ palettes.
