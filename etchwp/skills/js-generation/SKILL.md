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

**Level 0 — None:** No JS needed. Skip generation entirely. Do not write `script.js`. Set `hasJs: false` and `files.js: null` in registry.
Examples: static hero, features grid, CTA section, footer (year update is a micro-interaction handled inline in HTML — not a script.js file).

**Level 1 — Simple:** Toggle states, class manipulation, show/hide. No async. Examples: mobile nav toggle, pricing period toggle, testimonial carousel navigation.
- Pattern: DOMContentLoaded init, event delegation, classList toggle
- No state store needed

**Level 2 — Interactive:** Form validation, local state management, multi-step interactions. No external data. Examples: multi-step form, filter/sort UI, interactive calculator.
- Pattern: State object, event-driven updates, render functions
- State is in-memory only

**Level 3 — Dynamic:** API calls, external data, real-time updates. Examples: contact form with submission, live pricing fetched from API.
- Pattern: async/await fetch, loading/error/success states, state store
- Requires explicit error handling for network failures

**Level 4 — Third-party:** SDK initialization, iframe embeds, payment widgets. Examples: Swiper carousel, Lenis smooth scroll, Stripe payment, Google Maps embed.
- Pattern: DOMContentLoaded + SDK init, event bridging between SDK and BEM elements
- Must declare SDK as an explicit dependency in the component summary

## Interactivity Decision Tree

Map component type to interactivity level before Step 7 executes:

| Component Type | Default Level | Pattern |
|---------------|---------------|---------|
| `hero` | Level 0 | Skip JS entirely |
| `features` | Level 0 | Skip JS entirely |
| `cta` | Level 0 | Skip JS entirely |
| `footer` | Level 0 | Skip JS entirely — year update is inline HTML, not script.js |
| `header` | Level 1 | Mobile nav toggle |
| `pricing` | Level 1 | Monthly/annual period toggle — generate when description mentions toggle, switch, billing, or by default |
| `testimonials` | Level 1 | Carousel navigation — generate by default |
| `custom` | Infer from description | See keyword rules below |

**Custom type keyword inference:**
- Description contains "toggle", "menu", "dropdown", "accordion", "tab", "carousel", "slider", "filter", "sort", "form" → Level 1+
- Description contains none of the above → Level 0 (no JS)

**Footer micro-interaction:** The `<span id="current-year">2024</span>` in the footer template can be updated with an inline `<script>` tag — this is a one-liner, not a `script.js` file. Footer remains Level 0.

## Patterns

### DOMContentLoaded Init (all levels 1+)

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const component = document.querySelector('.{block-name}');
  if (!component) return;

  // Cache DOM references at init time — never inside event handlers
  const toggle = component.querySelector('.{block-name}__toggle');
  if (!toggle) return;

  // initialization and event binding here
});
```

### Event Delegation (all levels 1+)

```javascript
component.addEventListener('click', (event) => {
  const trigger = event.target.closest('.{block-name}__{element}');
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

## Level 1 Patterns — Complete Examples

### Level 1A — Mobile Nav Toggle (header/nav component)

Use this pattern for `header` type components. The mobile toggle and mobile nav elements are already in the HTML template with ARIA attributes.

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

### Level 1B — Pricing Period Toggle (pricing component)

Use this pattern for `pricing` type components. Requires HTML additions — see HTML Requirements section below.

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

### Level 1C — Testimonial Carousel (testimonials component)

Use this pattern for `testimonials` type components. Requires HTML and CSS additions — see sections below.

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

## ARIA State Management

Always update trigger and panel ARIA attributes together in a single function. Never update one without the other — this prevents desync where screen readers announce contradictory states.

**The togglePanel pattern:**

```javascript
function togglePanel(trigger, panel, isOpen) {
  // Update trigger: aria-expanded reflects the panel's new state
  trigger.setAttribute('aria-expanded', String(!isOpen));

  // Update panel: aria-hidden and hidden reflect its visibility
  panel.setAttribute('aria-hidden', String(isOpen));

  if (isOpen) {
    panel.setAttribute('hidden', '');
  } else {
    panel.removeAttribute('hidden');
  }
}
```

**Critical attribute rules:**
- `aria-expanded` belongs on the **trigger** (button), not the panel
- `aria-hidden` and `hidden` belong on the **panel** (the element being shown/hidden)
- `hidden` attribute is the actual visibility mechanism — CSS `:not([hidden])` can add transitions
- Update `aria-label` on toggle buttons when state changes: "Open navigation menu" / "Close navigation menu"
- After closing any panel, call `.focus()` on the trigger that opened it — never leave focus on a hidden element

## Keyboard Navigation

Required keyboard interactions per component type. Note: `<button>` elements natively fire `click` on Enter/Space — only add `keydown` handlers for non-native behaviors.

| Component | Key | Action | Handler Type |
|-----------|-----|--------|--------------|
| Header/Nav | `Escape` | Close mobile menu if open, return focus to toggle | `keydown` on container |
| Header/Nav | `Tab` | Natural focus order; trap inside open menu | Native browser |
| Pricing toggle | `Enter`/`Space` | Toggle monthly/annual | Native `<button>` click |
| Testimonial carousel | `ArrowLeft` | Navigate to previous slide | `keydown` on container |
| Testimonial carousel | `ArrowRight` | Navigate to next slide | `keydown` on container |
| Testimonial carousel | `Enter`/`Space` | Activate dot indicator | Native `<button>` click |
| All interactive | `Tab` | Natural focus order through interactive elements | Native browser |

**Escape handler pattern:**

```javascript
component.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu(component);
    // Return focus to the trigger that opened it
    component.querySelector('.{block-name}__toggle')?.focus();
  }
});
```

**Arrow key handler pattern (carousel):**

```javascript
component.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    goToSlide(currentIndex - 1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    goToSlide(currentIndex + 1);
  }
});
```

## HTML Requirements for Interactive Patterns

When JS is generated for a component type, these additional HTML elements and data attributes must be present. The generate pipeline's Step 7 must instruct Step 5 (HTML generation) to include these additions.

### Header/Nav — No additions needed

The header template in `section-patterns.md` already includes:
- `.site-header__mobile-toggle` button with `aria-expanded="false"` and `aria-label="Open navigation menu"`
- `.site-header__mobile-nav` with `aria-hidden="true"` and `hidden` attribute
- All required ARIA attributes for the mobile toggle pattern

### Pricing — Toggle group + data attributes required

Add a toggle group before the pricing cards:

```html
<div class="pricing__toggle" role="group" aria-label="Billing period">
  <button class="pricing__toggle-btn pricing__toggle-btn--active" data-period="monthly" aria-pressed="true" type="button">Monthly</button>
  <button class="pricing__toggle-btn" data-period="annual" aria-pressed="false" type="button">Annual</button>
</div>
```

Add data attributes to price and period elements:

```html
<span class="pricing__amount" aria-label="19 dollars per month" data-monthly="$19" data-annual="$15">$19</span>
<span class="pricing__period" aria-hidden="true" data-monthly="/month" data-annual="/year">/month</span>
```

### Testimonials — Carousel navigation required

Append carousel nav after the `.testimonials__grid` element. Generate one dot per testimonial item:

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

## CSS Requirements for Interactive Patterns

When JS is generated, these CSS rules must be added to the component's `style.css`. The generate pipeline's Step 7 must instruct Step 6 (CSS generation) to include these additions.

### All interactive components — :focus-visible

Add `:focus-visible` to every interactive element generated by JS:

```css
&__toggle-btn,
&__prev,
&__next,
&__dot {
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}
```

### Header/Nav — No additional CSS required

The `hidden` attribute approach needs no CSS transitions for v1. The mobile nav is shown/hidden via the `hidden` attribute.

### Pricing — Toggle button states

```css
&__toggle {
  display: flex;
  gap: var(--space-2xs);
}

&__toggle-btn {
  padding: var(--space-xs) var(--space-s);
  border: 1px solid var(--base-200);
  border-radius: var(--radius-s);
  background: transparent;
  color: var(--text);
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}

&__toggle-btn--active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}
```

### Testimonials — Scroll-snap carousel + dot states

Add scroll-snap to `.testimonials__grid`:

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

Add carousel nav and dot styles:

```css
&__carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-s);
  margin-top: var(--space-m);
}

&__prev,
&__next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--base-200);
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}

&__dots {
  display: flex;
  gap: var(--space-xs);
}

&__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--base-200);
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
}

&__dot--active {
  background: var(--primary);
}
```

## Anti-Patterns

1. **Generating JS for static components.** Hero, features grid, CTA, and footer sections need no JavaScript. Empty `script.js` files with only a `DOMContentLoaded` wrapper are noise. If Level 0, skip entirely.

2. **Using `querySelector` inside event handlers.** Cache all DOM references at initialization time (inside `DOMContentLoaded`), not per-event. Querying the DOM on every click is wasteful and error-prone.

3. **Inline event handlers in HTML.** Never use `onclick=""`, `onchange=""`, or similar attributes. All event binding happens in `script.js` via `addEventListener`.

4. **Framework patterns in vanilla JS.** No virtual DOM, no reactive state proxies, no component lifecycle methods. Keep it imperative and direct. The patterns here are sufficient for all Level 1 components.

5. **Forgetting cleanup responsibility.** If a component uses `setInterval`, `ResizeObserver`, or `IntersectionObserver`, document that cleanup is the consumer's responsibility. Etch handles component lifecycle — the generated code does not need to clean up on removal.
