---
description: "Run the full discovery: provide client name, website URL, and optionally a meeting transcript file"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), Task, mcp__MCP_DOCKER__apify--website-content-crawler, mcp__MCP_DOCKER__apify--google-search-scraper, mcp__MCP_DOCKER__apify--rag-web-browser, mcp__MCP_DOCKER__perplexity_ask, mcp__MCP_DOCKER__perplexity_research, mcp__MCP_DOCKER__fetch
argument-hint: <client-name> <client-url> [meeting-transcript-file]
---

You are running the **FWS Client Discovery** master workflow. This orchestrates all 9 steps sequentially, Phase A builds the website (research + page content), Phase B plans and produces the content strategy (content plan + blog posts), passing context between steps via a shared `discovery-context.md` file.

## Research Tool Cascade

For ALL online research in every step, use tools in this order. Fall through only on failure or empty result.

1. **Apify (Docker MCP)**, primary
   - `mcp__MCP_DOCKER__apify--website-content-crawler`, crawl client and competitor sites
   - `mcp__MCP_DOCKER__apify--google-search-scraper`, SERP, PAA, keyword discovery
   - `mcp__MCP_DOCKER__apify--rag-web-browser`, open-ended research queries
2. **Perplexity (Docker MCP)**, fallback
   - `mcp__MCP_DOCKER__perplexity_research`, deep topic research with citations
   - `mcp__MCP_DOCKER__perplexity_ask`, quick lookups
3. **Built-in WebSearch / WebFetch**, final fallback

Log which tool produced each finding in `discovery-context.md` under `## Research Sources`.

## Output Rules (apply to every file you write)

- **Markdown only.** NO Word, NO Google Docs, NO XLSX, NO Pencil `.pen` files. Every deliverable is a plain `.md` file.
- **No em dashes.** Use a comma instead. Never write `—` in content.
- **Internal links between pages.** Every generated page and report must link to related pages and reports in the same project using relative markdown links (e.g. `[Buyer Personas](./04-Buyer-Personas.md)`). Run a link pass at the end of Step 7 and Step 9.

## Initial Setup

### 1. Parse Inputs
- **Client name**: `$1` (required, used for folder naming)
- **Client URL**: `$2` (optional, pass `none` if no existing website)
- **Meeting transcript**: `$3` (optional, file path to transcript)

### 1a. Preflight, ask the user

Before running any research, ask these two questions in order. Wait for each answer.

**Q1, client website**
> "Do we have the current client's website URL? If yes, paste it now so I can crawl it for more context. If none, reply `skip`."

If provided and different from `$2`, use the newer URL and note it in `discovery-context.md`.

**Q2, brand logo**
> "Do we have the client's logo? If yes, upload the file now (drag into chat or paste a path), I'll use it to extract colors and inform Step 5 UX/UI Research. If none, reply `skip`."

If logo provided:
- Save path to `discovery-context.md` under `## Brand Assets`
- Step 5 reads the image, extracts dominant colors, shape language, typographic cues
- Feed into UX/UI Research report

If `skip`, proceed without logo analysis. Note "no logo provided" in Step 5 output.

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

Run each step sequentially. After each step, re-read `discovery-context.md` to confirm findings landed, then proceed. Each step reads its own SKILL for full instructions (lazy-load: do NOT load all SKILLs up front).

### Phase A, Research + Page Content (Steps 1-7)

| # | Step | SKILL (read before starting) | Output file | Template |
|---|------|------------------------------|-------------|----------|
| 1 | Sitemap Analysis | `skills/sitemap-analysis/SKILL.md` | `02-Sitemap-Report.md` | `templates/sitemap-report.md` |
| 2 | Competitor Research | `skills/competitor-research/SKILL.md` | `03-Competitor-Report.md` | `templates/competitor-report.md` |
| 3 | Buyer Personas (APEX) | `skills/buyer-persona-research/SKILL.md` | `04-Buyer-Personas.md` | `templates/persona-card.md` |
| 4 | Keyword Research | `skills/keyword-research/SKILL.md` | `05-Keyword-Research.md` | `templates/keyword-report.md` |
| 5 | UX/UI Research | `skills/ux-ui-research/SKILL.md` + `CLAUDE_DESIGN.md` | `06-UX-UI-Research.md` | `templates/ux-research-report.md` |
| 6 | FAQ Research | `skills/faq-research/SKILL.md` | `07-FAQ-Research.md` | `templates/faq-report.md` |
| 7 | Page Copywriting | `skills/page-copywriter/SKILL.md` | `pages/*.md` | (schemas in SKILL refs) |

For each step:
1. Read the SKILL end-to-end, follow its workflow. SKILL loads its own references (progressive disclosure).
2. Run the research-tool cascade defined in `CLAUDE.md` (Apify → Perplexity → WebSearch).
3. Write the output file, update `discovery-context.md`, emit a one-line checkpoint to the user with key counts (e.g., "Step 1, [N] pages, [M] gaps").

**Step 5 special**: if logo was uploaded in preflight, run logo-analysis sub-step in the SKILL. Output MUST include a `## Claude Design Brief` section per `CLAUDE_DESIGN.md`.

**Step 7 special**: end with an internal-link audit pass (3+ relative links per page).

### Phase B, Content Strategy + Blog (Steps 8-9)

| # | Step | SKILL | Output file | Template |
|---|------|-------|-------------|----------|
| 8 | Content Planning | `skills/content-planning/SKILL.md` | `08-Content-Plan.md` | `templates/content-plan.md` |
| 9 | Blog Copywriting | `skills/blog-copywriter/SKILL.md` | `pages/blog/*.md` | (schemas in SKILL refs) |

**Step 9 special**: every post links to parent pillar + 1 service page + related posts. End with a Related Posts cross-link pass.

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

### Generate llms.txt + llms-full.txt (GEO, LLM crawlers)

Follow @${CLAUDE_PLUGIN_ROOT}/skills/llms-txt-generator/SKILL.md.

- Write `pages/llms.txt`, the short manifest: site name, one-line description, priority links (homepage, services, about, contact, FAQ, key pillars, key blog posts).
- Write `pages/llms-full.txt`, full plain-text content dump of every generated page, concatenated with clear `# [Page Title]` separators. This is the content LLM crawlers cite.
- Both files are markdown-compatible plain text, UTF-8, no front matter.

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
