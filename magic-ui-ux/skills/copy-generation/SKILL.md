---
name: copy-generation
description: >
  Generates page copy (headlines, subheadings, body text, CTAs, labels) based on project niche,
  page type, and UX brief psychology rationale. Presents all copy for human approval before use.
  Never passes unapproved copy to the UI Agent.
---

# Copy Generation Skill

## Purpose

Generate section-by-section page copy that aligns with the psychology rationale established in the UX brief. Copy is not generic filler -- each headline, subheading, body paragraph, and CTA is crafted to serve the specific cognitive skill applied to that section (e.g., a curiosity-gap hero gets a headline that opens an information gap; a trust section gets credibility language).

**Human approval is mandatory.** No copy reaches the UI Agent without explicit user sign-off.

## Interface Contract

### Input

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_type` | string | Yes | Type of page (e.g., "homepage", "services", "landing", "about") |
| `sections` | string[] | Yes | Section list from UX brief (e.g., ["hero", "features", "testimonials", "cta"]) |
| `niche` | string | Yes | Project niche from `.ui-ux/state.json` |
| `tokens` | object | No | Design tokens from `.ui-ux/tokens.json` for brand voice alignment |

### Output

Approved copy saved to `.ui-ux/briefs/{page}-copy.md`

## Process

### Step 1: Gather Context

1. Read niche from `.ui-ux/state.json`
2. Read UX brief from `.ui-ux/briefs/{page}-ux-brief.md` for section structure and psychology rationale
3. Read `.ui-ux/tokens.json` if available for brand voice and personality cues
4. Read `skills/copy-generation/references/copy-guide.md` for section-specific copy patterns

### Step 2: Generate Copy

For each section in the UX brief:

1. Identify which psychology skills were applied (from the brief's "Psychology Rationale" per section)
2. Select the matching copy pattern from `copy-guide.md`
3. Generate copy elements appropriate to the section type:
   - **Headline** -- Primary text, aligned with the psychology skill (e.g., curiosity-gap: provocative question; loss-aversion: what they risk missing)
   - **Subheading** -- Supporting text that reinforces the headline's psychological frame
   - **Body text** -- Elaboration, details, or explanation (where applicable)
   - **CTA label** -- Action-oriented microcopy (where applicable)
   - **Supporting text** -- Captions, labels, form helper text (where applicable)
4. Apply page-type modifiers from `copy-guide.md` (e.g., landing pages use urgency language in CTAs)
5. Use the project niche to make copy specific -- never generic

### Step 3: Present for Approval

Present ALL generated copy to the user in a clear, section-by-section format:

```markdown
## Copy for {Page} Page

### Section: Hero
- **Headline:** [generated headline]
- **Subheading:** [generated subheading]
- **CTA:** [generated CTA label]

### Section: Features
- **Headline:** [generated headline]
- **Feature 1:** [title] -- [description]
- **Feature 2:** [title] -- [description]
- **Feature 3:** [title] -- [description]

[...continue for each section...]
```

### Step 4: User Decision

The user can:

1. **Approve** -- Accept all copy as-is. Proceed to save.
2. **Edit** -- Modify specific sections. User provides corrections, agent incorporates them.
3. **Regenerate** -- Request fresh copy for specific sections or the entire page.
4. **Provide manually** -- User supplies their own copy file instead.

Iterate until the user explicitly approves.

### Step 5: Save Approved Copy

Save the approved copy to `.ui-ux/briefs/{page}-copy.md` in a structured format:

```markdown
# {Page} Page Copy

## Section: {section-name}

### Headline
[approved headline]

### Subheading
[approved subheading]

### Body
[approved body text]

### CTA
[approved CTA label]

### Supporting
[approved supporting text, labels, captions]
```

## Key Rules

1. **NEVER pass unapproved copy to the UI Agent.** Human-in-the-loop is mandatory.
2. **Copy must align with psychology rationale.** A curiosity-gap section needs curiosity-driven copy, not generic marketing speak.
3. **Be niche-specific.** "Transform your workflow" is generic. "Cut your sprint planning from 3 hours to 30 minutes" is niche-specific.
4. **Respect length guidelines.** See `references/copy-guide.md` for per-element word counts.
5. **Avoid anti-patterns.** No "Welcome to our website", no buzzword salads, no passive voice in CTAs.

## Reference

See `references/copy-guide.md` for detailed section-by-section copy patterns, psychology-aligned writing techniques, length guidelines, and anti-patterns.
