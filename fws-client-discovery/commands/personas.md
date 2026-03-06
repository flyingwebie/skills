---
description: "Build buyer personas with the APEX Value Equation: optionally attach a meeting transcript for richer signals"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: [meeting-transcript-file]
---

You are running Step 3 of the FWS Client Discovery workflow: **Buyer Persona Research** using the APEX (Hormozi Value Equation) methodology.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/buyer-persona-research/SKILL.md
2. Read the APEX value equation guide: @${CLAUDE_PLUGIN_ROOT}/skills/buyer-persona-research/references/apex-value-equation.md
3. Read the persona interview framework: @${CLAUDE_PLUGIN_ROOT}/skills/buyer-persona-research/references/persona-interview-questions.md
4. Read the discovery context file if it exists — use sitemap and competitor findings as input.

## Input
- If a file path is provided as `$1`, read it as the meeting transcription.
- If no file is provided, check the discovery context for meeting notes, or ask the user to paste the transcription.

## Execution
Follow the full workflow in the SKILL.md:
1. Extract raw persona signals from meeting transcription
2. Enhance with web research (forums, reviews, LinkedIn, PAA)
3. Build 2-3 persona cards with full Value Equation mapping
4. Map each persona through the buyer journey with content needs and objections
5. Create messaging frameworks per persona
6. Validate against competitor targeting and keyword data

For each persona, rate all 4 Value Equation components (Dream Outcome, Perceived Likelihood, Time Delay, Effort & Sacrifice) on a 1-10 scale with specific evidence.

## Output
1. Write persona cards to `04-Buyer-Personas.md` in the client's discovery output folder, using the template at @${CLAUDE_PLUGIN_ROOT}/templates/persona-card.md
2. Update `discovery-context.md` with persona findings
3. Summarize: persona names, primary dream outcomes, top objections, and key messaging angles.
