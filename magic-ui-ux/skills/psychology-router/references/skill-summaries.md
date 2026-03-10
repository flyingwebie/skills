# Psychology Skill Summaries

Quick-reference summaries of all 14 cognitive psychology skills. The UX Agent uses these for brief generation without loading full skill files.

---

## cognitive-load

**Core Principle:** Human working memory holds 7 plus-or-minus 2 items for about 20 seconds; when exceeded, users make errors, feel frustrated, and abandon tasks.

**Design Application:** Reduce extraneous load (bad design noise) and manage intrinsic load (task complexity) through chunking, progressive disclosure, and strong visual hierarchy, so that germane load (productive learning) is maximized.

**Key Patterns:**
- Break complex tasks into 3-5 step chunks with clear progress indicators
- Eliminate decorative elements that serve no functional purpose
- Use consistent interaction patterns so users learn once and apply everywhere

**Skill Path:** `~/.claude/skills/cognitive-load/SKILL.md`

---

## hicks-law

**Core Principle:** Decision time increases logarithmically with the number and complexity of choices -- more options means slower, harder decisions that can lead to choice paralysis.

**Design Application:** Minimize visible options at any decision point, aiming for 5-7 items maximum per grouping, and use categorization, smart defaults, and progressive disclosure to manage larger option sets.

**Key Patterns:**
- Chunk related items into groups of 3-4 with clear category labels
- Pre-select the most common choice as a smart default
- Use "Most Popular" or "Recommended" badges to reduce decision effort

**Skill Path:** `~/.claude/skills/hicks-law/SKILL.md`

---

## cognitive-fluency-psychology

**Core Principle:** The brain interprets ease of processing as a signal of truth, safety, and value -- if something feels simple to understand, people perceive it as more trustworthy and worthwhile.

**Design Application:** Optimize typography (16px+ body, high contrast), use everyday language instead of jargon, keep sentences under 20 words, and apply strong visual hierarchy so the main point is immediately obvious.

**Key Patterns:**
- Apply the 5-second test: can a stranger explain what this is, who it is for, and what to do next?
- Use short sentences, active voice, and familiar vocabulary
- Ensure high contrast ratios (4.5:1 minimum) and clean whitespace

**Skill Path:** `~/.claude/skills/cognitive-fluency-psychology/SKILL.md`

---

## cognitive-biases

**Core Principle:** Humans make 95% of decisions through fast, automatic System 1 thinking driven by biases like anchoring, loss aversion, framing effects, and social proof rather than deliberate rational analysis.

**Design Application:** Work with natural decision-making patterns by applying anchoring in pricing, positive framing in messaging, and social proof at conversion points -- while rigorously avoiding dark patterns that exploit these biases unethically.

**Key Patterns:**
- Show premium/enterprise tier first to anchor price perception (anchoring)
- Frame benefits as losses avoided rather than gains achieved (loss aversion + framing)
- Use the decoy effect in pricing to make the target option feel like the best value

**Skill Path:** `~/.claude/skills/cognitive-biases/SKILL.md`

---

## halo-effect-psychology

**Core Principle:** A positive first impression in one area creates favorable assumptions about all other attributes -- if the landing page looks polished, users assume the product, support, and engineering are equally high quality.

**Design Application:** Invest disproportionately in first-impression touchpoints (landing page, onboarding, first 30 seconds) because the halo from that polish carries forward to areas users have not yet evaluated.

**Key Patterns:**
- Prioritize visual polish and performance at first-contact points above all else
- Fix slow load times and visual glitches before adding features (horn effect prevention)
- Use premium design signals (clean typography, deliberate whitespace, consistent branding)

**Skill Path:** `~/.claude/skills/halo-effect-psychology/SKILL.md`

---

## loss-aversion-psychology

**Core Principle:** People feel losses approximately twice as strongly as equivalent gains -- a $100 loss hurts as much as a $200 gain feels good, creating an asymmetry that profoundly shapes behavior.

**Design Application:** Frame messaging around what users stand to lose by not acting rather than what they gain by acting, especially for existing users with accumulated progress, data, or streaks.

**Key Patterns:**
- Make potential losses concrete and specific ("Lose your 23 saved items" not "Lose your data")
- Use the endowment effect via free trials that create ownership before asking for payment
- Time loss-framed messages carefully -- too early feels irrelevant, too late creates resentment

**Skill Path:** `~/.claude/skills/loss-aversion-psychology/SKILL.md`

---

## visual-cues-cta-psychology

**Core Principle:** Human visual attention follows predictable patterns -- evolutionary triggers (faces, movement), learned patterns (F/Z reading), and design signals (size, color, contrast, directional cues) -- that designers can leverage to guide users toward desired actions.

**Design Application:** Use gaze direction in photos toward CTAs, place primary actions in terminal areas of reading patterns (bottom-right for Z-pattern), and create clear visual hierarchy through size, contrast, and whitespace isolation.

**Key Patterns:**
- Direct human gaze in photos/illustrations toward the CTA (eye-superiority effect)
- Use encapsulation (borders, background color, cards) to isolate conversion areas -- research shows 8%+ registration increases
- Apply first-person CTA copy ("Get My Free Guide") which outperforms third-person phrasing

**Skill Path:** `~/.claude/skills/visual-cues-cta-psychology/SKILL.md`

---

## trust-psychology

**Core Principle:** Trust is a psychological mechanism that reduces perceived risk and uncertainty, tipping the balance from hesitation to action -- it operates through three dimensions: competence (can they deliver?), benevolence (do they care?), and integrity (are they honest?).

**Design Application:** Layer trust signals strategically throughout the page -- security indicators and social proof near the top, detailed testimonials in the middle, and risk-reduction guarantees (money-back, no credit card, cancel anytime) immediately adjacent to CTAs.

**Key Patterns:**
- Address all six risk types: financial, product, service, psychological, privacy, and time
- Place security badges, guarantee text, and "no risk" statements directly next to conversion buttons
- Eliminate trust killers: slow load times, broken links, typos, hidden fees, and missing contact info

**Skill Path:** `~/.claude/skills/trust-psychology/SKILL.md`

---

## social-proof-psychology

**Core Principle:** When uncertain, people copy the actions of others as a decision shortcut -- the effect is strongest when the reference group is similar to the observer, perceived as expert, and large in number.

**Design Application:** Display real testimonials with specific results, recognizable brand logos, user/customer counts, and "most popular" indicators at key decision points throughout the conversion funnel.

**Key Patterns:**
- Use specific, results-oriented testimonials with real names, photos, and titles (not "Great product! - John D.")
- Place social proof elements above the fold and near CTAs for maximum impact
- Match proof type to audience: peer testimonials for B2C, brand logos and case studies for B2B

**Skill Path:** `~/.claude/skills/social-proof-psychology/SKILL.md`

---

## progressive-disclosure

**Core Principle:** Show users only what they need when they need it -- 80% of users need 20% of features, so surface that 20% prominently and reveal complexity gradually as users demonstrate readiness.

**Design Application:** Structure interfaces in disclosure levels: essential (always visible), important (one click away), useful (accessible but hidden), and advanced (intentionally buried), with clear affordances for expanding each level.

**Key Patterns:**
- Use expand/collapse, tooltips, tabs, and modals to layer information by priority
- Remember user preferences for disclosure state across sessions
- Provide search/filter as an escape hatch for users who know what they want in deeply hidden areas

**Skill Path:** `~/.claude/skills/progressive-disclosure/SKILL.md`

---

## hooked-model

**Core Principle:** Habit-forming products cycle through four phases -- Trigger (internal/external), Action (simplest behavior), Variable Reward (unpredictable payoff), and Investment (user effort that improves the product) -- repeating until the behavior becomes automatic.

**Design Application:** Design engagement loops where each cycle deepens the user's investment and transitions from external triggers (notifications, emails) to internal triggers (emotions like boredom, curiosity, or FOMO) that drive spontaneous return.

**Key Patterns:**
- Make the core action as simple as possible (one tap/click to engage)
- Vary rewards meaningfully across Tribe (social validation), Hunt (resources/information), and Self (achievement/mastery)
- Build investment that creates switching costs: data, content, followers, reputation, learned skills

**Skill Path:** `~/.claude/skills/hooked-model/SKILL.md`

---

## fogg-behavior-model

**Core Principle:** Behavior happens only when Motivation, Ability, and a Prompt converge at the same moment -- if any element is missing or insufficient, the behavior fails. The formula is B = MAP.

**Design Application:** When users are not taking desired actions, diagnose which element is missing: boost motivation with value propositions and social proof, increase ability by reducing friction and steps, or fix prompt timing so triggers arrive when motivation and ability are both high.

**Key Patterns:**
- Start with ability (easiest to design for): reduce steps, add smart defaults, eliminate unnecessary fields
- Match prompt type to the deficit: Spark (low motivation), Facilitator (low ability), Signal (just needs a reminder)
- Apply the Tiny Habits approach: anchor new behaviors to existing habits and make the first version absurdly small

**Skill Path:** `~/.claude/skills/fogg-behavior-model/SKILL.md`

---

## curiosity-gap

**Core Principle:** When people become aware of a gap between what they know and what they want to know, they experience an uncomfortable drive state (like hunger) that compels them to seek resolution -- and resolving it activates the brain's reward centers.

**Design Application:** Reveal enough to establish relevance and signal value, but conceal enough to create uncertainty and drive action. The user should know WHAT but not HOW or WHY, creating motivation to click, read, or explore.

**Key Patterns:**
- Calibrate gap size: too small creates no motivation, too large triggers skepticism
- Always deliver on the promise -- the payoff must match or exceed the gap's implied value
- Use knowledge gaps ("The strategy Netflix uses to..."), outcome gaps ("She tried it, and then..."), and resolution gaps ("The surprising conclusion...")

**Skill Path:** `~/.claude/skills/curiosity-gap/SKILL.md`

---

## status-quo-bias

**Core Principle:** People prefer the current state of things and resist change even when objectively better options exist -- driven by fear of uncertainty, loss aversion (losses of switching feel 2x worse than gains), cognitive effort of learning something new, and regret avoidance.

**Design Application:** When you need users to change behavior, frame the cost of NOT changing (loss framing reversal), offer easy reversal ("switch back anytime"), use gradual transitions instead of big jumps, and set smart defaults that leverage the bias for beneficial outcomes.

**Key Patterns:**
- Set defaults to the most beneficial option -- 80-90% of users keep whatever is pre-selected
- Use the EASE framework: Eliminate uncertainty, Amplify current pain, Simplify the switch, Enable easy reversal
- For migrations, preserve familiar elements and offer parallel running periods before removing the old way

**Skill Path:** `~/.claude/skills/status-quo-bias/SKILL.md`
