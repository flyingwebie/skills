# Pencil.dev Prompt Framework

## Overview
Every page file includes a Pencil.dev prompt at the top as an HTML comment block. This prompt instructs Pencil to generate the UI for that specific page, using the design system from UX/UI research and the content from the markdown below it.

## Prompt Structure

```html
<!-- PENCIL.DEV PROMPT
===========================================

PAGE: [Page name]
TYPE: [homepage | service-pillar | service-child | about | contact | faq | case-study | testimonials | team | process | location | comparison]
STYLE: [UI style from UX research, e.g., "Corporate Modern", "Minimalism"]
MOOD: [1-3 words describing the feel, e.g., "professional and trustworthy"]

DESIGN SYSTEM:
- Primary: [hex]
- Secondary: [hex]
- CTA: [hex]
- Background: [hex]
- Text: [hex]
- Heading Font: [font name]
- Body Font: [font name]
- Border Radius: [value]
- Shadow Style: [description]

LAYOUT SECTIONS (top to bottom):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[SECTION 1: Name]
→ Layout: [full-width | two-column | three-column | centered | sidebar]
→ Background: [color/gradient/image description]
→ Elements: [list of UI elements in this section]
→ Notes: [specific design instructions]

[SECTION 2: Name]
→ Layout: [...]
→ Background: [...]
→ Elements: [...]
→ Notes: [...]

[Continue for all sections...]

IMAGERY DIRECTION:
- Photo style: [professional headshots | lifestyle | abstract | illustrations | icons]
- Image mood: [warm | clean | bold | minimal | industrial]
- Avoid: [stock photo cliches to avoid]

RESPONSIVE NOTES:
- Mobile: [specific mobile layout notes]
- Tablet: [specific tablet layout notes]

ACCESSIBILITY:
- Color contrast: WCAG AA minimum
- Touch targets: 44px minimum
- Focus states: visible on all interactive elements

Generate a modern, [style] website page using the content below.
The markdown content below this prompt contains all the copy — use it exactly as written.
=========================================== -->
```

## Section Templates by Page Type

### Homepage Sections

```
[SECTION 1: Hero]
→ Layout: full-width, centered content
→ Background: gradient or high-quality image with overlay
→ Elements: H1 headline, subtitle paragraph, primary CTA button, secondary CTA link, trust badge row (logos or certifications)
→ Notes: CTA button uses [CTA color]. Hero text must be readable over background. Max 60% text width on desktop.

[SECTION 2: Value Proposition / Problem-Solution]
→ Layout: two-column (text left, image/illustration right) OR three-column icon cards
→ Background: white or light background
→ Elements: H2 heading, 3-4 benefit cards with icons, brief descriptions
→ Notes: Each card: icon + H3 title + 1-2 sentence description. Cards should have subtle hover effect.

[SECTION 3: Services Overview]
→ Layout: three-column cards or bento grid
→ Background: light gray or subtle pattern
→ Elements: H2 heading, service cards with image/icon, title, brief description, "Learn More" link
→ Notes: Each card links to individual service page. Consistent card height.

[SECTION 4: Social Proof]
→ Layout: full-width, centered
→ Background: primary color (dark) or contrasting section
→ Elements: H2 heading, key metrics (years, clients, projects), testimonial carousel or featured quote
→ Notes: Metrics displayed as large numbers with labels. Testimonial includes photo, name, company.

[SECTION 5: Process / How We Work]
→ Layout: horizontal timeline or numbered steps
→ Background: white
→ Elements: H2 heading, 3-5 step cards with number, title, description
→ Notes: Visual connection between steps (line, arrows, or progress indicator).

[SECTION 6: Case Studies / Portfolio Preview]
→ Layout: two-column or masonry grid
→ Background: light background
→ Elements: H2 heading, 2-3 featured case study cards with image, title, result metric, "Read More" link
→ Notes: Cards should show before/after or key result prominently.

[SECTION 7: FAQ Preview]
→ Layout: centered, single column
→ Background: light gray
→ Elements: H2 heading, 4-5 FAQ accordions, "View All FAQs" link
→ Notes: Accordion style — question visible, answer expands on click.

[SECTION 8: Final CTA]
→ Layout: full-width, centered
→ Background: primary or CTA color, bold
→ Elements: H2 heading, supporting text, primary CTA button, trust reinforcement (guarantee, no-obligation text)
→ Notes: This is the conversion section. Button must be prominent. Include urgency or scarcity if appropriate.

[SECTION 9: Footer]
→ Layout: multi-column footer
→ Background: dark (primary dark or near-black)
→ Elements: logo, nav links, contact info, social icons, legal links, copyright
→ Notes: 3-4 columns. Contact info includes address, phone, email.
```

### Service Pillar Page Sections

```
[SECTION 1: Hero]
→ Layout: full-width with background
→ Elements: H1 with primary keyword, subtitle addressing persona pain, primary CTA, breadcrumb

[SECTION 2: Problem Statement]
→ Layout: centered text or two-column
→ Elements: H2, pain point description addressing persona's current situation, empathy-driven copy

[SECTION 3: Solution Overview]
→ Layout: two-column (content + image/video)
→ Elements: H2, what we offer paragraph, key benefits list (3-5 bullets with bold lead)

[SECTION 4: Service Details / Features]
→ Layout: alternating two-column (text-image, image-text)
→ Elements: H2 per feature/sub-service, description, benefit statement, link to child page

[SECTION 5: Process / How It Works]
→ Layout: numbered steps or timeline
→ Elements: H2, 3-5 steps with title + description

[SECTION 6: Results / Social Proof]
→ Layout: metrics bar + testimonial
→ Elements: H2, key results (numbers), testimonial quote, case study link

[SECTION 7: Pricing / Packages] (if applicable)
→ Layout: three-column pricing cards
→ Elements: H2, tier cards with name, price, features list, CTA per tier

[SECTION 8: FAQ]
→ Layout: accordion
→ Elements: H2, 3-5 service-specific FAQs

[SECTION 9: CTA]
→ Layout: full-width banner
→ Elements: H2, CTA button, trust signal
```

### Service Child Page Sections

```
[SECTION 1: Hero]
→ Layout: contained with breadcrumb
→ Elements: H1, subtitle, CTA, breadcrumb (Home > [Parent Service] > [This Page])

[SECTION 2: Overview]
→ Layout: two-column
→ Elements: H2, what this specific service involves, who it's for

[SECTION 3: Detailed Content]
→ Layout: single column with H2/H3 hierarchy
→ Elements: Deep-dive content with lists, tables, data points

[SECTION 4: Benefits]
→ Layout: icon grid or list
→ Elements: H2, 4-6 benefits with icons and descriptions

[SECTION 5: Case Study / Example]
→ Layout: two-column or card
→ Elements: H2, specific example or mini case study with results

[SECTION 6: FAQ]
→ Layout: accordion
→ Elements: 3-5 topic-specific FAQs

[SECTION 7: Related Services]
→ Layout: three-column cards
→ Elements: H2, links to sibling service pages

[SECTION 8: CTA]
→ Layout: banner
→ Elements: CTA aligned to buyer journey stage
```

### About Page Sections

```
[SECTION 1: Hero]
→ Layout: full-width image or split (team photo + text)
→ Elements: H1 ("About [Company]" or story-driven headline), origin story intro

[SECTION 2: Our Story]
→ Layout: single column narrative
→ Elements: H2, founding story, mission, what drives us

[SECTION 3: Mission / Values]
→ Layout: icon cards or grid
→ Elements: H2, 3-5 core values with icons and descriptions

[SECTION 4: Team]
→ Layout: grid of team member cards
→ Elements: H2, photo, name, title, brief bio, optional social links

[SECTION 5: Credentials / Awards]
→ Layout: logo row or grid
→ Elements: H2, certification badges, award logos, membership badges

[SECTION 6: CTA]
→ Layout: warm, inviting banner
→ Elements: "Let's work together" CTA, contact link
```

### Contact Page Sections

```
[SECTION 1: Hero]
→ Layout: split (form left, info right) or centered
→ Elements: H1, brief intro paragraph, set expectations for response time

[SECTION 2: Contact Form]
→ Layout: prominent form
→ Elements: Name, email, phone, message, service interest dropdown, submit button
→ Notes: Max 5-6 fields. Submit button uses CTA color. Include privacy note.

[SECTION 3: Contact Details]
→ Layout: beside form or below
→ Elements: Address, phone, email, hours of operation, Google Maps embed

[SECTION 4: Social Proof]
→ Layout: minimal
→ Elements: Brief trust signal — "Trusted by X+ clients" or a short testimonial
```

### FAQ Page Sections

```
[SECTION 1: Hero]
→ Layout: centered, clean
→ Elements: H1, brief intro, optional search/filter

[SECTION 2-N: FAQ Groups]
→ Layout: grouped accordions
→ Elements: H2 per topic group, accordion Q&As under each group
→ Notes: Groups from FAQ research (Service, Pricing, Process, etc.)

[SECTION FINAL: CTA]
→ Layout: banner
→ Elements: "Still have questions? Contact us" with CTA
```

## Prompt Variables Reference

These variables should be populated from the discovery context:

| Variable | Source | Example |
|----------|--------|---------|
| `[UI style]` | Step 5 UX/UI | "Corporate Modern" |
| `[Primary hex]` | Step 5 UX/UI | "#1B365D" |
| `[Secondary hex]` | Step 5 UX/UI | "#4A7C9B" |
| `[CTA hex]` | Step 5 UX/UI | "#D4A853" |
| `[Background hex]` | Step 5 UX/UI | "#F8F9FA" |
| `[Text hex]` | Step 5 UX/UI | "#2D3436" |
| `[Heading font]` | Step 5 UX/UI | "Playfair Display" |
| `[Body font]` | Step 5 UX/UI | "Source Sans 3" |
| `[Brand mood]` | Steps 0 + 5 | "professional and trustworthy" |
| `[Photo style]` | Step 5 + industry | "professional headshots, clean office environments" |
| `[Persona name]` | Step 3 | "Decision-Maker Dan" |

## Key Rules
1. Every prompt references the exact hex values and fonts from UX research — no generic instructions
2. Section order matches the content order in the markdown below the prompt
3. Each section includes specific layout direction (not just "make it look good")
4. Image/photo direction is specific to the industry and brand
5. Responsive notes are included for mobile behavior
6. Accessibility requirements are stated explicitly
