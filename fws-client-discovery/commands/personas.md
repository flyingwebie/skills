---
description: "Build buyer personas with the APEX Value Equation: optionally attach a meeting transcript for richer signals"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), mcp__MCP_DOCKER__apify--google-search-scraper, mcp__MCP_DOCKER__apify--rag-web-browser, mcp__MCP_DOCKER__perplexity_research
argument-hint: [meeting-transcript-file]
---

Step 3 of FWS Client Discovery: **Buyer Persona Research** (APEX / Hormozi Value Equation).

- Read @${CLAUDE_PLUGIN_ROOT}/skills/buyer-persona-research/SKILL.md and follow it end-to-end. SKILL loads the APEX and interview-question references itself.
- Read `discovery-context.md` for sitemap and competitor inputs.
- Input: `$1` = optional meeting-transcript path. If missing, check context or ask user to paste notes.
- Use research cascade (Apify → Perplexity → WebSearch) per @${CLAUDE_PLUGIN_ROOT}/CLAUDE.md for forum, review, PAA mining.
- Output: `04-Buyer-Personas.md` using @${CLAUDE_PLUGIN_ROOT}/templates/persona-card.md. Update `discovery-context.md`.
- Summarize: persona names, dream outcomes, top objections, messaging angles.
