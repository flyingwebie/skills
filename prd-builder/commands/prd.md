---
description: Generate a PRD by analyzing an existing product
argument-hint: <product-url> <new-product-name>
allowed-tools: Read, Write, Edit, WebFetch, WebSearch, Bash, Grep, Glob, Task, AskUserQuestion, TodoWrite
---

Generate a comprehensive Product Requirements Document (PRD) for building a clone of an existing online product.

**Arguments:**

- `$1` = URL of the existing product to analyze
- `$2` = Name for the new product (remaining arguments after URL)

If either argument is missing, ask the user to provide it before proceeding.

## Process

Read the skill file at `${CLAUDE_PLUGIN_ROOT}/skills/prd-generator/SKILL.md` and follow the complete workflow defined there.

Read the PRD template at `${CLAUDE_PLUGIN_ROOT}/skills/prd-generator/references/prd-template.md` before generating the final document.

### Quick summary of steps:

1. **Analyze** the product at `$1` — extract features, user flows, UI patterns, integrations, data model
2. **Present findings** to the user and confirm they're accurate
3. **Recommend a modern tech stack** with rationale for each choice — present as a table
4. **Wait for explicit tech stack approval** — the user may swap technologies
5. **Generate the full PRD** using the template, incorporating the approved stack
6. **Save** the PRD as `PRD-{product-name}.md` to the outputs folder
7. **Offer** adjustments or format exports

### Confidence rule:

If confidence on any aspect drops below 80%, stop and ask the user specific questions before continuing. Do not guess or assume.
