---
description: "Discover and cluster keywords by intent: provide a client URL or describe the industry and target audience"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-url-or-industry>
---

You are running Step 4 of the FWS Client Discovery workflow: **Keyword Research & Topic Clusters**.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/keyword-research/SKILL.md
2. Read the CORE-EEAT benchmark (for GEO optimization): @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md
3. Read the discovery context file — you NEED persona findings and competitor data for persona-aware seed generation.

## Input
- Client URL or industry: `$ARGUMENTS`

## Execution
Follow the full workflow in the SKILL.md:
1. Generate persona-aware seed keywords (from Value Equation components)
2. Expand via Google Autocomplete, PAA, Related Searches
3. Classify every keyword by search intent (informational, commercial, transactional, local)
4. Build topic clusters with hub-and-spoke architecture
5. Apply ICE opportunity scoring
6. Map keywords to pages (existing or new)
7. Develop local keyword strategy (if applicable)

Target: 50-100 keywords minimum, organized into 3-7 topic clusters.

## Output
1. Write the report to `05-Keyword-Research.md` in the client's discovery output folder, using the template at @${CLAUDE_PLUGIN_ROOT}/templates/keyword-report.md
2. Update `discovery-context.md` with keyword findings
3. Summarize: top 10 priority keywords, cluster structure, and quick-win opportunities.
