---
description: "Build an ICE-scored content plan with a 90-day calendar: optionally provide the client name to locate existing research"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: [client-name]
---

You are running Step 7 (final step) of the FWS Client Discovery workflow: **Content Planning**.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/content-planning/SKILL.md
2. Read the CORE-EEAT benchmark: @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md
3. **CRITICAL**: Read the FULL discovery context file — this step synthesizes ALL previous findings. If previous steps haven't been run, warn the user that content planning works best with complete discovery data.

## Input
- Client name (for file naming): `$ARGUMENTS`

## Execution
Follow the full workflow in the SKILL.md:
1. Audit existing content and consolidate all content gaps from previous steps
2. Map content needs to page types and buyer journey stages
3. ICE-score every content piece (Impact × Confidence / Effort)
4. Build 90-day content calendar:
   - Month 1: Foundation (ICE 7+, core pages)
   - Month 2: Growth (ICE 5-7, cluster content)
   - Month 3: Optimization (ICE 3-5, supporting content + refresh)
5. Define per-page content specifications for Month 1 items
6. Map topic cluster internal linking strategy
7. Set quality benchmarks with measurement methods
8. Provide resource estimates (hours per content type)

## Output
1. Write the report to `08-Content-Plan.md` in the client's discovery output folder, using the template at @${CLAUDE_PLUGIN_ROOT}/templates/content-plan.md
2. Update `discovery-context.md` with content plan summary
3. Summarize: total content pieces planned, Month 1 priority list, and estimated effort.
