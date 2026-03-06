# FWS Client Discovery — Project Context

## What This Plugin Does

This plugin runs a 9-step client discovery workflow for Flying Web Solutions (flyingweb.ie). It takes a client website URL and optionally a meeting transcription, then executes sequential research steps — each building on the previous — to produce a complete set of research reports, production-ready website copy, and a content strategy.

## Workflow Architecture

### Phase A: Research + Page Content (Steps 1-7)
Researches the client's market, audience, and competitors, then produces production-ready website page content. By the end of Phase A the full website copy is ready.

| Step | Command | Output (markdown) | Output (.docx) | What It Does |
|------|---------|-------------------|-----------------|-------------|
| 0 | (auto) | `01-Client-Brief.md` | `01-Client-Brief.docx` | Extract signals from meeting transcript |
| 1 | `/sitemap` | `02-Sitemap-Report.md` | `02-Sitemap-Report.docx` | Crawl site structure, inventory pages, find gaps |
| 2 | `/competitors` | `03-Competitor-Report.md` | `03-Competitor-Report.docx` | Identify 3-5 competitors, build battlecards |
| 3 | `/personas` | `04-Buyer-Personas.md` | `04-Buyer-Personas.docx` | Build buyer personas with APEX Value Equation |
| 4 | `/keywords` | `05-Keyword-Research.md` | `05-Keyword-Research.docx` | Discover keywords, cluster by intent, ICE score |
| 5 | `/ux-research` | `06-UX-UI-Research.md` | `06-UX-UI-Research.docx` | Design system: colors, fonts, UI style |
| 6 | `/faqs` | `07-FAQ-Research.md` | `07-FAQ-Research.docx` | Mine FAQs from PAA, competitors, personas |
| 7 | `/copywrite` | `pages/*.md` | — (markdown only) | Write all website pages with Pencil.dev prompts |

### Phase B: Content Strategy + Blog (Steps 8-9)
Plans ongoing content strategy and produces blog posts for SEO/GEO growth.

| Step | Command | Output (markdown) | Output (.docx) | What It Does |
|------|---------|-------------------|-----------------|-------------|
| 8 | `/content-plan` | `08-Content-Plan.md` | `08-Content-Plan.docx` | ICE-scored plan + 90-day calendar |
| 9 | `/blog-content` | `pages/blog/*.md` | — (markdown only) | Write blog posts from content plan |

### Master Report
| Output | What It Is |
|--------|-----------|
| `00-Discovery-Report.md` / `.docx` | Executive summary of all 9 steps — the first thing clients see |

## Context Chain

Every step reads and writes to `discovery-context.md`. This markdown file is the shared memory between steps. It accumulates findings so that later steps can reference earlier research (e.g., keywords inform page content, personas inform messaging).

**Important**: The `.md` files are the source of truth for Claude's context. The `.docx` files are branded copies for client review — they do not feed back into the workflow.

## Dual Output Format

- **Markdown (.md)**: Used for Claude's context chain, developer handoff, and page content files
- **Word (.docx)**: Branded with FWS template (logo, footer, heading styles) for client review on Google Drive
- Page content files (Step 7) and blog posts (Step 9) are **markdown only** — they go to developers, not clients

## File Structure Per Project

```
[Client-Name]/01-Discovery/
├── discovery-context.md          ← Claude's shared context (internal)
├── 00-Discovery-Report.md        ← Master summary
├── 00-Discovery-Report.docx      ← Client-facing master summary
├── 01-Client-Brief.md
├── 01-Client-Brief.docx
├── 02-Sitemap-Report.md
├── 02-Sitemap-Report.docx
├── 03-Competitor-Report.md
├── 03-Competitor-Report.docx
├── 04-Buyer-Personas.md
├── 04-Buyer-Personas.docx
├── 05-Keyword-Research.md
├── 05-Keyword-Research.docx
├── 06-UX-UI-Research.md
├── 06-UX-UI-Research.docx
├── 07-FAQ-Research.md
├── 07-FAQ-Research.docx
├── 08-Content-Plan.md
├── 08-Content-Plan.docx
└── pages/
    ├── homepage.md
    ├── about.md
    ├── services.md
    ├── ...
    └── blog/
        ├── post-1.md
        ├── post-2.md
        └── ...
```

---

## Website Build Process

After discovery is complete, the deliverables feed directly into the website design and build phase. FWS uses three tools flexibly depending on the project:

### Pencil.dev
Every page content file (Step 7) includes a **custom Pencil.dev prompt** at the top. This prompt is specifically crafted for that page and includes:
- Wireframe structure hints (hero, sections, CTAs)
- Content to use (headings, body text, testimonials)
- Design direction from UX research (Step 5)
- Persona context for layout decisions

**How to use**: Copy the Pencil prompt from the page markdown file → paste into Pencil.dev → generate UI concepts → iterate.

**When to use Pencil.dev**: For initial concept generation, rapid prototyping, and exploring layout options before committing to a design tool.

### Figma
Use Figma when the project requires:
- Detailed component design and design systems
- Client presentations with polished mockups
- Handoff with precise specs for developers
- Multi-page consistency and shared styles

**Feed from discovery**:
- UX/UI Research (Step 5) → color palette, font pairings, UI style recommendation, component patterns
- Buyer Personas (Step 3) → layout decisions (e.g., analytical personas need data-heavy layouts)
- Competitor Research (Step 2) → competitive UX benchmarks to match or exceed

**Workflow**: Pencil concepts → import into Figma → build component library → design all pages → export

### Google Stitch
Use Google Stitch for:
- Rapid layout assembly from pre-built components
- Projects that need fast turnaround
- Simpler sites where Figma-level detail isn't needed
- Quick iteration on structure before detailed design

**Feed from discovery**:
- Sitemap (Step 1) → page structure and hierarchy
- Page content files (Step 7) → actual copy to drop into layouts
- UX/UI Research (Step 5) → style direction

**Workflow**: Sitemap → Stitch layout assembly → populate with page content → refine

### Choosing the Right Tool

There is no fixed pipeline. The choice depends on the project:

| Scenario | Recommended Flow |
|----------|-----------------|
| Full rebrand + new website | Pencil → Figma → Code |
| Quick marketing site | Pencil → Stitch → Code |
| Complex web app | Figma → Code (skip Pencil) |
| Simple content site | Stitch → Code (skip Pencil) |
| Need client approval on concepts | Pencil → Client review → Figma or Stitch |

### How Discovery Outputs Feed the Build

| Discovery Output | Build Phase Input |
|-----------------|------------------|
| Sitemap Report | Site architecture, page hierarchy, navigation structure |
| Competitor Report | UX benchmarks, feature parity, differentiation targets |
| Buyer Personas | Layout decisions, CTA placement, trust signal positioning |
| Keyword Research | Page titles, heading structure, content organization |
| UX/UI Research | Color palette, fonts, UI style, component patterns |
| FAQ Research | FAQ sections on pages, schema markup implementation |
| Page Content | Actual copy for every page — headings, body, CTAs, metadata |
| Content Plan | Blog section architecture, category structure, internal linking |

---

## Key Frameworks Used

| Framework | Where Used | What It Does |
|-----------|-----------|-------------|
| APEX Value Equation | Personas (Step 3) | Maps Dream Outcome × Likelihood / Time × Effort |
| CORE-EEAT | All content steps | Content quality benchmark (Experience, Expertise, Authority, Trust) |
| CITE | Competitors (Step 2) | Domain rating: Credibility, Infrastructure, Trust, Engagement |
| ICE | Keywords (Step 4), Content Plan (Step 8) | Priority scoring: Impact × Confidence × Effort |
| Heading Accent (`::`) | Page content (Step 7), Blog (Step 9) | Non-heading keyword element before H1 |

## Important Rules

1. **Phase A does NOT generate blog content** — blog posts are Phase B only
2. **Markdown is source of truth** — .docx is for client review, not for Claude's context
3. **Each step reads discovery-context.md** before starting and updates it after finishing
4. **Sitemap report must include a visual tree diagram** in the .docx version
5. **Page content files include Pencil.dev prompts** — these are essential for the build phase
6. **No step can be skipped** in the full `/discovery` flow — each builds on the previous
