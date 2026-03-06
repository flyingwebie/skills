---
description: "Research competitors and build battlecards: provide a client URL or describe the industry"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-url-or-industry>
---

You are running Step 2 of the FWS Client Discovery workflow: **Competitor Research & Battlecards**.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/competitor-research/SKILL.md
2. Read the CITE domain rating framework: @${CLAUDE_PLUGIN_ROOT}/references/cite-domain-rating.md
3. Read the discovery context file if it exists — use previous findings (sitemap, meeting notes) as input.

## Input
- Client URL or industry description: `$ARGUMENTS`

## Execution
Follow the full workflow in the SKILL.md:
1. Identify 3-5 competitors (from client input, search research, and organic overlap)
2. Deep-analyze each competitor: positioning, UX, content strategy, SEO profile, social proof
3. Build a competitive comparison matrix
4. Create battlecards with "how to beat them" strategies
5. Document content gaps and positioning opportunities

Use CITE framework to score each competitor's domain.

## Output
1. Write the report to `03-Competitor-Report.md` in the client's discovery output folder, using the template at @${CLAUDE_PLUGIN_ROOT}/templates/competitor-report.md
2. Update `discovery-context.md` with competitor findings
3. Summarize: top competitors, biggest content gaps, key differentiation opportunities.
