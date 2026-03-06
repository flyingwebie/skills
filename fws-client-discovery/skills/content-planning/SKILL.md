---
name: content-planning
description: >
  Synthesize discovery findings into an ICE-prioritized content strategy with a 90-day
  execution calendar. Use as the final step of discovery or for standalone content planning.
  Triggers: "content plan", "content calendar", "content strategy", "90-day plan".
version: 0.1.0
---

# Content Planning — Gap Analysis + 90-Day Calendar

## Purpose
Synthesize all discovery findings into an actionable content strategy with ICE-prioritized content pieces and a 90-day execution calendar. Bridges the gap between research (what we know) and execution (what we build).

## When to Use
- Step 7 (final step) of FWS Discovery workflow
- When building a content roadmap for a new or redesigned site
- When prioritizing what to write/build first

## Inputs Required
This skill uses ALL previous discovery steps:
1. **Sitemap analysis** — existing pages, gaps, technical issues
2. **Competitor research** — content they have that we don't
3. **Buyer personas** — what content each persona needs at each stage
4. **Keyword research** — topic clusters, keyword-to-page mapping
5. **UX/UI research** — page types, design patterns
6. **FAQ research** — questions to answer, schema opportunities
7. **Meeting transcription** — client priorities and constraints

**Read the full `discovery-context.md` before starting this step.**

## Workflow

### Step 1: Content Audit Summary
Consolidate findings into a content inventory:

**Existing Content Assessment** (from sitemap analysis):
| Page | Status | Action Needed | Priority |
|------|--------|--------------|----------|
| | Keep as-is / Optimize / Rewrite / Remove | Specific changes | High/Med/Low |

**Content Gap Inventory** (from all steps):
| Gap | Source | Content Type | Target Keyword | Persona |
|-----|--------|-------------|---------------|---------|
| | Competitor/Keyword/Persona/FAQ | Blog/Service/Landing/Guide | | |

### Step 2: Content Type Matrix
Map content needs to page types and buyer journey stages:

| Content Type | Count Needed | Purpose | Journey Stage | Avg. Effort |
|-------------|-------------|---------|--------------|------------|
| Service Pages | | Convert visitors | Decision | Medium |
| Blog Posts | | Attract organic traffic | Awareness | Medium |
| Landing Pages | | Campaign conversion | Consideration | High |
| Case Studies | | Build trust + proof | Consideration → Decision | High |
| Guides/How-to | | Establish expertise | Awareness → Consideration | High |
| FAQ Pages | | Answer questions + SEO | All stages | Low |
| Comparison Pages | | Capture commercial intent | Consideration | Medium |
| Location Pages | | Local SEO | Decision | Low |
| About/Team | | Build trust | Consideration | Low |

### Step 3: ICE Priority Scoring
Score every content piece using ICE framework:

**Impact (1-10)**: How much will this content move the needle?
| Score | Meaning |
|-------|---------|
| 9-10 | Direct revenue impact, targets high-value commercial keyword |
| 7-8 | Significant traffic or conversion potential |
| 5-6 | Moderate SEO or brand value |
| 3-4 | Nice to have, supports other content |
| 1-2 | Minimal impact |

**Confidence (1-10)**: How sure are we this will work?
| Score | Meaning |
|-------|---------|
| 9-10 | Proven keyword, clear search intent, competitor validated |
| 7-8 | Strong signals, good keyword data |
| 5-6 | Moderate evidence, some assumptions |
| 3-4 | Speculative, limited data |
| 1-2 | Purely experimental |

**Effort (1-10)**: How hard is it to create?
| Score | Meaning |
|-------|---------|
| 1-2 | Quick page, template-based, minimal research |
| 3-4 | Standard page, some original content needed |
| 5-6 | Substantial content, research or design required |
| 7-8 | Complex page, multiple stakeholders, custom design |
| 9-10 | Major project, extensive research, professional assets |

**ICE Score = (Impact × Confidence) / Effort**

### Step 4: 90-Day Content Calendar

#### Month 1: Foundation (Weeks 1-4)
**Focus**: High-impact, quick-win content that establishes the site's core.

**Priority criteria for Month 1**:
- ICE score 7+ (highest priority items)
- Service pages (core conversion pages)
- Homepage optimization
- Key technical SEO fixes
- FAQ page with schema

**Deliverables per week**: 1-2 content pieces

#### Month 2: Growth (Weeks 5-8)
**Focus**: Build out topic clusters and supporting content.

**Priority criteria for Month 2**:
- ICE score 5-7
- Blog posts targeting informational keywords
- Case studies and social proof pages
- Comparison/alternative pages (commercial intent)
- Location pages (if local business)

**Deliverables per week**: 2-3 content pieces

#### Month 3: Optimization (Weeks 9-12)
**Focus**: Fill gaps, optimize existing content, build authority.

**Priority criteria for Month 3**:
- ICE score 3-5
- Supporting blog content (spoke pages)
- Guide/resource content (link-worthy)
- Content refresh on Month 1 pages based on data
- Internal linking optimization

**Deliverables per week**: 2-3 content pieces

### Step 5: Per-Page Content Specifications
For each content piece in the calendar, define:

| Spec | Requirement |
|------|------------|
| Primary keyword | One target keyword |
| Secondary keywords | 2-5 related terms |
| Search intent | Informational / Commercial / Transactional |
| Word count target | Based on SERP analysis |
| H1 | Include primary keyword |
| Meta title | 50-60 chars, keyword-front |
| Meta description | 150-160 chars, compelling CTA |
| Schema type | FAQ, HowTo, Article, Service, etc. |
| Internal links | Min 3 relevant links |
| CTA | Aligned to buyer journey stage |
| EEAT signals | Author bio, sources, credentials |
| GEO optimization | Direct answer in first 150 words |

### Step 6: Topic Cluster Linking Strategy
Map internal linking between content pieces:

```
Hub: [Service Page - Commercial keyword]
├── Spoke: [Blog Post - Informational keyword] → links to Hub
├── Spoke: [FAQ Section - Question keyword] → links to Hub
├── Spoke: [Case Study - Social proof] → links to Hub
├── Spoke: [Guide - Long-tail keyword] → links to Hub
└── Hub links to all Spokes
```

**Linking rules**:
- Every spoke links to its hub (and vice versa)
- Related hubs cross-link to each other
- Every page has 3+ internal links minimum
- Use descriptive anchor text (not "click here")
- New content links to existing relevant pages

### Step 7: Quality Benchmarks
Define measurable quality standards:

| Metric | Minimum | Target | How to Measure |
|--------|---------|--------|---------------|
| CORE-EEAT Score | 60/100 | 80+ | CORE-EEAT checklist |
| Readability (Flesch) | 50 | 60-70 | Hemingway/readability tool |
| Keyword Coverage | 80% | 95% | Primary + secondary keywords |
| Internal Links | 3 | 5+ | Per page count |
| Schema Markup | Required pages | All pages | Schema validator |
| Meta Data | All pages | Optimized | Title + description present |
| Mobile Friendly | Pass | Excellent | Google Mobile Test |

Reference shared `references/core-eeat-benchmark.md` for the full 80-item quality framework.

### Step 8: Content Production Notes
Practical guidance for the content team:

**Workflow per content piece**:
1. Brief (keyword, intent, outline, word count target)
2. Draft (writer creates first draft)
3. SEO review (keyword placement, meta data, internal links)
4. Client review (accuracy, brand voice)
5. Design (imagery, layout, CTA design)
6. Publish (schema, technical setup)
7. Index (submit to Search Console, check indexing)

**Resource estimates**:
| Content Type | Avg. Hours | Typical Owner |
|-------------|-----------|--------------|
| Service Page | 4-8h | Copywriter + designer |
| Blog Post (800w) | 3-5h | Copywriter |
| Blog Post (1500w+) | 6-10h | Copywriter + SME |
| Case Study | 5-8h | Copywriter + client |
| Landing Page | 6-10h | Copywriter + designer |
| FAQ Page | 2-4h | Copywriter |

### Step 9: Update Discovery Context
Append to `discovery-context.md`:
- Total content pieces planned (by type)
- Month 1 priority list (top 5)
- Resource estimate summary
- Key dependencies or blockers
- Recommended content production workflow

## Output
Write findings to `08-Content-Plan.md` using the template.

### Generate Branded .docx
After writing the markdown report:
- Read @${CLAUDE_PLUGIN_ROOT}/skills/docx-export/SKILL.md
- Convert `08-Content-Plan.md` to `08-Content-Plan.docx` using the FWS branded template
- Use color-coded ICE scores in content priority tables
- Calendar section should use clean table formatting with month headers
- Validate the .docx file

## Quality Checklist
- [ ] All previous discovery findings synthesized
- [ ] Content gap inventory complete
- [ ] ICE scoring applied to all content pieces
- [ ] 90-day calendar built with weekly deliverables
- [ ] Per-page content specifications defined for Month 1
- [ ] Topic cluster linking strategy mapped
- [ ] Quality benchmarks set
- [ ] Resource estimates provided
- [ ] Discovery context updated with content plan

## Anti-Patterns
- **Don't**: Plan more content than the team can produce (be realistic)
- **Don't**: Front-load all hard content in Month 1 (mix quick wins with big projects)
- **Don't**: Skip the linking strategy (internal links are the backbone of SEO)
- **Don't**: Set quality benchmarks without measurement methods
- **Don't**: Plan content without keyword assignments (every page needs a target)
