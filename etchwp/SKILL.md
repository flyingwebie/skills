---
name: etchwp
description: >
  Etch + AutomaticCSS component generator. Produces production-ready HTML, CSS, and JS
  components with correct BEM naming, ACSS 4.x token usage, semantic structure, container-query
  responsive design, and accessibility defaults. Use when user mentions "etch", "component",
  "generate", "section", "hero", "pricing", "card", "nav", "footer", "acss", "automatic css",
  or any component generation task.
---

# etchwp

Generates production-ready Etch + ACSS components with correct BEM naming, ACSS token usage, semantic HTML, vanilla JS, and container-query responsive design.

## Commands

| Command | Description | File |
|---------|-------------|------|
| `/generate` | Generate a production-ready Etch component from a name and description | `commands/generate.md` |
| `/library` | Search, filter, and paste previously generated Etch components | `commands/library.md` |

## Skills

| Skill | Description | File |
|-------|-------------|------|
| `persistence` | Manages `.etch-components/` folder, registry initialization, read/write, and component registration | `skills/persistence/SKILL.md` |
| `html-generation` | Generates semantic HTML with ACSS utility classes for spacing, typography, and colors | `skills/html-generation/SKILL.md` |
| `css-generation` | Generates BEM-scoped CSS with `&__`/`&--` stemming and ACSS custom property references | `skills/css-generation/SKILL.md` |
| `js-generation` | Generates vanilla ES2020+ JavaScript with event delegation and async patterns | `skills/js-generation/SKILL.md` |
| `etch-conventions` | Encodes Etch best practices: Section > Container hierarchy, AutoBEM, container queries, accessibility | `skills/etch-conventions/SKILL.md` |
