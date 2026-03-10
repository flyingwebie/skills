---
name: psychology-router
description: >
  Routes page sections to relevant psychology skills. Given a page-type and section-type,
  returns 2-4 focused skills instead of all 14. Called by the UX Agent before analyzing
  each section of a page layout.
---

# Psychology Router - Targeted Skill Selection for UX Analysis

## Purpose

Prevents the "wall of psychology" anti-pattern. Instead of applying all 14 cognitive psychology skills to every section, the router selects the 2-4 most relevant skills based on section type and page context. This ensures UX advice is focused and actionable rather than generic.

## Usage

The UX Agent calls this router before analyzing each section of a page layout.

### Input

```
page_type: string
  One of: "landing-page", "homepage", "product/service", "content/blog", "checkout/signup"

section_type: string
  One of: "hero", "navigation", "features/services", "pricing",
          "testimonials/social-proof", "cta", "about/team", "contact/form",
          "faq", "footer", "portfolio/case-studies", "onboarding/signup",
          "blog/content", "comparison", "notification/alert"

conversion_intent: "high" | "medium" | "low" (optional, defaults to "medium")
```

### Output

```
skills: string[]
  2-4 skill names from the 14 available psychology skills

rationale: string
  Brief explanation of why these skills were selected for this section + page combination

skill_summaries: object[]
  For each selected skill:
    - name: string (matching skill directory name)
    - core_principle: string (one sentence)
    - key_patterns: string[] (2-3 design patterns)
```

## Routing Algorithm

1. **Look up section_type** in `references/section-skill-map.md` master routing table
2. **Start with primary skills** (2-3 skills that always apply for this section type)
3. **Evaluate secondary skill promotion:**
   - If `conversion_intent` is "high" OR page_type has a boost modifier in the modifiers table, promote secondary skills up to the 4-skill cap
   - If section is above the fold (hero, navigation), include secondary skills
4. **Apply page-type modifier** from the modifiers table:
   - Modifier skills that appear in the section's secondary list get promoted to primary
   - Modifiers do not inject skills that are not already in the section's mapping
5. **Apply content/blog reduction:** If `page_type` is "content/blog", cap at 2 skills maximum
6. **Enforce 4-skill cap** -- if primary + promoted secondary exceeds 4, keep primaries and fill remaining slots with secondaries by relevance order
7. **Load summaries** from `references/skill-summaries.md` for each selected skill
8. **Return** skills array + rationale + summaries

## Examples

### Example 1: Landing Page Hero

```
Input:
  page_type: "landing-page"
  section_type: "hero"

Algorithm:
  1. Hero primaries: cognitive-load, curiosity-gap, visual-cues-cta-psychology
  2. Hero secondaries: halo-effect-psychology, loss-aversion-psychology
  3. Landing-page modifier boosts: loss-aversion-psychology (in secondaries -> promoted)
  4. Landing-page hero override: upgrade secondaries to primary
  5. Cap at 4: cognitive-load, curiosity-gap, visual-cues-cta-psychology, loss-aversion-psychology

Output:
  skills: ["cognitive-load", "curiosity-gap", "visual-cues-cta-psychology", "loss-aversion-psychology"]
  rationale: "Hero on landing page: cognitive-load ensures clean first impression, curiosity-gap hooks visitor, visual-cues guides to CTA, loss-aversion boosted for high-conversion page type"
```

### Example 2: Blog Content Section

```
Input:
  page_type: "content/blog"
  section_type: "blog/content"

Algorithm:
  1. Blog primaries: curiosity-gap, cognitive-fluency-psychology, progressive-disclosure
  2. Content/blog reduction: cap at 2 skills
  3. Content/blog modifier emphasizes: curiosity-gap, cognitive-fluency-psychology
  4. Final selection: curiosity-gap, cognitive-fluency-psychology

Output:
  skills: ["curiosity-gap", "cognitive-fluency-psychology"]
  rationale: "Content page: lighter touch -- curiosity-gap for headline engagement, cognitive-fluency for readable body"
```

### Example 3: Checkout Form

```
Input:
  page_type: "checkout/signup"
  section_type: "contact/form"
  conversion_intent: "high"

Algorithm:
  1. Contact/form primaries: fogg-behavior-model, cognitive-load, trust-psychology
  2. Contact/form secondaries: progressive-disclosure, hicks-law
  3. Checkout modifier boosts: fogg-behavior-model, cognitive-load, hicks-law
  4. High conversion_intent: promote secondaries -> hicks-law promoted
  5. Cap at 4: fogg-behavior-model, cognitive-load, trust-psychology, hicks-law

Output:
  skills: ["fogg-behavior-model", "cognitive-load", "trust-psychology", "hicks-law"]
  rationale: "Checkout form with high conversion intent: fogg-behavior ensures motivation+ability+prompt alignment, cognitive-load minimizes form friction, trust-psychology addresses payment hesitation, hicks-law reduces field/option overwhelm"
```

### Example 4: Homepage Testimonials

```
Input:
  page_type: "homepage"
  section_type: "testimonials/social-proof"

Algorithm:
  1. Testimonial primaries: social-proof-psychology, trust-psychology, halo-effect-psychology
  2. Homepage modifier boosts: trust-psychology, halo-effect-psychology (already primary)
  3. Medium conversion_intent: no secondary promotion
  4. Final: 3 primary skills (within cap)

Output:
  skills: ["social-proof-psychology", "trust-psychology", "halo-effect-psychology"]
  rationale: "Homepage testimonials: social-proof validates through others' experience, trust-psychology builds credibility, halo-effect ensures polished presentation colors product perception"
```

## When to Load Full Skills

The summaries from `references/skill-summaries.md` are sufficient for:
- Generating UX analysis briefs
- Writing section-specific recommendations
- Creating design review checklists

Load the full skill file (`~/.claude/skills/{name}/SKILL.md`) only when:
- User requests deep psychology analysis of a specific section
- Section is the primary conversion point of the page and detailed patterns are needed
- Debugging why a design recommendation feels off or incomplete
- Building comprehensive audit documentation

## Reference Files

- `references/section-skill-map.md` -- Master routing table, selection rules, and page-type modifiers
- `references/skill-summaries.md` -- One-paragraph summaries of all 14 psychology skills with core principles, design applications, key patterns, and skill paths
