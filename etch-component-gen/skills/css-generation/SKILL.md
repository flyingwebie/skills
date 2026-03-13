---
name: css-generation
description: >
  Generates BEM-scoped CSS with ACSS custom property references for Etch components.
  Uses &__/&-- stemming compatible with Etch CSS panel. Zero hardcoded values.
---

# CSS Generation Skill

Produces BEM-scoped CSS for Etch components using native CSS nesting with `&__`/`&--` stemming. All design values reference ACSS 4.x custom properties — no hardcoded colors, spacing, or typography values.

## Purpose

This skill generates the `style.css` for each Etch component. It is responsible for:
- Creating the block selector for the component name
- Nesting all element selectors using `&__` stemming (e.g., `&__heading`, `&__container`)
- Nesting all modifier selectors using `&--` stemming (e.g., `&--featured`, `&--compact`)
- Referencing ACSS custom properties for all design values: `var(--primary)`, `var(--space-m)`, `var(--text-l)`
- Adding `container-type: inline-size` to enable container-query responsive behavior
- Writing `@container (min-width: ...)` rules for responsive layout changes

## Algorithm

When generating CSS for a component:

1. **Create block selector** — Open a selector with the component name as the class:
   ```css
   .pricing-table {
     container-type: inline-size;
     /* layout properties using ACSS tokens */
   }
   ```

2. **Nest element selectors using `&__` stemming** — Add nested selectors for each BEM element. Etch's CSS panel expands `&__element` to `.block__element`:
   ```css
   .pricing-table {
     &__container {
       max-width: var(--content-width);
       padding: var(--space-l) var(--space-m);
     }
     &__heading {
       font-size: var(--text-2xl);
       color: var(--heading-color);
     }
   }
   ```

3. **Add modifier selectors using `&--` stemming** — Modifiers that change appearance or state:
   ```css
   .pricing-table {
     &--featured {
       background: var(--primary-ultra-light);
     }
   }
   ```

4. **Reference ACSS tokens for all values** — Never hardcode design values. Use:
   - Colors: `var(--primary)`, `var(--action)`, `var(--neutral-light)`, etc.
   - Spacing: `var(--space-xs)` through `var(--space-2xl)`, `var(--section-space)`
   - Typography: `var(--text-s)` through `var(--text-4xl)`, `var(--heading-color)`, `var(--body-color)`
   - Borders: `var(--border-radius)`, `var(--border-color)`, `var(--border-width)`
   - Exception: layout-specific values (grid fractions, aspect ratios) that have no ACSS equivalent

5. **Add container-query responsive rules** — For layout changes at different component widths:
   ```css
   .pricing-table {
     container-type: inline-size;

     &__grid {
       display: grid;
       grid-template-columns: 1fr;
     }

     @container (min-width: 768px) {
       &__grid {
         grid-template-columns: repeat(3, 1fr);
       }
     }
   }
   ```

## References

The following reference files will be added in Phase 2:
- `skills/css-generation/references/acss-tokens.md` — ACSS 4.x custom property reference (colors, spacing, typography, borders, grid)
- `skills/css-generation/references/bem-conventions.md` — BEM naming rules specific to Etch components (flat structure, element name mapping)

## Not Yet Implemented

This skill is a **Phase 2 deliverable**. Phase 2 will add:
- Complete ACSS 4.x token reference (6 color roles x 8 shades, spacing scale, typography scale)
- BEM naming conventions for each Etch element type
- CSS output templates for common component types
- Container-query breakpoint reference
