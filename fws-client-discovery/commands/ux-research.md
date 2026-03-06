---
description: "Generate a design system recommendation: provide the client URL, or add --quick for a brand compatibility check only"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-url> [--quick]
---

You are running Step 5 of the FWS Client Discovery workflow: **UX/UI Research & Design System**.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/SKILL.md
2. Read the design intelligence references:
   - @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/references/industry-design-rules.md
   - @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/references/color-palettes.md
   - @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/references/font-pairings.md
   - @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/references/ui-styles-guide.md
3. Read the discovery context file — use persona and competitor findings for audience-appropriate design.

## Input
- Client URL: `$1`
- If `--quick` flag is present, run quick mode (branding compatibility check only)

## Mode Detection
- **Full mode** (default): Complete design system recommendation
- **Quick mode** (`--quick`): Brand compatibility check — assess current branding against recommended direction, flag conflicts, provide evolution path

## Execution
Follow the full workflow in the SKILL.md:
1. Look up industry in design rules database → select recommended UI style
2. Select color palette matched to industry and brand positioning
3. Choose typography pairing based on industry fit and readability
4. Assess existing branding compatibility (if client has a website/brand)
5. Recommend component patterns (layout, interactive, conversion elements)
6. Document accessibility requirements (WCAG AA)
7. Define responsive breakpoints

## Output
1. Write the report to `06-UX-UI-Research.md` in the client's discovery output folder, using the template at @${CLAUDE_PLUGIN_ROOT}/templates/ux-research-report.md
2. Update `discovery-context.md` with design findings
3. Summarize: recommended style, color palette preview, font pairing, and brand compatibility status.
