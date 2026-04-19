# FWS Client Discovery Plugin

Discovery & Research workflow for Flying Web Solutions client projects.

## What It Does

Takes a client website URL (optional) + meeting transcription and produces a complete discovery package with 8 deliverables covering sitemap analysis, competitor research, buyer personas, keywords, UX/UI design system, FAQs, and a 90-day content plan.

## Commands

| Command | Description |
|---------|-------------|
| `/discovery` | Run the complete 7-step workflow |
| `/sitemap` | Sitemap & page analysis |
| `/competitors` | Competitor research + battlecards |
| `/personas` | Buyer persona research (APEX methodology) |
| `/keywords` | Keyword research with intent classification |
| `/ux-research` | UX/UI research + design system (`--quick` for compatibility check only) |
| `/faqs` | FAQ research (PAA + JSON-LD schema) |
| `/content-plan` | Content plan + 90-day calendar |

## Skills

| Skill | Source | Purpose |
|-------|--------|---------|
| sitemap-analysis | Adapted from seo-geo-claude-skills | Crawl and analyze site structure |
| competitor-research | Adapted from seo-geo-claude-skills | Competitive intelligence + battlecards |
| buyer-persona-research | FWS Custom (APEX) | ICP profiling using Hormozi value equation |
| keyword-research | Adapted from seo-geo-claude-skills | Keyword discovery, intent, topic clusters |
| ux-ui-research | Adapted from UI/UX Pro Max | Design system generation (100 industry rules) |
| faq-research | Combined from seo-geo-claude-skills | PAA extraction + FAQ schema markup |
| content-planning | Combined from seo-geo-claude-skills | Content gap analysis + ICE-scored calendar |

## How Context Passing Works

Each step reads from and appends to a running `discovery-context.md` file. This ensures later steps (like FAQ research) automatically use findings from earlier steps (like keywords and personas).

## Output Structure

```
[Client-Name]/01-Discovery/
├── 00-Discovery-Report.md
├── 01-Client-Brief.md
├── 02-Sitemap-Report.md
├── 03-Competitor-Report.md
├── 04-Buyer-Personas.md
├── 05-Keyword-Research.md
├── 06-UX-UI-Research.md
├── 07-FAQ-Research.md
├── 08-Content-Plan.md
└── discovery-context.md (internal context file)
```

## Optional Integrations

See CONNECTORS.md. The plugin works standalone but benefits from:
- SEO tools (Ahrefs, SEMrush) for quantitative keyword data
- Analytics (Google Analytics, PostHog) for traffic data
- CRM (HubSpot, Twenty CRM) for customer data

## Credits

- SEO/GEO methodology: [seo-geo-claude-skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills) by Aaron He Zhu (Apache-2.0)
- UX/UI intelligence: [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) by nextlevelbuilder (MIT)
- Workflow & personas: Flying Web Solutions (Proprietary)

## Version

v0.1.0, Discovery & Research phase only. Future phases (IA, Design, Development, Content, QA, Growth) planned as separate modules.
