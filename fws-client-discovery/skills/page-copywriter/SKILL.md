---
name: page-copywriter
description: >
  Generate production-ready website page content as markdown files. Each file contains
  full SEO/GEO-optimized copy with H1-H3 hierarchy, FAQs, quotes, CTAs, and metadata.
  Use after completing discovery workflow.
  Triggers: "copywrite", "page content", "website copy", "write pages", "generate content".
version: 0.2.0
---

# Page Copywriter, Production-Ready Website Content

## Purpose
Generate complete, copy-paste-ready website page content as individual markdown files. Each page is fully optimized for SEO + GEO (AI citation), written in the client's brand voice and persona tone.

## When to Use
- After completing Steps 1-7 of the FWS Discovery workflow
- When the client needs actual website copy for all core pages
- When handing off to designers or developers

## CRITICAL: Prerequisites
This skill REQUIRES completed discovery data. Before running, verify that `discovery-context.md` contains populated data for:
- Step 0: Client brief (business name, industry, goals, brand signals)
- Step 1: Sitemap (page inventory, gaps)
- Step 3: Personas (names, dream outcomes, tone preferences)
- Step 4: Keywords (clusters, keyword-to-page mapping)
- Step 5: UX/UI (design style, colors, typography)
- Step 6: FAQs (prioritized questions by topic)
- Step 7: Content plan (ICE-scored pages, specifications)

If any step is missing, warn the user and recommend running it first.

## What Each Page File Contains

Every generated markdown file follows this exact structure:

```markdown
<!-- SEO METADATA -->
<!-- title: [50-60 chars] -->
<!-- meta_description: [150-160 chars] -->
<!-- og_title: [Same as title or variant] -->
<!-- og_description: [Same as meta or variant] -->
<!-- schema_type: [WebPage|Service|FAQPage|AboutPage|ContactPage|Article|HowTo|LocalBusiness] -->
<!-- canonical: /[url-path] -->
<!-- primary_keyword: [target keyword] -->
<!-- secondary_keywords: [comma-separated] -->

<!-- GEO FRESHNESS (REQUIRED, feeds JSON-LD datePublished/dateModified) -->
<!-- published: YYYY-MM-DD -->
<!-- updated: YYYY-MM-DD -->

<!-- AUTHOR (REQUIRED for E-E-A-T, rendered in author box + Person schema) -->
<!-- author_name: [Full Name] -->
<!-- author_title: [Role / Expertise] -->
<!-- author_url: /about/[slug] -->
<!-- author_image: /assets/authors/[slug].jpg -->

<!-- ANSWER-FIRST STRUCTURE (for AI search extraction) -->
<!-- answer_type: definitive | qualified | comparative -->
<!-- answer_summary: [1-sentence self-contained answer to the page's primary query] -->

<!-- ENTITY (REQUIRED, disambiguates "we" for LLMs and maps to Organization/LocalBusiness/Person) -->
<!-- entity_type: Organization | LocalBusiness | Person | Place -->
<!-- entity_name: [Exact brand/person/place name] -->
<!-- entity_sameas: [comma-separated URLs, LinkedIn, Wikipedia, Crunchbase, etc.] -->

<!-- FACT SOURCES (REQUIRED when page makes factual claims, LLM citation hooks) -->
<!-- fact_sources:
- claim: "Short paraphrase"
  source_url: "https://..."
  source_title: "..."
  accessed: "YYYY-MM-DD"
-->

<!-- CHUNK ID (for RAG-friendly retrieval) -->
<!-- chunk_id: [page-slug]_[section] -->

:: Primary Keyword, 2-5 words

# H1: [Natural, Benefit-Driven Headline With Keyword]

[ANSWER FIRST, 1 definitive sentence answering the page's primary query, matches answer_summary above.]

[Evidence paragraph, 2-3 sentences with specific data points, names, numbers. Feeds LLM quotability.]

[Context paragraph, expand scope, link to [related pillar](./...md) and [supporting pages](./...md).]

## H2: [Section heading]

[Content paragraphs, lists, data points...]

### H3: [Subsection if needed]

[Supporting detail...]

> "[Relevant quote or testimonial]"
>, [Attribution]

---

## Frequently Asked Questions

### [Question 1]
[Direct answer first sentence. Supporting detail. Internal link.]

### [Question 2]
[...]

---

## [Call-to-Action Section]
[CTA copy with clear next step]

---

## About the author

**[Author Name]**, [Author Title]. [1-2 sentence credential statement, why this person is qualified to write this page. Link to [full profile](/about/[slug]).]
```

## Workflow

### Step 1: Read All Discovery Context
Read the complete `discovery-context.md` file. Extract:
- **Brand voice & tone** from persona research and client brief
- **Keywords mapped to pages** from keyword research
- **Page list** from sitemap analysis + content plan
- **FAQs per page topic** from FAQ research
- **Design style** from UX/UI research
- **Competitor positioning** to ensure differentiation

### Step 2: Build Page Generation Queue
Create the ordered list of pages to generate. Group by type:

**Priority 1, Core Pages** (generate first):
1. Homepage
2. About / Our Story
3. Contact

**Priority 2, Service/Product Pillar Pages**:
4. Main service hub page (if multiple services)
5. Individual service pages (one per core service)

**Priority 3, Child/Spoke Pages**:
6. Service sub-pages
7. Location/area pages
8. Comparison pages
9. Case study pages

**Priority 4, Supporting Pages**:
10. FAQ page (centralized)
11. Testimonials/Reviews page
12. Team page
13. Process/How We Work page

**EXCLUDED** (use `/blog-content` command separately):
- Blog posts
- Resource articles
- Guides/how-to content

### Step 3: Generate Each Page
For each page in the queue, follow the Page Generation Protocol:

#### A. Gather Page-Specific Data
- Primary keyword (from keyword-to-page mapping)
- Secondary keywords (2-5 from same cluster)
- Target persona(s) for this page
- Buyer journey stage this page serves
- FAQs relevant to this page topic (3-5 per page)
- Competitor gap this page addresses
- Internal link targets (3-5 relevant pages)

#### B. Write SEO Metadata
- **Title tag**: Primary keyword + brand/benefit, 50-60 chars
- **Meta description**: Compelling CTA with keyword, 150-160 chars
- **Schema type**: Match to page type (see reference)
- **Canonical URL**: Clean URL path

#### C. Write Page Content
Follow the content rules:

**Heading Accent** (before H1):
- `:: keyword text`, a line starting with `::` followed by the accent text
- 2-5 words: primary keyword or keyword + location
- Developer converts `::` lines to styled `<span>` (uppercase, small, letter-spaced)
- NOT a heading tag, adds keyword density without semantic heading conflict

**Headline (H1)**:
- One per page, includes primary keyword naturally (not just the raw keyword)
- Addresses persona's Dream Outcome or primary pain
- Format: [Benefit] + [Specificity] or [Outcome] + [Without Sacrifice]

**Hero Section** (first 150 words):
- GEO-optimized: direct answer to the page's core question
- Include primary keyword naturally
- State the value proposition clearly
- Address the target persona directly

**Body Sections (H2s)**:
- Each H2 covers a distinct subtopic
- Include secondary keywords naturally
- Mix content formats: paragraphs, bullet lists, tables, quotes
- Every 300-400 words, include an internal link
- Use specific data points (numbers, percentages, timeframes)

**Subsections (H3s)**:
- Use for detailed breakdowns under H2s
- Feature/benefit lists
- Process steps
- Comparison points

**Social Proof**:
- Include 1-2 testimonial quotes per page (use placeholder format)
- Add trust signals relevant to the page topic
- Reference case study results with specific metrics

**FAQ Section** (per page):
- 3-5 most relevant FAQs for this page's topic
- Direct answer in first sentence (GEO optimization)
- Include internal links within answers
- Match questions from FAQ research (Step 6)

**CTA Section**:
- Clear, persona-appropriate call-to-action
- Match buyer journey stage (awareness = learn more, decision = get started)
- Use action language from persona messaging framework
- Include trust reinforcement (guarantee, no-obligation, etc.)

### Step 4: Internal Linking Pass
After generating all pages, do a linking review:
- Every page links to at least 3 other pages
- Pillar pages link to all child pages
- Child pages link back to pillar
- Service pages cross-link to related services
- All pages link to Contact/CTA page
- Use descriptive anchor text (never "click here")

### Step 5: Quality Assurance
Run each page through the quality checklist:
- [ ] Heading accent present (`:: keyword` line, 2-5 words, before H1)
- [ ] Primary keyword in: heading accent, H1 (naturally), first 100 words, URL, title tag
- [ ] Secondary keywords naturally distributed
- [ ] GEO: direct quotable answer in first 150 words
- [ ] Persona tone matches (check against persona messaging framework)
- [ ] Brand voice consistent across all pages
- [ ] FAQs included and match FAQ research data
- [ ] Internal links present (min 3 per page)
- [ ] CTA present and journey-stage-appropriate
- [ ] SEO metadata complete and within character limits
- [ ] No placeholder text remaining (except testimonial attribution)
- [ ] Word count meets minimum for page type

## Content Rules

### Tone & Voice
The tone for ALL content is derived from:
1. **Client brand signals** (from meeting / brand assessment)
2. **Persona preferences** (each persona may prefer different tones)
3. **Industry norms** (professional services = authoritative, creative = bold, etc.)

**Tone calibration per page type**:
| Page Type | Tone | Why |
|-----------|------|-----|
| Homepage | Confident, benefit-driven | First impression, broad audience |
| Service Page | Expert, outcome-focused | Consideration stage, specific need |
| About Page | Authentic, story-driven | Trust building, human connection |
| Contact | Warm, action-oriented | Low friction, clear next step |
| FAQ | Helpful, clear, concise | Answer-seeking, remove doubt |
| Case Study | Data-driven, narrative | Proof, social proof |
| Comparison | Honest, authoritative | Evaluation stage, build trust |

### SEO Content Standards
- **Keyword density**: Primary keyword 1-2% (natural, never forced)
- **Semantic richness**: Include related entities, synonyms, LSI terms
- **Content length by type**:
  | Page Type | Min Words | Target Words |
  |-----------|-----------|-------------|
  | Homepage | 500 | 800-1200 |
  | Service Pillar | 1200 | 1500-2500 |
  | Service Child | 800 | 1000-1500 |
  | About | 500 | 800-1200 |
  | Contact | 200 | 300-500 |
  | FAQ | 800 | 1200-2000 |
  | Case Study | 600 | 800-1500 |
  | Comparison | 1000 | 1500-2500 |
  | Location | 500 | 800-1200 |

### GEO Optimization Rules
Every page must include at least one of these GEO-friendly formats:
- **Direct definition**: "X is..." in the first paragraph
- **Numbered list**: Steps, rankings, or processes
- **Data table**: Comparison or specification data
- **FAQ with direct answers**: Question → immediate answer pattern
- **Statistics**: Specific numbers AI engines can cite
- **Expert quote**: Attributable statement

### Formatting Standards
- Use `**bold**` for key terms and important phrases (sparingly)
- Use bullet lists for 3+ related items
- Use numbered lists for sequential steps
- Use tables for comparison data
- Use `> blockquote` for testimonials and expert quotes
- Use `---` horizontal rules between major sections
- Use `[Link Text](/url-path)` for internal links

## Output Structure
Write all pages to a `pages/` subdirectory in the client's discovery folder:

```
[Client-Name]/01-Discovery/
├── pages/
│   ├── homepage.md
│   ├── about.md
│   ├── contact.md
│   ├── services/
│   │   ├── [service-hub].md          (pillar)
│   │   ├── [service-1].md            (child)
│   │   ├── [service-2].md            (child)
│   │   └── ...
│   ├── locations/
│   │   ├── [location-1].md
│   │   └── ...
│   ├── case-studies/
│   │   ├── [case-study-1].md
│   │   └── ...
│   ├── faq.md
│   ├── testimonials.md
│   ├── team.md
│   └── how-we-work.md
└── discovery-context.md
```

## Anti-Patterns
- **Don't**: Write generic content that could apply to any business
- **Don't**: Stuff keywords, every mention must read naturally
- **Don't**: Copy competitor phrasing, differentiate always
- **Don't**: Use placeholder text (except `[Client Name]` and testimonial names)
- **Don't**: Write content for blog posts (use `/blog-content` for that)
- **Don't**: Ignore the persona tone, a page for Decision Dave reads differently than Awareness Amy
- **Don't**: Write FAQs that don't match the FAQ research findings

## Reference Files
- `references/page-type-schemas.md`, Schema markup per page type
- `references/seo-metadata-guide.md`, Title/meta best practices
- `references/content-formatting-guide.md`, Markdown formatting standards
