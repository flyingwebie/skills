# FWS Skills & Plugins

Claude Code plugins and agent skills for product, development, and agency workflows — by [Flying Web Solutions](https://flyingweb.ie).

## Contents

| Name                                              | Type   | Description                                                                                         |
| ------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| [`prd-builder`](./prd-builder/)                   | Plugin | Generate full PRDs by analyzing existing products and recommending a modern tech stack               |
| [`fws-client-discovery`](./fws-client-discovery/) | Plugin | Complete client discovery — sitemap, competitors, personas, keywords, copy, and 90-day content plan  |
| [`git-master`](./git-master/)                     | Plugin | Best-practice git workflow with Gitmoji + Conventional Commits, PR creation, and release management  |
| [`magic-ui-ux`](./magic-ui-ux/)                   | Plugin | Psychology-driven UI/UX design — combines cognitive psychology skills with Google Stitch MCP         |
| [`etchwp`](./etchwp/)                             | Plugin | Generate production-ready Etch + AutomaticCSS components with BEM naming, ACSS tokens, and vanilla JS |
| [`stack-agents`](./stack-agents/)                 | Plugin | Auto-triggering tech stack subagents for TanStack Start, Next.js, Expo, Convex, Supabase, and Clerk  |

> **Plugins** add slash commands, hooks, and bundled skills — they are Claude Code-specific.
> **Skills** (`SKILL.md` files) are cross-tool — they work in Claude Code, Gemini CLI, and OpenAI Codex CLI without modification.

---

## Compatibility

| Tool                                                      | Plugins                  | Skills |
| --------------------------------------------------------- | ------------------------ | ------ |
| [Claude Code](https://claude.ai/code)                     | Yes — full plugin system | Yes    |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | No                       | Yes    |
| [OpenAI Codex CLI](https://github.com/openai/codex)       | No                       | Yes    |

---

## Installing in Claude Code

### 1 — Add this repo as a marketplace (one-time)

This repo ships with a `.claude-plugin/marketplace.json`, which makes it a valid Claude Code marketplace. Register it once using its GitHub path:

```bash
claude plugin marketplace add <github-username>/<repo-name>
# Example:
claude plugin marketplace add flyingwebie/skills
```

Verify it was registered:

```bash
claude plugin marketplace list
```

### 2 — Install plugins by name

```bash
# Install globally for your user account
claude plugin install prd-builder
claude plugin install fws-client-discovery
claude plugin install git-master

# Install only for the current project
claude plugin install prd-builder --scope project
```

### Managing plugins

```bash
claude plugin list                          # List installed plugins
claude plugin update prd-builder            # Update to latest version
claude plugin disable prd-builder           # Disable without uninstalling
claude plugin uninstall prd-builder         # Remove completely
claude plugin marketplace remove flyingweb  # Remove the marketplace
```

### Load a plugin for a single session (no install)

```bash
claude --plugin-dir /path/to/skills/prd-builder
```

---

## Installing in Gemini CLI

Gemini CLI supports skills natively via the `.agents/skills/` path. Plugins are not supported — only the embedded `SKILL.md` files apply.

### Install skills globally (all projects)

```bash
# Symlink bundled skills from plugins into the Gemini user skills directory
ln -s /path/to/skills/git-master/skills/git-workflow ~/.gemini/skills/git-workflow
ln -s /path/to/skills/git-master/skills/commit-conventions ~/.gemini/skills/commit-conventions

# Or use the ~/.agents/skills/ path (shared with Codex)
ln -s /path/to/skills/git-master/skills/git-workflow ~/.agents/skills/git-workflow
```

### Install skills for one project (workspace)

Copy or symlink the skill into your project's local skills folder:

```bash
# Inside your project root
mkdir -p .agents/skills
ln -s /path/to/skills/git-master/skills/git-workflow .agents/skills/git-workflow
```

Commit `.agents/skills/` to version control so the whole team shares the same skills.

### Reload skills in a running session

```
/skills reload
```

### List available skills

```bash
gemini skills list
```

---

## Installing in OpenAI Codex CLI

Codex CLI uses the same `.agents/skills/` convention as Gemini CLI, so the same skill files work in both tools.

### Install skills globally (all projects)

```bash
ln -s /path/to/skills/git-master/skills/git-workflow ~/.agents/skills/git-workflow
```

### Install skills for one project (workspace)

```bash
# Inside your project root
mkdir -p .agents/skills
ln -s /path/to/skills/git-master/skills/git-workflow .agents/skills/git-workflow
```

### Install via the built-in skill installer

If you have the Codex `$skill-installer` built-in available, you can install from a GitHub path directly:

```
$skill-installer
```

Then provide the GitHub repo and path when prompted.

### Invoke a skill explicitly in Codex

```
$git-workflow  ← prefix with $ to call a skill by name
```

---

## File structure

### Plugin (Claude Code only)

```
plugin-name/
├── .claude-plugin/
│   └── plugin.json          # Name, version, author — required
├── commands/                # Slash commands (e.g. /prd)
│   └── command-name.md
├── skills/                  # Skills auto-loaded with the plugin
│   └── skill-name/
│       ├── SKILL.md
│       └── references/
├── hooks/                   # Event hooks (optional)
│   └── hooks.json
└── README.md
```

### Skill (Claude Code + Gemini CLI + Codex CLI)

```
skill-name/
├── SKILL.md                 # Frontmatter triggers + instructions — required
├── references/              # Supporting docs Claude reads on demand (optional)
└── scripts/                 # Helper scripts the skill can invoke (optional)
```

### Marketplace root (this repo)

```
.
├── .claude-plugin/
│   └── marketplace.json     # Declares all plugins — enables `claude plugin marketplace add`
├── prd-builder/             # Plugin
├── fws-client-discovery/    # Plugin
├── git-master/              # Plugin
├── magic-ui-ux/             # Plugin
├── etchwp/                  # Plugin
├── stack-agents/            # Plugin
└── README.md
```

---

## Learn more

- [Claude Code plugins docs](https://docs.claude.com/en/docs/claude-code/plugins)
- [Gemini CLI skills docs](https://google-gemini.github.io/gemini-cli/docs/cli/skills)
- [Gemini CLI GEMINI.md context](https://google-gemini.github.io/gemini-cli/docs/cli/gemini-md.html)
- [OpenAI Codex CLI skills](https://developers.openai.com/codex/skills/)
- [OpenAI Codex AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
