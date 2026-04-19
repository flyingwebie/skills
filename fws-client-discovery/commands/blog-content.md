---
description: "Write blog posts from the content plan: provide client name, filter by --month=1, --topic=cluster, or --count=5"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-name> [--month=1|2|3] [--topic=cluster-name] [--count=5]
---

**Blog Copywriter**, generate blog posts as markdown.

- Read @${CLAUDE_PLUGIN_ROOT}/skills/blog-copywriter/SKILL.md and follow it end-to-end. SKILL loads the shared page-copywriter references on demand.
- Read FULL `discovery-context.md` AND `08-Content-Plan.md`. Blog queue comes from the 90-day calendar.
- Input: `$1` = client name. Filters: `--month=1|2|3`, `--topic=cluster`, `--count=N`.

**Execution phases** (full detail in SKILL.md):
1. Build blog queue from content plan, apply filters, sort by ICE.
2. Create `pages/blog/` folder.
3. Generate each post: Article schema with `author`, `datePublished`, `dateModified`, `fact_sources`, hook, H2 every 300-400 words, Key Takeaways, FAQ, CTA to pillar + contact.
4. Cross-link: each post → parent pillar + 1 service page + related posts.
5. Emit summary report.

**Differences from /copywrite**: Article schema, author block, dates, Key Takeaways, Related Posts, links TO pillars.
