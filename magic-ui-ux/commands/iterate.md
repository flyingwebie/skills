---
description: "Iterate on existing designs -- generate variants or edit screens with change requests"
allowed-tools: Read, Write, Edit, Bash(ls:*,cat:*,mkdir:*), Task, mcp__stitch__edit_screens, mcp__stitch__generate_variants, mcp__stitch__get_screen
argument-hint: "<page> [--variants | --edit <changes>]"
---

# /magic-ui-ux:iterate

Iterate on existing designs by generating variants (explore alternatives) or editing screens with specific change requests. All iterations enforce design token constraints and persist results to `.ui-ux/state.json`.

---

## Pre-Flight Check

Before doing anything, read the project's persistence layer.

1. **Check `.ui-ux/` exists.**
   - If `.ui-ux/` does not exist: "Run `/magic-ui-ux:branding` first. The design pipeline requires a design system."

2. **Read `.ui-ux/state.json`** for project context:
   - `niche` -- needed for context in edit prompts
   - `pages` -- existing pages and their statuses
   - `screens` -- existing screens with Stitch IDs
   - `stitch.projectId` -- the Stitch project to iterate within

3. **Read `.ui-ux/tokens.json`** -- REQUIRED.
   - If `tokens.json` does not exist, **HALT**: "Run `/magic-ui-ux:branding` first. The design pipeline requires a design system."
   - Verify tokens are complete: `colors.primary`, `colors.secondary`, `colors.cta`, `colors.background`, `colors.text`, `typography.heading.family`, `typography.body.family` must all have values.

4. **Read `.ui-ux/branding.md`** for brand personality context (tone, style, personality traits).

5. **Verify the specified page has status `"designed"` in state.json.**
   - The page must have at least one existing screen to iterate on.
   - If page is not found or not designed, **HALT**: "Run `/magic-ui-ux:design {page}` first. Iteration requires an existing designed page."

---

## Input Parsing

### Page Argument

- **Required:** A single page name.
  ```
  /magic-ui-ux:iterate homepage --variants
  /magic-ui-ux:iterate homepage --edit "make the hero background darker"
  ```

- **Validation:** Page names must be lowercase, alphanumeric, and hyphens only (e.g., `homepage`, `product-detail`). Reject names with spaces, special characters, or uppercase letters.

### Mode Selection

| Flag | Mode | Description |
|------|------|-------------|
| `--variants` | Variant Mode | Generate design alternatives based on the existing screen |
| `--edit "<changes>"` | Edit Mode | Apply specific changes to an existing screen |
| *(no flag)* | Variant Mode | Default to variant generation when no flag provided |
| `--count N` | Variant Mode | Number of variants to generate (1-5, default 3) |
| `--range <refine\|explore\|reimagine>` | Variant Mode | Creative range for variants (default: explore) |
| `--focus <layout\|colors\|images\|fonts\|content>` | Variant Mode | Focus variant exploration on specific aspects (comma-separated) |
| `--prompt "direction"` | Variant Mode | Optional prompt direction for variants |

---

## Screen Selection

Before presenting screen options, verify the target screen still exists in Stitch:

1. **Call `mcp__stitch__get_screen`** with the `projectId` and the most recent `stitchScreenId` for the page
2. **If the call fails:** Warn the user: "Screen {stitchScreenId} may have been deleted from Stitch. Run `/sync` to reconcile, or choose a different screen."
3. **If it succeeds:** Proceed with screen selection

If a page has multiple screens in `state.json`, present a numbered list and let the user select which screen to iterate on:

```
This page has multiple screens:

1. homepage-v0 (original)
2. homepage-v1 (variant)
3. homepage-v2 (edited)

Which screen would you like to iterate on? (default: 3 -- most recent)
```

Default to the most recent screen (highest variant number). If the page has only one screen, use it automatically.

---

## Variant Mode

**Triggered by:** `/iterate homepage --variants` or `/iterate homepage` (default)

### Steps

1. **Read the page's existing screen** from `state.json` -- get the `stitchScreenId` for the selected screen.
2. **Read the page's UX brief** from `.ui-ux/briefs/{page}-ux-brief.md` for context on psychology rationale and layout decisions.
3. **Construct variant prompt and options:**
   - If `--prompt` flag provided, use that as the variant prompt
   - If no `--prompt`, construct a default prompt from branding context: "Explore alternative designs for this {page_type} page. Maintain {brand_personality} brand identity with {uiStyle} aesthetic."
   - Build `variantOptions`:
     - `creativeRange`: from `--range` flag → `REFINE`, `EXPLORE`, or `REIMAGINE` (default: `EXPLORE`)
     - `variantCount`: from `--count` flag (default: 3)
     - `aspects`: from `--focus` flag, mapped per the table below (optional, omit if no focus specified). Supports comma-separated values: `--focus layout,colors`

   **Focus → Aspects Mapping:**

   | `--focus` value | Stitch `aspects` value |
   |----------------|----------------------|
   | `layout` | `LAYOUT` |
   | `colors` | `COLOR_SCHEME` |
   | `images` | `IMAGES` |
   | `fonts` | `TEXT_FONT` |
   | `content` | `TEXT_CONTENT` |
   - Call `mcp__stitch__generate_variants` with:
     - `projectId` from `state.json.stitch.projectId`
     - `selectedScreenIds: [stitchScreenId]` (the selected screen)
     - `prompt` (constructed above)
     - `variantOptions` (constructed above)
     - `deviceType` from `state.json.deviceType` (when available)
4. **User selects** their preferred variant or requests more variants.
5. **Save selected variant** to `state.json`:
   - Add a new screen entry with incremented variant number:
     ```json
     {
       "id": "{page}-v{next_variant_number}",
       "page": "{page}",
       "variant": {next_variant_number},
       "createdAt": "{ISO timestamp}",
       "stitchScreenId": "{returned_screen_id}",
       "uxBriefPath": ".ui-ux/briefs/{page}-ux-brief.md"
     }
     ```
   - Add the new screen ID to the page's `screenIds[]` array
   - Update page status to `"iterated"`
   - Persist `creativeRange` to the screen entry (e.g., `"creativeRange": "EXPLORE"`) so the creative range used is recorded for future reference
   - Update `state.json.updatedAt` timestamp

---

## Edit Mode

**Triggered by:** `/iterate homepage --edit "make the hero background darker, increase CTA button size"`

### Steps

1. **Read the page's existing screen** from `state.json` -- get the `stitchScreenId` for the selected screen.

2. **Token Constraint Check:** Cross-reference the edit request against `tokens.json`:
   - Identify if the request contradicts token values (e.g., "change primary color to green" when `colors.primary` is `#1A1A2E`)
   - If conflict detected, warn:
     > **This change conflicts with your design system.**
     > Your primary color is #1A1A2E but you're requesting green. Proceed anyway, or update branding first?
   - Wait for user confirmation before proceeding with conflicting changes
   - If no conflict, proceed silently

3. **Craft a focused edit prompt** using Stitch's targeted edit pattern:
   - **Target** the specific component: "the hero section CTA button"
   - **Give a specific instruction**: "make it larger with rounded corners"
   - **Use UI/UX keywords** Stitch understands (e.g., "more whitespace", "bolder typography", "higher contrast")
   - Include exact token values (hex codes, font names) ONLY when the change involves brand-specific values like colors or fonts
   - Do NOT include token values for unchanged elements -- Stitch already knows the screen's current state
   - Reference the UX brief's psychology rationale for the affected section to preserve intent

4. **Call `mcp__stitch__edit_screens`** with:
   - `projectId` from `state.json.stitch.projectId`
   - `selectedScreenIds: [targetStitchScreenId]` (the screen being edited)
   - `prompt`: the crafted edit prompt from Step 3
   - `deviceType` from `state.json.deviceType` (when available)

5. **Save the edited screen** to `state.json`:
   - Add a new screen entry with incremented variant number (same pattern as variant mode)
   - Add new screen ID to the page's `screenIds[]` array
   - Update page status to `"iterated"`
   - Update `state.json.updatedAt` timestamp

---

## Token Constraint Enforcement

Before any Stitch call in edit mode, check the edit request against tokens:

| Check | Token Path | Example Conflict |
|-------|-----------|-----------------|
| Primary color change | `colors.primary` | User says "change to blue" but primary is #1A1A2E |
| Secondary color change | `colors.secondary` | User says "use red accents" but secondary is #16213E |
| CTA color change | `colors.cta` | User says "green button" but CTA is #FF6B35 |
| Font change | `typography.heading.family` | User says "use Comic Sans" but heading font is Inter |
| Style change | `uiStyle` | User says "make it brutalist" but style is Minimalism |

**For detected conflicts:**
- Warn clearly which token value is being contradicted
- Show current token value vs. requested change
- Ask for explicit confirmation: "Proceed anyway, or update branding first?"
- If user confirms, proceed but note the deviation in the edit prompt so Stitch applies the change intentionally

**For non-conflicting edits:**
- Always include token context in edit prompts so Stitch maintains consistency for elements that should NOT change
- Example: editing hero background? Include correct colors for nav, footer, CTA buttons in the prompt

---

## Output

After iteration completes, present:

```
Iteration Complete

| Field | Value |
|-------|-------|
| Page | {page_name} |
| Mode | {variant / edit} |
| Source Screen | {source_screen_id} |
| New Screen | {new_screen_id} |
| Variant Number | v{number} |
| Stitch Project | {project_url} |

View your {variant/edited} design in Stitch at the project URL above.

Next steps:
- Run /iterate {page} --variants to explore more alternatives
- Run /iterate {page} --edit "changes" to make further refinements
- Run /design to design additional pages
```

---

## Error Handling

### Stitch MCP Not Connected

If `edit_screens` or `generate_variants` is not available:

> **Google Stitch MCP must be connected for design iteration.**
> Connect the Stitch MCP server and retry. Your existing screens are preserved.

### Generation Failure

If Stitch returns an error during variant generation or screen editing:

1. Save the edit prompt (if edit mode) to `.ui-ux/briefs/{page}-edit-prompt.md` for debugging
2. Report the error with details
3. Suggest: "Your existing screens are unchanged. You can retry the same command or try a different edit."

### Page Not Found

If the specified page doesn't exist in `state.json`:

> **Page '{name}' not found.** Available pages: {list from state.json}.
> Check the page name or run `/magic-ui-ux:design {name}` to create it first.

### Page Not Designed

If the page exists but has status other than `"designed"` or `"iterated"`:

> **Page '{name}' has status '{status}' -- it needs to be designed before iterating.**
> Run `/magic-ui-ux:design {name}` first.
