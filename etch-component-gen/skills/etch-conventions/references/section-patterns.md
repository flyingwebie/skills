# Etch Section Patterns

HTML templates for all 7 section types. Every template follows the Etch structural hierarchy: `Section > Container > [content elements]`, uses BEM naming aligned with AutoBEM, includes ACSS utility classes where appropriate, and enforces accessibility defaults.

---

## 1. Hero Section

The primary page hero. Typically uses `<h1>` as it is the page's main heading.

```html
<!-- Hero Section: Section > Container > Heading + Text + CTA -->
<!-- Etch element mapping: Section -> section, Container -> div.__container,
     Heading -> h1, Text -> p, Anchor -> a -->
<section class="hero section--l" aria-label="Page hero">
  <div class="hero__container">
    <h1 class="hero__heading">Your Compelling Page Headline</h1>
    <p class="hero__text">Supporting text that expands on the headline and guides the visitor toward taking action.</p>
    <div class="hero__actions">
      <a href="#" class="hero__cta btn--primary btn--l">Get Started</a>
      <a href="#" class="hero__cta-secondary btn--outline btn--primary btn--l">Learn More</a>
    </div>
  </div>
</section>
```

**Notes:**
- `section--l` applies large section padding via ACSS utility class
- `aria-label` on `<section>` describes the region for screen readers
- `<h1>` is appropriate here — one per page
- Dual CTA pattern: primary + secondary (outline variant)

**With background image:**
```html
<section class="hero section--l" aria-label="Page hero">
  <div class="hero__background" aria-hidden="true">
    <img
      src="hero-bg.jpg"
      alt=""
      loading="eager"
      decoding="async"
      width="1920"
      height="1080"
      class="hero__bg-image"
    >
  </div>
  <div class="hero__container">
    <h1 class="hero__heading">Your Compelling Headline</h1>
    <p class="hero__text">Supporting descriptive text.</p>
    <a href="#" class="hero__cta btn--primary btn--l">Get Started</a>
  </div>
</section>
```

Note: Hero images use `loading="eager"` (not lazy) since they are above the fold.

---

## 2. Features Grid Section

Showcases product or service features in a grid layout.

```html
<!-- Features Grid Section: Section > Container > Grid of feature cards -->
<!-- Etch element mapping: Section -> section, Container -> div.__container,
     Loop -> ul/li or repeated divs, Image/Svg -> img/svg, Heading -> h3, Text -> p -->
<section class="features-grid section--l" aria-label="Features">
  <div class="features-grid__container">
    <h2 class="features-grid__heading">Why Choose Us</h2>
    <p class="features-grid__subheading">Everything you need to succeed</p>

    <ul class="features-grid__list grid--3 grid--m-2 grid--s-1 gap--m" role="list">

      <li class="features-grid__item">
        <div class="features-grid__icon" aria-hidden="true">
          <!-- Icon: Svg Etch element -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <!-- SVG path content -->
          </svg>
        </div>
        <h3 class="features-grid__item-heading">Feature Title</h3>
        <p class="features-grid__item-text">Brief description of this feature and how it benefits the user.</p>
      </li>

      <li class="features-grid__item">
        <div class="features-grid__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <!-- SVG path content -->
          </svg>
        </div>
        <h3 class="features-grid__item-heading">Feature Title</h3>
        <p class="features-grid__item-text">Brief description of this feature and how it benefits the user.</p>
      </li>

      <li class="features-grid__item">
        <div class="features-grid__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <!-- SVG path content -->
          </svg>
        </div>
        <h3 class="features-grid__item-heading">Feature Title</h3>
        <p class="features-grid__item-text">Brief description of this feature and how it benefits the user.</p>
      </li>

    </ul>
  </div>
</section>
```

**Notes:**
- `grid--3 grid--m-2 grid--s-1` provides responsive column collapse
- `role="list"` on `<ul>` is needed when CSS resets remove list styling
- Icons have `aria-hidden="true"` — they are decorative
- Feature headings use `<h3>` (section heading is `<h2>`)

---

## 3. Testimonials Section

Social proof with customer quotes.

```html
<!-- Testimonials Section: Section > Container > Testimonial cards -->
<!-- Etch element mapping: Section -> section, Container -> div.__container,
     Loop -> repeated article elements, Image -> img (avatar), Text -> blockquote -->
<section class="testimonials section--l" aria-label="Customer testimonials">
  <div class="testimonials__container">
    <h2 class="testimonials__heading">What Our Customers Say</h2>

    <div class="testimonials__grid grid--3 grid--m-2 grid--s-1 gap--m">

      <article class="testimonials__item" aria-label="Testimonial from Jane Doe">
        <blockquote class="testimonials__quote">
          <p class="testimonials__text">"This product completely transformed how we work. Highly recommend to any team looking to improve their workflow."</p>
          <footer class="testimonials__attribution">
            <img
              src="avatar-jane.jpg"
              alt="Jane Doe, CEO at Acme Corp"
              loading="lazy"
              decoding="async"
              width="48"
              height="48"
              class="testimonials__avatar"
            >
            <div class="testimonials__author-info">
              <cite class="testimonials__author-name">Jane Doe</cite>
              <span class="testimonials__author-role">CEO, Acme Corp</span>
            </div>
          </footer>
        </blockquote>
      </article>

      <article class="testimonials__item" aria-label="Testimonial from John Smith">
        <blockquote class="testimonials__quote">
          <p class="testimonials__text">"Exceptional quality and outstanding support. This is exactly what we needed for our project."</p>
          <footer class="testimonials__attribution">
            <img
              src="avatar-john.jpg"
              alt="John Smith, Marketing Director at Example Inc"
              loading="lazy"
              decoding="async"
              width="48"
              height="48"
              class="testimonials__avatar"
            >
            <div class="testimonials__author-info">
              <cite class="testimonials__author-name">John Smith</cite>
              <span class="testimonials__author-role">Marketing Director, Example Inc</span>
            </div>
          </footer>
        </blockquote>
      </article>

      <article class="testimonials__item" aria-label="Testimonial from Sarah Wilson">
        <blockquote class="testimonials__quote">
          <p class="testimonials__text">"Five stars, no hesitation. The results speak for themselves and the team was helpful throughout."</p>
          <footer class="testimonials__attribution">
            <img
              src="avatar-sarah.jpg"
              alt="Sarah Wilson, Product Manager at Tech Co"
              loading="lazy"
              decoding="async"
              width="48"
              height="48"
              class="testimonials__avatar"
            >
            <div class="testimonials__author-info">
              <cite class="testimonials__author-name">Sarah Wilson</cite>
              <span class="testimonials__author-role">Product Manager, Tech Co</span>
            </div>
          </footer>
        </blockquote>
      </article>

    </div>
  </div>
</section>
```

**Notes:**
- Use `<article>` for each testimonial — self-contained, reusable content unit
- `<blockquote>` for the quote, `<cite>` for the attribution name
- `<footer>` inside `<blockquote>` is correct semantic HTML for attribution
- Avatar images include full `alt` text with name and role

---

## 4. Pricing Section

Pricing plans in a comparison layout.

```html
<!-- Pricing Section: Section > Container > Pricing cards grid -->
<!-- Etch element mapping: Section -> section, Container -> div.__container,
     Loop -> repeated article elements, Heading -> h3, Text -> p, Anchor -> a -->
<section class="pricing section--l" aria-label="Pricing plans">
  <div class="pricing__container">
    <h2 class="pricing__heading">Simple, Transparent Pricing</h2>
    <p class="pricing__subheading">Choose the plan that fits your needs</p>

    <div class="pricing__grid grid--3 grid--m-1 gap--m">

      <article class="pricing__card" aria-label="Starter plan">
        <div class="pricing__card-header">
          <h3 class="pricing__plan-name">Starter</h3>
          <div class="pricing__price">
            <span class="pricing__amount" aria-label="19 dollars per month">$19</span>
            <span class="pricing__period" aria-hidden="true">/month</span>
          </div>
          <p class="pricing__description">Perfect for individuals and small teams just getting started.</p>
        </div>
        <ul class="pricing__features" role="list" aria-label="Starter plan features">
          <li class="pricing__feature">5 projects</li>
          <li class="pricing__feature">10 GB storage</li>
          <li class="pricing__feature">Email support</li>
        </ul>
        <a href="#" class="pricing__cta btn--secondary btn--l" aria-label="Get started with Starter plan">Get Started</a>
      </article>

      <article class="pricing__card pricing__card--popular" aria-label="Pro plan, most popular">
        <div class="pricing__popular-badge" aria-label="Most popular">Most Popular</div>
        <div class="pricing__card-header">
          <h3 class="pricing__plan-name">Pro</h3>
          <div class="pricing__price">
            <span class="pricing__amount" aria-label="49 dollars per month">$49</span>
            <span class="pricing__period" aria-hidden="true">/month</span>
          </div>
          <p class="pricing__description">For growing teams that need more power and collaboration.</p>
        </div>
        <ul class="pricing__features" role="list" aria-label="Pro plan features">
          <li class="pricing__feature">25 projects</li>
          <li class="pricing__feature">100 GB storage</li>
          <li class="pricing__feature">Priority support</li>
          <li class="pricing__feature">Team collaboration</li>
        </ul>
        <a href="#" class="pricing__cta btn--primary btn--l" aria-label="Get started with Pro plan">Get Started</a>
      </article>

      <article class="pricing__card" aria-label="Enterprise plan">
        <div class="pricing__card-header">
          <h3 class="pricing__plan-name">Enterprise</h3>
          <div class="pricing__price">
            <span class="pricing__amount">Custom</span>
          </div>
          <p class="pricing__description">Unlimited scale with dedicated support and custom integrations.</p>
        </div>
        <ul class="pricing__features" role="list" aria-label="Enterprise plan features">
          <li class="pricing__feature">Unlimited projects</li>
          <li class="pricing__feature">Unlimited storage</li>
          <li class="pricing__feature">Dedicated support</li>
          <li class="pricing__feature">Custom integrations</li>
          <li class="pricing__feature">SLA guarantee</li>
        </ul>
        <a href="#" class="pricing__cta btn--neutral btn--l" aria-label="Contact sales for Enterprise plan">Contact Sales</a>
      </article>

    </div>
  </div>
</section>
```

**Notes:**
- Popular card uses `pricing__card--popular` modifier for visual differentiation
- Price amounts include `aria-label` with full text for screen reader clarity
- Feature lists use `role="list"` and `aria-label`
- Each CTA has a descriptive `aria-label` identifying which plan

---

## 5. CTA (Call-to-Action) Section

Conversion-focused section with a clear action prompt.

```html
<!-- CTA Section: Section > Container > Heading + Text + Actions -->
<!-- Etch element mapping: Section -> section, Container -> div.__container,
     Heading -> h2, Text -> p, Anchor -> a -->
<section class="cta-section section--l" aria-label="Call to action">
  <div class="cta-section__container">
    <h2 class="cta-section__heading">Ready to Get Started?</h2>
    <p class="cta-section__text">Join thousands of customers who are already using our platform to grow their business.</p>
    <div class="cta-section__actions">
      <a href="#" class="cta-section__primary btn--primary btn--l">Start Free Trial</a>
      <a href="#" class="cta-section__secondary btn--outline btn--primary btn--l">Schedule a Demo</a>
    </div>
  </div>
</section>
```

**Notes:**
- Simple and focused: heading, text, and 1–2 CTAs only
- `<h2>` appropriate for an interior section heading
- Dual button pattern with primary and secondary actions
- Centered layout (handled via CSS, not HTML)

---

## 6. Footer

Page-level footer with navigation links, legal text, and optional social links.

```html
<!-- Footer: footer > Container > Columns with links and legal text -->
<!-- Etch element mapping: Section (Etch) -> footer (HTML), Container -> div.__container,
     Anchor -> a, Text -> p, Heading -> h3 -->
<footer class="site-footer section--m" aria-label="Site footer">
  <div class="site-footer__container">

    <div class="site-footer__top grid--4 grid--m-2 grid--s-1 gap--l">

      <div class="site-footer__brand">
        <a href="/" class="site-footer__logo" aria-label="Company name - home">
          <img
            src="logo.svg"
            alt="Company Name"
            loading="lazy"
            decoding="async"
            width="120"
            height="40"
          >
        </a>
        <p class="site-footer__tagline">Your company's brief value proposition goes here.</p>
      </div>

      <nav class="site-footer__nav" aria-label="Product links">
        <h3 class="site-footer__nav-heading">Product</h3>
        <ul class="site-footer__nav-list" role="list">
          <li><a href="#" class="site-footer__link">Features</a></li>
          <li><a href="#" class="site-footer__link">Pricing</a></li>
          <li><a href="#" class="site-footer__link">Changelog</a></li>
        </ul>
      </nav>

      <nav class="site-footer__nav" aria-label="Company links">
        <h3 class="site-footer__nav-heading">Company</h3>
        <ul class="site-footer__nav-list" role="list">
          <li><a href="#" class="site-footer__link">About</a></li>
          <li><a href="#" class="site-footer__link">Blog</a></li>
          <li><a href="#" class="site-footer__link">Careers</a></li>
        </ul>
      </nav>

      <nav class="site-footer__nav" aria-label="Support links">
        <h3 class="site-footer__nav-heading">Support</h3>
        <ul class="site-footer__nav-list" role="list">
          <li><a href="#" class="site-footer__link">Documentation</a></li>
          <li><a href="#" class="site-footer__link">Help Center</a></li>
          <li><a href="#" class="site-footer__link">Contact</a></li>
        </ul>
      </nav>

    </div>

    <div class="site-footer__bottom">
      <p class="site-footer__legal">
        &copy; <span id="current-year">2024</span> Company Name. All rights reserved.
      </p>
      <nav class="site-footer__legal-nav" aria-label="Legal links">
        <a href="#" class="site-footer__legal-link">Privacy Policy</a>
        <a href="#" class="site-footer__legal-link">Terms of Service</a>
        <a href="#" class="site-footer__legal-link">Cookie Policy</a>
      </nav>
    </div>

  </div>
</footer>
```

**Notes:**
- Use `<footer>` as the semantic wrapper (maps to Etch Section element)
- Each navigation group uses `<nav>` with a unique `aria-label`
- Navigation column headings use `<h3>` (visual headings for grouping)
- Logo link has descriptive `aria-label` for screen readers
- Year should be dynamically updated via JavaScript

---

## 7. Header / Navigation

Site-level navigation header.

```html
<!-- Header/Nav: header > Container > Logo + Nav + CTA -->
<!-- Etch element mapping: Section (Etch) -> header (HTML), Container -> div.__container,
     Anchor -> a, Html -> nav toggle for mobile -->
<header class="site-header" aria-label="Site header">
  <div class="site-header__container">

    <a href="/" class="site-header__logo" aria-label="Company Name - go to homepage">
      <img
        src="logo.svg"
        alt="Company Name"
        loading="eager"
        decoding="async"
        width="120"
        height="40"
      >
    </a>

    <nav class="site-header__nav" aria-label="Primary navigation">
      <ul class="site-header__nav-list" role="list">
        <li class="site-header__nav-item">
          <a href="/features" class="site-header__nav-link">Features</a>
        </li>
        <li class="site-header__nav-item">
          <a href="/pricing" class="site-header__nav-link">Pricing</a>
        </li>
        <li class="site-header__nav-item">
          <a href="/blog" class="site-header__nav-link">Blog</a>
        </li>
        <li class="site-header__nav-item">
          <a href="/about" class="site-header__nav-link">About</a>
        </li>
      </ul>
    </nav>

    <div class="site-header__actions">
      <a href="/login" class="site-header__login btn--outline btn--neutral">Log In</a>
      <a href="/signup" class="site-header__cta btn--primary">Get Started</a>
    </div>

    <button
      class="site-header__mobile-toggle"
      type="button"
      aria-expanded="false"
      aria-controls="mobile-nav"
      aria-label="Open navigation menu"
    >
      <span class="site-header__toggle-icon" aria-hidden="true"></span>
    </button>

  </div>

  <!-- Mobile navigation panel -->
  <div class="site-header__mobile-nav" id="mobile-nav" aria-hidden="true" hidden>
    <nav aria-label="Mobile navigation">
      <ul class="site-header__mobile-nav-list" role="list">
        <li><a href="/features" class="site-header__mobile-link">Features</a></li>
        <li><a href="/pricing" class="site-header__mobile-link">Pricing</a></li>
        <li><a href="/blog" class="site-header__mobile-link">Blog</a></li>
        <li><a href="/about" class="site-header__mobile-link">About</a></li>
      </ul>
      <div class="site-header__mobile-actions">
        <a href="/login" class="btn--outline btn--neutral">Log In</a>
        <a href="/signup" class="btn--primary">Get Started</a>
      </div>
    </nav>
  </div>

</header>
```

**Notes:**
- Use `<header>` as semantic wrapper (maps to Etch Section element)
- Primary `<nav>` has `aria-label="Primary navigation"`
- Mobile toggle uses `aria-expanded`, `aria-controls`, and `aria-label`
- Mobile nav panel uses `aria-hidden="true"` and `hidden` attribute when closed
- Logo image uses `loading="eager"` (above fold, should not be lazy loaded)
- JavaScript must toggle `aria-expanded` and `aria-hidden` when menu opens/closes
