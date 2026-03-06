---
description: "Mine FAQs from PAA, competitors, and personas: provide a client URL or describe the industry"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-url-or-industry>
---

You are running Step 6 of the FWS Client Discovery workflow: **FAQ Research**.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/faq-research/SKILL.md
2. Read the CORE-EEAT benchmark (for GEO optimization): @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md
3. Read the discovery context file — you NEED keywords, personas, and competitor findings for comprehensive FAQ research.

## Input
- Client URL or industry: `$ARGUMENTS`

## Execution
Follow the full workflow in the SKILL.md:
1. Collect questions from all 4 sources: meeting transcription, PAA mining, competitor FAQs, persona-driven questions
2. Deduplicate and categorize into topic groups
3. Priority-score all questions (search visibility, conversion impact, content gap, client frequency)
4. Write answer guidelines for Must Have and Should Have questions
5. Generate JSON-LD FAQPage schema markup
6. Recommend FAQ page architecture (centralized, distributed, or hybrid)

## Output
1. Write the report to `07-FAQ-Research.md` in the client's discovery output folder, using the template at @${CLAUDE_PLUGIN_ROOT}/templates/faq-report.md
2. Update `discovery-context.md` with FAQ findings
3. Summarize: total FAQs found, top 5 highest-priority questions, and schema markup recommendation.
