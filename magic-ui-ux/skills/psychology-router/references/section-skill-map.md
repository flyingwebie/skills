# Section-to-Skill Routing Map

Reference file used by the psychology router to select relevant cognitive psychology skills for each page section type.

## Master Routing Table

| Section Type | Primary Skills (always apply) | Secondary Skills (context-dependent) |
|---|---|---|
| hero | cognitive-load, curiosity-gap, visual-cues-cta-psychology | halo-effect-psychology, loss-aversion-psychology |
| navigation | hicks-law, cognitive-load, progressive-disclosure | cognitive-fluency-psychology |
| features/services | cognitive-fluency-psychology, progressive-disclosure, halo-effect-psychology | cognitive-load, social-proof-psychology |
| pricing | loss-aversion-psychology, cognitive-biases, hicks-law | trust-psychology, social-proof-psychology |
| testimonials/social-proof | social-proof-psychology, trust-psychology, halo-effect-psychology | cognitive-fluency-psychology |
| cta | visual-cues-cta-psychology, loss-aversion-psychology, fogg-behavior-model | curiosity-gap, cognitive-load |
| about/team | trust-psychology, halo-effect-psychology, social-proof-psychology | cognitive-fluency-psychology |
| contact/form | fogg-behavior-model, cognitive-load, trust-psychology | progressive-disclosure, hicks-law |
| faq | progressive-disclosure, cognitive-fluency-psychology | trust-psychology, cognitive-load |
| footer | cognitive-load, trust-psychology | hicks-law |
| portfolio/case-studies | social-proof-psychology, halo-effect-psychology, curiosity-gap | trust-psychology |
| onboarding/signup | fogg-behavior-model, progressive-disclosure, cognitive-load | hicks-law, trust-psychology |
| blog/content | curiosity-gap, cognitive-fluency-psychology, progressive-disclosure | hooked-model |
| comparison | cognitive-biases, loss-aversion-psychology, status-quo-bias | hicks-law |
| notification/alert | cognitive-load, loss-aversion-psychology | fogg-behavior-model |

## Selection Rules

1. **Always return primary skills** (2-3 per section) -- these are non-negotiable for the section type.
2. **Add 1-2 secondary skills** when any of the following conditions are met:
   - (a) Page is high-conversion-intent (landing page, pricing page)
   - (b) Section is above the fold
   - (c) User explicitly requests deeper analysis
3. **Maximum 4 skills per section** -- never exceed this cap. If primary + secondary exceeds 4, prioritize primaries and add secondaries by relevance order until the cap is reached.
4. **Landing page hero/CTA override:** If `page_type` is "landing-page", upgrade all secondary skills to primary for `hero` and `cta` sections (still capped at 4).
5. **Content/blog reduction:** If `page_type` is "content/blog", reduce to 2 skills max per section (lighter touch to avoid over-analysis of editorial content).

## Page-Type Modifiers

Page-type modifiers adjust which secondary skills get promoted and which skill categories are emphasized.

| Page Type | Modifier |
|---|---|
| landing-page | Boost conversion skills (loss-aversion-psychology, fogg-behavior-model, visual-cues-cta-psychology) |
| homepage | Balance awareness + trust (trust-psychology, halo-effect-psychology, social-proof-psychology) |
| product/service | Boost clarity skills (cognitive-fluency-psychology, progressive-disclosure) |
| content/blog | Minimize to engagement skills (curiosity-gap, cognitive-fluency-psychology) |
| checkout/signup | Boost friction-reduction skills (fogg-behavior-model, cognitive-load, hicks-law) |

### How Modifiers Apply

When a page-type modifier lists a skill that appears in the current section's secondary list, that skill is promoted to primary (up to the 4-skill cap). When the modifier lists a skill not in the section's mapping at all, it is not added -- modifiers only promote existing secondaries, they do not inject new skills.

## Skill Coverage Verification

Every section type maps to exactly 2-3 primary skills and 1-2 secondary skills, totaling 3-5 candidate skills per section. The 4-skill cap ensures the agent never overwhelms a section with too many psychological lenses.

**Total unique skills referenced:** 14 (all psychology skills are reachable through at least one section type).
