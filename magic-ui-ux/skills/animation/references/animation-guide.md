# Animation Reference Guide

Concrete, copy-paste-ready animation patterns for the four supported libraries. Each pattern includes exact timing values, easing functions, and usage context.

## 1. Entrance Animations (Framer Motion)

### Fade Up

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

- **Duration:** 0.5-0.7s
- **Easing:** `"easeOut"` or `[0.0, 0.0, 0.2, 1]`
- **Use when:** Hero headlines, CTA blocks, any element that should feel like it's rising into place

### Fade In

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
```

- **Duration:** 0.3-0.5s
- **Easing:** `"easeOut"`
- **Use when:** Testimonials, supporting text, subtle reveals that should not distract from primary content

### Scale In

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
>
```

- **Duration:** 0.4-0.6s
- **Easing:** `[0.0, 0.0, 0.2, 1]` (decelerate)
- **Use when:** Pricing cards, modal dialogs, elements that should feel like they're stepping forward

### Slide In (Left/Right)

```jsx
// From left
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

// From right
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

- **Duration:** 0.5-0.7s
- **Easing:** `"easeOut"`
- **Use when:** Side-by-side comparisons, alternating feature rows, before/after layouts

### Stagger Children

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={childVariants}>Item 1</motion.div>
  <motion.div variants={childVariants}>Item 2</motion.div>
  <motion.div variants={childVariants}>Item 3</motion.div>
</motion.div>
```

- **Stagger delay:** 0.08-0.15s between children
- **Use when:** Feature grids, navigation items, card lists, any group that benefits from sequential reveal

### Viewport Trigger (Scroll-Based Entrance)

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

- **`once: true`:** Animate only the first time the element enters the viewport
- **`margin: "-100px"`:** Trigger 100px before the element reaches the viewport edge (prevents popping in at the last moment)
- **Use when:** Any below-the-fold content that should animate on scroll

### Section-Type-to-Entrance Mapping

| Section Type | Recommended Entrance | Why |
|---|---|---|
| hero | fade-up, stagger children | Draws attention to headline first, then supporting elements |
| features | stagger grid items | Progressive reveal reduces cognitive load |
| testimonials | fade-in | Subtle appearance maintains reading flow |
| pricing | scale-in | Slight emphasis signals importance |
| CTA | fade-up with delay | Arrives after surrounding content establishes context |
| footer | none or fade-in | Low priority, minimal distraction |
| stats/metrics | fade-up | Clean reveal before counter animation starts |
| portfolio | stagger grid items | Gallery items appear progressively |
| about/team | fade-in, stagger | Natural flow for biographical content |
| FAQ | fade-in | Minimal distraction, focus on readability |

---

## 2. Scroll Behaviors (GSAP + ScrollTrigger)

### Parallax Background

```js
gsap.to(element, {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: element,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
```

- **yPercent range:** -15 to -30 depending on intensity desired
- **Use when:** Hero background images, full-bleed section backgrounds, decorative layers

### Progress Reveal (Scrub-Based)

```js
gsap.fromTo(
  element,
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "top 50%",
      scrub: 0.5,
    },
  }
);
```

- **`scrub: 0.5`:** Smooth scrub with 0.5s lag (feels more natural than `scrub: true`)
- **Use when:** Content that should feel tied to scroll position rather than triggering once

### Pin Sections (Scroll-Locked Storytelling)

```js
gsap.to(pinnedContent, {
  x: "-300%", // or whatever the total scroll distance
  ease: "none",
  scrollTrigger: {
    trigger: sectionWrapper,
    pin: true,
    start: "top top",
    end: "+=300%",
    scrub: 1,
  },
});
```

- **Use when:** Horizontal scroll sections, step-by-step storytelling, product feature walkthroughs
- **Caution:** Pinning changes scroll behavior -- use sparingly (1 per page maximum)

### Counter Animations

```js
gsap.to(counter, {
  innerText: targetValue,
  duration: 1.5,
  ease: "power2.out",
  snap: { innerText: 1 },
  scrollTrigger: {
    trigger: counter,
    start: "top 80%",
    once: true,
  },
});
```

- **Duration:** 1.0-2.0s
- **Use when:** Stats sections, social proof numbers, achievement metrics

### ScrollTrigger Configuration Reference

| Property | Value | Meaning |
|---|---|---|
| `start` | `"top bottom"` | Animation starts when element's top hits viewport bottom |
| `start` | `"top 80%"` | Animation starts when element's top is 80% down viewport |
| `start` | `"top top"` | Animation starts when element's top hits viewport top |
| `end` | `"bottom top"` | Animation ends when element's bottom hits viewport top |
| `end` | `"+=100%"` | Animation ends after scrolling 100% of viewport height past start |
| `scrub` | `true` | Animation tied directly to scroll position (1:1) |
| `scrub` | `0.5` | Animation follows scroll with 0.5s smooth lag |
| `once` | `true` | Animation fires once, then ScrollTrigger is killed |
| `pin` | `true` | Element is pinned in place during scroll range |
| `markers` | `true` | Shows start/end markers (development only -- remove in production) |

### Section-Type-to-Scroll-Behavior Mapping

| Section Type | Recommended Scroll Behavior | Configuration |
|---|---|---|
| hero | parallax background image | `scrub: true`, `yPercent: -30` |
| features | progressive reveal on scroll | `start: "top 80%"`, `once: true` |
| stats/metrics | counter animation | `start: "top 80%"`, `once: true` |
| testimonials | fade sequence | stagger on scroll enter |
| portfolio | parallax + reveal | `scrub: true` for images |
| CTA | none or subtle parallax | keep simple to avoid distraction from action |

---

## 3. Page Transitions (Swup.js)

**Note:** Swup handles SPA-like page transitions for multi-page sites. Recommend for multi-page projects only. Single-page apps should use Framer Motion's `AnimatePresence` instead.

### Basic Setup

```js
import Swup from "swup";
import SwupFadeTheme from "@swup/fade-theme";

const swup = new Swup({
  animationSelector: '[class*="transition-"]',
  plugins: [new SwupFadeTheme()],
});
```

### Fade Transition

```css
.transition-fade {
  opacity: 1;
  transition: opacity 300ms ease;
}

html.is-animating .transition-fade {
  opacity: 0;
}
```

- **Duration:** 250-350ms
- **Best for:** Minimalism, Clean Modern UI styles

### Slide Transition

```css
.transition-slide {
  transform: translateX(0);
  opacity: 1;
  transition: transform 400ms ease, opacity 400ms ease;
}

html.is-animating .transition-slide {
  transform: translateX(-20px);
  opacity: 0;
}

html.is-leaving .transition-slide {
  transform: translateX(20px);
}
```

- **Duration:** 350-450ms
- **Best for:** Bold/Vibrant, Dark Mode Premium UI styles

### Cross-Fade Transition

```css
.transition-crossfade {
  opacity: 1;
  transition: opacity 500ms ease;
}

html.is-animating .transition-crossfade {
  opacity: 0;
}

html.is-rendering .transition-crossfade {
  animation: fadeIn 500ms ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

- **Duration:** 400-600ms
- **Best for:** Editorial, Organic/Rounded UI styles

### Swup CSS Class Lifecycle

1. `html.is-changing` -- Transition started
2. `html.is-animating` -- Old page animating out
3. `html.is-leaving` -- Old page about to be removed
4. `html.is-rendering` -- New page rendering in
5. Classes removed -- Transition complete

---

## 4. Smooth Scroll (Lenis)

### Basic Setup

```js
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

### GSAP Integration

```js
import { ScrollTrigger } from "gsap/ScrollTrigger";

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
```

This replaces the basic RAF loop -- GSAP's ticker manages Lenis updates for synchronized animations.

### Anchor Scrolling

```js
lenis.scrollTo("#section-id", {
  offset: -80, // Account for fixed header
  duration: 1.2,
});
```

### Duration and Easing by Content Type

| Content Type | Duration | Easing Character | Rationale |
|---|---|---|---|
| Long-form content (blog, docs) | 1.0-1.2s | Gentle | Readers need control, not theatrics |
| Portfolio / showcase | 1.4-1.6s | Smooth, luxurious | Slower scroll suggests premium, gives images breathing room |
| E-commerce / product pages | 0.8-1.0s | Snappy | Users scanning products need responsive scroll |
| Landing pages | 1.0-1.4s | Moderate | Balance between engagement and navigation speed |

---

## 5. Psychology-Animation Mapping

Map psychology skills applied in UX briefs to animation behaviors.

| Psychology Skill | Animation Recommendation | Rationale |
|---|---|---|
| cognitive-load | Stagger reveals, max 3 simultaneous animations | Prevents overwhelm by limiting concurrent visual changes |
| progressive-disclosure | Scroll-triggered reveals, accordion animations | Controls information flow -- content appears only when user is ready |
| curiosity-gap | Partial reveals on scroll, peek animations | Teases content below fold, encouraging continued scrolling |
| visual-cues-cta | Subtle pulse or glow on CTA, delayed entrance | Draws eye to action element without being obnoxious |
| halo-effect | Smooth, premium-feeling transitions (longer duration, refined easing) | Reinforces quality perception through motion elegance |
| trust-psychology | Minimal, predictable animations -- no surprises | Builds confidence through consistent, expected behavior |
| social-proof | Counter animations for metrics, card reveals for testimonials | Adds dynamism to proof points, making numbers feel earned |
| hicks-law | Sequential reveal of options, clear focus states | Guides user through choices one at a time |
| loss-aversion | Urgency-suggesting animations (countdown timers, fading availability) | Motion reinforces scarcity without being manipulative |
| cognitive-fluency | Simple, predictable motion paths (straight lines, consistent timing) | Easy-to-process animations support easy-to-process content |
| fogg-behavior-model | Triggered animations on user action (hover, click), micro-interactions | Rewards behavior with visual feedback, reinforcing triggers |
| hooked-model | Reward micro-animations (checkmarks, confetti, progress bars) | Variable reward signals keep users engaged |
| curiosity-gap | Scroll-linked progress indicators, partial content reveals | Information gaps drive scrolling behavior |
| status-quo-bias | Default state animations (pre-selected, pre-expanded), subtle transitions | Supports defaults without jarring changes |

---

## Don'ts

1. **No animation on body text during reading.** Once text is visible, it stays still. Animating readable content impairs comprehension.
2. **No infinite animation loops** except for loading states and intentional ambient effects (e.g., subtle background gradients).
3. **No entrance animations longer than 1 second.** After 1s, animation feels sluggish. Keep entrances between 0.3-0.7s.
4. **No layout-shifting animations.** Use `transform` and `opacity` only. Never animate `width`, `height`, `margin`, `padding`, or `top`/`left` -- these trigger layout recalculation and cause jank.
5. **Always respect `prefers-reduced-motion`.** Wrap animations in a media query check:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```js
// JS detection
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  // Disable Lenis smooth scroll
  // Skip GSAP ScrollTrigger animations
  // Use Framer Motion's reduced motion mode
}
```

6. **No more than 3 simultaneous animations** in any viewport. Cognitive load applies to motion as much as content.
7. **No competing motion directions.** If elements enter from the left, don't have adjacent elements entering from the right simultaneously.
