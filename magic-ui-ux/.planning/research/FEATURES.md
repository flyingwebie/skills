# Feature Landscape

**Domain:** AI-powered UI/UX design orchestration plugin (Claude Code)
**Researched:** 2026-03-10
**Overall confidence:** MEDIUM (web search unavailable; based on training data knowledge of AI design tools through early 2025 + project context files)

## Table Stakes

Features users expect from any AI-powered design tool. Missing any of these means the plugin feels broken or incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Design system generation (colors, typography, spacing) | Every AI design tool (Figma AI, Galileo, v0, Relume) generates design tokens. Users expect this baseline. | Medium | Already proven in fws-client-discovery ux-ui-research skill. Port and extend. |
| Page layout generation | Core promise of AI design. Stitch, Pencil, v0 all do this. Users expect to describe a page and get a layout. | Medium | Delegates to Google Stitch MCP. Plugin's job is crafting the right prompt, not rendering. |
| Multi-page consistency | Design systems that drift between pages feel amateur. Figma's component library set this expectation. | Medium | `.ui-ux/` persistence folder is the right pattern. Must load before every generation call. |
| Responsive design awareness | Mobile-first is non-negotiable. Every modern design tool handles breakpoints. | Low | Stitch handles responsive output. Plugin ensures mobile considerations are in the prompt. |
| Component-level granularity | Users expect to design heroes, navs, footers, cards individually — not just full pages. | Medium | Map to Stitch's edit_screens capability for section-level iteration. |
| Human-in-the-loop checkpoints | Cursor, v0, and Copilot all let users accept/reject/iterate. Auto-generating without approval is a deal-breaker. | Low | Natural in Claude Code's conversational model. Explicit confirmation at branding, layout, copy stages. |
| Export/output in usable format | Generated designs must go somewhere actionable — Stitch screens, Figma files, or code. | Low | Google Stitch screens as primary output is solid. Must return screen URLs/IDs for continued iteration. |
| Variant exploration | Users expect "show me 3 options." Stitch has generate_variants. Galileo, Uizard, v0 all offer alternatives. | Low | Direct mapping to Stitch's generate_variants API. |
| Design iteration (edit existing screens) | "Make the hero bigger" / "Change the CTA color" — incremental editing is expected. | Medium | Maps to Stitch's edit_screens. Plugin must maintain screen IDs in `.ui-ux/` state. |

## Differentiators

Features that set magic-ui-ux apart. No competitor does these well. This is where the plugin's value lives.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Psychology-driven layout decisions** | No AI design tool applies cognitive psychology systematically. They generate "looks good" layouts. magic-ui-ux applies Hick's law (reduce choices), cognitive load theory (chunk information), loss aversion (frame CTAs), and 10+ other principles to decide WHERE elements go and WHY. This is the core differentiator. | High | Requires UX Agent to translate psychology principles into concrete layout rules (e.g., "Hick's law: max 3 nav items visible, progressive disclosure for rest"). Each principle must map to actionable design constraints. |
| **Reference site reverse-engineering** | "Design like this site but for my brand" is the #1 designer workflow. No AI tool does this well — they generate from scratch or from templates. Extracting design DNA (spacing rhythm, color ratios, animation style, layout patterns) from a reference URL and applying it to new content is genuinely novel in the AI design space. | High | Requires screenshot analysis, color extraction, typography detection, spacing measurement. Figma MCP get_screenshot + AI vision analysis. Output: design system tokens derived from reference. |
| **Separated UX and UI agents** | Every AI design tool conflates "what looks good" with "what works for users." Separating psychology-driven structure (UX Agent) from visual execution (UI Agent) mirrors how senior design teams actually work. UX decides the information hierarchy and interaction patterns; UI makes it beautiful. | Medium | Architecture decision, not a user-facing feature per se, but it produces measurably better output. UX Agent produces a layout brief; UI Agent produces the visual design. |
| **Animation choreography specification** | AI design tools output static screens. magic-ui-ux specifies entrance animations (Framer Motion), scroll behaviors (GSAP + ScrollTrigger), page transitions (Swup), and smooth scroll (Lenis) as part of the design output. Developers get animation specs, not just screenshots. | Medium | Does not execute animations — specifies them. Output: per-section animation recommendations with timing, easing, and trigger definitions. High value for developer handoff. |
| **Cross-session design memory** | Most AI design tools are stateless — each generation starts fresh. `.ui-ux/` folder persists branding, previous screens, design decisions, and iteration history across sessions. Design the homepage today, come back next week for services page, and everything stays consistent. | Medium | File-based persistence is simple but powerful. Must define clear schema for what gets stored (tokens, screen IDs, page inventory, decision log). |
| **Discovery research integration** | When fws-client-discovery data exists (personas, competitors, keywords), magic-ui-ux can consume it to make psychologically targeted designs — hero messaging for the identified buyer persona, CTAs that address their specific anxieties, layouts that outperform analyzed competitors. | Medium | Optional integration. Read 06-UX-UI-Research.md, 04-Buyer-Personas.md, 03-Competitor-Report.md if they exist. Graceful degradation when they don't. |
| **Copy generation with psychology framing** | Not just "write a headline" but "write a headline that triggers curiosity gap for this persona's core anxiety, within 8-word cognitive load limit." Psychology-informed copywriting integrated into the design flow. | Medium | Dependent on UX Agent psychology skills. Must always be human-approved before use in designs (project constraint). |
| **Video-to-website scroll experiences** | Scroll-driven animated sites with canvas frame rendering, GSAP ScrollTrigger choreography — the kind of sites that win Awwwards. No AI design tool outputs specs for these. | High | Niche but high-value differentiator. Only relevant for premium/creative projects. Should be an optional mode, not default. |

## Anti-Features

Features to explicitly NOT build. These are traps that would dilute the plugin's value or create maintenance nightmares.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **Full code generation (HTML/CSS/React output)** | Code generation is a solved problem (v0, Bolt, Claude itself). Competing here is a losing battle. The plugin's value is in the DESIGN DECISIONS, not the code. Stitch screens are the right abstraction layer — they feed into any code generation tool later. | Output Stitch screens + animation specs + design tokens. Let dedicated code tools (v0, Claude Code itself) handle implementation. |
| **Pixel-perfect mockup rendering** | The plugin runs in a terminal (Claude Code). It cannot render visual previews. Trying to generate pixel-perfect images would require external rendering and add massive complexity for marginal value. | Delegate rendering entirely to Stitch/Figma/Pencil via MCP. Show users screen URLs they can open in a browser. |
| **Real-time collaborative editing** | Figma owns this space. Building collaboration features is years of engineering. | Single-designer workflow through Claude Code. Share Stitch project links for team review. |
| **Full design system management (tokens, versioning, publishing)** | Tools like Tokens Studio, Style Dictionary, and Figma Variables already handle this. Building a token management system is scope creep. | Store design tokens in `.ui-ux/` as simple JSON/markdown. If users need full token management, export to their preferred tool. |
| **Accessibility auditing** | axe, Lighthouse, and dedicated a11y tools are far better at this. Building audit capabilities duplicates existing tools. | Include WCAG-compliant defaults in generated designs (contrast ratios, touch targets, focus states). Recommend audit tools in output. Do not audit. |
| **User testing / analytics integration** | Hotjar, FullStory, Google Analytics — these are mature products. Building analytics into a design plugin is massive scope creep. | Apply psychology principles proactively (prevention over detection). If discovery research data exists, use it to inform design decisions. |
| **Image/asset generation** | Midjourney, DALL-E, Ideogram own this space. AI image generation in a design plugin is a distraction. | Specify image requirements (dimensions, mood, subject) in design specs. Let users source images separately. Use placeholder/stock recommendations. |
| **Custom component library builder** | Building a drag-and-drop component library is a full product (Storybook, Bit). | Leverage Stitch's built-in components. Specify component patterns in design tokens, not as reusable component code. |

## Feature Dependencies

```
Design System Generation ──┐
                            ├──> Page Layout Generation
Reference Reverse-Eng. ────┘         │
                                      ├──> Variant Exploration
                                      ├──> Design Iteration (edit screens)
                                      └──> Animation Choreography

Psychology Skills (UX Agent) ──> Layout Decisions ──> Page Layout Generation

Copy Generation ──> Human Approval ──> Page Layout Generation

.ui-ux/ Persistence ──> Cross-Session Memory ──> Multi-Page Consistency

Discovery Research (optional) ──> Psychology-Informed Personalization
                                      │
                                      ├──> Copy Generation
                                      └──> Layout Decisions

Design System Generation ──> Animation Choreography (needs brand tokens for motion style)

Video-to-Website ──> Animation Choreography (extends, does not replace)
```

**Critical path:** Design System Generation must come first. Everything else depends on having a design system (colors, typography, spacing) established. Reference reverse-engineering is an alternative entry point that also produces a design system.

## MVP Recommendation

### Phase 1: Foundation (must ship first)

1. **Design system generation** (table stakes) -- either from scratch using industry rules or via reference reverse-engineering
2. **`.ui-ux/` persistence** (table stakes) -- store design tokens, screen IDs, project state
3. **Page layout generation via Stitch** (table stakes) -- the core `/design` command
4. **Human-in-the-loop checkpoints** (table stakes) -- branding approval, layout approval

### Phase 2: Psychology Layer (core differentiator)

5. **Psychology-driven layout decisions** (differentiator) -- UX Agent applies cognitive principles to layout briefs before passing to UI Agent
6. **Copy generation with psychology framing** (differentiator) -- integrated copywriting with human approval

### Phase 3: Polish and Power Features

7. **Reference site reverse-engineering** (differentiator) -- extract design DNA from URLs/screenshots
8. **Animation choreography specification** (differentiator) -- Framer Motion, GSAP, Swup, Lenis specs per page
9. **Variant exploration and iteration** (table stakes) -- multiple options, incremental edits
10. **Discovery research integration** (differentiator) -- consume fws-client-discovery data when available

### Defer Indefinitely

- **Video-to-website scroll experiences** -- high complexity, niche use case. Build as a separate optional skill, not a core feature. Only pursue after core plugin is validated.

**Rationale:** Ship the design system + Stitch generation loop first to validate the MCP integration works reliably. Layer psychology on top once the mechanical pipeline is solid. Reference reverse-engineering and animation specs are high-value but can wait -- they enhance quality but aren't needed for the core "describe page, get design" loop to function.

## Competitor Landscape (informing feature priority)

| Competitor | What It Does Well | What It Lacks | Relevance |
|------------|------------------|---------------|-----------|
| **v0 (Vercel)** | Text-to-UI code generation, React/Next.js output, rapid iteration | No psychology layer, no design system persistence, outputs code not designs | Different output format (code vs screens). Not a direct competitor but sets user expectations for AI design speed. |
| **Galileo AI** | High-fidelity UI generation from text prompts, design-quality output | No UX reasoning, no cross-page consistency, no animation specs | Closest competitor for AI screen generation. magic-ui-ux differentiates with psychology + persistence. |
| **Figma AI** | Native Figma integration, component suggestions, auto-layout | Tied to Figma ecosystem, no psychology layer, incremental features not full generation | Figma users may use both. magic-ui-ux feeds INTO Figma, not against it. |
| **Relume** | Sitemap-to-wireframe, component library, Figma export | Template-based not AI-generated, no psychology reasoning, no animation | Good for speed but generic output. magic-ui-ux's psychology layer produces more intentional designs. |
| **Uizard** | Screenshot-to-design, hand-drawn sketch conversion | Lower quality output, no design system management, no UX reasoning | Validates that reference-based design is a wanted feature. |
| **Google Stitch** | AI screen generation, variant exploration, rapid iteration | Stitch is the TOOL, not competitor. magic-ui-ux is the BRAIN that drives it intelligently. | Core dependency. Plugin's value is making Stitch generate psychology-informed designs, not generic ones. |
| **Pencil.dev** | Batch design generation from prompts, style guide awareness | Prompt quality determines output quality. No built-in UX reasoning. | Secondary MCP tool. Plugin crafts better prompts via psychology layer. |

**Key insight:** No tool in this space combines cognitive psychology with visual design generation. They all optimize for "fast and pretty" but not "intentional and effective." This is a genuine gap, not a marketing claim.

## Sources

- Project context: magic-ui-ux/.planning/PROJECT.md (direct read)
- Reference skill: fws-client-discovery/skills/ux-ui-research/SKILL.md (direct read)
- Reference architecture: fws-client-discovery/CLAUDE.md (direct read)
- Competitor knowledge: Based on training data (up to early 2025). Confidence: MEDIUM. The AI design tool landscape moves fast -- specific feature claims about v0, Galileo, Figma AI should be re-verified before making competitive positioning decisions.
- Psychology framework knowledge: HIGH confidence (cognitive psychology principles are stable; they do not change with software releases)
