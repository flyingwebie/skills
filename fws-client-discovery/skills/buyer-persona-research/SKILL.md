---
name: buyer-persona-research
description: >
  Build data-driven buyer personas using the Hormozi Value Equation (APEX) methodology.
  Use when running client discovery, building landing pages, or aligning on target audience.
  Triggers: "buyer persona", "ideal customer", "target audience", "ICP", "value equation".
version: 0.1.0
---

# Buyer Persona Research — APEX Methodology

## Purpose
Build data-driven buyer personas using the Hormozi Value Equation framework. Each persona maps Dream Outcomes to product/service features, identifies real objections, and provides actionable messaging frameworks for web design, content, and marketing.

## When to Use
- During client discovery (Step 3 of FWS workflow)
- When building landing pages, service pages, or ad campaigns
- When the team needs alignment on "who we're building for"

## Inputs Required
1. **Meeting transcription** — client's description of their customers
2. **Industry/niche** — from discovery context
3. **Competitor findings** — from Step 2 (if available in discovery-context.md)
4. **Client website** — for analyzing current messaging (if available)

## APEX Value Equation

Every persona is built around Hormozi's Value Equation:

```
Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)
```

**Your job**: For each persona, maximize the numerator and minimize the denominator.

### Value Equation Components

| Component | Question to Answer | High Value = |
|-----------|-------------------|--------------|
| Dream Outcome | What does success look like for this buyer? | Specific, vivid, emotionally resonant |
| Perceived Likelihood | Do they believe this product/service will actually work? | Social proof, guarantees, case studies |
| Time Delay | How long until they see results? | Fast wins, quick onboarding, immediate value |
| Effort & Sacrifice | What do they have to give up or do? | Done-for-you, minimal friction, no learning curve |

## Workflow

### Step 1: Extract Raw Persona Signals
From the meeting transcription and available data, extract:
- Direct quotes about customers ("our typical client is...")
- Customer segments mentioned
- Pain points and frustrations described
- Success stories and outcomes mentioned
- Objections the client hears from prospects
- Decision-making process described
- Budget/pricing sensitivity signals

### Step 2: Web Research Enhancement
For each persona signal, research:
- **Industry forums/Reddit**: What do these buyers actually complain about?
- **Review sites**: What do they say about competitors?
- **LinkedIn**: Job titles, company sizes, industries
- **Google PAA**: What questions do they ask before buying?

Use `~~CRM` data if connected for real customer demographics.

### Step 3: Build Persona Cards
For each persona (typically 2-3 per client), create a card using the template at `templates/persona-card.md`.

**Required sections per persona**:

#### Identity
- Name (fictional but realistic)
- Job title / Role
- Company size / Industry
- Age range / Demographics
- Annual revenue or budget range

#### Value Equation Mapping
For each component, provide:

**Dream Outcome** (rate importance 1-10):
- Primary desired outcome (the big win)
- Secondary outcomes (nice-to-haves)
- Emotional outcome (how they want to feel)
- Status outcome (how they want to be perceived)

**Perceived Likelihood** (rate current belief 1-10):
- Past experiences (burned before?)
- Trust signals they need (testimonials, case studies, guarantees)
- Proof format preference (data, stories, demos)
- Risk tolerance level

**Time Delay** (rate tolerance 1-10):
- Expected timeline to results
- Acceptable waiting period
- Quick wins they need to see
- Patience killers (what makes them abandon)

**Effort & Sacrifice** (rate tolerance 1-10):
- Technical skills required
- Time commitment expected
- What they have to give up
- Learning curve tolerance
- Switching costs from current solution

#### Psychographics
- Top 3 fears about this purchase
- Top 3 desires driving the purchase
- Information sources they trust
- Decision-making style (analytical, emotional, consensus)
- Buying triggers (what event makes them start looking)

#### Buyer Journey
| Stage | Behavior | Content Need | Objection | Counter |
|-------|----------|-------------|-----------|---------|
| Awareness | | | | |
| Consideration | | | | |
| Decision | | | | |
| Post-Purchase | | | | |

#### Messaging Framework
- **One-liner**: The single sentence that makes them say "that's exactly what I need"
- **Headline formula**: [Dream Outcome] without [Effort/Sacrifice] in [Time Frame]
- **Objection killers**: Top 3 objections with ready responses
- **Social proof type**: What proof format works best for this persona
- **CTA language**: What action word resonates (get, start, discover, claim, etc.)

### Step 4: Validate Against Data
- Cross-reference personas against competitor targeting
- Check keyword intent data (from Step 4 if available)
- Verify assumptions with real search behavior
- Flag any persona assumptions that need client validation

### Step 5: Update Discovery Context
Append to `discovery-context.md`:
- Persona names and one-line descriptions
- Primary Dream Outcomes per persona
- Top 3 objections per persona
- Key messaging angles
- Recommended proof/trust signals

## Output
Write completed personas to `04-Buyer-Personas.md` using the template.

### Generate Branded .docx
After writing the markdown report:
- Read @${CLAUDE_PLUGIN_ROOT}/skills/docx-export/SKILL.md
- Convert `04-Buyer-Personas.md` to `04-Buyer-Personas.docx` using the FWS branded template
- Use color-coded APEX scores in Value Equation tables (green 7+, orange 4-6, red <4)
- Validate the .docx file

## Quality Checklist
- [ ] Each persona has all 4 Value Equation components rated and detailed
- [ ] Messaging framework is specific enough to write ad copy from
- [ ] Objections are real (sourced from research, not assumptions)
- [ ] Buyer journey maps to specific content types
- [ ] Personas are distinct (not just demographic variations)
- [ ] Discovery context updated with persona findings

## Anti-Patterns
- **Don't**: Create personas based only on demographics (age, location)
- **Don't**: Make more than 3 personas (focus beats breadth)
- **Don't**: Use generic pain points ("wants to save time")
- **Don't**: Skip the objection research (this is where the gold is)
- **Don't**: Write messaging that sounds like every other competitor

## Reference
- See `references/apex-value-equation.md` for detailed scoring guide
- See `references/persona-interview-questions.md` for client interview framework
