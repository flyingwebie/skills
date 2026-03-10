# Stack Research

**Domain:** Claude Code plugin for AI-orchestrated UI/UX design
**Researched:** 2026-03-10
**Confidence:** MEDIUM (web search/fetch unavailable; versions based on training data through May 2025 -- flag for validation)

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Claude Code Plugin (CLAUDE.md + commands/ + skills/) | N/A | Plugin architecture | Established convention in this repo. git-master and fws-client-discovery both use this pattern: top-level SKILL.md, `.claude-plugin/plugin.json`, `commands/` for slash commands, `skills/` for knowledge bases, `hooks/` for safety guards. Proven, tested, consistent. |
| `.ui-ux/` persistence directory | N/A | Cross-session design state | Stores branding guidelines, design tokens, Stitch project links, reference screenshots. Analogous to fws-client-discovery's `discovery-context.md` but as a folder because design artifacts are multi-file (images, tokens, screen links). |
| Markdown + JSON | N/A | Configuration and knowledge storage | All skills, commands, references, and templates are markdown. Design tokens stored as JSON for machine-readability. No build step, no dependencies. |

### MCP Tool Integrations

| Tool | MCP Functions | Purpose | When to Use |
|------|---------------|---------|-------------|
| Google Stitch | `create_project`, `generate_screen_from_text`, `edit_screens`, `generate_variants` | Primary screen generation and iteration | Every `/design` command. Create Stitch project per client, generate screens from UX+UI agent output, iterate with variants. |
| Figma | `get_design_context`, `get_screenshot` | Reference extraction and design inspection | `/branding` command when reverse-engineering from existing Figma files. Read-only -- pull design context, extract tokens, screenshot components. |
| Pencil | `batch_design`, `batch_get`, `get_guidelines`, `get_style_guide` | Batch concept generation and guideline extraction | `/branding` for extracting style guides from reference sites. `/design` as alternative to Stitch for rapid concept exploration. |

### Animation Libraries (for spec generation, not runtime)

The plugin does not install these libraries. It generates **animation specification documents** recommending their use per page. These specs feed into the build phase.

| Library | Version (verify) | Purpose | When to Specify |
|---------|-----------------|---------|-----------------|
| Framer Motion | ^11.x (verify: may be `motion` package now) | React component animation | React/Next.js projects. Micro-interactions, page transitions, scroll-triggered reveals, layout animations. |
| GSAP + ScrollTrigger | ^3.12.x | Scroll-driven animation, timeline control | Any framework. Parallax heroes, scroll-driven video playback, complex sequenced animations, canvas frame rendering. |
| Swup.js | ^4.x | SPA-like page transitions for MPA | Multi-page static/Jamstack sites. Smooth navigation without full SPA framework overhead. Skip for React/Next.js. |
| Lenis | ^1.x | Smooth scroll with momentum | Long-scroll pages, storytelling layouts, portfolio sites. Pairs with GSAP ScrollTrigger for parallax. |

**Version confidence: LOW** -- versions based on training data. Verify with `npm view <package> version` before finalizing any build-phase documentation.

### Psychology Skills (existing, to be referenced)

These skills already exist in `~/.claude/skills/` and will be referenced by the UX Agent via `@` imports in skill files.

| Skill | Psychology Principle | Design Application |
|-------|---------------------|-------------------|
| cognitive-load | Miller's Law, chunking | Section layout, information grouping, navigation depth |
| hicks-law | Decision paralysis from too many options | CTA count per section, menu item limits, form field reduction |
| cognitive-fluency-psychology | Processing ease increases preference | Typography readability, familiar layouts, consistent patterns |
| cognitive-biases | Anchoring, framing, defaults | Pricing page layout, plan highlighting, default selections |
| halo-effect-psychology | First impressions color all perception | Hero section quality, above-fold design investment |
| loss-aversion-psychology | Fear of loss > desire for gain | CTA copy, urgency elements, trial expiry framing |
| visual-cues-cta-psychology | Eye tracking, directional cues | CTA placement, visual hierarchy, whitespace direction |
| trust-psychology | Authority signals, social proof placement | Trust badges, testimonials, certification display |
| social-proof-psychology | Bandwagon effect, testimonial placement | Review sections, client logos, case study positioning |
| progressive-disclosure | Reduce overwhelm by revealing progressively | Accordion FAQs, tabbed content, expandable sections |
| hooked-model | Trigger-Action-Reward-Investment loop | Onboarding flows, engagement loops, notification design |
| fogg-behavior-model | Motivation + Ability + Trigger = Behavior | CTA design, form simplification, friction reduction |
| curiosity-gap | Information gap creates desire to click | Headline copy, teaser sections, content previews |
| status-quo-bias | People prefer the current state | Default options, migration flows, change justification |

### Design Skills (existing, to be referenced)

| Skill | Purpose | Used By |
|-------|---------|---------|
| design-taste-frontend | Metric-based design quality rules, anti-AI-generic patterns | UI Agent -- visual quality enforcement |
| frontend-design | Production-grade interface patterns | UI Agent -- component-level design decisions |
| framer-motion-animator | Framer Motion animation specifications | UI Agent -- React animation specs |
| svg-logo-designer | Logo and icon design | `/branding` command |
| redesign-existing-projects | Redesign assessment and execution | `/branding` when working from existing site |

### Supporting Libraries (build-phase, not plugin-phase)

| Library | Purpose | When to Recommend |
|---------|---------|-------------------|
| Tailwind CSS v4 | Utility-first CSS, design token integration | Default recommendation for all projects |
| shadcn/ui | Accessible component primitives | React projects needing component library |
| Radix UI | Headless accessible primitives | When shadcn/ui components need customization |

## Plugin Architecture

### Directory Structure (based on git-master and fws-client-discovery conventions)

```
magic-ui-ux/
  SKILL.md                          # Top-level skill with trigger words
  CLAUDE.md                         # Full plugin context (like fws-client-discovery)
  CONNECTORS.md                     # MCP tool connector documentation
  .claude-plugin/
    plugin.json                     # Plugin metadata (name, version, description)
  commands/
    branding.md                     # /magic-ui-ux:branding slash command
    design.md                       # /magic-ui-ux:design slash command
  skills/
    ux-agent/
      SKILL.md                      # UX psychology agent knowledge
      references/
        psychology-decision-tree.md # When to apply which psychology principle
        layout-patterns.md          # Psychology-informed layout patterns
    ui-agent/
      SKILL.md                      # UI visual design agent knowledge
      references/
        animation-specs.md          # Animation library recommendation framework
        visual-quality-rules.md     # Anti-generic design enforcement rules
    branding/
      SKILL.md                      # Branding extraction and creation
      references/
        reverse-engineering.md      # How to extract design systems from URLs/screenshots
    copy-generator/
      SKILL.md                      # Page copy generation with HITL
  templates/
    session-context.md              # SessionStart hook template
    design-brief.md                 # Per-page design brief template
    branding-guidelines.md          # Output template for .ui-ux/branding.md
    design-tokens.json              # Output template for .ui-ux/tokens.json
    stitch-screen-spec.md           # Stitch prompt template
  hooks/
    hooks.json                      # SessionStart, PreToolUse, PostToolUse hooks
  references/
    mcp-tool-guide.md               # How to use Stitch, Figma, Pencil MCP tools
```

### Agent Separation Strategy

**Two distinct agents, not two Claude instances.** The UX Agent and UI Agent are skill files that the slash commands orchestrate sequentially. Claude reads the UX Agent skill first (psychology decisions), writes intermediate output, then reads the UI Agent skill (visual execution).

```
/design homepage
  1. Read .ui-ux/ for existing design system
  2. Read skills/ux-agent/SKILL.md
     -> Apply psychology principles to page structure
     -> Output: layout-brief.md (sections, hierarchy, psychology rationale)
  3. Read skills/ui-agent/SKILL.md
     -> Apply visual design rules to layout brief
     -> Output: stitch-prompt (visual spec with animation notes)
  4. Call MCP: Google Stitch generate_screen_from_text
  5. Present to user for review (HITL)
  6. Store screen link in .ui-ux/screens/
```

**Why sequential, not parallel:** UX decisions constrain UI decisions. Psychology determines what goes where; visual design determines how it looks. Parallel execution would produce incoherent results.

**Why not separate Claude instances:** Claude Code does not support spawning parallel agent instances from a plugin. The "agent separation" is achieved through skill file boundaries -- each skill has distinct knowledge, references, and output expectations.

### Persistence Model (`.ui-ux/` directory)

```
.ui-ux/
  branding.md             # Design system: colors, fonts, spacing, tone
  tokens.json             # Machine-readable design tokens
  references/             # Screenshots, mood boards, reference URLs
    reference-001.png
    reference-002.png
  screens/                # Stitch screen links and metadata
    homepage.md           # Screen URL, variant URLs, revision notes
    services.md
  copy/                   # Approved page copy (after HITL)
    homepage.md
    services.md
  context.md              # Running context (like discovery-context.md)
```

**Why a folder, not a single file:** Design artifacts include images (reference screenshots), JSON (tokens), and multiple markdown files (per-page screens). A single context file would become unwieldy and lose the per-page granularity needed for cross-page consistency checks.

### Hook Strategy

```json
{
  "SessionStart": [{
    "matcher": "",
    "hooks": [{
      "type": "command",
      "command": "cat ${CLAUDE_PLUGIN_ROOT}/templates/session-context.md",
      "timeout": 5
    }]
  }]
}
```

**SessionStart** injects context about available MCP tools and reminds Claude to read `.ui-ux/` before any design operation.

**PreToolUse/PostToolUse** hooks are not needed initially -- MCP tool calls are not dangerous in the way git operations are. Consider adding PostToolUse validation in a later phase if Stitch output quality needs automated checking.

### Connector Pattern (from fws-client-discovery)

```markdown
# CONNECTORS.md

| Category | Placeholder | Options | Used By |
|----------|-------------|---------|---------|
| Screen generator | ~~screen_tool | Google Stitch | /design |
| Design inspector | ~~design_tool | Figma | /branding |
| Concept generator | ~~concept_tool | Pencil | /branding, /design |
| UX research | ~~ux_research | fws-client-discovery | /branding (optional) |
```

The plugin works without any MCP tools connected (generates text-based design specs), but MCP tools elevate output from specification to visual screens.

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Google Stitch as primary output | Figma as primary output | When client requires Figma deliverables for developer handoff (Stitch is for iteration speed) |
| Sequential UX then UI agent | Combined single-pass agent | Only if performance is critical and page is simple (loses psychology depth) |
| `.ui-ux/` folder persistence | Single `design-context.md` file | Never -- design needs multi-file persistence for screenshots and per-page tracking |
| Markdown skill files | Code-based skill logic | Never for this repo -- all plugins use pure markdown skills with no build step |
| Tailwind CSS v4 (build recommendation) | CSS Modules, styled-components | CSS Modules for legacy projects; styled-components is declining in React ecosystem |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Midjourney/DALL-E for UI screens | Image generators produce non-editable raster art, not iterable UI screens | Google Stitch -- produces structured, editable screens |
| Single monolithic SKILL.md | Would exceed context window with UX psychology + UI design + MCP tools + branding | Split into focused skill files per agent/domain |
| Runtime animation code in plugin | Plugin generates design specs, not production code. Code comes at build time. | Animation specification documents that recommend library + config |
| `styled-components` | Runtime CSS-in-JS has performance overhead and is losing ecosystem momentum | Tailwind CSS v4 or CSS Modules |
| Custom design token format | Non-standard token formats create translation burden | Style Dictionary / W3C Design Token format for tokens.json |

## Stack Patterns by Variant

**If project is React/Next.js:**
- Recommend Framer Motion for animations (native React integration)
- Skip Swup.js (Next.js has built-in routing with transitions)
- Lenis still adds value for scroll feel within pages
- shadcn/ui + Radix for component primitives

**If project is static/Jamstack (Astro, 11ty, Hugo):**
- Recommend GSAP + ScrollTrigger for animations
- Recommend Swup.js for page transitions
- Recommend Lenis for smooth scrolling
- No component library -- custom CSS/Tailwind

**If project is video-to-website (scroll-driven video):**
- GSAP + ScrollTrigger is mandatory
- Lenis mandatory for scroll control
- Canvas frame rendering for video frames
- Reference video-to-website SKILL.md pattern

**If client has existing Figma design system:**
- Use Figma MCP (`get_design_context`) to extract tokens
- Import into `.ui-ux/tokens.json`
- Generate Stitch screens that match Figma tokens
- Skip `/branding` -- use Figma as source of truth

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| Framer Motion 11.x | React 18+, Next.js 14+ | Verify: may have been renamed to `motion` package |
| GSAP 3.12.x | Any framework, vanilla JS | ScrollTrigger is a separate plugin, included in GSAP npm |
| Swup 4.x | Any MPA, not needed for SPAs | Plugins: @swup/head-plugin, @swup/fade-theme, @swup/scroll-plugin |
| Lenis 1.x | Any framework | Can be used standalone or with GSAP ScrollTrigger |
| Tailwind CSS 4.x | Any framework | v4 uses CSS-first config, not tailwind.config.js |

**IMPORTANT: All version numbers need verification.** Run `npm view <package> version` before committing to any build-phase documentation. Framer Motion in particular may have undergone a package rename to `motion` since training data.

## Sources

- `/Volumes/Productivity/Coding/skills/git-master/` -- Plugin architecture conventions (SKILL.md, .claude-plugin/, commands/, skills/, hooks/) -- HIGH confidence
- `/Volumes/Productivity/Coding/skills/fws-client-discovery/` -- Connector pattern, context chain pattern, UX research skill structure -- HIGH confidence
- `/Volumes/Productivity/Coding/skills/magic-ui-ux/.planning/PROJECT.md` -- Project requirements, MCP tool list, psychology skill inventory -- HIGH confidence
- Training data (May 2025) -- Animation library versions, Tailwind v4, Stitch/Figma/Pencil MCP capabilities -- LOW confidence, needs verification

---
*Stack research for: Claude Code UI/UX design plugin (magic-ui-ux)*
*Researched: 2026-03-10*
