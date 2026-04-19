---
description: "Research competitors and build battlecards: provide a client URL or describe the industry"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), mcp__MCP_DOCKER__apify--website-content-crawler, mcp__MCP_DOCKER__apify--google-search-scraper, mcp__MCP_DOCKER__apify--rag-web-browser, mcp__MCP_DOCKER__perplexity_research
argument-hint: <client-url-or-industry>
---

Step 2 of FWS Client Discovery: **Competitor Research & Battlecards**.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/competitor-research/SKILL.md and follow it end-to-end.
- Reference @${CLAUDE_PLUGIN_ROOT}/references/cite-domain-rating.md for CITE scoring.
- Read `discovery-context.md` for prior sitemap and meeting-note findings.
- Use research cascade (Apify → Perplexity → WebSearch) per @${CLAUDE_PLUGIN_ROOT}/CLAUDE.md.
- Input: `$ARGUMENTS` (client URL or industry).
- Output: `03-Competitor-Report.md` using @${CLAUDE_PLUGIN_ROOT}/templates/competitor-report.md. Update `discovery-context.md`.
- Summarize: top competitors, biggest content gaps, key differentiation opportunities.
