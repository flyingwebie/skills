# Phase 4: Component Library - Research

**Researched:** 2026-03-14
**Domain:** Claude Code skill command authoring (markdown instruction files), registry-based component lookup
**Confidence:** HIGH

## Summary

Phase 4 implements the `/library` command for the etch-component-gen Claude Code plugin. Unlike typical software phases, this project produces **markdown instruction files** that tell Claude how to behave -- not executable code. The `/library` command file (`commands/library.md`) already exists as a skeleton with a "Not Yet Implemented" section. The work is to replace that skeleton with complete, unambiguous operational instructions and formatting specifications.

The registry schema and persistence skill are fully established from Phase 1. The `/generate` command (Phase 2-3) already writes components to `registry.json` with all the metadata fields needed for listing, searching, filtering, and file retrieval. Phase 4 is purely read-only -- it reads the registry and component files, formats output, and presents it. No writes to the registry or filesystem.

**Primary recommendation:** Update `commands/library.md` with complete operational logic covering four modes (list all, search, filter by type, paste), following the exact patterns established by `commands/generate.md` for argument parsing, skill delegation, and output formatting.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| LIB-01 | `/library` lists all generated components from registry.json with name, type, description, and file paths | Registry schema has all needed fields (name, type, description, files). Persistence skill's Read Registry operation provides the data access pattern. |
| LIB-02 | `/library` supports search by name and filter by component type (section, hero, nav, footer, custom) | Registry schema defines `type` as enum with 7 values; `name` and `description` are string fields for substring matching. `tags` field enables tag-based filtering. |
| LIB-03 | `/library --paste <name>` outputs full HTML/CSS/JS content for copy-paste into Etch | Registry `files` object stores relative paths to html, css, js. `hasJs` boolean determines whether to include script.js. Paste format already sketched in existing library.md skeleton. |
</phase_requirements>

## Standard Stack

### Core

This is a Claude Code skill/plugin project. There are no runtime dependencies, npm packages, or executable code. The "stack" is markdown files with YAML frontmatter.

| Component | Format | Purpose | Why Standard |
|-----------|--------|---------|--------------|
| Command file | Markdown (.md) | Instruction set Claude follows when user invokes `/library` | Established pattern from `/generate` command |
| YAML frontmatter | YAML in .md | Declares description, allowed-tools, argument-hint | Required by Claude Code plugin system |
| Persistence skill | Markdown (.md) | Registry read/write procedures Claude delegates to | Already complete from Phase 1 |
| Registry schema | JSON Schema draft-07 | Validates registry.json structure | Already complete from Phase 1 |

### Supporting

| Component | Format | Purpose | When to Use |
|-----------|--------|---------|-------------|
| SKILL.md (root) | Markdown | Plugin index with commands table | Update if command description changes |
| CLAUDE.md | Markdown | Plugin-level context and rules | Already references /library; may not need updates |

### No Alternatives Needed

This is a markdown instruction project. There are no library choices to make.

## Architecture Patterns

### Existing Command Pattern (from generate.md)

The `/generate` command establishes the definitive pattern that `/library` must follow:

1. **YAML frontmatter** with `description`, `allowed-tools`, `argument-hint`
2. **Purpose section** explaining the command's role
3. **Arguments section** documenting `$ARGUMENTS` parsing
4. **Operational sections** with numbered step-by-step instructions Claude follows literally
5. **Skill delegation** via `Read @${CLAUDE_PLUGIN_ROOT}/skills/persistence/SKILL.md`
6. **Output formatting** with explicit code block templates

### Pattern: Read-Only Command

The `/library` command is strictly read-only. Its allowed-tools are `Read, Bash(ls:*,cat:*), Glob, Grep` -- no Write or Edit. This means:
- It reads `registry.json` but never writes to it
- It reads component files (html, css, js) but never modifies them
- No `updatedAt` timestamp changes

### Pattern: Four Operation Modes

The existing skeleton defines four modes. These map directly to the three requirements:

| Mode | Trigger | Requirement |
|------|---------|-------------|
| List all | No arguments | LIB-01 |
| Search by name/description | Positional search term | LIB-02 |
| Filter by type | `--type <type>` flag | LIB-02 |
| Paste component | `--paste <name>` flag | LIB-03 |

### Pattern: Table Output Formatting

For list/search/filter modes, output should use markdown tables. The generate command's Step 10 summary establishes the formatting precedent with labeled sections and code blocks.

### Pattern: Paste Output Formatting

The paste output must be structured for direct copy-paste into Etch's panels:
- Each file labeled with its path as a heading
- Content in fenced code blocks with language hints (html, css, javascript)
- JS section conditionally included based on `hasJs` field

### Anti-Patterns to Avoid

- **Filesystem scanning instead of registry reads:** The library command must read from `registry.json`, not scan `components/` directory. The registry is the source of truth.
- **Modifying state on read operations:** The `/library` command must never write to the registry or component files. No `updatedAt` changes.
- **Ambiguous instructions:** Every operational step must be specific enough that Claude follows it deterministically. Avoid "consider" or "you might" -- use "do X".

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Registry data access | Custom file reading logic in library.md | Delegate to persistence skill's Read Registry | Consistency with /generate; single source of truth for registry access patterns |
| Type validation | Inline type checking | Reference the schema's type enum | Schema already defines valid types: section, card, form, nav, footer, hero, custom |
| Error messaging | Ad-hoc error strings | Follow persistence skill's error patterns | "registry.json appears to be corrupted" pattern already established |

**Key insight:** The persistence skill already handles all registry interactions. The library command should delegate to it rather than redefining read logic.

## Common Pitfalls

### Pitfall 1: Type Enum Mismatch Between Requirements and Schema

**What goes wrong:** Requirements say "section, hero, nav, footer, custom" but the schema enum is "section, card, form, nav, footer, hero, custom" -- seven types, not five.
**Why it happens:** Requirements list example types, not the exhaustive set.
**How to avoid:** Use the schema's full enum as the authoritative type list. Support all seven types in `--type` filtering.
**Warning signs:** A `--type card` or `--type form` filter returning no results when cards/forms exist in the registry.

### Pitfall 2: Case Sensitivity in Search

**What goes wrong:** User searches for "Hero" but registry stores "hero" as the type and component names are kebab-case.
**Why it happens:** Inconsistent case handling between user input and stored data.
**How to avoid:** The existing skeleton already specifies "case-insensitive substring match" -- this must be carried through to all search and filter operations.

### Pitfall 3: Missing Component Files on Paste

**What goes wrong:** Registry entry exists but the actual files at the stored paths have been deleted or moved.
**Why it happens:** Users may manually delete component folders without updating the registry.
**How to avoid:** The paste operation must check file existence before attempting to read. If a file is missing, report which file is missing and suggest re-generating the component.

### Pitfall 4: Empty Registry

**What goes wrong:** User runs `/library` before any components have been generated.
**Why it happens:** Natural first-use scenario.
**How to avoid:** Handle empty `components` array gracefully with a helpful message like "No components in the registry yet. Use `/generate` to create your first component."

### Pitfall 5: JS Null Path in Paste Mode

**What goes wrong:** Paste mode tries to read `files.js` when it is `null` (component has no JavaScript).
**Why it happens:** The schema allows `files.js` to be `null` for Level 0 components.
**How to avoid:** Check `hasJs` field before attempting to read `files.js`. Only include the JS code block in paste output when `hasJs` is `true`.

## Code Examples

These are not executable code -- they are markdown instruction patterns from the existing codebase.

### YAML Frontmatter Pattern (from existing library.md)
```yaml
---
description: "Search, filter, and paste previously generated Etch components"
allowed-tools: Read, Bash(ls:*,cat:*), Glob, Grep
argument-hint: "[search-term] [--type <type>] [--tag <tag>] [--paste <component-name>]"
---
```

### Argument Parsing Pattern (from generate.md)
```markdown
## Arguments

- `$ARGUMENTS` -- parsed as `[search-term] [flags]`
- No arguments: list all components
- `search-term`: filter by name or description (case-insensitive substring match)
- `--type <type>`: filter by component type
- `--paste <component-name>`: output full component content
```

### Skill Delegation Pattern (from generate.md)
```markdown
### Step 1 -- Read Registry

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/persistence/SKILL.md`
2. Initialize `.etch-components/` if it does not exist (follow the persistence skill's Initialization flow)
3. Read `registry.json`
```

### Table Output Pattern (for list/search/filter results)
```markdown
| Name | Type | Description | Has JS | Created |
|------|------|-------------|--------|---------|
| hero-split | hero | Split hero with image and CTA | No | 2026-03-14 |
| pricing-table | section | 3-tier pricing with toggle | Yes | 2026-03-14 |

**2 components found.**
```

### Paste Output Pattern (from existing library.md skeleton)
```markdown
### components/pricing-table/index.html
\`\`\`html
[html content]
\`\`\`

### components/pricing-table/style.css
\`\`\`css
[css content]
\`\`\`

### components/pricing-table/script.js
\`\`\`javascript
[js content -- if hasJs is true]
\`\`\`
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Skeleton library.md with "Not Yet Implemented" | Fully specified operational instructions | Phase 4 (now) | Command becomes functional |

**No deprecated patterns apply.** This is the initial implementation of the library command.

## Registry Schema Quick Reference

Fields available for library operations (from `schemas/registry.json`):

| Field | Type | Available For |
|-------|------|---------------|
| `name` | string (kebab-case) | List, Search, Filter, Paste lookup |
| `description` | string | List, Search |
| `type` | enum (7 values) | List, Filter |
| `tags` | string[] | Search, Filter |
| `files.html` | string (path) | Paste |
| `files.css` | string (path) | Paste |
| `files.js` | string or null | Paste (conditional) |
| `hasJs` | boolean | List display, Paste conditional |
| `acssTokensUsed` | string[] | (available but not required by LIB-01/02/03) |
| `createdAt` | ISO 8601 string | List display |

## Open Questions

1. **Tag filtering (`--tag`) scope**
   - What we know: The existing skeleton includes `--tag <tag>` as a flag. The schema supports `tags` as a string array on each component.
   - What's unclear: Requirements LIB-01/02/03 do not mention tag filtering -- only name search and type filtering.
   - Recommendation: Include `--tag` support since the skeleton already defines it and the data model supports it. It is low effort and aligns with the existing argument-hint.

2. **Combined filters**
   - What we know: Users might want `--type hero pricing` (search term + type filter simultaneously).
   - What's unclear: Whether combined filters are needed for v1.
   - Recommendation: Support combining search term with `--type` and `--tag` filters (intersection logic). This is the natural user expectation and straightforward to specify in instructions.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual verification (Claude Code skill plugin -- no automated test runner) |
| Config file | none |
| Quick run command | Manual: invoke `/library` in Claude Code with test registry |
| Full suite command | Manual: run all four operation modes against a populated registry |

### Phase Requirements to Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| LIB-01 | `/library` lists all components with name, type, description, file paths | manual-only | Invoke `/library` with no args against a registry with 2+ components | N/A |
| LIB-02 | `/library` search by name and filter by type | manual-only | Invoke `/library hero` and `/library --type hero` against registry with mixed types | N/A |
| LIB-03 | `/library --paste <name>` outputs full content | manual-only | Invoke `/library --paste pricing-table` and verify HTML/CSS/JS blocks appear | N/A |

**Justification for manual-only:** This is a Claude Code skill plugin composed entirely of markdown instruction files. There is no executable code, no test framework, and no programmatic way to invoke a Claude Code slash command in an automated test. Verification is done by invoking the command in a Claude Code session.

### Sampling Rate
- **Per task:** Review the markdown diff for completeness and consistency with existing patterns
- **Per wave:** Invoke the command in Claude Code with a test registry
- **Phase gate:** All four operation modes (list, search, filter, paste) produce correct output

### Wave 0 Gaps
None -- no test infrastructure applies to markdown instruction files.

## Sources

### Primary (HIGH confidence)
- `commands/library.md` -- existing skeleton with operation definitions and "Not Yet Implemented" marker
- `commands/generate.md` -- established command pattern (YAML frontmatter, arguments, pipeline steps, output format)
- `skills/persistence/SKILL.md` -- registry read/write/initialization procedures
- `skills/persistence/schemas/registry.json` -- JSON Schema defining component entry structure and type enum
- `CLAUDE.md` -- plugin architecture, persistence rules, design philosophy

### Secondary (MEDIUM confidence)
- `.planning/REQUIREMENTS.md` -- LIB-01, LIB-02, LIB-03 requirement definitions
- `.planning/STATE.md` -- project decisions and accumulated context

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- this is a markdown instruction project with fully established patterns from Phases 1-3
- Architecture: HIGH -- the command pattern, registry schema, and persistence skill are all complete and documented
- Pitfalls: HIGH -- derived directly from the registry schema and existing command patterns; edge cases are predictable

**Research date:** 2026-03-14
**Valid until:** 2026-04-14 (stable -- markdown instruction patterns do not change)
