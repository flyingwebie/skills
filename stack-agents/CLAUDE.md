# stack-agents Plugin

## What This Plugin Does

stack-agents provides 6 opinionated subagents that auto-trigger when you work with specific tech stacks. Each agent enforces best practices, fetches current docs via Context7 MCP, and (for frontend agents) applies psychology-driven UI/UX principles.

## Agents

| Agent | Stack | Type |
|-------|-------|------|
| `tanstack-start` | TanStack Start + Router + Query + shadcn/ui + Tailwind v4 | Frontend |
| `nextjs` | Next.js 15 App Router + shadcn/ui + Tailwind v4 | Frontend |
| `expo` | Expo + React Native + NativeWind v5 | Frontend |
| `convex` | Convex backend (queries, mutations, actions, schema) | Backend |
| `supabase` | Supabase platform (Postgres, RLS, Auth, Edge Functions) | Backend |
| `clerk` | Clerk authentication (multi-framework) | Backend |

## Design Philosophy

1. **Opinionated over neutral.** Each agent enforces the blessed path for its stack. There is one right way to do things — the agent knows it and applies it. No "you could also..." hedging.

2. **Docs on demand.** Context7 is used for verification and lookup, not doc dumps. Agents use built-in knowledge for concepts and fetch docs only when precision matters (exact APIs, config syntax, recent changes).

3. **Project memory.** Agents build up codebase-specific knowledge over time. They remember project patterns, custom conventions, and architectural decisions from previous interactions.

4. **Cross-stack awareness.** Agents detect other stacks in `package.json` and adjust advice accordingly. A Clerk agent in a Convex project knows about JWT templates. A TanStack agent in a Clerk project knows about `createClerkHandler`.

5. **Psychology-informed UI.** Frontend agents (TanStack, Next.js, Expo) apply cognitive psychology to improve UX — managing cognitive load, reducing choices via Hick's Law, revealing complexity progressively, directing attention to CTAs, and building trust signals.

6. **Design quality.** Frontend agents use the `frontend-design` skill to avoid generic AI aesthetics. Generated UI should be distinctive and production-grade.

7. **Dynamic skill discovery.** Agents can find and install missing skills at runtime (see below).

## Skill Discovery & Installation

When an agent encounters a library, pattern, or framework not covered by its preloaded skills:

1. **Search:** `npx skills find <keyword>` — discover available skills by name/keyword
2. **Install:** `npx skills add <skillName>` — add a skill for use in the current project

Agents should try this before falling back to generic knowledge — a dedicated skill may already exist.

## Plugin Architecture

```
stack-agents/
├── .claude-plugin/
│   └── plugin.json            # Plugin manifest
├── SKILL.md                   # Plugin index + auto-trigger keywords
├── CLAUDE.md                  # This file — philosophy + rules
├── skills/
│   └── context7-lookup/
│       └── SKILL.md           # Shared Context7 MCP instructions
└── agents/
    ├── tanstack-start.md      # TanStack Start agent
    ├── nextjs.md              # Next.js 15 agent
    ├── expo.md                # Expo agent
    ├── convex.md              # Convex agent
    ├── supabase.md            # Supabase agent
    └── clerk.md               # Clerk agent
```

## Key Design Decisions

- **6 agents, not 7** — shadcn/ui is a preloaded skill inside TanStack & Next.js agents, not a standalone agent
- **`model: sonnet`** — fast enough for doc lookups and code generation
- **`memory: project`** — agents learn project-specific patterns over time
- **5 psychology skills for frontend agents** — cognitive-load, hicks-law, progressive-disclosure, visual-cues-cta, trust-psychology
- **`frontend-design` skill** — ensures generated UI avoids generic AI aesthetics
- **Hardcoded Context7 library IDs** — skip resolve step for faster lookups
- **Tailwind CSS v4** for web (CSS-first config), **NativeWind v5** for Expo (Tailwind on native)
