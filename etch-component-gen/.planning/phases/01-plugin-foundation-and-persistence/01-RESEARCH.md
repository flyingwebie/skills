# Phase 1: Plugin Foundation and Persistence - Research

**Researched:** 2026-03-13
**Domain:** Claude Code plugin scaffolding, JSON persistence, ACSS 4.x token systems, Etch page builder conventions
**Confidence:** HIGH

## Summary

Phase 1 establishes the plugin skeleton and all foundational knowledge files that downstream phases depend on. The work is entirely file creation -- no runtime code, no external dependencies. Every file is either a markdown instruction file (CLAUDE.md, SKILL.md, command files, skill files), a JSON manifest (plugin.json, registry schema), or a reference document (ACSS tokens, Etch conventions).

The critical insight is that this plugin follows the exact same conventions as the `magic-ui-ux` and `git-master` plugins in the FWS skills repo. The file structure, YAML frontmatter format, command patterns, skill organization, and persistence folder approach are all directly replicable from those existing plugins. There is no invention needed for the plugin architecture -- only adaptation of proven patterns to the Etch + ACSS domain.

The two non-trivial deliverables are: (1) the ACSS 4.x token reference files, which must be comprehensive and accurate since every future generation skill reads them, and (2) the Etch conventions skill, which encodes structural rules (Section > Container hierarchy, AutoBEM alignment, container queries, accessibility defaults) that govern all generated output.

**Primary recommendation:** Mirror the magic-ui-ux plugin structure exactly for scaffolding, then invest the most effort in accurate ACSS 4.x token reference files and the Etch conventions skill -- these are the knowledge foundations that make or break every downstream phase.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| FOUND-01 | Plugin scaffolded with CLAUDE.md, SKILL.md, plugin.json, commands/, skills/ following FWS repo conventions | Plugin structure pattern from magic-ui-ux and git-master; YAML frontmatter conventions; plugin.json format |
| FOUND-02 | `.etch-components/` persistence folder with registry.json tracking all generated components, metadata, and page compositions | Persistence pattern from magic-ui-ux `.ui-ux/`; registry schema from ARCHITECTURE.md; initialization flow |
| FOUND-03 | ACSS 4.x token reference files covering colors, spacing, typography, borders, and grid system | Full ACSS 4.x variable catalog from STACK.md research; color roles x shades matrix; spacing/typography/border/grid variables |
| FOUND-04 | Etch conventions skill encoding Section > Container hierarchy, AutoBEM alignment, container-query responsive, accessibility defaults | Etch element hierarchy from STACK.md; AutoBEM naming rules; container-query philosophy; semantic HTML patterns |
</phase_requirements>

## Standard Stack

### Core

This phase produces only static files (markdown, JSON). No runtime libraries are needed.

| Artifact | Format | Purpose | Why This Format |
|----------|--------|---------|-----------------|
| CLAUDE.md | Markdown | Plugin entry point Claude Code reads first | FWS plugin convention; Claude Code reads this for context |
| SKILL.md | Markdown + YAML frontmatter | Plugin index with trigger words, commands, skills | FWS plugin convention; `name` + `description` in frontmatter enables routing |
| plugin.json | JSON | Plugin manifest (name, version, keywords) | FWS convention from `.claude-plugin/plugin.json` |
| Command files | Markdown + YAML frontmatter | Slash command definitions | FWS convention; `description`, `allowed-tools`, `argument-hint` in frontmatter |
| Skill files | Markdown + YAML frontmatter | Domain knowledge for generation | FWS convention; `name` + `description` in frontmatter |
| Reference files | Markdown | Supporting knowledge (token maps, patterns) | Skills reference these for detailed lookup tables |
| registry.json | JSON | Component registry schema | Persistence pattern from magic-ui-ux |

### Supporting

| Tool | Purpose | When to Use |
|------|---------|-------------|
| JSON Schema (draft-07) | Validate registry.json structure | Define schema in `skills/persistence/schemas/` |
| YAML frontmatter | Command and skill metadata | Every `.md` file in commands/ and skills/ |

## Architecture Patterns

### Recommended Project Structure

```
etch-component-gen/
  CLAUDE.md                          # Plugin context -- purpose, architecture, key rules
  SKILL.md                           # Plugin index -- commands table, skills table
  .claude-plugin/
    plugin.json                      # Manifest: name, version, description, author, keywords
  commands/
    generate.md                      # /generate -- stub for Phase 2
    library.md                       # /library -- stub for Phase 4
  skills/
    persistence/
      SKILL.md                       # .etch-components/ folder management
      schemas/
        registry.json                # JSON Schema for registry validation
    html-generation/
      SKILL.md                       # Stub -- populated in Phase 2
    css-generation/
      SKILL.md                       # Stub -- populated in Phase 2
      references/
        acss-tokens.md               # ACSS 4.x custom property reference (FOUND-03)
        acss-classes.md              # ACSS 4.x remaining utility classes (FOUND-03)
    js-generation/
      SKILL.md                       # Stub -- populated in Phase 3
    etch-conventions/
      SKILL.md                       # Etch best practices skill (FOUND-04)
      references/
        section-patterns.md          # Etch section structure templates
        grid-system.md               # Grid classes and responsive reference
```

### Pattern 1: Plugin Entry Points (CLAUDE.md + SKILL.md)

**What:** CLAUDE.md is the full-context file Claude Code reads. SKILL.md is the lightweight index with YAML frontmatter for routing.

**When:** Every FWS plugin follows this pattern.

**CLAUDE.md structure (from magic-ui-ux):**
1. What This Plugin Does (purpose, value prop)
2. Design Philosophy (numbered principles)
3. Plugin Architecture (directory tree with annotations)
4. Persistence (what `.etch-components/` contains, key rule)
5. Key Rules (numbered, imperative)
6. Available Skills (list with one-line descriptions)

**SKILL.md structure (from magic-ui-ux):**
```yaml
---
name: etch-component-gen
description: >
  Etch + AutomaticCSS component generator. Produces production-ready HTML, CSS, and JS
  components with correct BEM naming, ACSS token usage, semantic structure, and accessibility.
  Use when user mentions "etch", "component", "generate", "section", "hero", "pricing",
  "acss", or any component generation task.
---
```
Then: `## Commands` table, `## Skills` table. No agents table (this plugin does not use agents).

### Pattern 2: Command Frontmatter

**What:** Every command `.md` file starts with YAML frontmatter.

**Example from git-master convention:**
```yaml
---
description: "Generate a production-ready Etch component from a name and description"
allowed-tools: Read, Write, Edit, Bash(ls:*,mkdir:*), Glob, Grep
argument-hint: "<component-name> [description] [--type <type>] [--no-js]"
---
```

Key rules:
- `allowed-tools` is explicit and restrictive
- `argument-hint` shows the syntax for user guidance
- `$ARGUMENTS` is how commands access user input
- Commands reference skills via `@${CLAUDE_PLUGIN_ROOT}/skills/...`

### Pattern 3: Persistence Folder as Single Source of Truth

**What:** `.etch-components/` at project root holds all cross-session state.

**Initialization flow (mirrors magic-ui-ux `.ui-ux/`):**
1. Check if `.etch-components/` exists
2. If not, create directory and seed `registry.json` with empty structure
3. Every command reads registry before operating, writes back after completing

**registry.json initial state:**
```json
{
  "projectName": "",
  "createdAt": "2026-03-13T00:00:00Z",
  "updatedAt": "2026-03-13T00:00:00Z",
  "components": [],
  "pages": []
}
```

### Pattern 4: Skill with References Subdirectory

**What:** Skills that need lookup tables or detailed reference data keep them in `references/` under the skill directory.

**When:** ACSS tokens, Etch section patterns, grid system -- any data too large for the SKILL.md itself.

**Structure:**
```
skills/css-generation/
  SKILL.md                    # Algorithm, rules, when-to-use
  references/
    acss-tokens.md            # Full ACSS 4.x custom property catalog
    acss-classes.md           # Remaining utility classes in 4.x
```

The SKILL.md instructs Claude to "Read `references/acss-tokens.md` for the token lookup table" rather than inlining the data.

### Anti-Patterns to Avoid

- **Inventing new plugin conventions:** Follow magic-ui-ux and git-master exactly. Do not create new file formats, directory structures, or naming patterns.
- **Creating agent files:** This plugin does not need agents. Skills are sufficient for single-discipline sequential generation.
- **Putting generated component files inside `.etch-components/`:** The dot-folder holds metadata only. Generated code goes to `components/` at project root (visible, accessible for copy-paste).
- **Hard-coding ACSS token values in skill files:** Token data belongs in reference files. Skills contain algorithms that look up references.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Plugin structure | Custom directory layout | FWS convention (CLAUDE.md, SKILL.md, .claude-plugin/, commands/, skills/) | Proven pattern across multiple plugins; Claude Code expects this structure |
| Registry format | Ad-hoc file tracking | JSON registry with schema validation | magic-ui-ux persistence pattern handles component tracking, metadata, and cross-session state |
| ACSS token catalog | Token values from memory | Official ACSS 4.x documentation as source | Tokens change between versions; stale data causes broken output |
| Etch element mapping | Guessed HTML-to-Etch mapping | Official Etch element documentation | 15 elements with specific behaviors; guessing gets nesting wrong |

## Common Pitfalls

### Pitfall 1: Incomplete ACSS 4.x Token Coverage

**What goes wrong:** Token reference files miss shade variants, bridge variables, or contextual spacing tokens. Downstream generation skills produce incomplete output.
**Why it happens:** ACSS full cheat sheet is behind paid dashboard. Public docs cover most but not all tokens.
**How to avoid:** Systematically enumerate: 6 color roles x 8 shades (48 color vars) + 4 status colors x 8 shades (32 status vars) + spacing (6 standard + 15 bridge + 3 contextual) + typography (6 heading + 6 text sizes + global/per-level overrides) + borders + grid. Cross-check against STACK.md research which was sourced from official ACSS docs.
**Warning signs:** Generation skills producing empty `var()` references or falling back to literal values.

### Pitfall 2: ACSS 3.x/4.x Confusion

**What goes wrong:** Token reference files use 3.x naming (XXL instead of 2XL, `@btn` instead of `?btn`, transparency tokens that no longer exist).
**Why it happens:** Many online resources still reference ACSS 3.x.
**How to avoid:** Default to 4.x exclusively. The research explicitly documents breaking changes: XXL -> 2XL, `@` -> `?` recipes, transparency tokens removed (use `color-mix()`), OKLCH color space, CSS Layers. Verify every token name against STACK.md section 2 (ACSS 4.x).
**Warning signs:** Variables with "XXL" suffix, `@` recipe prefix, or `--{color}-trans-{n}` patterns.

### Pitfall 3: AutoBEM Misalignment

**What goes wrong:** Generated BEM class names do not match what Etch's AutoBEM feature would produce. Users paste HTML into Etch and class names conflict.
**Why it happens:** BEM naming is straightforward but Etch's AutoBEM has specific rules: flat structure (no grandchild nesting), element names derived from Etch's element tree naming.
**How to avoid:** The etch-conventions skill must encode: flatten to single underscore depth (`.card__title` not `.card__header__title`), element names map to Etch element types (heading -> `__heading`, text -> `__text`, image -> `__image`).
**Warning signs:** Deeply nested BEM names (`__header__title__icon`), element names that do not match Etch element types.

### Pitfall 4: Stub Files Without Useful Content

**What goes wrong:** Phase 1 creates stub command/skill files that are empty or contain only "TODO" markers. Phase 2 planners have no structure to build on.
**Why it happens:** Treating stubs as throwaway placeholders.
**How to avoid:** Stubs should contain: correct YAML frontmatter with description and allowed-tools, a clear "## Purpose" section explaining what the command/skill will do, and a "## Not Yet Implemented" marker. This gives Phase 2 a solid starting point.
**Warning signs:** Files with only `# TODO` or empty content.

### Pitfall 5: Missing Accessibility Defaults in Conventions Skill

**What goes wrong:** The etch-conventions skill covers structure and layout but omits accessibility patterns. Phase 2+ generation skills produce inaccessible output.
**Why it happens:** Accessibility is often an afterthought.
**How to avoid:** The conventions skill MUST include: semantic landmark usage (`<section>`, `<nav>`, `<header>`, `<footer>`), heading hierarchy rules (one `<h1>` per page, sequential levels), `alt` text patterns for images, `loading="lazy"` and `decoding="async"` defaults, `:focus-visible` outline requirements, ARIA attribute patterns for interactive elements.
**Warning signs:** Generated components with div-only structure, missing landmarks, heading level gaps.

## Code Examples

### plugin.json Format

```json
{
  "name": "etch-component-gen",
  "version": "0.1.0",
  "description": "Generates production-ready Etch + AutomaticCSS components with correct BEM naming, ACSS token usage, semantic HTML, and vanilla JavaScript.",
  "author": {
    "name": "Flying Web Solutions",
    "url": "https://www.flyingweb.ie"
  },
  "keywords": ["etch", "acss", "component", "generator", "bem", "accessibility"]
}
```
Source: Pattern from `/Volumes/Productivity/Coding/skills/magic-ui-ux/.claude-plugin/plugin.json`

### SKILL.md Frontmatter

```yaml
---
name: etch-component-gen
description: >
  Etch + AutomaticCSS component generator. Produces production-ready HTML, CSS, and JS
  components with correct BEM naming, ACSS 4.x token usage, semantic structure, container-query
  responsive design, and accessibility defaults. Use when user mentions "etch", "component",
  "generate", "section", "hero", "pricing", "card", "nav", "footer", "acss", "automatic css",
  or any component generation task.
---
```
Source: Pattern from magic-ui-ux SKILL.md

### Registry Schema (JSON Schema draft-07)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["projectName", "createdAt", "updatedAt", "components"],
  "properties": {
    "projectName": { "type": "string" },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" },
    "components": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["name", "type", "files", "createdAt"],
        "properties": {
          "name": { "type": "string", "pattern": "^[a-z0-9-]+$" },
          "description": { "type": "string" },
          "type": { "type": "string", "enum": ["section", "card", "form", "nav", "footer", "hero", "custom"] },
          "tags": { "type": "array", "items": { "type": "string" } },
          "files": {
            "type": "object",
            "properties": {
              "html": { "type": "string" },
              "css": { "type": "string" },
              "js": { "type": ["string", "null"] }
            }
          },
          "hasJs": { "type": "boolean" },
          "variants": { "type": "array", "items": { "type": "string" } },
          "acssTokensUsed": { "type": "array", "items": { "type": "string" } },
          "createdAt": { "type": "string", "format": "date-time" }
        }
      }
    },
    "pages": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["name", "sections", "createdAt"],
        "properties": {
          "name": { "type": "string" },
          "sections": { "type": "array", "items": { "type": "string" } },
          "createdAt": { "type": "string", "format": "date-time" }
        }
      }
    }
  }
}
```
Source: ARCHITECTURE.md registry schema design

### ACSS 4.x Color Token Reference (excerpt)

```markdown
## Color Roles (6 roles x 8 shades = 48 tokens)

| Role | Base | Ultra-Light | Light | Semi-Light | Semi-Dark | Dark | Ultra-Dark | Hover |
|------|------|-------------|-------|------------|-----------|------|------------|-------|
| Primary | `--primary` | `--primary-ultra-light` | `--primary-light` | `--primary-semi-light` | `--primary-semi-dark` | `--primary-dark` | `--primary-ultra-dark` | `--primary-hover` |
| Secondary | `--secondary` | `--secondary-ultra-light` | ... | ... | ... | ... | ... | `--secondary-hover` |
| Tertiary | `--tertiary` | ... | ... | ... | ... | ... | ... | `--tertiary-hover` |
| Accent | `--accent` | ... | ... | ... | ... | ... | ... | `--accent-hover` |
| Base | `--base` | ... | ... | ... | ... | ... | ... | `--base-hover` |
| Neutral | `--neutral` | ... | ... | ... | ... | ... | ... | `--neutral-hover` |

## Transparency (no tokens -- use color-mix)
background: color-mix(in oklch, var(--primary) 20%, transparent);
```
Source: STACK.md ACSS 4.x color system section, sourced from official ACSS docs

### Persistence Skill Initialization Pattern

```markdown
## Initialization (First Use)

When `.etch-components/` does not exist:

1. Create the directory:
   ```bash
   mkdir -p .etch-components
   ```

2. Seed `registry.json`:
   ```json
   {
     "projectName": "",
     "createdAt": "<ISO 8601>",
     "updatedAt": "<ISO 8601>",
     "components": [],
     "pages": []
   }
   ```

3. Inform the user: "Created .etch-components/ with empty registry. Components will be tracked here."
```
Source: Pattern adapted from magic-ui-ux persistence skill

### Etch Section Structure Pattern

```html
<!-- Etch Section > Container > Content hierarchy -->
<section class="hero">
  <div class="hero__container">
    <h1 class="hero__heading">Page Title</h1>
    <p class="hero__text">Supporting text content</p>
    <a href="#" class="hero__cta btn--primary">Call to Action</a>
  </div>
</section>
```
Source: STACK.md Etch element hierarchy + AutoBEM naming

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| ACSS 3.x utility classes | ACSS 4.x variable-first, BEM-first | ACSS 4.0 release | Most utility classes removed; use CSS custom properties instead |
| XXL t-shirt sizing | 2XL t-shirt sizing | ACSS 4.0 | `--space-xxl` -> `--space-2xl` |
| `@btn` recipe syntax | `?btn` recipe syntax | ACSS 4.0 | All recipe prefixes changed |
| Transparency tokens | `color-mix()` function | ACSS 4.0 | `--primary-trans-50` removed; use `color-mix(in oklch, var(--primary) 50%, transparent)` |
| Media query breakpoints | Container queries | Etch 1.x | `@media` -> `@container` for responsive behavior |
| SCSS preprocessing | Native CSS nesting + `&` stemming | Etch CSS panel | Etch handles `&__` / `&--` expansion natively |

## Open Questions

1. **Complete ACSS 4.x token list behind paid dashboard**
   - What we know: Official docs cover the major token categories comprehensively (colors, spacing, typography, borders, grid). STACK.md research captured all publicly documented variables.
   - What's unclear: Whether there are undocumented tokens or dashboard-only variables not in public docs.
   - Recommendation: Use the comprehensive list from STACK.md research. Flag if generation skills encounter gaps. Users can add project-specific overrides to a future config.json.

2. **Exact container query syntax in Etch CSS panel**
   - What we know: Etch uses container-query-first philosophy. Standard `@container` syntax is supported.
   - What's unclear: Whether Etch adds any custom container query behavior or requires specific container-type declarations.
   - Recommendation: Use standard `@container` syntax. Document in the conventions skill that container-type may need to be set on parent elements.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual validation (this phase produces only static files -- no runtime code) |
| Config file | none |
| Quick run command | `ls -la CLAUDE.md SKILL.md .claude-plugin/plugin.json commands/ skills/` |
| Full suite command | Manual checklist verification against success criteria |

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FOUND-01 | Plugin loads with correct structure | smoke | `test -f CLAUDE.md && test -f SKILL.md && test -f .claude-plugin/plugin.json && test -d commands && test -d skills && echo PASS` | -- Wave 0 |
| FOUND-02 | Persistence folder initializes correctly | smoke | `cat skills/persistence/SKILL.md \| grep -q "registry.json" && cat skills/persistence/schemas/registry.json \| python3 -m json.tool > /dev/null && echo PASS` | -- Wave 0 |
| FOUND-03 | ACSS token references are comprehensive | manual | Verify token count: 6 roles x 8 shades (colors), 6 standard + 15 bridge (spacing), 6+6 (typography), borders, grid | -- Wave 0 |
| FOUND-04 | Etch conventions skill encodes required patterns | manual | Verify SKILL.md contains: Section > Container, AutoBEM, container-query, accessibility sections | -- Wave 0 |

### Sampling Rate
- **Per task commit:** Quick smoke test commands
- **Per wave merge:** Full checklist against success criteria
- **Phase gate:** All 4 requirements verified before marking phase complete

### Wave 0 Gaps
- None -- this phase produces static files with no test framework needed. Validation is structural (files exist with correct content).

## Sources

### Primary (HIGH confidence)
- `/Volumes/Productivity/Coding/skills/magic-ui-ux/` -- Plugin architecture reference (CLAUDE.md, SKILL.md, plugin.json, persistence skill, command frontmatter)
- `/Volumes/Productivity/Coding/skills/git-master/` -- Simpler plugin pattern reference (SKILL.md, command frontmatter, `$ARGUMENTS` convention)
- `.planning/research/STACK.md` -- ACSS 4.x complete variable catalog sourced from official ACSS documentation
- `.planning/research/ARCHITECTURE.md` -- Plugin architecture, registry schema, component boundaries, data flow
- `.planning/research/PITFALLS.md` -- Domain pitfalls with severity ratings and prevention strategies

### Secondary (MEDIUM confidence)
- [Etch Documentation](https://docs.etchwp.com/) -- Element hierarchy, CSS panel, responsive philosophy
- [ACSS 4.x Documentation](https://docs.automaticcss.com/) -- Token naming, variable reference, breaking changes from 3.x

### Tertiary (LOW confidence)
- Complete ACSS 4.x cheat sheet (behind paid dashboard) -- may contain tokens not in public docs

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all patterns directly observable in existing FWS plugins
- Architecture: HIGH -- direct replication of proven magic-ui-ux and git-master patterns
- ACSS token catalog: HIGH -- sourced from official ACSS documentation in STACK.md
- Etch conventions: MEDIUM -- official docs cover structure well but some AutoBEM details are inferred
- Pitfalls: HIGH -- well-documented in PITFALLS.md with severity ratings

**Research date:** 2026-03-13
**Valid until:** 2026-04-13 (stable domain -- plugin conventions and ACSS 4.x are not expected to change in 30 days)
