# magic-ui-ux Plugin

## What This Plugin Does

magic-ui-ux is a psychology-driven UI/UX design plugin for Claude Code. It orchestrates two distinct disciplines:

- **UX (User Experience)**: Cognitive psychology skills analyze how users think, decide, and behave. The UX Agent produces layout briefs grounded in psychology research -- not aesthetic opinion.
- **UI (User Interface)**: Design tokens and visual patterns are applied through Google Stitch MCP to generate premium, production-quality screens.

The separation is deliberate: psychology informs structure first, then visual design executes it. This produces designs that convert, not just designs that look good.

## Design Philosophy

1. **UX and UI are distinct disciplines.** Psychology informs structure (what goes where and why). Visual design executes it (how it looks and moves). Never conflate the two.
2. **Design consistency is non-negotiable.** `.ui-ux/` is the single source of truth for every design operation. Cross-page coherence comes from always reading tokens before generating.
3. **Human-in-the-loop keeps the designer in control.** AI proposes, human decides. Copy is always approved before use. Branding choices are confirmed.
4. **Reference-driven design beats blank-canvas generation.** Reverse-engineering great existing designs produces better baselines than generating from nothing.

## Plugin Architecture

```
magic-ui-ux/
  CLAUDE.md              # This file -- plugin context for Claude Code
  SKILL.md               # Plugin index with commands, skills, and agents
  .claude-plugin/
    plugin.json           # Plugin manifest
  commands/
    branding.md           # /branding command -- generate or reverse-engineer design systems
    design.md             # /design command -- psychology-driven page design via Stitch
  skills/
    persistence/          # .ui-ux/ folder management (tokens, state, briefs)
    psychology-router/    # Routes sections to relevant psychology skills
    animation/            # Per-page animation choreography specs
    video-to-website/     # Scroll-driven video-style site specs
  agents/
    ux-agent.md           # UX Agent -- psychology-based layout decisions
    ui-agent.md           # UI Agent -- Stitch screen generation from briefs
```

## Persistence

The `.ui-ux/` folder is the **single source of truth** for all design operations. It persists across sessions and contains:

- `tokens.json` -- Design system tokens (colors, typography, spacing, component patterns)
- `state.json` -- Project state (screens, pages, Stitch IDs, statuses)
- `branding.md` -- Human-readable design system description
- `briefs/` -- UX briefs per page (`{page}-ux-brief.md`)
- `references/` -- Reference screenshots and assets

**Always read `.ui-ux/` before any design operation.** Never design blind.

See `skills/persistence/SKILL.md` for initialization, reading, and writing patterns.

## Key Rules

1. **Always read `.ui-ux/` before any design operation.** Check for existing tokens, state, and branding before generating anything.
2. **UX Agent runs before UI Agent.** Psychology informs layout decisions first. Visual design executes those decisions second.
3. **Psychology skills are filtered per section, not dumped wholesale.** The router selects 2-4 relevant skills per section type -- never all 14.
4. **Human approves copy before use.** When generating page text, always present it for user approval before incorporating into designs.
5. **Stitch MCP must be connected for screen generation.** The UI Agent requires Google Stitch MCP to create projects, generate screens, edit screens, and generate variants.

## Available Skills

The plugin draws from 14 cognitive psychology skills:

1. **cognitive-load** -- Manage information complexity to prevent overwhelm
2. **hicks-law** -- Reduce choices to speed decision-making
3. **cognitive-fluency-psychology** -- Make information easy to process
4. **cognitive-biases** -- Leverage systematic thinking patterns
5. **halo-effect-psychology** -- Use positive first impressions to influence perception
6. **loss-aversion-psychology** -- Frame decisions around what users might lose
7. **visual-cues-cta-psychology** -- Direct attention to key actions
8. **trust-psychology** -- Build credibility and reduce skepticism
9. **social-proof-psychology** -- Leverage peer behavior to drive action
10. **progressive-disclosure** -- Reveal complexity gradually
11. **hooked-model** -- Design habit-forming interaction loops
12. **fogg-behavior-model** -- Align motivation, ability, and triggers
13. **curiosity-gap** -- Create information gaps that drive engagement
14. **status-quo-bias** -- Use defaults and inertia strategically

## MCP Dependencies

**Google Stitch** (required for screen generation):
- `create_project` -- Initialize a new Stitch design project
- `generate_screen_from_text` -- Generate screens from text prompts
- `edit_screens` -- Modify existing screens with change requests
- `generate_variants` -- Create design variants of existing screens
