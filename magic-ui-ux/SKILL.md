---
name: magic-ui-ux
description: >
  Psychology-driven UI/UX design plugin. Orchestrates UX decisions (cognitive psychology)
  and UI execution (Google Stitch MCP) to produce premium page designs. Use when user
  mentions "design", "branding", "page layout", "UX", "UI", "design system", or any
  design-related task.
---

# magic-ui-ux

Psychology-driven UI/UX design plugin for Claude Code. Separates UX (how users think) from UI (how things look), applying cognitive psychology to every design decision and generating production-quality screens via Google Stitch MCP.

## Commands

| Command | Description |
|---------|-------------|
| `/magic-ui-ux:branding` | Generate or reverse-engineer a design system for the project |
| `/magic-ui-ux:design` | Design one or more pages with psychology-driven UX and Stitch-generated UI |
| `/magic-ui-ux:iterate` | Iterate on existing designs -- generate variants or edit screens |

## Skills

| Skill | Description |
|-------|-------------|
| `branding` | Generates design systems from niche descriptions or reference sites using industry design rules |
| `psychology-router` | Routes page sections to the 2-4 most relevant psychology skills from a library of 14 |
| `copy-generation` | Generates psychology-aligned page copy (headlines, body, CTAs) with mandatory human approval before use |
| `persistence` | Manages the `.ui-ux/` persistence folder -- design tokens, project state, screen references |
| `animation` | Generates per-page animation choreography specs with Framer Motion, GSAP, Swup.js, and Lenis patterns |

See `skills/` directory for full skill documentation.

## Agents

| Agent | Role |
|-------|------|
| UX Agent | Applies psychology skills to produce section-by-section layout briefs with cognitive rationale |
| UI Agent | Consumes UX briefs and design tokens to craft Stitch prompts and generate premium screens |

See `agents/` directory for full agent instruction files.
