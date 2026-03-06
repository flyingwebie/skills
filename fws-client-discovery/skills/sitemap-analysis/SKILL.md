---
name: sitemap-analysis
description: >
  Crawl and analyze a client's website structure, page inventory, technical SEO health,
  and content gaps. Use when auditing a site before redesign or planning new site architecture.
  Triggers: "sitemap", "site audit", "page analysis", "site structure", "crawl site".
version: 0.1.0
---

# Sitemap & Page Analysis

## Purpose
Crawl and analyze a client's existing website structure to understand current pages, content gaps, technical SEO health, and information architecture. This establishes the baseline for all subsequent discovery steps.

## When to Use
- Step 1 of FWS Discovery workflow
- When auditing an existing site before a redesign
- When planning a migration or content restructuring

## Inputs Required
1. **Client website URL** — the root domain to analyze
2. **Meeting transcription findings** — from Step 0 (services offered, target audience)
3. **Industry** — from discovery context

## Workflow

### Step 1: Sitemap Discovery
1. Check for XML sitemap at common locations:
   - `/sitemap.xml`
   - `/sitemap_index.xml`
   - `/robots.txt` (for sitemap directives)
2. If no XML sitemap found, crawl from homepage following internal links
3. Use `~~SEO tool` if connected for comprehensive crawl data

### Step 2: Page Inventory
Catalog every page found and classify by type:

| Page Type | Examples | Priority |
|-----------|----------|----------|
| Homepage | / | Critical |
| Service Pages | /services/*, /what-we-do/* | Critical |
| About/Team | /about, /team, /our-story | High |
| Contact | /contact, /get-in-touch | High |
| Blog/Articles | /blog/*, /news/* | Medium |
| Case Studies | /portfolio/*, /work/*, /case-studies/* | High |
| Landing Pages | Campaign-specific pages | Medium |
| Legal/Policy | /privacy, /terms, /cookies | Low |
| Utility | /404, /search, /sitemap | Low |

For each page, record:
- URL path
- Page title (from `<title>` tag)
- Meta description (if present)
- H1 heading
- Word count estimate
- Last modified date (if available)
- Internal links count (in/out)

### Step 3: Structural Analysis

#### Site Depth Analysis
| Depth | Pages | Examples |
|-------|-------|---------|
| Level 0 (root) | | Homepage |
| Level 1 | | Main nav pages |
| Level 2 | | Sub-pages |
| Level 3+ | | Deep pages |

**Flag**: Any critical page deeper than Level 2 needs architectural attention.

#### Navigation Assessment
- Primary navigation items and structure
- Footer navigation
- Breadcrumb implementation
- Internal linking patterns
- Orphan pages (no internal links pointing to them)

#### Technical SEO Quick Check
| Element | Status | Notes |
|---------|--------|-------|
| XML Sitemap | present/missing | |
| Robots.txt | present/missing | |
| SSL/HTTPS | yes/no | |
| Mobile responsive | yes/no | |
| Page speed (estimated) | fast/medium/slow | |
| Canonical tags | present/missing | |
| Schema markup | present/missing | |
| 404 handling | custom/default | |
| Redirect chains | found/none | |

### Step 4: Content Gap Analysis
Based on industry benchmarks and competitor norms, identify:

**Missing critical pages**:
- Service pages that should exist (based on meeting notes)
- Location pages (if local business)
- FAQ page
- Case studies / portfolio
- About / team pages
- Testimonials page
- Pricing page (if applicable)

**Thin content pages** (< 300 words on important pages)

**Duplicate/overlapping content** (pages targeting similar topics)

### Step 5: Page-Level SEO Assessment
For the top 10 most important pages, assess:

| Element | Status | Recommendation |
|---------|--------|---------------|
| Title tag | | Optimal: 50-60 chars, keyword included |
| Meta description | | Optimal: 150-160 chars, compelling |
| H1 | | One per page, includes target keyword |
| H2-H3 structure | | Logical hierarchy |
| Image alt text | | Descriptive, keyword-relevant |
| Internal links | | Min 3 relevant links |
| Schema markup | | Appropriate type for page |
| URL structure | | Clean, descriptive, keyword-relevant |

### Step 6: Update Discovery Context
Append to `discovery-context.md`:
- Total page count by type
- Top 5 content gaps identified
- Technical SEO issues found
- Current keyword targets (from title tags)
- Site architecture summary (flat vs deep)
- Recommended new pages

## Output
Write findings to `02-Sitemap-Report.md` using the template.

### Generate Branded .docx
After writing the markdown report:
- Read @${CLAUDE_PLUGIN_ROOT}/skills/docx-export/SKILL.md
- Convert `02-Sitemap-Report.md` to `02-Sitemap-Report.docx` using the FWS branded template
- **IMPORTANT**: The sitemap .docx MUST include a visual tree diagram showing the full site hierarchy with box-drawing characters (├── │ └──) in Courier New monospace. See the docx-export SKILL.md for rendering details.
- Validate the .docx file

## Quality Checklist
- [ ] All accessible pages cataloged with URL, title, type
- [ ] Missing critical pages identified against industry norms
- [ ] Technical SEO quick check completed
- [ ] Content gaps flagged with priority
- [ ] Page-level SEO assessed for top 10 pages
- [ ] Discovery context updated with sitemap findings

## When No Website Exists
If the client doesn't have a website yet:
1. Skip Steps 1-3 (no site to analyze)
2. Focus on Step 4 — build a recommended sitemap from scratch
3. Use competitor sites as structure references
4. Recommend a minimum viable sitemap based on industry and services
5. Still assess what pages are critical for launch vs. phase 2

## Reference
- See `references/page-type-benchmarks.md` for industry-specific page requirements
- See shared `references/core-eeat-benchmark.md` for content quality standards
