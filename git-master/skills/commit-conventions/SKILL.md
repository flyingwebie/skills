---
name: commit-conventions
description: >
  Gitmoji + Conventional Commits format reference. Covers commit message structure,
  emoji selection, type mapping, and validation rules. Used by the /commit command
  and the post-tool-use commit validation hook.
user-invocable: false
---

# Commit Conventions — Gitmoji + Conventional Commits

## Message Format

```
<emoji> <type>(<scope>): <subject>

<body>          <- optional, wrap at 72 chars
<footer>        <- optional (breaking changes, ticket refs)
```

## Golden Rules

1. **Subject line**: imperative mood, no period, max 72 chars total (including emoji)
2. **Body**: explain *why*, not *what* — the diff shows the what
3. **One logical change per commit** — if you say "and", split it
4. **Never commit generated files, secrets, or large binaries**

## Gitmoji Decision Guide

When choosing an emoji, follow this priority:

1. **Is it a breaking change?** -> 🚨 `breaking`
2. **Does it add new user-facing functionality?** -> ✨ `feat`
3. **Does it fix a bug?** -> 🐛 `fix`
4. **Is it a performance improvement?** -> ⚡ `perf`
5. **Is it a security fix?** -> 🔒 `security`
6. **Is it documentation only?** -> 📝 `docs`
7. **Is it a UI/style change?** -> 💄 `style`
8. **Is it a code restructure with no behavior change?** -> ♻️ `refactor`
9. **Is it adding/updating tests?** -> ✅ `test`
10. **Is it CI/CD related?** -> 🚀 `ci`
11. **Is it a dependency upgrade?** -> ⬆️ `deps`
12. **Is it removing code/files?** -> 🗑️ `remove`
13. **Everything else (config, tooling, maintenance)** -> 🔧 `chore`

For the full emoji reference with all 30+ gitmoji codes, see `references/gitmoji-map.md`.

## Common Types with Emojis

| Emoji | Type         | When to use                                    |
|-------|------------- |------------------------------------------------|
| ✨    | `feat`       | New feature                                    |
| 🐛    | `fix`        | Bug fix                                        |
| 📝    | `docs`       | Documentation changes                          |
| 💄    | `style`      | UI/style changes (not CSS-in-code formatting)  |
| ♻️    | `refactor`   | Code change that neither fixes nor adds        |
| ⚡    | `perf`       | Performance improvement                        |
| ✅    | `test`       | Adding or updating tests                       |
| 🔧    | `chore`      | Build process, tooling, config                 |
| 🚀    | `ci`         | CI/CD changes                                  |
| ⬆️    | `deps`       | Dependency upgrades                            |
| 🔒    | `security`   | Security fix or improvement                    |
| 🗑️    | `remove`     | Removing code or files                         |
| 🚨    | `breaking`   | Breaking change (also add `BREAKING CHANGE:` footer) |

## Scope Guidelines

The scope is optional but recommended. It should be:
- A module, component, or feature area: `auth`, `cart`, `api`, `db`
- Lowercase, no spaces
- Consistent within the project (don't mix `auth` and `authentication`)

## Validation Rules

The `scripts/validate_commit.sh` script checks:
1. Emoji present at start of subject line
2. Conventional commit type present (`feat`, `fix`, `docs`, etc.)
3. Subject line <= 72 characters
4. No trailing period on subject
5. Imperative mood (warns on past tense: "added" -> "add")
6. Blank line between subject and body

## Examples

**Simple feature:**
```
✨ feat(auth): add JWT refresh token rotation
```

**Bug fix with body:**
```
🐛 fix(cart): prevent duplicate items on rapid double-click

The add-to-cart handler now debounces within 300ms.
Root cause was a missing loading state check before dispatch.
```

**Breaking change with footer:**
```
🚨 feat(api)!: change pagination from offset to cursor-based

BREAKING CHANGE: All list endpoints now require `cursor` param instead
of `page`. Offset-based pagination is removed.

Migration guide: docs/migration/v3-pagination.md
```

**Chore/maintenance:**
```
🔧 chore: update ESLint config for flat config format
```
