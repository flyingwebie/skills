---
description: "Generate a design system recommendation: provide the client URL, or add --quick for a brand compatibility check only"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*), mcp__MCP_DOCKER__apify--website-content-crawler, mcp__MCP_DOCKER__perplexity_ask
argument-hint: <client-url> [--quick]
---

Step 5 of FWS Client Discovery: **UX/UI Research & Design System**.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/ux-ui-research/SKILL.md and follow it end-to-end. SKILL references industry-design-rules, color-palettes (index), font-pairings, ui-styles-guide on demand (progressive disclosure).
- Read @${CLAUDE_PLUGIN_ROOT}/CLAUDE_DESIGN.md, the Claude Design brief is REQUIRED in the output.
- Read `discovery-context.md` for persona, competitor, and `## Brand Assets` (logo) findings.
- Input: `$1` = client URL. `--quick` runs brand-compatibility mode only.
- If logo was uploaded in `/discovery` preflight, run the logo-analysis sub-step in the SKILL.
- Output: `06-UX-UI-Research.md` using @${CLAUDE_PLUGIN_ROOT}/templates/ux-research-report.md, ending with `## Claude Design Brief`. Update `discovery-context.md`.
- Summarize: recommended style, palette preview (with OKLCH + dark-mode swatches), font pairing, brand compatibility verdict.
