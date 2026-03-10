---
description: "Write blog posts from the content plan: provide client name, filter by --month=1, --topic=cluster, or --count=5"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Grep, Glob, Bash(ls:*,cat:*,mkdir:*)
argument-hint: <client-name> [--month=1|2|3] [--topic=cluster-name] [--count=5]
---

You are running the **Blog Copywriter** — generating production-ready blog post content as markdown files.

## Setup
1. Read the skill instructions: @${CLAUDE_PLUGIN_ROOT}/skills/blog-copywriter/SKILL.md
2. Read the page copywriter references (shared formatting standards):
   - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/seo-metadata-guide.md
   - @${CLAUDE_PLUGIN_ROOT}/skills/page-copywriter/references/content-formatting-guide.md
3. Read the CORE-EEAT benchmark: @${CLAUDE_PLUGIN_ROOT}/references/core-eeat-benchmark.md
4. **CRITICAL**: Read the FULL `discovery-context.md` — blog posts must align with personas, keywords, and topic clusters.
5. Read `08-Content-Plan.md` — this defines which blog posts to write and their priority.

## Input
- Client name: `$1` (for folder naming)
- Optional filters:
  - `--month=1|2|3` — generate blog posts scheduled for a specific month only
  - `--topic=[cluster-name]` — generate blog posts for a specific topic cluster only
  - `--count=N` — limit to N posts (default: all posts matching filter)
  - If no filter specified, generate ALL blog posts from the content plan

## Execution

### Phase 1: Build Blog Queue
1. Read the content plan (08-Content-Plan.md)
2. Extract all blog posts from the 90-day calendar
3. Apply filters (`--month`, `--topic`, `--count`)
4. Order by ICE priority score (highest first)
5. Tell the user: "Generating [X] blog posts for [filter context]"

### Phase 2: Create Output Structure
```
mkdir -p [client-folder]/01-Discovery/pages/blog
```

### Phase 3: Generate Blog Posts
For each post in the queue:
1. Identify target keyword, persona, buyer journey stage, and parent pillar page
2. Determine blog post type (how-to, listicle, comparison, insight, case study, FAQ deep-dive, local)
3. Write SEO metadata block (including author, publish date, category, parent pillar)
4. Write full post content:
   - Opening hook (first 100 words)
   - Body sections with H2 every 300-400 words
   - Data points and specific examples
   - Internal links to pillar page + related posts + service pages
   - Key takeaways section (3-5 bullet points)
   - FAQ section (2-4 questions from FAQ research)
   - CTA linking to parent pillar and contact page
5. Save as markdown to `pages/blog/[url-slug].md`
6. Report: "✓ [slug].md — [word count] words, [keyword], links to [pillar]"

### Phase 4: Cross-Linking
After ALL posts are generated:
1. Add "Related Posts" suggestions at the bottom of each post
2. Verify every post links to its parent pillar page
3. Verify every post links to at least one service page
4. Note any pillar pages that should be updated to link to these new posts

### Phase 5: Summary Report
| Post | Type | Words | Keyword | Month | Pillar Link | ICE |
|------|------|-------|---------|-------|-------------|-----|
| | | | | | | |

Total: [X] posts, [Y] total words, covering [Z] topic clusters.

## Output
- All blog post files saved to `[client-folder]/01-Discovery/pages/blog/`
- Summary report with post inventory
- List of pillar pages that need updating with links to new blog posts

## Key Differences from /copywrite
- Blog posts include: author, publish date, reading time, category
- Blog posts have: Key Takeaways section, Related Posts section
- Blog posts link TO pillar pages (not the reverse — pillar pages link to blog posts)
- Blog posts use Article schema (not Service or WebPage)
- Blog posts follow the 90-day content calendar priority
