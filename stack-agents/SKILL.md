---
name: stack-agents
description: >
  Tech stack subagents that auto-trigger for TanStack Start, Next.js, Expo, Convex,
  Supabase, and Clerk. Enforces best practices, fetches current docs via Context7,
  applies Tailwind v4, shadcn/ui, NativeWind v5, and psychology-driven UX for frontend
  stacks. Use when user mentions any of these technologies, their APIs, or related
  patterns: TanStack, tanstack, vinxi, createFileRoute, createServerFn, @tanstack/*,
  Next.js, nextjs, App Router, RSC, server components, server actions, next.config,
  Expo, React Native, EAS, NativeWind, expo-router, Convex, convex, schema.ts,
  mutations, queries, actions, Supabase, supabase, RLS, Edge Functions, supabase-js,
  Clerk, @clerk/*, ClerkProvider, useAuth, clerkMiddleware, shadcn, tailwind, tailwindcss.
---

# stack-agents

Tech stack subagents with Context7 docs, psychology-driven UX, and opinionated best practices.

## Agents

| Agent | Triggers | Description |
|-------|----------|-------------|
| `tanstack-start` | TanStack Start, Router, Query, Form, Table, vinxi, createFileRoute, createServerFn, @tanstack/*, file-based routing, server functions, search params, loaders | TanStack Start + shadcn/ui + Tailwind v4 specialist. Use proactively when user works with TanStack Start projects. |
| `nextjs` | Next.js, App Router, RSC, server components, server actions, middleware, next.config, route handlers, metadata API, Suspense, next/image, ISR, SSG, SSR | Next.js 15 App Router + shadcn/ui + Tailwind v4 specialist. Use proactively when user works with Next.js projects. |
| `expo` | Expo, React Native, mobile app, EAS Build, EAS Submit, Expo Router, NativeWind, expo-camera, expo-location, app.json, app.config.ts, iOS, Android, View, Text, FlatList, Pressable | Expo + React Native + NativeWind v5 specialist. Use proactively when user works with Expo/React Native projects. |
| `convex` | Convex, convex/ directory, schema.ts, mutations, queries, actions, internal functions, scheduled functions, crons, file storage, search indexes, vector search, Convex Auth, ConvexHttpClient, @convex-dev/* | Convex backend specialist. Use proactively when user works with Convex projects. |
| `supabase` | Supabase, PostgreSQL via Supabase, RLS, supabase-js, Supabase Auth, Storage, Edge Functions, Realtime, migrations, SQL policies, @supabase/ssr | Supabase platform specialist. Use proactively when user works with Supabase projects. |
| `clerk` | Clerk, @clerk/*, ClerkProvider, SignIn, SignUp, UserButton, useAuth, useUser, currentUser, auth(), clerkMiddleware, sign-in, sign-up, protected route, JWT template, session token | Clerk authentication specialist. Use proactively when user works with Clerk auth. |

## Skills

| Skill | Description |
|-------|-------------|
| `context7-lookup` | Shared Context7 MCP lookup instructions — library IDs, fetch rules, fallback behavior |

See `agents/` directory for full agent instruction files.
