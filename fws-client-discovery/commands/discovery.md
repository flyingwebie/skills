---
description: "Run the full discovery: provide client name, website URL, and optionally a meeting transcript file"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), Task
argument-hint: <client-name> <client-url> [meeting-transcript-file]
---

You are running the **FWS Client Discovery** master workflow. This orchestrates all 9 steps sequentially — Phase A builds the website (research + page content), Phase B plans and produces the content strategy (content plan + blog posts) — passing context between steps via a shared `discovery-context.md` file.

## Initial Setup

### 1. Parse Inputs
- **Client name**: `$1` (required — used for folder naming)
- **Client URL**: `$2` (optional — pass `none` if no existing website)
- **Meeting transcript**: `$3` (optional — file path to transcript)

### 2. Create Output Folder
Create the output directory structure:
```
[Client-Name]/01-Discovery/
```

### 3. Initialize Discovery Context
Copy the context template to the output folder:
- Read @${CLAUDE_PLUGIN_ROOT}/templates/discovery-context-template.md
- Write it as `discovery-context.md` in the output folder
- Fill in: client name, URL, industry (ask user if not clear from transcript)

### 4. Process Meeting Transcript
If a meeting transcript file is provided:
- Read the file
- Extract key signals: industry, services, target audience, competitors mentioned, pain points, questions
- Write findings to `01-Client-Brief.md`
- Update Step 0 section of `discovery-context.md`

If no transcript is provided:
- Ask the user to paste the meeting notes or describe the client briefly
- Process the response the same way

---

## Execute 9-Step Workflow

Run each step sequentially. After each step, read the updated `discovery-context.md` to confirm findings were captured before proceeding.

### Phase A: Research + Page Content (Steps 1-7)

Phase A researches the client's market, audience, and competitors, then produces production-ready website page content. By the end of Phase A, the full website copy is ready.

### Step 1: Sitemap Analysis
- Read @${CLAUDE_PLUGIN_ROOT}/skills/sitemap-analysis/SKILL.md
- Read @${CLAUDE_PLUGIN_ROOT}/skills/sitemap-analysis/references/page-type-benchmarks.md
- If client has a URL: crawl and analyze the site structure
- If no URL: build a recommended sitemap from industry benchmarks
- Write `02-Sitemap-Report.md` using template @${CLAUDE_PLUGIN_ROOT}/templates/sitemap-report.md
- Update discovery context with sitemap findings
- **Checkpoint**: Tell user "Step 1 complete — [X] pages found, [Y] gaps identified"

### Step 2: Competitor Research
- Read @${CLAUDE_PLUGIN_ROOT}/skills/competitor-research/SKILL.md
- Read @${CLAUDE_PLUGIN_ROOT}/references/cite-domain-rating.md
- Identify 3-5 competitors and deep-analyze each
- Build competitive matrix and battlecards
- Write `03-Competitor-Report.md` using template @${CLAUDE_PLUGIN_ROOT}/templates/competitor-report.md
- Update discovery context with competitor findings
- **Checkpoint**: Tell user "Step 2 complete — [X] competitors analyzed, [Y] content gaps found"

### Step 3: Buyer Persona Research
- Read @${CLAUDE_PLUGIN_ROOT}/skills/buyer-persona-research/SKILL.md
- Read @${CLAUDE_PLUGIN_ROOT}/skills/buyer-persona-research/references/apex-value-equation.md
- Read @${CLAUDE_PLUGIN_ROOT}/skills/buyer-persona-research/references/persona-interview-questions.md
- Build 2-3 personas using APEX Value Equation methodology
- Write `04-Buyer-Personas.md` using template @${CLAUDE_PLUGIN_ROOT}/templates/persona-card.md
- Update discovery context with persona findings
- **Checkpoint**: Tell user "Step 3 complete — [X] personas created: [names]"

### Step 4: Keyword Research
- Read @${CLAUDE_PLUGIN_ROOT}/skills/keyword-research/SKILL.md
- Read @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md
- Generate persona-aware seeds, expand, classify, cluster
- Write `05-Keyword-Research.md` using template @${CLAUDE_PLUGIN_ROOT}/templates/keyword-report.md
- Update discovery context with keyword findings
- **Checkpoint**: Tell user "Step 4 complete — [X] keywords in [Y] clusters, [Z] quick wins"

### Step 5: UX/UI Research
- Read @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/SKILL.md
- Read ALL reference files in @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/references/
- Generate design system recommendation matched to industry and personas
- Write `06-UX-UI-Research.md` using template @${CLAUDE_PLUGIN_ROOT}/templates/ux-research-report.md
- Update discovery context with design findings
- **Checkpoint**: Tell user "Step 5 complete — recommended style: [X], palette: [Y], fonts: [Z]"

### Step 6: FAQ Research
- Read @${CLAUDE_PLUGIN_ROOT}/skills/faq-research/SKILL.md
- Mine PAA, competitor FAQs, meeting questions, persona-driven questions
- Write `07-FAQ-Research.md` using template @${CLAUDE_PLUGIN_ROOT}/templates/faq-report.md
- Update discovery context with FAQ findings
- **Checkpoint**: Tell user "Step 6 complete — [X] FAQs identified, [Y] with schema markup"

### Step 7: Page Copywriting
- Read @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/SKILL.md
- Read ALL reference files:
  - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/page-type-schemas.md
  - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/seo-metadata-guide.md
  - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/content-formatting-guide.md
- Read CORE-EEAT benchmark: @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md
- Build page queue from sitemap (core → pillar → child → supporting, NO blog)
- Generate all page markdown files with:
  - SEO metadata block (title, meta, OG, schema, canonical)
  - Heading accent (`:: keyword`) + H1
  - Full SEO/GEO-optimized body content
  - FAQ section (from Step 6 research)
  - CTA section (persona-appropriate)
- Run internal linking pass across all pages
- Save all pages to `pages/` subdirectory
- Update discovery context with page generation summary
- **Checkpoint**: Tell user "Step 7 complete — [X] pages generated, [Y] total words, internal linking verified"

---

### Phase B: Content Strategy + Blog (Steps 8-9)

All website pages are now complete. Phase B plans the ongoing content strategy and produces blog posts to support SEO/GEO growth over 90 days.

### Step 8: Content Planning
- Read @${CLAUDE_PLUGIN_ROOT}/skills/content-planning/SKILL.md
- Synthesize ALL findings (Steps 1-7) into ICE-scored content plan + 90-day calendar
- Write `08-Content-Plan.md` using template @${CLAUDE_PLUGIN_ROOT}/templates/content-plan.md
- Update discovery context with content plan summary
- **Checkpoint**: Tell user "Step 8 complete — [X] content pieces planned over 90 days"

### Step 9: Blog Copywriting
- Read @${CLAUDE_PLUGIN_ROOT}/skills/blog-copywriter/SKILL.md
- Read shared formatting references (same as Step 7)
- Build blog queue from 90-day content plan calendar (Step 8)
- Generate blog post markdown files with:
  - Article schema metadata (+ author, date, category, parent pillar)
  - Heading accent (`:: keyword`) + H1
  - Opening hook, body sections (H2 every 300-400 words), data points
  - Key Takeaways section
  - FAQ section (2-4 questions from Step 6)
  - CTA linking to parent pillar + contact
- Cross-link blog posts to pillar pages and related posts
- Save all posts to `pages/blog/` subdirectory
- Update discovery context with blog generation summary
- **Checkpoint**: Tell user "Step 9 complete — [X] blog posts generated, [Y] total words, covering [Z] topic clusters"

---

## Final Assembly

### Generate Master Discovery Report
- Read @${CLAUDE_PLUGIN_ROOT}/templates/discovery-report.md
- Compile executive summary from all 9 steps
- Write `00-Discovery-Report.md` with:
  - Executive summary (1 paragraph)
  - Key findings per research section (Steps 1-6, 1-2 sentences each)
  - Page copywriting summary (Step 7: page count, word count)
  - Content strategy summary (Steps 8-9: content plan, blog count, topic clusters)
  - Top 5 priorities across all dimensions
  - Recommended next steps
  - Deliverables checklist

### Completion Summary
Present the user with:
1. List of all deliverables created (with file paths):
   - Master discovery report (00)
   - 7 research reports (01 through 07)
   - Content plan (08)
   - Page content files (homepage, services, about, etc.)
   - Blog post files
2. Content totals: total pages generated, total blog posts, total word count
3. Top 5 overall priorities from the discovery
4. Recommended immediate next steps
5. Note that all files are in the `[Client-Name]/01-Discovery/` folder

---

## Error Recovery
- If any step fails, log the error and continue with the next step
- Mark failed steps in the discovery report
- At the end, list any steps that need to be re-run
- Each step can be re-run individually using its dedicated command (e.g., `/sitemap`, `/competitors`)
