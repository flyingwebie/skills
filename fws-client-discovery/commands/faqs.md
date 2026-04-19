---
description: "Mine FAQs from PAA, competitors, and personas: provide a client URL or describe the industry"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), mcp__MCP_DOCKER__apify--google-search-scraper, mcp__MCP_DOCKER__apify--website-content-crawler, mcp__MCP_DOCKER__perplexity_research
argument-hint: <client-url-or-industry>
---

Step 6 of FWS Client Discovery: **FAQ Research**.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/faq-research/SKILL.md and follow it end-to-end.
- Reference @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md for GEO alignment.
- Read `discovery-context.md`, REQUIRED: keywords, personas, competitor findings.
- Use research cascade (Apify Google Search Scraper for PAA → Apify Website Content Crawler for competitor FAQs → Perplexity → WebSearch).
- Input: `$ARGUMENTS`.
- Output must include JSON-LD `FAQPage` schema with `dateModified`, entity (Person/Organization/Place) schema, and `source` attribution for every answer (see Task 5 upgrades in this plugin).
- Output: `07-FAQ-Research.md` using @${CLAUDE_PLUGIN_ROOT}/templates/faq-report.md. Update `discovery-context.md`.
- Summarize: total FAQs, top 5 priority questions, schema-architecture recommendation.
