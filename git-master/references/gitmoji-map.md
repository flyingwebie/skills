# Gitmoji + Conventional Commit Type Reference

Use this reference when composing commit messages. Pick the emoji + type that best
describes the *primary intent* of the change.

## Core Types (Use Daily)

| Emoji | Type       | Code               | Description                                |
|-------|------------|--------------------|--------------------------------------------|
| ✨    | feat       | `:sparkles:`       | New feature or capability                  |
| 🐛    | fix        | `:bug:`            | Bug fix                                    |
| 📝    | docs       | `:memo:`           | Documentation only changes                 |
| 💄    | style      | `:lipstick:`       | UI/style updates (not code formatting)     |
| ♻️    | refactor   | `:recycle:`        | Code restructuring, no behavior change     |
| ⚡    | perf       | `:zap:`            | Performance improvement                    |
| ✅    | test       | `:white_check_mark:` | Adding or updating tests                |
| 🔧    | chore      | `:wrench:`         | Config, build, tooling changes             |
| 🚀    | ci         | `:rocket:`         | CI/CD pipeline changes                     |

## Dependency & Infrastructure

| Emoji | Type       | Code               | Description                                |
|-------|------------|--------------------|--------------------------------------------|
| ⬆️    | deps       | `:arrow_up:`       | Upgrade dependencies                       |
| ⬇️    | deps       | `:arrow_down:`     | Downgrade dependencies                     |
| ➕    | deps       | `:heavy_plus_sign:` | Add a dependency                          |
| ➖    | deps       | `:heavy_minus_sign:` | Remove a dependency                      |
| 🐳    | chore      | `:whale:`          | Docker-related changes                     |
| 🔨    | chore      | `:hammer:`         | Development scripts or tooling             |

## Security & Critical

| Emoji | Type       | Code               | Description                                |
|-------|------------|--------------------|--------------------------------------------|
| 🔒    | security   | `:lock:`           | Security fix or improvement                |
| 🚨    | breaking   | `:rotating_light:` | Breaking change (add `!` after type too)   |
| 🩹    | fix        | `:adhesive_bandage:` | Simple/minor fix                         |
| 🚑    | hotfix     | `:ambulance:`      | Critical hotfix                            |
| 🔥    | remove     | `:fire:`           | Remove code or files                       |

## Code Quality

| Emoji | Type       | Code               | Description                                |
|-------|------------|--------------------|--------------------------------------------|
| 🎨    | style      | `:art:`            | Improve structure/format of code           |
| 🏗️    | refactor   | `:building_construction:` | Architectural changes              |
| 💡    | docs       | `:bulb:`           | Add/update code comments                   |
| 🏷️    | types      | `:label:`          | Add or update types/interfaces             |
| 💬    | docs       | `:speech_balloon:` | Add/update text or literals                |

## Project Lifecycle

| Emoji | Type       | Code               | Description                                |
|-------|------------|--------------------|--------------------------------------------|
| 🎉    | init       | `:tada:`           | Initial commit / begin a project           |
| 🔖    | release    | `:bookmark:`       | Release / version tag                      |
| ⏪    | revert     | `:rewind:`         | Revert changes                             |
| 🔀    | merge      | `:twisted_rightwards_arrows:` | Merge branches                |
| 📦    | build      | `:package:`        | Build system or compiled output changes    |

## Data & Database

| Emoji | Type       | Code               | Description                                |
|-------|------------|--------------------|--------------------------------------------|
| 🗃️    | db         | `:card_file_box:`  | Database-related changes                   |
| 🌱    | db         | `:seedling:`       | Add or update seed files                   |

## Internationalization & Accessibility

| Emoji | Type       | Code               | Description                                |
|-------|------------|--------------------|--------------------------------------------|
| 🌐    | i18n       | `:globe_with_meridians:` | Internationalization/localization    |
| ♿    | a11y       | `:wheelchair:`     | Accessibility improvements                 |

## Decision Guide

When multiple types could fit, ask yourself:

1. **Does it add new behavior?** → `✨ feat`
2. **Does it fix broken behavior?** → `🐛 fix`
3. **Does it change how existing code works internally?** → `♻️ refactor`
4. **Does it make something faster?** → `⚡ perf`
5. **Does it only change docs/comments?** → `📝 docs`
6. **Is it test-only?** → `✅ test`
7. **Is it config/tooling/deps?** → `🔧 chore`

If you genuinely can't decide between two, pick the one that's more useful to someone
scanning `git log --oneline` six months from now.
