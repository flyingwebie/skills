---
name: faq-research
description: >
  Identify and optimize FAQs using PAA mining, competitor analysis, and persona-driven
  questions. Generates JSON-LD schema markup and GEO-optimized answer guidelines.
  Triggers: "FAQ", "frequently asked questions", "PAA", "people also ask", "FAQ schema".
version: 0.2.0
---

# FAQ Research, PAA + Schema + GEO

## Purpose
Identify, organize, and optimize frequently asked questions for the client's website. Combines People Also Ask (PAA) extraction, competitor FAQ analysis, and meeting-derived questions into a structured FAQ strategy with JSON-LD schema markup and GEO optimization for AI citation.

## When to Use
- Step 6 of FWS Discovery workflow
- When building an FAQ page for a new or existing site
- When optimizing for Featured Snippets and AI Overviews
- When creating FAQ schema for rich results

## Inputs Required
1. **Target keywords**, from Step 4 (discovery-context.md)
2. **Buyer personas**, from Step 3 (what questions do they ask?)
3. **Competitor FAQ analysis**, from Step 2 (gaps and opportunities)
4. **Meeting transcription**, questions the client commonly receives
5. **Industry**, from discovery context

## Workflow

### Step 1: Collect Questions from All Sources

#### A. Client Meeting Extraction
Parse the meeting transcription for:
- "Customers always ask..."
- "The most common question is..."
- "People want to know..."
- "Before they buy, they need to understand..."
- Any question phrased directly

#### B. People Also Ask (PAA) Mining
For each of the top 10-15 target keywords:
1. Search the keyword in Google
2. Capture all PAA questions shown
3. Click on PAA questions to expand (triggers more questions)
4. Record up to 3 levels deep of PAA chains
5. Note the current answer format (paragraph, list, table)

**PAA Recording Format**:
| Question | Source Keyword | Answer Format | Featured Snippet? | Priority |
|----------|---------------|---------------|-------------------|----------|
| | | paragraph/list/table | yes/no | High/Med/Low |

#### C. Competitor FAQ Analysis
For each competitor (from Step 2):
1. Find their FAQ page (if exists)
2. Record all questions and categorize by topic
3. Assess answer quality (1-10)
4. Check for FAQ schema markup (view source)
5. Identify questions only competitors answer (our gap)

#### D. Persona-Driven Questions
For each buyer persona (from Step 3):
- **Awareness stage**: What do they Google before they know about this service?
- **Consideration stage**: What questions do they ask while evaluating options?
- **Decision stage**: What objections need answering to close the deal?
- **Post-purchase**: What do they need help with after buying?

### Step 2: Deduplicate and Categorize
1. Merge all questions from all sources
2. Remove exact duplicates
3. Merge semantically similar questions (keep the most searched phrasing)
4. Group by topic (typically 4-8 topic groups)

**Topic Group Structure**:
| Group | Example Topics |
|-------|---------------|
| Service/Product | What is [service]? How does it work? |
| Pricing/Cost | How much does [service] cost? |
| Process/Timeline | How long does it take? What's the process? |
| Qualifications | Why should I choose you? What certifications? |
| Comparison | How is this different from [alternative]? |
| Technical | What technology/methods do you use? |
| Results | What results can I expect? |
| Getting Started | How do I get started? What's the first step? |

### Step 3: Prioritize Questions
Score each question:

| Factor | Weight | Scoring |
|--------|--------|---------|
| Search visibility | 30% | Appears in PAA? Has search volume? |
| Conversion impact | 30% | Does answering this help close deals? |
| Content gap | 20% | Do competitors answer this but client doesn't? |
| Client frequency | 20% | Does the client hear this often? |

**Priority tiers**:
- **Must Have** (score 7+): Include on main FAQ page, add schema
- **Should Have** (score 5-7): Include on relevant service pages
- **Nice to Have** (score 3-5): Blog post or resource content
- **Skip** (score <3): Too niche or irrelevant

### Step 4: Write Answer Guidelines
For each Must Have and Should Have question, specify:

**Answer Structure**:
- First sentence: Direct answer (for AI citation and Featured Snippets)
- Paragraph 2: Supporting detail or context
- Paragraph 3: Call-to-action or next step
- Total length: 50-200 words (concise, scannable)

**GEO Optimization Rules** (from CORE-EEAT):
- Direct answer in first 150 words
- Include specific data points for quotability
- Use structured format (FAQ schema wraps individual Q&A)
- Make answers standalone (don't require reading other answers)
- Include internal links within answers to relevant pages

### Step 5: Generate JSON-LD Schema
Create FAQPage schema for all Must Have questions:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Concise answer text with key information]"
      }
    }
  ]
}
```

**Schema Rules**:
- Include all Must Have questions (max 10-15 per page)
- Answer text should be the concise version (not full page content)
- No HTML in schema answer text (plain text only)
- Match the visible page content exactly
- One FAQPage schema per URL (don't duplicate across pages)

### Step 6: FAQ Page Architecture
Recommend how to structure FAQ content across the site:

**Option A: Centralized FAQ Page**
- One /faq page with all questions grouped by topic
- Accordion/expandable format
- Highest-traffic questions at top of each group
- Internal links within answers to service pages

**Option B: Distributed FAQ Sections**
- FAQ section at bottom of each service page
- Service-specific questions only
- Schema markup on each page
- Link to central FAQ for general questions

**Option C: Hybrid (Recommended)**
- Central FAQ page for general and cross-cutting questions
- Service-page FAQ sections for service-specific questions
- Schema on both
- Cross-linking between central FAQ and service pages

### Step 7: Update Discovery Context
Append to `discovery-context.md`:
- Total FAQs identified (by source and priority)
- Top 10 highest-priority questions
- FAQ topic groups
- Schema markup recommendation
- Content gaps from FAQ analysis
- GEO optimization opportunities

## Output
Write findings to `07-FAQ-Research.md` using the template.

## Quality Checklist
- [ ] Questions collected from all 4 sources (meeting, PAA, competitors, personas)
- [ ] Deduplicated and categorized into topic groups
- [ ] Priority scoring applied to all questions
- [ ] Answer guidelines written for Must Have questions
- [ ] JSON-LD schema generated
- [ ] FAQ page architecture recommended
- [ ] Discovery context updated with FAQ findings

## Anti-Patterns
- **Don't**: Write FAQ questions nobody actually asks (test against PAA)
- **Don't**: Create 50+ question FAQ pages (10-15 per page max)
- **Don't**: Copy competitor answers (write original, better answers)
- **Don't**: Use FAQ schema for non-question content (Google penalizes misuse)
- **Don't**: Forget internal links within answers (missed SEO opportunity)
