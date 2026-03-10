# Pitfalls Research

**Domain:** AI-powered UI/UX design plugin with psychology skills, multi-agent orchestration, and MCP tool integration
**Researched:** 2026-03-10
**Confidence:** MEDIUM (based on project context analysis, existing skill patterns, and domain expertise; no web search verification available)

## Critical Pitfalls

### Pitfall 1: Psychology Skill Cacophony — Too Many Principles Competing Per Screen

**What goes wrong:**
The UX Agent loads 14+ psychology skills (cognitive load, Hick's law, loss aversion, trust, social proof, visual cues, halo effect, cognitive fluency, progressive disclosure, hooked model, Fogg behavior model, curiosity gap, status-quo bias) and tries to apply all of them to every design decision. The result is a design that contradicts itself: progressive disclosure says "hide complexity" while social proof says "show all testimonials" while Hick's law says "fewer choices" while curiosity gap says "add teasers." The agent either freezes in analysis paralysis or produces a Frankenstein layout that serves no principle well.

**Why it happens:**
When all skills are loaded into context simultaneously, the LLM treats them as equally weighted constraints. Without explicit priority ordering per page type and per section, the agent cannot resolve conflicts. This is the single most likely failure mode of the entire plugin.

**How to avoid:**
- Create a **psychology skill router** that selects 2-4 relevant skills per page section, not per page. A hero section uses different principles (curiosity gap, visual cues, cognitive fluency) than a pricing section (loss aversion, Hick's law, trust).
- Define a **skill priority matrix** mapping page-type + section-type to ranked psychology skills. Example: `homepage.hero -> [cognitive-fluency, curiosity-gap, visual-cues]`, `pricing.plans -> [hicks-law, loss-aversion, trust]`.
- Never load all 14 skills into a single prompt. The UX Agent should load only the 2-4 skills relevant to the current design decision.

**Warning signs:**
- UX Agent outputs mention 6+ psychology principles for a single section
- Design rationale contradicts itself ("we simplify choices per Hick's law" alongside "we add 5 trust badges, 3 testimonials, and a FAQ accordion")
- Designs feel cluttered despite each element having a "psychological justification"
- Agent takes excessively long to produce layout recommendations

**Phase to address:**
Phase 1 (Plugin scaffolding) — The skill routing logic must be built into the UX Agent's core architecture before any design generation happens.

---

### Pitfall 2: Design Drift Across Pages — No Enforceable Design System

**What goes wrong:**
The user runs `/design homepage`, iterates until happy, then runs `/design services` two days later. The services page comes out with subtly different spacing, different button styles, a different card pattern, or a shifted color palette. The `.ui-ux/` folder has branding guidelines, but they are too vague ("use blue for CTAs") or the agent does not actually read and enforce them on every generation call. Over 5-6 pages, the site looks like it was designed by different people.

**Why it happens:**
Three compounding factors: (1) MCP design tools like Google Stitch generate from text prompts, and slight prompt variations produce different visual outputs. (2) The `.ui-ux/` design system is stored as markdown prose rather than structured tokens, so the agent interprets it differently each time. (3) LLM context between sessions is not persistent — the agent "forgets" the visual feel of previous pages.

**How to avoid:**
- Store the design system as **structured, machine-readable tokens** in `.ui-ux/design-tokens.json` — exact hex values, exact spacing scale (4/8/12/16/24/32/48/64px), exact border-radius values, exact font sizes. Not prose descriptions.
- Create a **page manifest** in `.ui-ux/pages.json` that records every generated screen with its Stitch project/screen ID, the prompt used, the psychology skills applied, and the design tokens consumed. Every new `/design` call reads this manifest first.
- Build a **design system preamble** that gets prepended to every Stitch generation prompt — not "blue buttons" but `#2563EB, border-radius: 8px, padding: 12px 24px, font: Inter Semi Bold 16px`.
- After every page generation, run a **consistency check** that compares the new page's visual elements against the design tokens.

**Warning signs:**
- User says "this page doesn't feel like the homepage"
- Button colors are similar but not identical across pages (e.g., #2563EB vs #2464EC)
- Spacing feels "off" between pages but nobody can pinpoint why
- Card components have different corner radii or shadow depths on different pages

**Phase to address:**
Phase 1 (`.ui-ux/` persistence structure) and Phase 2 (first multi-page design flow). The persistence format must be defined before any screens are generated.

---

### Pitfall 3: MCP Tool Failure Cascade — Stitch Goes Down and Everything Breaks

**What goes wrong:**
The plugin's entire output depends on Google Stitch MCP being available and responsive. When Stitch returns an error, times out, or produces an unexpected response format, the agent has no fallback and the user gets a broken experience. Worse: the agent might retry the same failing call in a loop, burning context window and producing nothing.

**Why it happens:**
MCP tools are external services with their own availability, rate limits, and API changes. Google Stitch is relatively new and its MCP interface may change. The plugin treats MCP tools as reliable black boxes when they are actually the most fragile part of the system.

**How to avoid:**
- Build a **tool abstraction layer** that wraps every MCP call with: timeout handling, error classification (transient vs permanent), retry logic (max 2 retries for transient errors), and graceful degradation.
- Define **fallback outputs** for each MCP tool: if Stitch fails, output a structured text-based wireframe description that the user can manually input into Stitch later. If Figma fails, continue with Stitch. If Pencil fails, continue with Stitch.
- Store the **generated prompts** in `.ui-ux/prompts/` even when the MCP call fails. The user's design intent is preserved and can be replayed when the tool recovers.
- Never let the agent retry silently more than twice. After 2 failures, surface the error to the user with the saved prompt and instructions for manual execution.

**Warning signs:**
- Agent output ends abruptly mid-design
- Agent produces "I'll try again" messages repeatedly
- Stitch returns different response schemas than expected
- Screen generation takes more than 30 seconds without feedback

**Phase to address:**
Phase 1 (MCP integration layer) — Error handling must be built into the tool wrappers from day one, not bolted on later.

---

### Pitfall 4: Generic AI Aesthetic — Every Design Looks Like "AI Made This"

**What goes wrong:**
Despite having a design-taste-frontend skill with anti-AI-generic rules, the output converges on the same gradient-heavy, oversized-rounded-corner, stock-illustration aesthetic that characterizes low-effort AI design tools. Every hero section has the same structure: big heading, subtext, two buttons, decorative blob. Every services section is a 3-column card grid. The designs are technically correct but visually unmemorable.

**Why it happens:**
AI design tools (including Stitch) are trained on large datasets that center around the mean. Text-based prompts struggle to capture the specific visual tension, rhythm, and surprise that distinguishes premium design. The agent defaults to "safe" layouts because safety maximizes prompt compliance. The psychology skills make the design structurally sound but do nothing for visual distinctiveness.

**How to avoid:**
- The `/branding` command's reference reverse-engineering is the primary defense. **Never generate screens from scratch** — always start from a reference analysis that extracts the specific visual DNA (spacing rhythm, color contrast ratios, typography scale, hero layout pattern, animation style) of sites the user admires.
- Build **anti-patterns directly into the UI Agent's prompt**: "Do NOT use blob/wave decorative shapes. Do NOT use 3-column equal card grids for services. Do NOT default to gradient backgrounds." These must be explicit negations, not just positive guidance.
- Include **layout variation templates** — 5-6 different hero structures, 4-5 different services showcases, 3-4 different testimonial patterns — and rotate through them rather than always generating from zero.
- Use Stitch's `generate_variants` aggressively — generate 3-4 variants and let the user choose, rather than presenting a single "optimized" design.

**Warning signs:**
- All hero sections across different projects look structurally identical
- Designs pass all psychology checks but the user says "it's boring" or "it looks like every other AI site"
- The agent never suggests unusual or bold layout choices
- Reference reverse-engineering step gets skipped or produces generic descriptions

**Phase to address:**
Phase 2 (UI Agent design generation) — But the anti-patterns list should be defined in Phase 1 alongside the design-taste-frontend skill integration.

---

### Pitfall 5: Human-in-the-Loop Interruption Fatigue vs. Silent Mistakes

**What goes wrong:**
Two failure modes that pull in opposite directions: (A) The plugin asks for approval at every micro-decision — "Approve this color? Approve this heading? Approve this spacing?" — and the user gets exhausted, starts rubber-stamping everything, and the human-in-the-loop becomes theater. (B) The plugin makes too many autonomous decisions, the user only sees the final screen, and by then it is too late to course-correct on foundational choices (wrong layout direction, wrong tone, misapplied psychology).

**Why it happens:**
The line between "strategic decision requiring human input" and "execution detail the AI should handle" is not formally defined. Without explicit categorization, the agent either defaults to asking about everything (safe but annoying) or asking about nothing (fast but dangerous).

**How to avoid:**
- Define exactly three **approval gates** per `/design` invocation:
  1. **Branding confirmation** — after reverse-engineering or creating a design system (colors, fonts, style direction). MUST be approved.
  2. **Layout direction** — after the UX Agent produces a section-by-section layout plan with psychology rationale. MUST be approved.
  3. **Design review** — after Stitch generates the screen(s). MUST be reviewed with option to iterate.
- Everything between these gates is autonomous: the agent handles spacing, padding, token application, prompt construction, and MCP calls without asking.
- For copy generation specifically: show the copy in the layout direction gate, not as a separate interruption.
- Never ask yes/no questions. Always present options: "Option A: large hero with video background. Option B: split hero with text left, image right. Option C: minimal text-only hero." Decision-making is faster with options than open-ended approval.

**Warning signs:**
- User starts responding "yes" or "looks good" to everything without reading
- User complains the process is "slow" despite fast generation
- User discovers a problem on page 4 that traces back to a silent decision on page 1
- Agent asks more than 5 questions during a single `/design` invocation

**Phase to address:**
Phase 1 (workflow architecture) — The approval gates must be defined in the skill workflow before any design commands are built.

---

### Pitfall 6: State Persistence Corruption and Staleness

**What goes wrong:**
The `.ui-ux/` folder accumulates state over time: branding files, screen references, design tokens, page manifests. Edge cases corrupt this state: (A) User manually edits a file and introduces invalid JSON. (B) Stitch screen IDs become stale because the user deleted screens in Stitch directly. (C) Two concurrent Claude sessions write to `.ui-ux/` simultaneously and one overwrites the other. (D) The design system evolves mid-project (user changes brand colors after 3 pages are done) and old page references now point to an outdated design system.

**Why it happens:**
File-based persistence in a `.ui-ux/` folder is the right architectural choice for cross-session state, but files lack transactional guarantees. There is no schema validation on read, no conflict detection, and no versioning of the design system itself.

**How to avoid:**
- Add a **schema version** to every JSON file in `.ui-ux/`. The agent validates schema on read and migrates if needed.
- Implement **read-validate-or-regenerate**: when the agent reads `.ui-ux/design-tokens.json` and finds invalid data, it asks the user whether to regenerate from scratch or fix the specific issue.
- For Stitch screen references: **verify screen existence** before referencing. If a Stitch screen ID returns a 404, remove it from the manifest and flag it.
- For design system evolution: when brand colors change, produce a **migration plan** that lists all previously generated pages that need to be regenerated. Do not silently mix old and new design systems.
- Use a **last-modified timestamp** in each file so the agent can detect if files were modified outside its control.

**Warning signs:**
- Agent errors when reading `.ui-ux/` files (JSON parse errors, missing fields)
- Stitch API returns "screen not found" errors
- Pages designed after a brand change still reference old colors
- Two users report different design systems for the same project

**Phase to address:**
Phase 1 (`.ui-ux/` persistence architecture) — Schema validation and versioning must be built into the persistence layer from the start.

---

## Moderate Pitfalls

### Pitfall 7: Copy Generation Without Brand Voice Calibration

**What goes wrong:**
When no copy markdown is provided, the agent generates page copy that is technically fine but sounds generic — corporate-bland or startup-hype, with no calibration to the specific brand's voice. The human-in-the-loop approval catches obvious errors but not tonal mismatches.

**Why it happens:**
The agent has no brand voice reference to calibrate against. Without explicit tone/voice parameters, LLMs default to a neutral, slightly promotional voice.

**How to avoid:**
- Require `/branding` to define **brand voice attributes** (formal/casual, technical/accessible, bold/understated) as part of the design system.
- If consuming fws-client-discovery output, extract tone from buyer personas and competitor analysis.
- Show copy alongside the layout direction, not in isolation — tone mismatches are easier to detect in visual context.

**Warning signs:**
- Copy reads like it could be for any company in the same industry
- User rewrites more than 30% of generated copy
- Tone shifts between pages (homepage is casual, services page is corporate)

**Phase to address:**
Phase 2 (copy generation feature).

---

### Pitfall 8: Animation Specification Bloat

**What goes wrong:**
The plugin specifies animations (Framer Motion, GSAP, Swup, Lenis) for every page element, producing a specification document that implies a massively complex frontend. The developer receiving the spec either ignores it entirely or implements it partially, creating an inconsistent experience. Meanwhile, the animations specified may conflict (Lenis smooth scroll + GSAP ScrollTrigger with different easing curves, or Swup page transitions that break Framer Motion component animations).

**Why it happens:**
Animation is fun to specify and the AI tends toward "more is better." Without a performance budget or a "less is more" constraint, the animation spec grows unchecked.

**How to avoid:**
- Define an **animation budget** per page: maximum 3-4 animated elements in the viewport at any time.
- Specify a **single easing curve** for the entire site (e.g., `cubic-bezier(0.16, 1, 0.3, 1)`) and only deviate for specific intentional contrast.
- Choose **one** scroll library (Lenis OR native smooth scroll, not both) and **one** transition approach (Swup OR SPA routing, not both). Document the choice and prohibit mixing.
- Animation specs should be a separate, optional output — not baked into every design. Some projects do not need animation specs at all.

**Warning signs:**
- Animation spec is longer than the layout spec
- More than 2 animation libraries recommended for a single project
- Developer asks "do you really need all this animation?"

**Phase to address:**
Phase 3 (animation specifications) — after core design generation is working.

---

### Pitfall 9: Reference Reverse-Engineering Produces Shallow Output

**What goes wrong:**
The `/branding` command takes a URL or screenshot and is supposed to reverse-engineer the design system. But the output is surface-level: "they use blue and white with sans-serif fonts" rather than actionable tokens. The extracted "design system" is too vague to enforce consistency and the team ends up designing from scratch anyway.

**Why it happens:**
Extracting design DNA from a URL or screenshot requires multiple analysis passes: visual hierarchy, spacing rhythm, color relationships (not just swatches), typography scale, component patterns, and animation approach. A single-pass analysis misses most of this.

**How to avoid:**
- Structure reverse-engineering as **multiple focused passes**, each extracting a specific dimension:
  1. Color extraction: primary, secondary, accent, background, text (exact hex values)
  2. Typography: font families, size scale, weight usage, line heights
  3. Spacing: section padding, element gaps, grid structure
  4. Components: button style, card style, form style, navigation pattern
  5. Visual character: rounded vs sharp, dense vs airy, illustration style, photo treatment
- Use Figma MCP (`get_design_context`, `get_screenshot`) when a Figma file is available — this produces far more accurate extraction than screenshot analysis.
- Store extraction results as structured tokens immediately, not as prose.

**Warning signs:**
- Extracted design system is less than 20 lines
- Color palette has fewer than 5 distinct roles
- No spacing scale is extracted
- User says "this doesn't feel like the reference site"

**Phase to address:**
Phase 2 (branding command implementation).

---

### Pitfall 10: UX Agent and UI Agent Boundary Confusion

**What goes wrong:**
The UX Agent (psychology + layout) and UI Agent (visual execution) step on each other's responsibilities. The UX Agent starts specifying exact colors. The UI Agent makes layout changes that contradict the psychology rationale. Or worse: the two agents produce conflicting outputs and the orchestrator does not catch it.

**Why it happens:**
"UX" and "UI" are conceptually distinct but practically overlapping. Layout decisions (UX) affect visual rhythm (UI). Color choices (UI) affect perceived trustworthiness (UX). Without razor-sharp boundaries, both agents claim the overlapping territory.

**How to avoid:**
- Define explicit **interface contracts** between agents:
  - UX Agent outputs: section order, section purpose, content hierarchy per section, psychology rationale, approximate layout structure (e.g., "2-column split, content left, image right"), and constraints (e.g., "max 3 options visible per Hick's law").
  - UI Agent receives UX output and decides: exact colors, exact spacing, exact typography application, component styling, animation, and visual treatment. The UI Agent may NOT change section order, remove sections, or alter content hierarchy.
- The UX Agent never mentions specific colors, fonts, or pixel values.
- The UI Agent never adds or removes sections or content elements.

**Warning signs:**
- UX Agent output contains hex color codes or font names
- UI Agent output says "I reorganized the sections for better flow"
- Design rationale mixes psychology language with visual design language in the same sentence

**Phase to address:**
Phase 1 (agent architecture and skill assignment).

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Prose design system in `.ui-ux/branding.md` instead of structured tokens | Faster to write, human-readable | Agent interprets differently each session, drift is inevitable | Never — start with structured tokens from day one |
| Hardcoding Stitch as the only MCP tool | Simpler integration, fewer abstractions | Cannot swap to Figma or Pencil without rewriting the pipeline | MVP only — add tool abstraction in Phase 2 |
| Loading all psychology skills per invocation | No routing logic needed | Context bloat, conflicting recommendations, slower responses | Never — skill routing is critical infrastructure |
| Skipping schema validation on `.ui-ux/` reads | Faster development, fewer edge cases to handle | Corrupted state produces silent bugs and wrong designs | MVP only — add validation before multi-page flows |
| Single Stitch variant (no `generate_variants`) | Faster generation, simpler workflow | Designs converge to single aesthetic, user has no choice | Acceptable until Phase 2 |
| Copy baked into design prompts without separate approval | Fewer interruptions, faster flow | User discovers bad copy only after seeing the final design | Never — copy approval gate is non-negotiable |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Google Stitch MCP | Sending raw design system prose as the prompt — produces inconsistent output | Construct prompts from structured tokens with exact values: "Header: Inter Bold 48px #1A1A1A, Background: #FFFFFF, CTA Button: #2563EB rounded-lg px-6 py-3" |
| Google Stitch MCP | Assuming `generate_screen_from_text` maintains state between calls | Each call is stateless. Include full design context in every prompt. Reference the project ID to maintain association. |
| Google Stitch MCP | Not storing screen IDs after generation | Always persist screen IDs to `.ui-ux/pages.json` immediately after successful generation. IDs are needed for `edit_screens` and `generate_variants`. |
| Figma MCP | Using `get_screenshot` as the primary reverse-engineering tool | Use `get_design_context` first for structured data (colors, fonts, components), then `get_screenshot` only for visual context that structured data misses. |
| Pencil MCP | Sending generic prompts without page-specific context | Include: section structure, exact copy, design direction from UX research, and component patterns. The fws-client-discovery page content files show the correct prompt structure. |
| fws-client-discovery integration | Treating discovery output as required input | The plugin must work standalone. Discovery output is a bonus that enriches design decisions, not a dependency that blocks them. |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Loading all 14 psychology skills into context | Slow agent response (10+ seconds to reason), verbose output, contradictory recommendations | Skill router selects 2-4 per section | Every invocation from day one |
| Storing full Stitch prompts as conversation history | Context window fills up after 3-4 pages in one session | Store prompts in `.ui-ux/prompts/`, reference by filename in conversation | After designing 3+ pages in a single session |
| Full design system re-read on every agent invocation | Adds 500+ tokens per call even when only generating a single section | Cache design tokens in a compact preamble (under 200 tokens) that gets prepended to every prompt | Not a scale issue but a cost/speed issue from page 1 |
| Re-generating screens instead of editing | Each `generate_screen_from_text` is a full generation; `edit_screens` is incremental | Use `edit_screens` for iterations on existing pages, `generate_screen_from_text` only for new pages | After 2-3 iteration cycles on the same page |

## UX Pitfalls

These are pitfalls in the plugin's own UX — how the designer experiences using the plugin.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Showing psychology rationale by default for every section | Designer drowns in academic justification they did not ask for | Show rationale only when requested (`--explain` flag) or collapsed by default |
| Requiring `/branding` before any `/design` command | Blocks users who just want to quickly prototype a page | Allow `/design` without branding — use sensible defaults, warn about drift |
| Outputting a wall of text before showing the actual design | Designer wants to see the screen, not read a 500-word design rationale first | Lead with the visual output (Stitch screen link), follow with rationale |
| No way to say "more like X, less like Y" during iteration | Designer must describe changes from scratch each iteration | Support comparative feedback: "more contrast", "simpler hero", "warmer palette" |

## "Looks Done But Isn't" Checklist

- [ ] **Design tokens file:** Often missing responsive variants — verify that the token file includes mobile-specific overrides (smaller font sizes, tighter spacing)
- [ ] **Cross-page consistency:** Often missing navigation and footer consistency — verify that nav/footer are generated from the same template spec across all pages
- [ ] **Stitch screen IDs:** Often missing after failed-and-retried generation — verify that `.ui-ux/pages.json` has valid, accessible screen IDs for every generated page
- [ ] **Psychology skill application:** Often missing the "why not" — verify that the UX Agent explains which skills were considered and deliberately excluded, not just which were applied
- [ ] **Accessibility:** Often missing from AI-generated designs — verify contrast ratios, focus states, and touch targets are specified in the design tokens, not just in a separate document
- [ ] **Animation specs:** Often missing `prefers-reduced-motion` fallbacks — verify every animation spec includes a reduced/no-motion alternative
- [ ] **Copy approval:** Often missing for secondary pages — verify that copy was approved for services, about, and inner pages, not just the homepage
- [ ] **Mobile layout:** Often missing entirely from Stitch output — verify that mobile variants were generated or specified, not assumed

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Psychology skill cacophony | LOW | Re-run with skill router enabled; regenerate affected sections with 2-4 targeted skills |
| Design drift across pages | HIGH | Audit all pages against design tokens; identify the canonical page; regenerate drifted pages from structured tokens |
| MCP tool failure cascade | LOW | Retrieve saved prompts from `.ui-ux/prompts/`; replay when tool recovers; or manually input into Stitch UI |
| Generic AI aesthetic | MEDIUM | Run reference reverse-engineering; extract specific visual DNA; regenerate with anti-pattern constraints and variant exploration |
| Interruption fatigue | LOW | Reconfigure approval gates to exactly 3; batch pending questions into single decision point |
| State persistence corruption | MEDIUM | Validate all `.ui-ux/` files; regenerate corrupted files from last known good state; re-verify Stitch screen IDs |
| Copy without brand voice | LOW | Define brand voice attributes in `.ui-ux/`; regenerate copy with voice calibration; re-approve |
| Animation bloat | LOW | Apply animation budget (max 3-4 per viewport); remove lowest-impact animations; consolidate to single easing curve |
| Shallow reference extraction | MEDIUM | Re-run extraction with structured multi-pass approach; supplement with Figma MCP if file available |
| Agent boundary confusion | MEDIUM | Audit skill assignments; enforce interface contracts; regenerate sections where boundaries were violated |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Psychology skill cacophony | Phase 1: Plugin scaffolding | Skill router selects max 4 skills per section; no full-skill-set loads in any prompt |
| Design drift across pages | Phase 1: `.ui-ux/` persistence | Design tokens are structured JSON; page manifest exists with screen IDs |
| MCP tool failure cascade | Phase 1: MCP integration | All MCP calls have timeout, retry, and fallback; prompts saved on failure |
| Generic AI aesthetic | Phase 1 + Phase 2: Anti-patterns + branding | Anti-pattern list exists in UI Agent; reference extraction produces 50+ structured tokens |
| Human-in-the-loop balance | Phase 1: Workflow architecture | Exactly 3 approval gates defined; no yes/no questions; options always presented |
| State persistence corruption | Phase 1: `.ui-ux/` persistence | Schema version in all JSON files; validation on read; migration support |
| Copy without brand voice | Phase 2: Copy generation | Brand voice attributes in design system; tone consistency across pages |
| Animation bloat | Phase 3: Animation specs | Animation budget defined; single easing curve; one scroll lib + one transition lib max |
| Shallow reference extraction | Phase 2: Branding command | Multi-pass extraction; structured token output; minimum 5 color roles + spacing scale |
| Agent boundary confusion | Phase 1: Agent architecture | Written interface contracts; UX Agent never outputs visual specifics; UI Agent never reorders sections |

## Sources

- Project context: `/Volumes/Productivity/Coding/skills/magic-ui-ux/.planning/PROJECT.md`
- Existing UX research skill patterns: `/Volumes/Productivity/Coding/skills/fws-client-discovery/skills/ux-ui-research/SKILL.md`
- FWS discovery architecture (design tool integration patterns): `/Volumes/Productivity/Coding/skills/fws-client-discovery/CLAUDE.md`
- Domain expertise: multi-agent orchestration patterns, MCP tool integration failure modes, design system maintenance, cognitive psychology application in UI design
- Confidence note: Web search was unavailable for this research. Findings are based on project context analysis, existing codebase patterns, and domain knowledge. Recommend validating MCP-specific pitfalls against current Google Stitch documentation when available.

---
*Pitfalls research for: AI-powered UI/UX design plugin (magic-ui-ux)*
*Researched: 2026-03-10*
