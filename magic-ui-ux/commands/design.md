---
description: "Design one or more pages with psychology-driven UX and Stitch-generated UI"
allowed-tools: Read, Write, Edit, Bash(ls:*,cat:*,mkdir:*), Task, mcp__stitch__create_project, mcp__stitch__generate_screen_from_text, mcp__stitch__list_screens
argument-hint: "<pages> [--copy <file>]"
---

# /magic-ui-ux:design

Design one or more pages end-to-end using the psychology-driven UX-to-UI pipeline. Each page flows through: section planning, UX Agent (psychology-informed layout), copy generation (with human approval), and UI Agent (Stitch screen generation).

---

## Pre-Flight Check

Before doing anything, read the project's persistence layer.

1. **Check `.ui-ux/` exists.**
   - If `.ui-ux/` does not exist, initialize it per the persistence skill (`skills/persistence/SKILL.md`): create directories, create `state.json` with project name and niche (ask user if not known).

2. **Read `.ui-ux/state.json`** for project context:
   - `niche` -- needed for copy generation and section suggestions
   - `pages` -- existing pages and their statuses (avoid re-doing completed work)
   - `stitch.projectId` -- if a Stitch project already exists, reuse it

3. **Read `.ui-ux/tokens.json`** -- REQUIRED.
   - If `tokens.json` does not exist, **HALT**: "Run `/magic-ui-ux:branding` first. The design pipeline requires a design system."
   - Verify tokens are complete: `colors.primary`, `colors.secondary`, `colors.cta`, `colors.background`, `colors.text`, `typography.heading.family`, `typography.body.family` must all have values.

4. **Read `.ui-ux/branding.md`** for brand personality context (tone, style, personality traits).

5. **Stitch project sync check** (if `stitch.projectId` exists):
   - Call `mcp__stitch__list_screens` with the `projectId` to verify the project is accessible
   - If the call fails, warn: "Stitch project {projectId} is not accessible. A new project will be created during design."
   - If it succeeds, log the current screen count for context (helps detect drift early)

---

## Input Parsing

### Page Argument

- **If `<pages>` argument provided:** Parse comma-separated page names.
  ```
  /magic-ui-ux:design homepage,services,about
  ```
  Produces: `["homepage", "services", "about"]`

- **If no `<pages>` argument:** Prompt the user to select pages. Suggest common pages based on the project niche:

  | Niche Category | Suggested Pages |
  |---------------|-----------------|
  | SaaS / Software | homepage, features, pricing, about, contact |
  | E-commerce | homepage, product, category, cart, checkout |
  | Agency / Services | homepage, services, portfolio, about, contact |
  | Content / Blog | homepage, blog, article, about, contact |
  | Portfolio / Personal | homepage, portfolio, about, contact |
  | Restaurant / Local | homepage, menu, about, reservations, contact |
  | Healthcare | homepage, services, providers, about, contact |
  | Education | homepage, courses, instructors, about, contact |
  | Real Estate | homepage, listings, property-detail, about, contact |
  | Nonprofit | homepage, mission, programs, donate, contact |

  Let the user type their selection or accept the suggestion.

### Validation

- Page names must be lowercase, alphanumeric, and hyphens only (e.g., `homepage`, `product-detail`, `about-us`)
- Reject names with spaces, special characters, or uppercase letters
- If a page already has status `"designed"` in `state.json`, warn: "Page '{name}' is already designed. Re-running will create new screens. Continue?"

### Copy Flag

- **If `--copy <file>` provided:** Read the specified file. Skip copy generation for ALL pages in this run. The file should contain section-labeled copy.
- **If no `--copy` flag:** Copy generation runs per page (Step 3 in the pipeline below).

### Device Type Flag

- **If `--device <type>` provided:** Map the value to Stitch device types:
  - `web` or `desktop` → `DESKTOP`
  - `app` or `mobile` → `MOBILE`
  - `tablet` → `TABLET`

  ```
  /magic-ui-ux:design homepage --device web
  /magic-ui-ux:design homepage --device app
  ```

- **If no `--device` flag:** Ask the user:
  > **App (mobile-first) or Web (desktop-first)?**
  >
  > This determines the target device for Stitch screen generation.

  Save the selected device type to `state.json.deviceType` so subsequent commands inherit it.

### Design Mode Flag

- **If `--mode <mode>` provided:** Map to Stitch model IDs:
  - `pro` → `GEMINI_3_PRO` (complex, production-quality screens)
  - `fast` → `GEMINI_3_FLASH` (wireframing, quick iteration)

  ```
  /magic-ui-ux:design homepage --mode fast
  ```

- **If no `--mode` flag:** Default silently to `GEMINI_3_PRO`. Do NOT ask the user.

---

## Per-Page Pipeline

Process pages **sequentially**. Each page completes the full pipeline before the next begins. This is required because:
- User must approve copy per page (human-in-the-loop)
- Stitch API calls are sequential
- State is saved after each page so progress survives interruption

### Step 1: Section Planning

Based on the page type and project niche, suggest a default section list:

| Page Type | Default Sections |
|-----------|-----------------|
| homepage | hero, features, testimonials, cta, footer |
| landing | hero, features, social-proof, cta |
| services | hero, services-list, process, testimonials, cta, footer |
| about | hero, story, team, values, cta, footer |
| pricing | hero, pricing-table, faq, cta, footer |
| product | hero, features, specs, testimonials, cta, footer |
| portfolio | hero, project-grid, testimonials, cta, footer |
| contact | hero, contact-form, map, faq, footer |
| blog | hero, article-grid, categories, newsletter, footer |
| checkout | progress, cart-summary, payment-form, reassurance |

Present to user:

> **Suggested sections for {page}:** {section list}
>
> Approve these sections or tell me what to add, remove, or reorder.

User confirms or modifies. Store the confirmed section list for the next steps.

### Step 2: UX Agent

Invoke the UX Agent (`agents/ux-agent.md`) with:

| Parameter | Value |
|-----------|-------|
| `pageType` | The page name (e.g., "homepage") |
| `sections` | Confirmed section list from Step 1 |
| `niche` | From `.ui-ux/state.json` |
| `tokens` | From `.ui-ux/tokens.json` |

The UX Agent:
1. Runs the psychology router to select 2-4 relevant skills per section
2. Applies selected skills with awareness of design tokens
3. Produces `.ui-ux/briefs/{page}-ux-brief.md` with section-by-section layout decisions and psychology rationale

After UX Agent completes:
- Update `.ui-ux/state.json`: set page status to `"ux-briefed"`, set `uxBriefPath`
- If page entry doesn't exist in `state.json`, create it

### Step 3: Copy Generation (if no --copy flag)

Invoke the copy generation skill (`skills/copy-generation/SKILL.md`) with:

| Parameter | Value |
|-----------|-------|
| `page_type` | The page name |
| `sections` | Section list from the UX brief |
| `niche` | From `.ui-ux/state.json` |
| `tokens` | From `.ui-ux/tokens.json` (optional, for brand voice) |

The copy generation skill:
1. Reads the UX brief for psychology rationale per section
2. Generates section-by-section copy aligned with the psychology skills applied
3. **Presents ALL copy to user for approval** (mandatory human-in-the-loop)
4. User approves, edits, or requests regeneration
5. Saves approved copy to `.ui-ux/briefs/{page}-copy.md`

**If `--copy` flag was provided:** Skip this step. Use the provided copy file instead.

**CRITICAL: Never pass unapproved copy to the UI Agent.**

### Step 3.5: Image Specification

Invoke the image generation skill (`skills/image-generation/SKILL.md`) in pipeline mode:

1. **Read the UX brief** to identify sections needing imagery (hero, about, testimonials, services, portfolio, features, contact, team)
2. **Skip sections** that don't need photographic content (pricing, FAQ, forms, footer, newsletter)
3. **Generate the JSON spec** with per-section photography context via `panel_specifications`
4. **Translate to natural language** -- the `guidanceText` output is what the UI Agent will consume

| Parameter | Value |
|-----------|-------|
| `page` | Current page name |
| `uxBrief` | `.ui-ux/briefs/{page}-ux-brief.md` (produced in Step 2) |
| `tokens` | `.ui-ux/tokens.json` (loaded in pre-flight) |

After image spec completes:
- Spec saved to `.ui-ux/briefs/{page}-image-spec.json`
- Entry added to `state.json.imageSpecs[]` with `guidanceText`
- The translated guidance text is passed to the UI Agent in Step 4

**This step is automatic -- no user approval needed.** Image specs are technical photography parameters, not brand content.

### Step 4: UI Agent

Invoke the UI Agent (`agents/ui-agent.md`) with:

| Parameter | Value |
|-----------|-------|
| `uxBrief` | `.ui-ux/briefs/{page}-ux-brief.md` |
| `tokens` | `.ui-ux/tokens.json` |
| `branding` | `.ui-ux/branding.md` |
| `copy` | `.ui-ux/briefs/{page}-copy.md` (or user-provided copy file) |
| `imageSpec` | `.ui-ux/briefs/{page}-image-spec.json` (produced in Step 3.5) |
| `deviceType` | Device type from `--device` flag or `state.json.deviceType` |
| `modelId` | Design mode from `--mode` flag (default: omit to let Stitch choose) |

The UI Agent:
1. Reads all inputs (UX brief, tokens, branding, copy)
2. Crafts detailed Stitch prompts with exact token values (hex codes, font names, UI style)
3. Creates a Stitch project via `create_project` if no project exists yet (`stitch.projectId` is null in `state.json`)
4. Generates screens via `generate_screen_from_text` for each section or page layout
5. Returns screen IDs and project URL

After UI Agent completes:
- Update `.ui-ux/state.json`:
  - Set page status to `"designed"`
  - Populate `screenIds` array for the page
  - Set `stitch.projectId` and `stitch.projectUrl` if newly created
  - Update `updatedAt` timestamp

### Step 5: Animation Choreography

Invoke the animation choreography skill (`skills/animation/SKILL.md`) with:

| Parameter | Value |
|-----------|-------|
| `page` | Current page name (e.g., "homepage") |
| `uxBrief` | `.ui-ux/briefs/{page}-ux-brief.md` (produced in Step 2) |
| `tokens` | `.ui-ux/tokens.json` (loaded in pre-flight) |

The animation skill:
1. Reads the UX brief for psychology rationale per section
2. Determines animation intensity from the UI style token (restrained, moderate, or expressive)
3. Assembles per-section choreography with entrance animations, scroll behaviors, and reduced motion fallbacks
4. Produces `.ui-ux/briefs/{page}-animation-spec.md`

After animation skill completes:
- Add entry to `state.json.animationSpecs[]`: `{ "page": "{page}", "specPath": ".ui-ux/briefs/{page}-animation-spec.md" }`
- Update `state.json.updatedAt` timestamp

---

## Summary Output

After all pages are processed, present a summary:

```
Design Complete

| Page | Status | Device | UX Brief | Copy | Image Spec | Screens | Animation |
|------|--------|--------|----------|------|------------|---------|-----------|
| homepage | designed | DESKTOP | .ui-ux/briefs/homepage-ux-brief.md | .ui-ux/briefs/homepage-copy.md | .ui-ux/briefs/homepage-image-spec.json | 3 screens | .ui-ux/briefs/homepage-animation-spec.md |
| services | designed | DESKTOP | .ui-ux/briefs/services-ux-brief.md | .ui-ux/briefs/services-copy.md | .ui-ux/briefs/services-image-spec.json | 2 screens | .ui-ux/briefs/services-animation-spec.md |

Stitch Project: [project URL]

Next steps:
- Run /magic-ui-ux:design to design additional pages
- Run /magic-ui-ux:image to generate or refine image specs standalone
- Run /magic-ui-ux:video for scroll-driven video-style page specs
- Run /magic-ui-ux:iterate <page> --edit "changes" to refine any screen
- Run /magic-ui-ux:iterate <page> --variants to explore alternative designs
```

---

## Multi-Page Handling

- Pages are processed **sequentially** (not in parallel)
- Reason: user must approve copy per page; Stitch calls are sequential
- State is saved to `.ui-ux/state.json` after EACH page completes
- If interrupted mid-run, completed pages retain their progress
- Re-running `/design` for a page that is already `"designed"` will create new screens (user is warned during validation)

---

## Error Handling

### Stitch MCP Not Connected

If `create_project` or `generate_screen_from_text` is not available:

> **Google Stitch MCP must be connected for screen generation.**
> Connect the Stitch MCP server and retry. The UX brief and copy have been saved -- you won't lose progress.

Save the UX brief and copy (partial progress is preserved), then halt the pipeline for this page.

### Copy Approval Rejected

If the user rejects all generated copy:

1. Offer to regenerate with different parameters
2. Offer to let the user provide their own copy file
3. User can also skip copy and proceed without (UI Agent will use placeholder sections)

### Stitch Generation Fails

If Stitch returns an error during screen generation:

1. Save UX brief and copy (partial progress preserved)
2. Report the error with details
3. Suggest: "The UX brief and copy are saved. You can retry `/design {page}` or use Stitch directly with the brief as a reference."

### Tokens Incomplete

If `tokens.json` exists but is missing required fields:

> **Design tokens are incomplete.** Missing: {list of missing fields}.
> Run `/magic-ui-ux:branding` to regenerate a complete design system.

### Page Already Designed

If a page has status `"designed"` and user confirms re-design:
- Create new screens (don't delete old ones from Stitch)
- Update `state.json` with new screen IDs (old IDs are replaced in the page entry)
- Old screens remain in the `screens` array for reference
