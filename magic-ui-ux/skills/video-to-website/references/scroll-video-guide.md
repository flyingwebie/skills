# Scroll-Video Reference Guide

Concrete, copy-paste-ready patterns for building scroll-driven video-style websites. Canvas frame rendering, scroll-to-frame mapping, GSAP ScrollTrigger pin/scrub for sequences, overlay choreography, and Lenis integration.

## 1. Canvas Frame Rendering

### HTML5 Canvas Setup

```html
<div class="video-section">
  <canvas id="hero-canvas"></canvas>
  <div class="overlay-content">
    <!-- Text, CTAs positioned over canvas -->
  </div>
</div>
```

```js
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

// Responsive canvas sizing -- fill viewport with cover behavior
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
```

- **Canvas fills viewport:** Set width/height to `window.innerWidth` / `window.innerHeight`
- **Cover behavior:** Calculate aspect ratio manually -- scale and center the frame image to fill canvas without distortion
- **Never use CSS scaling on canvas** -- always set `canvas.width` and `canvas.height` directly

### Frame Loading and Preloading

```js
const totalFrames = 300;
const frames = [];
let loadedCount = 0;

function preloadFrames(pattern, count) {
  return new Promise((resolve) => {
    for (let i = 1; i <= count; i++) {
      const img = new Image();
      const num = String(i).padStart(4, "0");
      img.src = pattern.replace("{NNNN}", num);
      img.onload = () => {
        loadedCount++;
        // Optional: update progress bar
        const progress = loadedCount / count;
        if (loadedCount === count) resolve(frames);
      };
      frames[i - 1] = img;
    }
  });
}

// Usage
preloadFrames("frames/hero/frame-{NNNN}.webp", 300);
```

- **Naming convention:** `frame-0001.webp` through `frame-NNNN.webp` (zero-padded 4 digits)
- **Format:** WebP preferred for size; JPEG fallback for older browsers
- **Preload is mandatory** -- unloaded frames cause visible blanks during scroll

### Drawing Frames

```js
function drawFrame(index) {
  const img = frames[index];
  if (!img || !img.complete) return;

  // Cover behavior: scale to fill canvas
  const scale = Math.max(
    canvas.width / img.naturalWidth,
    canvas.height / img.naturalHeight
  );
  const x = (canvas.width - img.naturalWidth * scale) / 2;
  const y = (canvas.height - img.naturalHeight * scale) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
}
```

- **Use `drawImage()` with manual scaling** for cover behavior
- **Clear canvas before each draw** with `clearRect()`
- **Performance:** Only draw inside `requestAnimationFrame` or GSAP ticker -- never on raw scroll events

### Poster Frame

```js
// Show first frame immediately while remaining frames preload
const poster = new Image();
poster.src = "frames/hero/frame-0001.webp";
poster.onload = () => drawFrame(0);
```

- **Always show a poster frame** before the sequence is interactive
- **Use when:** Initial page load, reduced motion fallback, slow connections

---

## 2. Scroll-to-Frame Mapping

### Core Formula

```js
const currentFrame = Math.floor(scrollProgress * (totalFrames - 1));
```

- `scrollProgress` ranges from `0.0` (start) to `1.0` (end)
- Maps linearly to frame indices `0` through `totalFrames - 1`

### GSAP ScrollTrigger Integration

```js
ScrollTrigger.create({
  trigger: ".video-section",
  start: "top top",
  end: "+=500%",
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    const frame = Math.floor(self.progress * (totalFrames - 1));
    drawFrame(frame);
  },
});
```

- **`self.progress`** provides 0-1 scroll progress automatically
- **`scrub: 1`** adds 1s smoothing lag for cinematic feel
- **`scrub: 0.5`** for more responsive scrubbing
- **`scrub: true`** for exact 1:1 scroll-to-frame (can feel jerky)

### Frame Interpolation

- **Standard approach:** Draw every frame, let GSAP scrub handle smoothing
- **Skip frames:** Only needed if frame count exceeds 600 -- use `Math.round()` instead of `Math.floor()` for nearest-frame rounding
- **High-velocity scroll:** GSAP scrub naturally smooths rapid scrolling -- no custom interpolation needed

### Scroll Distance Calculation

| Intensity | Scroll Distance | Feel |
|-----------|----------------|------|
| Restrained | 200-300vh | Quick, efficient scrub |
| Moderate | 300-400vh | Balanced, comfortable pace |
| Expressive | 400-500vh | Cinematic, slow reveal |

- **Formula:** `scrollDistance = frameCount / framesPerViewportHeight`
- **Rule of thumb:** 1vh per frame for moderate intensity (300 frames = 300vh)
- **Never exceed 500vh** per sequence -- users lose patience

### Multiple Sequences

```js
// Sequence 1: Hero product reveal (frames 1-300)
ScrollTrigger.create({
  trigger: ".sequence-1",
  start: "top top",
  end: "+=400%",
  pin: true,
  scrub: 1,
  onUpdate: (self) => drawFrame(Math.floor(self.progress * 299)),
});

// Sequence 2: Detail zoom (frames 1-200, separate image set)
ScrollTrigger.create({
  trigger: ".sequence-2",
  start: "top top",
  end: "+=300%",
  pin: true,
  scrub: 1,
  onUpdate: (self) => drawDetailFrame(Math.floor(self.progress * 199)),
});
```

- **Each sequence gets its own canvas, frame array, and ScrollTrigger**
- **Maximum 3 sequences per page** -- more creates excessive load times

---

## 3. GSAP ScrollTrigger Pin/Scrub for Frame Sequences

### Pin Configuration

```js
ScrollTrigger.create({
  trigger: ".video-section",
  start: "top top",
  end: "+=500%", // 5x viewport height of scroll distance
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    const frame = Math.floor(self.progress * (totalFrames - 1));
    drawFrame(frame);
  },
});
```

- **`pin: true`** locks the canvas in place while the user scrolls through the frame sequence
- **`end: "+=NNNvh"` or `"+=NNNN"`** controls total scroll distance
- **Pinning adds scroll height** equal to the `end` value -- the page grows by that amount

### Scrub Values

| Value | Behavior | Use When |
|-------|----------|----------|
| `scrub: true` | 1:1 scroll-to-animation | Technical demos, precise control needed |
| `scrub: 0.5` | 0.5s smooth lag | Responsive but polished |
| `scrub: 1` | 1s smooth lag | Cinematic feel, Apple-style |
| `scrub: 2` | 2s smooth lag | Very slow, dreamy (rare) |

- **Recommended default:** `scrub: 1` for video-style pages

### Nested Timelines with Overlays

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-section",
    start: "top top",
    end: "+=500%",
    pin: true,
    scrub: 1,
  },
});

// Frame rendering via onUpdate on the same ScrollTrigger
ScrollTrigger.create({
  trigger: ".video-section",
  start: "top top",
  end: "+=500%",
  scrub: 1,
  onUpdate: (self) => {
    const frame = Math.floor(self.progress * (totalFrames - 1));
    drawFrame(frame);
  },
});

// Overlay content timeline (synced to same scroll range)
tl.fromTo(".title", { opacity: 0 }, { opacity: 1 }, 0.05)   // Fade in at 5% progress
  .to(".title", { opacity: 0 }, 0.18)                         // Fade out at 18%
  .fromTo(".feature-1", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.2)
  .to(".feature-1", { opacity: 0 }, 0.45)
  .fromTo(".feature-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.5)
  .to(".feature-2", { opacity: 0 }, 0.75)
  .fromTo(".cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0.8);
```

- **Timeline positions are 0-1** when using `scrub` -- they map to scroll progress
- **Text fades in at progress 0.2-0.3, holds until 0.6, fades out by 0.7** -- typical content overlay timing
- **Use `fromTo` for precise control** over initial and final states

### End Value Calculations

```js
// Viewport-height based (preferred)
end: "+=400%"   // 4x viewport height
end: "+=500vh"  // Same as +=500% in most cases

// Pixel-based (for precise control)
end: "+=4000"   // 4000px of scroll distance

// Dynamic calculation
const scrollDistance = totalFrames * pixelsPerFrame;
end: `+=${scrollDistance}`
```

---

## 4. Section Choreography for Video-Style Pages

### Content Overlay Timing

Overlay content (text, CTAs, badges) appears and disappears relative to frame progress. Each overlay is absolutely positioned over the canvas.

### Choreography Table Format

| Scroll Progress | Frame Range | Content Visible | Animation |
|----------------|-------------|-----------------|-----------|
| 0.0-0.2 | 1-60 | Title + tagline | Fade in at 0.05, hold |
| 0.2-0.5 | 60-150 | Feature callout 1 | Fade in at 0.2, out at 0.45 |
| 0.5-0.8 | 150-240 | Feature callout 2 | Fade in at 0.5, out at 0.75 |
| 0.8-1.0 | 240-300 | CTA section | Fade in at 0.8, hold |

- **Use when:** Planning content timing for each video sequence section
- **Rule:** Never show more than 2 overlay elements simultaneously
- **Overlap transitions:** Brief overlap (0.05 progress) between outgoing and incoming content is acceptable

### GSAP Timeline for Overlays

```js
const overlayTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-section",
    start: "top top",
    end: "+=500%",
    scrub: 1,
  },
});

// Title: visible 0.0 to 0.2
overlayTl
  .fromTo(".title", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.05 }, 0.02)
  .to(".title", { autoAlpha: 0, duration: 0.03 }, 0.17)

  // Feature 1: visible 0.2 to 0.5
  .fromTo(".feature-1", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.05 }, 0.2)
  .to(".feature-1", { autoAlpha: 0, duration: 0.03 }, 0.45)

  // Feature 2: visible 0.5 to 0.8
  .fromTo(".feature-2", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.05 }, 0.5)
  .to(".feature-2", { autoAlpha: 0, duration: 0.03 }, 0.75)

  // CTA: visible 0.8 to end
  .fromTo(".cta", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.05 }, 0.8);
```

- **`autoAlpha`** is preferred over `opacity` -- it also sets `visibility: hidden` at 0, removing the element from tab order
- **`duration` in timeline** is relative to total scroll progress (0.05 = 5% of scroll range for the transition)

### Content Positioning

```css
.video-section {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.video-section canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none; /* Allow scroll through overlays */
}

.overlay-content .cta {
  pointer-events: auto; /* Re-enable clicks on interactive elements */
}

.overlay-content .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay-content .feature-1 {
  position: absolute;
  bottom: 15%;
  left: 10%;
}
```

- **Canvas at z-index 1, overlays at z-index 2** (or higher)
- **`pointer-events: none`** on overlay container to allow scroll interaction
- **`pointer-events: auto`** on CTAs and buttons to restore interactivity

---

## 5. Lenis Integration for Scroll-Video Pages

### Optimized Configuration

```js
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.6,     // Longer for cinematic feel (1.4-1.8s)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
  smoothTouch: false, // Disable on touch -- let native momentum handle it
});
```

- **Duration 1.4-1.8s** for scroll-video pages (longer than standard 1.0-1.2s)
- **`smoothTouch: false`** -- native touch scrolling performs better with canvas rendering

### GSAP Ticker Integration

```js
import { ScrollTrigger } from "gsap/ScrollTrigger";

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
```

- **Same pattern as animation-guide.md** -- GSAP ticker manages Lenis updates
- **`lagSmoothing(0)`** prevents GSAP from smoothing over dropped frames (important for accurate scroll-to-frame mapping)

### Duration by Intensity

| Intensity | Lenis Duration | Feel |
|-----------|---------------|------|
| Restrained | 1.0-1.2s | Responsive, minimal inertia |
| Moderate | 1.2-1.4s | Balanced, natural momentum |
| Expressive | 1.4-1.8s | Cinematic, luxurious glide |

### Touch Device Considerations

- **Disable Lenis smooth scroll on touch devices** -- native momentum scrolling is more reliable for canvas rendering
- **Detect touch:** `"ontouchstart" in window` or `navigator.maxTouchPoints > 0`
- **Canvas rendering still works** on touch -- frame drawing is independent of scroll library

### Scroll Snapping Between Sections

```js
// After a video sequence ends, snap to the next section
lenis.scrollTo("#next-section", {
  offset: 0,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

- **Use when:** Transitioning from a pinned video sequence to standard content
- **Trigger:** Listen for ScrollTrigger `onLeave` callback on the video section

---

## 6. Multi-Section Video Page Structure

### Page Anatomy

```
[Hero Video Sequence]     <- Pinned, frame scrub, overlays
[Content Section]         <- Standard scroll, entrance animations
[Video Sequence 2]        <- Pinned, second frame set, overlays
[Content Section]         <- Standard scroll
[CTA / Footer]            <- Standard scroll
```

- **Maximum 3 video sequences per page**
- **Alternate between pinned sequences and standard scroll** -- never stack two pinned sections back-to-back

### Transition Between Pinned and Normal Sections

```js
// Video section ScrollTrigger with onLeave
ScrollTrigger.create({
  trigger: ".video-section-1",
  start: "top top",
  end: "+=400%",
  pin: true,
  scrub: 1,
  onUpdate: (self) => drawFrame(Math.floor(self.progress * 299)),
  onLeave: () => {
    // Ensure last frame is drawn
    drawFrame(totalFrames - 1);
  },
  onLeaveBack: () => {
    // Ensure first frame is drawn when scrolling back up
    drawFrame(0);
  },
});
```

- **`onLeave`** draws the final frame before unpinning
- **`onLeaveBack`** resets to first frame when user scrolls back

### ScrollTrigger `endTrigger` for Complex Layouts

```js
ScrollTrigger.create({
  trigger: ".video-section",
  endTrigger: ".next-section",
  start: "top top",
  end: "top top",
  pin: true,
  scrub: 1,
});
```

- **Use when:** Scroll distance should be determined by the distance to the next section, not a fixed value
- **Simpler for dynamic layouts** where section heights may change

### Z-Index Management

| Layer | Z-Index | Content |
|-------|---------|---------|
| Canvas background | 1 | Frame rendering surface |
| Overlay content | 2 | Text, CTAs, badges |
| Navigation | 10 | Fixed header/nav (always on top) |
| Loading screen | 100 | Preload progress indicator |

---

## 7. Performance Considerations

### Image Optimization

| Device | Resolution | Format | Frame Size (approx) |
|--------|-----------|--------|-------------------|
| Desktop | 1920x1080 | WebP | 40-60KB |
| Tablet | 1280x720 | WebP | 25-40KB |
| Mobile | 960x540 | WebP | 15-25KB |

- **Always use WebP** -- 30-50% smaller than JPEG at equivalent quality
- **Quality setting:** 80-85% for WebP (balance of size and visual fidelity)

### Lazy Loading by Section

```js
// Only preload frames for the upcoming section
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      preloadFrames(entry.target.dataset.framePattern, entry.target.dataset.frameCount);
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: "200%" }); // Start loading 2 viewports ahead

document.querySelectorAll(".video-section").forEach((section) => {
  observer.observe(section);
});
```

- **Preload the first sequence immediately** (hero) -- it must be ready on page load
- **Lazy-load subsequent sequences** when user approaches them (2 viewport margin)

### Memory Management

```js
// Release frames when section scrolls past
ScrollTrigger.create({
  trigger: ".video-section-1",
  start: "bottom top",
  onEnter: () => {
    // Section is fully past viewport -- release frame references
    heroFrames.length = 0;
  },
});
```

- **Release frame arrays** after a section scrolls completely past
- **Canvas itself uses minimal memory** -- it's the Image objects that consume RAM
- **Budget:** 300 frames at 50KB = ~15MB per sequence in memory

### Mobile Strategy

| Approach | When | Implementation |
|----------|------|---------------|
| Reduced frame count | Frame count > 200 | Use every 2nd or 3rd frame, adjust mapping formula |
| Lower resolution | Always on mobile | Serve 960x540 via responsive loading |
| Static fallback | Frame count > 400 or slow device | Replace canvas with poster image + CSS parallax |

```js
// Reduced frame count for mobile
const isMobile = window.innerWidth < 768;
const mobileFrameSkip = isMobile ? 2 : 1;
const effectiveFrames = Math.ceil(totalFrames / mobileFrameSkip);

// Adjusted mapping
const frame = Math.floor(self.progress * (effectiveFrames - 1)) * mobileFrameSkip;
```

### Total Asset Budget

| Sequences | Frames | Size per Frame | Total |
|-----------|--------|---------------|-------|
| 1 | 300 | 50KB | ~15MB |
| 2 | 500 | 50KB | ~25MB |
| 3 | 700 | 50KB | ~35MB |

- **Target:** Under 25MB total for all sequences combined
- **Exceeding 35MB** requires lazy loading and memory management strategies

---

## 8. Don'ts

1. **No autoplay video elements.** Use canvas frame rendering for scroll control. `<video>` elements cannot be scrubbed precisely with scroll position.
2. **No frame sequences longer than 600 frames per section.** Performance ceiling -- memory usage becomes problematic, and the scroll distance required makes the experience tedious.
3. **No full-resolution frames on mobile.** Always provide a mobile-optimized sequence (960x540 or smaller) or replace with static fallback.
4. **No drawing frames outside requestAnimationFrame.** Drawing on raw scroll events causes jank. Use GSAP ticker or rAF for all canvas draw calls.
5. **No skipping the preload step.** Unloaded frames cause visible blank flashes during scroll. Always preload and show a poster frame while loading.
6. **Always provide a static fallback image** for the canvas (poster frame at frame 1). Shown during preload and for browsers with canvas issues.
7. **Always respect `prefers-reduced-motion`.**

```css
@media (prefers-reduced-motion: reduce) {
  .video-section canvas {
    /* Show poster frame only */
  }
  .overlay-content * {
    animation: none !important;
    transition: none !important;
  }
}
```

```js
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  // Show poster frame (first frame) statically
  drawFrame(0);
  // Show all overlay content without animation
  document.querySelectorAll(".overlay-content > *").forEach((el) => {
    el.style.opacity = "1";
    el.style.visibility = "visible";
  });
  // Disable Lenis smooth scroll
  // Skip ScrollTrigger pin/scrub -- use native scroll
}
```

8. **No more than 3 video sequences per page.** Each sequence adds 15-25MB of assets. Three sequences is the practical ceiling for acceptable load times.
9. **No stacking pinned sections back-to-back.** Always insert a standard scrolling section between video sequences to give users a scroll "rest."
10. **No canvas rendering without a loading indicator.** Users need feedback that frames are loading -- show a progress bar or percentage.
