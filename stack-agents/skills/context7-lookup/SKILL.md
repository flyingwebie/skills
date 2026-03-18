---
name: context7-lookup
description: >
  Shared Context7 MCP lookup instructions for all stack agents. Provides library ID
  references, fetch-vs-knowledge decision rules, and fallback behavior when Context7
  is unavailable.
---

# Context7 Lookup

Shared skill preloaded into all stack agents. Use Context7 MCP tools to fetch current documentation for any library in the stack.

## When to Fetch vs Use Built-In Knowledge

**Fetch from Context7 when:**
- The user asks about a specific API, hook, or function you're not 100% certain about
- You need exact import paths, function signatures, or configuration syntax
- The library has had recent breaking changes (Next.js 15, Tailwind v4, NativeWind v5, TanStack Start)
- You're writing setup/config code that must be precise
- The user asks "what's the current way to do X?"

**Use built-in knowledge when:**
- Explaining high-level concepts or architecture decisions
- The pattern is stable and well-established (e.g., React hooks basics)
- You're describing trade-offs or design philosophy
- The user is asking "why" not "how"

## Primary Tool: `mcp__MCP_DOCKER__get-library-docs`

Use this tool directly with a hardcoded `libraryId` and a `topic` string. This skips the resolve step and is faster.

```
mcp__MCP_DOCKER__get-library-docs
  libraryId: "/websites/tanstack_start"
  topic: "createServerFn"
```

Each agent has its own list of hardcoded library IDs. Use the correct ID for the library you're looking up.

## Discovery Tool: `mcp__MCP_DOCKER__resolve-library-id`

Use this only when you need a library NOT in your hardcoded list:

```
mcp__MCP_DOCKER__resolve-library-id
  libraryName: "zod"
```

This returns a `libraryId` you can then pass to `get-library-docs`.

## Fallback When Context7 Is Unavailable

If Context7 tools fail or timeout:
1. State clearly: "Context7 is unavailable — using built-in knowledge (may not reflect latest API changes)"
2. Proceed with your training knowledge
3. Flag any areas where the API may have changed recently
4. Suggest the user verify critical details against official docs

## Skill Discovery & Installation

When you need knowledge about a library, pattern, or framework not covered by your preloaded skills:

1. **Search for skills:** Run `npx skills find <keyword>` to discover available skills
2. **Install a skill:** Run `npx skills add <skillName>` to add it to the project
3. Use this before falling back to generic knowledge — a skill may already exist

Examples:
- Need Stripe patterns? → `npx skills find stripe` → `npx skills add stripe-integration`
- Need Framer Motion? → `npx skills find framer` → `npx skills add framer-motion-animator`
- Need Zod validation? → `npx skills find zod` → `npx skills add zod`
