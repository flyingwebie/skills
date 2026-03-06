# PRD Builder

Generate comprehensive Product Requirements Documents by analyzing existing online products and planning a modern clone.

## What it does

Give it a URL of a product you want to replicate and a name for your new product. It will:

1. Analyze the existing product (features, user flows, UI patterns, data model)
2. Recommend a modern tech stack with rationale
3. Let you approve or swap any technology choices
4. Generate a full PRD markdown with vision, user stories, features, architecture, roadmap, and more

## Components

| Type    | Name            | Description                                  |
| ------- | --------------- | -------------------------------------------- |
| Command | `/prd`          | Quick trigger — `/prd <url> <product-name>`  |
| Skill   | `prd-generator` | Domain knowledge, workflow, and PRD template |

## Usage

### Slash command

```
/prd https://notion.so MyNotes
```

### Natural language

> Create a PRD for cloning Trello. Call it TaskFlow.

Both methods follow the same workflow — analyze, recommend stack, get approval, generate PRD.

## Output

A markdown file saved as `PRD-{product-name}.md` containing:

- Product vision & overview
- User stories & personas
- Detailed features breakdown with acceptance criteria
- Technical architecture with Mermaid diagrams
- Data model
- API design
- UI/UX guidelines
- MVP scope definition
- Development roadmap with milestones
- Non-functional requirements
- Analytics & monitoring plan
- Open questions

## Notes

- The plugin will stop and ask questions whenever it's not at least 80% confident about something
- Tech stack approval is mandatory before PRD generation
- All tech recommendations target the latest stable versions of proven tools
