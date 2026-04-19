---
description: "Write all website pages with SEO content: provide the client name, or filter with --pages=homepage,about"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-name> [--pages=homepage,about,services]
---

**Page Copywriter**, generate production-ready website pages as markdown.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/SKILL.md and follow it end-to-end. SKILL loads its references (`page-type-schemas.md`, `seo-metadata-guide.md`, `content-formatting-guide.md`) progressively.
- Reference @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md (linked from SKILL, do not duplicate).
- Read FULL `discovery-context.md`, REQUIRED inputs: Steps 0-6 plus content plan.
- Input: `$1` = client name. `--pages=` filters; default = all core pages (no blog).

**Preflight gate**: if any of Steps 0-6 or the content plan are missing, warn the user and list what to run first, then stop.

**Execution phases** (full detail in SKILL.md):
1. Build page queue from sitemap (core → pillar → child → supporting, NO blog).
2. Generate output folders under `[client-folder]/01-Discovery/pages/`.
3. Generate each page: metadata, answer-first body, FAQ section, CTA. Apply Task 5 upgrades: `updated` date, `dateModified` in JSON-LD, `fact_sources` block, entity schema, author box.
4. Run internal-link pass across all pages (3+ internal links each).
5. Emit quality report (words, keyword, internal links, FAQs).

**Rules**: no blog posts, no placeholders, no em dashes, relative markdown links only.
