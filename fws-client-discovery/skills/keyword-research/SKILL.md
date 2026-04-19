---
name: keyword-research
description: >
  Discover, classify, and organize keywords into topic clusters with intent mapping
  and ICE scoring. Persona-aware seed generation. Use when planning content strategy
  or SEO. Triggers: "keyword research", "topic clusters", "SEO keywords", "search terms".
version: 0.2.0
---

# Keyword Research & Topic Clusters

## Purpose
Discover, classify, and organize target keywords into actionable topic clusters. Each cluster maps to a page strategy with search intent, priority scoring, and content requirements. Persona-aware seed generation ensures keywords match actual buyer language.

## When to Use
- Step 4 of FWS Discovery workflow
- When planning content strategy for a new or redesigned site
- When identifying quick-win SEO opportunities

## Inputs Required
1. **Client services/products**, from meeting transcription
2. **Buyer personas**, from Step 3 (discovery-context.md)
3. **Competitor keywords**, from Step 2 (discovery-context.md)
4. **Current keyword targets**, from Step 1 sitemap (discovery-context.md)
5. **Industry/location**, from discovery context

## Workflow

### Step 1: Persona-Aware Seed Generation
For each buyer persona, generate seed keywords using their language:

**From Value Equation**:
- Dream Outcome keywords: what they want to achieve
- Pain Point keywords: what they're trying to fix
- Solution keywords: how they describe the fix
- Fear keywords: what they're worried about

**From Buyer Journey**:
| Stage | Seed Pattern | Example |
|-------|-------------|---------|
| Awareness | "what is [problem]", "why [symptom]" | "why is my website not getting leads" |
| Consideration | "[solution] for [industry]", "best [service]" | "best web design agency for dentists" |
| Decision | "[company type] near me", "[service] pricing" | "web design pricing Ireland" |

**From Client Language**:
- Extract exact phrases from meeting transcription
- Map client terminology to search-friendly equivalents
- Include industry jargon AND plain language versions

### Step 2: Keyword Discovery
Expand seeds into a comprehensive keyword list using:

**Manual research methods**:
- Google Autocomplete (type each seed, note suggestions)
- Google "People Also Ask" (PAA) for each seed
- Google "Related Searches" at bottom of SERP
- Google Keyword Planner (if accessible)
- Answer the Public patterns
- Reddit/forum language mining

**Tool-enhanced** (if `~~SEO tool` connected):
- Keyword gap analysis (client vs. competitors)
- Related keyword suggestions
- Question keyword variations
- Long-tail expansion

**Target**: 50-100 keywords minimum across all personas.

### Step 3: Intent Classification
Classify every keyword by search intent:

| Intent | Signal Words | User Goal | Page Type |
|--------|-------------|-----------|-----------|
| Informational | how, what, why, guide, tutorial | Learn | Blog, Guide |
| Commercial | best, top, compare, review, vs | Evaluate | Comparison, Review |
| Transactional | buy, hire, book, pricing, quote | Act | Service, Landing |
| Navigational | [brand name], [specific product] | Find | Homepage, Product |
| Local | near me, in [city], [city] + [service] | Find locally | Location page |

### Step 4: Topic Cluster Architecture
Organize keywords into hub-and-spoke clusters:

```
Hub Page (Pillar): [Broad Topic]
├── Spoke 1: [Subtopic keyword]
├── Spoke 2: [Subtopic keyword]
├── Spoke 3: [Question keyword]
├── Spoke 4: [Long-tail variant]
└── Spoke 5: [Related topic]
```

**Rules for cluster building**:
- Each hub targets a high-volume commercial/transactional keyword
- Spokes target related long-tail and informational keywords
- Every spoke links back to hub, hub links to all spokes
- One cluster per core service/product
- No keyword cannibalization (one primary page per keyword)

### Step 5: Opportunity Scoring
Score each keyword cluster using modified ICE:

| Factor | Weight | How to Assess |
|--------|--------|--------------|
| Impact | 40% | Search volume × commercial value |
| Confidence | 30% | Current rankings, content gap size, SERP difficulty |
| Effort | 30% | Content creation difficulty, technical requirements |

**Priority tiers**:
| Tier | ICE Score | Action |
|------|-----------|--------|
| P1, Quick Wins | 7+ | Build in Month 1, existing page or easy new page |
| P2, Strategic | 5-7 | Build in Month 2, requires new content |
| P3, Long-term | 3-5 | Build in Month 3, competitive or complex |
| P4, Backlog | <3 | Track but don't prioritize |

### Step 6: Keyword-to-Page Mapping
Map each keyword to a specific page:

| Keyword | Intent | Page URL | Page Status | Cluster | Priority |
|---------|--------|----------|-------------|---------|----------|
| | | | new/existing/optimize | | P1-P4 |

**Mapping rules**:
- One primary keyword per page
- 2-5 secondary keywords per page
- No two pages targeting the same primary keyword
- Existing pages get optimized before creating new ones
- Every service page gets at least one commercial keyword

### Step 7: Local Keyword Strategy
If applicable (local business or service area):

**Location modifiers**:
- [Service] in [City]
- [Service] [County/Region]
- [Service] near me
- Best [Service] [Location]

**Local content opportunities**:
- Service area pages (per city/region)
- Location-specific case studies
- Local event or community content
- Google Business Profile optimization keywords

### Step 8: Update Discovery Context
Append to `discovery-context.md`:
- Top 10 priority keywords with intent
- Topic cluster structure (hubs + spokes count)
- Keyword-to-page mapping summary
- Local keyword opportunities
- Quick win keywords (P1 tier)
- Content gaps revealed by keyword research

## Output
Write findings to `05-Keyword-Research.md` using the template.

## GEO Optimization Note
For every keyword, consider AI engine optimization:
- Can this keyword trigger an AI Overview/Featured Snippet?
- What answer format works best? (paragraph, list, table)
- Is there a "direct answer" opportunity in the first 150 words?
- Reference CORE-EEAT benchmark for content quality standards.

See shared `references/core-eeat-benchmark.md` for full framework.

## Quality Checklist
- [ ] Seeds generated from personas (not just generic terms)
- [ ] 50+ keywords discovered and classified
- [ ] All keywords have intent labels
- [ ] Topic clusters built with hub-spoke structure
- [ ] ICE priority scoring applied
- [ ] Keyword-to-page mapping complete (no cannibalization)
- [ ] Local keywords included (if applicable)
- [ ] Discovery context updated with keyword findings

## Anti-Patterns
- **Don't**: Target only high-volume keywords (long-tail converts better)
- **Don't**: Ignore search intent (ranking for informational when you need transactional = wasted effort)
- **Don't**: Create one page per keyword (cluster strategy wins)
- **Don't**: Skip persona mapping (keywords without buyer context are noise)
- **Don't**: Forget local modifiers for service businesses
