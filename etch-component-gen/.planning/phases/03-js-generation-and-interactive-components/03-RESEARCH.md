# Phase 3: JS Generation and Interactive Components - Research

**Researched:** 2026-03-14
**Domain:** Vanilla JavaScript generation, event delegation, ARIA accessibility, interactive UI patterns
**Confidence:** HIGH

## Summary

Phase 3 completes the JS generation skill and activates Step 7 in the `/generate` pipeline. The existing js-generation SKILL.md already defines the interactivity classification system (Levels 0-4) and skeleton patterns for DOMContentLoaded init, event delegation, state stores, and async fetch. Phase 3 must flesh these out with complete, copy-paste-ready patterns for each interactive section type (header/nav mobile toggle, pricing monthly/annual toggle, testimonial carousel) and add keyboard navigation + ARIA attribute management.

The codebase is well-structured for this work. The generate pipeline (commands/generate.md) already has Step 7 stubbed as "Skip in Phase 2" with a forward note. The registry schema already supports `hasJs: true` and `files.js` paths. The HTML templates in section-patterns.md already include the ARIA attributes needed for interactive components (`aria-expanded`, `aria-controls`, `aria-hidden`, `hidden` attribute on mobile nav). The CSS generation skill already includes `:focus-visible` patterns on CTAs. Phase 3 connects these dots by producing the JavaScript that manages these states at runtime.

**Primary recommendation:** Complete the js-generation SKILL.md with full pattern examples per interactivity level, update generate.md Step 7 to activate JS generation, and add interactive-specific HTML/CSS additions (keyboard event handlers in JS, `:focus-visible` on all interactive elements in CSS, toggle-state CSS classes).

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| GEN-04 | JS generation skill produces vanilla ES2020+ code with event delegation, async patterns, and state management -- classified by interactivity level (none/interactive/dynamic) | Interactivity classification already defined in js-generation SKILL.md; research provides complete patterns for each level and integration into generate pipeline Step 7 |
| GEN-05 (JS for interactive sections) | Interactive section types (header/nav, pricing, testimonials) generate with working JS | Research defines exact JS behavior per section type: mobile nav toggle, pricing period switch, testimonial carousel navigation |
| QUAL-02 | Interactive components include keyboard navigation, `aria-expanded`/`aria-hidden` attributes, and `:focus-visible` outlines | Research documents ARIA state management patterns, keyboard event handlers (Escape to close, Enter/Space to toggle, arrow keys for carousel), and CSS `:focus-visible` additions |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Vanilla JS (ES2020+) | N/A | All component interactivity | Project constraint: no framework dependencies; Etch runtime expects plain browser-ready JS |
| DOM API | Native | Element selection, event handling, attribute manipulation | Standard browser API; no abstraction needed for component-level interactivity |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| IntersectionObserver API | Native | Scroll-triggered animations, lazy initialization | Level 2+ components with scroll-based behavior |
| Fetch API | Native | Remote data loading | Level 3 components that fetch external data |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Vanilla JS | Alpine.js / Petite-Vue | Would add a dependency; violates project constraint of no framework dependencies |
| Manual event delegation | addEventListener per element | Event delegation is more performant and handles dynamically added elements |
| In-memory state object | localStorage / sessionStorage | Persistent state is unnecessary for component-level UI state; in-memory is simpler and sufficient |

**Installation:**
No installation required. All code is vanilla browser JavaScript.

## Architecture Patterns

### Files Modified/Created in This Phase

```
skills/
  js-generation/
    SKILL.md                     # Complete with full patterns (currently skeleton)
commands/
  generate.md                    # Step 7 activated (currently skipped)
skills/
  html-generation/
    SKILL.md                     # Add data-* attributes for JS hooks
  css-generation/
    SKILL.md                     # Add :focus-visible rules for all interactive elements
  etch-conventions/
    references/
      section-patterns.md        # Update interactive sections with data-* attributes and ARIA
```

### Pattern 1: Interactivity Classification Decision Tree

**What:** Before generating JS, classify the component to select the correct pattern tier.
**When to use:** Every component generation in Step 7.

The classification already exists in js-generation SKILL.md. The generate pipeline must use it:

```
Component type → Interactivity level:
  hero             → Level 0 (none) — skip JS
  features         → Level 0 (none) — skip JS
  cta              → Level 0 (none) — skip JS
  footer           → Level 0 (none) — skip JS, unless dynamic year
  header/nav       → Level 1 (simple) — mobile toggle, dropdown menus
  pricing          → Level 1 (simple) — monthly/annual toggle
  testimonials     → Level 1 (simple) — carousel navigation
  custom           → Infer from description keywords
```

**Key decision:** Footer year update is trivial (one line: `document.getElementById('current-year').textContent = new Date().getFullYear()`) and can be inlined. It does not warrant a full script.js file. The section-patterns.md footer template already has `<span id="current-year">2024</span>` — this can be handled with an inline script or noted as a micro-interaction.

### Pattern 2: Event Delegation on BEM Container

**What:** Attach a single event listener to the component's container element and use `event.target.closest()` to identify the trigger.
**When to use:** All Level 1+ components.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const component = document.querySelector('.site-header');
  if (!component) return;

  component.addEventListener('click', (event) => {
    const toggle = event.target.closest('.site-header__mobile-toggle');
    if (toggle) {
      handleMobileToggle(component, toggle);
      return;
    }
  });
});
```

**Why this pattern:** Single listener is more efficient than per-element binding. `closest()` handles clicks on child elements (e.g., clicking the icon inside a button). Works with Etch's DOM structure where components may be dynamically inserted.

### Pattern 3: ARIA State Management

**What:** Toggle `aria-expanded`, `aria-hidden`, and `hidden` attributes in sync with visual state changes.
**When to use:** Any component with show/hide behavior.

```javascript
function togglePanel(trigger, panel, isOpen) {
  trigger.setAttribute('aria-expanded', String(!isOpen));
  panel.setAttribute('aria-hidden', String(isOpen));

  if (isOpen) {
    panel.setAttribute('hidden', '');
  } else {
    panel.removeAttribute('hidden');
  }
}
```

**Critical details:**
- `aria-expanded` goes on the trigger (button), not the panel
- `aria-hidden` and `hidden` go on the panel
- `hidden` attribute is the actual visibility mechanism; CSS can style based on `[aria-hidden]` but `hidden` ensures fallback
- The `aria-label` on the toggle button should update: "Open navigation menu" / "Close navigation menu"

### Pattern 4: Keyboard Navigation

**What:** Handle keyboard events for interactive components beyond native browser behavior.
**When to use:** All Level 1+ components.

Required keyboard interactions per component type:

| Component | Key | Action |
|-----------|-----|--------|
| Header/Nav | `Escape` | Close mobile menu if open |
| Header/Nav | `Tab` | Trap focus inside open mobile menu |
| Pricing toggle | `Enter`/`Space` | Toggle monthly/annual |
| Testimonial carousel | `ArrowLeft`/`ArrowRight` | Navigate slides |
| Testimonial carousel | `Enter`/`Space` | Activate dot indicator |
| All interactive | `Tab` | Natural focus order through interactive elements |

```javascript
component.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu(component);
    // Return focus to the trigger
    component.querySelector('.site-header__mobile-toggle')?.focus();
  }
});
```

### Pattern 5: CSS State Classes vs. ARIA Selectors

**What:** Use ARIA attributes as CSS hooks instead of separate state classes.
**When to use:** All interactive components.

```css
/* Use ARIA attributes as CSS selectors — no extra state classes needed */
&__mobile-nav {
  display: none;

  &[aria-hidden="false"] {
    display: block;
  }
}

/* Or use :not([hidden]) for the hidden attribute approach */
&__mobile-nav:not([hidden]) {
  display: block;
}
```

**Recommendation:** Use the `hidden` attribute approach. It provides native hiding without CSS, and CSS can enhance the reveal with transitions. This aligns with the existing section-patterns.md header template which already uses `hidden` attribute.

### Anti-Patterns to Avoid

- **Adding JS to non-interactive components:** Hero, features grid, CTA, and footer (except year) need no JavaScript. Do not generate empty or trivial script.js files.
- **Using `querySelector` inside event handlers:** Cache DOM references at initialization time, not per-event.
- **Inline event handlers in HTML:** Never use `onclick=""` attributes. All event binding happens in script.js via delegation.
- **Framework patterns in vanilla JS:** No virtual DOM, no reactive state, no component lifecycle. Keep it imperative and direct.
- **Forgetting cleanup:** If a component uses `setInterval`, `ResizeObserver`, or similar, document that cleanup is the consumer's responsibility (Etch handles component lifecycle).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Focus trapping | Custom focus trap logic | Simple first/last focusable element detection + keydown Tab handler | Full focus trap libraries handle edge cases (shadow DOM, iframes) but are overkill for nav menus; simple approach covers 95% |
| Carousel/slider | Custom touch gesture + animation | CSS scroll-snap + minimal JS for dot indicators | CSS scroll-snap handles touch, momentum, and snapping natively; JS only needed for indicator sync and keyboard nav |
| Smooth scrolling | Custom scroll animation | `scroll-behavior: smooth` CSS + `element.scrollIntoView({ behavior: 'smooth' })` | Native browser support is excellent; custom implementations add complexity for no benefit |
| Debouncing | Custom debounce function | Inline `setTimeout`/`clearTimeout` pattern (2-3 lines) | For the simple resize/scroll cases in components, a full debounce utility is unnecessary |

**Key insight:** Etch components are pasted into a page builder — they should be self-contained and minimal. Complex interactions (modals, accordions, tabs) are v2 requirements (ELEM-01 through ELEM-04) and explicitly out of scope for Phase 3.

## Common Pitfalls

### Pitfall 1: Generating JS for Static Components
**What goes wrong:** Every component gets a script.js, even purely static ones (hero, features, CTA).
**Why it happens:** Pipeline runs Step 7 unconditionally.
**How to avoid:** Interactivity classification must gate JS generation. If Level 0, skip entirely — do not write script.js, set `hasJs: false`, set `files.js: null` in registry.
**Warning signs:** script.js files that only contain a DOMContentLoaded wrapper with no actual logic.

### Pitfall 2: ARIA Attribute Desync
**What goes wrong:** `aria-expanded` on the trigger says "true" but the panel still has `aria-hidden="true"` and `hidden`.
**Why it happens:** Updating one attribute without the other, or updating attributes but not the `hidden` property.
**How to avoid:** Always update trigger and panel attributes together in a single function. The toggle function pattern above handles this.
**Warning signs:** Screen readers announce "expanded" but panel is visually hidden, or vice versa.

### Pitfall 3: Missing Keyboard Support
**What goes wrong:** Toggle works on click but not on Enter/Space key press.
**Why it happens:** Using only `click` event listener on non-button elements.
**How to avoid:** Use `<button>` elements for all toggles (already done in header template). Buttons natively fire `click` on Enter/Space. Only add `keydown` handlers for non-native behaviors (Escape to close, arrow keys for carousel).
**Warning signs:** Interactive elements that work with mouse but not keyboard.

### Pitfall 4: Focus Not Returned After Close
**What goes wrong:** User opens mobile menu, presses Escape, focus disappears or goes to `<body>`.
**Why it happens:** Closing the menu without explicitly returning focus to the trigger element.
**How to avoid:** After closing any panel, call `.focus()` on the trigger that opened it.
**Warning signs:** After toggling an interactive element, pressing Tab goes to an unexpected location.

### Pitfall 5: CSS Transitions on Hidden Attribute
**What goes wrong:** Panel appears/disappears instantly despite having CSS transitions.
**Why it happens:** `hidden` attribute sets `display: none` which cannot be transitioned.
**How to avoid:** For animated transitions, remove `hidden` first, force reflow, then toggle a visibility class. For simple show/hide (acceptable for v1), `hidden` attribute is fine without animation.
**Warning signs:** Transition CSS exists but never visually fires.

## Code Examples

### Mobile Navigation Toggle (Header/Nav — Level 1)

```javascript
// script.js for site-header component
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const toggle = header.querySelector('.site-header__mobile-toggle');
  const mobileNav = header.querySelector('.site-header__mobile-nav');
  if (!toggle || !mobileNav) return;

  function setMenuState(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    mobileNav.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
      mobileNav.removeAttribute('hidden');
      // Focus first link in mobile nav
      const firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      mobileNav.setAttribute('hidden', '');
      toggle.focus();
    }
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  // Close on Escape
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target) && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
    }
  });
});
```

### Pricing Monthly/Annual Toggle (Pricing — Level 1)

**HTML additions needed for pricing section:**
```html
<div class="pricing__toggle" role="group" aria-label="Billing period">
  <button class="pricing__toggle-btn pricing__toggle-btn--active" data-period="monthly" aria-pressed="true">Monthly</button>
  <button class="pricing__toggle-btn" data-period="annual" aria-pressed="false">Annual</button>
</div>
```

**Data attributes on price elements:**
```html
<span class="pricing__amount" aria-label="19 dollars per month" data-monthly="$19" data-annual="$15">$19</span>
<span class="pricing__period" aria-hidden="true" data-monthly="/month" data-annual="/year">/month</span>
```

```javascript
// script.js for pricing component
document.addEventListener('DOMContentLoaded', () => {
  const pricing = document.querySelector('.pricing');
  if (!pricing) return;

  const toggleBtns = pricing.querySelectorAll('.pricing__toggle-btn');
  const amounts = pricing.querySelectorAll('.pricing__amount');
  const periods = pricing.querySelectorAll('.pricing__period');

  function setPeriod(period) {
    toggleBtns.forEach((btn) => {
      const isActive = btn.dataset.period === period;
      btn.classList.toggle('pricing__toggle-btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    amounts.forEach((el) => {
      const value = el.dataset[period];
      if (value) {
        el.textContent = value;
        const label = period === 'monthly'
          ? `${value.replace('$', '')} dollars per month`
          : `${value.replace('$', '')} dollars per year`;
        el.setAttribute('aria-label', label);
      }
    });

    periods.forEach((el) => {
      const value = el.dataset[period];
      if (value) el.textContent = value;
    });
  }

  pricing.addEventListener('click', (event) => {
    const btn = event.target.closest('.pricing__toggle-btn');
    if (!btn) return;
    setPeriod(btn.dataset.period);
  });
});
```

### Testimonial Carousel (Testimonials — Level 1)

**HTML additions needed:** Navigation dots and prev/next buttons.
```html
<div class="testimonials__carousel-nav" role="group" aria-label="Testimonial navigation">
  <button class="testimonials__prev" aria-label="Previous testimonial" type="button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>
  <div class="testimonials__dots" role="tablist" aria-label="Testimonial slides">
    <button class="testimonials__dot testimonials__dot--active" role="tab" aria-selected="true" aria-label="Testimonial 1" type="button"></button>
    <button class="testimonials__dot" role="tab" aria-selected="false" aria-label="Testimonial 2" type="button"></button>
    <button class="testimonials__dot" role="tab" aria-selected="false" aria-label="Testimonial 3" type="button"></button>
  </div>
  <button class="testimonials__next" aria-label="Next testimonial" type="button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>
</div>
```

**CSS for carousel (scroll-snap approach):**
```css
&__grid {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: var(--grid-gap);
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
}

&__item {
  flex: 0 0 100%;
  scroll-snap-align: start;
}

@container (width >= 600px) {
  &__item {
    flex: 0 0 calc(50% - var(--grid-gap) / 2);
  }
}

@container (width >= 900px) {
  &__item {
    flex: 0 0 calc(33.333% - var(--grid-gap) * 2 / 3);
  }
}
```

```javascript
// script.js for testimonials component
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelector('.testimonials');
  if (!testimonials) return;

  const grid = testimonials.querySelector('.testimonials__grid');
  const items = testimonials.querySelectorAll('.testimonials__item');
  const dots = testimonials.querySelectorAll('.testimonials__dot');
  const prevBtn = testimonials.querySelector('.testimonials__prev');
  const nextBtn = testimonials.querySelector('.testimonials__next');
  if (!grid || items.length === 0) return;

  let currentIndex = 0;

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    items[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

    dots.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.classList.toggle('testimonials__dot--active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  // Keyboard navigation on carousel nav
  testimonials.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToSlide(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToSlide(currentIndex + 1);
    }
  });
});
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `onclick` attributes | Event delegation via `addEventListener` | Long established | Separation of concerns; works with dynamic DOM |
| `display: none` via CSS class | `hidden` attribute + ARIA | HTML5.1+ | Native hiding with semantic meaning; accessible by default |
| Custom carousel with touch handlers | CSS `scroll-snap` + minimal JS | CSS scroll-snap widely supported (2020+) | 90% less JS; native touch/momentum; better performance |
| `outline: none` on focus | `:focus-visible` pseudo-class | 2022+ (all browsers) | Only shows focus ring on keyboard nav, not mouse clicks |
| Manual `tabindex` management | Native `<button>` elements | Always | Buttons are keyboard-accessible by default; avoid tabindex hacks |

**Deprecated/outdated:**
- jQuery event handling: Project explicitly excludes jQuery (REQUIREMENTS.md Out of Scope)
- `keyCode` property: Use `event.key` string comparison instead (e.g., `event.key === 'Escape'`)
- `var self = this` pattern: Arrow functions handle `this` binding

## Integration Points

### Generate Pipeline Changes (commands/generate.md)

**Step 7** must be updated from "always skip" to:

1. Read `@${CLAUDE_PLUGIN_ROOT}/skills/js-generation/SKILL.md`
2. Classify the component's interactivity level based on type:
   - `hero`, `features`, `cta`, `custom` (static description) → Level 0, skip
   - `header` → Level 1 (mobile toggle)
   - `pricing` → Level 1 (period toggle, if description mentions toggle/switch)
   - `testimonials` → Level 1 (carousel, if more than 3 items or description mentions carousel/slider)
   - `custom` → Infer from description keywords
3. If Level 0, skip — set `hasJs: false`, `files.js: null`
4. If Level 1+, generate script.js following the appropriate pattern from js-generation SKILL.md
5. If `--no-js` flag was passed, skip regardless of classification

**Step 8** must be updated to conditionally write script.js.

**Step 9** must set `hasJs` and `files.js` based on whether JS was generated.

**Step 10** must show the JS code block when JS was generated.

### HTML Template Additions

Interactive section types need additional HTML elements and data attributes that Phase 2 templates do not include:

1. **Header/nav**: Already has mobile toggle + mobile nav panel with ARIA (no changes needed to HTML template)
2. **Pricing**: Needs toggle group (`<div role="group">` with monthly/annual buttons) and `data-monthly`/`data-annual` attributes on price elements
3. **Testimonials**: Needs carousel navigation (prev/next buttons + dot indicators) appended after the grid

These additions should be documented in the js-generation SKILL.md as "HTML requirements for interactive patterns" so the generate pipeline produces the correct HTML when JS is being generated.

### CSS Additions for Interactive Components

Phase 2's CSS generation skill already includes `:focus-visible` on CTAs. Phase 3 must ensure:

1. `:focus-visible` on toggle buttons, carousel nav buttons, and dot indicators
2. Active/pressed state styling for toggle buttons (`.pricing__toggle-btn--active`)
3. Carousel dot active state (`.testimonials__dot--active`)
4. Mobile nav transition styles (if desired — simple `hidden` attribute approach needs no CSS transitions)

## Open Questions

1. **Testimonial carousel vs. static grid**
   - What we know: The current testimonials template shows a 3-column grid. A carousel only makes sense when showing one-at-a-time on mobile.
   - What's unclear: Should all testimonial sections be carousels, or only when the description mentions "carousel"/"slider"?
   - Recommendation: Generate carousel navigation HTML/JS by default for testimonials. The CSS scroll-snap approach degrades gracefully — on wide screens it shows all items, on narrow screens it scrolls. This provides the best UX without requiring the user to explicitly request it.

2. **Footer dynamic year**
   - What we know: The footer template has `<span id="current-year">2024</span>` suggesting dynamic year update.
   - What's unclear: Should this be a full script.js or an inline one-liner?
   - Recommendation: Do not generate a script.js for footer. The year update is a one-line inline script that can be noted in the HTML generation skill as a micro-interaction. Footer stays at Level 0.

3. **Custom component interactivity inference**
   - What we know: Custom components have no predefined type to infer interactivity from.
   - What's unclear: How reliably can description keywords determine interactivity level?
   - Recommendation: For `custom` type, check description for keywords like "toggle", "menu", "dropdown", "carousel", "slider", "accordion", "tab", "form". If none found, default to Level 0 (no JS). The user can always re-generate without `--no-js` if needed.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual validation (this is a Claude Code plugin that generates markdown/skill files, not executable code) |
| Config file | none |
| Quick run command | Manual: run `/generate site-header "Main navigation with mobile menu"` and verify output |
| Full suite command | Manual: generate all 3 interactive section types and verify JS, ARIA, and keyboard behavior |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| GEN-04 | JS generation skill classifies by interactivity level and produces vanilla ES2020+ | manual | Generate header, pricing, testimonials, hero — verify header/pricing/testimonials get script.js, hero does not | N/A |
| GEN-05 (JS) | Interactive sections generate with working JS | manual | Generate each interactive type, paste into browser, verify toggle/carousel works | N/A |
| QUAL-02 | Keyboard nav, aria-expanded/hidden, :focus-visible | manual | Tab through generated components, verify focus rings; use screen reader to verify ARIA states | N/A |

### Sampling Rate
- **Per task commit:** Read generated skill files and verify pattern completeness
- **Per wave merge:** Generate all 3 interactive section types end-to-end
- **Phase gate:** Full manual test of all interactive components with keyboard + screen reader

### Wave 0 Gaps
None -- this is a plugin that generates markdown skill files. Validation is manual: generate components and verify output quality.

## Sources

### Primary (HIGH confidence)
- Project codebase: js-generation/SKILL.md (existing skeleton with interactivity levels)
- Project codebase: section-patterns.md (existing header template with ARIA attributes)
- Project codebase: commands/generate.md (existing 10-step pipeline with Step 7 stubbed)
- Project codebase: css-generation/SKILL.md (existing :focus-visible patterns)
- WAI-ARIA Authoring Practices (disclosure pattern, carousel pattern) — standard ARIA patterns

### Secondary (MEDIUM confidence)
- CSS scroll-snap specification — widely supported, well-documented browser feature
- `:focus-visible` pseudo-class — supported in all modern browsers since 2022

### Tertiary (LOW confidence)
- Etch's JS handling within components at frontend (enqueue, scope, lifecycle) — flagged as a blocker/concern in STATE.md. Recommendation: generate self-contained IIFE-style JS that does not depend on any Etch lifecycle hooks. The DOMContentLoaded pattern is universally safe.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - vanilla JS is a locked project constraint with well-known patterns
- Architecture: HIGH - pipeline structure is well-defined; interactivity classification already exists in SKILL.md
- Pitfalls: HIGH - ARIA state management and keyboard accessibility are well-documented domains
- Etch JS runtime: LOW - how Etch enqueues/scopes component JS is unknown; DOMContentLoaded is the safe fallback

**Research date:** 2026-03-14
**Valid until:** 2026-04-14 (stable domain; vanilla JS patterns do not change frequently)
