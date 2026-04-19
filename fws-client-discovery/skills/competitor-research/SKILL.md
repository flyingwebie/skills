---
name: competitor-research
description: >
  Identify and analyze competitors across SEO, content, UX, and positioning.
  Produces battlecards and gap analysis. Use when building competitive intelligence
  for a client project. Triggers: "competitor", "battlecard", "competitive analysis".
version: 0.2.0
---

# Competitor Research & Battlecards

## Purpose
Identify, analyze, and document the client's competitive landscape. Produce actionable battlecards with positioning recommendations, content gaps, and differentiation strategies. Covers SEO, content, UX/design, and business model comparison.

## When to Use
- Step 2 of FWS Discovery workflow
- When building competitive positioning for a new website
- When creating comparison pages or sales enablement content

## Inputs Required
1. **Client website URL**, to understand current positioning
2. **Meeting transcription**, competitors mentioned by client
3. **Industry/niche**, from discovery context
4. **Sitemap findings**, from Step 1 (if available in discovery-context.md)

## Workflow

### Step 1: Competitor Identification
Find 3-5 key competitors using multiple methods:

**From client input** (meeting transcription):
- Direct competitors mentioned by name
- "We lose deals to..." mentions
- "Our customers also look at..." mentions

**From search research**:
- Search the client's primary service + location keywords
- Note which sites rank in top 10 for target terms
- Check Google Maps/Local Pack for local competitors

**From SEO tools** (if `~~SEO tool` connected):
- Organic competitor overlap
- Paid competitor analysis
- Backlink competitor analysis

**Classification**:
| Type | Definition | Action |
|------|-----------|--------|
| Direct | Same service, same market | Full battlecard |
| Indirect | Adjacent service or different market segment | Abbreviated analysis |
| Aspirational | Where the client wants to be | Study their playbook |

### Step 2: Per-Competitor Deep Analysis

For each of the top 3-5 competitors, analyze:

#### A. Business Positioning
- Value proposition (from homepage hero)
- Target audience signals
- Pricing model (if visible)
- Key differentiators claimed
- Trust signals (awards, certs, testimonials count)
- Brand tone and voice

#### B. Website & UX Assessment
- Overall design quality (1-10)
- Mobile experience (1-10)
- Site speed (fast/medium/slow)
- Navigation structure
- CTA strategy (primary and secondary CTAs)
- Lead capture mechanisms (forms, chat, phone)
- User flow: homepage → service page → contact
- Unique UX features worth noting

#### C. Content Strategy
- Blog frequency and topics
- Content types used (blog, video, podcast, tools, guides)
- Content quality assessment (depth, EEAT signals)
- Estimated word counts on key pages
- Content freshness (last published date)
- Lead magnets offered (ebooks, tools, templates)

#### D. SEO Profile
- Estimated organic traffic range (research-based)
- Top ranking keywords (visible from search)
- Domain authority signals
- Backlink profile highlights
- Schema markup usage
- Local SEO presence (GMB, citations)

Use `~~SEO tool` if connected for precise metrics.

#### E. Social Proof & Trust
- Testimonials (count and quality)
- Case studies (count and depth)
- Reviews on third-party sites (Google, Trustpilot, etc.)
- Industry certifications
- Media mentions or awards
- Client logos displayed

### Step 3: Competitive Matrix

Build a comparison matrix across all competitors:

| Factor | Client | Comp 1 | Comp 2 | Comp 3 |
|--------|--------|--------|--------|--------|
| Value Proposition | | | | |
| Website Quality | /10 | /10 | /10 | /10 |
| Content Depth | /10 | /10 | /10 | /10 |
| SEO Strength | /10 | /10 | /10 | /10 |
| Social Proof | /10 | /10 | /10 | /10 |
| Pricing Position | | | | |
| Unique Differentiator | | | | |

### Step 4: Build Battlecards

For each competitor, create a battlecard with:

**Quick Intel**:
- Company name, URL
- Estimated size (employees, years in business)
- Primary positioning statement

**Where They Win**:
- Their strongest advantages
- What they do better than the client

**Where They Lose**:
- Their weaknesses and gaps
- What the client does better

**How to Beat Them**:
- Positioning strategy against this competitor
- Content they don't have that we should create
- Keywords they rank for that we should target
- UX/design elements to match or exceed
- Trust signals to develop

**Objection Handling**:
- "Why not go with [Competitor]?"
- Key differentiator talking points

### Step 5: Gap & Opportunity Analysis

**Content Gaps** (they have, client doesn't):
| Content Piece | Competitor | Our Priority | Effort |
|--------------|-----------|-------------|--------|
| | | High/Med/Low | Easy/Med/Hard |

**Feature/Service Gaps**:
- Services competitors offer that client doesn't mention
- Features on competitor sites worth replicating

**Positioning Opportunities**:
- Underserved angles no competitor owns
- Messaging gaps in the market
- Audience segments competitors ignore

### Step 6: Update Discovery Context
Append to `discovery-context.md`:
- Top 3-5 competitor names and URLs
- Competitive matrix summary
- Top 5 content gaps found
- Key positioning recommendations
- Competitor keywords to target
- UX/design patterns to consider

## Output
Write findings to `03-Competitor-Report.md` using the template.

## CITE Domain Rating Integration
When assessing competitor domain strength, reference the CITE framework (40 items):
- **Credibility**: expertise signals, citations, certifications
- **Infrastructure**: technical SEO, schema, performance
- **Trust**: reviews, transparency, security
- **Engagement**: content freshness, community, UX quality

See shared `references/cite-domain-rating.md` for full framework.

## Quality Checklist
- [ ] 3-5 competitors identified and classified
- [ ] Full analysis completed per competitor (positioning, UX, content, SEO, trust)
- [ ] Competitive matrix populated
- [ ] Battlecards created with actionable "how to beat" sections
- [ ] Content and positioning gaps documented
- [ ] Discovery context updated with competitor findings

## Anti-Patterns
- **Don't**: Analyze more than 5 competitors (diminishing returns)
- **Don't**: Focus only on SEO metrics (UX and positioning matter more)
- **Don't**: Copy competitor strategy (differentiate, don't imitate)
- **Don't**: Ignore indirect competitors (they steal attention)
- **Don't**: Skip the "where they lose" analysis (every competitor has weaknesses)
