---
description: "Write all website pages with SEO content and Pencil prompts: provide the client name, or filter with --pages=homepage,about"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-name> [--pages=homepage,about,services]
---

You are running the **Page Copywriter** — generating production-ready website page content as markdown files.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/SKILL.md
2. Read ALL reference files:
   - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/pencil-prompt-framework.md
   - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/page-type-schemas.md
   - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/seo-metadata-guide.md
   - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/content-formatting-guide.md
3. Read the CORE-EEAT benchmark: @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md
4. **CRITICAL**: Read the FULL `discovery-context.md` file — every page depends on personas, keywords, UX research, and FAQs from previous steps.

## Input
- Client name: `$1` (for folder naming)
- Optional `--pages=` flag to generate only specific pages (comma-separated)
  - If not specified, generate ALL core pages from the sitemap analysis

## Pre-Flight Check
Before generating any content, verify the discovery context has:
- [ ] Step 0: Client brief (business name, industry, brand signals)
- [ ] Step 1: Sitemap (page list, gaps)
- [ ] Step 3: Personas (at minimum 1 persona with name and Value Equation)
- [ ] Step 4: Keywords (keyword-to-page mapping)
- [ ] Step 5: UX/UI (design system: style, colors, fonts)
- [ ] Step 6: FAQs (questions by topic)
- [ ] Step 7: Content plan (page specifications)

If ANY of these are missing, warn the user and list which steps need to be run first.

## Execution

### Phase 1: Build Page Queue
1. Read the sitemap analysis and content plan
2. Create the ordered page list (core → pillar → child → supporting)
3. Exclude all blog posts (use `/blog-content` for those)
4. If `--pages=` flag is used, filter to only those pages
5. Tell the user: "Generating [X] pages: [list of page names]"

### Phase 2: Create Output Structure
```
mkdir -p [client-folder]/01-Discovery/pages/services
mkdir -p [client-folder]/01-Discovery/pages/locations    (if applicable)
mkdir -p [client-folder]/01-Discovery/pages/case-studies  (if applicable)
```

### Phase 3: Generate Pages
For each page in the queue:
1. Gather page-specific data from discovery context (keyword, persona, FAQs)
2. Write the Pencil.dev prompt (custom per page with wireframe section hints)
3. Write SEO metadata block
4. Write full page content following the SKILL.md content rules
5. Save as markdown to the appropriate folder
6. Report progress: "✓ [page-name].md — [word count] words, [keyword]"

### Phase 4: Internal Linking Review
After ALL pages are generated:
1. Read through every page file
2. Verify every page has 3+ internal links
3. Verify pillar pages link to all their child pages
4. Verify child pages link back to their pillar
5. Fix any missing links

### Phase 5: Quality Report
Generate a summary:
| Page | Words | Primary Keyword | Internal Links | FAQs | Pencil Prompt |
|------|-------|----------------|---------------|------|---------------|
| | | | [count] | [count] | ✓/✗ |

## Output
- All page files saved to `[client-folder]/01-Discovery/pages/`
- Progress reported per page
- Final summary with total word count, page count, and any issues

## Important Rules
- **No blog posts** — those go through `/blog-content`
- **No placeholder text** — every sentence must be production-ready (except testimonial names marked as `[Client Name]`)
- **Every page gets a unique Pencil prompt** — no copy-paste between pages
- **Persona tone varies by page** — homepage speaks to all personas, service pages target specific ones
- **FAQ answers must match FAQ research** — don't invent new questions
