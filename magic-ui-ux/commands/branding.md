---
description: "Generate or reverse-engineer a design system for the project"
allowed-tools: Read, Write, Edit, WebFetch, Bash(ls:*,cat:*,mkdir:*), Task
argument-hint: "[niche/industry] [--from-url <url>] [--from-screenshot <path>]"
---

# /magic-ui-ux:branding

Phase 2 will implement this command. For now, this stub exists to register the slash command.

## What It Will Do

Generate a complete design system for the project through one of two paths:

### From Scratch
Given a niche or industry description (e.g., "SaaS fintech", "luxury wellness"), generate:
- Color palette (primary, secondary, CTA, background, text, semantic colors)
- Typography (heading/body/accent font families with Google Fonts URLs)
- Spacing scale
- UI style recommendation (Minimalism, Glassmorphism, Neubrutalism, etc.)
- Component patterns (header, hero, CTA, footer styles)

### From Reference (Reverse-Engineering)
Given a URL, Dribbble screenshot, or Awwwards site, extract:
- Exact color values from the reference
- Typography identification
- Spacing and layout patterns
- Component and animation style analysis

### Output
- `.ui-ux/tokens.json` -- Machine-readable design tokens
- `.ui-ux/branding.md` -- Human-readable design system description
- Updates `.ui-ux/state.json` with `brandingComplete: true`
