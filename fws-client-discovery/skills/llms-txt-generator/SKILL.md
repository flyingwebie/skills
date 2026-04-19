---
name: llms-txt-generator
description: >
  Generate llms.txt and llms-full.txt files for AI search engines and LLM crawlers.
  Emits a short manifest (llms.txt) and a full content dump (llms-full.txt) following
  the llmstxt.org proposed standard. Triggers: "llms.txt", "LLM crawler", "AI search".
version: 0.1.0
---

# llms.txt Generator

## Purpose

Emit two files that help LLM-powered search engines (Perplexity, ChatGPT Search, Claude, Gemini) discover and cite the generated website content accurately.

- `llms.txt`, short manifest with priority links
- `llms-full.txt`, complete plain-text content dump of every page and post

Reference: https://llmstxt.org

## When to Use

- Final step of `/discovery` after Step 9 (blog content complete)
- Re-run any time pages or blog posts change

## Inputs

- All files under `pages/*.md` and `pages/blog/*.md`
- `discovery-context.md` for client name, industry, base URL
- `02-Sitemap-Report.md` for navigation priority

## Output

Write to `pages/llms.txt` and `pages/llms-full.txt`. Both files are plain UTF-8 text, no YAML front matter, no em dashes.

## Workflow

### Step 1: Build `llms.txt` (short manifest)

Format, strict:

```
# [Client Name]

> [One-sentence site description. Plain English. 20-40 words. Mention industry, service, location if relevant.]

## Core pages

- [Homepage](/): [one-sentence summary]
- [About](/about): [one-sentence summary]
- [Services](/services): [one-sentence summary]
- [Contact](/contact): [one-sentence summary]
- [FAQ](/faq): [one-sentence summary]

## Service pages

- [Service A](/services/service-a): [one-sentence summary]
- [Service B](/services/service-b): [one-sentence summary]

## Pillar content

- [Pillar Topic 1](/topic-1): [one-sentence summary]
- [Pillar Topic 2](/topic-2): [one-sentence summary]

## Recent blog posts

- [Post Title](/blog/post-slug): [one-sentence summary, include YYYY-MM-DD date]

## Optional

- [Privacy Policy](/privacy)
- [Terms](/terms)
```

Rules:
- Each bullet MUST be `[Title](URL): description` format (strict for llms.txt parsers).
- URLs are relative from the site root, not local filesystem paths.
- `## Optional` items are deprioritized by crawlers, use for legal / lower-priority pages.
- Keep total file under 150 lines.

### Step 2: Build `llms-full.txt` (content dump)

Concatenate the full content of every page, in navigation order, separated by `---` on its own line.

Format per page:

```
# [Page Title]
URL: /path/to/page
Updated: YYYY-MM-DD

[Plain-text body: strip markdown metadata, keep headings, paragraphs, lists. Drop HTML comments. Drop schema JSON-LD blocks.]

---
```

Rules:
- Strip the YAML/JSON-LD metadata block from each page (LLMs parse the text body).
- Keep `# Heading`, `## Heading`, paragraphs, lists.
- Strip HTML tags, keep markdown.
- Include the FAQ section (crawlers quote these directly).
- Total file size, no cap. It's meant to be complete.
- Update the `Updated:` field from the page's metadata block.

### Step 3: Verification

- `llms.txt`: every link resolves to a generated page file (cross-check against `pages/`)
- `llms-full.txt`: every page listed in sitemap appears exactly once
- No em dashes, no Pencil refs, no XLSX refs

### Step 4: Update discovery context

Append to `discovery-context.md`:

```
## llms.txt

- Generated: [file count] pages indexed
- Total bytes: [X]
- Last updated: YYYY-MM-DD
```

## Quality Checklist

- [ ] `llms.txt` written to `pages/llms.txt`
- [ ] `llms-full.txt` written to `pages/llms-full.txt`
- [ ] Every bullet in `llms.txt` follows `[Title](URL): desc` format
- [ ] Description sentences are 10-25 words, plain English
- [ ] URLs are site-relative (/about), not filesystem paths (./pages/about.md)
- [ ] `llms-full.txt` contains every generated page and blog post
- [ ] FAQ content preserved in `llms-full.txt`
- [ ] Schema JSON-LD stripped from `llms-full.txt`
- [ ] No em dashes in either file
- [ ] Discovery context updated
