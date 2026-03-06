# Connectors

## How tool references work

Plugin files use `~~category` as a placeholder for whatever tool the user
connects in that category. The plugin works standalone without any integrations,
but connecting these tools enhances the research quality.

## Connectors for this plugin

| Category | Placeholder | Options | Used By |
|----------|-------------|---------|---------|
| SEO tool | `~~SEO tool` | Ahrefs, SEMrush, Moz, SimilarWeb | /keywords, /competitors, /sitemap |
| Analytics | `~~analytics` | Google Analytics, PostHog, Amplitude | /sitemap, /content-plan |
| CRM | `~~CRM` | HubSpot, Twenty CRM | /personas |
| Project tracker | `~~project tracker` | Plane, Linear, Asana | Future Phase 2 integration |

## Working Without Connectors

All skills produce high-quality output using web research and AI analysis alone.
Connected tools add quantitative data (exact search volumes, traffic numbers,
backlink counts) on top of the qualitative analysis.
