---
name: js-generation
description: >
  Generates vanilla ES2020+ JavaScript for interactive Etch components.
  Uses event delegation, async patterns, and state management classified by interactivity level.
---

# JS Generation Skill

Produces production-quality vanilla JavaScript for Etch components. Covers simple toggle interactions through complex state management, API calls, and third-party SDK initialization.

## Purpose

This skill generates the `script.js` for each Etch component that requires JavaScript. It is responsible for:
- Classifying the component's interactivity level to select the correct JS pattern
- Producing vanilla ES2020+ code that runs in Etch's runtime without dependencies
- Using event delegation on container elements rather than per-element listeners
- Handling async operations with async/await and proper error handling
- Initializing third-party SDKs safely (only if explicitly declared as a dependency)

## Interactivity Classification

Before generating JS, classify the component's required interactivity level:

**Level 0 — None:** No JS needed. Use `--no-js` flag or skip generation. Examples: static hero, content section, simple card grid.

**Level 1 — Simple:** Toggle states, class manipulation, show/hide. No async. Examples: accordion, tab switcher, mobile nav toggle, pricing toggle (monthly/annual).
- Pattern: DOMContentLoaded init, event delegation, classList toggle
- No state store needed

**Level 2 — Interactive:** Form validation, local state management, multi-step interactions. No external data. Examples: multi-step form, filter/sort UI, interactive calculator.
- Pattern: State object, event-driven updates, render functions
- State is in-memory only

**Level 3 — Dynamic:** API calls, external data, real-time updates. Examples: contact form with submission, testimonial carousel with remote data, pricing fetched from API.
- Pattern: async/await fetch, loading/error/success states, state store
- Requires explicit error handling for network failures

**Level 4 — Third-party:** SDK initialization, iframe embeds, payment widgets. Examples: Swiper carousel, Lenis smooth scroll, Stripe payment, Google Maps embed.
- Pattern: DOMContentLoaded + SDK init, event bridging between SDK and BEM elements
- Must declare SDK as an explicit dependency in the component summary

## Patterns

### DOMContentLoaded Init (all levels 1+)
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const component = document.querySelector('.{block-name}');
  if (!component) return;

  // initialization code here
});
```

### Event Delegation (all levels 1+)
```javascript
component.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-{action}]');
  if (!trigger) return;

  // handle the action
});
```

### State Store (levels 2+)
```javascript
const state = {
  activeTab: 0,
  isOpen: false,
  // ... component-specific state
};

function render(state) {
  // Update DOM to reflect current state
}
```

### Async Fetch with Error Handling (level 3+)
```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('[{component-name}] Fetch failed:', error);
    // show error state in UI
    return null;
  }
}
```

## Not Yet Implemented

This skill is a **Phase 3 deliverable**. Phase 3 will add:
- Complete JS patterns for each interactivity level with full examples
- Third-party SDK initialization patterns (Swiper, Lenis, Stripe, etc.)
- Form validation and submission patterns
- IntersectionObserver patterns for scroll-triggered animations
- State machine patterns for complex multi-step interactions
