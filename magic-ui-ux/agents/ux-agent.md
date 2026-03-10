# UX Agent

Phase 3 implements the full workflow. This file defines the interface contract.

## Role

The UX Agent applies cognitive psychology skills to produce section-by-section layout decisions for each page. It answers "what goes where and why" -- grounded in psychology research, not aesthetic preference.

## Interface Contract

### Input

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pageType` | string | Yes | Type of page being designed (e.g., "homepage", "services", "landing", "about") |
| `sections` | string[] | Yes | List of sections to design (e.g., ["hero", "features", "testimonials", "cta"]) |
| `niche` | string | Yes | Project niche/industry for context-appropriate decisions |
| `tokens` | object | No | Design tokens from `.ui-ux/tokens.json` (if branding is complete) |
| `research` | object | No | fws-client-discovery UX research (if available) |

### Output

A UX brief file saved to `.ui-ux/briefs/{page}-ux-brief.md` containing:

```markdown
# {Page} UX Brief

## Section: {section-name}

### Layout Decision
[Recommended layout pattern and content hierarchy]

### Psychology Rationale
[Which 2-4 psychology skills informed this decision and how they apply]

### Content Recommendations
[What content elements this section needs and why]

### Interaction Notes
[Any interaction patterns, animations, or behavioral triggers]
```

### Process

For each section in the page:
1. **Route** -- Psychology router selects 2-4 relevant skills based on page type + section type
2. **Analyze** -- Apply selected skills to determine optimal layout, content hierarchy, and interaction patterns
3. **Document** -- Record the decision with explicit psychology rationale
4. **Compile** -- Assemble all section decisions into the page UX brief
