---
description: "Build an ICE-scored content plan with a 90-day calendar: optionally provide the client name to locate existing research"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: [client-name]
---

Step 8 of FWS Client Discovery: **Content Planning**.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/content-planning/SKILL.md and follow it end-to-end.
- Reference @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md (linked from SKILL).
- Read FULL `discovery-context.md`. This step synthesizes Steps 0-7. Warn if gaps.
- Input: `$ARGUMENTS` = client name (for file naming).
- Output: `08-Content-Plan.md` using @${CLAUDE_PLUGIN_ROOT}/templates/content-plan.md. Update `discovery-context.md`.
- Summarize: total pieces planned, Month 1 priority list, estimated effort.
