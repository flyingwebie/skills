---
description: "Discover and cluster keywords by intent: provide a client URL or describe the industry and target audience"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), mcp__MCP_DOCKER__apify--google-search-scraper, mcp__MCP_DOCKER__perplexity_ask, mcp__MCP_DOCKER__perplexity_research
argument-hint: <client-url-or-industry>
---

Step 4 of FWS Client Discovery: **Keyword Research & Topic Clusters**.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/keyword-research/SKILL.md and follow it end-to-end.
- Reference @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md for GEO alignment.
- Read `discovery-context.md`, REQUIRED: persona and competitor findings must exist.
- Use research cascade (Apify Google Search Scraper for SERP/PAA/autocomplete → Perplexity → WebSearch).
- Input: `$ARGUMENTS`.
- Target: 50-100 keywords across 3-7 clusters.
- Output: `05-Keyword-Research.md` using @${CLAUDE_PLUGIN_ROOT}/templates/keyword-report.md. Update `discovery-context.md`.
- Summarize: top 10 priority keywords, cluster structure, quick wins.
