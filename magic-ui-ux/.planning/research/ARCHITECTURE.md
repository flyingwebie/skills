# Architecture Research

**Domain:** Claude Code plugin -- multi-agent UI/UX design orchestrator
**Researched:** 2026-03-10
**Confidence:** HIGH (based on direct analysis of two production plugins in the same repository: `git-master` and `fws-client-discovery`)

## System Overview

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         COMMAND LAYER                                    │
│  /branding    /design <pages>    /review    /animate                     │
├──────────────────────────────────────────────────────────────────────────┤
│                         AGENT LAYER                                      │
│  ┌──────────────────────┐         ┌──────────────────────┐               │
│  │      UX AGENT        │         │      UI AGENT        │               │
│  │                      │         │                      │               │
│  │ Psychology skills:   │         │ Visual skills:       │               │
│  │  cognitive-load      │  ───>   │  design-taste-fe     │               │
│  │  hicks-law           │ layout  │  frontend-design     │               │
│  │  loss-aversion       │ brief   │  framer-motion       │               │
│  │  trust-psychology    │         │  svg-logo-designer   │               │
│  │  social-proof        │         │  redesign-existing   │               │
│  │  progressive-discl.  │         │                      │               │
│  │  cognitive-fluency   │         │ Animation specs:     │               │
│  │  halo-effect         │         │  GSAP/ScrollTrigger  │               │
│  │  visual-cues-cta     │         │  Swup.js transitions │               │
│  │  fogg-behavior       │         │  Lenis smooth scroll │               │
│  │  hooked-model        │         │                      │               │
│  │  curiosity-gap       │         │                      │               │
│  │  status-quo-bias     │         │                      │               │
│  │  cognitive-biases    │         │                      │               │
│  └──────────┬───────────┘         └──────────┬───────────┘               │
│             │                                │                           │
├─────────────┴────────────────────────────────┴───────────────────────────┤
│                         MCP TOOL LAYER                                   │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐              │
│  │ Google Stitch   │  │ Figma          │  │ Pencil         │              │
│  │ create_project  │  │ get_design_ctx │  │ batch_design   │              │
│  │ gen_screen      │  │ get_screenshot │  │ batch_get      │              │
│  │ edit_screens    │  │                │  │ get_guidelines  │              │
│  │ gen_variants    │  │                │  │ get_style_guide │              │
│  └────────────────┘  └────────────────┘  └────────────────┘              │
├──────────────────────────────────────────────────────────────────────────┤
│                         PERSISTENCE LAYER                                │
│                            .ui-ux/                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ context  │ │ branding │ │ pages/   │ │ refs/    │ │ copy/    │       │
│  │ .md      │ │ .md      │ │ *.md     │ │ *.png    │ │ *.md     │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└──────────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Implementation |
|-----------|----------------|----------------|
| Command layer | Parse user intent, route to correct agent, manage HITL checkpoints | `commands/*.md` -- one file per slash command |
| UX Agent | Psychology-driven layout decisions, information architecture, interaction patterns | `agents/ux-agent.md` -- instructions that compose psychology skills |
| UI Agent | Visual design execution, animation specs, design token application | `agents/ui-agent.md` -- instructions that compose visual/animation skills |
| MCP Tool layer | External design tool integration (Stitch, Figma, Pencil) | Called by agents via allowed-tools; selection logic in agent instructions |
| Persistence layer | Cross-session state, design system single source of truth | `.ui-ux/` folder in user's project directory |

## Recommended Plugin Structure

```
magic-ui-ux/
├── .claude-plugin/
│   └── plugin.json              # Plugin metadata (name, version, description)
├── SKILL.md                     # Root skill file -- plugin overview, command table, trigger words
├── hooks/
│   └── hooks.json               # SessionStart (load context), PreToolUse (consistency guard)
├── templates/
│   ├── session-context.md       # Injected on SessionStart -- loads .ui-ux/context.md if exists
│   ├── branding-report.md       # Template for branding output
│   ├── page-design-brief.md     # Template for per-page UX brief
│   └── design-review.md         # Template for design review output
├── commands/
│   ├── branding.md              # /magic-ui-ux:branding -- create or reverse-engineer design system
│   ├── design.md                # /magic-ui-ux:design <pages> -- design pages via Stitch
│   ├── review.md                # /magic-ui-ux:review -- review existing designs for UX issues
│   └── animate.md               # /magic-ui-ux:animate -- add animation specs to designed pages
├── agents/
│   ├── ux-agent.md              # UX agent persona, skill composition rules, output format
│   └── ui-agent.md              # UI agent persona, skill composition rules, output format
├── skills/
│   ├── reference-extractor/
│   │   ├── SKILL.md             # Reverse-engineer design systems from URLs/screenshots
│   │   └── references/
│   │       └── extraction-checklist.md  # What to extract (colors, type, spacing, patterns)
│   ├── copy-generator/
│   │   └── SKILL.md             # Generate page copy when none provided
│   └── stitch-orchestrator/
│       ├── SKILL.md             # Stitch-specific workflows (create project, gen screen, iterate)
│       └── references/
│           └── stitch-prompt-patterns.md  # Effective prompt patterns for Stitch screen gen
├── references/
│   ├── psychology-index.md      # Quick-reference: which psychology skill applies when
│   └── animation-specs.md       # Framer Motion, GSAP, Swup, Lenis parameter defaults
└── CONNECTORS.md                # Optional MCP tool connections (Stitch, Figma, Pencil)
```

### Structure Rationale

- **agents/:** Separated from skills because agents are orchestrators, not knowledge. An agent file defines a persona, lists which skills to read, specifies output format, and manages the handoff protocol. This is the key architectural novelty -- existing plugins do not have multi-agent separation.
- **commands/:** One file per slash command, following git-master and fws-client-discovery conventions exactly. Each command file reads agent instructions plus relevant skills, then executes.
- **skills/:** Plugin-specific skills only. Psychology and design-taste skills live in `~/.claude/skills/` and are referenced by path (`@~/.claude/skills/cognitive-load/SKILL.md`). This avoids duplication and keeps skills reusable across plugins.
- **references/:** Quick-lookup tables that agents consult during execution. The psychology-index.md is critical -- it maps design scenarios to psychology skills so the UX agent does not need to read all 14 skills every time.
- **hooks/:** SessionStart loads design context from `.ui-ux/` if it exists, ensuring continuity. PreToolUse guard ensures Write operations to `.ui-ux/` maintain schema consistency.

## Architectural Patterns

### Pattern 1: Agent-as-Instruction-File (not code)

**What:** Each agent is a markdown file containing persona definition, skill references, decision logic, and output format. Agents are not code -- they are structured prompts that Claude Code executes.

**When to use:** Always. This is how Claude Code plugins work. There is no runtime, no process -- just instruction files that shape Claude's behavior.

**Trade-offs:** Simple to author and iterate; limited to what Claude can do in a single context window. No true parallel execution -- "multi-agent" means sequential agent invocation within one session.

**Example (agents/ux-agent.md):**
```markdown
# UX Agent

You are a UX psychologist. Your job is to produce a **Layout Brief** for each page,
grounded in cognitive psychology principles.

## Skills to Read
Read these before making any decision:
- @~/.claude/skills/cognitive-load/SKILL.md
- @~/.claude/skills/hicks-law/SKILL.md
- (selected based on page type -- see references/psychology-index.md)

## Decision Framework
For each page section, answer:
1. What is the user's cognitive state at this point? (cognitive-load)
2. How many choices are presented? (hicks-law)
3. What motivates action here? (fogg-behavior, loss-aversion, or social-proof)

## Output Format
Write to `.ui-ux/pages/{page-name}-ux-brief.md`:
- Section-by-section layout decisions with psychology rationale
- Recommended component types (hero, social proof strip, CTA block)
- Information hierarchy (what the user sees first, second, third)
```

### Pattern 2: Context Chain via Persistence Folder

**What:** The `.ui-ux/` folder is the shared memory between commands and sessions. Every command reads context before acting and writes results after completing. This directly mirrors the `discovery-context.md` pattern in fws-client-discovery.

**When to use:** Every command execution. No command should operate without reading `.ui-ux/context.md` first.

**Trade-offs:** Simple file-based state; no locking or conflict resolution. Works because only one Claude session writes at a time.

**Key insight from fws-client-discovery:** The context file is a rolling accumulator. Each command appends its findings. Later commands see everything earlier commands produced.

### Pattern 3: Selective Skill Loading via Index

**What:** Rather than loading all 14 psychology skills into context (which would consume too many tokens), the UX agent consults a psychology-index.md lookup table that maps page types and design scenarios to relevant skills, then loads only the 3-5 most relevant.

**When to use:** Every UX agent invocation.

**Trade-offs:** Keeps context window lean; requires the index to be well-curated. If the index misses a mapping, the skill won't be applied.

**Example (references/psychology-index.md):**
```markdown
## Page Type -> Psychology Skills

| Page Type | Primary Skills | Secondary Skills |
|-----------|---------------|-----------------|
| Homepage/Landing | cognitive-load, hicks-law, social-proof, trust | halo-effect, curiosity-gap |
| Pricing | loss-aversion, hicks-law, cognitive-fluency | status-quo-bias, fogg-behavior |
| Onboarding | progressive-disclosure, cognitive-load, fogg-behavior | hooked-model |
| Product/Service | halo-effect, social-proof, visual-cues-cta | cognitive-fluency |
| Blog/Content | cognitive-fluency, curiosity-gap, progressive-disclosure | cognitive-load |
| Checkout/Form | cognitive-load, hicks-law, loss-aversion | trust, fogg-behavior |
```

### Pattern 4: Sequential Agent Handoff

**What:** Commands that need both UX and UI work execute agents sequentially: UX agent produces a Layout Brief, UI agent consumes it and produces visual output. The handoff artifact (the brief) is persisted in `.ui-ux/pages/`.

**When to use:** The `/design` command. The `/branding` command is primarily UI agent territory (with UX agent consulted only for usability of the design system itself).

**Trade-offs:** Clear separation of concerns; adds a step. But the brief serves as a reviewable checkpoint where the human can approve UX decisions before visual execution begins.

```
/design homepage
    │
    ├── 1. Read .ui-ux/context.md + .ui-ux/branding.md
    │
    ├── 2. UX AGENT executes
    │   ├── Consults psychology-index.md → loads cognitive-load, hicks-law, social-proof, trust
    │   ├── Produces layout brief: section order, component types, psychology rationale
    │   ├── Writes .ui-ux/pages/homepage-ux-brief.md
    │   └── [HITL CHECKPOINT] "Here's the UX brief. Approve or adjust?"
    │
    ├── 3. UI AGENT executes
    │   ├── Reads homepage-ux-brief.md + branding.md
    │   ├── Applies design-taste-frontend rules (anti-center-bias, color calibration, etc.)
    │   ├── Generates Stitch prompt from brief + design system
    │   ├── Calls Stitch MCP: create_project → generate_screen_from_text
    │   ├── Writes .ui-ux/pages/homepage-ui-output.md (Stitch links, design notes)
    │   └── [HITL CHECKPOINT] "Here's the screen. Iterate or approve?"
    │
    └── 4. Updates .ui-ux/context.md with completed page record
```

## Data Flow

### /branding Command Flow

```
User: /branding [url or description]
    │
    ├── Input provided?
    │   ├── URL → Reference Extractor skill: WebFetch URL, extract design system
    │   ├── Screenshot → Figma MCP get_screenshot or direct analysis
    │   └── Description only → Generate from scratch using design-taste-frontend rules
    │
    ├── UI Agent: Build design system
    │   ├── Color palette (max 1 accent, anti-AI-purple per design-taste rules)
    │   ├── Typography pairing (from font-pairings reference or extraction)
    │   ├── Spacing scale
    │   ├── Component patterns
    │   └── Animation style defaults
    │
    ├── [HITL CHECKPOINT] "Here's the brand direction. Approve?"
    │
    └── Write .ui-ux/branding.md + update .ui-ux/context.md
```

### /design Command Flow

```
User: /design homepage,services
    │
    ├── Read .ui-ux/context.md (has branding been created?)
    │   └── NO → Prompt: "Run /branding first" or auto-trigger
    │
    ├── For each page:
    │   ├── Copy available? Read .ui-ux/copy/{page}.md
    │   │   └── NO → Copy Generator skill → [HITL] approve copy → write .ui-ux/copy/{page}.md
    │   │
    │   ├── UX Agent → Layout Brief → .ui-ux/pages/{page}-ux-brief.md → [HITL]
    │   │
    │   ├── UI Agent → Stitch screen → .ui-ux/pages/{page}-ui-output.md → [HITL]
    │   │
    │   └── Update .ui-ux/context.md
    │
    └── Summary: links to all generated Stitch screens
```

### MCP Tool Selection Logic

```
Design task arrives
    │
    ├── Need to generate a new screen from text description?
    │   └── Google Stitch: generate_screen_from_text
    │
    ├── Need to edit/iterate on an existing Stitch screen?
    │   └── Google Stitch: edit_screens or generate_variants
    │
    ├── Need to analyze an existing design (competitor, reference)?
    │   └── Figma: get_design_context + get_screenshot
    │
    ├── Need batch concept generation for exploration?
    │   └── Pencil: batch_design
    │
    ├── Need to extract a style guide from an existing design?
    │   └── Pencil: get_style_guide or get_guidelines
    │
    └── Fallback: Google Stitch (primary output tool per project constraints)
```

### Key Data Flows

1. **Branding to Design:** `/branding` writes `.ui-ux/branding.md`. Every `/design` invocation reads it. This is the single source of truth for visual consistency.
2. **UX Brief to UI Execution:** UX agent writes `{page}-ux-brief.md`. UI agent reads it. The brief is the contract between agents.
3. **Context accumulation:** `.ui-ux/context.md` grows with each command. It tracks: what branding exists, which pages are designed, Stitch project IDs, outstanding decisions.
4. **Discovery import (optional):** If fws-client-discovery's `06-UX-UI-Research.md` exists, `/branding` can consume it as a starting point rather than generating from scratch.

## .ui-ux/ Persistence Layer Design

```
.ui-ux/
├── context.md                   # Rolling context accumulator (mirrors discovery-context.md pattern)
├── branding.md                  # Design system: colors, typography, spacing, component patterns
├── copy/
│   ├── homepage.md              # Approved copy for homepage
│   ├── services.md              # Approved copy for services page
│   └── ...
├── pages/
│   ├── homepage-ux-brief.md     # UX agent layout brief
│   ├── homepage-ui-output.md    # UI agent output (Stitch links, design decisions)
│   ├── services-ux-brief.md
│   ├── services-ui-output.md
│   └── ...
├── references/
│   ├── extracted-palette.png    # Screenshots from reference sites
│   ├── competitor-screenshot.png
│   └── ...
└── stitch/
    └── project-links.md         # Stitch project ID, screen URLs, variant history
```

### File Format Decisions

| File | Format | Why |
|------|--------|-----|
| context.md | Markdown with structured sections | Easy for Claude to parse and append. Human-readable for debugging. |
| branding.md | Markdown with token tables | Design tokens as markdown tables (color hex, font names, spacing px). Machine-parseable enough for Stitch prompts. |
| *-ux-brief.md | Markdown with section-by-section structure | Structured enough for UI agent to consume, readable enough for human review at HITL checkpoint. |
| *-ui-output.md | Markdown with embedded links | Stitch screen URLs, design decision log, variant notes. |
| copy/*.md | Plain markdown | Page content with headings, body, CTAs. Standard format for Stitch text input. |

### context.md Schema

```markdown
# Design Context

## Project
- Name: [project name]
- Created: [date]
- Stitch Project ID: [id or "not created"]

## Branding Status
- [ ] Branding created (date: ___)
- [ ] Branding source: [from-scratch | reverse-engineered from URL | imported from discovery]

## Pages Designed
| Page | UX Brief | UI Output | Stitch Screen | Status |
|------|----------|-----------|---------------|--------|
| homepage | done | done | [url] | approved |
| services | done | pending | — | in-progress |

## Active Decisions
- [Any open HITL decisions awaiting user input]

## Session History
- [date]: Created branding from reference site example.com
- [date]: Designed homepage -- approved after 2 iterations
```

## Integration Points

### External Services (MCP Tools)

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Google Stitch | Primary output. Commands call `create_project` then `generate_screen_from_text`. | Requires MCP server connected. Plugin must gracefully handle missing connection. |
| Figma | Read-only reference extraction. `get_design_context` for analysis. | Optional -- used for reference/competitor analysis, not primary output. |
| Pencil | Batch exploration and style guide extraction. | Optional -- useful for initial concept brainstorming before Stitch refinement. |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Command to Agent | Command file reads agent file via `@` reference | Command sets context, agent has its own decision logic |
| UX Agent to UI Agent | `.ui-ux/pages/{page}-ux-brief.md` file | Decoupled -- UI agent only reads the brief, never calls UX agent directly |
| Agent to Skills | `@~/.claude/skills/{skill}/SKILL.md` reference | Skills are stateless knowledge -- agents compose them, skills don't know about agents |
| Agent to MCP | `allowed-tools` in command frontmatter | Tools are listed as allowed; agent instructions specify when to call which |
| Plugin to fws-client-discovery | Read `06-UX-UI-Research.md` if exists in project | One-directional import. No write-back. Plugin must work without it. |

### Connector Pattern (from CONNECTORS.md convention)

```markdown
# CONNECTORS.md

| Category | Placeholder | Options | Used By |
|----------|-------------|---------|---------|
| Screen generator | ~~screen-gen | Google Stitch (primary) | /design, /branding |
| Design inspector | ~~design-inspector | Figma | /branding (reference extraction) |
| Concept explorer | ~~concept-explorer | Pencil | /branding (batch exploration) |
```

This allows the plugin to work with different tool combinations. If a user only has Stitch connected, everything still works. Figma and Pencil add capabilities but are not required.

## Anti-Patterns

### Anti-Pattern 1: Loading All Skills Into Every Command

**What people do:** Have the UX agent read all 14 psychology skills on every invocation.
**Why it's wrong:** Consumes 40-60% of the context window with skill content, leaving insufficient room for the actual design work, user conversation, and MCP tool responses.
**Do this instead:** Use the psychology-index.md lookup. Load 3-5 skills relevant to the page type. The index is the skill router.

### Anti-Pattern 2: Agents Calling Each Other Directly

**What people do:** UI agent instruction says "first run the UX agent" -- creating nested agent invocation.
**Why it's wrong:** Claude Code does not support true sub-agent spawning. This would create confusing, unpredictable behavior where instructions compound.
**Do this instead:** The command file orchestrates the sequence. Command reads UX agent instructions first, executes, then reads UI agent instructions. The command is the orchestrator, agents are executors.

### Anti-Pattern 3: Storing Design Tokens as JSON

**What people do:** Write `.ui-ux/branding.json` with structured tokens.
**Why it's wrong:** Claude reads and writes markdown natively. JSON requires parsing logic, is harder for humans to review at HITL checkpoints, and adds no benefit since Stitch prompts are natural language anyway.
**Do this instead:** Markdown tables for tokens. Easy to read, easy to append, easy for Claude to consume.

### Anti-Pattern 4: Skipping Branding Before Design

**What people do:** Jump straight to `/design` without establishing a design system.
**Why it's wrong:** Every page will have inconsistent visual decisions. The UI agent has no shared vocabulary.
**Do this instead:** The `/design` command checks for `.ui-ux/branding.md` existence. If missing, it either prompts the user to run `/branding` first or auto-triggers a minimal branding step.

### Anti-Pattern 5: Monolithic SKILL.md for Agents

**What people do:** Put the entire UX agent logic (persona + all psychology knowledge + output format + decision trees) into one massive SKILL.md.
**Why it's wrong:** Exceeds useful context size. The agent persona and decision logic are small; the psychology knowledge is large. They should be separate files loaded selectively.
**Do this instead:** Agent files are thin orchestration layers (~200-400 lines). Psychology knowledge lives in external skill files loaded on demand.

## Build Order Implications

The architecture has clear dependency ordering for implementation phases:

1. **Foundation first:** Plugin scaffolding (`.claude-plugin/plugin.json`, `SKILL.md`, `hooks/hooks.json`) and the `.ui-ux/` persistence schema. Without persistence, nothing else works across sessions.

2. **Branding before design:** `/branding` command + reference extractor skill + UI agent. This is the entry point -- users must establish a design system before designing pages.

3. **UX agent before UI agent:** The UX agent and psychology-index.md must exist before `/design` can work, because the UI agent depends on UX briefs. Build UX agent with 3-4 core psychology skills first, expand to all 14 later.

4. **Core Stitch integration before Figma/Pencil:** Google Stitch is the primary output tool. Get screen generation working end-to-end before adding Figma reference extraction or Pencil batch exploration.

5. **Copy generation last:** It is the most optional feature (users can provide their own copy). Build the happy path (user provides copy) first, then add generation.

## Sources

- Direct analysis of `git-master` plugin structure (v1.1.0) in this repository
- Direct analysis of `fws-client-discovery` plugin structure (v1.0.0) in this repository, including CLAUDE.md project context
- Claude Code plugin conventions: `.claude-plugin/plugin.json`, `commands/*.md` frontmatter, `hooks/hooks.json`, `@` file references, `$CLAUDE_PLUGIN_ROOT` variable
- Psychology skill files in `~/.claude/skills/` (confirmed 14 psychology + 5 design skills exist)
- `design-taste-frontend` SKILL.md for visual design rules and anti-patterns
- `fws-client-discovery` context chain pattern (`discovery-context.md`) as proven model for cross-command state

---
*Architecture research for: magic-ui-ux Claude Code plugin*
*Researched: 2026-03-10*
