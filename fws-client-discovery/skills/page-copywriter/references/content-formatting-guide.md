# Content Formatting Guide — Markdown Standards

## Purpose
Every page file must be production-ready markdown. This guide defines the exact formatting standards so content can be copy-pasted directly into a CMS.

## Document Structure

```markdown
<!-- SEO METADATA -->
<!-- title: ... -->
<!-- meta_description: ... -->
<!-- og_title: ... -->
<!-- og_description: ... -->
<!-- schema_type: ... -->
<!-- schema_additional: ... -->
<!-- canonical: ... -->
<!-- primary_keyword: ... -->
<!-- secondary_keywords: ... -->

:: Keyword-Rich Accent — 2-5 words

# H1: Natural, Benefit-Driven Headline With Keyword

Opening paragraph with primary keyword in first sentence. This paragraph serves as the GEO-optimized direct answer — keep it under 150 words, make it quotable and definitive.

## H2: Major Section Heading

Body paragraph with natural keyword inclusion. Every paragraph should serve a purpose — inform, persuade, or guide.

Second paragraph in this section. Include specific data points, metrics, or examples to increase citability for AI engines.

### H3: Subsection Heading

Detailed content under the subsection. H3s are used for breakdowns, steps, or detailed explanations under an H2.

## H2: Next Major Section

Continue with content...

> "Testimonial or expert quote goes here in blockquote format."
> — **Name**, Title at Company

---

## Frequently Asked Questions

### Question goes here as H3?
Answer starts with a direct, one-sentence response. Then expand with 2-3 supporting sentences. Include an [internal link](/relevant-page) where helpful. Keep answers under 150 words each.

### Another question?
Direct answer first. Supporting detail follows.

---

## Call to Action Heading

CTA paragraph with clear next step and persona-appropriate language.

**[Primary CTA Button Text →](/contact)**

*[Secondary option — e.g., "Or call us at (XXX) XXX-XXXX"]*
```

## Heading Accent (Pre-Title)

Every page includes a short **heading accent** above the H1. In the markdown files, lines starting with `::` denote the accent text. This is NOT a heading — when rendered to HTML, the developer/CMS converts `:: text` into a styled `<span>` or `<p>` (uppercase, small, letter-spaced, accent color). It adds visual flair and keyword density without breaking semantic hierarchy.

**Format in markdown files**:
```markdown
:: Web Design Dublin

# Professional Web Design in Dublin That Converts
```

**Rules**:
- **Syntax**: Line starts with `:: ` followed by the accent text
- **Length**: 2-5 words maximum — punchy, not a sentence
- **Content**: Primary keyword or keyword + location — the exact search term a user would type
- **Not a heading**: Developer renders as styled inline text (`<span>` or `<p>`), never `<h1>` or any heading tag
- **Visual style**: Typically uppercase, smaller font, letter-spaced, accent color — styled via CSS, not markdown
- **One per page**: Placed immediately before the H1, after the SEO metadata block
- **SEO role**: Adds natural keyword presence near the top of the page; search engines read it as body text, not a heading
- **GEO role**: Reinforces topic relevance for AI citation engines parsing the page

**Examples by page type**:
| Page Type | Accent Example | H1 Example |
|-----------|---------------|------------|
| Homepage | `:: Web Design Dublin` | `# Websites That Turn Visitors Into Customers` |
| Service Pillar | `:: E-Commerce Development` | `# Custom Online Stores Built to Scale Your Revenue` |
| Service Child | `:: Shopify Development` | `# Shopify Stores Designed for Growth and Conversion` |
| About | `:: Our Story` | `# The Team Behind Dublin's Fastest-Growing Web Agency` |
| Contact | `:: Get In Touch` | `# Let's Talk About Your Next Project` |
| FAQ | `:: Common Questions` | `# Everything You Need to Know Before Getting Started` |
| Location | `:: Web Design Cork` | `# Expert Web Design Services for Cork Businesses` |
| Case Study | `:: Client Success` | `# How [Client] Increased Online Sales by 340%` |

**What NOT to do**:
- Don't make the accent a full sentence
- Don't duplicate the H1 text
- Don't use it as a second keyword-stuffed heading
- Don't skip it — every page gets one

## Heading Rules

| Level | Usage | Rules |
|-------|-------|-------|
| H1 | Page title / main headline | ONE per page. Includes primary keyword naturally. |
| H2 | Major sections | 4-8 per page. Each covers a distinct topic. |
| H3 | Subsections under H2 | 0-4 per H2 section. For details, steps, breakdowns. |
| H4+ | Avoid | Keep hierarchy flat. If needed, restructure content. |

**Hierarchy must be logical**: H1 → H2 → H3 (never skip levels). The heading accent is NOT part of the heading hierarchy — it's styled body text.

## Text Formatting

### Bold
Use `**bold**` for:
- Key terms on first use
- Benefit statements in lists
- Important names or data points
- CTA text emphasis

Do NOT use bold for:
- Entire sentences
- Decorative emphasis
- Every keyword mention

### Italic
Use `*italic*` for:
- Secondary CTAs or soft suggestions
- Defining terms
- Attributions

### Links
```markdown
[Descriptive anchor text](/internal-page)
```
- **Never** use "click here" or "learn more" as anchor text
- Always use descriptive text that includes context
- Internal links: relative paths (`/services/web-design`)
- Minimum 3 internal links per page

## Lists

### Bullet Lists (unordered)
Use for 3+ related items that have no sequence:
```markdown
- **Benefit one**: Brief explanation of this benefit
- **Benefit two**: Brief explanation of this benefit
- **Benefit three**: Brief explanation of this benefit
```
Rule: Bold lead + colon + description for benefit lists.

### Numbered Lists (ordered)
Use for sequential steps or rankings:
```markdown
1. **Step name** — Description of what happens in this step
2. **Step name** — Description of what happens in this step
3. **Step name** — Description of what happens in this step
```

### Do NOT use lists for:
- Single items (just write a paragraph)
- Two items (write a sentence: "X and Y")
- Long paragraphs disguised as list items

## Tables
Use for comparison data, specifications, or structured information:
```markdown
| Feature | Basic | Pro | Enterprise |
|---------|-------|-----|------------|
| Feature 1 | ✓ | ✓ | ✓ |
| Feature 2 | — | ✓ | ✓ |
| Feature 3 | — | — | ✓ |
```

## Blockquotes (Testimonials & Quotes)
```markdown
> "The exact quote from the customer or expert goes here. Keep it authentic and specific — vague praise like 'great service' is worthless."
> — **Full Name**, Job Title at Company Name
```

For placeholder testimonials (when real ones aren't available yet):
```markdown
> "[Testimonial placeholder — replace with real customer quote about [specific outcome/benefit]]"
> — **[Client Name]**, [Title] at [Company]
```

## Horizontal Rules
Use `---` to separate major sections:
- Between the main content and FAQ section
- Between FAQ section and CTA section
- Between any visually distinct sections

## CTA Formatting
```markdown
**[Button Text →](/target-page)**

*Or [alternative action text](/alternative-page)*
```

## Images / Media Placeholders
Since we're writing content only, use this format for image placement:
```markdown
![Alt text description for SEO and accessibility](image-placeholder: hero-image.jpg)
```
This tells the designer/developer where images go and what the alt text should be.

## Content Length Guidelines

| Section | Word Count |
|---------|-----------|
| Hero / opening paragraph | 50-100 words |
| Standard body section (H2) | 150-300 words |
| FAQ answer | 50-150 words |
| CTA section | 30-80 words |
| Testimonial quote | 20-60 words |

## Quality Checkpoints
Before finalizing any page:
- [ ] Heading accent present (`:: keyword` line, 2-5 words, before H1)
- [ ] Only ONE H1
- [ ] H1 → H2 → H3 hierarchy (no skipped levels)
- [ ] Primary keyword in heading accent AND H1 (naturally) and first 100 words
- [ ] 3+ internal links with descriptive anchors
- [ ] At least 1 blockquote (testimonial or expert quote)
- [ ] FAQ section with 3-5 questions
- [ ] CTA section at the bottom
- [ ] No "click here" links
- [ ] No placeholder text except testimonial attribution
- [ ] All SEO metadata comments filled in
