---
description: "Audit a website's structure and pages: provide the client URL, or add --no-site to build a sitemap from scratch"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-url> [--no-site]
---

You are running Step 1 of the FWS Client Discovery workflow: **Sitemap & Page Analysis**.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/sitemap-analysis/SKILL.md
2. Read the page type benchmarks: @${CLAUDE_PLUGIN_ROOT}/skills/sitemap-analysis/references/page-type-benchmarks.md
3. Check if a discovery context file exists in the current working directory. If it does, read it to understand the client and any previous findings.

## Input
- Client URL: `$1`
- If `--no-site` flag is passed, skip crawling and build a recommended sitemap from scratch.

## Execution
Follow the full workflow in the SKILL.md:
1. Discover XML sitemap and crawl the site structure
2. Build a complete page inventory classified by type
3. Analyze site structure (depth, navigation, orphan pages)
4. Run technical SEO quick check
5. Identify content gaps against industry benchmarks
6. Assess page-level SEO for top 10 pages

## Output
1. Write the report to `02-Sitemap-Report.md` in the client's discovery output folder, using the template at @${CLAUDE_PLUGIN_ROOT}/templates/sitemap-report.md
2. Update the `discovery-context.md` file with sitemap findings (create it from template if it doesn't exist)
3. Summarize key findings for the user: total pages, critical gaps, and top 3 technical issues.
