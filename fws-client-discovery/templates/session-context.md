# FWS Client Discovery Plugin, Active

You have the FWS Client Discovery plugin loaded. Available commands:

## Full Workflow
- `/discovery`, Run the complete 7-step Discovery & Research workflow

## Individual Steps (run independently or re-run specific steps)
- `/sitemap`, Sitemap & page analysis (requires client website URL)
- `/competitors`, Competitor research
- `/personas`, Buyer persona research (APEX/Hormozi methodology)
- `/keywords`, Keyword research with intent classification
- `/ux-research`, UX/UI research + design system (add `--quick` for compatibility check only)
- `/faqs`, FAQ research (PAA + schema markup)
- `/content-plan`, Content plan + 90-day calendar

## Workflow Rules
1. Every step READS the discovery context file before executing
2. Every step APPENDS its findings to the context file after completing
3. The context file lives at: `[output-folder]/discovery-context.md`
4. All outputs go to: `[output-folder]/[Client-Name]/01-Discovery/`
5. Meeting transcription can be pasted as text OR uploaded as a file
6. Claude extracts structure from any transcription format (Otter.ai, Zoom, Google Meet, manual notes)

## APEX Value Equation (for Persona & Strategy work)
Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)
Always evaluate client offerings through this lens.
