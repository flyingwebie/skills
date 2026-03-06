---
name: prd-generator
description: >
  This skill should be used when the user asks to "create a PRD",
  "write product requirements", "build a product spec", "clone a product",
  "replicate a product", "generate a PRD for", "product requirements document",
  or needs to analyze an existing online product and produce a structured
  PRD markdown for building a clone of it.
version: 0.1.0
---

# PRD Builder — Product Requirements Document Generator

Generate a comprehensive PRD markdown by analyzing an existing online product and planning a clone/replica with a modern tech stack.

## Required Inputs

Collect these from the user before starting. If either is missing, ask for it:

1. **Product URL** — the live URL of the existing product to analyze
2. **New Product Name** — what the user wants to call their clone

## Confidence Rule

If at any point during the process confidence drops below 80% on any aspect (product features, architecture decisions, tech choices), stop immediately and ask the user targeted questions before continuing. Do not guess.

## Workflow

### Step 1: Product Analysis

Use WebFetch and/or browser tools to analyze the product at the given URL. Extract:

- **Product purpose** — what problem it solves, who it's for
- **Core features** — the primary functionality (list each feature)
- **User flows** — key user journeys (signup, main actions, settings)
- **UI patterns** — layout approach, navigation style, responsive behavior
- **Integrations** — any third-party services visible (payment, auth, analytics, APIs)
- **Content model** — what data entities exist (users, posts, projects, etc.)

Present findings to the user and confirm accuracy before moving on.

### Step 2: Tech Stack Recommendation

Based on the product analysis, recommend a modern tech stack. For each layer, suggest the latest proven technology and explain why:

- **Frontend framework** (e.g., Next.js 15, Nuxt 4, SvelteKit 2, Remix)
- **UI library / styling** (e.g., Tailwind CSS 4, shadcn/ui, Radix)
- **Backend / API** (e.g., Node.js + Hono, Go + Fiber, Python + FastAPI)
- **Database** (e.g., PostgreSQL + Drizzle ORM, Supabase, PlanetScale)
- **Authentication** (e.g., Clerk, Auth.js v5, Supabase Auth, Lucia)
- **File storage** (if needed — e.g., Uploadthing, Cloudflare R2, S3)
- **Real-time** (if needed — e.g., Socket.io, Ably, Supabase Realtime)
- **Payments** (if needed — e.g., Stripe, Lemon Squeezy)
- **Hosting / deployment** (e.g., Vercel, Coolify, Railway, Fly.io)
- **CI/CD** (e.g., GitHub Actions, GitLab CI)
- **Monitoring** (e.g., Sentry, Better Stack, Axiom)

Present the stack as a clear table and **wait for user approval**. The user may:

- Approve the stack as-is
- Swap out specific technologies
- Ask for alternatives

Do NOT proceed to PRD generation until the tech stack is explicitly approved.

### Step 3: Generate the PRD

Once the tech stack is approved, generate the full PRD using the template in `references/prd-template.md`. Read that file before generating.

Write the PRD as a markdown file to the outputs folder with the naming convention: `PRD-{product-name}.md` (kebab-case the product name).

### Step 4: Deliver

Present the PRD file link to the user. Offer to:

- Adjust any section
- Add more detail to specific features
- Export as a different format (docx, pdf)

## Key Principles

- **Analyze first, recommend second** — never suggest a tech stack without understanding the product
- **Modern but proven** — recommend latest stable versions of established tools, not bleeding-edge experiments
- **User decides** — the tech stack is always the user's call; provide rationale but respect their choices
- **Completeness** — the PRD should be ready to hand to a development team
- **Stop when unsure** — if below 80% confidence on anything, ask
