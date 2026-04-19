---
description: "Audit a website's structure and pages: provide the client URL, or add --no-site to build a sitemap from scratch"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), mcp__MCP_DOCKER__apify--website-content-crawler, mcp__MCP_DOCKER__apify--google-search-scraper, mcp__MCP_DOCKER__perplexity_ask
argument-hint: <client-url> [--no-site]
---

Step 1 of FWS Client Discovery: **Sitemap & Page Analysis**.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/sitemap-analysis/SKILL.md and follow it end-to-end.
- Read `discovery-context.md` if present.
- Use the research tool cascade (Apify → Perplexity → WebSearch) defined in @${CLAUDE_PLUGIN_ROOT}/CLAUDE.md.
- Input: `$1` (client URL). If `--no-site`, build from industry benchmarks in `references/page-type-benchmarks.md`.
- Output: `02-Sitemap-Report.md` using @${CLAUDE_PLUGIN_ROOT}/templates/sitemap-report.md. Update `discovery-context.md`.
- Summarize: total pages, critical gaps, top 3 technical issues.
