---
description: "Generate or reverse-engineer a design system for the project"
allowed-tools: Read, Write, Edit, WebFetch, Bash(ls:*,cat:*,mkdir:*), Task
argument-hint: "[niche/industry] [--from-url <url>] [--from-screenshot <path>]"
---

# /magic-ui-ux:branding

Generate a complete design system for the project. Produces machine-readable tokens (`.ui-ux/tokens.json`), human-readable design documentation (`.ui-ux/branding.md`), and updates project state.

---

## Pre-flight

Before doing anything else, run these checks:

### 1. Initialize persistence if needed

Check if `.ui-ux/` exists. If not, initialize it:

```bash
mkdir -p .ui-ux/briefs .ui-ux/references
```

Create `.ui-ux/state.json` with initial values:

```json
{
  "projectName": "<ask user for project name>",
  "niche": "<will be set during branding>",
  "createdAt": "<current ISO 8601 timestamp>",
  "updatedAt": "<current ISO 8601 timestamp>",
  "screens": [],
  "pages": [],
  "brandingComplete": false,
  "animationSpecs": []
}
```

### 2. Check for existing branding

If `.ui-ux/tokens.json` already exists:
- Warn the user: "A design system already exists. Running /branding will overwrite your current tokens and branding document."
- Ask for confirmation before proceeding.
- If user declines, stop execution.

### 3. Read project context

If `.ui-ux/state.json` exists, read it for:
- `projectName` (used in branding.md title)
- `niche` (may already be set from a previous partial run)

---

## Input Parsing

Parse the command argument and flags:

- **Niche argument** (positional): The project niche or industry description (e.g., `"SaaS fintech"`, `"luxury wellness"`)
- **`--from-url <url>`**: URL to reverse-engineer (see From Reference section)
- **`--from-screenshot <path>`**: Screenshot path to analyze (see From Reference section)

### Mode Detection

- If `--from-url` or `--from-screenshot` is provided: use **From Reference** mode
- Otherwise: use **From Scratch** mode (this section)

### Niche Resolution

The niche is required for From Scratch mode. Resolve it in this order:
1. If provided as command argument, use it
2. If not provided but `state.json` has a `niche` value, use it
3. If neither, ask the user: "What is your project's niche or industry? (e.g., 'SaaS fintech', 'luxury wellness spa', 'e-commerce streetwear')"

---

## From Scratch

Generate a complete design system from a niche description. This is the primary creative path.

### Step 1: Load generation algorithm

Read `skills/branding/SKILL.md` for the generation algorithm and input/output contract.

### Step 2: Load industry design rules

Read `skills/branding/references/industry-design-rules.md` and identify the industry category that best matches the user's niche description.

**Matching logic:**
- Direct match: "SaaS fintech" matches "Fintech / Finance" (use the more specific term)
- Compound match: "SaaS fintech" also relates to "SaaS / Tech" -- use fintech as primary, SaaS as secondary influence
- Fuzzy match: "online clothing store" maps to "E-commerce / Retail"
- Luxury sub-segment: "luxury fitness" maps to "Fitness / Sports" with influence from "Luxury / Fashion"

If no clear match, use "SaaS / Tech" as a sensible default and note the ambiguity to the user.

### Step 3: Load output format guide

Read `skills/branding/references/token-generation-guide.md` for the exact structure and validation rules for both output files.

### Step 4: Generate design system

Follow the 9-step algorithm from `skills/branding/SKILL.md`:

#### 4a. Select colors

Using the matched industry's color psychology direction:
- **Primary**: Pick a specific hex code that matches the industry's emotional direction
- **Secondary**: Derive from a complementary or analogous relationship to primary
- **CTA**: Must contrast against both primary AND background -- never similar to primary
- **Background**: Near-white or dark depending on industry mood and UI style
- **Text**: Ensure WCAG AA 4.5:1 contrast ratio against background
- **Success**: Green family (adjust warmth to match palette)
- **Warning**: Amber family (adjust warmth to match palette)
- **Error**: Red family (adjust warmth to match palette)

All values as 6-digit hex codes: `#XXXXXX`

#### 4b. Choose typography

From the industry's typography direction:
- **Heading font**: Real Google Fonts name matching industry direction (serif for authority, geometric sans for modern, display for creative)
- **Body font**: Pairs well with heading, optimized for readability
- **Accent font** (optional): For code, callouts, or decorative elements
- **Weights**: Heading typically "600" or "700", body typically "400"
- **Google Fonts URLs**: `https://fonts.google.com/specimen/{Font+Name}`

#### 4c. Set spacing scale

Universal scale (does not vary by industry):
```json
{
  "unit": "rem",
  "scale": [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8]
}
```

#### 4d. Recommend UI style

Select one based on industry tendency:
- Minimalism, Glassmorphism, Neubrutalism, Soft UI, Editorial, Gradient-Rich, Dark Mode Premium

#### 4e. Define component patterns

Select one pattern per component based on industry and UI style:
- **header**: sticky-minimal | transparent-overlay | bold-branded | classic-nav
- **hero**: centered-text | split-content | full-bleed-image | gradient-overlay | video-background
- **cta**: bold-contrast | subtle-inline | floating-sticky | card-embedded
- **footer**: minimal-links | mega-footer | centered-simple | dark-contrast

### Step 5: Write tokens.json

Assemble all generated values into `.ui-ux/tokens.json`:

```json
{
  "colors": {
    "primary": "#<generated>",
    "secondary": "#<generated>",
    "cta": "#<generated>",
    "background": "#<generated>",
    "text": "#<generated>",
    "success": "#<generated>",
    "warning": "#<generated>",
    "error": "#<generated>"
  },
  "typography": {
    "heading": {
      "family": "<generated>",
      "weight": "<generated>",
      "googleFontsUrl": "<generated>"
    },
    "body": {
      "family": "<generated>",
      "weight": "<generated>",
      "googleFontsUrl": "<generated>"
    },
    "accent": {
      "family": "<generated if applicable>"
    }
  },
  "spacing": {
    "unit": "rem",
    "scale": [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8]
  },
  "uiStyle": "<generated>",
  "industry": "<user's niche description>",
  "componentPatterns": {
    "header": "<generated>",
    "hero": "<generated>",
    "cta": "<generated>",
    "footer": "<generated>"
  }
}
```

**Validate before writing:**
- All 5 required color fields have valid hex codes (`#` + 6 hex characters)
- Both heading and body typography have family names
- uiStyle and industry fields are populated

### Step 6: Write branding.md

Generate `.ui-ux/branding.md` using the template from `skills/branding/references/token-generation-guide.md` Part 2.

**Key requirements:**
- Title uses project name from state.json
- Every hex code matches tokens.json exactly
- Every font name matches tokens.json exactly
- Color rationale references industry psychology
- Typography rationale explains why this pairing works for this niche
- Component patterns match tokens.json componentPatterns values

### Step 7: Update state.json

Update `.ui-ux/state.json`:
- Set `brandingComplete` to `true`
- Set `niche` to the user's niche description
- Update `updatedAt` to current ISO 8601 timestamp
- If `projectName` was asked during this run, update it

### Step 8: Present summary to user

Show the user their new design system at a glance:

```
Design system generated for "{niche}":

  Colors:
    Primary:    #XXXXXX
    Secondary:  #XXXXXX
    CTA:        #XXXXXX

  Typography:
    Heading: {Font Name} ({weight})
    Body:    {Font Name} ({weight})

  UI Style: {style}

  Full design system: .ui-ux/branding.md
  Machine tokens:     .ui-ux/tokens.json
```

---

## From Reference

> **See Plan 02-02 for implementation.**

Reverse-engineer a design system from an existing website or screenshot.

### From URL (`--from-url <url>`)
Given a live URL (landing page, Dribbble shot, Awwwards site), fetch and analyze:
- Extract color palette from CSS/visual analysis
- Identify typography from font declarations
- Analyze spacing patterns and layout structure
- Determine component styles and interaction patterns

### From Screenshot (`--from-screenshot <path>`)
Given a screenshot or design image, analyze visually:
- Extract dominant and accent colors
- Identify typeface characteristics
- Analyze whitespace and grid patterns
- Document component styles

### Output
Same as From Scratch: produces `.ui-ux/tokens.json`, `.ui-ux/branding.md`, and updates `.ui-ux/state.json`.
