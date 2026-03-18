# stack-agents

Tech stack subagents that auto-trigger when you work with **TanStack Start**, **Next.js**, **Expo**, **Convex**, **Supabase**, or **Clerk**. Each agent enforces opinionated best practices, fetches current docs via Context7 MCP, and — for frontend stacks — applies psychology-driven UX principles.

---

## How It Works

### Three-Layer Auto-Trigger System

stack-agents uses Claude Code's built-in agent orchestration to automatically delegate work to the right specialist:

```
Layer 1: Plugin Loading
  SKILL.md frontmatter contains broad keywords (tanstack, nextjs, expo, convex, supabase, clerk...)
  → When any keyword matches your message, the plugin loads into context

Layer 2: Agent Matching
  Each agent's `description` field contains specific trigger phrases
  → Claude reads all descriptions and picks the best-matching agent

Layer 3: Auto-Delegation
  Agents are marked "Use proactively"
  → Claude spawns the agent automatically without you asking
```

**In practice**: you just ask "add a new route" in a TanStack Start project, and the `tanstack-start` agent handles it — fetching docs, enforcing patterns, applying psychology skills.

### Multi-Stack Tasks

When your request spans multiple stacks, Claude spawns multiple agents. For example:

- "Set up Clerk auth with Convex" → spawns both `clerk` and `convex` agents
- "Add a pricing page" in a Next.js + Stripe project → spawns `nextjs` agent, which discovers and installs the `stripe-integration` skill at runtime

### What Each Agent Does

Every agent follows the same lifecycle:

1. **Pre-Flight Check** — reads `package.json`, detects co-present stacks, checks config files
2. **Context7 Lookup** — uses hardcoded library IDs for instant doc fetches (no resolve step)
3. **Pattern Enforcement** — applies the blessed patterns for its stack, flags anti-patterns
4. **Cross-Stack Awareness** — adjusts advice when it detects other stacks (e.g., Clerk agent knows about Convex JWT templates)
5. **Skill Discovery** — if it encounters a library without a preloaded skill, runs `npx skills find <keyword>` to search for one

---

## Agents

| Agent | Stack | Preloaded Skills | Type |
|-------|-------|-----------------|------|
| `tanstack-start` | TanStack Start + Router + Query + Form + Table | shadcn-ui, tailwind-v4, frontend-design, 5 psychology skills | Frontend |
| `nextjs` | Next.js 16 App Router | shadcn-ui, tailwind-v4, next-best-practices, frontend-design, 5 psychology skills | Frontend |
| `expo` | Expo + React Native + NativeWind v5 | expo-tailwind-setup, building-native-ui, frontend-design, 5 psychology skills | Frontend |
| `convex` | Convex backend | convex, convex-best-practices, convex-functions, convex-schema-validator | Backend |
| `supabase` | Supabase platform | supabase-postgres-best-practices | Backend |
| `clerk` | Clerk authentication | clerk | Backend |

**Frontend agents** get psychology-driven UX skills (cognitive-load, hicks-law, progressive-disclosure, visual-cues-cta, trust-psychology) and the `frontend-design` skill for premium UI quality.

**Backend agents** focus purely on correctness, type safety, and security patterns.

**All agents** get the shared `context7-lookup` skill for doc fetching.

---

## Installation

### 1. Register the FWS marketplace (one-time)

```bash
claude plugin marketplace add flyingwebie/skills
```

Verify it was registered:

```bash
claude plugin marketplace list
```

### 2. Install the plugin

```bash
claude plugin install stack-agents
```

### From a local directory

```bash
claude --plugin-dir /path/to/skills/stack-agents
```

### For a single project

```bash
claude plugin install stack-agents --scope project
```

---

## Add to Your Project's CLAUDE.md

For best results, add the following to your project's `CLAUDE.md` so Claude always knows the agents are available:

```markdown
## Tech Stack Agents

This project uses the `stack-agents` plugin which provides auto-triggering subagents
for our tech stack. When working with any of the following technologies, the matching
agent will be spawned automatically:

- **TanStack Start** → `stack-agents:tanstack-start` (includes shadcn/ui, Tailwind v4, psychology UX)
- **Next.js** → `stack-agents:nextjs` (includes shadcn/ui, Tailwind v4, psychology UX)
- **Expo** → `stack-agents:expo` (includes NativeWind v5, psychology UX)
- **Convex** → `stack-agents:convex` (schema, functions, indexing, auth)
- **Supabase** → `stack-agents:supabase` (RLS, migrations, Edge Functions)
- **Clerk** → `stack-agents:clerk` (middleware, webhooks, JWT templates)

Agents fetch current docs via Context7 MCP and enforce opinionated best practices.
When an agent encounters a library not covered by its preloaded skills, it will search
for and install skills at runtime via `npx skills find` / `npx skills add`.
```

Adjust the list to include only the stacks your project actually uses.

---

## Context7 Integration

Each agent has hardcoded Context7 library IDs for its stack, enabling instant doc lookups without a resolve step:

```
# Instead of:
mcp__MCP_DOCKER__resolve-library-id  →  "tanstack start"  →  returns ID  →  get-library-docs

# Agents do:
mcp__MCP_DOCKER__get-library-docs  →  libraryId: "/websites/tanstack_start", topic: "createServerFn"
```

This saves one round-trip per lookup. The shared `context7-lookup` skill documents when to fetch vs. when to use built-in knowledge.

---

## Dynamic Skill Discovery

Agents aren't limited to their preloaded skills. When they encounter an unfamiliar library or pattern:

```bash
npx skills find stripe          # Search for available skills
npx skills add stripe-integration  # Install for use in this project
```

This means agents grow with your project — the first time you add Stripe, the agent discovers and loads the `stripe-integration` skill. Next time, it's already there.

---

## Architecture

```
stack-agents/
├── .claude-plugin/
│   └── plugin.json                    # Plugin manifest
├── SKILL.md                           # Plugin index + trigger keywords
├── CLAUDE.md                          # Philosophy + design decisions
├── README.md                          # This file
├── skills/
│   └── context7-lookup/
│       └── SKILL.md                   # Shared Context7 instructions
└── agents/
    ├── tanstack-start.md              # TanStack Start specialist
    ├── nextjs.md                      # Next.js specialist
    ├── expo.md                        # Expo specialist
    ├── convex.md                      # Convex specialist
    ├── supabase.md                    # Supabase specialist
    └── clerk.md                       # Clerk specialist
```

### Agent Frontmatter

Each agent uses Claude Code's agent markdown format:

```yaml
---
description: >
  What the agent does and when to trigger it. The "Use proactively" phrase
  tells Claude to auto-delegate without the user explicitly requesting it.
tools: Read, Grep, Glob, Bash, Write, Edit, mcp__MCP_DOCKER__get-library-docs, mcp__MCP_DOCKER__resolve-library-id
model: sonnet           # Fast for doc lookups and code generation
memory: project         # Learns project-specific patterns over time
skills:
  - context7-lookup     # Shared across all agents
  - shadcn-ui           # Frontend agents only
  - cognitive-load      # Frontend agents only
  # ...
---
```

- **`model: sonnet`** — optimized for speed; doc lookups and code gen don't need Opus
- **`memory: project`** — agents accumulate codebase knowledge across sessions
- **`tools`** — MCP tools are referenced by full name since plugin agents can't declare `mcpServers`

---

## Adding a New Agent

To add support for a new tech stack:

1. **Create `agents/your-stack.md`** — follow the existing agent structure:
   - Frontmatter with `description`, `tools`, `model`, `memory`, `skills`
   - Sections: Role, Pre-Flight Check, Context7 Library IDs, Key Patterns, Anti-Patterns, Cross-Stack Notes, Skill Discovery

2. **Find Context7 library IDs** — use `mcp__MCP_DOCKER__resolve-library-id` to look up IDs for the stack's libraries, then hardcode them in the agent

3. **Choose preloaded skills** — frontend agents should include psychology skills and `frontend-design`; backend agents should focus on correctness skills

4. **Update `SKILL.md`** — add the new agent to the agents table with trigger keywords

5. **Update `CLAUDE.md`** — add the new agent to the agents table

6. **Update `marketplace.json`** — bump the plugin version

---

## Design Decisions

| Decision | Rationale |
|----------|-----------|
| 6 agents, not 7 | shadcn/ui is a preloaded skill in TanStack & Next.js, not a standalone agent |
| `model: sonnet` | Fast enough for doc lookups and code gen; Opus overkill for agent tasks |
| `memory: project` | Agents learn project patterns — cold on first use, warmer over time |
| 5 psychology skills | cognitive-load, hicks-law, progressive-disclosure, visual-cues-cta, trust — the most UI-relevant subset of 14 available |
| Hardcoded Context7 IDs | Saves one resolve round-trip per doc lookup |
| Tailwind v4 for web | CSS-first config with `@theme` — agents enforce this over v3 patterns |
| NativeWind v5 for Expo | Tailwind on native — agents enforce this over `StyleSheet.create` |
