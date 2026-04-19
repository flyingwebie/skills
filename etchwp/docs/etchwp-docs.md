---
title: "etchwp-docs Documentation"
source: "https://docs.etchwp.com/"
scraped: "2026-03-10T07:20:53.305Z"
tokens: 109480
---
# etchwp-docs Documentation

> Source: https://docs.etchwp.com/
> Generated: 10.03.2026 08:20:53

### etchwp-docs

#### _ai_activating-ai.md

> Source: https://docs.etchwp.com/ai/activating-ai
> Scraped: 10.03.2026 08:20:45

Etch includes an AI assistant that provides chat-based guidance and assistance. The AI feature is currently experimental and requires an OpenAI API key.

## Getting an OpenAI API Key[​](_ai_activating-ai.md#getting-an-openai-api-key)

1.  Go to [platform.openai.com](https://platform.openai.com/) and create an account (or sign in)
2.  Navigate to **API Keys** in the left sidebar (or go directly to [platform.openai.com/api-keys](https://platform.openai.com/api-keys))
3.  Click **Create new secret key**
4.  Give it a name (e.g., "Etch") and click **Create secret key**
5.  Copy the key — you won't be able to see it again after closing the dialog

warning

Keep your API key private. Never share it publicly or commit it to version control. OpenAI charges based on usage, so a leaked key can result in unexpected charges.

You'll also need to add a payment method to your OpenAI account. API usage is billed separately from ChatGPT subscriptions — even if you pay for ChatGPT Plus, you still need API credits. You can set usage limits in your OpenAI account settings to control spending.

## Enabling AI in Etch[​](_ai_activating-ai.md#enabling-ai-in-etch)

![AI Assistant settings in Etch](https://docs.etchwp.com/assets/images/etch-ai-settings-90bcdd4dc83d77bcd6fb13142b03b2e4.png)

1.  Open the Etch builder
2.  Go to **Settings** (gear icon)
3.  Switch to the **Experimental** tab
4.  Toggle **AI Assistant** on
5.  An **OpenAI API Key** input will appear below — paste your key there
6.  Click **Save**

The AI assistant is now available in the builder. Once activated, the AI panel will appear automatically. You can show or hide it at any time like any other panel in Etch — it doesn't need to be visible to stay enabled.

## Future LLM Support[​](_ai_activating-ai.md#future-llm-support)

OpenAI is the only supported provider currently, but we plan to expand LLM options in the future to include additional providers and models. We also plan to provide a more capable, trained model natively via subscription.

#### _ai_ask-mode.md

> Source: https://docs.etchwp.com/ai/ask-mode
> Scraped: 10.03.2026 08:20:45

Ask Mode is the default AI mode in Etch. It's a conversational assistant you can use to ask questions about Etch, web development, and how to accomplish things.

## What You Can Ask[​](_ai_ask-mode.md#what-you-can-ask)

*   **Etch-specific questions** — How do I create a component? How do loops work? How do I use conditional logic?
*   **Web development questions** — CSS layout techniques, HTML semantics, JavaScript concepts, accessibility best practices
*   **How-to guidance** — Step-by-step help for building specific layouts, patterns, or features
*   **Troubleshooting** — Why something isn't working the way you expect

Ask Mode provides answers and working code that you can copy and paste directly into Etch — whether that's HTML structures, CSS, or dynamic data expressions.

## Using Ask Mode[​](_ai_ask-mode.md#using-ask-mode)

1.  Open the AI panel in the builder
2.  Type your question in the chat input
3.  The AI will respond with an explanation, code snippets, or step-by-step guidance

You can ask follow-up questions to refine the answer or dig deeper into a topic.

#### _ai_build-mode.md

> Source: https://docs.etchwp.com/ai/build-mode
> Scraped: 10.03.2026 08:20:39

Build Mode is an upcoming AI feature that will allow the AI to directly assist with building and editing your pages and components within Etch.

More details will be available when this feature is released.

#### _components-native_accordion.md

> Source: https://docs.etchwp.com/components-native/accordion
> Scraped: 10.03.2026 08:20:40

*   Components (Native)
*   Accordion

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/accordion/](https://patterns.etchwp.com/layouts/accordion/)

[

Previous

Overview

](_components-native_overview.md)[

Next

Alert

](_components-native_alert.md)

#### _components-native_advanced-nav.md

> Source: https://docs.etchwp.com/components-native/advanced-nav
> Scraped: 10.03.2026 08:20:41

*   Components (Native)
*   Nav - Advanced

This component is waiting on our Components API, but we've built two working versions that you can quickly paste into your site.

Simple JSON Loop Driven Navigation: [https://patterns.etchwp.com/layouts/navigation/](https://patterns.etchwp.com/layouts/navigation/)

Manual Flexible Navigation w/ Mega Menu Support: [https://patterns.etchwp.com/layouts/flex-nav/](https://patterns.etchwp.com/layouts/flex-nav/)

[

Previous

Off Canvas

](_components-native_off-canvas.md)[

Next

Nav - Basic

](_components-native_basic-nav.md)

#### _components-native_alert.md

> Source: https://docs.etchwp.com/components-native/alert
> Scraped: 10.03.2026 08:20:40

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Alert

This element is not currently available, but is planned. Check back soon.

#### _components-native_banner.md

> Source: https://docs.etchwp.com/components-native/banner
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_banner.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Banner

## Banner

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/banner-alpha/](https://patterns.etchwp.com/layouts/banner-alpha/)

[

Previous

Nav - Basic

](_components-native_basic-nav.md)[

Next

Dev Note

](_components-native_dev-note.md)

#### _components-native_basic-nav.md

> Source: https://docs.etchwp.com/components-native/basic-nav
> Scraped: 10.03.2026 08:20:41

note

This page documents the recommended way to add a Basic Nav by importing the prebuilt components with Copy/Paste JSON below. The older manual approach (copying HTML/CSS/JS) has been removed.

## Setup[​](_components-native_basic-nav.md#setup)

*   Create a Header component for your site header if you don’t already have one.
*   Add a `{#slot}` inside the Header (e.g., `{#slot right}`) where you’ll place the Navigation and Burger components.
*   You’ll paste the Navigation and Burger components into this Header slot in the next step.

## Import Components[​](_components-native_basic-nav.md#import-components)

Use the buttons below to copy the ready-to-use Navigation and Burger components as JSON. Then, in Etch, press cmd + v (Mac) or ctrl + v (Windows) anywhere in the builder to insert the component.

### Steps[​](_components-native_basic-nav.md#steps)

*   Click "Copy Navigation Component" above, then in Etch press cmd + v (Mac) / ctrl + v (Windows) anywhere in the builder to insert the component
*   Repeat for the Burger Component.
*   Arrange both inside your Header (for example, place Navigation in the right slot and Burger next to it for mobile).
*   Verify desktop dropdowns/flyouts and mobile toggle behavior.

### Configuration[​](_components-native_basic-nav.md#configuration)

*   The `basicNav` loop is preinstalled in Etch and already wired in the component.
*   CSS, JS, and props are bundled inside these components—no setup required. You can edit prop values to customize behavior.
*   Accessibility features (including `aria-current` behavior) are enabled by default.
*   Styling: tweak CSS variables on `.etch-nav` and `.etch-burger` (e.g., colors, icon sizes, breakpoint at 768px).

## Configuring Your Navigation[​](_components-native_basic-nav.md#configuring-your-navigation)

You obviously don't want sample data in your Navigation, so let's customize it.

1.  Open the Loop Manager.
2.  Click on the Basic Nav loop.
3.  Edit the JSON to configure your navigation.

tip

AI is extremely good at producing working JSON. If you don't like editing JSON manually, consider letting AI help you.

Here's some sample JSON:
```
[  {    "label": "Home",    "url": "/"  },  {    "label": "Item 2",    "children": [      {        "label": "Item 2.1",        "url": "/dropdown1"      },      {        "label": "Item 2.2",        "url": "/dropdown2",        "children": [          {            "label": "Item 2.2.1",            "url": "/dropdown1"          },          {            "label": "Item 2.2.2",            "url": "/dropdown2"          },          {            "label": "Item 2.2.3",            "url": "/dropdown3"          }        ]      },      {        "label": "Item 2.3",        "url": "/dropdown3"      }    ]  },  {    "label": "Item 3",    "url": "/page",    "children": [      {        "label": "Item 3.1",        "url": "/dropdown1"      },      {        "label": "Item 3.2",        "url": "/dropdown2"      },      {        "label": "Item 3.3",        "url": "/dropdown3"      },      {        "label": "Item 3.4",        "url": "/dropdown4"      }    ]  },  {    "label": "Item 4",    "url": "/about"  },  {    "label": "Item 5",    "url": "/contact-us"  }]
```
*   Each label/url pair is a navigation link.
*   The "children" object defines children for a navigation item. Children links will automatically be placed in a dropdown.
*   If a child has children, this defines a grandchildren relationship. Grandchildren will automatically be placed in a flyout.

tip

Use relative URL references, not full static URLs.

### Nav Javascript Options[​](_components-native_basic-nav.md#nav-javascript-options)

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCurrentPage` | `boolean` or `object` | `false` | Enables automatic setting of `aria-current="page"` on the current navigation link. Pass `true` for basic usage, or an object for advanced configuration. |
|   • `homePage` | `boolean` | `true` | _(Only if `ariaCurrentPage` is an object)_ — If `true`, the homepage link will also be marked as the current page. Set to `false` to skip homepage highlighting. |

**See** [Nav Behavior](_components-native_basic-nav.md#nav-behavior) for more information.

### Nav Component Props[​](_components-native_basic-nav.md#nav-component-props)

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `jsonNav` | Loop (array of items) | preset | Data source for your menu. Preinstalled in Etch; edit via Loop Manager. |
| `navAriaLabel` | `string` | `"Menu"` | Sets the nav `aria-label`. |
| `mouseSubmenu` | select | `"hover"` | Interaction mode. Options: `hover`, `click`, `click-sub-hover` (click for dropdowns, hover for flyouts on desktop). |

### Burger Javascript Options[​](_components-native_basic-nav.md#burger-javascript-options)

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `button` | `HTMLElement` | `undefined` | **Required** – The burger toggle element where click handling is attached. |
| `target` | `string` or `HTMLElement` | `null` | The element to show/hide when toggled. Selector or direct element reference. |
| `selfAriaExpanded` | `boolean` | `false` | If `true`, the burger button manages its own `aria-expanded` attribute. |
| `targetOptions` | `object` | `{}` | Configuration for the target element. |
|   • `class` | `string` | `null` | Class to toggle on the target element. |
|   • `ariaExpanded` | `boolean` | `false` | If `true`, toggles `aria-expanded` on the target element. |
| `onToggle` | `(isOpen: boolean) => void` | `null` | Called every time the burger is toggled; `isOpen` is `true` when opened. |
| `onClose` | `() => void` | `null` | Called only when the burger is closed. |

**See** [Burger Behavior](_components-native_basic-nav.md#burger-behavior) for more information.

### Burger Component Props[​](_components-native_basic-nav.md#burger-component-props)

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | "Menu" | Sets the burger button `aria-label` text. |

**Example** of using the `onToggle` or `onClose` to execute custom functions:

warning

The example below might differ from the javascript provided in the burger component for brevity.

## Styling Your Nav / Burger[​](_components-native_basic-nav.md#styling-your-nav--burger)

Both components are styled via locally scoped CSS variables inside each component:

*   `.etch-nav` (Navigation): colors, spacing, icon sizes, dropdown/flyout visuals, etc.
*   `.etch-burger` (Burger): width, line thickness/spacing, colors, etc.

Open the component styles and adjust those variables to match your design. For needs beyond the provided tokens, add additional styles in your project CSS.

## Changing the Mobile Breakpoint[​](_components-native_basic-nav.md#changing-the-mobile-breakpoint)

Both components default to a 768px breakpoint. You can change this within the component CSS (media queries) so the Navigation and Burger stay in sync.

tip

you can search for `/* Set the desired breakpoint */` in the component CSS to find the breakpoint.

## Advanced Customization[​](_components-native_basic-nav.md#advanced-customization)

After you paste/import the components, you can open the Navigation or Burger component and edit its JS to customize behavior. This is optional—the defaults work out of the box.

warning

The examples below might differ from the javascript provided in the components for brevity.

### Nav Behavior[​](_components-native_basic-nav.md#nav-behavior)

**Example**: customize the `aria-current` behavior:
```
instantiateNavClass({  ariaCurrentPage: {    homePage: false,  },});
```
### Burger Behavior[​](_components-native_basic-nav.md#burger-behavior)

**Example**: trigger a method from another component when the burger closes via `onClose`:
```
const burgerInstance = new EtchBurgerScript({  button: burgerBtn,  target: etchNav,  selfAriaExpanded: true,  targetOptions: {    ariaExpanded: true,  },  onClose,});function closeEtchNav() {  window.etchElements?.etchNav?.closeAllNavs();}instantiateBurgerClass(etchNav, closeEtchNav);
```

#### _components-native_before-after.md

> Source: https://docs.etchwp.com/components-native/before-after
> Scraped: 10.03.2026 08:20:40

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Before/After

This element is not currently available, but is planned. Check back soon.

#### _components-native_carousel.md

> Source: https://docs.etchwp.com/components-native/carousel
> Scraped: 10.03.2026 08:20:40

[Skip to main content](_components-native_carousel.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Carousel

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/carousel-alpha/](https://patterns.etchwp.com/layouts/carousel-alpha/)

[

Previous

Before/After

](_components-native_before-after.md)[

Next

Copy to Clipboard

](_components-native_copy-to-clipboard.md)

#### _components-native_copy-to-clipboard.md

> Source: https://docs.etchwp.com/components-native/copy-to-clipboard
> Scraped: 10.03.2026 08:20:40

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Copy to Clipboard

This element is not currently available, but is planned. Check back soon.

#### _components-native_countdown.md

> Source: https://docs.etchwp.com/components-native/countdown
> Scraped: 10.03.2026 08:20:40

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Countdown

This element is not currently available, but is planned. Check back soon.

#### _components-native_dev-note.md

> Source: https://docs.etchwp.com/components-native/dev-note
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_dev-note.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Dev Note

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/dev-note/](https://patterns.etchwp.com/layouts/dev-note/)

[

Previous

Banner

](_components-native_banner.md)[

Next

Drawer

](_components-native_drawer.md)

#### _components-native_dialog.md

> Source: https://docs.etchwp.com/components-native/dialog
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_dialog.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Dialog

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/dialog/](https://patterns.etchwp.com/layouts/dialog/)

[

Previous

Map

](_components-native_map.md)[

Next

Off Canvas

](_components-native_off-canvas.md)

#### _components-native_drawer.md

> Source: https://docs.etchwp.com/components-native/drawer
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_drawer.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Drawer

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/drawer/](https://patterns.etchwp.com/layouts/drawer/)

[

Previous

Dev Note

](_components-native_dev-note.md)[

Next

Gallery

](_components-native_gallery.md)

#### _components-native_gallery.md

> Source: https://docs.etchwp.com/components-native/gallery
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_gallery.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Gallery

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/gallery-alpha/](https://patterns.etchwp.com/layouts/gallery-alpha/)

[

Previous

Drawer

](_components-native_drawer.md)[

Next

Greeter

](_components-native_greeter.md)

#### _components-native_greeter.md

> Source: https://docs.etchwp.com/components-native/greeter
> Scraped: 10.03.2026 08:20:39

[Skip to main content](_components-native_greeter.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Greeter

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/greeter-alpha/](https://patterns.etchwp.com/layouts/greeter-alpha/)

[

Previous

Gallery

](_components-native_gallery.md)[

Next

Icon Menu Bar

](_components-native_icon-menu-bar.md)

#### _components-native_hotspot.md

> Source: https://docs.etchwp.com/components-native/hotspot
> Scraped: 10.03.2026 08:20:40

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Hotspot

This element is not currently available, but is planned. Check back soon.

#### _components-native_icon-menu-bar.md

> Source: https://docs.etchwp.com/components-native/icon-menu-bar
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_icon-menu-bar.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Icon Menu Bar

## Icon Menu Bar

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/menu-bar-alpha/](https://patterns.etchwp.com/layouts/menu-bar-alpha/)

[

Previous

Greeter

](_components-native_greeter.md)[

Next

Logo Carousel

](_components-native_logo-carousel.md)

#### _components-native_lightbox.md

> Source: https://docs.etchwp.com/components-native/lightbox
> Scraped: 10.03.2026 08:20:40

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Lightbox

This element is not currently available, but is planned. Check back soon.

#### _components-native_logo-carousel.md

> Source: https://docs.etchwp.com/components-native/logo-carousel
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_logo-carousel.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Logo Carousel

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/logo-carousel-alpha/](https://patterns.etchwp.com/layouts/logo-carousel-alpha/)

[

Previous

Icon Menu Bar

](_components-native_icon-menu-bar.md)[

Next

Read More

](_components-native_read-more.md)

#### _components-native_map.md

> Source: https://docs.etchwp.com/components-native/map
> Scraped: 10.03.2026 08:20:40

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Map

This element is not currently available, but is planned. Check back soon.

#### _components-native_off-canvas.md

> Source: https://docs.etchwp.com/components-native/off-canvas
> Scraped: 10.03.2026 08:20:41

note

This page documents the recommended way to add an Off Canvas (Drawer) by importing the prebuilt component with Copy/Paste JSON below.

## Setup[​](_components-native_off-canvas.md#setup)

*   Add a container on your site if you don't already have one.
*   You'll paste the Off Canvas component into the container in the next step.

## Importing the Component[​](_components-native_off-canvas.md#importing-the-component)

Use the button below to copy the ready-to-use Off Canvas component as JSON. Then, in Etch, press cmd + v (Mac) or ctrl + v (Windows) anywhere in the builder to insert the component.

### Steps[​](_components-native_off-canvas.md#steps)

*   Click "Copy Off Canvas Component" above, then in Etch press cmd + v (Mac) / ctrl + v (Windows) anywhere in the builder to insert the component
*   Arrange the component inside your container.
*   Verify the component.

### Configuration[​](_components-native_off-canvas.md#configuration)

*   CSS, JS, and props are bundled inside the component—no setup required. You can edit prop values to customize behavior.
*   Styling: tweak CSS variables on `.etch-drawer` (e.g., colors, icon sizes).
*   Fill the props in the Elements Settings panel.

## Editing the Off Canvas[​](_components-native_off-canvas.md#editing-the-off-canvas)

Off Canvas comes with 1 slot, if you open the drawer and you don't see the slot, you will need to add it.

### Adding the slot ( if the slot is not already there )[​](_components-native_off-canvas.md#adding-the-slot--if-the-slot-is-not-already-there-)

Once you select the drawer, on the bottom bar where all the elements are, you will see 1 slot icons on the left, click on it and you should see the slot appear on the drawer.

Now your drawer should contain 1 slot named `drawerContent`

### Adding content to the slot[​](_components-native_off-canvas.md#adding-content-to-the-slot)

*   You can add content to the drawer by adding content to the slot.
*   `drawerContent` slot is the content that will be displayed in the drawer.
    *   You can add any content to the slot.
    *   You can add text, images, create cards, use divs, the slot is a normal div container.

tip

You can edit the content while the drawer is open by adding Switching (Show / Hide Editor).

### Adding a trigger to the drawer[​](_components-native_off-canvas.md#adding-a-trigger-to-the-drawer)

Lets select the drawer component and see the Elements Settings panel.

On that Panel there will be a prop called `triggerSelector`, type there a .class or an #id from the element that you want to trigger the drawer from.

### Off Canvas Component Props[​](_components-native_off-canvas.md#off-canvas-component-props)

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `showEditor` | `boolean` | `false` | Used internally to hide / show the drawer in Etch Editor. |
| `triggerSelector` | `string` | `.open-drawer` | The selector of the trigger element, must be a .class or #id of an element on the page |
| `drawerPlacement` | `select` | `left` | The placement of the drawer. |
| • `left` |  |  | Positions the drawer from the left side of the screen |
| • `right` |  |  | Positions the drawer from the right side of the screen |
| • `top` |  |  | Positions the drawer from the top of the screen |
| • `bottom` |  |  | Positions the drawer from the bottom of the screen |
| `drawerDisplayMethod` | `select` | `overlap` | How the drawer displays when opened. |
| • `overlap` |  |  | The drawer overlaps the content |
| • `pushBody` |  |  | The drawer pushes the body content when opened |
| `closeButtonVariant` | `select` | `icon` | The type of close button |
| • `Icon` |  |  | Button with icon only (SVG by default) |
| • `Label` |  |  | Button with label only |
| • `Label and Icon` |  |  | Button with label and Icon |
| `closeButtonLabel` | `string` | `Close` | Text for the close button |
| `drawerId` | `string` | `etch-drawer` | The unique id of the Drawer. This is required to have multiple drawers on the same page, must be alphanumeric and unique. |
| `maxWidth` | `string` | `400px` | The maximum width for the Drawer, sets scoped variable inline |
| `maxHeight` | `string` | `100px` | The maximum height for the Drawer (used for top/bottom placements), sets scoped variable inline |
| `drawerBackgroundColor` | `string` | `white` | The background color for the Drawer body, sets scoped variable inline |
| `drawerBackdropColor` | `string` | `rgba(0, 0, 0, 0.5)` | The background color for the Drawer backdrop, sets scoped variable inline |
| `drawerPadding` | `string` | `1em` | Padding for the Drawer |
| `cloneSelector` | `string` |  | Optional. A selector (.class or #id) of an element that will be cloned and moved into the drawer when opened. The element will be restored to its original position when the drawer closes. |
| `isInLoop` | `boolean` | `false` | Declares if the Drawer is being used inside a loop |

#### _components-native_overview.md

> Source: https://docs.etchwp.com/components-native/overview
> Scraped: 10.03.2026 08:20:38

## Components (Native)

Etch has a growing library of native, pre-made components. We've put a lot of work into these to make sure they follow all guidelines of scalability, maintainability, and accessibility.

#### _components-native_read-more.md

> Source: https://docs.etchwp.com/components-native/read-more
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_read-more.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Read More

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/revealer-alpha/](https://patterns.etchwp.com/layouts/revealer-alpha/)

[

Previous

Logo Carousel

](_components-native_logo-carousel.md)[

Next

Reading Progress

](_components-native_reading-progress.md)

#### _components-native_reading-progress.md

> Source: https://docs.etchwp.com/components-native/reading-progress
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_reading-progress.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Reading Progress

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/reading-progress-alpha/](https://patterns.etchwp.com/layouts/reading-progress-alpha/)

[

Previous

Read More

](_components-native_read-more.md)[

Next

Scroll Snap

](_components-native_scroll-snap.md)

#### _components-native_scroll-snap.md

> Source: https://docs.etchwp.com/components-native/scroll-snap
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_scroll-snap.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Scroll Snap

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/scroll-snap-alpha/](https://patterns.etchwp.com/layouts/scroll-snap-alpha/)

[

Previous

Reading Progress

](_components-native_reading-progress.md)[

Next

Search

](_components-native_search.md)

#### _components-native_search.md

> Source: https://docs.etchwp.com/components-native/search
> Scraped: 10.03.2026 08:20:41

[Skip to main content](_components-native_search.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Search

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/search-alpha/](https://patterns.etchwp.com/layouts/search-alpha/)

[

Previous

Scroll Snap

](_components-native_scroll-snap.md)[

Next

Skip Link

](_components-native_skip-link.md)

#### _components-native_skip-link.md

> Source: https://docs.etchwp.com/components-native/skip-link
> Scraped: 10.03.2026 08:20:40

[Skip to main content](_components-native_skip-link.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Native)
*   Skip Link

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/skip-link-alpha/](https://patterns.etchwp.com/layouts/skip-link-alpha/)

[

Previous

Search

](_components-native_search.md)[

Next

Slide Menu

](_components-native_slide-menu.md)

#### _components-native_slide-menu.md

> Source: https://docs.etchwp.com/components-native/slide-menu
> Scraped: 10.03.2026 08:20:41

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Slide Menu

This element is not currently available, but is planned. Check back soon.

#### _components-native_star-rating.md

> Source: https://docs.etchwp.com/components-native/star-rating
> Scraped: 10.03.2026 08:20:41

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Star Rating

This component is waiting on our Components API, but we've built a simple working version that you can quickly paste into your site from right here: [https://patterns.etchwp.com/layouts/star-rating-alpha/](https://patterns.etchwp.com/layouts/star-rating-alpha/) and [https://patterns.etchwp.com/layouts/star-rating-bravo/](https://patterns.etchwp.com/layouts/star-rating-bravo/)

#### _components-native_switch.md

> Source: https://docs.etchwp.com/components-native/switch
> Scraped: 10.03.2026 08:20:42

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Switch

This element is not currently available, but is planned. Check back soon.

#### _components-native_table-of-contents.md

> Source: https://docs.etchwp.com/components-native/table-of-contents
> Scraped: 10.03.2026 08:20:42

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Table of Contents

This element is not currently available, but is planned. Check back soon.

#### _components-native_table.md

> Source: https://docs.etchwp.com/components-native/table
> Scraped: 10.03.2026 08:20:43

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Table

This element is not currently available, but is planned. Check back soon.

#### _components-native_tabs.md

> Source: https://docs.etchwp.com/components-native/tabs
> Scraped: 10.03.2026 08:20:43

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Tabs

This element is not currently available, but is planned. Check back soon.

#### _components-native_tooltip.md

> Source: https://docs.etchwp.com/components-native/tooltip
> Scraped: 10.03.2026 08:20:43

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Tooltip

This element is not currently available, but is planned. Check back soon.

#### _components_creating-a-component.md

> Source: https://docs.etchwp.com/components/creating-a-component
> Scraped: 10.03.2026 08:20:47

Ready to create your first component in Etch? It's super easy!

## 1\. Create a static version of your component[​](_components_creating-a-component.md#1-create-a-static-version-of-your-component)

Before you actually create a component, you should build the thing that you'll eventually turn into a component. For example, if you're going to build a header component, just build a header first. You can make it a component when you're done.

Building a static version of the component is the easiest and quickest way to create new components.

## 2\. Click "Create Component"[​](_components_creating-a-component.md#2-click-create-component)

Once your static version is ready, right click it in the structure panel (whatever the parent element is) and choose "Create Component" from the context menu.

This will take you into the component editor. You'll know you're in the component editor because everything will be purple and you'll see the "Component Editor" panel in the interface (though it won't have any props yet).

![Component Editor Interface](https://docs.etchwp.com/assets/images/component-editor-panel-48a6ad79f2d38548267a0a3537e000b1.avif)

## 3\. Name Your Component[​](_components_creating-a-component.md#3-name-your-component)

If you named the parent element in the structure panel (like the fantastic developer you are) then the component will already be named exactly what you wanted it to be named.

If you didn't name your structure panel elements (shame!), then you can double click the component label and edit it.

## 4\. Create your props (if needed)[​](_components_creating-a-component.md#4-create-your-props-if-needed)

Not all components need props. If your component doesn't need props, skip to the next step. If it does, reference [Creating Component Props](_components_creating-component-props.md).

## 5\. Save your component[​](_components_creating-a-component.md#5-save-your-component)

Your component is not a component until you hit the purple "Save" button at the bottom right of the interface when in the component editor.

Once you've saved your component, you can then hit the "Exit" button. If you hit "Exit" before saving, you'll abandon the component creation process (helpful if you change your mind about creating a component).

The reason "Save" doesn't close the component editor is because it's common to want to save progress when building a component without being evicted from the component editor. If you want or need to exit, just click "Exit."

## Component Best Practices[​](_components_creating-a-component.md#component-best-practices)

*   **Use descriptive names**: Choose names that clearly indicate what the component is or does
*   **Keep components focused**: Each component should have a single, clear purpose
*   **Make components maintainable**: Components should have logical structures and maintainable styling (e.g. BEM and variable-first CSS)
*   **Make components flexible**: Design components to work in different contexts
*   **Use props for customization**: Instead of hardcoding values, use props to make components dynamic

## Next Steps[​](_components_creating-a-component.md#next-steps)

Once you've created a component, you can:

* [Add component props](_components_creating-component-props.md)
* [Map component props](_components_mapping-component-props.md)
* [Use a component on pages](_components_using-a-component-static.md)
* [Use a component in templates or loops](_components_using-a-component-dynamic.md)
* [Create component variations](_components_creating-component-variations.md)

#### _components_creating-component-props.md

> Source: https://docs.etchwp.com/components/creating-component-props
> Scraped: 10.03.2026 08:20:49

Props are the customizable properties that make components dynamic and reusable. They allow you to pass different data and control how components behave in different contexts.

Think of props as the "settings" for your component. Just like how you can adjust the settings on your phone (brightness, volume, etc.), props let you adjust how your component looks and behaves and what it says.

## Prop Planning[​](_components_creating-component-props.md#prop-planning)

There are two main types of props:

### 1\. Data Props[​](_components_creating-component-props.md#1-data-props)

Data props are placeholders for content that changes between component instances. They allow you to display different information while maintaining the same structure and styling.

**Examples of data props:**   **Text content**: Titles, descriptions, labels
*   **Images**: Featured images, logos, icons
*   **Links**: URLs for buttons, navigation items
*   **Numbers**: Prices, ratings, quantities

**Example scenario**: A product card component might have data props for:

*   `productName` - The name of the product
*   `productPrice` - The price of the product
*   `productImage` - The product's image
*   `productDescription` - A brief description

### 2\. Behavior Props[​](_components_creating-component-props.md#2-behavior-props)

Behavior props control how a component functions or appears. They typically use boolean values (true/false) or specific options to determine component behavior.

**Examples of behavior props:**   **Visibility controls**: Show/hide elements based on conditions
*   **Style variations**: Different visual states (active, disabled, featured)
*   **Functionality toggles**: Enable/disable features
*   **Layout options**: Different arrangements or sizes

**Example scenario**: A button component might have behavior props for:

*   `isDisabled` - Whether the button is clickable
*   `isPrimary` - Whether to use primary or secondary styling
*   `size` - Small, medium, or large button size
*   `showIcon` - Whether to display an icon alongside text

## Why Props Matter[​](_components_creating-component-props.md#why-props-matter)

Props make your components:

*   **Reusable**: Use the same component with different content
*   **Flexible**: Adapt to different contexts and requirements
*   **Maintainable**: Update one component to affect all instances
*   **Consistent**: Maintain design standards across your site

## Adding Props in Etch[​](_components_creating-component-props.md#adding-props-in-etch)

To add a prop to a component, click the "+" icon near the top of the component editor panel.

![Adding a prop to a component](https://docs.etchwp.com/assets/images/component-add-prop-0e0312f136f83d73af65555acc6a4858.avif)

### Available Props[​](_components_creating-component-props.md#available-props)

*   **[Text](_components_props_prop-text.md)** - A simple text input for titles, descriptions, labels, or any string content.
*   **[Boolean](_components_props_prop-boolean.md)** - True/false values for controlling visibility, states, or conditional behavior.
*   **[Select](_components_props_prop-select.md)** - Dropdown options for choosing from predefined values (like sizes, categories, or themes).
*   **[Image](_components_props_prop-image.md)** - Image upload and selection for photos, icons, logos, or any visual content.
*   **[Array](_components_props_prop-array.md)** - Multiple values or objects for lists, collections, or complex data structures.
*   **[Slot](_components_prop-slot.md)** - Content areas where you can drag and drop other components or elements.

Once added, you'll see it in the Component Editor.

![Adding a new prop to a component](https://docs.etchwp.com/assets/images/component-new-prop-ef5ad3c1565ca60a95af9db6f8c21a01.avif)

Every prop has two mandatory values: **Name** & **Key**   **Label** - The display name that appears in the component editor interface
*   **Key** - The internal identifier used in code and data mapping

You can double click the Label to edit and the same is true for Key.

Repeat the process for all necessary props.

## Next Steps[​](_components_creating-component-props.md#next-steps)

Now that you understand the basics of adding props, the next step is:

* [Map props to your component](_components_mapping-component-props.md)

#### _components_creating-component-variations.md

> Source: https://docs.etchwp.com/components/creating-component-variations
> Scraped: 10.03.2026 08:20:49

Many component systems rely on "snapshot" variations — duplicated versions of a component for each visual or behavioral state. A "dark card" and a "light card" would be two separate component "variants," for example.

**This approach is fragile, hard to maintain, and scales poorly, which is why Etch doesn't use it.**

Etch handles variations of a component solely with props, conditional styles, and conditional logic. With this approach, you end up with one component that can handle many different scenarios.

## Why Props Beat Snapshots[​](_components_creating-component-variations.md#why-props-beat-snapshots)

With snapshot variations, every change to the base design needs to be applied to every duplicate. Add a new feature? Update every variation. Fix a bug? Fix it in every variation. The more variations you have, the more maintenance overhead you create.

With prop-driven variations, you have a single source of truth. Props control what's visible, how it's styled, and how it behaves. Update the component once and every variation updates with it.

|  | Snapshot Variations | Prop-Driven Variations |
| --- | --- | --- |
| **Maintenance** | Update every duplicate | Update once |
| **Consistency** | Prone to drift | Guaranteed consistency |
| **Scalability** | Each variation is a new component | One component handles all cases |
| **Flexibility** | Locked into predefined versions | Mix and match any combination |

## Showing and Hiding Elements[​](_components_creating-component-variations.md#showing-and-hiding-elements)

The most basic variation is controlling which elements are visible. Use a **Boolean** prop combined with **conditional logic** to show or hide parts of a component.

**Example: Section Intro with optional lede and CTA**

A section intro component might always show a heading, but the lede paragraph and call to action should be optional. Create two Boolean props:

*   **Show Lede** — controls whether the lede paragraph is visible
*   **Show CTA** — controls whether the call to action is visible

Wrap the lede in a conditional block:
```
{#if props.showLede}

{props.lede}

{/if}
```
Wrap the CTA the same way:
```
{#if props.showCta}  [{props.ctaText}](_%7Bprops.ctaUrl%7D.md){/if}
```
Now every instance of the component can independently toggle the lede and CTA on or off. No duplicate components needed.

## Choosing Between Options[​](_components_creating-component-variations.md#choosing-between-options)

When a variation isn't a simple on/off but a choice between multiple options, use a **Select** prop.

**Example: Card color theme**

A card component needs to support dark, light, and primary color themes. Create a Select prop called **Theme** with the options:
```
darklightprimary
```
You can then use this prop to control styling in multiple ways (see below).

## Altering Styles with Inline Tokens[​](_components_creating-component-variations.md#altering-styles-with-inline-tokens)

One way to apply variation styles is by passing prop values directly into the `style` attribute as CSS custom properties (tokens).

Using the card theme example, you could define color tokens per theme and pass them inline:
```
style="--card-bg: {props.cardBg}; --card-color: {props.cardColor};"
```
The component's CSS references these tokens:
```
.card {  background: var(--card-bg);  color: var(--card-color);}
```
This approach is ideal when the variation is purely cosmetic and involves a small number of CSS values. Each instance can have completely custom colors without predefined options.

## Altering Styles with Data Attributes and CSS[​](_components_creating-component-variations.md#altering-styles-with-data-attributes-and-css)

For more complex style variations — where multiple CSS properties change together — use a **data attribute** driven by a Select prop, then target it with nested CSS.

Using the card theme example, output the selected theme as a data attribute:
```
data-theme="{props.theme}"
```
Then write your variation styles in CSS:
```
.card[data-theme="dark"] {  background: var(--dark-bg);  color: var(--dark-text);  border-color: var(--dark-border);}.card[data-theme="light"] {  background: var(--light-bg);  color: var(--light-text);  border-color: var(--light-border);}.card[data-theme="primary"] {  background: var(--primary-bg);  color: var(--primary-text);  border-color: var(--primary-border);}
```
This approach is ideal when variations involve many CSS changes or when you want to keep styling logic in CSS rather than inline styles. It's also easier to manage with design tokens and keeps your markup clean.

## Combining Techniques[​](_components_creating-component-variations.md#combining-techniques)

Real-world components often combine multiple techniques. A card component might use:

*   A **Boolean** prop to show/hide a "featured" badge
*   A **Select** prop with a data attribute to control the color theme
*   A **Text** prop with an inline token to set a custom accent color
*   **Conditional logic** to swap between different layouts

Because each variation is controlled by an independent prop, users can mix and match any combination — featured + dark theme, non-featured + primary theme with a custom accent, and so on. All from a single component.

#### _components_intro-components.md

> Source: https://docs.etchwp.com/components/intro-components
> Scraped: 10.03.2026 08:20:46

Components are the fundamental building blocks of modern web development. They are reusable, self-contained elements or groups of elements that can be combined to create complex layouts and functionality.

Each component is a self-contained chunk of code that handles a specific part of your website’s look or functionality, and you can use it many times across different pages and areas of your site. It can render the same content over and over again, or each instance can render unique content.

Here are some examples of common components:

**Header:** The top bar with your logo, navigation (Shop, About, Contact), and perhaps a CTA. It's built once and reused on every page for consistent navigation.

**Footer:** The bottom section with contact info, social media links, and perhaps a newsletter signup.

**Cards:** Product displays showing a product's image, name, and price. You reuse the same card design for every product on your site, perhaps with different variations or attributes.

**Call to Action Areas (CTAs):** Promotional banners with special offers, discount codes, or limited-time deals. These components can be reused across your site to highlight sales, new products, or seasonal promotions.

**Buttons:** Interactive elements that trigger actions like form submissions, navigation, or data processing. These components can be customized with different styles, sizes, and behaviors while maintaining consistent design patterns across your site.

info

Many traditional builders refer to components (like the header and footer, but even other types of components) as "templates." This is incorrect & confusing nomenclature and is an architectural disaster. Components and templates are two very different things. If you come from the world of page building, it's important to retrain your brain to understand components separately from templates.

## Why components are useful[​](_components_intro-components.md#why-components-are-useful)

*   **Reusability:** Create a component once and use it throughout your site. A card component, for example, can be used for products, services, or blog post previews with different content and styling.

*   **Consistency:** Components ensure consistent design and behavior across your site. When you update a component, all instances automatically reflect the changes.

*   **Maintainability:** Breaking your UI into components makes your project more organized and easier to maintain because each important part of your site has a single source of truth.

*   **Scalability:** Components make it easy to add new features or pages by combining existing components in new ways.

## How components handle data[​](_components_intro-components.md#how-components-handle-data)

Props control how each instance of a component renders and behaves and the unique content that's passed into key areas of your component.

For example, if you have a card for displaying information for a service, you wouldn't want every card to repeat the same service name. The only way a component is useful is if each component instance can display a different service.

To make this work, you create a "prop" (property) for the name of the service, like `serviceName`, and then you plug that prop into the heading area of the card. Now, when you add a service card component, you fill out the field for service-name and the component will display the correct service name.

A text prop like this is essentially a placeholder for whatever text content you want to add.

We'll talk more about data props later.

## How components can have variations[​](_components_intro-components.md#how-components-can-have-variations)

Props also allow you to control how a component behaves.

For example, let's say you're creating a card component for e-commerce products. You want to make sure that when a product is on sale, you can display an "on sale" badge.

You can create a boolean prop (there are many different prop types to help you accomplish your goals) called `onSale`. Boolean props resolve to true or false. You can then create your "on sale" badge and place it inside a conditional logic element in Etch. This conditional logic element can check the value of `onSale` and show the badge if it's true and hide it if it's false.

We'll talk more about boolean props and component variants later.

## Conclusion[​](_components_intro-components.md#conclusion)

Whether you're building a simple landing page or a complex e-commerce site, components will help you organize your code, maintain consistency, and deliver a better developer experience. The reusability and maintainability that components offer make them an essential tool in any web developer's toolkit.

## Next steps[​](_components_intro-components.md#next-steps)

Now that you understand the basics of components, here are the next steps to continue your learning journey:

#### _components_mapping-component-props.md

> Source: https://docs.etchwp.com/components/mapping-component-props
> Scraped: 10.03.2026 08:20:47

Once you've [created your props](_components_creating-component-props.md), the next step is to map them to the elements they control. Mapping is how you connect a prop to a specific part of your component so that it actually does something.

There are two methods for mapping props: **visual mapping** (fastest) and **copy & paste** (for attributes and code).

## Method 1: Visual Mapping (Target Icon)[​](_components_mapping-component-props.md#method-1-visual-mapping-target-icon)

The easiest way to map a prop is to use the target icon in the component editor.

1.  Find the prop you want to map in the component editor panel
2.  Click the **target icon** next to the prop

![Target icon on a prop in the component editor](https://docs.etchwp.com/assets/images/component-prop-target-icon-b6d97a488d763b8e93d7d1ae0b05d991.png)

1.  Click the element on the canvas that this prop should map to

The element's text content will be replaced with the prop reference (e.g., `{props.serviceName}`). You'll see this reflected immediately on the canvas.

This method works for anything that's visible and clickable on the canvas — text, headings, paragraphs, buttons, links, etc.

## Method 2: Copy & Paste[​](_components_mapping-component-props.md#method-2-copy--paste)

Some parts of a component can't be clicked on the canvas — things like `href`, `src`, `alt`, or custom attributes. For these, use the copy & paste method.

1.  Click the **copy icon** next to the prop in the component editor
2.  This copies the prop key to your clipboard (e.g., `props.serviceName`)
3.  Paste it into the appropriate place — either in the **HTML editor** or the **attribute inputs panel**

![Copy icon on a prop in the component editor](https://docs.etchwp.com/assets/images/component-prop-copy-icon-1ba64527e7ec0a26060f1182944524e5.png)

### When to Use Braces[​](_components_mapping-component-props.md#when-to-use-braces)

When you paste a prop key, you may or may not need to wrap it in curly braces `{}`. The rule is simple:

**Already inside braces?** Don't add more. If you're writing inside an existing expression like `{#loop ...}` or `{#if ...}`, just use the key as-is.

**Not inside braces?** Wrap it in curly braces to create an expression: `{props.propName}`.

**Examples:**

A text element displaying a prop value (not inside any braces):
```
{props.heading}
```
A loop referencing a prop for its data source (already inside braces):
```
{#loop props.items as item}
```
A conditional checking a boolean prop (already inside braces):
```
{#if props.isFeatured}
```
An attribute value (not inside any braces):
```
href="{props.linkUrl}"
```
## Coming Soon[​](_components_mapping-component-props.md#coming-soon)

In the future, Etch will include auto-suggest when mapping props, making the process even faster and more intuitive.

## Next Steps[​](_components_mapping-component-props.md#next-steps)

Now that your props are mapped, you're ready to use your component:

* [Use a component with static data](_components_using-a-component-static.md)
* [Use a component with dynamic data](_components_using-a-component-dynamic.md)

#### _components_prop-slot.md

> Source: https://docs.etchwp.com/components/prop-slot
> Scraped: 10.03.2026 08:20:49

Slots are an extremely powerful feature that add tremendous flexibility to your components.

You can think of a Slot as a "drop zone" in a component that can accept any content when the component is being used (on a per-instance basis). It effectively allows you to inject things into a component from the outside, without editing the component or affecting other instances.

This isn't just about adding flexibility for the sake of flexibility. In some cases, slots are mission critical to using components.

## A Practical Example for Slots[​](_components_prop-slot.md#a-practical-example-for-slots)

The easiest example to understand is an accordion component for Frequently Asked Questions.

The accordion heading is almost always just text, so you can easily use a text prop. This will allow us to write the "question" part of the FAQ.

What about the content of the accordion, though - the answer part of the FAQ?

Should it be text? Should it be a combination of text and images? How much text? How many images? What if I want to include a link? What if I want to include a button? How do we determine what style of button?

That's a lot of questions. And if we have to configure props and conditional logic for all the possibilities, that's going to be a tremendously complex component that still ends up with a lot of limitations.

Instead of programming all that complexity via props, all we have to do is define a slot in the accordion content area. Once the slot is defined, users can drop anything they want in the slot and be happy. 100% flexibility with zero complexity!

Without slots, the accordion component would be so limited that it would almost be useless. With slots, the accordion is suddenly a highly flexible and useful component.

## Defining a Slot[​](_components_prop-slot.md#defining-a-slot)

![Add Slot in Etch](https://docs.etchwp.com/assets/images/etch-add-slot-squashed-ec1f5ec3e6612151945df13b2eafafda.webp)

When you're in component editing mode, you'll see an icon in the Elements Bar for the Slot element. Click this icon to add a slot in your component. You'll see it show up in the structure panel as well as the HTML editor:

![Add Slot in Etch](https://docs.etchwp.com/assets/images/etch-slot-squashed-52571eddbc6955c948f13bf4acf1e6d8.webp)

Once you've added a slot, you can name it by editing its label in the structure panel or editing its name in the attributes panel. It's helpful to use a contextual name so that anyone who uses the component knows what it's for.

You can also define your slot simply by writing `{@slot yourSlotName}` in the HTML editor. This will create your slot and name it at the same time.

## Using a Slot[​](_components_prop-slot.md#using-a-slot)

![Add Slot in Etch](https://docs.etchwp.com/assets/images/etch-use-slot-squashed-9ed427b9873668864ae622ad543285ab.webp)

When you add a component to the page, all defined slots will automatically appear and be ready for content.

You can also add your slot simply by writing `{#slot yourSlotName}{/slot}` in the HTML editor.

Don't Get it Twisted

A slot is an empty drop-zone that you define at the component level. This means each component instance will have a slot available for unique content. You should not try to add content to the slot from inside the component editor — slots are for adding content to each instance from _outside_ the component editing context (e.g. the normal page development workflow).

## The Slots Object[​](_components_prop-slot.md#the-slots-object)

Inside your components, you have access to a special `slots` object that provides information about each slot. This works similarly to how `props` gives you access to your component's properties.

The `slots` object contains an entry for each defined slot, with the following structure:
```
slots.yourSlotName.empty  // true if the slot has no content, false otherwise
```
For example, if you have a component with two slots named `header` and `content`:
```
slots.header.empty   // true or falseslots.content.empty  // true or false
```
This allows you to build conditional logic based on whether users have added content to your slots.

## Defining Default Slot Content[​](_components_prop-slot.md#defining-default-slot-content)

A common use case is showing default (fallback) content when a slot is empty. You can achieve this by combining the `slots` object with an `{#if}` condition.

Here's how to define default content for a slot:
```
{#if slots.default.empty}

This is the default content — it will only show if the slot is empty.

{/if}{@slot default}
```
When a user adds content to the slot, the default content disappears and their content is shown instead.

### Practical Example: CTA Card with Optional Image[​](_components_prop-slot.md#practical-example-cta-card-with-optional-image)

Imagine a Call-to-Action card component with an optional image slot. You want to show a placeholder when no image is provided:
```
      {#if slots.image.empty}

🖼️

    {/if}    {@slot image}

    {@slot content}
```
This way, users see a helpful placeholder in the builder, but if they add an image to the slot, the placeholder is automatically replaced.

## Conditional Wrappers[​](_components_prop-slot.md#conditional-wrappers)

Another useful pattern is hiding wrapper elements entirely when a slot is empty. This keeps your front-end HTML clean:
```
{#if !slots.footer.empty}

    {@slot footer}  {/if}
```
The `.card-footer` div won't render at all if the slot is empty — no empty wrappers cluttering your HTML!

## Automatic Slot Management[​](_components_prop-slot.md#automatic-slot-management)

Etch automatically manages slots for you:

*   **Slots appear automatically**: When you use a component, all available slots are instantly ready — no manual setup needed.
*   **Invalid slots are cleaned up**: If you remove a slot definition from your component (e.g., delete `{@slot oldSlot}` from your code), empty slot instances will be automatically removed from your pages. Slots that contain content are preserved to prevent data loss.

## FAQs about Slots[​](_components_prop-slot.md#faqs-about-slots)

Can I define more than one slot?

Yep, there's no limit to how many slots a component can have.

What happens if nothing is added to a slot?

If nothing is added to a slot, Etch won't render anything on the front-end. There's no need for conditional logic — slot content is rendered and empty slots are not rendered. You'll never be left with empty wrappers.

What kind of content can I put in a slot?

There's no limitations on what can go inside a slot.

Does content I put in slots apply to all instances of my components?

Nope. Slot content is per-instance. If you want something to apply to all instances of your component it should be hard-coded into your component and not placed in a slot.

Can I limit slots to specific types of content?

No, if you want to limit the user to placing certain types of content, then you should use existing prop types with conditional logic. Slots are specifically designed as generic drop zones.

Can I show default content when a slot is empty?

Yes! Use the `slots` object to check if a slot is empty and conditionally render fallback content:
```
{#if slots.yourSlotName.empty}

Default content here

{/if}{@slot yourSlotName}
```
See the "Defining Default Slot Content" section above for more examples.

#### _components_props_prop-array.md

> Source: https://docs.etchwp.com/components/props/prop-array
> Scraped: 10.03.2026 08:20:51

The Loop Prop creates an internal loop reference. It's useful for when you're including a loop inside your component and need to be able to choose the Loop Source when adding your component to a page.

Since components might be used on multiple sites, or with different loops at different times, you might want to build a loopable structure inside your component without creating a fixed reference to any specific loop. The Loop Prop allows you to select the loop that should run inside the component when you're using the component.

Here's the difference between a typical loop and a prop-based loop:

### Typical Loop[​](_components_props_prop-array.md#typical-loop)
```
{#loop someLoop as item}{/loop}
```
### Prop-Based Loop[​](_components_props_prop-array.md#prop-based-loop)
```
{#loop props.yourLoopProp as item}{/loop}
```
info

Props are typically referenced with `{}` brackets. However, when you're already working within bracketed data, you should not use another set of brackets.

Loop prop keys must be camelCased or use bracket notation (they cannot be dash-cased).

**Incorrect:** `{#loop {props.yourLoopProp} as item}{/loop}` (extra brackets)

**Incorrect:** `{#loop props.your-loop-prop as item}{/loop}` (dash-cased key)

**Correct:** `{#loop props.yourLoopProp as item}{/loop}` (camelCase)

**Correct:** `{#loop props['your-loop-prop'] as item}{/loop}` (bracket notation)

## Loop Props with Loop Arguments[​](_components_props_prop-array.md#loop-props-with-loop-arguments)

You can combine loop props with [loop arguments](_loops_loop-arguments.md) to create even more flexible, reusable components. This allows you to pass both the loop source AND argument values through component props.

### Basic Structure[​](_components_props_prop-array.md#basic-structure)

When using a loop prop that accepts arguments, you can pass prop values as the argument values:
```
{#loop props.myLoop($count: props.myCount) as item}  {/loop}
```
In this example:

*   `props.myLoop` is a Loop Prop that defines which loop to use
*   `props.myCount` is a regular prop (text or number type) that provides the value for the `$count` argument

### Complete Example[​](_components_props_prop-array.md#complete-example)

Here's a complete component that uses both a loop prop and a count prop:
```
      {#loop props.myLoop($count: props.myCount) as item}

## {item.title}

{item.excerpt}

          {/loop}
```
**Component Props Setup:**   Create a **Loop Prop** named `myLoop` to select the loop source
*   Create a **Text Prop** named `myCount` with a default value (e.g., `3`)

When using this component, you can:

1.  Select any compatible loop for the `myLoop` prop
2.  Set the number of items to display via the `myCount` prop

This pattern works with any loop argument - not just `$count`. You can pass multiple prop values to multiple loop arguments as needed.

## Using Modifiers with Loop Props[​](_components_props_prop-array.md#using-modifiers-with-loop-props)

Loop props and argument props can be combined with [dynamic data modifiers](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md) for even more flexibility and control.

### Modifiers on Loop Props[​](_components_props_prop-array.md#modifiers-on-loop-props)

You can apply modifiers directly to the loop prop itself. For example, using `.slice()` to limit the number of items:
```
{#loop props.myLoop.slice(0, 3) as item}

## {item.title}

  {/loop}
```
This would display only the first 3 items from the selected loop, regardless of how many items the loop source contains.

### Modifiers on Argument Props[​](_components_props_prop-array.md#modifiers-on-argument-props)

You can also apply modifiers to props used as loop arguments. This is especially useful for ensuring data types are correct:
```
{#loop props.myLoop($count: props.myCount.toInt()) as item}  {/loop}
```
In this example, `.toInt()` ensures that the `myCount` prop value is converted to an integer before being passed to the loop argument.

### Combining Bracket Notation with Modifiers[​](_components_props_prop-array.md#combining-bracket-notation-with-modifiers)

When using bracket notation for dash-cased prop names, you can still apply modifiers:
```
{#loop props['my-loop'].slice(0, 5) as item}  {/loop}
```
Or on argument props:
```
{#loop props.myLoop($count: props['my-count'].toInt()) as item}  {/loop}
```
### Complete Example with Modifiers[​](_components_props_prop-array.md#complete-example-with-modifiers)

Here's a comprehensive example combining multiple techniques:
```
      {#loop props['featured-loop'].slice(0, props.maxItems.toInt())($offset: props.startFrom.toInt()) as item}

## {item.title}

{item.excerpt.truncateWords(20)}

          {/loop}
```
This example demonstrates:

*   Bracket notation for a dash-cased loop prop (`props['featured-loop']`)
*   `.slice()` modifier on the loop prop using a prop value with `.toInt()`
*   An `$offset` argument with a prop value using `.toInt()`
*   A modifier (`.truncateWords()`) on dynamic data inside the loop

#### _components_props_prop-boolean.md

> Source: https://docs.etchwp.com/components/props/prop-boolean
> Scraped: 10.03.2026 08:20:51

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Boolean Prop

The Boolean Prop is a true/false toggle switch. It's typically used for [conditional logic](_conditional-logic_intro-to-conditional-logic.md), or for on/off styling via attributes or container style queries.

#### _components_props_prop-image.md

> Source: https://docs.etchwp.com/components/props/prop-image
> Scraped: 10.03.2026 08:20:50

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Media Prop

The Media Prop allows you to reference any media file from the media library (including SVGs) or any media URL.

warning

The image prop does not currently support `srcset`, but will in the future.

#### _components_props_prop-object.md

> Source: https://docs.etchwp.com/components/props/prop-object
> Scraped: 10.03.2026 08:20:52

The Object Prop passes loop/object/array/json data from outside a component, into the component.

## Why the Object Prop Exists[​](_components_props_prop-object.md#why-the-object-prop-exists)

There are two main reasons for the Object Prop:

1.  It's important to build components in an atomized way. Using keys in a component that rely on specific configurations outside the component is bad component architecture. It harms the component's ability to be used, exported, shared, or migrated.
2.  Sometimes it is preferable to pass an entire object or array at once, instead of creating props for everything separately.

The main thing you need to know is that loop/object/array/json data that exists outside of a component is not accessible to the component unless it's explicitly passed into the component via the Object Prop.

For example, if you create a blog post card component and put it inside `{#loop posts as post}`, you will notice that dynamic data keys like `{post.title}` and `{item.permalink.relative}` don't render. This is by design.

To make dynamic data keys render in this scenario, you can create an Object Prop and map the keys to the object, like this: `{props.object.title}` and `{props.object.permalink.relative}`.

When using the component, you tell the component instance which object to pass data from (the blog post loop in this example) and your keys will start working.

tip

Always think of a component as completely separated from the page you are currently editing. It has its own "scope." Therefore, the only data it has access to by default is _global_ data (`this`, `site` or `url`). If the component needs to access _local_ data, that data needs to be explicitly passed into the component. This is done with the Object Prop.

## Adding Object Prop[​](_components_props_prop-object.md#adding-object-prop)

When your component needs to be nested in a loop in order to function properly, it's a good indication that you need an Object Prop.

In the component editor, select "Object" from the props list.

![Etch Object Prop](https://docs.etchwp.com/assets/images/etch-object-prop-07f71c621f629d4509ad6db56297dc7e.avif)

There are two things you need to know about the Object Prop:

1.  The key for your Object Prop will be the base key for all your dynamic data (e.g. `{props.yourObject.foo}`).
2.  The object input is for fallback/preview content only.

## Using the Object Prop in the Component Editor[​](_components_props_prop-object.md#using-the-object-prop-in-the-component-editor)

Once you've created an Object Prop and named it, you can start to reference the data it's going to pull. This is done the same way you reference all other dynamic data. The only difference is that you use the `props` extension combined with the object key.

Using a simple blog post card as an example:

We create an Object Prop named "post". Our card is going to have a featured image, heading, and link.

*   Heading === `{props.post.title}`
*   Featured Image === `{props.post.featuredImage}`
*   Link === `{props.post.permalink.relative}`

## Previewing Data[​](_components_props_prop-object.md#previewing-data)

Since the dynamic data now relies on an external object that you're not currently referencing, the dynamic data keys will fail to resolve to anything while you're building the component. They'll also fail to resolve when the component is used, until the object prop is told to reference something.

This isn't great for DX or UX because empty/broken components that are waiting on data aren't very user friendly.

That's what the Object Prop code editor is for. It accepts placeholder/default object data and will render that data when an object source is not available.

For our blog post card situation, we'd add the following JSON to our Object Prop in the component editor:
```
{    "title": "Title of the Post",    "featuredImage": "[url-to-sample-image]",    "permalink": {        "relative": "#"    }}
```
This is the data you'll see while you're building the component. And when you use the component in your development workflow, it's the data you'll see prior to choosing a source object.

## Using Your Component[​](_components_props_prop-object.md#using-your-component)

Once your component is built using the Object Prop, it's very easy to use. Simply drop your component into the page and look for the object attribute in the attributes panel. It will be named whatever you named your Object Prop.

This input is a combobox. If you place the component inside a loop, it will automatically populate itself with the proper key from any parent or ancestor loops. If it's a single loop, your component will work out of the box. If it's a nested loop, you'll want to make sure that the correct data source is selected.

You also type custom values into the input for edge case scenarios.

#### _components_props_prop-select.md

> Source: https://docs.etchwp.com/components/props/prop-select
> Scraped: 10.03.2026 08:20:51

The Select Prop is a dropdown selection field that allows you to declare multiple `key : value` pairs with the "key" essentially being the "label" or "option" in the dropdown. The "value" is typically output as code.

If the key and value are to be the same, you can define a single key, which will also be the value by default.

One key, or one key-value pair, should be placed on each line.

info

When writing a key/value pair, it's imperative that you put a space between the key (label), the ":" (separator), and the value when defining key/value pairs.

**Incorrect:** `key:value`

**Correct:** `key : value`.

Referencing a select prop with dynamic data will output the value of the prop by default. It's not currently possible to output the key, though it will be in the future.

#### _components_props_prop-text.md

> Source: https://docs.etchwp.com/components/props/prop-text
> Scraped: 10.03.2026 08:20:51

[Skip to main content](_components_props_prop-text.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Components (Custom)
*   Component Props
*   Text Prop

The text prop is the most basic component prop. It allows you to dynamically insert a string of text into a component. It should be used whenever a text string or "textarea" is needed.

[

Previous

Slots

](_components_prop-slot.md)[

Next

Boolean Prop

](_components_props_prop-boolean.md)

#### _components_using-a-component-dynamic.md

> Source: https://docs.etchwp.com/components/using-a-component-dynamic
> Scraped: 10.03.2026 08:20:47

Dynamic usage means a component's props are populated by dynamic data keys — from loops, templates, or other dynamic contexts — rather than manually entered values. This is how you build repeating, data-driven layouts with components.

## Component Scope[​](_components_using-a-component-dynamic.md#component-scope)

Before anything else, there is one critical concept to understand:

warning

**Never use loop or template keys directly inside a component.** Components have their own scope and cannot access external data unless it's explicitly passed in via a prop.

Keys like `{post.title}`, `{item.name}`, or any loop/template-level data will **not** resolve inside a component. This is by design. Components are self-contained — they only have access to global data (`this`, `site`, `url`) and whatever is explicitly passed in through their props.

To use dynamic data in a component, you pass dynamic data keys as prop values when using the component instance.

## Using Components in Loops[​](_components_using-a-component-dynamic.md#using-components-in-loops)

The most common dynamic use case is placing a component inside a loop. The workflow is straightforward:

### 1\. Build the component with regular props[​](_components_using-a-component-dynamic.md#1-build-the-component-with-regular-props)

In the component editor, create your props as normal — Text, Image, Boolean, etc. Map them to the component's elements just like you would for static usage.

For example, a blog post card might have:

*   **Post Title** (Text) → mapped to the heading element
*   **Post Image** (Image) → mapped to the image element
*   **Post Link** (Text) → mapped to the link's `href`

### 2\. Place the component inside a loop[​](_components_using-a-component-dynamic.md#2-place-the-component-inside-a-loop)

Drop your component inside a loop on the canvas. For example, place your blog post card inside a posts loop.

### 3\. Fill in props with dynamic data keys[​](_components_using-a-component-dynamic.md#3-fill-in-props-with-dynamic-data-keys)

When you select the component instance, you'll see the prop inputs in the properties panel — the same inputs you'd use for static data. Instead of typing hardcoded values, enter dynamic data keys:

*   **Post Title** → `{item.title}`
*   **Post Image** → `{item.image.id}`
*   **Post Link** → `{item.permalink.relative}`

Each iteration of the loop will resolve these keys to the correct data for that item.

## Using Components in Templates[​](_components_using-a-component-dynamic.md#using-components-in-templates)

The same approach works in templates. If a template provides dynamic context (like the current post being viewed), pass that data into the component's props using dynamic data keys.

For example, a hero component used in a single post template might have:

*   **Heading** → `{this.title}`
*   **Featured Image** → `{this.featuredImage}`

The component itself never directly references template-level data — it always receives data through its props.

## Example: Blog Post Card in a Loop[​](_components_using-a-component-dynamic.md#example-blog-post-card-in-a-loop)

Here's a complete example tying everything together.

**Component setup (in the component editor):**

1.  Create the following props:
    *   **Post Title** (Text)
    *   **Post Image** (Image)
    *   **Post Link** (Text)
    *   **Is Featured** (Boolean)
2.  Map each prop to the appropriate element in the component
3.  Save the component

**Usage (on a page or template):**

1.  Create a loop for your blog posts
2.  Drop the blog post card component inside the loop
3.  Fill in the props with dynamic data keys:
    *   **Post Title** → `{item.title}`
    *   **Post Image** → `{item.image.id}`
    *   **Post Link** → `{item.permalink.relative}`
    *   **Is Featured** → leave as static (toggle on/off per instance) or use a dynamic key if available

Each card now renders with the correct post title, image, and link for that iteration of the loop.

## Static vs Dynamic: When to Use Which[​](_components_using-a-component-dynamic.md#static-vs-dynamic-when-to-use-which)

|  | Static | Dynamic |
| --- | --- | --- |
| **Data source** | Manually entered by the user | Populated from loops, templates, or queries |
| **Best for** | One-off pages, unique content | Repeating layouts, data-driven content |
| **Prop values** | Hardcoded text, selected images, toggles | Dynamic data keys like `{item.title}` |
| **Examples** | Landing page hero, about section | Blog post grid, product listings, team members |

tip

A single component can be used both ways. You might use a card component statically on a landing page and dynamically inside a loop on an archive page. The component doesn't care where its data comes from — it just needs its props filled in.

## Next Steps[​](_components_using-a-component-dynamic.md#next-steps)

* [Create component variations](_components_creating-component-variations.md)

#### _components_using-a-component-static.md

> Source: https://docs.etchwp.com/components/using-a-component-static
> Scraped: 10.03.2026 08:20:47

Once a component is built, saved, and its props are [mapped](_components_mapping-component-props.md), it's ready to be used. "Static" usage means you fill in prop values manually with hardcoded content — no loops, no dynamic data sources.

## Adding a Component to a Page[​](_components_using-a-component-static.md#adding-a-component-to-a-page)

You can add a component to any page using Cmd + I to open the insert menu, then search for or select your component.

Once placed, the component will render using its default prop values (if any were set during creation).

Remember: When you're not in component editor mode, you'll see the **prop inputs** for filling in values rather than the prop setup/configuration you saw when building the component.

## Filling in Props[​](_components_using-a-component-static.md#filling-in-props)

When you select a component instance on the canvas, its props appear in a dedicated **properties panel**. This is where you provide the values for each prop.

Each prop type has its own input:

*   **Text** — A text field where you type your content directly (e.g., a heading, description, or label)
*   **Boolean** — A toggle switch for true/false values (e.g., show/hide a badge)
*   **Select** — A dropdown to choose from predefined options (e.g., size, theme, or layout variation)
*   **Image** — A media selector to choose an image from the media library or enter a URL
*   **Array** — A structured input for lists or collections of data
*   **Slot** — A content area where you can drag and drop other elements or components

Fill in each prop with the specific content for this instance of the component.

## Example: Static Service Card[​](_components_using-a-component-static.md#example-static-service-card)

Imagine a service card component with these props:

| Label | Type | Purpose |
| --- | --- | --- |
| Service Name | Text | The name of the service |
| Service Description | Text | A brief description |
| Service Image | Image | The service's icon or photo |
| Is Featured | Boolean | Whether to show a "featured" badge |

To use this component statically:

1.  Drop the service card component onto your page
2.  Select it and find the properties panel
3.  Fill in the props:
    *   **Service Name** → "Web Design"
    *   **Service Description** → "Custom websites tailored to your brand and goals."
    *   **Service Image** → Select an image from the media library
    *   **Is Featured** → Toggle on if this service should be highlighted

Each instance of the card can have completely different values. Place three cards on the page and fill in different service information for each one.

## When to Use Static Data[​](_components_using-a-component-static.md#when-to-use-static-data)

Static data is ideal when:

*   You're building one-off pages (landing pages, about pages)
*   The content is unique to each component instance and manually entered
*   You don't have a data source like a loop or query to pull from
*   You're prototyping or building out a design before connecting to dynamic data

If you find yourself placing the same component repeatedly inside a loop or template and want it populated automatically from a data source, that's where [dynamic data](_components_using-a-component-dynamic.md) comes in.

## Next Steps[​](_components_using-a-component-static.md#next-steps)

* [Use a component with dynamic data](_components_using-a-component-dynamic.md)

#### _conditional-logic_advanced-conditions.md

> Source: https://docs.etchwp.com/conditional-logic/advanced-conditions
> Scraped: 10.03.2026 08:20:47

While basic conditions are great for simple use cases, Etch provides powerful advanced condition features for more complex scenarios. This guide will show you how to leverage these advanced features to create sophisticated conditional logic in your designs.

## Logical Operators[​](_conditional-logic_advanced-conditions.md#logical-operators)

Etch supports logical operators to combine multiple conditions together:

### AND Operator (`&&`)[​](_conditional-logic_advanced-conditions.md#and-operator-)

Use the `&&` operator when you want to show an element only if **all** conditions are true:
```
props.isActive && props.rating >= 4.5
```
This will only show the element if the component's `isActive` prop is `true` AND the `rating` prop is at least `4.5`.

### OR Operator (`||`)[​](_conditional-logic_advanced-conditions.md#or-operator-)

Use the `||` operator when you want to show an element if **any** of the conditions are true:
```
user.userRoles.includes("administrator") || user.userRoles.includes("editor")
```
This will show the element if the user has either the `administrator` OR `editor` role.

## Nested Conditions[​](_conditional-logic_advanced-conditions.md#nested-conditions)

One of the most powerful features of Etch's advanced conditions is the ability to nest conditions within each other, creating complex logical expressions.

### Basic Nesting[​](_conditional-logic_advanced-conditions.md#basic-nesting)

You can nest conditions by using parentheses to group expressions:
```
(props.isActive || props.isHighlighted) && (props.rating >= 4.5)
```
This will show the element only if both of these conditions are true:

| Condition 1 | Operator | Condition 2 |
| --- | --- | --- |
| The component is either active **OR** highlighted | **AND** | The component's rating is at least 4.5 stars |

## Dynamic Comparison Values[​](_conditional-logic_advanced-conditions.md#dynamic-comparison-values)

You can compare values dynamically in your conditions.

This condition checks if the current user is the author of the post:
```
this.author.id === user.id
```
This condition shows a product only when its price is within the budget specified in the URL parameter. To get to that point, let's say that a user filled out a form and specified a budget. Then they are redirected to a grid of products. This shows a product only when its price is within the budget specified in the URL parameter.
```
this.meta.price <= url.parameter.budget
```
## Loose vs Strict Comparisons[​](_conditional-logic_advanced-conditions.md#loose-vs-strict-comparisons)

Understanding the difference between loose and strict comparisons is crucial for writing reliable conditions.

### Loose Comparisons (`==` and `!=`)[​](_conditional-logic_advanced-conditions.md#loose-comparisons--and-)

*   Compares values after attempting type conversion
*   `"5" == 5` returns `true` (string "5" is converted to number 5)
*   `true == 1` returns `true` (boolean true is converted to number 1)
*   `false == 0` returns `true` (boolean false is converted to number 0)

**Use Loose Comparisons when:**   You want flexible matching regardless of data type
*   You expect the data might come in different formats

### Strict Comparisons (`===` and `!==`)[​](_conditional-logic_advanced-conditions.md#strict-comparisons--and-)

*   Compares both value AND type without conversion
*   `"5" === 5` returns `false` (string vs number)
*   `true === 1` returns `false` (boolean vs number)
*   `false === 0` returns `false` (boolean vs number)

**Use Strict Comparisons when:**   You need precise type and value matching
*   Working with exact data validation
*   You want to prevent unexpected type conversion bugs

In most cases, strict comparisons (`===`, `!==`) are safer and prevent unexpected behavior, but loose comparisons can be useful when dealing with data from different sources where type conversion is needed.

## Best Practices for Advanced Conditions[​](_conditional-logic_advanced-conditions.md#best-practices-for-advanced-conditions)

1.  **Break complex conditions into smaller parts** - Instead of one massive condition, consider using multiple condition elements with simpler logic.

2.  **Use parentheses for clarity** - Even when not strictly needed, parentheses can make your conditions more readable.

3.  **Be careful with type conversion** - Remember from the Basic Conditions guide that loose comparisons (`==`, `!=`) perform type conversion while strict comparisons (`===`, `!==`) do not.

tip

When using `{#if}` statements, remember they are block-level conditions that wrap elements. If you need an inline conditional (for example, inside an attribute value like a `class`), use [Comparison Modifiers](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md) instead.

## Debugging Advanced Conditions[​](_conditional-logic_advanced-conditions.md#debugging-advanced-conditions)

When working with complex conditions, debugging can be challenging. Here are some tips:

1.  **Break it down** - Test each part of your condition separately to identify which part is not behaving as expected.

2.  **Start simple and build up** - Begin with the simplest version of your condition and gradually add complexity.

3.  **Check your data types** - Some condition issues stem from comparing values of different types.

#### _conditional-logic_basic-conditions.md

> Source: https://docs.etchwp.com/conditional-logic/basic-conditions
> Scraped: 10.03.2026 08:20:46

The simplest conditions to start with are simple single condition `if` statements.

All you have to remember is that you're programming logic to _**show**_ the elements inside the condition. Of course, if that condition doesn't resolve to showing the element, then the element is effectively hidden.

The process is simple. Ask yourself two questions:

1.  What data do I want to check?
2.  Should I write the statement as positive or negative to show the element?

One of the simplest conditions is based on showing a `logout` link if the user is logged in, and a `login` link if the user is logged out. Doing this as an exercise will help you understand exactly how simple `if` conditions work.

Let's ask ourselves the two questions:

*   **What data do I want to check?**: In this case, we want to check the [Dynamic Data Key](_dynamic-data_dynamic-data-keys.md), `user.loggedIn`.
*   **Should I write the statement as positive or negative to show the element?**: In this case, we want to write it as a positive to show the logout link and as a negative to show the login link.

## Conditional Logic With the UI[​](_conditional-logic_basic-conditions.md#conditional-logic-with-the-ui)

Add a condition element to the page by clicking the Condition Element icon:

![Etch Condition Element](https://docs.etchwp.com/assets/images/etch-condition-element-870d1e9a1e12723124229dbfeed5b198.webp)

You'll see the condition element in the structure panel. Add a link element inside of it.

When you click the condition element in the structure panel, you'll also see an exposed Attribute panel for it. It looks like this:

![Etch Conditions UI](https://docs.etchwp.com/assets/images/etch-condition-ui-059ccfda86c2636c49d6067fef8b78e7.webp)

When using the UI like this, you have to remember that the `{#if}` was already written for you. So all you're doing is checking the data.

And since conditions are blocks in the editor, you are free to drag whatever elements you want into either condition. It's very flexible. You don't need one condition per element – a single condition can control an entire collection of elements.

## Boolean Conditions[​](_conditional-logic_basic-conditions.md#boolean-conditions)

Boolean conditions evaluate to true/false directly (e.g., `user.loggedIn`). These are the simplest and most common checks. Use them whenever you can keep your logic as a straightforward yes/no.

### Practical Examples[​](_conditional-logic_basic-conditions.md#practical-examples)

#### Check if user is logged in[​](_conditional-logic_basic-conditions.md#check-if-user-is-logged-in)

Write the boolean key directly. You don't need to compare to `true`.
```
{#if user.loggedIn}  {/if}
```
#### Check if user is NOT logged in[​](_conditional-logic_basic-conditions.md#check-if-user-is-not-logged-in)

Prefix the key with `!` to invert the boolean.
```
{#if !user.loggedIn}  {/if}
```
#### Check if a post has a specific category[​](_conditional-logic_basic-conditions.md#check-if-a-post-has-a-specific-category)

You can also use data modifiers in conditions. For example, you can check a post's assigned category terms without the need for looping by combining [.pluck()](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#pluck) and [.includes()](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#includes).
```
{#if this.categories.pluck("name").includes("ABCs")}  {/if}
```
## Non-Boolean Conditions[​](_conditional-logic_basic-conditions.md#non-boolean-conditions)

If you need to check a specific value, like the value of a custom field, then you will use comparison operators. In most cases, you should use strict comparisons (`===`, `!==`) which compare both the value and the type.
```
{#if props.productCategory === "featured"}  {/if}
```
For more information about the difference between loose and strict comparisons, see the [Advanced Conditions](_conditional-logic_advanced-conditions.md#loose-vs-strict-comparisons) guide.

### Practical Examples[​](_conditional-logic_basic-conditions.md#practical-examples-1)

#### Star rating with strict comparisons[​](_conditional-logic_basic-conditions.md#star-rating-with-strict-comparisons)

For this example, let's say you're creating a star rating component. We'll keep it simple and say the rating can be whole numbers from 1 to 5.

In your component, create a prop called "rating." This is where we'll place the number and this is the prop we'll check the value of in the condition.

One way to do this would be to create five conditions that all check the rating value. If the rating equals 1, show one star. If the rating equals 2, show two stars.
```
{#if props.rating === 1}  {/if}{#if props.rating === 2}   {/if}{#if props.rating === 3}    {/if}
```
This approach uses strict comparison (`===`), which is recommended for most cases. It ensures that `props.rating` is exactly the number we're checking for.

## Values vs Strings[​](_conditional-logic_basic-conditions.md#values-vs-strings)

Let's continue with the above example, but tackle it with a more efficient (requires fewer star elements) and flexible (since it supports decimal values) approach.

For this approach, we'll check the actual numerical value of the rating using mathematical operators (`>`, `<`, `>=`, `<=`):
```
{#if props.rating >= 1}  {/if}{#if props.rating >= 2}  {/if}{#if props.rating >= 3}  {/if}{#if props.rating >= 4}  {/if}{#if props.rating >= 5}  {/if}
```
There are two very important and distinct differences you need to understand:

1.  We're checking a VALUE (math) instead of a STRING (text).
2.  This is denoted by removing the quotations around the value.

Look closely:

`{#if props.rating === "2"}` says, "Show the element if the value of `props.rating` literally says "2".

But when you write `{#if props.rating >= 2}`, Etch can actually calculate the value and see if the condition is true, because it knows that 2 is equal to 2. And the condition that comes before it, `{#if props.rating >= 1}` will also be true because Etch knows that 2 is greater than 1.

You would never write `{#if props.rating >= "2"}` because "greater or equal" is irrelevant when examining a string of text. Again, putting the quotes around the number tell Etch that you want to examine "2" as a string, and not a numerical value.

That's a critical distinction that many beginners get wrong.

## Best Practices[​](_conditional-logic_basic-conditions.md#best-practices)

1.  **Use strict comparisons (`===`, `!==`) by default** to avoid unexpected behavior
2.  **Always use quotes around text values** and never around numbers or booleans
3.  **Use mathematical operators (`>=`, `<=`, `>`, `<`) for numerical ranges**
4.  **For more complex conditions**, refer to the [Advanced Conditions](_conditional-logic_advanced-conditions.md) guide

tip

When using `{#if}` statements, remember they are block-level conditions that wrap elements. If you need an inline conditional (for example, inside an attribute value like a `class`), use [Comparison Modifiers](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md) instead.

## Practice Makes Perfect[​](_conditional-logic_basic-conditions.md#practice-makes-perfect)

The first step to learning how to use conditions is to not be afraid of them.

Conditional logic is a critical piece of advanced web development and personalized web experiences. Once you've used them a few times, you'll quickly get comfortable. And once you get comfortable, things get really fun!

As always, if you get stuck, don't hesitate to ask for help in the [Etch Community](https://community.etchwp.com/).

#### _conditional-logic_intro-to-conditional-logic.md

> Source: https://docs.etchwp.com/conditional-logic/intro-to-conditional-logic
> Scraped: 10.03.2026 08:20:48

Conditional logic is a programming concept that enables your website to show different content or behave differently based on specific conditions. Think of it as the "if this, then that" system that makes your website intelligent and personalized.

In web design, conditional logic allows you to:

*   Show different content to different users
*   Display content only when certain conditions are met
*   Create dynamic layouts that adapt to available content
*   Build personalized user experiences

## How Conditional Logic Works in Etch[​](_conditional-logic_intro-to-conditional-logic.md#how-conditional-logic-works-in-etch)

In Etch, conditional logic is created using our Condition element or by writing conditions directly into the HTML code.

![Etch Condition Element](https://docs.etchwp.com/assets/images/etch-condition-element-870d1e9a1e12723124229dbfeed5b198.webp)

The condition element is essentially just a shortcut to writing this in the HTML Editor:
```
{#if}{/if}
```
Both methods will create the condition in the code as well as expose a Condition block in the Structure Panel:

![Etch Condition Element](https://docs.etchwp.com/assets/images/etch-condition-exposed-986a7c1de3eb94193b6ab1116b1ffa6f.webp)

Whatever goes inside the condition will render on the page if the condition resolves to true.

## Common Conditional Logic Patterns[​](_conditional-logic_intro-to-conditional-logic.md#common-conditional-logic-patterns)

### 1\. **Content Existence Checks**[​](_conditional-logic_intro-to-conditional-logic.md#1-content-existence-checks)

Show content only when it exists:

*   Display featured images only when they're uploaded
*   Show author bio only when author has a bio in the database
*   Display "Read More" button only when there's an excerpt
*   Show category tags only when categories are assigned

### 2\. **User Authentication States**[​](_conditional-logic_intro-to-conditional-logic.md#2-user-authentication-states)

Adapt content based on user login status:

*   Show login/logout links based on logged in status
*   Display user avatar and name in header when authenticated
*   Display personalized welcome message for returning users

### 3\. **Content Type & Status Conditions**[​](_conditional-logic_intro-to-conditional-logic.md#3-content-type--status-conditions)

Display different layouts based on content:

*   Show "Featured" badge only for featured posts
*   Show "New" indicator for posts published in last 7 days
*   Show/hide content for premium/paid subscribers

## Getting Started[​](_conditional-logic_intro-to-conditional-logic.md#getting-started)

Conditional logic in Etch is very easy to implement. We'll walk you through using both basic and advanced conditions so you feel like a pro in no time. And so you can create intelligent, responsive websites that provide the right experience to the right user at the right time.

#### _dynamic-data_dynamic-data-integration_option-dynamic-data-integration.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-integration/option-dynamic-data-integration
> Scraped: 10.03.2026 08:20:45

*   Dynamic Data
*   Dynamic Data Integration
*   Options Dynamic Data

## Options Dynamic Data Integration

You can extended the key `{options.CUSTOM}` using the following filter.

**Filter:** `etch/dynamic_data/option`

**Parameters:**

| Key | Description |
| --- | --- |
| `data` | Array with all dynamic data for `term` key. |

info

Make sure you always return an `array`, otherwise we will ignore the filter and pass the previous valid data.

## How to use[​](_dynamic-data_dynamic-data-integration_option-dynamic-data-integration.md#how-to-use)

### 1) Add the filter hook[​](_dynamic-data_dynamic-data-integration_option-dynamic-data-integration.md#1-add-the-filter-hook)

You can add the filter in the `functions.php` or use a snippet plugin.
```
add_filter('etch/dynamic_data/option', function( $data ) {    $data['my_custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```
### 2) Call the new key[​](_dynamic-data_dynamic-data-integration_option-dynamic-data-integration.md#2-call-the-new-key)

With the filter created, now you can call it in the builder.
```
{options.my_custom_data.field_name_1}{options.my_custom_data.field_name_2.sub_field_name_1}
```
[

Previous

Dynamic Data Keys

](_dynamic-data_dynamic-data-keys.md)[

Next

Post Dynamic Data

](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md)

#### _dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-integration/post-dynamic-data-integration
> Scraped: 10.03.2026 08:20:44

*   Dynamic Data
*   Dynamic Data Integration
*   Post Dynamic Data

## Post Dynamic Data Integration

You can extended the key `{this.CUSTOM}` using the following filter.

**Filter:** `etch/dynamic_data/post`

**Parameters:**

| Key | Description |
| --- | --- |
| `data` | Array with all dynamic data for `this` key. |
| `post_id` | The post ID. |

info

Make sure you always return an `array`, otherwise we will ignore the filter and pass the previous valid data.

## How to use[​](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md#how-to-use)

### 1) Add the filter hook[​](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md#1-add-the-filter-hook)

You can add the filter in the `functions.php` or use a snippet plugin.
```
add_filter('etch/dynamic_data/post', function( $data, $post_id ) {    $data['custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```
### 2) Call the new key[​](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md#2-call-the-new-key)

With the filter created, now you can call it in the builder.
```
{this.custom_data.field_name_1}{this.custom_data.field_name_2.sub_field_name_1}
```
#### Inside a loop[​](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md#inside-a-loop)

If you are using inside a loop you can call it this way:
```
{#loop posts as item}{item.custom_data.field_name_1}{/loop}
```
[

Previous

Options Dynamic Data

](_dynamic-data_dynamic-data-integration_option-dynamic-data-integration.md)[

Next

Term Dynamic Data

](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md)

#### _dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-integration/term-dynamic-data-integration
> Scraped: 10.03.2026 08:20:45

*   Dynamic Data
*   Dynamic Data Integration
*   Term Dynamic Data

## Term Dynamic Data Integration

You can extended the key `{term.CUSTOM}` using the following filter.

**Filter:** `etch/dynamic_data/term`

**Parameters:**

| Key | Description |
| --- | --- |
| `data` | Array with all dynamic data for `term` key. |
| `term_id` | The Term ID. |
| `taxonomy` | The Term taxonomy name. |

info

Make sure you always return an `array`, otherwise we will ignore the filter and pass the previous valid data.

## How to use[​](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md#how-to-use)

### 1) Add the filter hook[​](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md#1-add-the-filter-hook)

You can add the filter in the `functions.php` or use a snippet plugin.
```
add_filter('etch/dynamic_data/term', function( $data, $term_id, $taxonomy ) {    $data['term_custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```
### 2) Call the new key[​](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md#2-call-the-new-key)

With the filter created, now you can call it in the builder.
```
{term.term_custom_data.field_name_1}{term.term_custom_data.field_name_2.sub_field_name_1}
```
#### Inside a loop[​](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md#inside-a-loop)

If you are using inside a loop you can call it this way:
```
{#loop terms as item}    {item.term_custom_data.field_name_1}{/loop}
```
[

Previous

Post Dynamic Data

](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md)[

Next

User Dynamic Data

](_dynamic-data_dynamic-data-integration_user-dynamic-data-integration.md)

#### _dynamic-data_dynamic-data-integration_user-dynamic-data-integration.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-integration/user-dynamic-data-integration
> Scraped: 10.03.2026 08:20:44

*   Dynamic Data
*   Dynamic Data Integration
*   User Dynamic Data

## User Dynamic Data Integration

You can extended the key `{user.CUSTOM}` using the following filter.

**Filter:** `etch/dynamic_data/user`

**Parameters:**

| Key | Description |
| --- | --- |
| `data` | Array with all dynamic data for `user` key. |
| `user_id` | The User ID. |

info

Make sure you always return an `array`, otherwise we will ignore the filter and pass the previous valid data.

## How to use[​](_dynamic-data_dynamic-data-integration_user-dynamic-data-integration.md#how-to-use)

### 1) Add the filter hook[​](_dynamic-data_dynamic-data-integration_user-dynamic-data-integration.md#1-add-the-filter-hook)

You can add the filter in the `functions.php` or use a snippet plugin.
```
add_filter('etch/dynamic_data/user', function( $data, $user_id ) {    $data['user_custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```
### 2) Call the new key[​](_dynamic-data_dynamic-data-integration_user-dynamic-data-integration.md#2-call-the-new-key)

With the filter created, now you can call it in the builder.
```
{user.user_custom_data.field_name_1}{user.user_custom_data.field_name_2.sub_field_name_1}
```
[

Previous

Term Dynamic Data

](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md)[

Next

Basic Modifiers

](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md)

#### _dynamic-data_dynamic-data-intro.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-intro
> Scraped: 10.03.2026 08:20:47

## Getting Started With Dynamic Data

Dynamic data is the foundation of proper content management in modern web design. They allow you to pull content from various sources and display it dynamically throughout your website.

For example, let's say you're building a website for a plumbing company that wants to list their services and create individual pages for each service.

Instead of manually creating each service listing and page, you can create a template that controls what all service pages look like, create a component for what all service cards are supposed to look like (which you would place in a [loop](_loops_basic-loops.md)), and then use dynamic data to automatically pull all the service content into the templates and cards.

This is proper, scalable, maintainable modern web design and content management.

**Without dynamic data, you'd need to:**   Create individual cards for each service listing
*   Manually create separate pages for each service
*   Duplicate styling and structure for each service
*   Risk inconsistencies between service pages
*   Manually update content when new services are added

**With dynamic data:**   Create one card component
*   Create on loop
*   Create one template
*   Have centralized control over all structure, styling, and content from one place.

## Benefits of Dynamic Data[​](_dynamic-data_dynamic-data-intro.md#benefits-of-dynamic-data)

*   **Centralized Content Management**: All your content lives in WordPress, making it easy to update, organize, and maintain. No more scattered content across multiple pages and areas of your site.

*   **Automatic Updates**: When you update content in WordPress, all pages using that content automatically reflect the changes. No manual updates required.

*   **Scalability**: Add new content (posts, products, services) and it automatically appears on your site without additional development work.

*   **Consistency**: Templates ensure all content follows the same structure and styling, maintaining brand consistency across your entire site.

*   **Performance**: Dynamic data is loaded efficiently, only pulling the content that's actually needed for each page.

*   **Flexibility**: Display the same content in multiple ways - as cards, lists, grids, or detailed pages - all from the same data source.

## Next Steps[​](_dynamic-data_dynamic-data-intro.md#next-steps)

Now that you understand why it's important to use dynamic data, let's talk about how to use it in Etch.

#### _dynamic-data_dynamic-data-keys.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-keys
> Scraped: 10.03.2026 08:20:44

This page will serve as the master doc page for all dynamic data keys. Feel free to bookmark it.

## Available Keys[​](_dynamic-data_dynamic-data-keys.md#available-keys)

*   **Templates** use `this.key`.
*   **Taxonomies** use `taxonomy.key` and `term.key`.
*   **Loops** use `item.key` by default (but you control the key).

| Key | Description |
| --- | --- |
| `id` | The unique identifier for the item (post, page, etc). |
| `title` | The title of the item. |
| `slug` | The URL-friendly slug for the item. |
| `content` | The main content/body of the item. |
| `excerpt` | The summary or excerpt of the item. |
| `permalink.relative` | The relative permalink (URL path) to the item (e.g., `/blog/my-post`). |
| `permalink.full` | The full absolute permalink (URL) to the item (e.g., `https://site.com/blog/my-post`). |
| `image` | All image object data (two examples of use below). |
| `image.url` | The URL to the image. |
| `image.alt` | The image's alt text. |
| `date` | The publish date of the item. |
| `modified` | The last modified date of the item. |
| `status` | The status of the item (e.g., `publish`, `draft`). |
| `type` | The post type (e.g., `post`, `page`, `product`). |
| `thumbnail` | The URL of the thumbnail image for the item. |
| `author` | The author object for the item. |
| `author.id` | The unique identifier for the author. |
| `author.displayName` | The display name of the author. |
| `template` | The template object assigned to the item. |
| `template.slug` | The slug of the template. |
| `template.id` | The unique identifier for the template. |
| `template.title` | The title of the template. |
| `readingTime` | The estimated reading time in minutes based on content word count (200 words/min). |
| `post_author` | The unique identifier for the author. |
| `post_date` | The publish date of the item. |
| `post_date_gmt` | The publish date of the item. |
| `post_content` | The main content/body of the item. |
| `post_title` | The title of the item. |
| `post_excerpt` | The summary or excerpt of the item. |
| `post_status` | The status of the item (e.g., `publish`, `draft`). |
| `comment_status` | The status for comments (e.g., `open`, `closed`). |
| `ping_status` | The ping stauts of the item (e.g., `open`, `closed`). |
| `post_password` | The items's password. |
| `post_name` | The URL-friendly slug for the item. |
| `to_ping` | URLs queued to be pinged. |
| `pinged` | URLs that have been pinged. |
| `post_modified` | The modified date of the item. |
| `post_modified_gmt` | The modified date of the item. |
| `guid` | The GUID of the item. |
| `menu_order` | The menu order of the item. |
| `post_type` | The post type (e.g., `post`, `page`, `product`). |
| `post_mime_type` | The mime type of attachment item. |
| `post_parent` | The ID of a post's parent post. |
| `comment_count` | The total of comments for the item. |

## User Keys[​](_dynamic-data_dynamic-data-keys.md#user-keys)

| Key | Description |
| --- | --- |
| `user` | The user object for the current user. |
| `user.id` | The unique identifier for the user. |
| `user.login` | The username/login of the user. |
| `user.email` | The email address of the user. |
| `user.displayName` | The display name of the user. |
| `user.firstName` | The first name of the user. |
| `user.lastName` | The last name of the user. |
| `user.nickname` | The nickname of the user. |
| `user.fullName` | The full name of the user (first + last). |
| `user.description` | The biographical description of the user. |
| `user.userUrl` | The website URL of the user. |
| `user.avatar` | The URL of the user's avatar image. |
| `user.registered` | The registration date of the user. |
| `user.userRoles` | Array of all roles assigned to the user. |
| `user.userRole` | The primary role of the user (first role in the array). |
| `user.capabilities` | The capabilities/permissions of the user. |
| `user.loggedIn` | Whether the user is currently logged in (boolean). |

## Site Keys[​](_dynamic-data_dynamic-data-keys.md#site-keys)

| Key | Description |
| --- | --- |
| `site.name` | The site name/title. |
| `site.description` | The site tagline/description. |
| `site.home_url` | The home URL of the site. |
| `site.url` | The site URL. |
| `site.admin_url` | The WordPress admin area URL. |
| `site.version` | The WordPress version. |
| `site.language` | The site language code. |
| `site.isMultisite` | Whether the site is part of a multisite network (boolean). |
| `site.currentDate` | References the current date. Is returned as a unix timestamp. |

## Options Keys[​](_dynamic-data_dynamic-data-keys.md#options-keys)

The `options` key provides access to global site options configured via options pages. These values are available everywhere (pages, templates, loops, headers/footers, etc.).

For up-to-date integrations, namespaces, and scoping patterns, see the [Options Pages](_integrations_custom-fields_options-pages.md) documentation. It covers:

*   Which integrations are currently supported.
*   The required namespace for each integration (e.g., `acf`, `metabox`, `jetengine`).
*   Integration-specific syntax (for example, Meta Box requiring a option page name: `options.metabox.option_page_name.field_name`).

### Notes[​](_dynamic-data_dynamic-data-keys.md#notes)

*   Requires an Options Page created in the integration plugin.
*   Keys resolve globally; no post context is required.

## URL Keys[​](_dynamic-data_dynamic-data-keys.md#url-keys)

| Key | Description |
| --- | --- |
| `url.full` | The current full URL of the page. |
| `url.relative` | The relative path portion of the current URL. |
| `url.parameter` | The URL parameters/query string of the current page. |

`url.parameter` allows you to reference the value of any parameter key in the url string, which can be very helpful for personalizing page content by injecting content or creating conditions.

For example, if you have a URL of `/thank-you/?firstName=John`, you can use `{url.parameter.firstName}` to output `John`.

For security, all URL parameters are automatically sanitized using WordPress's `sanitize_text_field()` function to prevent XSS attacks.

tip

This key is case sensitive. If you have a parameter of `Name` in your URL, you need to use `{url.parameter.Name}`, not `{url.parameter.name}`

## Environment Keys[​](_dynamic-data_dynamic-data-keys.md#environment-keys)

| Key | Description |
| --- | --- |
| `environment.current` | The active rendering environment. |
| `environment.context` | Provides additional context for the current environment. |

`environment.current` exposes the name of the environment in which the content is currently being rendered.

**Possible values:**   `"etch"`
*   `"gutenberg"`
*   `"frontend"`

This key is primarily intended for conditional rendering, allowing you to tailor output depending on where the content is displayed.

* * *

In most scenarios `environment.context` will be unset.

It is set to `"componentEditor"` when rendering inside the component editor. This allows you to conditionally display content only while editing a component.

### Example: Environment-specific content[​](_dynamic-data_dynamic-data-keys.md#example-environment-specific-content)

You can use `environment.current` to include content that should only appear in editor contexts and be excluded from the frontend.
```
{#if environment.current === "etch" || environment.current === "gutenberg"}

    This is a developer note that only appears in Etch and Gutenberg.  {/if}
```
In this example, the developer note is visible in Etch and Gutenberg but omitted from the frontend render.

## Etch Custom Fields Support[​](_dynamic-data_dynamic-data-keys.md#etch-custom-fields-support)

Custom fields created within Etch can be accessed with the `etch` extension.

For example, `item.etch.field_id` in a loop or `this.etch.field_id` in a template.

Custom fields registered to WordPress can be accessed with the `meta` extension.

For example, `item.meta.field_id` in a loop or `this.meta.field_id` in a template.

## Third-Party Custom Fields[​](_dynamic-data_dynamic-data-keys.md#third-party-custom-fields)

Etch integrates with third-party custom field solutions like Advanced Custom Fields (ACF).

For detailed information on working with third-party custom fields, see the [Custom Fields](_integrations_custom-fields.md) section in Integrations.

## Custom Integration[​](_dynamic-data_dynamic-data-keys.md#custom-integration)

Etch allows you to extend Dynamic Data through filter hooks. This way, all main keys ([post](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md), [user](_dynamic-data_dynamic-data-integration_user-dynamic-data-integration.md), [term](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md), and [options](_dynamic-data_dynamic-data-integration_option-dynamic-data-integration.md)) can be extended.

## Valid Property Names and Bracket Notation[​](_dynamic-data_dynamic-data-keys.md#valid-property-names-and-bracket-notation)

When working with dynamic data keys, it's important to understand the rules for property names and when to use bracket notation.

*   **Valid property names** in dot notation can only contain: letters (a-z, A-Z), digits (0-9), and underscores (\_).

    *   Valid examples: `{this.title}`, `{item.acf_field}`, `{this.category_name}` ✅
    *   Invalid examples: `{this.post-title}`, `{item.full name}` ❌

    Any property name containing characters outside of letters, digits, and underscores (such as spaces, dashes, etc.) must use bracket notation with quotes:

    *   Keys with spaces: `{item["full name"]}`
    *   Keys with dashes: `{item["post-meta"]}`
    *   Keys with numbers: `{item[0]}` (for arrays)

    Examples:

    *   `{this["page title"]}` - Access a key with spaces
    *   `{item["author-info"]["email"]}` - Nested keys with dashes
    *   `{this.categories[0].name}` - Mix dot and bracket notation
    *   `{item["users"][0]["display-name"]}` - Multiple bracket notations

    You can use either single or double quotes in bracket notation: `{item['full name']}` and `{item["full name"]}` are equivalent.

## Tips for Working with Dynamic Data[​](_dynamic-data_dynamic-data-keys.md#tips-for-working-with-dynamic-data)

*   Not all keys are available for every item type. Availability depends on the context (e.g., posts, pages, custom post types).
    *   Use the Loop Manager (or just output `{this}` on the page/template) to view the data available for the the post type you are working with. This will show the full JSON object for the item in question, which can be helpful for understanding what data is available.
*   Some keys output the data directly (e.g., `{item.title}`, `{this.content}`, etc). If your key outputs a string, you can use it directly in your page or template.
*   Some keys are objects (e.g., `author`, `template`). These are inside of curly braces `{}`. If your key outputs an object, you need to drill down to a sub-key (e.g., `{item.author.displayName}`, `{this.template.slug`) to get to the data you're looking for.
*   Some keys are arrays (e.g., `categories`, `tags`). These are inside of square brackets `[]`. If your key outputs an array, you can `{#loop}` through it or access a specific item by index (e.g., `{this.categories.at(0).name}`). See the [Accessing Data in Arrays](_dynamic-data_dynamic-data-keys.md#accessing-data-in-arrays) section below for more information.
*   If you want to output curly braces (`{` and `}`) **without the dynamic data engine interpreting them**, you can do so by adding them as a separate string inside the dynamic expression. For example: `{"{This will be output as is}"}`

## Accessing Data in Arrays[​](_dynamic-data_dynamic-data-keys.md#accessing-data-in-arrays)

Some dynamic data keys return arrays (for example, `categories`, `tags`, etc). You can work with these arrays in two common ways:

**1) Loop through the items**   Create a loop that returns the array items you want to render, then output each item’s fields.

_Example: Loop categories for the current post:_
```
{#loop categories as category}{category.name}{/loop}
```
**2) Access a specific item by index (zero-based)**

You can use either **dot notation with the `.at()` modifier** or **bracket notation** to access a specific item:

**Dot notation (using .at() modifier):**
```
{this.categories.at(0).name}
```
**Bracket notation (direct array access):**
```
{this.categories[0].name}
```
Both approaches are equivalent. Continue using dot notation for simple property names (e.g., `{this.title}`, `{item.name}`). Use bracket notation only when needed for properties with special characters or spaces (e.g., `{this["author-name"]}`, `{item["full name"]}`).

info

We've updated the syntax to align with standard JavaScript and PHP conventions. Bracket notation is now available as an option for properties with special characters or spaces. Aligning with industry standards allows us to extend the functionality of dynamic data even further and will make it possible to add support for advanced features like mathematical operations in the future. The "old" syntax (dashes/spaces in dot notation) will no longer be supported, but standard dot notation like `{this.title}` remains unchanged and is the recommended approach for regular property names.

**Notes:**   Indexing is zero-based (`0` is the first item, `1` is the second, etc.).
*   It is possible to get the last item with `-1`, or the second to last item with `-2` and so on.
*   Ensure the array and the requested index exist before using them (e.g., a post may have no categories).

#### _dynamic-data_dynamic-data-modifiers_basic-modifiers.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-modifiers/basic-modifiers
> Scraped: 10.03.2026 08:20:47

## Basic Dynamic Data Modifiers

Dynamic data can be customized by applying modifiers directly to the data path. For example: `item.modifier()`

This allows you to format or transform values before they are displayed.

## Available Modifiers[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#available-modifiers)

| Modifier | Description | Example |
| --- | --- | --- |
| `.dateFormat()` | Formats a date into a user-friendly string. Refer to the [PHP DateTime::format documentation](https://www.php.net/manual/en/datetime.format.php) for available formatting options.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#dateformat) | `{this.date.dateFormat("F j, Y")}` → `July 25, 2025` |
| `.numberFormat()` |
Formats a number with grouped thousands and optional decimals.

Arguments `decimals`: default `0`
`decimalPoint`: default `"."`
`thousandsSeparator`: default `","` [More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#numberformat) | `value = 123456.78`

`{item.value.numberFormat(2, '.', ',')}` → `123,456.78`

 |
| `.toUpperCase()` | Converts all characters to uppercase (strings only). | `value = "John"`

`{item.value.toUpperCase()}` → `JOHN`

 |
| `.toLowerCase()` | Converts all characters to lowercase (strings only). | `value = "John"`

`{item.value.toLowerCase()}` → `john`

 |
| `.toString()` | Converts to a string. Arrays/objects become JSON when encodable.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#tostring) | `value = true`

`{item.value.toString()}` → `"true"`

 |
| `.toInt()` | Converts numeric values (incl. numeric strings) to an integer. Leaves others unchanged.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#toint) | `value = "123.9"`

`{item.value.toInt()}` → `123`

 |
| `.toSlug()` | Generates a URL-friendly slug from a string.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#toslug) | `value = "Über Theme"`

`{item.value.toSlug()}` → `"uber-theme"`

 |
| `.toBool()` | Converts common truthy/falsey inputs to a boolean (`true`/`false`).
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#tobool) | `value = "yes"`

`{item.value.toBool()}` → `true`

 |
| `.trim()` | Removes whitespace (including line breaks) at the beginning or end of a string. | `value = " hello "`

`{item.value.trim()}` → `"hello"`

 |
| `.ltrim()` | Removes whitespace from the start of a string. | `value = " hello"`

`{item.value.ltrim()}` → `"hello"`

 |
| `.rtrim()` | Removes whitespace from the end of a string. | `value = "hello "`

`{item.value.rtrim()}` → `"hello"`

 |
| `.stripTags()` |

Removes HTML tags from a string.

 | `value = "<a href="#">Link</a>"`

`{item.value.stripTags()}` → `"Link"`

 |
| `.urlEncode()` | Encodes a string for usage inside a URL. | `value = "Hello World!"`

`{item.value.urlEncode()}` → `"Hello%20World!"`

 |
| `.urlDecode()` | Decodes a URL-encoded string. | `value = "Hello%20World!"`

`{item.value.urlDecode()}` → `"Hello World!"`

 |
| `.truncateChars()` |

Truncates and returns the string after `count` characters.

Arguments`count`: maximum number of characters to keep
`ellipsis`: string to append if truncation occurs. default: `"..."` |

`title = "The quick brown fox jumps over the lazy dog"`

`{title.truncateChars(15)}` →
`The quick brown...`

 |
| `.truncateWords()` |

Truncates and returns the string after `count` words.

Arguments`count`: maximum number of words to keep
`ellipsis`: string to append if truncation occurs. default: `"..."` |

`title = "The quick brown fox jumps over the lazy dog"`

`{title.truncateWords(2)}` →
`The quick...`

 |
| `.round()` |

Rounds a number to the nearest integer or to a given precision.

Arguments `precision`: `int`, default `0` | `value = "3.14159"`

`{item.value.round(2)}` → `3.14`

 |
| `.ceil()` | Rounds a number up to the nearest integer. | `value = "1.2"`

`{item.value.ceil()}` → `2`

 |
| `.floor()` | Rounds a number down to the nearest integer. | `value = "1.9"`

`{item.value.floor()}` → `1`

 |
| `.concat()` |

Concatenates all the given strings to the source string. Any number of strings can be passed as arguments.

 |

`value = "Hello"`

`{item.value.concat(" ", "World", "!")}` → `"Hello World!"`

 |
| `.length()` |

Returns the length of a _string_ OR an _array_.

 |

`value = ["Foo", "bar"]`

`{item.value.length()}` → `2`

 |
| `.reverse()` |

Reverses the order of a _string_ OR an _array_.

 |

`value = [1, 2, 3]`

`{item.value.reverse()}` → `[3, 2, 1]`

 |
| `.at()` |

Returns the element at the given array index.

Arguments `index`: index of the value you want to get [More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#at) | `user.names = ["John", "David", "Sarah"]`

`{user.names.at(1)}` → `"David"`

 |
| `.slice()` |

Returns a portion of the array from `start` to `end` index.

Arguments`start`: index of the start value
`end`: index of the end value (not included) [More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#slice) | `animals = ["ant", "bison", "camel", "duck", "elephant"]`

`{item.animals.slice(2)}` → `["camel", "duck", "elephant"]`

 |
| `.indexOf()` |

Returns the index of a _substring_ within a _string_, or the index of a _value_ within an _array_.
Returns the `index` if found, or `-1` if not found.

 | `user.userRoles = ["author", "editor"]`

`{user.userRoles.indexOf('editor')}` → `1`

 |
| `.pluck()` |

Extracts a property from each object in an array and returns the values as a new array.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#pluck)

 | `this.categories = [{ name: "ABCs", slug: "abcs" }, { name: "XYZs", slug: "xyzs" }]`

`{this.categories.pluck("name")}` → `["ABCs", "XYZs"]`

 |
| `.keys()` |

Returns the keys of an object as an array. Non-object values pass through unchanged.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#keys)

 | `item.config = { color: "red", size: "lg" }`

`{item.config.keys()}` → `["color", "size"]`

 |
| `.values()` |

Returns the values of an object as an array. Non-object values pass through unchanged.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#values)

 | `item.config = { color: "red", size: "lg" }`

`{item.config.values()}` → `["red", "lg"]`

 |
| `.split()` |

Splits a string by the given separator and returns the result as an array.

Arguments `separator`: default `","` | `value = "Jan,Feb,Mar,Apr"`

`{item.value.split(",")}` →`   ["Jan", "Feb", "Mar", "Apr"]`

 |
| `.join()` | Combines array elements into a string with a separator. | `user.userRoles = ["author", "editor"]`

`{user.userRoles.join(", ")}` → `"author, editor"`

 |
| `.applyData()` | Reapplies available dynamic data to the given value.
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#applydata) | `item.text = "Hello {user.name}"`

`{item.text.applyData()}` → `"Hello John"`

 |
| `.unserializePhp()` |

Takes a serialized PHP string and converts it back to a usable value
[More Details](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#unserializephp)

 | `item.text = "a:3:{i:0;s:5:"apple";i:1;s:6:"banana";i:2;s:6:"cherry";}"`

`{item.text.unserializePhp()}` → `["apple", "banana", "cherry"]`

 |

## Detailed Modifier Reference[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#detailed-modifier-reference)

Below are some of the more complex modifiers and more detailed information about their usage.

### `.dateFormat()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#dateformat)

**Returns:** string (formatted date)

The `.dateFormat()` method formats Unix timestamps (seconds) or valid PHP date strings (e.g., `Y-m-d H:i:s`, `m/d/Y`, `F j, Y g:i a`). The arguments are passed as quoted strings (e.g., `.dateFormat("Y-m-d")`). Please refer to the [PHP datetime format documentation](https://www.php.net/manual/en/datetime.format.php) for more information. Invalid inputs are returned unchanged.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples)

*   `{this.date.dateFormat("Y-m-d")}` → `"2024-02-01"`
*   `{item.startDate.dateFormat("m/d/Y")}` → `"02/01/2024"`

⚠️ **Deprecated:** _`.format()` exists as a deprecated alias of `.dateFormat()`. Prefer `.dateFormat()` going forward._

* * *

### `.numberFormat()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#numberformat)

**Returns:** string (formatted number) or original value

The `.numberFormat()` method formats a numeric value with grouped thousands and configurable decimal precision/separators. It only applies to numeric inputs; non‑numeric values are returned unchanged. Arguments are passed as quoted strings (e.g., `numberFormat(2, ".", ",")`).

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `decimals` | int | `0` | Number of decimal digits |
| `decimalPoint` | string | `"."` | Decimal separator character |
| `thousandsSeparator` | string | `","` | Thousands separator character |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-1)

*   value1 = `123456`
    *   `{item.value1.numberFormat(2, ".", ",")}` → `"123,456.00"`
*   value2 = `1234567.123`
    *   `{item.value2.numberFormat(1, ",", ".")}` → `"1.234.567,1"`

* * *

### `.toString()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#tostring)

**Returns:** string or original value

The `.toString()` method converts any value into its string representation. Booleans become the strings "true" or "false", scalar values are cast directly to strings, and arrays or objects are JSON-encoded when possible to provide a readable format.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-2)

*   value1 = `3.14`
    *   `{item.value1.toString()}` → "3.14"
*   value2 = `true`
    *   `{item.value2.toString()}` → "true"
*   value3 = `false`
    *   `{item.value3.toString()}` → "false"
*   value4 = `null`
    *   `{item.value4.toString()}` → "" (empty string)

* * *

### `.toInt()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#toint)

**Returns:** int or original value

The `.toInt()` method converts numeric values to an integer by truncating any fractional part. If the value is already an integer it is returned as-is; if it’s numeric (including numeric strings like "123" or "123.45") it is cast to `(int)`. Non-numeric values are returned unchanged.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-3)

*   value1 = "123"
    *   `{item.value1.toInt()}` → `123`
*   value2 = "123.9"
    *   `{item.value2.toInt()}` → `123`
*   value3 = "abc"
    *   `{item.value3.toInt()}` → "abc" (unchanged)

* * *

### `.toSlug()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#toslug)

**Returns:** string (slug) or original value

The `.toSlug()` method generates a URL‑friendly slug from a string: it lowercases the text, transliterates to ASCII, replaces non `[a–z][0–9]` characters with `-`, and trims leading/trailing hyphens. Only string inputs are transformed; other types are returned unchanged.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-4)

*   value = "Über Theme"
    *   `{item.value.toSlug()}` → "uber-theme"

#### Example use case: Generate CSS class names from values[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-use-case-generate-css-class-names-from-values)

*   `<article class="post-{post.title.toSlug()}">...</article>`
*   `...`

* * *

### `.toBool()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#tobool)

**Returns:** boolean (`true`/`false`)

The `.toBool()` method normalizes common truthy/falsey inputs into a strict boolean. It is case-insensitive and supports strings ("true"/"false", "yes"/"no", "on"/"off"), numeric strings ("1"/"0"), and numeric values (1/0). `null` becomes `false`.

#### Example inputs that will convert to booleans:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-inputs-that-will-convert-to-booleans)

*   `1`, "1", "true", "yes", "on" → `true`
*   `0`, "0", "false", "no", "off" → `false`
*   `null` → `false`

* * *

### `.pluck()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#pluck)

**Returns:** array

The `.pluck()` method extracts the value at a given property path from each element in an array of objects and returns those values as a new array. Similar to `array_column()` in PHP or `pluck()` in Laravel.

*   Pluck paths can be nested using dot notation (e.g., `"author.displayName"`) to get a nested property's values, so `.pluck("author.displayName")` on an array like

    ```
    [ { "author": { "displayName": "John" } } ]
    ```
    will return `["John"]`.
*   If the property does not exist for an element, `null` is used for that element.
*   If called on a non-array value, an empty array (`[]`) is returned.

#### Example arrays[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-arrays)

##### Plucking the term name from a Category array of term objects[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#plucking-the-term-name-from-a-category-array-of-term-objects)
```
"categories": [  { name: "ABCs", slug: "abcs" },  { name: "XYZs", slug: "xyzs" }]
```
**Results:** `{this.categories.pluck("name")}` → `["ABCs", "XYZs"]`

##### Attempting to pluck a missing value[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#attempting-to-pluck-a-missing-value)
```
"missingExample": [  { title: "A" },  { title: "B" }]
```
**Result:** `{this.missingExample.pluck("slug")}` → `[null, null]`

##### Attempting to pluck a value from a non-array[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#attempting-to-pluck-a-value-from-a-non-array)
```
"value": "foo"
```
**Result:** `{this.value.pluck("anything")}` → `[]`

#### Example use case: Conditional logic to check if a post has a specific category[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-use-case-conditional-logic-to-check-if-a-post-has-a-specific-category)

You can of course combine pluck with other modifiers to create more complex conditions. For example, you can use it with the `.includes()` method to check if a specific value exists in the array.

**Before `.pluck()`, you would have to do a loop with a condition inside it:**
```
{#loop this.categories as category}  {#if category.name === "ABCs"}    true  {/if}{/loop}`
```
**Now with `.pluck()`, you can now do it in a single condition:**
```
{#if this.categories.pluck("name").includes("ABCs")}  true{/if}
```
* * *

### `.keys()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#keys)

**Returns:** array or original value

The `.keys()` method returns the keys of an object as an array. If the value is not an object (e.g., a string, number, boolean, null, or a plain array), it is returned unchanged.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-5)
```
"config": { "color": "red", "size": "lg", "weight": "bold" }
```
*   `{item.config.keys()}` → `["color", "size", "weight"]`
*   `{item.config.keys().length()}` → `3`
*   `{item.config.keys().join(", ")}` → `"color, size, weight"`

#### Example use case: Check if an object contains a specific key[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-use-case-check-if-an-object-contains-a-specific-key)
```
{#if item.config.keys().includes("color")}  This object has a "color" key{/if}
```
#### Example use case: Check if a custom field is present[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-use-case-check-if-a-custom-field-is-present)

You can combine `.keys()` with `.includes()` to output different content depending on whether a key exists. Since `.includes()` accepts optional true/false return values, you can do this inline without an `{#if}` block:
```
{item.meta.keys().includes("name", "name custom field is set", "name custom field is not set")}
```
#### Non-object inputs pass through:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#non-object-inputs-pass-through)

*   `42` → `42`
*   `["a", "b"]` → `["a", "b"]`

* * *

### `.values()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#values)

**Returns:** array or original value

The `.values()` method returns the values of an object as an array. If the value is not an object (e.g., a string, number, boolean, null, or a plain array), it is returned unchanged.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-6)
```
"config": { "color": "red", "size": "lg", "weight": "bold" }
```
*   `{item.config.values()}` → `["red", "lg", "bold"]`
*   `{item.config.values().length()}` → `3`
*   `{item.config.values().join(", ")}` → `"red, lg, bold"`

#### Example use case: Check if an object contains a specific value[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-use-case-check-if-an-object-contains-a-specific-value)
```
{#if item.config.values().includes("red")}  This object contains the value "red"{/if}
```
#### Example use case: Loop over object values[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#example-use-case-loop-over-object-values)
```
{#loop item.config.values() as value}  {value}{/loop}
```
* * *

### `.at()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#at)

**Returns:** any (element at the given index)

The `.at()` method takes an integer value and returns the item at that index in the array, allowing for positive and negative integers. Negative integers count back from the last item in the array.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | int | — | Zero-based index of the array element to be returned |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-7)
```
"value": [5, 12, 8, 130, 44]
```
*   `{item.value.at(2)}` → `8`
*   `{item.value.at(-2)}` → `130`

* * *

### `.slice()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#slice)

**Returns:** array

Similar behaviour to [JS Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
The `.slice()` returns a portion of the array, selected from start to end (end not included) where start and end represent the index of items in that array. Extraction happens up to but not including end.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | int | — | Zero-based index at which to start extraction |
| `end` | int | array length | Zero-based index at which to end extraction |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-8)
```
"value": ["ant", "bison", "camel", "duck", "elephant"]
```
*   `{item.value.slice(2)}` → `["camel", "duck", "elephant"]`
*   `{item.value.slice(2, 4)}` → `["camel", "duck"]`
*   `{item.value.slice(-2)}` → `["duck", "elephant"]`

* * *

### `.applyData()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#applydata)

**Returns:** Returns the original value with dynamic data reapplied.

The `applyData()` method is an advanced feature that can be used to reapply dynamic data to an already resolved value.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-9)

You might have a custom field that includes dynamic data, for example: `this.etch.header = "Welcome to {this.title}!"`
If you output `{this.etch.header}` directly, it will render as:
`"Welcome to {this.title}!"` — without replacing `{this.title}`.

To resolve the dynamic data, call `.applyData()` on the value: `{this.etch.header.applyData()}`
This first retrieves the original string, then reapplies the dynamic data, resulting in:
`"Welcome to Etch!` (or whatever value `{this.title}` resolves to).

* * *

### `.unserializePhp()`[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#unserializephp)

**Returns:** Returns the unserialized value, or the original value if the input is not a valid serialized string or null if you attempt to unserialize an actual PHP object.

The `unserializePhp()` method is an advanced feature that can be used to convert serialized PHP strings back into usable values.

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#examples-10)

You might have a plugin that saves serialized PHP strings in a CPT field, for example it could save an array as a string like this on a post: `a:3:{i:0;s:5:"apple";i:1;s:6:"banana";i:2;s:6:"cherry";}`
If you output `{post.specialField}` directly, it will render as:
`a:3:{i:0;s:5:"apple";i:1;s:6:"banana";i:2;s:6:"cherry";}` — without converting it back to an array.

To use this value correctly, call `.unserializePhp()` on the value: `{post.specialField.unserializePhp()}`
This first retrieves the original string, then converts it back to a usable value, resulting in an actual array:
`["apple", "banana", "cherry"]`. Which you could then loop over or use other modifiers on.

Or `a:2:{s:3:"foo";s:3:"bar";s:3:"baz";i:42;}` would become `{"foo": "bar", "baz": 42}` which then could be accessed like normal dynamic data: `{post.specialField.unserializePhp().foo}` → `bar`.

It also works with other serialized PHP data types, like integers or booleans. If you attempt to unserialize an actual PHP object however, it will return null for safety reasons.

* * *

## Additional Notes[​](_dynamic-data_dynamic-data-modifiers_basic-modifiers.md#additional-notes)

*   **Combining:** You can combine/stack modifiers. They are applied in the order they are written. For example, you could use `{user.fullName.toSlug().toUpperCase()}` to transform a user named "Thomas Müller" to "THOMAS-MULLER".
*   **Unknown modifiers:** If a modifier name isn’t recognized, the internal call returns `null`, which results in an empty string.

#### _dynamic-data_dynamic-data-modifiers_comparison-modifiers.md

> Source: https://docs.etchwp.com/dynamic-data/dynamic-data-modifiers/comparison-modifiers
> Scraped: 10.03.2026 08:20:48

Comparison modifiers can be applied to custom data just like basic modifiers.
They can be used as simple true/false checks, or you can override the true and false values to conditionally output custom content based on the comparison result.

## Returning Custom Values from Comparison Modifiers[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#returning-custom-values-from-comparison-modifiers)

One of the most powerful features of comparison modifiers is their ability to return **custom values** based on the result of a comparison. By default, they return a boolean value (`true` or `false`), but you can override these to return any value you choose for either outcome.

This is the way to do **inline "if/else" conditional logic** in Etch. Because `{#if}` blocks can't be used inline (for example, inside an attribute value), comparison modifiers let you conditionally return one value or another right where you need it.

This allows you to create **dynamic content that adapts to your data**. For example, conditionally adding CSS classes, displaying alternate text, or adjusting attributes based on specific conditions.

### Example: Conditional CSS Classes Based on Product Price[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#example-conditional-css-classes-based-on-product-price)

Suppose you have a product loop, and you want to assign different CSS classes depending on each product's price:

*   Products with a price **greater than 10** should receive the class `product--expensive`.
*   Products priced at **10 or less** should receive the class `product--affordable`.

Without comparison modifiers, you'd have to use multiple conditionals and duplicate markup:
```
{#loop products as product}  {#if product.price > 10}

Price: {product.price}

      {/if}  {#if product.price <= 10}

Price: {product.price}

      {/if}{/loop}
```
With comparison modifiers, you can handle both cases in one clean block of markup using `.greater()` with custom true and false values.
Making your templates **more concise and easier to maintain**:
```
{#loop products as product}

Price: {product.price}

  {/loop}
```
## Available Modifiers[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#available-modifiers)

| Modifier | Description | Example |
| --- | --- | --- |
| `.startsWith()` |
Checks if a _string_ starts with a given string. [More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#startswith)

 |

`value = "Hello World!"`

`{item.value.startsWith('Hel')}` → `true`

 |
| `.endsWith()` |

Checks if a _string_ ends with a given string.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#endswith)

 |

`value = "Hello World!"`

`{item.value.endsWith('ld!')}` → `true`

 |
| `.includes()` |

Checks if a _string_ contains a _substring_ OR an _array_ contains a _value_.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#includes)

 | `user.userRoles = ["author", "editor"]`

`{user.userRoles.includes('editor')}` → `true`

 |
| `.intersects()` |

Checks if two _arrays_ have any elements in common.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#intersects)

Since:

1.1.0

 | `userRoles = ["author", "editor"]`

`{userRoles.intersects(["admin", "editor"])}` → `true`

 |
| `.less()` |

Checks if the current value is less than the given value.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#less)

 | `user.age = 25`

`{user.age.less(30)}` → `true`
`{user.age.less(20)}` → `false`

 |
| `.lessOrEqual()` |

Checks if the current value is less than or equal to the given value.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#lessorequal)

 | `score = 80`

`{score.lessOrEqual(80)}` → `true`
`{score.lessOrEqual(79)}` → `false`

 |
| `.greater()` |

Checks if the current value is greater than the given value.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#greater)

 | `count = 5`

`{count.greater(3)}` → `true`
`{count.greater(10)}` → `false`

 |
| `.greaterOrEqual()` |

Checks if the current value is greater than or equal to the given value.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#greaterorequal)

 | `count = 22`

`{count.greaterOrEqual(22)}` → `true`
`{count.greaterOrEqual(25)}` → `false`

 |
| `.equal()` |

Checks if the current value is equal to the given value.
[More Details](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#equal)

 | `status = "active"`

`{status.equal("active")}` → `true`
`{status.equal("inactive")}` → `false`

 |

## Detailed Modifier Reference[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#detailed-modifier-reference)

Below is a more detailed description of the above modifiers.

### `.startsWith()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#startswith)

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.startsWith()` method checks whether a string starts with a given substring. The check is case-sensitive.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `search` | string | — | Substring to find at the start of the string |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples)

*   value = `"Hello World!"`
    *   `{item.value.startsWith("Hello")}` → `true`
    *   `{item.value.startsWith("H")}` → `true`
    *   `{item.value.startsWith("hello")}` → `false` (case-sensitive)
    *   `{item.value.startsWith("World")}` → `false`
    *   `{item.value.startsWith("Hello", "Yes", "No")}` → `"Yes"`
    *   `{item.value.startsWith("World", "Yes", "No")}` → `"No"`

* * *

### `.endsWith()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#endswith)

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.endsWith()` method checks whether a string ends with a given substring. The check is case-sensitive.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `search` | string | — | Substring to find at the end of the string |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples-1)

*   value = `"Hello World!"`
    *   `{item.value.endsWith("ld!")}` → `true`
    *   `{item.value.endsWith("!")}` → `true`
    *   `{item.value.endsWith("LD!")}` → `false` (case-sensitive)
    *   `{item.value.endsWith("Hello")}` → `false`
    *   `{item.value.endsWith("ld!", "Yes", "No")}` → `"Yes"`
    *   `{item.value.endsWith("Hello", "Yes", "No")}` → `"No"`

* * *

### `.includes()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#includes)

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.includes()` method checks whether a string contains a given substring or an array contains a given value. String checks are case-sensitive. Array checks require an exact element match (substrings within array elements do not count as a match).

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `search` | string or any | — | Substring to find (strings) or value to find (arrays) |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### String Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#string-examples)

*   value = `"foo bar"`
    *   `{item.value.includes("foo")}` → `true`
    *   `{item.value.includes("oo")}` → `true`
    *   `{item.value.includes("Foo")}` → `false` (case-sensitive)
    *   `{item.value.includes("test")}` → `false`
    *   `{item.value.includes("bar", "Yes", "No")}` → `"Yes"`
    *   `{item.value.includes("baz", "Yes", "No")}` → `"No"`

#### Array Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#array-examples)

*   value = `["foo", "bar"]`
    *   `{item.value.includes("foo")}` → `true`
    *   `{item.value.includes("oo")}` → `false` (no substring matching)
    *   `{item.value.includes("Foo")}` → `false` (case-sensitive)
    *   `{item.value.includes("test")}` → `false`
    *   `{item.value.includes("bar", "Yes", "No")}` → `"Yes"`
    *   `{item.value.includes("baz", "Yes", "No")}` → `"No"`

* * *

### `.intersects()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#intersects)

Since:

1.1.0

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.intersects()` method checks if two arrays have any elements in common. The check requires exact element matches and is case-sensitive for string values.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | array | — | Array to check for common elements |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples-2)

*   value = `["author", "editor", "contributor"]`
    *   `{item.value.intersects(["editor", "admin"])}` → `true`
    *   `{item.value.intersects(["admin", "moderator"])}` → `false`
    *   `{item.value.intersects(["author"])}` → `true`
    *   `{item.value.intersects([])}` → `false`
    *   `{item.value.intersects(["editor"], "Has Permission", "No Permission")}` → `"Has Permission"`
    *   `{item.value.intersects(["admin"], "Has Permission", "No Permission")}` → `"No Permission"`

#### Use Case Example:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#use-case-example)

Check if a user has any of the required roles:
```
{#loop users as user}

    {user.name}  {/loop}
```
* * *

### `.less()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#less)

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.less()` method checks if the current numeric or string value is less than the given value.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `compareTo` | number or string | — | Value to compare against |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples-3)

*   value = `25`

    *   `{item.value.less(30)}` → `true`
    *   `{item.value.less(20)}` → `false`
    *   `{item.value.less(25, "Is Less", "Is More")}` → `"Is More"`
    *   `{item.value.less(30, "Is Less", "Is More")}` → `"Is Less"`
*   value = `"apple"`

    *   `{item.value.less("banana")}` → `true`
    *   `{item.value.less("apple")}` → `false`
    *   `{item.value.less("banana", "Is Less", "Is More")}` → `"Is Less"`
    *   `{item.value.less("apple", "Is Less", "Is More")}` → `"Is More"`

* * *

### `.lessOrEqual()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#lessorequal)

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.lessOrEqual()` method checks if the current numeric or string value is less than or equal to the given value.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `compareTo` | number or string | — | Value to compare against |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples-4)

*   value = `80`

    *   `{item.value.lessOrEqual(80)}` → `true`
    *   `{item.value.lessOrEqual(79)}` → `false`
    *   `{item.value.lessOrEqual(80, "Is Less or Equal", "Is Greater")}` → `"Is Less or Equal"`
    *   `{item.value.lessOrEqual(79, "Is Less or Equal", "Is Greater")}` → `"Is Greater"`
*   value = `"banana"`

    *   `{item.value.lessOrEqual("banana")}` → `true`
    *   `{item.value.lessOrEqual("apple")}` → `false`
    *   `{item.value.lessOrEqual("banana", "Is Less or Equal", "Is Greater")}` → `"Is Less or Equal"`
    *   `{item.value.lessOrEqual("apple", "Is Less or Equal", "Is Greater")}` → `"Is Greater"`

* * *

### `.greater()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#greater)

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.greater()` method checks if the current numeric or string value is greater than the given value.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `compareTo` | number or string | — | Value to compare against |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples-5)

*   value = `5`

    *   `{item.value.greater(3)}` → `true`
    *   `{item.value.greater(10)}` → `false`
    *   `{item.value.greater(3, "Is Greater", "Is Not Greater")}` → `"Is Greater"`
    *   `{item.value.greater(10, "Is Greater", "Is Not Greater")}` → `"Is Not Greater"`
*   value = `"banana"`

    *   `{item.value.greater("apple")}` → `true`
    *   `{item.value.greater("banana")}` → `false`
    *   `{item.value.greater("apple", "Is Greater", "Is Not Greater")}` → `"Is Greater"`
    *   `{item.value.greater("banana", "Is Greater", "Is Not Greater")}` → `"Is Not Greater"`

* * *

### `.greaterOrEqual()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#greaterorequal)

**Returns:** boolean (`true`/`false`) or custom true/false values The `.greaterOrEqual()` method checks if the current numeric or string value is greater than or equal to the given value.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `compareTo` | number or string | — | Value to compare against |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples-6)

*   value = `22`

    *   `{item.value.greaterOrEqual(22)}` → `true`
    *   `{item.value.greaterOrEqual(25)}` → `false`
    *   `{item.value.greaterOrEqual(22, "Is Greater or Equal", "Is Less")}` → `"Is Greater or Equal"`
    *   `{item.value.greaterOrEqual(25, "Is Greater or Equal", "Is Less")}` → `"Is Less"`
*   value = `"banana"`

    *   `{item.value.greaterOrEqual("banana")}` → `true`
    *   `{item.value.greaterOrEqual("cherry")}` → `false`
    *   `{item.value.greaterOrEqual("banana", "Is Greater or Equal", "Is Less")}` → `"Is Greater or Equal"`
    *   `{item.value.greaterOrEqual("cherry", "Is Greater or Equal", "Is Less")}` → `"Is Less"`

* * *

### `.equal()`[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#equal)

**Returns:** boolean (`true`/`false`) or custom true/false values

The `.equal()` method checks if the current value is equal to the given value.

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `compareTo` | any | — | Value to compare against |
| `trueValue` | any | `true` | Value to return if the check is true |
| `falseValue` | any | `false` | Value to return if the check is false |

#### Examples:[​](_dynamic-data_dynamic-data-modifiers_comparison-modifiers.md#examples-7)

*   value = `"active"`
    *   `{item.value.equal("active")}` → `true`
    *   `{item.value.equal("inactive")}` → `false`
    *   `{item.value.equal("active", "Is Equal", "Is Not Equal")}` → `"Is Equal"`
    *   `{item.value.equal("inactive", "Is Equal", "Is Not Equal")}` → `"Is Not Equal"`

#### _elements_anchor.md

> Source: https://docs.etchwp.com/elements/anchor
> Scraped: 10.03.2026 08:20:46

The Anchor element (commonly but incorrectly referred to as a "Link" element) produces a `<a href="#">Hyperlink</a>`.

## Mandatory attributes[​](_elements_anchor.md#mandatory-attributes)

`href=""` is the mandatory attribute for anchors, which is why it's added automatically. This is the destination of the link. You can edit the value for this attribute via the HTML editor, the attributes panel, or the Attribute bar.

## Open in New Tab[​](_elements_anchor.md#open-in-new-tab)

If you want your anchor to open in a new tab, you can add `target="_blank"` via the Attributes bar or the HTML editor.

## Buttons vs Links[​](_elements_anchor.md#buttons-vs-links)

It's important to remember that anchors are navigational elements. If you're navigating the user to another part of the page, or to a new page entirely, then an anchor is appropriate.

Anchors can look like buttons visually, but this is done via CSS, not by changing the actual HTML tag to `<button>`.

If you are triggering an on-page event, like firing a modal or advancing slides in a carousel, then an anchor is _inappropriate_. On-page events should be triggered with a `<button>` element.

Anchors can be transformed into buttons by changing the HTML tag, but you should remove any anchor-based attributes when you do this.

Buttons can also be added by adding a Text or Div element and changing the tag to `<button>`. Doing this will save you the step of having to remove the link attributes.

We did not include a literal Button element in Etch for two big reasons:

1.  Buttons are used far less frequently than anchors.
2.  The word "button" creates tremendous confusion between visual and semantic use.

It's better to provide an **Anchor** element knowing that users who understand the semantic distinction between buttons and anchors can easily make a button themselves out of any of the existing elements or simply by writing it in the HTML in the few scenarios where a button is required.

#### _elements_condition.md

> Source: https://docs.etchwp.com/elements/condition
> Scraped: 10.03.2026 08:20:46

[Skip to main content](_elements_condition.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Elements
*   Condition

## Condition Element

![Etch Condition Element](https://docs.etchwp.com/assets/images/etch-condition-element-870d1e9a1e12723124229dbfeed5b198.webp)

The Condition Element is a ghost element in Etch (no DOM output) that enables the use of inline conditional logic.

[Learn about conditional logic in Etch](_conditional-logic_intro-to-conditional-logic.md).

[

Previous

Anchor (Link)

](_elements_anchor.md)[

Next

Container

](_elements_container.md)

#### _elements_container.md

> Source: https://docs.etchwp.com/elements/container
> Scraped: 10.03.2026 08:20:46

The **Container** element in Etch is the essential companion to the **Section** element, working together to create proper semantic structure and consistent layout. While the **Section** element establishes the outer semantic wrapper, the **Container** element handles the inner content organization, width constraints, and spacing.

info

All examples on this page show the resulting HTML output of the element, but **users are not required to view, write, or edit HTML to use Etch.** This documentation is a teaching aid to help you understand web design. In Etch, you can do everything you need to do visually, without interacting with code.

## What Makes Etch's Container Element Special?[​](_elements_container.md#what-makes-etchs-container-element-special)

In most website builders, you have to manually create container structure through multiple steps:

1.  Add a generic div element
2.  Apply container classes manually
3.  Set up proper width constraints
4.  Configure centering and spacing

This typically requires additional CSS and manual configuration. In Etch, you simply drag the **Container** element inside a **Section** and it automatically handles:

*   **Content Width**: Establishes your website's content width
*   **Centering**: Automatically centers content on the inline axis
*   **Flexbox Layout**: Sets up proper flex direction for content organization
*   **Gap Support**: Enables easy spacing between child elements

## Why Container Structure Matters[​](_elements_container.md#why-container-structure-matters)

### Layout Benefits[​](_elements_container.md#layout-benefits)

The Container element automatically handles:

*   **Content Width**: The container establishes your website's content width using `max-width: var(--content-width)`
*   **Centering**: Content is automatically centered using `align-self: center`
*   **Flexbox Layout**: Sets up `display: flex` and `flex-direction: column` for easy content organization
*   **Gap Support**: Enables CSS gap properties for consistent spacing between child elements

### Semantic Benefits[​](_elements_container.md#semantic-benefits)

While containers don't have semantic meaning like sections, they provide crucial structural benefits:

*   **Content Grouping**: Groups associated content for easier styling and manipulation
*   **Consistent Spacing**: Establishes uniform spacing patterns across your site
*   **Responsive Behavior**: Handles responsive behavior automatically
*   **Maintainability**: Makes your layout structure clear and predictable

## How to Use the Container Element in Etch[​](_elements_container.md#how-to-use-the-container-element-in-etch)

### Adding a Container[​](_elements_container.md#adding-a-container)

1.  Drag the **Container** element from the Elements panel into a **Section**
2.  Add your content inside the Container
3.  The proper structure and styling is applied automatically

### Recommended Content Structure[​](_elements_container.md#recommended-content-structure)
```
      ## About Our Services

Discover the wide range of solutions we offer to help your business grow and succeed.
```
## Container Defaults[​](_elements_container.md#container-defaults)

Etch applies sensible defaults to all Container elements:
```
display: flex;flex-direction: column;width: 100%;max-width: var(--content-width);align-self: center;
```
These defaults:

*   Start all contained content at your website's content width
*   Enable gaps by default for easy spacing
*   Ensure contained content always starts in the center of the page
*   Never get in your way – they only help you work more efficiently

info

Etch defaults are always added with 0,0,0 specificity, making them extremely easy to override without specificity conflicts. You can remove the applied defaults entirely by removing the `data-etch-element` attribute from the element.

## Best Practices[​](_elements_container.md#best-practices)

### 1\. Use Containers Within Sections[​](_elements_container.md#1-use-containers-within-sections)

Containers should always be used within **Section** style elements (`header` and `footer` are typically more precise versions of a `section`) because they have no inherent gutter. If you use them inside of a generic container like a `div`, you'll want to make sure you set a gutter on the parent `div`.
```
      ## Our Services

Professional solutions for your business needs.

## Our Services

Professional solutions for your business needs.
```
### 2\. Group Related Content[​](_elements_container.md#2-group-related-content)

Use containers to group content that belongs together. In the below example, note that the heading and introduction paragraph are grouped and contained separately from the Features grid. This is good structure.
```
      ## Product Features

Explore the key features that make our product stand out and help you achieve your goals.

### Easy to Use

Intuitive interface designed for everyone.

### Powerful

Advanced capabilities for power users.
```
### 3\. Only put content _outside_ of a container in circumstances where you explicitly need it unrestricted and ungrouped.[​](_elements_container.md#3-only-put-content-outside-of-a-container-in-circumstances-where-you-explicitly-need-it-unrestricted-and-ungrouped)

Only place content outside of a container when you intentionally want it to span the full width of the section or break out of the standard content width. This is useful for elements like background images, full-width banners, or dividers that should not be constrained by the container's max width.

### 4\. Manipulate the `--content-width` variable when you need to change the width of a container.[​](_elements_container.md#4-manipulate-the---content-width-variable-when-you-need-to-change-the-width-of-a-container)
```
/* Good */.my-container {  --content-width: 460px;}/* Not as good */.my-container {  max-width: 460px;}
```
## Styling Considerations[​](_elements_container.md#styling-considerations)

Containers work seamlessly with your CSS framework or custom styles. If you're using [Automatic.css](https://automaticcss.com/), containers will automatically work with the framework's spacing and layout system.

For custom styling, you can target containers specifically:
```
/* Target all containers */:where([data-etch-element="container"]) {  /* Default Styles */}
```
## When Not to Use Containers[​](_elements_container.md#when-not-to-use-containers)

*   **Don't use outside of sections**: Containers should always be within **Section** elements
*   **Don't nest unnecessarily**: Keep your container structure simple and logical

*   **[Section:](_elements_section.md)** Use to establish semantic page structure and contain your containers

* * *

The Container element is essential for creating well-organized, maintainable layouts. Working together with the Section element, they provide the foundation for professional website structure that's both semantic and flexible.

#### _elements_div.md

> Source: https://docs.etchwp.com/elements/div
> Scraped: 10.03.2026 08:20:46

A div is the basic building block of everything in web design. It's essentially a blank box that contains and groups other elements.

In Etch, the Div element has no default styling. It's exactly what you'd expect: ``.

note

Since a `` is `display: block;` by default in web design, you can't use flex alignments or gaps unless you manually set the `display` to `flex`.

#### _elements_dynamic-image.md

> Source: https://docs.etchwp.com/elements/dynamic-image
> Scraped: 10.03.2026 08:20:46

The Dynamic Image Element in Etch is a special element that handles WordPress images dynamically. It's the default/recommended way of inserting images in Etch for WordPress and is compatible with component props as well.

info

Etch has native support for IMG HTML, but this is separate from Etch's Dynamic Image element. If you want to use a `<img>` tag in Etch, you're always free to do that. The Dynamic Image Element is an alternative special element designed specifically to handle WordPress images by their ID.

To get started, add the Dynamic Image element to the page by clicking the Dynamic Image element in the Elements Bar.

![Etch Dynamic Image Element](https://docs.etchwp.com/assets/images/etch-dynamic-image-element-2940672aea9a65299cb1b7ae0910936a.webp)

In the code editor you will see `<etch:img />`, but the output on the front-end will be the image with a few additional attributes.

In the Attributes Panel, with the Dynamic Image Element selected, you can choose a source (media library) or manually enter a Wordpress Media ID.

On the front-end, the image will be rendered with the appropriate `alt`, `src`, `srcset`, and `sizes` attributes for optimal performance.

The `alt` attribute will be populated from the media library, but can be overridden by setting a custom `alt` attribute.

You can also choose a specific maximum image size by choosing from the `Maximum Size` dropdown in the Attributes Panel, or use the `maximumSize` attribute to set a custom size.

If you do not want to use `srcset` and `sizes`, you can disable this feature by toggling off the `Use SRCSET` option in the Attributes Panel, or set the `useSrcSet` attribute to `false`.

![Etch Dynamic Image Attribute Panel](https://docs.etchwp.com/assets/images/etch-dynamic-image-attribute-panel-177dbf6124844bbdfaedc3e6023658df.webp)

## Using Dynamic Images With Components[​](_elements_dynamic-image.md#using-dynamic-images-with-components)

Since the Dynamic Image element just needs a media id to render an image, it works perfectly with component props. Just pass the media id via the media prop, or the text prop. This of course also works with dynamic data sources.

For example, if you want to create a gallery, you can loop over an array of media ids and pass each id to the Dynamic Image element inside the loop.

## Other attributes[​](_elements_dynamic-image.md#other-attributes)

Any attribute set on the Dynamic image element will be passed through to the rendered `<img>` tag, except for the special attributes like `src`, `maximumSize`, and `useSrcSet`, which won't be rendered on the final `<img>` tag.

If you set a custom `alt` attribute, it will override the default alt text from the media library.

#### _elements_element.md

> Source: https://docs.etchwp.com/elements/element
> Scraped: 10.03.2026 08:20:47

The **Dynamic Element** (so meta!) in Etch is a special element that allows you to dynamically change the tag of an element with a select input or prop while avoiding a dependency on conditional logic.

## Adding the Dynamic Element[​](_elements_element.md#adding-the-dynamic-element)

There are two ways to add the Dynamic Element:

1.  You can click the icon for it when editing a component.
2.  You can write it manually in the HTML editor.

note

Since the Dynamic Element is most useful when working with components, we've only added it to the Elements Bar in component editing mode.

### Adding the Dynamic Element in the Component Editor[​](_elements_element.md#adding-the-dynamic-element-in-the-component-editor)

![Etch Dynamic Element](https://docs.etchwp.com/assets/images/etch-element-element-eaf91c4ef6ceafdd5195f26cd148fa5b.webp)

When editing a component, you'll see an icon that looks like two elements swapping places. Click this icon to add the Dynamic Element to your component.

### Adding the Dynamic Element in the Code Editor'[​](_elements_element.md#adding-the-dynamic-element-in-the-code-editor)

Even though the icon for the Dynamic Element only shows up in the component editor, the element will function anywhere and can be used anywhere. You just have to write it manually to create it, since it's not a commonly used element outside of components.

You can add the Dynamic Element via the code editor any time by writing `<etch:element>`.

## Using the Dynamic Element[​](_elements_element.md#using-the-dynamic-element)

![Etch Dynamic Element](https://docs.etchwp.com/assets/images/etch-element-element-tag-b6354c03f32958671d7061e95aa1fbb0.webp)

Once you've added the Dynamic Element to the page, you'll see a Tag input in the attributes panel. This is where you control the output of the element's tag.

It's important to understand that this input is a Combobox. It has a dropdown of commonly used tags, but the input accepts any custom value.

Whatever value you put in the tag attribute will be what the Dynamic Element morphs into on the front end.

note

This input simply adds a `tag` attribute to the Dynamic Element, like this: `<etch:element tag="div">`. You could write this manually in the HTML instead of using the input in the attributes panel if you'd like.

## Changing the Tag Dynamically[​](_elements_element.md#changing-the-tag-dynamically)

The Dynamic Element's tag attribute accepts dynamic data. This is the primary use case, giving you the ability to change an element's tag from a component prop or custom field.

For example, let's say you're building a Section Intro component. You want to be able to use this component in Hero Sections as well as any other random section on your website.

In the Hero context, the heading in your intro would need to be an `h1`. In all other contexts, the heading will need to be an `h2`.

In the past, you would have to duplicate the heading element, make the first one an `h1` and the duplicate an `h2`. Then you'd use conditional logic to swap between them.

Using conditional logic any time you need to be able to change an element's tag is extremely messy, tedious, and overly complex.

The Dynamic Element avoids all that. Simply create a prop or custom field like "Heading Level" and then inject it into the Dynamic Element.

In this situation, you could create a Select Prop that let's the user choose from `h1` and `h2`, which gives the benefit of limiting the input to only what's correct for a Section Intro component.

Now you've created a Section Intro component with a dynamic heading tag without a single line of conditional logic.

#### _elements_empty-elements.md

> Source: https://docs.etchwp.com/elements/empty-elements
> Scraped: 10.03.2026 08:20:46

Empty elements in Etch are elements that contain no content—no text, no child elements, and no background images. Understanding how empty elements behave in the builder is important for effective development.

## Minimum Dimensions in Builder[​](_elements_empty-elements.md#minimum-dimensions-in-builder)

Empty elements in the builder interface have a **minimum** width and height of 35px to ensure they're selectable on the canvas. This is a builder-only feature and does not affect your production site.

Why 35px minimum? Without minimum dimensions the element would be invisible and impossible to select or manipulate in the visual interface. The 35px minimum ensures you can always click, drag, and modify empty elements during development.

## Expected Behavior[​](_elements_empty-elements.md#expected-behavior)

If you're trying to set dimensions on an empty element of less than 35px, you may notice that the element doesn't seem to respond. This is because the empty element is respecting its minimum dimensions in the builder interface.

**This behavior only applies in the builder.** On your live site, empty elements will render at their actual specified dimensions (or collapse to nothing if no dimensions are set).

## Customizing the Minimum Size[​](_elements_empty-elements.md#customizing-the-minimum-size)

You can override the default 35px minimum by changing the value of the `--empty-element-size` CSS custom property.

### Element Level[​](_elements_empty-elements.md#element-level)

Set it on a specific element using inline styles or the CSS panel:
```
.my-element {  --empty-element-size: 20px;}
```
### Section Level[​](_elements_empty-elements.md#section-level)

Apply it to a section to affect all empty elements within:
```
.my-section {  --empty-element-size: 20px;}
```
### Global Override[​](_elements_empty-elements.md#global-override)

Set it globally in your stylesheet:
```
:root {  --empty-element-size: 0;}
```
Global Override is Not Recommended

Setting `--empty-element-size: 0` at the global level is typically undesirable and problematic. It will result in only being able to see, select, and manipulate empty elements via the structure panel. We recommend overriding it at the element level when necessary.

## Common Use Cases[​](_elements_empty-elements.md#common-use-cases)

Empty elements are commonly used for:

*   Spacers and layout gaps
*   Decorative elements
*   Structural containers that receive content dynamically

#### _elements_heading.md

> Source: https://docs.etchwp.com/elements/heading
> Scraped: 10.03.2026 08:20:46

The Heading element in Etch adds an `<h2>` heading by default since `H2` is the most used heading level on most pages. You can change this to any other heading level by editing the tag.

info

Remember, it's bad practice to change the tag just for the sole purpose of changing the font-size or visual styling of the heading. Make sure you set the tag based on proper semantics and then control styling requirements with CSS.

#### _elements_html.md

> Source: https://docs.etchwp.com/elements/html
> Scraped: 10.03.2026 08:20:47

## The HTML Element

The HTML Element accepts and parses raw HTML. Since Etch already has a native HTML editor that allows raw HTML, this might seem redundant. It's necessary, though, for one specific reason.

The HTML Element is used in dynamic data situations (e.g. component/template authoring) where you're pulling content from the database or a component prop that contains HTML (a rich text field, for example).

## Adding the HTML Element[​](_elements_html.md#adding-the-html-element)

There are three ways to add the HTML Element:

1.  **Convert an existing element** (recommended): Right-click any element and select "Convert to Raw HTML"
2.  Click the icon for it when editing a component or a template
3.  Write it manually in the HTML editor

### Converting an Existing Element to Raw HTML[​](_elements_html.md#converting-an-existing-element-to-raw-html)

The easiest way to use the HTML Element is to convert an existing element. Right-click on any element in the builder and select "Convert to Raw HTML" from the context menu.

![Convert to Raw HTML](https://docs.etchwp.com/assets/images/etch-convert-to-raw-html-9386bed0ee04598f8d673e592637e9f7.png)

This is the recommended approach because it preserves your element's structure and allows Etch to properly parse the HTML content.

### Adding the HTML Element in the Component Editor[​](_elements_html.md#adding-the-html-element-in-the-component-editor)

![Etch HTML Element](https://docs.etchwp.com/assets/images/etch-html-element-ace2df3a0252007bca4ff8e4d3d294e1.webp)

When editing a component or template, you'll see a purple HTML element icon. Click this icon to add the HTML Element to your component.

note

Since the HTML Element is most useful when working with components and templates, we've only added it to the Elements Bar in these contexts.

### Adding the HTML Element in the Code Editor[​](_elements_html.md#adding-the-html-element-in-the-code-editor)

Even though the icon for the HTML Element only shows up in the component editor, the element will function anywhere and can be used anywhere. You just have to write it manually to create it, since it's not a commonly used element outside of components/templates.

You can add the HTML Element via the code editor any time by writing `<etch:html />`.

The HTML Element is Self-Closing

Note that the HTML element is a self-closing element. Write it like `<etch:html />` and not `<etch:html>foo</etch:html>`.

## Using the HTML Element[​](_elements_html.md#using-the-html-element)

The HTML Element has two attributes:

*   **content**: This is where you put the dynamic data or prop key.
*   **unsafe**: Boolean attribute that accepts `true` or `false`. The default is `false`.

### Rich Text Content[​](_elements_html.md#rich-text-content)

When using the HTML Element to display rich text content (from a WYSIWYG field, for example), make sure the parent element's tag is set to `div`. Rich text content produces its own block-level HTML tags like `<p>`, `<h2>`, `<ul>`, etc., so the parent must be a container element that can hold these tags.

Use a div for rich text

If you place rich text inside an element with a tag like `<p>` or ``, you'll end up with invalid HTML (e.g., a paragraph inside a paragraph). Always use a `div` or other appropriate container element as the parent.

### The `unsafe` Attribute[​](_elements_html.md#the-unsafe-attribute)

When `unsafe="false"` (the default), the HTML is sanitized but still allows "safe" tags commonly used in rich content. This includes tags like `<p>`, `<strong>`, `<em>`, `<b>`, `<u>`, `<a>`, `<ul>`, `<ol>`, `<li>`, `<blockquote>`, and more. Technically, it allows any HTML that WordPress permits in post content (via `wp_kses_allowed_html('post')`).

When `unsafe="true"`, no sanitization occurs. All HTML passes through, including potentially dangerous tags like `<script>` and `<iframe>`.

**In most cases, `unsafe="false"` is what you want.** If you're rendering rich content from dynamic data (like a WYSIWYG field), the default setting will display your formatting while keeping things secure.

Security Alert

Setting the `unsafe` attribute to `true` has major security implications. It should be reserved for very specific edge cases where you need to render scripts or iframes. Only use this if you fully trust the source of the HTML content and understand the XSS risks involved.

Here's an example of the final string:

Note: The `unsafe` attribute is optional.

#### _elements_iframe.md

> Source: https://docs.etchwp.com/elements/iframe
> Scraped: 10.03.2026 08:20:47

[Skip to main content](#__docusaurus_skipToContent_fallback)
# iFrame

More to come...

#### _elements_image.md

> Source: https://docs.etchwp.com/elements/image
> Scraped: 10.03.2026 08:20:46

The Image element creates a standard HTML image tag with the `src` and `alt` attributes automatically added. You can edit the `src` and `alt` via the HTML editor, the Attributes Panel, or the Add Attribute Bar.

![Etch Image Element](https://docs.etchwp.com/assets/images/etch-image-element-squashed-bd65a44249e91012e736530211ff6273.webp)

Example output:
```
![Description of the image](path/to/image.jpg)
```
## Essential Attributes & Selecting an Image[​](_elements_image.md#essential-attributes--selecting-an-image)

You can click on the thumbnail in the image attributes panel to to open the media library and choose an image. This will replace the `src` attribute with the path to the new image.

![Etch Image Element](https://docs.etchwp.com/assets/images/etch-image-attributes-squashed-d714371e350b02596adebf1b96152e3a.webp)

### `src`[​](_elements_image.md#src)

The `src` attribute is mandatory and contains the URL or path to the image file. This is automatically added with a placeholder path when you add an Image element to the canvas.

### `alt`[​](_elements_image.md#alt)

The `alt` attribute provides alternative text for screen readers and accessibility. It's crucial for web accessibility and should describe the image content.
```
![A beautiful sunset over the mountains](/wp-content/uploads/hero-banner.jpg)
```
## Responsive Images with `srcset`[​](_elements_image.md#responsive-images-with-srcset)

The Image element supports the `srcset` attribute for responsive images, allowing you to provide an optimal image size as well as various additional files for different screen sizes and resolutions. This is all handled for you automatically by Etch and WordPress.

info

`srcset` works by providing various image resolutions to the browser so the browser can choose which resolution to load based on the user's device. The use of `srcset` brings major performance increases without any effort on your part.

Once you choose an image, more attributes will appear:

![Etch Image Element](https://docs.etchwp.com/assets/images/etch-image-srcset-squashed-b52e10782b53ad7d714b1319e622bf8d.webp)

### `size`[​](_elements_image.md#size)

Use this attribute to select the optimal size for the image in its current context on the canvas. The size options are automatically pulled from your registered size options in WordPress.

### `srcset`[​](_elements_image.md#srcset)

You can ignore this attribute. There's nothing you have to do here—it's all done for you.

### `sizes`[​](_elements_image.md#sizes)

You can ignore this attribute. There's nothing you have to do here—it's all done for you.

### Registering Custom Image Sizes in WordPress[​](_elements_image.md#registering-custom-image-sizes-in-wordpress)

WordPress only offers a few sizes by default. If you want to create more of them, you can use the example script below. Add it to your site's `functions.php` file.
```
add_theme_support("post-thumbnails");add_image_size( 'image-480', 480, 9999 );add_image_size( 'image-640', 640, 9999 );add_image_size( 'image-720', 720, 9999 );add_image_size( 'image-960', 960, 9999 );add_image_size( 'image-1168', 1168, 9999 );add_image_size( 'image-1440', 1440, 9999 );add_image_size( 'image-1920', 1920, 9999 );function my_custom_sizes( $sizes ) {	return array_merge( $sizes, array(		'image-480' => 'image-480',		'image-640' => 'image-640',		'image-720' => 'image-720',		'image-960' => 'image-960',		'image-1168' => 'image-1168',		'image-1440' => 'image-1440',		'image-1920' => 'image-1920',	) );}add_filter( 'image_size_names_choose', 'my_custom_sizes' );
```
warning

Note: You will need to regenerate thumbnails to regenerate all the images in your media gallery at the various sizes before you're able to use the new sizes. There are various free plugins in the WordPress.org repo that regenerate thumbnails.

## Additional Attributes[​](_elements_image.md#additional-attributes)

You can add any additional attributes you'd like, such as:

### `loading`[​](_elements_image.md#loading)

Control when the image loads:
```
![Lazy loaded image](image.jpg)![Hero image](hero.jpg)
```
### `decoding`[​](_elements_image.md#decoding)

Control image decoding:
```
![Async decoded image](image.jpg)![Hero image](hero.jpg)
```
## Working with Dynamic Data[​](_elements_image.md#working-with-dynamic-data)

Rather than statically referencing a source, you can insert a dynamic data key as the src. For example, if you're looping through items, you can dynamically reference the post's Featured Image:
```
!
```
All attributes support dynamic data.

Read more about [Dynamic Data Keys](_dynamic-data_dynamic-data-keys.md).

## Wrapping Images with a Figure Element[​](_elements_image.md#wrapping-images-with-a-figure-element)

To wrap an image in a `figure` tag, you can right click the image and choose "wrap with div" from the context menu. Once this action occurs, simply change the `div` to `figure`. You can also add a `figcaption` element inside the figure if you'd like. To do this, just add text inside the figure element and change the tag from `p` to `figcaption`.

We're considering making this process more automatic in the future.

#### _elements_loop.md

> Source: https://docs.etchwp.com/elements/loop
> Scraped: 10.03.2026 08:20:45

*   Elements
*   Loop

The Loop element in Etch is a ghost element that provides a containing context for loop functionality and gives you access to loop controls. It does not actually output anything in the DOM/canvas itself.

For more details on how to use loops, see the [Basic Loops](_loops_basic-loops.md) guide.

[

Previous

Image

](_elements_image.md)[

Next

Section

](_elements_section.md)

#### _elements_overview.md

> Source: https://docs.etchwp.com/elements/overview
> Scraped: 10.03.2026 08:20:46

*   Elements
*   Overview

## Elements

Elements are the fundamental building blocks of web pages in Etch. These are simple, static elements like headings, paragraphs, containers, and links that form the foundation of your page structure. Unlike [Components (Native)](_components-native_overview.md) which provide interactive functionality, elements focus on content structure and presentation.

## Available Elements

[Anchor](_elements_anchor.md)

[Condition](_elements_condition.md)

[Container](_elements_container.md)

[Div](_elements_div.md)

[Dynamic Image](_elements_dynamic-image.md)

[Element](_elements_element.md)

[Empty Elements](_elements_empty-elements.md)

[Heading](_elements_heading.md)

[Html](_elements_html.md)

[Iframe](_elements_iframe.md)

[Image](_elements_image.md)

[Loop](_elements_loop.md)

[Section](_elements_section.md)

[Svg](_elements_svg.md)

[Text](_elements_text.md)

[

Previous

Responsive Controls

](_interface_responsive-controls.md)[

Next

Anchor (Link)

](_elements_anchor.md)

#### _elements_section.md

> Source: https://docs.etchwp.com/elements/section
> Scraped: 10.03.2026 08:20:47

The **Section** element in Etch is one of the most fundamental and mission-critical elements for building well-structured websites. Unlike many website builders that make you manually create section structure through multiple steps, Etch provides a dedicated Section element that automatically handles the proper semantic structure, spacing, and layout.

info

All examples on this page show the resulting HTML output of the element, but **users are not required to view, write, or edit HTML to use Etch.** This documentation is a teaching aid to help you understand web design. In Etch, you can do everything you need to do visually, without interacting with code.

## Why Proper Section Structure Matters[​](_elements_section.md#why-proper-section-structure-matters)

### Semantic Benefits[​](_elements_section.md#semantic-benefits)

The `<section>` tag tells browsers and assistive technologies that the content inside is a distinct, meaningful part of your page. This improves:

*   **Accessibility**: Screen readers can better understand your page structure
*   **SEO**: Search engines can better understand your content organization
*   **Maintainability**: Clear content grouping makes your code easier to manage

### Layout Benefits[​](_elements_section.md#layout-benefits)

Etch's Section element can automatically handle:

*   **Content Width**: The inner container establishes your website's content width
*   **Gutter System**: Protects your content from touching the edge of the screen at different device sizes
*   **Vertical Rhythm**: Block padding establishes consistent vertical spacing
*   **Centering**: Content is automatically centered on the inline axis

## What Makes Etch's Section Element Special?[​](_elements_section.md#what-makes-etchs-section-element-special)

Most website builders require you to manually create section structure through a complex process:

1.  Add a generic container
2.  Change its tag to `<section>`
3.  Add an inner container for content
4.  Apply proper classes and styling

This typically takes 4+ clicks per section. And since many page builder users aren't familiar with proper semantics, they often end up building a site with no **Sections** because they don't know they're supposed to create them.

In Etch, you simply drag the **Section** element onto your page and you're done. It automatically creates the proper structure:

## Section Attribute & Sensible Default Styling[​](_elements_section.md#section-attribute--sensible-default-styling)

You'll notice that the **Section** and **Container** both have a `data-etch-element` attribute. This is to identify it as an Etch element, which helps us (or you) apply any default styles.

For Sections, we set the following sensible defaults:
```
display: flex;flex-direction: column;align-items: center;
```
This starts all Section content in the center and allows you to use gaps to space out your Containers and content.

For Containers, we set the following sensible defaults:
```
display: flex;flex-direction: column;width: 100%;max-width: var(--content-width);align-self: center;
```
This starts all your contained content at your website's content width, enables gaps by default, and ensures that contained content always starts int the center of the page.

These defaults will never get in your way – they'll only help you work more efficiently.

info

Etch defaults are always added with 0,0,0 specificity, making them extremely easy to override without specificity conflicts. You can remove the applied defaults entirely by removing the `data-etch-element` attribute from the element.

## How to Use the Section Element in Etch[​](_elements_section.md#how-to-use-the-section-element-in-etch)

### Adding a Section[​](_elements_section.md#adding-a-section)

1.  Click the **Section** element from the Elements panel to add it your page
2.  Add your content inside the Section's **Container** element (or outside of it).
3.  That's it! The proper structure is created automatically

You can have multiple **Containers** in a **Section** if you'd like, or no containers at all. Unlike traditional page builders, the Etch **Section** element is completely flexible and within your control.

### Recommended Basic Content Structure[​](_elements_section.md#recommended-basic-content-structure)
```
       ## About Our Services

Discover the wide range of solutions we offer to help your business grow and succeed. Our team is dedicated to providing top-notch support and expertise for every project.

    [Learn more about our services](_services_overview.md)
```
## Best Practices[​](_elements_section.md#best-practices)

### 1\. Always Include a Heading[​](_elements_section.md#1-always-include-a-heading)

Every Section should start with a descriptive heading that clearly indicates its purpose. The first section on the page should include an `H1` and all the others should start with an `H2`. If you don't feel your section needs a heading, then it probably shouldn't be a semantic `section`. You can change it to `div`.
```
  ## Customer Testimonials

Discover the wide range of solutions we offer to help your business grow and succeed. Our team is dedicated to providing top-notch support and expertise for every project.

    [Learn more about our services](_services_overview.md)
```
### 2\. Use Meaningful Section Names[​](_elements_section.md#2-use-meaningful-section-names)

Choose section names that describe the subject of the content. This is important for all users, but especially important for assistive technology (accessibility).
```
  ## Product Features

## Gray Box
```
### 3\. Keep Sections Focused[​](_elements_section.md#3-keep-sections-focused)

Each Section should contain related content that serves a single purpose. If you want to start a new sub topic of the page, start a new section.
```
  ## About Our Company

We've been serving customers since 2010...

## Our Team
```
### 4\. Consider Accessibility[​](_elements_section.md#4-consider-accessibility)

Sections help screen readers and other assistive technologies understand your page structure:

*   Use proper heading hierarchy (h1 → h2 → h3, etc.)
*   Ensure each section has a unique, descriptive heading
*   Don't skip heading levels

## Styling Considerations[​](_elements_section.md#styling-considerations)

Top level Section elements typically need a consistent block padding default and inline padding default (for gutter). If you're not using a framework like [Automatic.css](https://automaticcss.com/) that takes care of this stuff for you, then you'll want to set these defaults yourself.

**See also:** [How to Set Content Width](_how-to_basics_how-to-set-content-width.md)
* [How to Set Global Section Styles](_how-to_basics_how-to-set-global-section-styles.md)

## When Not to Use Sections[​](_elements_section.md#when-not-to-use-sections)

*   **Don't use as generic containers:** Use `` for non-semantic wrappers.
*   **Don't nest unnecessarily:** Keep your structure simple and logical.

* [**Container:**](_elements_container.md) Use to constrain content width and group associated content.

* * *

For more information on proper section structure, see [Every Website Builder Should Have a Proper Semantic Section Element](https://geary.co/section-structure/).

#### _elements_svg.md

> Source: https://docs.etchwp.com/elements/svg
> Scraped: 10.03.2026 08:20:47

The SVG Element in Etch is a special element that handles SVGs dynamically. It's the default/recommended way of inserting SVGs in Etch and is compatible with component props as well.

info

Etch has native support for SVG HTML, but this is separate from Etch's SVG element. If you want to paste SVG code into Etch, you're always free to do that. The SVG Element is an alternative special element that handles SVGs dynamically.

To get started, add the SVG element to the page by clicking the SVG element in the Elements Bar.

![Etch SVG Element](https://docs.etchwp.com/assets/images/etch-svg-element-f17be41e909ca15f2d339b8ab02cf976.webp)

In the code editor you will see `<etch:svg />`, but the output on the front-end will be the raw SVG code.

In the Attributes Panel, with the SVG Element selected, you can choose a source (media library) or enter a URL in the `src` attribute field:

![Etch SVG Attribute Panel](https://docs.etchwp.com/assets/images/etch-svg-attribute-panel-744d6a0a268e35e927b2cf03a93f105a.webp)

It's important to note that the `src` attribute accepts any valid URL to an SVG file, even external URLs to 3rd party icon libraries.

## Using SVGs With Components[​](_elements_svg.md#using-svgs-with-components)

The SVG element can be used in components via the Image prop.

For example, create an Image prop called "Icon" and then place `{props.icon}` (or whatever your prop key is) in the `src` field for the SVG.

You now have an editable icon for your component with support for media picking or a custom URL.

## Stripping Colors[​](_elements_svg.md#stripping-colors)

Many SVGs have hardcoded color values. We've added a feature called "Strip Colors" to the SVG element which will add `stripColors="true"` to your SVG.

This feature will convert hardcoded colors to currentColor, allowing you to change icon colors with basic CSS, via a class or other valid selector. It will also inherit the color property from any parent.

## Selector Support[​](_elements_svg.md#selector-support)

The SVG element is compatible with any valid CSS selector.

#### _elements_text.md

> Source: https://docs.etchwp.com/elements/text
> Scraped: 10.03.2026 08:20:43

*   Elements
*   Text

The Text element in Etch is a basic paragraph `<p>` element by default, though it can be morphed into any other kind of text element. For example, it can become a `span`, `li`, or any other valid element.

warning

A single text element should not be used for rich text (multiple paragraphs inside a single text element) or as the wrapping element for rich dynamic data.

[

Previous

SVG

](_elements_svg.md)[

Next

Overview

](_components-native_overview.md)

#### _facets_apply.md

> Source: https://docs.etchwp.com/facets/apply
> Scraped: 10.03.2026 08:20:50

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Apply

Coming soon...

#### _facets_filter.md

> Source: https://docs.etchwp.com/facets/filter
> Scraped: 10.03.2026 08:20:51

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Filter

Coming soon...

#### _facets_load.md

> Source: https://docs.etchwp.com/facets/load
> Scraped: 10.03.2026 08:20:50

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Load

Coming soon...

#### _facets_map.md

> Source: https://docs.etchwp.com/facets/map
> Scraped: 10.03.2026 08:20:50

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Map

Coming soon...

#### _facets_pagination.md

> Source: https://docs.etchwp.com/facets/pagination
> Scraped: 10.03.2026 08:20:48

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Pagination

Coming soon...

#### _facets_reset.md

> Source: https://docs.etchwp.com/facets/reset
> Scraped: 10.03.2026 08:20:50

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Reset

Coming soon...

#### _facets_search.md

> Source: https://docs.etchwp.com/facets/search
> Scraped: 10.03.2026 08:20:51

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Search

Coming soon...

#### _facets_sort.md

> Source: https://docs.etchwp.com/facets/sort
> Scraped: 10.03.2026 08:20:50

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Sort

Coming soon...

#### _facets_third-party-facets_facetwp.md

> Source: https://docs.etchwp.com/facets/third-party-facets/facetwp
> Scraped: 10.03.2026 08:20:49

This doc covers how to use FacetWP facets with Etch. It provides a generic workflow that applies to all facet types. We'll use Pagination as an example for you to follow along.

## Quick start[​](_facets_third-party-facets_facetwp.md#quick-start)

1.  Create or configure one or more facets in FacetWP.
2.  In your Etch loop’s query args, set `facetwp` to `'true'`.
3.  Add `facetwp-template` as a CSS class on the direct parent of your loop element.
4.  Output your FacetWP facet shortcodes where you want the controls to appear.

That’s it. FacetWP will handle updating the loop via AJAX.

## Prerequisites[​](_facets_third-party-facets_facetwp.md#prerequisites)

*   FacetWP plugin installed and facets created as needed.
*   An Etch loop configured for the content you want to filter/paginate.

## Setup steps[​](_facets_third-party-facets_facetwp.md#setup-steps)

### 1) Create facets in FacetWP[​](_facets_third-party-facets_facetwp.md#1-create-facets-in-facetwp)

*   Go to FacetWP → Facets → Add New.
*   Configure each facet’s type and options as needed, then save.

### 2) Enable FacetWP filtering for your Etch loop[​](_facets_third-party-facets_facetwp.md#2-enable-facetwp-filtering-for-your-etch-loop)

In your loop’s query args, add an arg of `'facetwp' => 'true',` to enable FacetWP:
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => $posts_per_page ?? 6,  'post_status' => 'publish',  'orderby' => 'date',  'order' => 'DESC',  'facetwp' => 'true',];
```
### 3) Add the parent class and facet shortcodes[​](_facets_third-party-facets_facetwp.md#3-add-the-parent-class-and-facet-shortcodes)

In your template, add `facetwp-template` as a CSS class on the direct parent of your loop element and place your facets shortcodes outside of that wrapper.
```
      {#loop your-loop-name as item}          {/loop}    [facetwp facet="pagination"]
```
Important

All facets on a page need to be placed outside the container element that has the `facetwp-template` class. If you do not place the class on a direct parent element (or close enough), you may end up with facets that are inside the container. This will cause issues like disappearing facets, and a Console error: "Facets should not be inside the 'facetwp-template' container".

1.  In FacetWP, create a facet for pagination (Facet type: Pager) and save.

2.  Configure your Etch loop args (example):
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => 10,  'order' => 'DESC',  'facetwp' => 'true',];
```
1.  Place your facets near the loop output:
```
            {#loop blog-posts as item}

          {#if item.featuredImage}            ![{item.featuredImage.alt}]({item.featuredImage.url})          {/if}

## [{item.title}](_%7Bitem.permalink.relative%7D.md)

{item.excerpt}

              {/loop}        [facetwp facet="pagination"]
```
When users interact with the facets, FacetWP updates the loop content via AJAX.

## Multiple loops with their own facets[​](_facets_third-party-facets_facetwp.md#multiple-loops-with-their-own-facets)

FacetWP’s custom WP\_Query pattern supports only one FacetWP-enabled query per page. You can have multiple queries on a page, but only one of them should be FacetWP-enabled. FacetWP will filter only one listing per page and will not function correctly with multiple FacetWP-enabled listings. If you need multiple independent listings with their own facets, use FacetWP Listing Templates instead, and target facets to each template. Another option is to use [WP Grid Builder with their Custom Query option](_facets_third-party-facets_wp-grid-builder.md), as it allows for multiple independent queries.

## Tips and best practices[​](_facets_third-party-facets_facetwp.md#tips-and-best-practices)

*   Keep `posts_per_page` (or your query limit) finite; pagination will be derived from this value.
*   Group your facet UI near the loop so users can easily discover controls.
*   Test with multiple facets active to ensure the URL state and interactions behave as expected.

## Troubleshooting[​](_facets_third-party-facets_facetwp.md#troubleshooting)

*   Facets not affecting the loop: Verify your loop’s query args include `facetwp => 'true'`.
*   No pagination: Confirm the loop has a finite `posts_per_page` and a Pager facet is present.
*   The loop content doesn't update: Ensure the `facetwp-template` class is on the correct parent element and that the facet shortcodes are properly placed outside this container.
*   Shortcode problems: Re-copy the facet shortcodes from FacetWP and ensure facet names match your configuration.

## References[​](_facets_third-party-facets_facetwp.md#references)

*   FacetWP Custom WP Query documentation: [https://facetwp.com/help-center/listing-templates/custom-wp-query/](https://facetwp.com/help-center/listing-templates/custom-wp-query/)

#### _facets_third-party-facets_wp-grid-builder.md

> Source: https://docs.etchwp.com/facets/third-party-facets/wp-grid-builder
> Scraped: 10.03.2026 08:20:51

This doc covers how to use WP Grid Builder (WPGB) facets with Etch. It provides a generic workflow that applies to all facet types. We'll use Pagination as an example for you to follow along.

## Quick start[​](_facets_third-party-facets_wp-grid-builder.md#quick-start)

1.  Create or configure a facet in WP Grid Builder.
2.  In your Etch loop’s query args, set `wp_grid_builder` to a selector in the form `wpgb-content-{your_selector}` (example: `wpgb-content-posts`).
3.  Add the same selector as a CSS class on the direct parent of your loop element.
4.  Use the same selector in the facet shortcode’s `grid` attribute where you want the controls to appear.

That’s it. The selector links the facet to your loop and WPGB handles updating the loop via AJAX.

## Prerequisites[​](_facets_third-party-facets_wp-grid-builder.md#prerequisites)

*   WP Grid Builder plugin installed and facets created as needed.
*   An Etch loop configured for the content you want to filter/paginate.
*   A unique selector value for each loop you want to control, which must be prefixed with `wpgb-content-`, and the exact same value must be used in all three places: the query arg, the CSS class, and the shortcode `grid` attribute. It could be any string after the prefix, such as `wpgb-content-posts`, `wpgb-content-archive`, or `wpgb-content-blog`.

## Setup steps[​](_facets_third-party-facets_wp-grid-builder.md#setup-steps)

### 1) Create a facet in WPGB[​](_facets_third-party-facets_wp-grid-builder.md#1-create-a-facet-in-wpgb)

*   Go to WP Grid Builder → All Facets → Add New.
*   Configure the facet’s type and options as needed.

### 2) Connect the facet to your Etch loop[​](_facets_third-party-facets_wp-grid-builder.md#2-connect-the-facet-to-your-etch-loop)

In your loop’s query args, add an arg for `'wp_grid_builder' => 'wpgb-content-{your_selector}'`
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => $posts_per_page ?? 12,  'post_status' => 'publish',  'orderby' => 'date',  'order' => 'DESC',  'wp_grid_builder' => 'wpgb-content-1'];
```
In your template, add the same value as a CSS class on the direct parent of your loop element:
```
  {#loop your-loop-name as item}      {/loop}
```
tip

**Important:** The selector can be anything you choose, but it must be prefixed with `wpgb-content-` and must match exactly across the query arg (`wp_grid_builder`), the CSS class, and the shortcode `grid` attribute. For example, if you use `wpgb-content-posts`, make sure to use `wpgb-content-posts` in all three places: the query arg, the CSS class, and the facet shortcode's `grid` attribute.

### 3) Output the facet UI[​](_facets_third-party-facets_wp-grid-builder.md#3-output-the-facet-ui)

*   Copy the facet’s shortcode from WPGB (in All Facets, open the item menu → Shortcode) and paste it where you want the controls to render. Add the `grid` attribute to match the selector value you used above (`wpgb-content-{your_selector}`).
```
[wpgb_facet id="{your_facet_id}" grid="wpgb-content-{your_selector}"]
```
Pagination in WPGB is configured as a Load Content facet with a Pagination load type.

1.  In WPGB, create a facet:

*   Facet Action: Load Content
*   Load Type: Pagination
*   Optional: enable Scroll to Top
*   Set the Facet Slug and save

![WP Grid Builder General tab](https://docs.etchwp.com/assets/images/grid-builder-facet-1-squashed-57ee3cf25272e7879b65c010723446d8.webp)

1.  Configure your Etch loop args (example):
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => 10,  'order' => 'DESC',  'wp_grid_builder' => 'wpgb-content-1'];
```
1.  Add the selector class to the parent of the loop element and place the shortcode below it:
```
      {#loop blog-posts as item}

        {#if item.featuredImage}          ![{item.featuredImage.alt}]({item.featuredImage.url})        {/if}

## [{item.title}](_%7Bitem.permalink.relative%7D.md)

{item.excerpt}

          {/loop}    [wpgb_facet id="your-facet-id" grid="wpgb-content-1"]
```
When users interact with the pagination controls, WPGB updates the loop content via AJAX and maintains URL state with the Facet Slug.

## Using other facet types[​](_facets_third-party-facets_wp-grid-builder.md#using-other-facet-types)

The same connection pattern applies to most facet types (search, filters, sorting, reset):

*   Create/configure the facet in WPGB.
*   Ensure your Etch loop has a `wp_grid_builder` selector value.
*   Add that class to the loop element's parent.
*   Output each facet’s shortcode near the loop.

You can render multiple facets for the same loop; just make sure they all target the same selector value. If you have multiple independent loops on a page, give each loop a unique `wpgb-content-*` value and use separate facets/shortcodes per loop.

## Multiple loops with their own facets[​](_facets_third-party-facets_wp-grid-builder.md#multiple-loops-with-their-own-facets)

WP Grid Builder supports multiple loops on the same page, each with their own facets. Each loop should have its own unique `wpgb-content-*` selector value, and all three components (query arg, CSS class, shortcode grid attribute) must use the same value for that loop to work correctly.

## Tips and best practices[​](_facets_third-party-facets_wp-grid-builder.md#tips-and-best-practices)

*   Use a clear naming convention for selector classes, e.g., `wpgb-content-posts`, `wpgb-content-products`.
*   Place the selector class on the direct parent element of the loop element (not the loop itself).
*   Keep `posts_per_page` (or your query limit) finite; pagination will be derived from this value.
*   Group your facet UI near the loop so users can easily discover controls.
*   Test with multiple facets active to ensure the URL state and interactions behave as expected.

## Troubleshooting[​](_facets_third-party-facets_wp-grid-builder.md#troubleshooting)

*   Facet not affecting the loop: Verify the `wp_grid_builder` value matches the class on the loop element's parent exactly.
*   Wrong content updating: Ensure each loop/facet group uses a unique selector value.
*   No pagination: Confirm the loop has a finite `posts_per_page` and the facet is set to Load Content → Pagination.
*   Shortcode issues: Re-copy the shortcode from WPGB and ensure the `grid` attribute matches your `wpgb-content-*` selector value (e.g., `wpgb-content-posts`).

## References[​](_facets_third-party-facets_wp-grid-builder.md#references)

WP Grid Builder guide: Filter custom queries: [https://docs.wpgridbuilder.com/resources/guide-filter-custom-queries/](https://docs.wpgridbuilder.com/resources/guide-filter-custom-queries/)

#### _feature-flags.md

> Source: https://docs.etchwp.com/feature-flags
> Scraped: 10.03.2026 08:20:36

Feature flags allow us to deploy in-progress or in-testing features safely. If you want to turn on a testable feature, you can enable the flag. If we ship an update with a flagged feature on, you can turn it off.

## How Feature Flags Work[​](_feature-flags.md#how-feature-flags-work)

Feature flags are boolean values that control whether a feature is enabled or disabled. If a feature is causing issues, you can turn its flag off. This allows you to enjoy other aspects of the release version without the issues caused by the problematic feature. We also might ship a feature with the flag turned off by default, allowing you to opt-in to testing it.

### Basic Usage[​](_feature-flags.md#basic-usage)

To use Feature Flags, you can create a `json` file called `flags.user.json` in `/wp-content/uploads/etch/`. This file allows you to override the default value for any specific flag on a flag-by-flag basis. Any flag not specified in your `flags.user.json` file will use its default value. If this file doesn't exist, or if it is an empty JSON object (`{}`), Etch will use the default flag values for all flags.

The file should use the following format:
```
{    "FLAG_NAME": "on",    "FLAG_NAME_2": "off"}
```
info

The `flags.user.json` must be a valid JSON file. An invalid JSON file (including an empty file) will cause an error.

warning

Because flags defined in `flags.user.json` override their default values, you are responsible for managing these overrides across updates.

For example, if we ship an update where a flag that was previously `off` is now `on`, but you have set it to `off` in your `flags.user.json` file, your value will take precedence. You will have to remember to remove the flag from your file to get the new default behavior.

You can choose from the available flags below. Their default state is listed.

## Available Feature Flags[​](_feature-flags.md#available-feature-flags)

| Flag Name | Description | Default |
| --- | --- | --- |
| `ENABLE_DEBUG_LOG` | Enables debug logging | `off` |
| `ENABLE_SERVER_TIMING` | Enables server timing headers for performance monitoring | `off` |
| `RETURN_ACF_DYNAMIC_DATA` | Enables returning data based on the ACF field settings. | `off` |
| `ENABLE_WAF_BLOCK_REQUEST_WORKAROUND` | Improve compatibility with Hostinger WAF that block the save request. | `off` |

#### _getting-started_core-principles.md

> Source: https://docs.etchwp.com/getting-started/core-principles
> Scraped: 10.03.2026 08:20:36

## Pillar #1: Honor Web Development Fundamentals[​](_getting-started_core-principles.md#pillar-1-honor-web-development-fundamentals)

Etch respects the fundamental language and practices of web development. We don't create proprietary systems or "magic" that hides what's really happening.

Instead, we work with HTML, CSS, PHP, and JavaScript as they were designed to work, providing a visual interface that directly manipulates real code. This means you learn actual web development skills, not just how to use a tool.

## Pillar #2: Never Generate an Element the User Can't Access[​](_getting-started_core-principles.md#pillar-2-never-generate-an-element-the-user-cant-access)

Every element Etch creates is fully accessible and editable. There are no "black box" elements, hidden wrappers, or mysterious containers that you can't see, select, or modify. If Etch generates it, you can access it. This transparency ensures you have complete control over your code and understand exactly what's happening in your project.

## Pillar #3: Don't Rescue Users From Themselves[​](_getting-started_core-principles.md#pillar-3-dont-rescue-users-from-themselves)

We believe in empowering users rather than protecting them from making mistakes. Etch doesn't prevent you from doing things that might be "wrong" or "inefficient" because learning often comes from experimentation and understanding consequences.

Instead of adding bogus code to try and save you from mistakes you _might_ make, we provide the tools, education, and validation to help you recognize and avoid them.

## Pillar #4: Do What's Right, Not What's Easy[​](_getting-started_core-principles.md#pillar-4-do-whats-right-not-whats-easy)

This philosophy guides how we design features, architect our software, and make product decisions. Instead of implementing surface-level features or shortcuts, we dig deep to ensure every feature is robust, flexible, and truly empowers users.

We invest the extra effort to support advanced workflows, maintain high standards for accessibility and best practices, and build tools that scale with your needs.

Our priority is long-term quality, maintainability, and user freedom, even if that means taking the more challenging and expensive path during development.

## Pillar #5: Do What's Effective, Not What's Popular[​](_getting-started_core-principles.md#pillar-5-do-whats-effective-not-whats-popular)

Etch doesn't chase trends or implement features just because other tools have them. We focus on what actually works and what genuinely improves the development experience. This means making decisions based on effectiveness and user needs, not on what's currently fashionable in the industry.

## Pillar #6: Default Styles Must Have 0,0,0 Specificity[​](_getting-started_core-principles.md#pillar-6-default-styles-must-have-000-specificity)

All default styles in Etch are applied with 0,0,0 specificity, making them extremely easy to override without a specificity war.

## Pillar #7: Make Things Easier, But Don't Compromise[​](_getting-started_core-principles.md#pillar-7-make-things-easier-but-dont-compromise)

A visual development environment has advantages over a coding environment. Dragging and dropping elements, re-arranging a structure panel, dropping in a carousel, wrapping an element in conditional logic, creating components, looping elements –– all these things are objectively faster and easier to do in a visual development environment.

The problem with traditional page builders is that, in making these things easier, they introduced uncomfortable compromises. Poor code, functionality limitations, less scalability and maintainability, etc.

Etch will never do that. Our responsibility to our customers is simple – make your life easier, with no tradeoffs or gotchas.

#### _getting-started_development-strategy.md

> Source: https://docs.etchwp.com/getting-started/development-strategy
> Scraped: 10.03.2026 08:20:37

It's important to be aware of the Etch development strategy, because it differs from most software, especially software in the WordPress ecosystem.

Here are the basic principles:

1.  Don't build in the dark of night––development should involve real users.
2.  Functionality first, UI second.
3.  Release _something_ weekly, no matter what.
4.  Progress is better than perfection.
5.  The sooner you can use it, the sooner you can break it, the sooner we can get it right.
6.  Surface area is more important than depth in early stages.
7.  Real-world use, not theory, should drive feature prioritization.
8.  Release bug fixes as soon as they're available.

As a customer, this means that you're going to get weekly releases. And in some cases, you might get more than one release per week.

We don't sit around accumulating bug fixes only to release them in a batch at some predetermined time. Rather, we release them as soon as they're available because this makes your life better.

When it comes to feature releases, it's common to get multiple partial releases instead of a single finished release. Why? Because the sooner we get something in your hands, the sooner we can start getting feedback on the parts that are available. This prevents us from going too deep in the wrong direction.

This strategy – along with a highly skilled team – is precisely why we've been able to build a working, functional tool that people love on an unprecedented timeline.

It does require a little discipline on the part of users, though. You have to be OK with releases that contain partial new features, unpolished parts of the UI, etc. And you have to tailor your feedback to what's available, not what's missing.

If you can do that, you'll come to appreciate the process and the results.

#### _getting-started_etch-theme.md

> Source: https://docs.etchwp.com/getting-started/etch-theme
> Scraped: 10.03.2026 08:20:36

Etch requires a companion block theme to function properly. The Etch theme is a minimal, blank WordPress block theme.

The Etch theme provides the necessary hooks and structure for Auto Block Authoring and Gutenberg compatibility –– no more, no less.

## Important Notes[​](_getting-started_etch-theme.md#important-notes)

⚠️ **Do not switch themes during development or after going live.** WordPress' theme architecture is not designed for theme switching. Replacing the theme during development or production could result in:

*   Loss of page layouts and content
*   Broken functionality
*   Incompatibility issues
*   Data corruption

## License & Auto-Updates[​](_getting-started_etch-theme.md#license--auto-updates)

Your Etch Theme license key is required to enable auto-updates and access certain features.

If you haven't already claimed your free license, head over to [etchwp.com/account/customer-dashboard/](https://etchwp.com/account/customer-dashboard/) and follow the [License Setup guide](_getting-started_installation.md#license-setup).

## Additional Insights[​](_getting-started_etch-theme.md#additional-insights)

Themes in WordPress are outdated architecture and should be disregarded. The future of WordPress is not found in themes. The Etch theme is provided simply to meet WordPress core architectural requirements.

Users are advised to install the Etch Theme and never think about themes again. Don't consider using other block themes, don't switch themes, don't pay attention to themes, and stop caring about themes.

#### _getting-started_installation.md

> Source: https://docs.etchwp.com/getting-started/installation
> Scraped: 10.03.2026 08:20:36

## Getting Started

This guide will walk you through setting up Etch for development and production use.

## Quick Start[​](_getting-started_installation.md#quick-start)

1.  **Install the Plugin**: Upload and activate the Etch plugin in WordPress
2.  **Install the Etch Theme**: Upload and activate the Etch theme in WordPress
3.  **Claim Your License**: See License Setup below
4.  **Access the Builder**: Navigate to any page or post and click "Edit with Etch"
5.  **Start Building**: Use the visual editor to create your layout
6.  **Publish**: Save and publish your changes

## License Setup[​](_getting-started_installation.md#license-setup)

To use the Etch Theme with auto-updates enabled, you'll need to claim your free Etch Theme license.

### Claiming Your License[​](_getting-started_installation.md#claiming-your-license)

1.  **Log in to your account** at [etchwp.com/account/customer-dashboard/](https://etchwp.com/account/customer-dashboard/)
2.  **Click "Reclaim Etch Theme Now"** to claim your free license
3.  **Find your license key** in your SureCart dashboard
4.  **Download the theme** from your dashboard

#### _getting-started_requirements.md

> Source: https://docs.etchwp.com/getting-started/requirements
> Scraped: 10.03.2026 08:20:39

For the best Etch experience, make sure your stack aligns with the following:

## Primary Requirements[​](_getting-started_requirements.md#primary-requirements)

*   WordPress 5.9
*   PHP 8.1
*   WP memory limit 64MB (128MB Recommended)

## Browser Version Compatibility[​](_getting-started_requirements.md#browser-version-compatibility)

Etch's interface (completely separate from the sites you build with Etch) uses the latest CSS techniques (color-mix, relative color syntax, etc.), especially when it comes to interface colors. These techniques are supported in all major browsers, but only if you've kept your browser up to date (which any good developer should).

For the best experience, use the latest available version of your browser.

## Browser Type Compatibility[​](_getting-started_requirements.md#browser-type-compatibility)

Etch should work in all browsers, but may currently have bugs and issues in Firefox specifically since Firefox is particularly problematic and we have not dedicated much debug time to Firefox. For the best experience, use a Chromium or WebKit browser.

## Important Safari Note[​](_getting-started_requirements.md#important-safari-note)

Safari currently has known and tracked bugs related to proper rendering of the OKLCH color space as well as relative color syntax. The Etch interface uses both of these to render certain interface colors.

Due to these issues, Safari users may experience off-brand color shifts and interface color inconsistencies that users in Chromium and Firefox browsers will not experience.

#### _getting-started_things-to-know.md

> Source: https://docs.etchwp.com/getting-started/things-to-know
> Scraped: 10.03.2026 08:20:36

Etch is different from traditional page builders in many ways. Since your experience with Etch will be shaped by your expectations, we want to make sure you start off with a proper understanding of why Etch exists, why it looks different, and why it works differently.

## Why Etch Exists[​](_getting-started_things-to-know.md#why-etch-exists)

Etch exists because traditional page builders were all designed around the same question: "How can we make web design super easy for laypeople?"

And when you ask that question, you end up with:

*   Dumbed down, no-code / low-code interfaces
*   Bloated code output (because laypeople don't care)
*   Tremendous styling limitations
*   Architectural limitations
*   Functionality limitations
*   Poor scalability and maintainability
*   Poor accessibility
*   A frustrating, proprietary experience
*   Etc.

And after more than a decade of running this experiment of trying to get laypeople to build websites with dumbed down tools, we've discovered that it isn't really possible.

The most true laypeople can do is drop in a template, swap some colors, and edit content.

For the people who go through a significant learning curve to actually do web design type things, they end up learning the proprietary language of the specific tool rather than learning actual web design.

The result is that they might work in this industry for years, but still know hardly anything. They're nothing more than website "assembler." And they go through life with a deep sense of imposter syndrome and a general lack of confidence.

### Etch is different...[​](_getting-started_things-to-know.md#etch-is-different)

Etch is the first tool to ask a much better and more relevant and more practical question: "How can we use a visual environment to fundamentally innovate a professional web development workflow?"

Etch is the first tool to truly respect the fundamental language of web design and do things according to best practices. This results in higher quality projects (if you know what you're doing or learn) and levels up the skills of everyone who uses it (rather than trapping you in a proprietary ecosystem).

Etch is the first tool to give you full access to the code in an unprecedented way (while still empowering you to work without code if you'd like).

Etch is the first tool to full unify your development workflow so you're not bouncing around from "magic area" to "magic area" to do certain things.

Etch is true innovation and maximum efficiency. It's full flexibility and control...

It's what WordPress' visual environment should have always been.

## To Beginners & Aspiring Pros: We Believe That You're Capable of Being Capable[​](_getting-started_things-to-know.md#to-beginners--aspiring-pros-we-believe-that-youre-capable-of-being-capable)

Etch's founder, [Kevin Geary](https://geary.co/), has taught web development best practices to tens of thousands of people.

We've watched pure beginners transform into highly skilled developers by following the right trainings and using the right tools.

Traditional page builders are designed for people who don't know what they're doing and they don't bother teaching you the right way. In fact, they encourage you to do things the wrong way!

Etch is designed for people who know what they're doing OR people who want to learn. And we're 100% committed to teaching, educating, and training you if you don't already have the skills, knowledge, and experience (for free!).

This is a fundamentally different relationship and we hope you appreciate that.

If you're wanting to do actual web development, Etch is the best place to learn because it actually speaks the language of web development. Spending time in other tools will only delay your actual learning, because other tools do proprietary (and bad practice) things to close the knowledge gap.

## To Pros: We know what you want, need, and expect and that's exactly what we deliver[​](_getting-started_things-to-know.md#to-pros-we-know-what-you-want-need-and-expect-and-thats-exactly-what-we-deliver)

For years, professional web developers have been an afterthought in the world of visual builders.

Most tools are built for laypeople, leaving pros frustrated by rigid interfaces, lack of control, and code output that doesn't meet their standards. Even traditional IDEs and code editors, while powerful, often lack the seamless integration between structure, style, and content that modern web projects demand, especially when working with Wordpress.

**Etch changes everything.** Here, professionals are not just remembered—they're prioritized. Etch is designed to give you the power, flexibility, and efficiency you expect from a top-tier development environment, but with a level of integration and workflow optimization that goes beyond what most IDEs offer.

**In Etch, you get the best of both worlds:** the power and control of a professional IDE, combined with the speed, clarity, and integration of a next-generation visual builder. For the first time, professionals have a tool that truly respects their workflow and raises the bar for what a development environment can be.

## Conclusion[​](_getting-started_things-to-know.md#conclusion)

Etch isn't just another page builder—it's a **Unified Visual Development Environment (UVDE)** built on respect for the craft of web development and for the people who practice it, whether you're just starting out or have years of experience.

By combining a visual interface with direct access to real code, Etch empowers you to learn, grow, and create at the highest level. Our mission is to help you build better websites, faster, and with more confidence than ever before.

Welcome to a new era of web development. Welcome to Etch.

#### _gutenberg_block-authoring.md

> Source: https://docs.etchwp.com/gutenberg/block-authoring
> Scraped: 10.03.2026 08:20:52

note

Etch now authors everything you build to custom Gutenberg blocks (not core blocks). This architectural change improves fidelity, editing stability, and long‑term maintainability while preserving Gutenberg as the client-facing content editor. For further reading, see [Auto Block Authoring: Core Blocks vs Custom Blocks](https://etchwp.com/blog/auto-block-authoring-core-vs-custom/).

Etch authors everything you build to custom Gutenberg blocks and maintains a bi-directional sync between Etch and Gutenberg. They render in the editor exactly as they do in Etch, and all content is stored in WordPress for portability and longevity. This keeps Etch as your development environment while Gutenberg remains a simple, client-facing editor, which improves stability and day-to-day editing.

1.  **Data Liberation**: The content you add to pages and templates is stored in WordPress, not Etch.
2.  **Compatibility**: Blocks work with all plugins without conflicts.
3.  **Client Editing**: Gutenberg's simple interface is perfect for client editing.
4.  **Pattern Library Compatibility**: Your patterns can be saved to the WordPress pattern library.
5.  **Synced Library Compatibility**: Your components can be saved to the WordPress synced pattern library.
6.  **Template Library Compatibility**: Your templates are stored in the WordPress templates area.
7.  **Plugin Compatibility**: Unsupported blocks from other plugins will passthrough Etch to the front-end automatically.

## Bi-Directional Sync[​](_gutenberg_block-authoring.md#bi-directional-sync)

What you build in Etch automatically appears in the block editor as custom blocks, complete with the same structure panel names and labels you see in Etch, so the editor mirrors your build faithfully.

When you edit content or make layout adjustments in the block editor and save, those changes are synced back to Etch and the front end, keeping everything in step without extra effort.

Likewise, changes you make in Etch flow back into the block editor on save, which keeps both views aligned while you work across environments.

There is no manual syncing or configuration to manage because synchronization is part of Etch's architecture and runs automatically in the background.

## Why Custom Blocks (Not Core Blocks)?[​](_gutenberg_block-authoring.md#why-custom-blocks-not-core-blocks)

Core blocks seemed like the most “native” and flexible path, but in practice they were too limited for modern workflows. Achieving the necessary fidelity required manipulating output, removing wrappers, and overriding defaults, which is an unstable, maintenance-heavy approach.

Custom blocks, by contrast, give us precise rendering, a smoother editor experience, and a far more stable foundation across your stack.

### Advantages of Custom Blocks[​](_gutenberg_block-authoring.md#advantages-of-custom-blocks)

*   **1 to 1 Design Representation**: Patterns, components, loops, and templates render in Gutenberg exactly as you built them in Etch, without hacky overrides or wrappers.
*   **Seamless Editing Experience**: Custom blocks support nuanced content editing (for example, spans inside headings or paragraphs, inline links, and single buttons) while protecting structure.
*   **Improved Stability**: Custom blocks reduce breakage from core updates and remove brittle workarounds required by core blocks.
*   **Ecosystem Flexibility (Phase 2)**: Etch's custom block authoring enables building and distributing custom blocks, libraries, and prefabs directly from WordPress. More details are coming in the second phase of this refactor.

## Where Should Things Be Built?[​](_gutenberg_block-authoring.md#where-should-things-be-built)

Etch is the development environment. The block editor is only for content editing. Do not build things in the block editor:

*   There's no point. Etch is where your power and control are.
*   The block editor is NOT a development environment

The block editor is essentially a client-editing interface. In the future you will be able to control exactly which things the client can edit and will be able to lock certain aspects of patterns and components if you don't want them to be editable.

## A Brand New Custom Block Development Experience[​](_gutenberg_block-authoring.md#a-brand-new-custom-block-development-experience)

With Etch, you visually build what would traditionally require custom block development. You do not need to write React or manage third‑party dependencies. Build patterns, components, libraries, and templates in Etch and author them as custom blocks for a fast, consistent workflow.

If you can write HTML, CSS, and JS, you can build custom blocks. Etch will generate the React code for you.

Phase 2 of this refactor will introduce new distribution possibilities for sharing/selling blocks and libraries to non‑Etch users directly within the WordPress ecosystem.

#### _gutenberg_passthrough.md

> Source: https://docs.etchwp.com/gutenberg/passthrough
> Scraped: 10.03.2026 08:20:51

Etch is architected to work with any and all third party blocks, from checkout systems, to forms, to facets.

This is handled through the concept of "passthrough blocks."

When Etch detects a block that's not a core Gutenberg block, it essentially "passes it through" to the front-end without attempting to parse it. And in Etch, you'll simply see a placeholder element.

This allows you to use these blocks without breaking their functionality.

In the future, plugin developers can integrate directly with Etch to map the functionality into custom elements in Etch. This way, you can insert the elements directly in Etch without having to worry about the block editor.

#### _how-to_basics_how-to-install-custom-fonts.md

> Source: https://docs.etchwp.com/how-to/basics/how-to-install-custom-fonts
> Scraped: 10.03.2026 08:20:46

Since:

1.0.0-rc-5

There are two primary methods of adding custom fonts to any website:

1.  Local Files (Best)
2.  CDN (Alternative)

We'll cover both in this guide.

info

Managing fonts is even easier with a framework like [Automatic.css](https://automaticcss.com/). If you're an ACSS user, you'll want to follow the ACSS-specific instructions for custom fonts.

## Hosting Fonts Locally[​](_how-to_basics_how-to-install-custom-fonts.md#hosting-fonts-locally)

Using custom local fonts is a simple three step process:

1.  Upload the files
2.  Add the `@font-face` declarations
3.  Set your font family (usually in global CSS)

### Step 1: Upload the Files[​](_how-to_basics_how-to-install-custom-fonts.md#step-1-upload-the-files)

WordPress blocks font file uploads to wp-admin by default. To get around this, we've added a toggle in Etch Settings to allow custom font uploads:

![Custom font upload toggle in Etch Settings](https://docs.etchwp.com/assets/images/etch-settings-custom-fonts-88266e354b035f4793ec6ed4c14e7b5b.webp)

Flip that toggle, save changes, and then refresh the builder. You can then open the media library and drag your font files in.

Once your files are uploaded, grab their URL path. You'll need it for the next step.

### Step 2: Add the `@font-face` declarations[​](_how-to_basics_how-to-install-custom-fonts.md#step-2-add-the-font-face-declarations)

CSS requires custom fonts to be declared using `@font-face`.

You can add this to a global stylesheet in Etch ([Style Manager](_interface_style-manager.md)) by copying and pasting the example code below, or by deploying the `?font-face` [recipe](_utilities_recipes_miscellaneous-recipes.md).

Stylesheet Tip

Create a new stylesheet called "Typography" so you can keep everything related to typography in one place. Etch lets you create and manage as many stylesheets as you want. This will have no effect on performance.
```
@font-face {  font-family: "Your Font Name";  src: url("/wp-content/uploads/path-to-font.woff2") format("woff2");  font-style: normal;  font-weight: 400;  font-display: swap;}
```
You need to add a `@font-face` block for each family and/or weight.

For variable fonts, use a weight range instead of a single value and only declare it once per family:
```
@font-face {  font-family: "Your Variable Font";  src: url("/wp-content/uploads/path-to-font-variable.woff2") format("woff2");  font-style: normal;  font-weight: 100 900;  font-display: swap;}
```
### Step 3: Tell your elements to use that font[​](_how-to_basics_how-to-install-custom-fonts.md#step-3-tell-your-elements-to-use-that-font)

Declaring fonts via `@font-face` just makes the custom fonts available, but it doesn't tell which elements to actually use them.

If you're not using a framework like [Automatic.css](https://automaticcss.com/), here's our recommended setup:

#### Step 3A: Map Your Fonts to Tokens[​](_how-to_basics_how-to-install-custom-fonts.md#step-3a-map-your-fonts-to-tokens)

Tokenizing your fonts makes them a lot easier to manage and makes your site more maintainable.

Go back to your stylesheet where you declared `@font-face` and add the following:
```
:root {  --heading-font-family: "My Font Family";  --text-font-family: "My Font Family";}
```
#### Step 3B: Declare Your Defaults[​](_how-to_basics_how-to-install-custom-fonts.md#step-3b-declare-your-defaults)

You can declare your defaults in the same exact stylesheet OR you can use the Etch selector system. The two big benefits of the selector system are (1) tree shaking for better performance and (2) element identification of applied styles in the editor with instant access to style modification.

Using the selector system to manage global styles is a little more advanced, so we'll focus on just getting you up and running with the same stylesheet you've been using.

Add the following:
```
h1,h2,h3,h4,h5,h6 {  font-family: var(--heading-font-family);}body, p, li, a, button {  font-family: var(--text-font-family);}
```
That will get you most of the way to where you want to go, but all this stuff is project dependent. This is why a framework like [Automatic.css](https://automaticcss.com/) is so valuable. It alleviates you from having to worry about all this stuff.

## Using a CDN for Custom Fonts[​](_how-to_basics_how-to-install-custom-fonts.md#using-a-cdn-for-custom-fonts)

Using a CDN is a simple two step process:

1.  Add the `@import` line to your stylesheet.
2.  Set your font family (usually in global CSS).

### Step 1: Add the `@import` line[​](_how-to_basics_how-to-install-custom-fonts.md#step-1-add-the-import-line)

Performance Note

Local fonts generally perform better than CDN fonts since they avoid external network requests. Consider using local fonts for production sites when possible.

A CDN (Content Delivery Network) hosts font files on distributed servers around the world. When you use a CDN for fonts, your site loads fonts from these servers instead of serving them from your own hosting. It has some benefits, but also comes with significant performance and GDPR (privacy) considerations.

Go to [Google Fonts](https://fonts.google.com/) (or your preferred font CDN), select your font family and weights, then copy the `@import` code. Add it to the top of your stylesheet.

Here's an example using Google Fonts:
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```
### Step 2: Set your font family[​](_how-to_basics_how-to-install-custom-fonts.md#step-2-set-your-font-family)

Follow the same tokenization and declaration process from [Step 3A](_how-to_basics_how-to-install-custom-fonts.md#step-3a-map-your-fonts-to-tokens) and [Step 3B](_how-to_basics_how-to-install-custom-fonts.md#step-3b-declare-your-defaults) above, using your CDN font name.

Congrats, you should now have functioning custom fonts on your site!

#### _how-to_basics_how-to-set-content-width.md

> Source: https://docs.etchwp.com/how-to/basics/how-to-set-content-width
> Scraped: 10.03.2026 08:20:48

info

[Automatic.css](https://automaticcss.com/) users do not need to do follow this tutorial. ACSS sets and manages your content width and you can adjust it in the ACSS dashboard.

Etch sets the max-width of **Container** elements to `var(--content-width)` by default with a fallback value of `1366px`. This is why the **Container** element (which is added to **Sections** by default) is `1366px` out of the box.

Since this default is set with a fallback value in an undefined variable, it has zero effect on your preferences should you want to set a different value.

So let's talk about setting a different value!

All you have to do to set your own custom content width is open the Style Manager by clicking the paint brush icon in the sidebar:

![Open the Style Manager](https://docs.etchwp.com/assets/images/style-manager-4e2d90521e512922afdbf27ad497b181.avif)

Once the style manager is open, switch to the Variables Manager tab and then add this variable:
```
--content-width: 1280px;
```
That's it! Now all your **Container** elements will be your new desired width.

#### _how-to_basics_how-to-set-global-heading-styles.md

> Source: https://docs.etchwp.com/how-to/basics/how-to-set-global-heading-styles
> Scraped: 10.03.2026 08:20:48

info

[Automatic.css](https://automaticcss.com/) users do not need to do follow this tutorial. ACSS sets and manages your heading styles and you can adjust them in the ACSS dashboard.

info

In the future, Etch will have a dedicated section in the Styles Manager for managing global styling. The below method will still work, but it will be made easier soon.

Etch's selector system empowers you to select and style any element by its tag name. For headings, this means you can add every heading level as a stylable selector.

To get started, open Etch, select any element on the page (it doesn't matter which element you select), and press Command ⌘ + Enter (on Mac) or Ctrl + Enter (on Windows) to open the [Attribute Bar](_interface_attributes-bar.md).

Type in:
```
{h1} {h2} {h3} {h4} {h5} {h6}
```
Once you hit enter, open the [Style Manager](_interface_style-manager.md).

If you have a lot of selectors, you can filter down to elements by choosing the "Tag" category.

You should now see your heading selectors waiting to be styled.

![Style Manager showing heading selectors](https://docs.etchwp.com/assets/images/style-manager-elements-ca13c7af7375fef95a73a7c8f636cbbb.avif)

## How to Add & Preview Styles[​](_how-to_basics_how-to-set-global-heading-styles.md#how-to-add--preview-styles)

Etch will have a dedicated global styles manager in the future with a preview pane for seeing what you're doing.

For now, though, the best way to add your global styles (especially if you don't want to write CSS) is to close the style manager and add each heading level to the canvas.

When you click on a heading element, you'll see the [Selector Pill](_interface_selector-pills.md) available. Click it and use the [CSS Panel](_interface_css-panel.md) to add your styles.

Using this method will allow you to see exactly what you're doing as you work.

## Grouping Heading Styles[​](_how-to_basics_how-to-set-global-heading-styles.md#grouping-heading-styles)

For any shared heading styles, you can create a more efficient selector, which gives you a single source of truth for the shared styles:
```
:where(h1,h2,h3,h4,h5,h6)
```
This can be added in Etch by putting brackets around the selector.

Any styles applied to this selector will apply to all headings.

#### _how-to_basics_how-to-set-global-section-styles.md

> Source: https://docs.etchwp.com/how-to/basics/how-to-set-global-section-styles
> Scraped: 10.03.2026 08:20:48

info

[Automatic.css](https://automaticcss.com/) users do not need to do follow this tutorial. ACSS sets and manages your section styles and you can adjust them in the ACSS dashboard.

info

In the future, Etch will have a dedicated section in the Styles Manager for managing global styling. The below method will still work, but it will be made easier soon.

When you first add a Section element to the page (if you're not an Automatic.css user), you'll notice two things:

1.  It has no default padding.
2.  It has no gutter.

That means your Container is touching the top and bottom edges of your Section and your content will touch the device edges on mobile.

This is undesirable!

Smart developers solve this by setting default padding for sections.

## Selecting the Right Sections[​](_how-to_basics_how-to-set-global-section-styles.md#selecting-the-right-sections)

The safest and best way way to set default Section styles is a little trick we came up with when developing ACSS:
```
:where(section:not(section section)) {    padding-block: /* value */;    padding-inline: /* value */;}
```
Let me quickly explain this so you understand it:

`:where()` - This sets the specificity of the styles we're about to add to `0,0,0`. This is best practice for setting global defaults.

`section:not(section section)` - This essentially says, "select all sections except sections that are children of over sections.

The end result is that only top level sections are selected. Sections can be nested in other sections, but you wouldn't want any of these default styles applied in that case, so we exclude that scenario.

In Etch, you can use the [Attribute Bar](_interface_attributes-bar.md) to add that selector by wrapping it in braces:
```
{:where(section:not(section section))}
```
## Adding the Styles[​](_how-to_basics_how-to-set-global-section-styles.md#adding-the-styles)

Once you've added the selector, you can add the padding styles:

Question is: what should the padding values be?

I can help!

First, you can absolutely do this:
```
:where(section:not(section section)) {    padding-inline: 16px;    padding-block: 4rem;}
```
But that's hot garbage and you shouldn't build hot garbage.

Let's do it a better way:

Since the padding-inline value represents your site's "gutter" and the gutter needs to be consistent across the entire site, let's make a token for it:
```
:where(section:not(section section)) {    padding-inline: var(--gutter);}
```
Where does gutter get its value from? Hop back over to the Variable Manager and add:
```
--gutter: clamp(16px, 10dvw, 80px);
```
Haven't see a `clamp()` function before?

Let's learn!

What this formula effectively does is it scales your gutter from `16px` to `80px` automatically depending on the device width.

The `clamp()` function says, "use the middle value, but `16px` is the minimum and `80px` is the maximum. Since the middle value is a `dvh` value (device width percentage), it scales fluidly between the other two values.

You can set the min and max to any value you prefer.

Phew. Okay, on to the block padding!

We're essentially going to do the same thing, with a minor adjustment to the values since section block padding needs to be bigger than gutter padding.
```
:where(section:not(section section)) {    padding-inline: var(--gutter); /* Left and right */    padding-block: clamp(30px, 5dvw, 80px); /* Top and bottom */}
```
Now when you add a section element, it'll have a gutter and default padding. And your default padding can easily be overwritten with any new padding value you'd like!

warning

This isn't the absolute best way to set `clamp()` function values. The best way uses a complex math formula to set the middle value based on your content width dimensions and a minimum device size. This requires a clamp calculator or a framework like ACSS. But you can "get by" with the values above.

#### _integrations.md

> Source: https://docs.etchwp.com/integrations
> Scraped: 10.03.2026 08:20:36

This section covers various integrations available in Etch, allowing you to extend functionality and connect with other systems and plugins.

## Available Integrations[​](_integrations.md#available-integrations)

Most third-party custom field plugins are supported since you can access any custom field using the `this.meta` namespace. However, sometimes data is stored in a more specialized or structured way, and we provide specific documentation for those plugins to make it easier to work with their data.

For example, you can access all ACF data using the `this.acf` namespace. Their data is stored in a more structured way, so we output all that info nested under `this.acf`.

#### _integrations_controls.md

> Source: https://docs.etchwp.com/integrations/controls
> Scraped: 10.03.2026 08:20:39

Etch allows you to extend the builder interface by adding custom controls.

You can add custom buttons to the Settings Bar (the left sidebar in the builder) using the `window.etchControls.builder.settingsBar` API.

Each location provides `addBefore()` and `addAfter()` methods to position your control relative to existing items in that section.

Etch supports [Iconify](https://iconify.design/), which means you can use any icon string from their library (e.g., `mdi:home`, `ph:pencil`, `carbon:settings`).

To ensure the Etch API is available when your script runs, we recommend wrapping your code in a `window.addEventListener('load', ...)` listener.
```
window.addEventListener('load', () => {    // Add a custom button to the top section of the settings bar    window.etchControls.builder.settingsBar.top.addAfter({        icon: 'ph:rocket-duotone', // Any icon from https://iconify.design/        tooltip: 'Launch Rocket',        callback: () => {            alert('Rocket launched! 🚀');        }    });});
```

#### _integrations_custom-fields.md

> Source: https://docs.etchwp.com/integrations/custom-fields
> Scraped: 10.03.2026 08:20:39

Etch integrates seamlessly with third-party custom field solutions, allowing you to use custom field data in your templates and designs.

Etch supports popular third-party custom field plugins to enhance your content management capabilities.

Custom fields created with Advanced Custom Fields can be accessed with the `acf` namespace.
```
{this.acf.field_id}{item.acf.field_id}
```
Custom fields created with JetEngine can be accessed with the `jetengine` namespace.

Custom fields created with Meta Box can be accessed with the `metabox` namespace.

#### _integrations_custom-fields_flexible-content-fields.md

> Source: https://docs.etchwp.com/integrations/custom-fields/flexible-content-fields
> Scraped: 10.03.2026 08:20:43

ACF Flexible Content fields allow you to create complex, dynamic layouts with multiple content types that editors can mix and match. Etch makes it easy to loop through flexible content and render different layouts based on the content type.

info

As an alternative in the future, you will have the option to save your Etch designs to the native block editor pattern library. You will also be able to restrict which patterns are displayed based on various criteria such as the current post type. This approach can offer a more visually engaging experience for clients, as they'll be able to see the design of the pattern they're editing directly in the block editor. Furthermore, you'll be able to control which aspects of the pattern are editable, providing an additional layer of design protection. However, ACF Flexible Content can also be used for this purpose, depending on your specific needs.

ACF flexible content loops use the `this.acf.your_flexible_field` syntax as the data source. Each row in the flexible content has an `acf_fc_layout` property that tells you which layout type it is.

**Important:** You must use conditional [`#if` statements](_conditional-logic_basic-conditions.md) inside the loop to check the `acf_fc_layout` property and define different HTML for each layout type. This is how Etch determines which content to render for each section.

Suppose you have an ACF flexible content field called "page\_sections" with three layout types:
```
  {#loop this.acf.page_sections as section}        {#if section.acf_fc_layout == 'hero_banner'}
# {section.title}

{section.subtitle}

                          {section.cta_text}                                        {/if}        {#if section.acf_fc_layout == 'text_block'}

## {section.heading}

{section.content}

                  {/if}        {#if section.acf_fc_layout == 'image_gallery'}

## {section.gallery_title}

            {#loop section.images as image}

                ![{image.alt}]({image.sizes.medium})                          {/loop}                            {/if}      {/loop}
```

#### _integrations_custom-fields_gallery-fields.md

> Source: https://docs.etchwp.com/integrations/custom-fields/gallery-fields
> Scraped: 10.03.2026 08:20:44

Gallery fields allow you to store and display multiple images in your templates. These can be used for image galleries, sliders, carousels, and other multi-image components.

## General Usage[​](_integrations_custom-fields_gallery-fields.md#general-usage)

In Etch, gallery fields can be accessed using loops to iterate through each image in the gallery.
```
  {#loop this.field_source.gallery_field as image}

      !      {/loop}
```
## Plugin-Specific Usage[​](_integrations_custom-fields_gallery-fields.md#plugin-specific-usage)

### Advanced Custom Fields (ACF)[​](_integrations_custom-fields_gallery-fields.md#advanced-custom-fields-acf)

ACF gallery fields return an array of image objects with a rich set of properties. Each image in the gallery contains comprehensive metadata that you can use in your templates.
```
  {#loop this.acf.gallery_field as image}

      ![{image.alt}]({image.url})      {/loop}

  {#loop this.acf.gallery_field as image}

                  src="{image.url}"           alt="{image.alt}"          width="{image.width}"          height="{image.height}"        />        {#if image.caption}

{image.caption}

        {/if}            {/loop}
```
### Meta Box[​](_integrations_custom-fields_gallery-fields.md#meta-box)

Meta Box gallery fields (Image Advanced or other image fields with cloneable option checked) return an array of image objects with a rich set of properties. Each image in the gallery contains comprehensive metadata that you can use in your templates.
```
  {#loop this.metabox.gallery_field as image}

      ![{image.alt}]({image.url})      {/loop}

  {#loop this.metabox.gallery_field as image}

                  src="{image.url}"           alt="{image.alt}"          width="{image.width}"          height="{image.height}"        />        {#if image.caption}

{image.caption}

        {/if}            {/loop}
```
### Jet Engine[​](_integrations_custom-fields_gallery-fields.md#jet-engine)

Jet Engine gallery fields return an array of image objects with a rich set of properties. Each image in the gallery contains comprehensive metadata that you can use in your templates.
```
  {#loop this.jetengine.gallery_field as image}

      ![{image.alt}]({image.url})      {/loop}

  {#loop this.jetengine.gallery_field as image}

                  src="{image.url}"           alt="{image.alt}"          width="{image.width}"          height="{image.height}"        />        {#if image.caption}

{image.caption}

        {/if}            {/loop}
```
### Gallery Field Data Structure[​](_integrations_custom-fields_gallery-fields.md#gallery-field-data-structure)

Each image in an gallery field is an object with a range of properties that you can access in your templates. The exact properties available depend on the image and the configuration of your ACF field.

*   **Basic properties**: `url`, `alt`, `title`, `caption`, `description`
*   **Dimensions**: `width`, `height`
*   **Metadata**: `date`, `modified`, `filesize`
*   **Responsive images**: A `sizes` object containing URLs and dimensions for various WordPress image sizes (thumbnail, medium, large, etc.)

This rich data structure allows you to create sophisticated gallery displays with proper accessibility, responsive images, and detailed metadata.

tip

You can use `{this}` or the loop manager to view the JSON output of all the fields you have available to access in your gallery loop.

## Advanced Usage[​](_integrations_custom-fields_gallery-fields.md#advanced-usage)

*   **Responsive Images**: Leverage the `sizes` object to serve appropriately sized images for different screen sizes
*   **Performance**:
    *   Use the smallest appropriate image size from the `sizes` object for thumbnails
    *   Add `loading="lazy"` to images that appear below the fold
    *   Include `width` and `height` attributes to prevent layout shifts
*   **Fallbacks**: Use conditional logic to handle missing data: `{#if image.caption}{image.caption}{#else}No caption available{/if}`
*   **Metadata**:
    *   Store the image ID with `data-id="{image.ID}"` for JavaScript interactions
    *   Access file metadata like `mime_type` or `filesize` for filtering or display purposes
    *   You can get a specific image from a gallery field without need to run a loop using the modifier `.at(0)`: `{this.acf.gallery_name.at(0).url}`
*   **Integration**: Combine with JavaScript libraries for features like lightboxes, masonry layouts, or carousels for enhanced gallery experiences

#### _integrations_custom-fields_image-fields.md

> Source: https://docs.etchwp.com/integrations/custom-fields/image-fields
> Scraped: 10.03.2026 08:20:44

Image fields allow you to store and display images in your templates. These can be used for featured images, galleries, logos, and other visual elements.

## General Usage[​](_integrations_custom-fields_image-fields.md#general-usage)

In Etch, image fields can be accessed using the appropriate syntax based on the custom fields plugin you're using.
```
!
```
## Plugin-Specific Usage[​](_integrations_custom-fields_image-fields.md#plugin-specific-usage)

### Advanced Custom Fields (ACF)[​](_integrations_custom-fields_image-fields.md#advanced-custom-fields-acf)

ACF image fields return an object with various properties. The most common way to use them is:
```
      ![{this.acf.image_field.alt}]({this.acf.image_field.url})

      src="{this.acf.image_field.url}"     alt="{this.acf.image_field.alt}"    width="{this.acf.image_field.width}"    height="{this.acf.image_field.height}"  />

{this.acf.image_field.caption}
```
#### ACF Image Field Data Structure[​](_integrations_custom-fields_image-fields.md#acf-image-field-data-structure)

Each image field in ACF returns a comprehensive object with many properties.

tip

You can use `{this}` or the loop manager to view the same JSON output we show below to view all the fields you have available to access in your template.

Here's an example of what the data structure looks like for an image field.
```
"acf": {  "my_image_field": {    "id": 123,    "url": "https://example.com/wp-content/uploads/2025/08/image.jpg",    "alt": "Image alt text",    "title": "Image title",    "caption": "Image caption",    "description": "Image description",    "filename": "image.jpg",    "sizes": {      "thumbnail": {        "url": "https://example.com/wp-content/uploads/2025/08/image-150x150.jpg",        "width": 150,        "height": 150      },      "medium": {        "url": "https://example.com/wp-content/uploads/2025/08/image-300x200.jpg",        "width": 300,        "height": 200      },      "large": {        "url": "https://example.com/wp-content/uploads/2025/08/image-1024x683.jpg",        "width": 1024,        "height": 683      },      "full": {        "url": "https://example.com/wp-content/uploads/2025/08/image.jpg",        "width": 1600,        "height": 1067      }    },    "srcset": "https://example.com/wp-content/uploads/2025/08/image-300x200.jpg 300w, https://example.com/wp-content/uploads/2025/08/image-1024x683.jpg 1024w, https://example.com/wp-content/uploads/2025/08/image.jpg 1600w",    "width": 1600,    "height": 1067,    "filesize": 256000,    "mime_type": "image/jpeg"  }}
```
### Meta Box[​](_integrations_custom-fields_image-fields.md#meta-box)

Meta Box image fields return an object with various properties. The most common way to use them is:
```
      ![{this.metabox.image_field.alt}]({this.metabox.image_field.url})

      src="{this.metabox.image_field.url}"     alt="{this.metabox.image_field.alt}"    width="{this.metabox.image_field.width}"    height="{this.metabox.image_field.height}"  />

{this.metabox.image_field.caption}
```
#### Meta Box Image Field Data Structure[​](_integrations_custom-fields_image-fields.md#meta-box-image-field-data-structure)

Each image field in Meta Box returns a comprehensive object with many properties.

tip

You can use `{this}` or the loop manager to view the same JSON output we show below to view all the fields you have available to access in your template.

Here's an example of what the data structure looks like for an image field.
```
"metabox": {  "my_image_field": {    "id": 123,    "url": "https://example.com/wp-content/uploads/2025/08/image.jpg",    "alt": "Image alt text",    "title": "Image title",    "caption": "Image caption",    "description": "Image description",    "filename": "image.jpg",    "sizes": {      "thumbnail": {        "url": "https://example.com/wp-content/uploads/2025/08/image-150x150.jpg",        "width": 150,        "height": 150      },      "medium": {        "url": "https://example.com/wp-content/uploads/2025/08/image-300x200.jpg",        "width": 300,        "height": 200      },      "large": {        "url": "https://example.com/wp-content/uploads/2025/08/image-1024x683.jpg",        "width": 1024,        "height": 683      },      "full": {        "url": "https://example.com/wp-content/uploads/2025/08/image.jpg",        "width": 1600,        "height": 1067      }    },    "srcset": "https://example.com/wp-content/uploads/2025/08/image-300x200.jpg 300w, https://example.com/wp-content/uploads/2025/08/image-1024x683.jpg 1024w, https://example.com/wp-content/uploads/2025/08/image.jpg 1600w",    "width": 1600,    "height": 1067,    "filesize": 256000,    "mime_type": "image/jpeg"  }}
```
### Jet Engine[​](_integrations_custom-fields_image-fields.md#jet-engine)

Jet Engine image fields return an object with various properties. The most common way to use them is:
```
      ![{this.jetengine.image_field.alt}]({this.jetengine.image_field.url})

      src="{this.jetengine.image_field.url}"     alt="{this.jetengine.image_field.alt}"    width="{this.jetengine.image_field.width}"    height="{this.jetengine.image_field.height}"  />

{this.jetengine.image_field.caption}
```
#### Jet Engine Image Field Data Structure[​](_integrations_custom-fields_image-fields.md#jet-engine-image-field-data-structure)

Each image field in Jet Engine returns a comprehensive object with many properties.

tip

You can use `{this}` or the loop manager to view the same JSON output we show below to view all the fields you have available to access in your template.

Here's an example of what the data structure looks like for an image field.
```
"jetengine": {  "my_image_field": {    "id": 123,    "url": "https://example.com/wp-content/uploads/2025/08/image.jpg",    "alt": "Image alt text",    "title": "Image title",    "caption": "Image caption",    "description": "Image description",    "filename": "image.jpg",    "sizes": {      "thumbnail": {        "url": "https://example.com/wp-content/uploads/2025/08/image-150x150.jpg",        "width": 150,        "height": 150      },      "medium": {        "url": "https://example.com/wp-content/uploads/2025/08/image-300x200.jpg",        "width": 300,        "height": 200      },      "large": {        "url": "https://example.com/wp-content/uploads/2025/08/image-1024x683.jpg",        "width": 1024,        "height": 683      },      "full": {        "url": "https://example.com/wp-content/uploads/2025/08/image.jpg",        "width": 1600,        "height": 1067      }    },    "srcset": "https://example.com/wp-content/uploads/2025/08/image-300x200.jpg 300w, https://example.com/wp-content/uploads/2025/08/image-1024x683.jpg 1024w, https://example.com/wp-content/uploads/2025/08/image.jpg 1600w",    "width": 1600,    "height": 1067,    "filesize": 256000,    "mime_type": "image/jpeg"  }}
```
## Tips[​](_integrations_custom-fields_image-fields.md#tips)

*   Always include alt text for accessibility
*   You can use conditional logic to provide fallback images: `{#if this.acf.custom_logo}{this.acf.custom_logo.url}{#else}{this.site.logo}{/if}`
*   For background images in CSS, use inline styles: ``

#### _integrations_custom-fields_options-pages.md

> Source: https://docs.etchwp.com/integrations/custom-fields/options-pages
> Scraped: 10.03.2026 08:20:43

Options pages let you manage global site settings (e.g., business phone, address, social links) and reference them anywhere in Etch. Etch exposes these as dynamic data via the global `options` key.

## General Usage[​](_integrations_custom-fields_options-pages.md#general-usage)

Use the `options` key with the provider namespace that owns your options page fields.
```
{options.acf.field_name}{options.metabox.option_page_name.field_name}{options.jetengine.option_page_name.field_name}
```
Works globally (templates, pages, loops, headers/footers, etc.). No post context is required.

## Quick Reference[​](_integrations_custom-fields_options-pages.md#quick-reference)

| Integration | Namespace | Syntax example |
| --- | --- | --- |
| ACF | `acf` | `{options.acf.field_name}` |
| Meta Box | `metabox` | `{options.metabox.option_page_slug.field_name}` |
| JetEngine | `jetengine` | `{options.jetengine.option_page_slug.field_name}` |

## Common Examples[​](_integrations_custom-fields_options-pages.md#common-examples)

These examples are provider-agnostic. Replace `provider` with the integration namespace (e.g., `acf`, `metabox`, `jetengine`).

**Note:** Meta Box and JetEngine require an option page slug in the path (e.g., `options.metabox.my_options.field_name`).

### Basic Fields[​](_integrations_custom-fields_options-pages.md#basic-fields)
```
[{options.provider.business_email}](mailto:{options.provider.business_email})[Facebook](_%7Boptions.provider.facebook_url%7D.md)
```
### Group Fields[​](_integrations_custom-fields_options-pages.md#group-fields)
```
  {options.provider.address.street}

{options.provider.address.city}, {options.provider.address.state} {options.provider.address.zip}
```
### Image Fields[​](_integrations_custom-fields_options-pages.md#image-fields)
```
![{options.provider.logo.alt}]({options.provider.logo.url})
```
### Repeater Fields[​](_integrations_custom-fields_options-pages.md#repeater-fields)
```
  {#loop options.provider.hours as hour}

      {hour.day}      {hour.open}–{hour.close}      {/loop}
```
## Troubleshooting[​](_integrations_custom-fields_options-pages.md#troubleshooting)

If `{options._._}` outputs nothing:

*   Confirm the field exists on an Options Page (not a post).
*   Verify the field name/key matches exactly.
*   Check that the field has a saved value.
*   Ensure an Options Page exists in your chosen provider and fields are assigned to it.
*   For Meta Box and JetEngine, ensure you included the correct option page slug in the path (e.g., `options.metabox.my_options.field_name`).
*   Access patterns mirror post-level custom fields. The only difference is the top-level `options` scope.
*   For arrays and complex structures, use standard loops and dot notation.

#### _integrations_custom-fields_relationship-fields.md

> Source: https://docs.etchwp.com/integrations/custom-fields/relationship-fields
> Scraped: 10.03.2026 08:20:43

Relationship fields allow you to create connections between posts, pages, or custom post types. This is perfect for displaying related content, featured posts, or creating curated lists of content.

## General Usage[​](_integrations_custom-fields_relationship-fields.md#general-usage)

In Etch, relationship fields can be accessed using the loop syntax. Each custom fields plugin will have its own namespace and data structure, but the general approach of looping through related content remains consistent.
```
{#loop this.field_source.relationship_field_name as item}    {/loop}
```
The exact field path and available properties will depend on your specific plugin. You can use Etch's loop manager to explore the available data structure for your particular setup.

## Plugin-Specific Usage[​](_integrations_custom-fields_relationship-fields.md#plugin-specific-usage)

### Advanced Custom Fields (ACF)[​](_integrations_custom-fields_relationship-fields.md#advanced-custom-fields-acf)

ACF Relationship fields allow you to create connections between posts, pages, or custom post types. This is perfect for displaying related content, featured posts, or creating curated lists of content. Etch makes it easy to loop through relationship field data and display the connected posts.

Under the hood, ACF stores relationship data as custom fields in the WordPress database. Unlike some other plugins that use dedicated relationship tables, ACF uses the standard WordPress meta tables, storing either post IDs or post objects as serialized data. This approach means ACF relationship fields function more like custom fields that reference other content.

#### How ACF Relationship Loops Work[​](_integrations_custom-fields_relationship-fields.md#how-acf-relationship-loops-work)

ACF relationship loops use the `this.acf.your_relationship_field` syntax as the data source. The relationship field returns an array of post objects that you can loop through to display the connected content.

**Important:** Make sure your ACF relationship field is set to return "Post Object" rather than "Post ID" in the field settings. If you select "Post Object", you'll get basic post data like this:
```
"author_books": [  {    "id": 38,    "title": "Pride and Prejudice",     "permalink": { "relative": "/book/pride-and-prejudice/" },    "featuredImage": "...",    // ... other post data  }]
```
If you select "Post ID", you'll only get the IDs:
```
"author_books": [38]
```
The basic structure is:
```
{#loop this.acf.relationship_field_name as post}  {/loop}
```
Suppose you have two custom post types: "Author" and "Book", with an ACF relationship field called "author\_books" on the Author post type that connects to Book posts. Here's how you'd display a list of authors with their books:
```
            ## Authors & Their Books

            {#loop authors as author}

### {author.title}

{author.excerpt}

                        {#loop author.acf.author_books as book}

                                                                    {book.title}                                                                                    {/loop}                                                {/loop}
```
**What's happening here:**

1.  The outer loop targets a WP Query called "authors" that gets Author posts (set up in the loop manager)
2.  Each author is aliased as `author` for easy reference
3.  The inner loop targets `author.acf.author_books` (the relationship field on the Author post)
4.  Each connected book is aliased as `book` and we can access basic post data like `title`, `permalink`, `excerpt` (these keys can be seen in the JSON output in the loop manager)
5.  The author card displays both author info and their related books

### Meta Box (MB Relationships)[​](_integrations_custom-fields_relationship-fields.md#meta-box-mb-relationships)

Meta Box relationships are stored in a separate relationships table (rather than post meta). Because of that, you can’t pull relationship data directly off of `this` the same way you would with ACF.

Instead, you query for related posts by using Meta Box’s relationship query arguments, and then loop the query results.

It’s recommended to set up `mbFrom` and `mbTo` as reusable utility loops in Etch’s loop manager so you can use the same relationship queries consistently throughout your project.

#### Querying relationships (from)[​](_integrations_custom-fields_relationship-fields.md#querying-relationships-from)

When you want to fetch posts related _from_ the current post (i.e. where the current post is the “from” side of the relationship), your query args should include a `relationship` array with `from`.

Utility loop: `mbFrom`
```
$query_args = [  'post_type' => $related_cpt,  'posts_per_page' => 10,  'post_status' => 'publish',  'relationship' => [    'id' => $rel_field,    'from' => $from_id  ]];
```
Etch loop example:
```
{#loop mbFrom($related_cpt: 'my_cpt', $rel_field: 'relationship_field', $from_id: this.id) as related}  {/loop}
```
#### Querying relationships (to)[​](_integrations_custom-fields_relationship-fields.md#querying-relationships-to)

When you want to fetch posts related _to_ the current post (i.e. a reverse/backwards query where the current post is on the “to” side of the relationship), use `to`.

Utility loop: `mbTo`
```
$query_args = [  'post_type' => $related_cpt,  'posts_per_page' => 10,  'post_status' => 'publish',  'relationship' => [    'id' => $rel_field,    'to' => $to_id  ]];
```
Etch loop example:
```
{#loop mbTo($related_cpt: 'my_cpt', $rel_field: 'relationship_field', $to_id: this.id) as related}  {/loop}
```
#### Using MB relationships inside a loop (nested loops)[​](_integrations_custom-fields_relationship-fields.md#using-mb-relationships-inside-a-loop-nested-loops)

If you’re not on a singular template (for example: you’re looping over a list of posts), you’ll typically need to nest your relationship loop so it uses the _current loop item’s_ ID, not `this.id`.
```
{#loop posts as post}

### {post.title}

  {#loop mbFrom($related_cpt: 'my_cpt', $rel_field: 'relationship_field', $from_id: post.id) as related}      {/loop}{/loop}
```
For more details on Meta Box’s relationship query arguments, see: [https://docs.metabox.io/extensions/mb-relationships/#posts](https://docs.metabox.io/extensions/mb-relationships/#posts)

## Tips[​](_integrations_custom-fields_relationship-fields.md#tips)

*   Always loop the container element that should be repeated for each related post. In the example above, we loop the `<li>` author card for each author, then loop the `<li>` for each book within that author's book list.
*   To see what data you have access to in your relationship field, check the loop manager in Etch's interface. Alternatively, you can temporarily output `{this}` in your template to see all available data (though it will be unformatted).
*   If you need more detailed meta data from the related posts than what's available in the relationship field, you'll need to set up a nested query on that post ID. This allows you to access custom fields and other detailed information from the related posts.

#### _integrations_custom-fields_repeater-fields.md

> Source: https://docs.etchwp.com/integrations/custom-fields/repeater-fields
> Scraped: 10.03.2026 08:20:44

Repeater fields allow you to create flexible, repeating content structures in your templates. They're perfect for creating dynamic sections like team members, testimonials, FAQs, and more.

info

Note: Etch will also have its own native repeater field type in the future, providing better integration since you won't need to leave Etch to create repeater fields. Currently, setting up ACF, Meta Box or Jet Engine repeaters requires leaving Etch to configure them in WordPress admin - what we call a "magic area."

## General Usage[​](_integrations_custom-fields_repeater-fields.md#general-usage)

In Etch, repeater fields can be accessed using the loop syntax with the appropriate namespace based on the custom fields plugin you're using.
```
{#loop this.field_source.repeater_field_name as item}    {/loop}
```
## Plugin-Specific Usage[​](_integrations_custom-fields_repeater-fields.md#plugin-specific-usage)

### Advanced Custom Fields (ACF)[​](_integrations_custom-fields_repeater-fields.md#advanced-custom-fields-acf)

ACF repeater fields are a powerful way to create flexible, repeating content structures in WordPress. Like looping through any other data in Etch, it's incredibly easy to loop through ACF repeaters and display their data dynamically.
```
{#loop this.acf.repeater_field_name as item}

      {item.sub_field_name}      {item.sub_field_name2}  {/loop}
```
#### How ACF Repeater Loops Work[​](_integrations_custom-fields_repeater-fields.md#how-acf-repeater-loops-work)

ACF repeater loops in Etch use the `this.acf.repeater_field_name` syntax as the data source. This allows you to access repeater field data from the current post or page context and loop through each repeater row.

#### Example: FAQ Section[​](_integrations_custom-fields_repeater-fields.md#example-faq-section)

Suppose you have an ACF repeater field called FAQ (`faq`) with two sub-fields:

*   Question (`question`) - Text field
*   Answer - (`answer`) - Textarea field

Here's how you'd loop through and display the FAQ items:
```
  {#loop this.acf.faq as faq}

### {faq.question}

{faq.answer}

      {/loop}
```
tip

Always loop the container element that should be repeated, not its parent or children. In the example above, we loop the `<li>` element because that's what we want repeated for each FAQ item - not the parent `<ul>` container _or_ `h3` question _or_ `div` answer.

**What's happening here:**

1.  The loop targets `this.acf.faq` (your ACF repeater field)
2.  Each row is aliased as `faq` for easy reference
3.  Sub-fields are accessed using `{faq.question}` and `{faq.answer}`
4.  The `<li>` element is what gets repeated for each FAQ item

### Meta Box[​](_integrations_custom-fields_repeater-fields.md#meta-box)

Meta Box repeater fields (any field with cloneable option checked) are a powerful way to create flexible, repeating content structures in WordPress. Like looping through any other data in Etch, it's incredibly easy to loop through Meta Box repeaters and display their data dynamically.
```
{#loop this.metabox.repeater_field_name as item}

      {item.sub_field_name}      {item.sub_field_name2}  {/loop}
```
#### How Meta Box Repeater Loops Work[​](_integrations_custom-fields_repeater-fields.md#how-meta-box-repeater-loops-work)

Meta Box repeater loops in Etch use the `this.metabox.repeater_field_name` syntax as the data source. This allows you to access repeater field data from the current post or page context and loop through each repeater row.

#### Example: FAQ Section[​](_integrations_custom-fields_repeater-fields.md#example-faq-section-1)

Suppose you have an Meta Box repeater field called FAQ (`faq`) with two sub-fields:

*   Question (`question`) - Text field
*   Answer - (`answer`) - Textarea field

Here's how you'd loop through and display the FAQ items:
```
  {#loop this.metabox.faq as faq}

### {faq.question}

{faq.answer}

      {/loop}
```
tip

Always loop the container element that should be repeated, not its parent or children. In the example above, we loop the `<li>` element because that's what we want repeated for each FAQ item - not the parent `<ul>` container _or_ `h3` question _or_ `div` answer.

**What's happening here:**

1.  The loop targets `this.metabox.faq` (your Meta Box repeater field)
2.  Each row is aliased as `faq` for easy reference
3.  Sub-fields are accessed using `{faq.question}` and `{faq.answer}`
4.  The `<li>` element is what gets repeated for each FAQ item

### Jet Engine[​](_integrations_custom-fields_repeater-fields.md#jet-engine)

Jet Engine repeater fields are a powerful way to create flexible, repeating content structures in WordPress. Like looping through any other data in Etch, it's incredibly easy to loop through Jet Engine repeaters and display their data dynamically.
```
{#loop this.jetengine.repeater_field_name as item}

      {item.sub_field_name}      {item.sub_field_name2}  {/loop}
```
#### How Jet Engine Repeater Loops Work[​](_integrations_custom-fields_repeater-fields.md#how-jet-engine-repeater-loops-work)

Jet Engine repeater loops in Etch use the `this.jetengine.repeater_field_name` syntax as the data source. This allows you to access repeater field data from the current post or page context and loop through each repeater row.

#### Example: FAQ Section[​](_integrations_custom-fields_repeater-fields.md#example-faq-section-2)

Suppose you have an Jet Engine repeater field called FAQ (`faq`) with two sub-fields:

*   Question (`question`) - Text field
*   Answer - (`answer`) - Textarea field

Here's how you'd loop through and display the FAQ items:
```
  {#loop this.jetengine.faq as faq}

### {faq.question}

{faq.answer}

      {/loop}
```
tip

Always loop the container element that should be repeated, not its parent or children. In the example above, we loop the `<li>` element because that's what we want repeated for each FAQ item - not the parent `<ul>` container _or_ `h3` question _or_ `div` answer.

**What's happening here:**

1.  The loop targets `this.jetengine.faq` (your Jet Engine repeater field)
2.  Each row is aliased as `faq` for easy reference
3.  Sub-fields are accessed using `{faq.question}` and `{faq.answer}`
4.  The `<li>` element is what gets repeated for each FAQ item

## Tips[​](_integrations_custom-fields_repeater-fields.md#tips)

*   You can nest repeaters within repeaters for complex data structures
*   Use conditional logic within repeater loops to show/hide elements based on field values
*   Combine repeaters with other dynamic data for powerful templating capabilities

#### _integrations_custom-fields_text-fields.md

> Source: https://docs.etchwp.com/integrations/custom-fields/text-fields
> Scraped: 10.03.2026 08:20:44

Text fields are the most common type of custom fields, allowing you to store and display various types of text data in your templates.

info

For information about Etch native fields and WordPress meta fields, see the [Dynamic Data Keys](_dynamic-data_dynamic-data-keys.md) documentation.

## General Usage[​](_integrations_custom-fields_text-fields.md#general-usage)

In Etch, third party text fields can be accessed using the appropriate syntax based on the custom fields plugin you're using.
```
{this.field_source.field_name}
```
## Plugin-Specific Usage[​](_integrations_custom-fields_text-fields.md#plugin-specific-usage)

### Advanced Custom Fields (ACF)[​](_integrations_custom-fields_text-fields.md#advanced-custom-fields-acf)

ACF text fields can be accessed using the `acf` namespace:
```
{this.acf.field_name}
```
### Meta Box[​](_integrations_custom-fields_text-fields.md#meta-box)

Meta Box text fields can be accessed using the `metabox` namespace:
```
{this.metabox.field_name}
```
### Jet Engine[​](_integrations_custom-fields_text-fields.md#jet-engine)

Jet Engine text fields can be accessed using the `jetengine` namespace:
```
{this.jetengine.field_name}
```
## Examples[​](_integrations_custom-fields_text-fields.md#examples)

### Simple Text Field[​](_integrations_custom-fields_text-fields.md#simple-text-field)
```
## {this.acf.headline}

{this.acf.subheading}
```
### Text Area Field[​](_integrations_custom-fields_text-fields.md#text-area-field)
```
  {this.acf.description}
```
### WYSIWYG Field[​](_integrations_custom-fields_text-fields.md#wysiwyg-field)
```
  {this.acf.content}
```
## Tips[​](_integrations_custom-fields_text-fields.md#tips)

*   Text fields can be used in conditional statements: `{#if this.acf.headline}{this.acf.headline}{#else}Default Headline{/if}`
*   For fields that might contain HTML (like WYSIWYG fields), Etch will render that HTML.

#### _integrations_hooks.md

> Source: https://docs.etchwp.com/integrations/hooks
> Scraped: 10.03.2026 08:20:39

Etch provides a set of hooks that allow you to extend and customize the system’s behavior as needed.

## Actions[​](_integrations_hooks.md#actions)

### Action: `etch/canvas/enqueue_assets`[​](_integrations_hooks.md#action-etchcanvasenqueue_assets)

Triggered during the canvas loading process, this hook allows you to enqueue additional styles and scripts. Use it to register any assets (`wp_enqueue_style`, `wp_enqueue_script`) that should be loaded inside the canvas.
```
add_action('etch/canvas/enqueue_assets', function() {    wp_enqueue_style('custom-css', 'https://localhost/style.css');    wp_enqueue_script('custom-js', 'https://localhost/script.js');});
```
## Filters[​](_integrations_hooks.md#filters)

### Filter: `etch/dynamic_data/post`[​](_integrations_hooks.md#filter-etchdynamic_datapost)

Extended the key `{this.CUSTOM}` adding custom dynamic data. [Read more](_dynamic-data_dynamic-data-integration_post-dynamic-data-integration.md).
```
add_filter('etch/dynamic_data/post', function( $data, $post_id ) {    $data['my_custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```
### Filter: `etch/dynamic_data/user`[​](_integrations_hooks.md#filter-etchdynamic_datauser)

Extended the key `{user.CUSTOM}` adding custom dynamic data. [Read more](_dynamic-data_dynamic-data-integration_user-dynamic-data-integration.md).
```
add_filter('etch/dynamic_data/user', function( $data, $user_id ) {    $data['my_custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```
### Filter: `etch/dynamic_data/term`[​](_integrations_hooks.md#filter-etchdynamic_dataterm)

Extended the key `{term.CUSTOM}` adding custom dynamic data. [Read more](_dynamic-data_dynamic-data-integration_term-dynamic-data-integration.md).
```
add_filter('etch/dynamic_data/term', function( $data, $term_id, $taxonomy ) {    $data['my_custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```
### Filter: `etch/dynamic_data/option`[​](_integrations_hooks.md#filter-etchdynamic_dataoption)

Extended the key `{options.CUSTOM}` adding custom dynamic data. [Read more](_dynamic-data_dynamic-data-integration_option-dynamic-data-integration.md).
```
add_filter('etch/dynamic_data/option', function( $data ) {    $data['my_custom_data'] = array(        'field_name_1' => "Field 1 value",        'field_name_2' => array(            "sub_field_name_1" => "Sub Field 1 value"        )    );    return $data;});
```

#### _interface_attributes-bar.md

> Source: https://docs.etchwp.com/interface/attributes-bar
> Scraped: 10.03.2026 08:20:43

Etch's **Attributes Bar** is fastest and easiest way to add attributes to an element.

An attribute is a key-value pair added to an HTML element that controls its behavior, appearance, or provides additional information. Common attributes are things like: IDs, classes, ARIA labels, and data attributes.

Unlike traditional builders, Etch has a full attribute and selector system, not just a `class` system. Not only can you add any attributes to elements using the Attributes Bar, you can add selectors for them as well.

## Accessing the Attributes Bar[​](_interface_attributes-bar.md#accessing-the-attributes-bar)

![Screenshot of the Attributes Bar in Etch](https://docs.etchwp.com/assets/images/attributes-bar-d536c95834147895d8ea354c21ffecc0.avif)

You can access the Attributes Bar by selecting any element and pressing Cmd + Return on Mac, or Ctrl + Return on Windows/Linux.

You can also click the "+" icon in the header of the HTML or CSS panels.

![Screenshot of the Attributes Bar in Etch](https://docs.etchwp.com/assets/images/trigger-attribute-bar-cf6465cabc7b5ea492ff693ff53ec35b.avif)

## Adding Attributes[​](_interface_attributes-bar.md#adding-attributes)

The Attribute Bar accepts one or multiple attributes and selectors and you're free to mix and match attributes and selectors.

### Basic Selectors[​](_interface_attributes-bar.md#basic-selectors)

The most common and basic example of adding a selector is adding a class or ID.

You add a class by writing the class name just like you'd write it in a CSS stylesheet. This will add the class to the `class` attribute on the element and create a selector for it that can be styled.
```
.my-class
```
IDs work the same way:
```
#my-id
```
You can add both at the same time:
```
.my-class #my-id
```
### Random Selectors[​](_interface_attributes-bar.md#random-selectors)

If you need a one-off `class` or `ID`, Etch can auto-generate a unique one with `rand`.
```
.rand
```
This works for both classes `.rand` and IDs `#rand`.

### Pseudo Classes[​](_interface_attributes-bar.md#pseudo-classes)

You can easily add pseudo classes and pseudo elements as selectors:
```
.my-class:hover .my-class::before .my-class::after
```
info

In some cases it's very convenient to create selectors like this, but in other cases it may be better to use CSS Nesting on your parent selector to manage the styles for these things as nesting will result in consolidated CSS that can be managed in one place. Up to you!

### Other Attributes[​](_interface_attributes-bar.md#other-attributes)

If you want to add a `data` attribute, `aria-label`, etc. to an element:
```
data-attribute="my-data" aria-label="This is accessible"
```
This will add the attributes to the HTML, but will not generate selectors. If you want to generate a selector for these items, put them in brackets (just like CSS):
```
[data-attribute="my-data"]
```
### Complex and Compound Selectors[​](_interface_attributes-bar.md#complex-and-compound-selectors)

The Attribute Bar accepts complex and compound selectors, but these need to be put in braces:
```
{.hero h1}
```
Any valid CSS selector, regardless of complexity, is supported.

info

In some cases it's very convenient to create selectors like this, but in other cases it may be better to use CSS Nesting on your parent selector to manage the styles for these things as nesting will result in consolidated CSS that can be managed in one place. Up to you!

## Styling Selectors[​](_interface_attributes-bar.md#styling-selectors)

Styling in Etch is based on the [Selector Pill](_interface_selector-pills.md) that's currently selected. You can style them with the CSS editor.

#### _interface_canvas-color-scheme.md

> Source: https://docs.etchwp.com/interface/canvas-color-scheme
> Scraped: 10.03.2026 08:20:43

Etch allows you to toggle between light and dark color schemes on the builder canvas. This is useful for previewing how your design looks in different color modes without leaving the editor.

## Toggling the Color Scheme[​](_interface_canvas-color-scheme.md#toggling-the-color-scheme)

The color scheme toggle is located in the Settings Bar on the left side of the interface. Look for the sun or moon icon:

*   **Sun icon**: Currently in light mode
*   **Moon icon**: Currently in dark mode

Click the icon to switch between light and dark modes.

![Canvas Color Scheme Toggle](https://docs.etchwp.com/assets/images/canvas-color-scheme-2cc2e634ab5ce3085b19f85673ed837c.png)

## How It Works[​](_interface_canvas-color-scheme.md#how-it-works)

When you toggle the color scheme, Etch sets the `color-scheme` CSS property on the canvas iframe's `:root` element. This affects:

*   Browser default styles (scrollbars, form controls, etc.)
*   Any CSS that uses `light-dark()` color function
*   Elements that respect the `color-scheme` property

## Per-Page Setting[​](_interface_canvas-color-scheme.md#per-page-setting)

The color scheme preference is saved per page/post. This means you can have different color scheme settings for different pages in your project, and Etch will remember your preference for each one.

## Use Cases[​](_interface_canvas-color-scheme.md#use-cases)

*   **Dark mode preview**: Quickly check how your design looks in dark mode
*   **Testing `light-dark()` colors**: Verify that your `light-dark()` CSS function values work correctly
*   **Form control styling**: See how browser-default form controls appear in each mode
*   **Scrollbar appearance**: Preview how scrollbars render in light vs dark mode

#### _interface_command-bar.md

> Source: https://docs.etchwp.com/interface/command-bar
> Scraped: 10.03.2026 08:20:44

Etch's **Command Bar** is present throughout the app and gives you a convenient way to move around the different contexts of the app (Builder/Content Hub/Styles Manager/etc.) and have access to all actions right at your fingertips.

It includes different modes and actions relevant to those modes and the current context.

## Accessing the Command Bar and its modes[​](_interface_command-bar.md#accessing-the-command-bar-and-its-modes)

![Screenshot of the Command Bar in Etch, open in its default "Action" mode](https://docs.etchwp.com/assets/images/command-bar-fc44fb9a784e3ab9b7066d4619a8ab5c.avif)

You can invoke the Command Bar by pressing Cmd + K on Mac, or Ctrl + K on Windows/Linux.

The different modes of the **Command Bar** can be accessed a few ways:

If the **Command Bar** is visible:

*   You can press ⇥ Tab to cycle through modes from left to right, or ⇧ Shift + ⇥ Tab to cycle from right to left.
*   You can jump to a specific mode by pressing its shortcut sequence (the shortcut key specific to the mode, immediately followed by ⇥ Tab).
*   You can jump to your target mode by pressing its combination shortcut (Cmd + the mode's key on Mac, or Ctrl + the mode's key on Windows/Linux).
*   Pressing the combination shortcut for a mode that is already active will close the **Command Bar**.

If the **Command Bar** is not already visible, you can invoke it directly in your target mode by pressing its combination shortcut.

| Mode | Shortcut sequence (with Command Bar visible) | Combination shortcut (regardless of state) |
| --- | --- | --- |
| `Action` | A, then ⇥ Tab | Cmd/Ctrl + K |
| `Navigate` | N, then ⇥ Tab | Cmd/Ctrl + M |
| `Insert` | I, then ⇥ Tab | Cmd/Ctrl + I |

## Understanding the modes[​](_interface_command-bar.md#understanding-the-modes)

*   **Action mode**: Action mode allows you to perform actions relevant to your current context. As such, the actions available are dependent on what you're currently doing in Etch. Within the Builder context (the main editing view of Etch), you're able to perform actions such as interacting with the selected element (if there is one), switching to a context within the app (Builder/Content Hub/Styles Manager/etc.), or managing the Interface visibility. A more granular implementation of actions will be added in future releases.
*   **Navigate mode**: Navigate mode allows you to quickly jump to different pieces of content within your project. You can search for and navigate to native Post Types (Pages and Posts) as well as other content types available on your website.
*   **Insert mode**: Insert mode allows you to quickly add elements to your page. You can search for and insert native HTML elements (like `div`, `section`, `header`, etc.), native Etch Components (when they are available in the future), as well as custom Components you've created in your project. You can also enter an Emmet abbreviation to quickly generate complex structures.

info

At the time of writing, only a subset of the Builder context actions are available. More actions and modes will be added in future releases.

#### _interface_content-manager.md

> Source: https://docs.etchwp.com/interface/content-manager
> Scraped: 10.03.2026 08:20:44

The Content Manager empowers users to edit, add, and navigate-to content across the project.

![Etch Content Manager](https://docs.etchwp.com/assets/images/etch-content-manager-2ae5b7a4037e27768b1c684f21d6f76e.webp)

Content Management in WordPress mainly consists of:

*   Post Content
*   Page Content
*   Custom Post Type Content
*   Custom Field Content
*   Media Content

Etch supports the creation and management of all these content types natively. The only caveat is that media content is managed separately in the Media manager since it's such a distinct content type with unique requirements.

## Posts & Pages[​](_interface_content-manager.md#posts--pages)

The Content Manager allows you to create, edit, delete, and navigate to any post and page in the project. More inline and bulk editing controls are coming to the Content Manager soon.

## Custom Post Types[​](_interface_content-manager.md#custom-post-types)

warning

This area of Etch is mainly for proof-of-concept and playground purposes only. It's not recommended to use this area in production due to current limitations.

The Content Manager allows you to create, edit, and delete Custom Post Types as well as navigate to any post in any type across the project. More custom post type feaures as well as inline and bulk editing controls are coming to the Content Manager soon.

## Custom Fields[​](_interface_content-manager.md#custom-fields)

warning

This area of Etch is mainly for proof-of-concept and playground purposes only. It's not recommended to use this area in production due to current limitations.

The Content Manager allows you to create, edit, and delete Custom Fields and Custom Field Groups as well as control where they're assigned. More custom field features as well as inline and bulk editing controls are coming to the Content Manager soon.

#### _interface_css-panel.md

> Source: https://docs.etchwp.com/interface/css-panel
> Scraped: 10.03.2026 08:20:44

The CSS Panel provides a powerful code editor for writing and editing CSS styles directly within Etch's interface. Built on CodeMirror, it offers a professional coding experience with syntax highlighting, auto-completion, and advanced editing features.

The CSS editor is only available when the selected element has a valid CSS selector. You can add a selector via the [Attributes Bar](_interface_attributes-bar.md) (UI) or by typing a class or ID into the HTML of the element (code).

In Etch, once you've added a selector to an element, you'll see the [Selector Pill](_interface_selector-pills.md) in the CSS editor:

![CSS Editor](https://docs.etchwp.com/assets/images/css-editor-97cadaf97721717e04079f6535b26f18.avif)

## Attached CSS[​](_interface_css-panel.md#attached-css)

Etch doesn't rely on traditional stylesheets because traditional stylesheets suck.

Instead, styles assigned to a selector are "attached" to the element they belong to. This has the following advantages:

*   **Elements are portable without losing styling**: When you move, copy, import, or export an element or pattern or component, its styles move with it automatically. There's no need to hunt through global stylesheets or worry about breaking your design.
*   **CSS only loads when the element is present**: Styles are attached to the elements they belong to and Etch checks to see if the element even exists, so unused CSS never bloats your site. This keeps your pages fast and your CSS lean.
*   **You always know where your styles are**: All styles for an element are attached directly to it, making it easy to find, edit, and manage your CSS without searching through multiple files.

Since this is how we roll, when you a select an element and choose a selector to style, you'll see that selector in the code editor:
```
.your-selector {    /* Code goes here */}
```
You can't remove this or write outside of it. That wouldn't make any sense and there's no point.

While you might think this is a limitation, it's not. You can achieve everything you want to achieve with **[CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)**.

Where traditional page builders may use a dynamic root selector like `%%root%%`, this is not CSS. And since Etch has a much more powerful CSS and selector system, these little tricks and workarounds aren't required.

## CSS Nesting[​](_interface_css-panel.md#css-nesting)

If you want to style children of the currently selected element, from the current selector, you can nest your CSS.

Here's an example:
```
.header {    display: flex;    flex-direction: row;    nav {        display: flex;    }}
```
A benefit of nesting is that all your styles are centralized on the parent element.

## SCSS-like Syntax[​](_interface_css-panel.md#scss-like-syntax)

If you're familiar with SCSS, you're familiar with "stemming" in SCSS nesting. This is particularly powerful when using BEM naming conventions.

Even though Etch isn't SCSS-powered, we've enabled SCSS-like stemming in Etch.
```
.card {    display: flex;    flex-direction: row;    &__heading {        font-size: var(--h2);    }    &__description {        font-size: var(--text-s);    }    &__link {        color: var(--neutral);    }}
```
`&__`, `&_`, `&--`, and `&-` will all parse correctly, where the ampersand represents the parent selector. This dramatically reduces the amount of typing you have to do and makes copying AI-authored CSS nesting easier, since AI tends to use SCSS nesting by default.

## Styling an element based on its parent[​](_interface_css-panel.md#styling-an-element-based-on-its-parent)

One limitation you might _think_ exists with CSS nesting is the inability to style the current selector based on a parent selector.

For example, how can you write `.hero .card {}` from within the `.card` element?

This is actually possible. You do it by reversing the order of the `&` selector.
```
.card {    .hero & {        /* styles for the card when the card is in .hero */    }}
```
There's no limitation to Etch's strategy for CSS authoring. By using vanilla CSS nesting techniques, you can achieve any type of selector combination.

## Auto Variable Wrapping / Auto-complete[​](_interface_css-panel.md#auto-variable-wrapping--auto-complete)

Variables are awesome, but typing them isn't. Nobody wants to write `var()` over and over again.

For this reason, we've added auto variable wrapping in Etch. You can trigger it by typing the variable stem. Etch will detect that you're typing a variable and then you can choose to auto-complete it by hitting tab, enter, or semi-colon.

For example: `--primary` will expand to `var(--primary)`.

You can even expand multiple vars at once:
```
.card {    padding-inline: --space-m --space-l;}
```
Will expand to:
```
.card {    padding-inline: var(--space-m) var(--space-l);}
```
Note: This also works in CSS styling inputs by hitting **Enter** to trigger the expansion.

## Auto Calc Wrapping[​](_interface_css-panel.md#auto-calc-wrapping)

Similar to auto variable wrapping, Etch also supports auto calc wrapping. You can trigger it by typing mathematical expressions without the `calc()` function, and Etch will automatically wrap them for you.

For example: `100px + 2rem` will expand to `calc(100px + 2rem)`.

**Hint:** Auto calc wrapping works with auto variable wrapping as well, so feel free to calculate variables without having to write `var()`.

## Bi-Directional Sync With Styling Inputs[​](_interface_css-panel.md#bi-directional-sync-with-styling-inputs)

Another huge advantage of Etch is the elimination of "scattered styling."

In traditional page builders, when you use a combination of CSS styling inputs and custom CSS, you end up with CSS that's scattered all over the place.

In Etch, all your CSS is synced to the selector, regardless of whether you wrote it manually or used styling inputs. This means you always have a single source of truth for all your styles.

When you use styling inputs, Etch automatically generates the corresponding CSS and places it in the CSS Panel. This ensures that:

1.  **No scattered styling**: All styles are in one place.
2.  **Easy debugging**: You can see exactly what CSS is being applied.
3.  **Consistent workflow**: Whether you use inputs or write CSS manually, everything goes through the same system.
4.  **Better performance**: We can detect exactly what needs to be loaded and only load that code.
5.  **Unprecedented portability**: You can easily import/export patterns and components without losing or breaking styling.
6.  **Unprecedented scalability**: You can easily rename selectors without losing or breaking styling.

This bi-directional sync means that changes in the CSS Panel are reflected in the styling inputs, and vice versa. You can start with styling inputs and then fine-tune in the CSS Panel, or write CSS manually and see the values populate in the styling inputs.

## Keyboard Shortcuts[​](_interface_css-panel.md#keyboard-shortcuts)

The CSS Panel includes many powerful keyboard shortcuts to speed up your workflow:

### Multi-Cursor and Selection[​](_interface_css-panel.md#multi-cursor-and-selection)

*   **Cmd+D** (Mac) / **Ctrl+D** (Windows/Linux): Select the next occurrence of the current selection
*   **Cmd+Shift+L** (Mac) / **Ctrl+Shift+L** (Windows/Linux): Select all occurrences of the current selection
*   **Alt+Click**: Add additional cursors at click positions
*   **Cmd+Alt+Up/Down** (Mac) / **Ctrl+Alt+Up/Down** (Windows/Linux): Add cursors above/below

### Search and Replace[​](_interface_css-panel.md#search-and-replace)

*   **Cmd+F** (Mac) / **Ctrl+F** (Windows/Linux): Open search dialog
*   **Cmd+H** (Mac) / **Ctrl+H** (Windows/Linux): Open search and replace dialog
*   **Cmd+G** (Mac) / **Ctrl+G** (Windows/Linux): Find next occurrence
*   **Cmd+Shift+G** (Mac) / **Ctrl+Shift+G** (Windows/Linux): Find previous occurrence

### Editing[​](_interface_css-panel.md#editing)

*   **Cmd+Z** (Mac) / **Ctrl+Z** (Windows/Linux): Undo
*   **Cmd+Shift+Z** (Mac) / **Ctrl+Shift+Z** (Windows/Linux): Redo
*   **Cmd+X/C/V** (Mac) / **Ctrl+X/C/V** (Windows/Linux): Cut/Copy/Paste
*   **Tab**: Indent selection
*   **Shift+Tab**: Unindent selection

## Advanced Features[​](_interface_css-panel.md#advanced-features)

### Auto-Completion[​](_interface_css-panel.md#auto-completion)

The CSS Panel provides intelligent auto-completion for CSS properties, values, and selectors. As you type, suggestions will appear automatically. Use **Tab** or **Enter** to accept suggestions.

### Syntax Highlighting[​](_interface_css-panel.md#syntax-highlighting)

CSS syntax is highlighted with different colors for properties, values, selectors, and comments, making it easy to read and understand your styles.

### Error Detection[​](_interface_css-panel.md#error-detection)

The editor will highlight syntax errors and provide helpful error messages to help you write valid CSS.

### Code Folding[​](_interface_css-panel.md#code-folding)

You can fold and unfold code blocks by clicking on the fold indicators in the gutter, or using **Cmd+Shift+\[** (Mac) / **Ctrl+Shift+\[** (Windows/Linux) to fold and **Cmd+Shift+\]** (Mac) / **Ctrl+Shift+\]** (Windows/Linux) to unfold.

## Tips and Tricks[​](_interface_css-panel.md#tips-and-tricks)

### Working with Multiple Selectors[​](_interface_css-panel.md#working-with-multiple-selectors)

When you need to edit multiple similar selectors, use **Cmd+D** to select each occurrence one by one, or **Cmd+Shift+L** to select all occurrences at once. This is especially useful for applying consistent styles across multiple elements.

### Search and Replace with Regular Expressions[​](_interface_css-panel.md#search-and-replace-with-regular-expressions)

In the search dialog, you can enable regular expressions for advanced find and replace operations. This is powerful for making systematic changes across your CSS.

### Split View[​](_interface_css-panel.md#split-view)

You can have multiple panels open simultaneously. For example, keep the CSS Panel open while working in the Structure Panel to see how your style changes affect the layout in real-time.

### Keyboard Navigation[​](_interface_css-panel.md#keyboard-navigation)

Learn to navigate efficiently using keyboard shortcuts. This will significantly speed up your CSS editing workflow, especially when working with large stylesheets.

Enjoy a truly capable CSS authoring experience!

#### _interface_elements-bar.md

> Source: https://docs.etchwp.com/interface/elements-bar
> Scraped: 10.03.2026 08:20:43

Adding elements to your page in Etch is as simple as adding elements in traditional page builders. You don't have to write code to add elements – just click the icon for the element you want in the Elements Bar at the bottom of the interface and it'll appear on the canvas.

![Elements Bar](https://docs.etchwp.com/assets/images/elements-bar-6f98e4333b63d8753aada7464b818852.avif)

If you have the HTML editor open, you'll see Etch write the HTML for you, but having the HTML panel open is not required.

By default, elements will get added as a child element of whatever is currently selected on the canvas or structure panel except when the currently selected element does not accept children.

If you want to add an element as a sibling of another element, you can hold **Cmd+Click** (Mac) or **Ctrl+Click** (Windows/Linux) and then click on the element you want to add.

The exception to this rule is the `section` element. Sections are always top level elements and will always be added as a sibling of another element. If you need to force a section to be a child of another element, hold **Cmd+Click** (Mac) or **Ctrl+Click** (Windows/Linux) to force the section to be added as a child. The behavior here is opposite of all other elements due to the common use case for sections.

## What if I don't see an element I need?[​](_interface_elements-bar.md#what-if-i-dont-see-an-element-i-need)

Etch's architecture allows for element transmutation. This means that any element can become any other element.

Let's use the "text" element as an example. If you add a text element to the page, it adds it as a `paragraph`.

If you need that text to be a `span` or an `li`, you can simply change the HTML tags and you'll end up with the element you need.

The same is true for heading levels. By default, Etch will add headings as an `h2` since this is the most common heading level in page building. But once you've added a heading you can easily edit the tag to be any other heading level.

This keeps the elements panel clean and simple without limiting what you're able to build.

You can change the tag without editing code by editing the tag in the structure panel or the attributes panel. Of course, you can always edit the element tag in the HTML editor as well.

There are no limitations to what elements you can add. Even custom elements like `my-box` are accepted, though you need to make sure you follow the HTML spec when creating custom elements.

## Are more elements coming?[​](_interface_elements-bar.md#are-more-elements-coming)

Yes, more elements are coming, including dynamic elements:

*   Carousel
*   Slider
*   Accordion
*   Menu
*   Toggle
*   Hamburger
*   Tabs
*   and many more...

These will be prebuilt components with full accessibility in mind. This will make your life much easier and faster as you work with Etch, especially if you're a beginner, but won't be black box elements like traditional page builders. This ensures that you can work faster, but without limitations.

#### _interface_html-panel.md

> Source: https://docs.etchwp.com/interface/html-panel
> Scraped: 10.03.2026 08:20:43

The HTML Panel provides a powerful code editor for writing and editing HTML markup directly within Etch's interface. Built on CodeMirror, it offers a professional coding experience with syntax highlighting, auto-completion, and advanced editing features.

## Basic Usage[​](_interface_html-panel.md#basic-usage)

The HTML Panel shows the current HTML structure of your page in real-time. As you make changes on the canvas or in other panels, the HTML updates automatically. You can also edit the HTML directly, and your changes will be reflected immediately on the canvas.

## Keyboard Shortcuts[​](_interface_html-panel.md#keyboard-shortcuts)

The HTML Panel includes many powerful keyboard shortcuts to speed up your workflow:

### Multi-Cursor and Selection[​](_interface_html-panel.md#multi-cursor-and-selection)

*   **Cmd+D** (Mac) / **Ctrl+D** (Windows/Linux): Select the next occurrence of the current selection
*   **Cmd+Shift+L** (Mac) / **Ctrl+Shift+L** (Windows/Linux): Select all occurrences of the current selection
*   **Alt+Click**: Add additional cursors at click positions
*   **Cmd+Alt+Up/Down** (Mac) / **Ctrl+Alt+Up/Down** (Windows/Linux): Add cursors above/below

### Search and Replace[​](_interface_html-panel.md#search-and-replace)

*   **Cmd+F** (Mac) / **Ctrl+F** (Windows/Linux): Open search dialog
*   **Cmd+H** (Mac) / **Ctrl+H** (Windows/Linux): Open search and replace dialog
*   **Cmd+G** (Mac) / **Ctrl+G** (Windows/Linux): Find next occurrence
*   **Cmd+Shift+G** (Mac) / **Ctrl+Shift+G** (Windows/Linux): Find previous occurrence

### Editing[​](_interface_html-panel.md#editing)

*   **Cmd+Z** (Mac) / **Ctrl+Z** (Windows/Linux): Undo
*   **Cmd+Shift+Z** (Mac) / **Ctrl+Shift+Z** (Windows/Linux): Redo
*   **Cmd+X/C/V** (Mac) / **Ctrl+X/C/V** (Windows/Linux): Cut/Copy/Paste
*   **Tab**: Indent selection
*   **Shift+Tab**: Unindent selection

## Advanced Features[​](_interface_html-panel.md#advanced-features)

### Auto-Completion[​](_interface_html-panel.md#auto-completion)

The HTML Panel provides intelligent auto-completion for HTML tags, attributes, and values. As you type, suggestions will appear automatically. Use **Tab** or **Enter** to accept suggestions.

### Syntax Highlighting[​](_interface_html-panel.md#syntax-highlighting)

HTML syntax is highlighted with different colors for tags, attributes, values, and content, making it easy to read and understand your code structure.

### Error Detection[​](_interface_html-panel.md#error-detection)

The editor will highlight syntax errors and provide helpful error messages to help you write valid HTML.

### Code Folding[​](_interface_html-panel.md#code-folding)

You can fold and unfold code blocks by clicking on the fold indicators in the gutter, or using **Cmd+Shift+\[** (Mac) / **Ctrl+Shift+\[** (Windows/Linux) to fold and **Cmd+Shift+\]** (Mac) / **Ctrl+Shift+\]** (Windows/Linux) to unfold.

## Tips and Tricks[​](_interface_html-panel.md#tips-and-tricks)

### Working with Multiple Elements[​](_interface_html-panel.md#working-with-multiple-elements)

When you need to edit multiple similar elements, use **Cmd+D** to select each occurrence one by one, or **Cmd+Shift+L** to select all occurrences at once. This is especially useful for adding classes or attributes to multiple elements.

### Search and Replace with Regular Expressions[​](_interface_html-panel.md#search-and-replace-with-regular-expressions)

In the search dialog, you can enable regular expressions for advanced find and replace operations. This is powerful for making systematic changes across your HTML.

### Split View[​](_interface_html-panel.md#split-view)

You can have multiple panels open simultaneously. For example, keep the HTML Panel open while working in the Structure Panel to see how your changes affect the code in real-time.

### Keyboard Navigation[​](_interface_html-panel.md#keyboard-navigation)

Learn to navigate efficiently using keyboard shortcuts. This will significantly speed up your HTML editing workflow, especially when working with large files.

## Integration with Other Panels[​](_interface_html-panel.md#integration-with-other-panels)

The HTML Panel works seamlessly with all other panels in Etch:

*   Changes in the HTML Panel are immediately reflected on the **Canvas**   The **Structure Panel** updates to show the new structure
*   The **Properties Panel** will show the properties of the currently selected element
*   The **CSS Panel** can be used alongside the HTML Panel for comprehensive styling

This integration ensures that you always have a complete view of your page's structure and can make changes from any perspective that's most convenient for your current task.

#### _interface_js-panel.md

> Source: https://docs.etchwp.com/interface/js-panel
> Scraped: 10.03.2026 08:20:44

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Javascript Panel

#### _interface_loop-manager.md

> Source: https://docs.etchwp.com/interface/loop-manager
> Scraped: 10.03.2026 08:20:43

The Loop Manager allows you to manage all main loops for your project, whether they be post loops, taxonomy loops, or JSON loops.

![Etch Loop Manager](https://docs.etchwp.com/assets/images/etch-loop-manager-55cc1e42f9b454a1555280e7298eb6fa.webp)

The loops you define in the Loop Manager are accessible via the [Loop element](_elements_loop.md).

## Interface Overview[​](_interface_loop-manager.md#interface-overview)

The Loop Manager consists of three columns:

1.  Saved Loops & Basic Configuration
2.  Query Loop Parameters
3.  Output Preview

Working from left to right, you can click on a saved loop or create a new loop, view or configure the loop settings (name, key, source, type), define the parameters, and then view the output.

Once you're done viewing, editing, or creating a loop, you can click the arrow or hit `esc` to return to site building mode.

For more information on using loops, see [Basic Loops](_loops_basic-loops.md).

#### _interface_media-manager.md

> Source: https://docs.etchwp.com/interface/media-manager
> Scraped: 10.03.2026 08:20:43

Etch will eventually have a fully-featured "Media Hub" that allows you to:

*   Optimize image size and resolution
*   Organize media with a tag-based system
*   Bulk-manage media
*   Regenerate thumbnails
*   Manipulate image data like alt tags, titles, etc.
*   Replace images
*   And more...

For now, the Media Hub is just a function call to launch the WordPress Media Library inside of the Etch Interface. This empowers users to do basic media management without having to leave Etch, but this is certainly not our ultimate vision for media management.

This temporary workflow will remain in place while we focus on other mission-critical features and then we'll wrap back around to building Etch's native Media Hub.

Stay tuned!

#### _interface_modular-interface.md

> Source: https://docs.etchwp.com/interface/modular-interface
> Scraped: 10.03.2026 08:20:39

The modular interface in Etch is designed to adapt to your specific needs and preferences. Whether you're a seasoned developer or just starting out, the interface can be customized to match your workflow, screen size, and skill level.

## Customizable Panels[​](_interface_modular-interface.md#customizable-panels)

Etch's interface is built around a system of panels that you can show, hide, resize, and rearrange:

*   **Canvas**: The main area where you can see what you're building
*   **Structure Panel**: View and manage your page structure
*   **Properties Panel**: Configure element settings and styles
*   **HTML Panel**: Write and edit HTML markup directly in the interface
*   **CSS Panel**: Write and edit CSS styles directly in the interface
*   **Javascript Panel**: Write and edit JavaScript code directly in the interface
*   **Styling Panel**: Configure visual styles using simple inputs

## Moving Panels[​](_interface_modular-interface.md#moving-panels)

You can "grab" a panel by clicking on the drag area in the panel header and dragging it to a new drop zone in the interface.

Available drop zones are:

*   Sidebars (left and right)
*   Bottom drawer

All drop zones accept multiple panels. In the sidebars, they'll stack. In the bottom drawer, they'll line up in a row.

## Resizing Panels & Drop Zones[​](_interface_modular-interface.md#resizing-panels--drop-zones)

*   Individual panels can be resized by grabbing the resize handle and dragging it up and down (sidebar panels) or left and right (bottom drawer). They're full collapsible.
*   Sidebar drop zones can be made wider or narrower by grabbing their edge and dragging them left or right. It's collapsible to its minimum width.
*   The bottom drawer can be made taller or shorter by grabbing its top edge and dragging up or down. It's fully collapsible.
*   Double-clicking a drag handle will reset the size of the panel or drop zone to its default dimensions.

## Controlling Panel Visibility[​](_interface_modular-interface.md#controlling-panel-visibility)

If you want to completely hide a panel so that it doesn't exist at all in the interface, you can toggle it off via the Panel Manager.

![Panel Manager](https://docs.etchwp.com/assets/images/panel-manager-497d74a7618707fb7d715d7c22cc86a1.avif)

## Controlling Interface Visibility[​](_interface_modular-interface.md#controlling-interface-visibility)

If you want to temporary hide all the panels to get a clear view of the canvas preview, you can toggle the entire interface on and off via by clicking on the eye icon in the Settings Bar. Only the Settings Bar will remain visible.

![Hide Interface Toggle](https://docs.etchwp.com/assets/images/hide-interface-8bf79170d00eda1288f635c304ec20b5.avif)

## Workflow Adaptation[​](_interface_modular-interface.md#workflow-adaptation)

The modular design means you can:

*   **Focus on Design**: Hide the code panel and structure panel to focus purely on visual design
*   **Code-First Approach**: Maximize the code panel and minimize visual distractions
*   **Development Mode**: Use all panels for full control and visibility

## Screen Size Optimization[​](_interface_modular-interface.md#screen-size-optimization)

No more scrunched interfaces or unoptimized space when you have to work on different devices:

*   **Large Screens**: All panels can be visible simultaneously
*   **Medium Screens**: Panels can be collapsed or resized as needed
*   **Small Screens**: Panels stack intelligently or can be toggled on/off

## Skill Level Customization[​](_interface_modular-interface.md#skill-level-customization)

The Etch interface grows with you:

*   **Beginner**: Use a conventional page building workflow by turning off the code editors and only using the styling panel.
*   **Intermediate**: Turn on the CSS editor and author some of your CSS.
*   **Advanced**: Use all panels for maximum control and efficiency

This modular approach ensures that Etch works for you, not against you. You're never overwhelmed by panels you don't need, and you always have access to the tools that matter most for your current task.

#### _interface_responsive-controls.md

> Source: https://docs.etchwp.com/interface/responsive-controls
> Scraped: 10.03.2026 08:20:43

Etch's interface looks very different from most page builders in terms of responsive controls. This is because all other current page builders are using heavily outdated workflows and practices for responsiveness.

Once you start using Etch for responsive development, you'll see why its such a transformative experience.

First, please make note of the following:

1.  There are no device-based breakpoints anywhere because device-based breakpoints are functionally irrelevant on the modern web. You can't configure them, nor can you preview them, because they no longer matter.
2.  The canvas scales fluidly with no preset preview sizes. This ensures that you're checking responsiveness throughout the entire range of possible device sizes rather than random, irrelevant "snapshot" sizes.

If you open Etch expecting to see these relics of Era 2 and 3 development practices, you may feel confused at first. But once you understand how irrelevant and inaccurate the old workflow is, and how Etch handles responsive development, you'll be wondering why no other tools implemented these new practices sooner.

## Fluid Canvas[​](_interface_responsive-controls.md#fluid-canvas)

![Etch Fluid Canvas](https://docs.etchwp.com/assets/images/etch-fluid-canvas-squashed-9bc32cefb506a67b13f41219d1852e7e.webp)

Responsive development in Etch begins with the fluid canvas. On each side of the canvas you'll see a drag handle. This allows you to fluidly drag the canvas through the entire range of responsiveness.

Sites built with Etch are far more responsive than sites built with fixed breakpoints because Etch users can easily check how their site looks on all 2200+ known device sizes instead of just three or four.

## Persistent CSS Editing[​](_interface_responsive-controls.md#persistent-css-editing)

One thing you'll notice in Etch is that you can see all your styling at all times, no matter how big the canvas is. In other page builders, previewing a breakpoint completely resets your styling and clears your CSS editor. In Etch, your CSS editor is unaffected by responsive previews. You can add styles for any "breakpoint" at any time, from any preview state. This dramatically improves development efficiency and reduces frustration and clicks.

## Canvas Auto Measuring[​](_interface_responsive-controls.md#canvas-auto-measuring)

![Etch Auto Canvas Measuring](https://docs.etchwp.com/assets/images/etch-canvas-measurement-squashed-7ff68ed414ac4dccb9746f0ec6b4f279.webp)

Whenever you interact with the responsive drag handles, you'll see a canvas measurement appear at the top of the canvas. This lets you know the exact dimensions of your canvas in the current preview state.

You'll see why this is important in a moment.

## Element Auto Measuring[​](_interface_responsive-controls.md#element-auto-measuring)

![Etch Auto Element Measuring](https://docs.etchwp.com/assets/images/etch-element-measurement-squashed-f0d060425862f3116c77f787db6f1fe5.webp)

Any time you have an element selected on the canvas, you'll see its measurements. Etch automatically calculates the precise measurement of every element in any given preview state.

You'll see why this is important in a moment.

## Auto Query Insertion for Responsive Styles[​](_interface_responsive-controls.md#auto-query-insertion-for-responsive-styles)

![Etch Responsive Controls](https://docs.etchwp.com/assets/images/etch-responsive-controls-squashed-21d2fc1370012cbc04988344f215e29a.webp)

Etch speaks the language of web development, thus it uses media queries and/or container queries for responsive styling rules.

The best part, though, is that you never have to write these queries. Etch will auto-insert them for you. Not only will it auto-insert a responsive style query, it will add the query to your CSS using the exact measurements of your canvas or element.

For media queries, it'll automatically add the exact canvas measurement that you're currently previewing.

For container queries, it'll automatically add the exact element measurement that you're currently previewing.

This means that, as you preview different points to make responsive adjustments, Etch just auto-feeds the queries for that "breakpoint" directly into your CSS.

Tip!

Once you're in a container query or media query code block, the CSS Mini GUI (CSS Quick Actions Bar) will reset so you can easily start adding your styling changes. You do not have to write CSS for media/container queries.

## Auto "Has Me" Insertion[​](_interface_responsive-controls.md#auto-has-me-insertion)

One of the icons in the responsive controls menu is an auto-insertion for the "Has Me" selector. This is a breakthrough selector for container queries, pioneered and popularized by Etch's own [Kevin Geary](https://geary.co/).

For a detailed explanation of the Has Me selector, see [Kevin Geary's article on "Has Me"](https://geary.co/has-me/).

Whenever you're going to use a container query, it's advisable to add the Has Me selector first. This will ensure your container query works everywhere, automatically.

## Conclusion[​](_interface_responsive-controls.md#conclusion)

Not only are Etch sites more accurately responsive, it's far easier and faster to develop them with a high degree of accuracy than it is in other tools.

To dive deeper, check out our [Responsive Development Philosophy](_responsive-development_philosophy.md).

#### _interface_selector-pills.md

> Source: https://docs.etchwp.com/interface/selector-pills
> Scraped: 10.03.2026 08:20:44

![Screenshot of Selector Pills in Etch](https://docs.etchwp.com/assets/images/selector-pill-30fed0cc78bb7ad24960bcc4858f56fb.avif)

Any time you add a valid selector in Etch, that selector will show up as a selector pill on that element in the CSS Editor.

Whenever the pill for a selector is selected, styles you add will be applied to that selector. Styles can be added with the **CSS Editor**.

You can **rename selectors** by double clicking the pill or by opening the Style Manager and editing the selector.

You can _remove_ selectors from an element by clicking the "X" icon when hovering the pill. Note that this is only possible with manually added selectors.

warning

Complex selectors like `{.my-section h1}` are _not_ removable from the elements they apply to because they're a literal CSS rule you've created that is either true or false. Read more later in this doc.

You can delete selectors by right clicking the pill and choosing "Delete" or by opening the Style Manager and clicking the Delete icon on the selector you want to delete. Both of these actions remove the selector from the database.

## Removing Complex Selectors[​](_interface_selector-pills.md#removing-complex-selectors)

Complex selectors like `{.my-section h1}` are _not_ removable from the elements they apply to because they're a literal CSS rule you've created that is either true or false.

If you want the rule to stop applying to a specific element, you need to edit your selector to exclude it. For example, change the selector to:
```
{.my-section h1:not(.special-heading)}
```
Now when you select `.special-heading` you won't see the pill, because the rule no longer applies to that heading.

If you want to delete the rule entirely, delete the selector by right clicking and choosing Delete or by deleting it from the Styles Manager.

## "Help! I added a selector, but I don't see the pill!"[​](_interface_selector-pills.md#help-i-added-a-selector-but-i-dont-see-the-pill)

If you tried to add a class to an element and you don't see the selector pill, it's possible that you forgot to type the "." -- double check!

If you added a complex selector and don't see the pill, it's likely because the selector is incorrect or you're not selecting the element that the selector actually selects (that's a mouthful).

For example, let's say you have a section element selected and you type this in the selector bar:
```
{.my-section h1}
```
You will not see the pill for this selector on the `.my-section` element! Why? Because the CSS is not selecting the `section` element. If you click on the `H1` that's in the section, you'll see the pill attached to the `H1`. Why? Because that's the element that's being selected -- that's where the styles apply.

Etch's selector system is intelligent -- it knows what's actually being selected and places the pill on that element(s).

#### _interface_structure-panel.md

> Source: https://docs.etchwp.com/interface/structure-panel
> Scraped: 10.03.2026 08:20:43

The structure panel is a powerful way to:

*   See an overview of your page's structure
*   Make drag and drop changes to your page's structure
*   Access an element's settings
*   Label elements to better organize your page's structure
*   Quickly edit HTML tags
*   Add BEM-style selectors automatically
*   Turn elements into components
*   Auto-generate element-based lists
*   And more...

For this reason, we highly recommend you keep your structure panel open at all times. It's too powerful to hide!

## Drag and Drop[​](_interface_structure-panel.md#drag-and-drop)

The structure panel makes it easy to reorganize your page structure through simple drag and drop. You can drag any element to a new position in the structure tree, and the changes will be reflected immediately on the canvas.

To move an element:

1.  Click and hold on the element you want to move
2.  Drag it to the desired position in the structure tree
3.  Release to drop the element in its new location

The structure panel will show you visual indicators for valid drop zones, making it clear where you can place elements.

## Quick Tag Editing[​](_interface_structure-panel.md#quick-tag-editing)

Double-click on any element's HTML tag in the structure panel to quickly edit it. This opens an inline editor that allows you to change the HTML tag without opening the properties panel or HTML editor.

For example, you can quickly change a `div` to a `section`, or an `h2` to an `h1` by double-clicking and typing the new tag name.

Right-clicking on any element in the structure panel reveals a powerful context menu with several useful features:

### Auto-BEM[​](_interface_structure-panel.md#auto-bem)

Automatically generates BEM-style class names for the selected element and its children. This follows the Block-Element-Modifier methodology, making your CSS more organized and maintainable.

### Generate List[​](_interface_structure-panel.md#generate-list)

Creates a list structure based on the selected element. This is useful when you have multiple similar elements that should be grouped together in a list format.

### Create/Edit Component[​](_interface_structure-panel.md#createedit-component)

Turns the selected element into a reusable component. This allows you to:

*   Save the element as a component for reuse across your project
*   Edit the component definition
*   Apply the component to other elements
*   Manage your component library

### Delete[​](_interface_structure-panel.md#delete)

Removes the selected element from the page structure.

These right-click options provide quick access to advanced features that would otherwise require manual coding or multiple steps through the interface.

## Conclusion[​](_interface_structure-panel.md#conclusion)

The Structure Panel is a powerful feature, providing you with complete control over your page's HTML structure through an intuitive visual interface.

By keeping the Structure Panel open and familiarizing yourself with its features, you'll find that many tasks that traditionally required coding can now be accomplished through simple clicks and drags. This visual approach to HTML structure management makes Etch accessible to users of all skill levels while providing the power and flexibility that advanced developers need.

Remember that the Structure Panel works in harmony with all other panels in Etch's modular interface. You can have the HTML editor open to see the code changes in real-time, use the Properties Panel for detailed element configuration, or rely on the Canvas for visual feedback. This integrated approach ensures that you always have the right tools available for the task at hand.

#### _interface_style-manager.md

> Source: https://docs.etchwp.com/interface/style-manager
> Scraped: 10.03.2026 08:20:44

The Style Manager empowers users to manage selectors, variables, and global stylesheets. You can access it by clicking the Style Manager icon in the left Etch bar.

![Etch Style Manager](https://docs.etchwp.com/assets/images/etch-style-manager-98bb210c0b9e1071d666cbdddd62e5cc.webp)

## Selector Manager[​](_interface_style-manager.md#selector-manager)

The selector manager shows you all of the selectors in your project. You can use the sorting controls to filter the list or use the search bar to find selectors based on names, characters, etc.

Clicking on a selector allows you to:

*   View and edit the CSS applied to that selector
*   Rename the selector
*   Delete the selector

More functionality is planned for the Selector Manager in the future.

## Variable Manager[​](_interface_style-manager.md#variable-manager)

If you click on the Variables tab, you'll gain access to the Variable Manager. This is where you can define global CSS variables (custom properties) for your project. You can even organize variables into collections.

More functionality is planned for the Variable Manager in the future.

## Stylesheets Manager[​](_interface_style-manager.md#stylesheets-manager)

If you click on the Stylesheets tab, you'll gain access to the Stylesheets Manager. This is where you can define global CSS for your project. You can even organize stylesheets into collections.

More functionality is planned for the Stylesheets Manager in the future.

#### _known-issues.md

> Source: https://docs.etchwp.com/known-issues
> Scraped: 10.03.2026 08:20:36

## Known Issues & Areas of Improvement

Great software is never "done," and that's certainly true for software as young as Etch. We are committed to continuous improvement and transparency about the current limitations, bugs, and areas where we know things could be better.

This page documents the most significant known issues and areas we're actively planning to improve. If you encounter a problem not listed here, please let us know so we can investigate and address it in future updates.

## Issue: Hostinger Issues[​](_known-issues.md#issue-hostinger-issues)

Users who are using Hostinger for their hosting are having unique issues that are not experienced on any other hosting platform:

*   WAF blocks saving
*   WAF blocks plugin upload
*   WAF breaks copy/paste of components and JSON

If the errors you are seeing return a "403" then it's most likely a WAF issue. Some of these issues be temporarily solved by setting the WAF to "essentially off."

We are currently trying to reach out to Hostinger and get in touch with a higher-level technical person on their team to investigate these issues. We hope they'll be responsive to our requests and help us find a solution.

## WIP: Content Hub / CPTs / Custom Fields[​](_known-issues.md#wip-content-hub--cpts--custom-fields)

This area of Etch is a functional Proof of Concept so that users can start to experience the tremendous advantages of a "unified workflow." It's a high priority area and will get progressively better very quickly, but the CPT/Custom Fields functionality should be treated as more of a playground right now than a real part of your workflow (unless your needs are very basic).

## Quirk: Partial Selectors[​](_known-issues.md#quirk-partial-selectors)

The HTML editor allows you to write classes in plain HTML, which it then parses into attached selector pills on the element. The one limitation of this workflow is that it has to be debounced, which means it has to try and guess when you're done typing.

If you're a fast typist, you won't have any issues. If you're a slow typist and constantly pause or stop to think, Etch will think you're done and will create a selector out of the partial selector you typed. This can result in having tons of partial selectors in your style manager.

If you find partial selectors in your style manager, it's a sign that you should stop using the HTML editor to add classes to elements. Instead, use the add attribute bar/workflow which allows you to type at any speed and doesn't require any debouncing or guessing.

## WIP: Mini GUI vs Styling Panels[​](_known-issues.md#wip-mini-gui-vs-styling-panels)

The Mini GUI / CSS Quick Actions bar is our new, streamlined way to style elements quickly and intuitively.

The current version is still V1, but it has already proven significantly more effective and enjoyable to use than the traditional styling panels.

We have an exciting roadmap of features and refinements planned for the Mini GUI, so stay tuned!

#### _loops_basic-loops.md

> Source: https://docs.etchwp.com/loops/basic-loops
> Scraped: 10.03.2026 08:20:45

Loops in Etch allow you to dynamically repeat content or components based on data sources, such as lists of posts, products, users, or custom data.

You can use loops to render lists, grids, or any repeated structure, with full support for dynamic data. This enables you to build powerful, data-driven layouts visually.

## Loop Data Sources[​](_loops_basic-loops.md#loop-data-sources)

Etch supports several types of loop data sources:

*   **WP Query**: Query posts or custom post types from WordPress.
*   **JSON**: Use static or dynamic JSON data as the source.
*   **WP Terms**: Query taxonomy terms (categories, tags, etc.).
*   **WP Users**: Query WordPress users.

## How Loops Work[​](_loops_basic-loops.md#how-loops-work)

*   Loops are implemented via the "Loop" element.
*   The Loop element is configured with a data source (e.g., a WP Query, JSON, etc.) and optional parameters.
*   For each item in the data source, Etch renders the inner elements, injecting the current item's data into the context.
*   You can use dynamic data keys (e.g., `{item.title}`) inside child elements to access the data of the current loop item.

## Custom Queries[​](_loops_basic-loops.md#custom-queries)

Suppose you want to display a list of blog posts using a custom WP Query. A custom query is any query that you explicitly configure in Etch (via the Loop Manager) to pull a specific set of results — for example, recent posts, your featured products, or a hand‑picked set of resources you've curated using a taxonomy query.

On regular pages, you'll typically reach for a custom query when you need to loop over content - for example, showing the 3 most recent posts on your homepage. (Doing a custom query is required when doing a loop on a page. This is different than using the main query on templates, where the loop is often handled automatically.)

Here's how you define the query parameters in the Loop Manager:
```
// Query for latest 10 posts$query_args = [  'post_type' => 'post',  'posts_per_page' => 10,  'orderby' => 'date',  'order' => 'DESC',  'post_status' => 'publish'];
```
*   Add a Loop element and configure it with the above WP Query arguments.
*   Add child elements (e.g., Heading, Image) inside the loop.
*   Use dynamic data keys like `{item.title}` or `{item.featured_image}` in child elements to display post data.

Once your Loop element is connected to this custom query in Etch, your loop markup will look something like this:
```
{#loop your_loop_name as item}  {/loop}
```
## WordPress Main Query[​](_loops_basic-loops.md#wordpress-main-query)

Sometimes you don't need to configure a separate WP Query in Etch. You just want to use whatever WordPress is already querying on the current template context (for example, archive templates, search results template, or the main blog template).

In these cases, you don't need to define any query arguments. You can loop over WordPress's main query directly with:
```
{#loop mainQuery as item}  {/loop}
```
*   `mainQuery` refers to the WordPress main query for the current request.
*   `item` is the loop variable (which can be renamed to anything you like), and you can access its fields the same way you would in any other loop (e.g., `{item.title}`, `{item.permalink.relative}`, `{item.featuredImage.url}`).

This is the simplest way to render lists of posts (or other objects) when the page is already powered by a WordPress query.

For more details on how `mainQuery` works (including default arguments and loop arguments), see [Main Query Loops](_loops_main-query.md).

## Example Build Out (Blog Cards in a Grid)[​](_loops_basic-loops.md#example-build-out-blog-cards-in-a-grid)

Here's the code for a blog post grid. The first question is, "What do I need to loop?"
```
                  !

## Insert your heading here...

Insert your text here...

      [Click me](https://digitalgravy.co/)
```
You might think we need to loop the `article` since that's the actual blog post card, but that's not the case here. That would loop the `article` over and over inside the same `list-item`.

What we really want to loop is the `list-item` to ensure that we maintain proper HTML structure.

If you want to do this with the Etch UI, select the list item element, then hold Command (⌘) on Mac or Ctrl on Windows, and click the "Loop" button in the toolbar. This will add the loop as a sibling of the `list-item`. You can then easily drag the `list-item` into the loop.

![The Loop element in the Etch interface](https://docs.etchwp.com/assets/images/loop-element-886e7f154dc8312745b0761c072bbeb1.avif)

Your HTML will now look like this:
```
  {#loop loop-name as item}

!

## Insert your heading here...

Insert your text here...

        [Click me](https://digitalgravy.co/)            {/loop}
```
Make sure you choose the correct loop that you configured for your blog posts and Etch will start looping through your posts.

## Inserting Dynamic Data[​](_loops_basic-loops.md#inserting-dynamic-data)

Looping cards with the same static data over and over again defeats the point of a loop, so the next step is to map the proper areas to your [dynamic data keys](_dynamic-data_dynamic-data-keys.md).

Since our loop is saying `{#loop loop-name as item}` we need to use `item` as stem for our dynamic data keys.

Anything that is **unique data** to the thing we're looping needs to be replaced with a dynamic data key. In this case, the blog post title, link to the post, excerpt, image src, and image alt. You can do this via the Etch UI or the HTML editor.

Here's our new output:
```
  {#loop loop-name as item}

          ![{item.featuredImage.alt}]({item.featuredImage.url})

## {item.title}

{item.excerpt}

        [Read more](_%7Bitem.permalink.relative%7D.md)            {/loop}
```
You can use dynamic data to replace pretty much any static data, even attributes like aria attributes.

In this example, each blog post as a link that says "Read more." That's not accessible because it lacks context as to where the user will be taken.

An aria-label can be used here to describe exactly which blog post the user is going to read when they click the link, and we can use dynamic data to inject the name of the post.
```
  {#loop loop-name as item}

          ![{item.featuredImage.alt}]({item.featuredImage.url})

## {item.title}

{item.excerpt}

        [Read more](_%7Bitem.permalink.relative%7D.md)            {/loop}
```
Now you've learned two things: you can use dynamic data in attributes and you can also mix and match static and dynamic data. Fun!

You aren't limited to just looping data that's in the WordPress database. Any custom dataset can be looped with `JSON`.

Suppose you have a list of authors and want to display their names. Format your data as a JSON string like this:
```
[{ "name": "Jane Austen" }, { "name": "Mark Twain" }, { "name": "Virginia Woolf" }]
```
Then you can loop it the same way we looped the blog post earlier!

*   Add a Loop element and set the data source type to JSON.
*   Paste the above JSON as the data source.
*   Add a child element (e.g., Heading) inside the loop and use `{item.name}` to display each author's name.

## Inline Loops[​](_loops_basic-loops.md#inline-loops)

Sometimes you just want to repeat a piece of content a fixed number of times — for example, 5 times.
The easiest way to achieve this is with an inline loop, where the data source is written directly in the loop markup.
```
{#loop [1,2,3,4,5] as item}

I will be repeated 5 times

{/loop}
```
In this example, the variable item also holds the corresponding value from the array (1 through 5), which you can use inside the loop if needed.

## Accessing the Index[​](_loops_basic-loops.md#accessing-the-index)

When looping through data in Etch, you can optionally access the index of each iteration. This can be useful for tasks such as displaying item numbers, applying alternating styles, or conditionally rendering elements based on position.

To access the index, add a second variable name after your item variable in the loop declaration, separated by a comma. You can choose any name for the index, but we recommend using one that clearly describes its purpose — such as `index`, `i` or `idx`.

The index variable behaves just like any other piece of dynamic data and can be used directly inside your markup:
```
{#loop recent-posts as post, index}

    {#if index === 0}         {/if}  {/loop}
```
The index will start at `0` for the first item and increase by one with each iteration.

## See Also[​](_loops_basic-loops.md#see-also)

* [Nested Loops](_loops_nested-loops.md)
* [Repeater Fields](_integrations_custom-fields_repeater-fields.md)
* [Relationship Fields](_integrations_custom-fields_relationship-fields.md)
* [Gallery Fields](_integrations_custom-fields_gallery-fields.md)
* [ACF Flexible Content](_integrations_custom-fields_flexible-content-fields.md)

#### _loops_loop-arguments.md

> Source: https://docs.etchwp.com/loops/loop-arguments
> Scraped: 10.03.2026 08:20:47

Creating and saving a loop in Etch makes the loop configuration easily re-usable, but what happens when you need to change part of the configuration? Do you have to save a _new_ instance of the loop?

Nope! That would be tragic. And in Etch, we steer clear of tragic situations.

## Example Scenario[​](_loops_loop-arguments.md#example-scenario)

Let's keep it super basic.

You want to create a loop that loops through your blog posts. It looks something like this:
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => 10,  'orderby' => 'date',  'order' => 'ASC',  'post_status' => 'publish',  'ignore_sticky_posts' => 1];
```
This loops through the most recent ten published posts, putting them in date order.

Nice! You save the loop in Etch and name it, "Blog Posts."

Now, you go to your Home page and try to create a "Latest Posts" section.

In this section, you want to show three posts, not ten. That's a problem, since your "Blog Posts" loop is configured to show ten.

What should you do?

**OPTION A**: Create a **new** loop configuration and name it "Blog Posts 3" or "Featured Blog Posts?"

**OPTION B**: Be an Etch ninja and use custom args (arguments)?

tip

_Always_ choose to be an Etch ninja.

## Creating Custom Args[​](_loops_loop-arguments.md#creating-custom-args)

Custom arguments allow you to pass an argument value through as a placeholder token, just like you do with CSS custom properties.

If you've done anything like this:
```
:root {  --primary: red;}.foo {  color: var(--primary);}
```
Then you're fully trained and licensed to use loop arguments!

Check this out:
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => $count,  'orderby' => 'date',  'order' => 'ASC',  'post_status' => 'publish',  'ignore_sticky_posts' => 1];
```
Look carefully at the `posts_per_page` line.

See that `$count` token? That's a custom arg. And all you have to do to create an arg like that is literally write it in.

## Default Argument Values[​](_loops_loop-arguments.md#default-argument-values)

What happens if you forget to pass a custom argument when using a loop? Or what if you want the argument to be optional?

You can now declare default values using the `??` syntax (null coalescing operator). If the argument isn't passed when the loop is used, it will fall back to the default value.
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => $count ?? -1,  'orderby' => 'date',  'order' => 'ASC',  'post_status' => 'publish',  'ignore_sticky_posts' => 1];
```
In this example, if you use the loop without passing `$count`, it will default to `-1` (which in WordPress means "show all posts").
```
{#loop blog-posts as item}{#loop blog-posts($count: 3) as item}
```
Important: First Default Wins

If you use the same argument multiple times in your loop configuration with different default values, **the first declared default takes precedence**.
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => $count ?? 1,  'offset' => $count ?? 0,];
```
In this case, if `$count` is not passed, the default value will be `1` (from the first declaration), not `0`. The `offset` will also receive `1` because the same argument resolves to a single value.

If you need different defaults for different parameters, use separate argument names:
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => $count ?? 1,  'offset' => $offset ?? 0,];
```
## Using Custom Args[​](_loops_loop-arguments.md#using-custom-args)

Now imagine that you're back on the Home page, trying to create that "Latest Posts" section. Can you picture yourself there?

Great, add a Loop element and choose the "Blog Posts" loop you made.

In the HTML editor you'll see something like this:
```
{#loop blog-posts as item}
```
All you're going to do is change it to this:
```
{#loop blog-posts($count: 3) as item}
```
Now, whenever you use the loop, you have full control over the number of items that is displayed.

You can extend this same technique to ANY argument in a loop. You can even use dynamic data as the value for the custom argument.

tip

You can pass more than one argument at a time. You just have to separate them with commas. For example, you might combine a count with another argument like a current post ID:
```
{#loop relatedPosts($count: 3, $post_id: this.id) as post}{/loop}
```
## Custom Args + Dynamic Data[​](_loops_loop-arguments.md#custom-args--dynamic-data)

Custom args don't only accept static values - they can accept dynamic data as well. For example, you can pass values like `this.id` (current post ID) directly into an argument.

You might be thinking ahead and wondering if custom args can accept dynamic data and if loops can function inside components while still being controllable "from the outside."

The answer is, "Yes."

Here's an example of a "Blog Posts" component where a blog post loop is inside of a component:
```
  {#loop recent_posts($count: props.numberOfPosts) as item}

## Insert your heading here...

Insert your text here...

    {/loop}
```
A component prop was created called "numberOfPosts" that accepts a numeric value. You can easily pass that prop into the loop argument:

`{#loop recent_posts($count: props.numberOfPosts) as item}`

This gives you the ability to control the number of loop items from the parent component.

Any dynamic data that makes sense to pass as the value of an argument can be passed into the loop this way.

Pretty awesome, right?

A common pattern is a "Related Posts" section on single post templates. You can exclude the current post from the results by using a custom argument for the current post ID and passing it into your saved loop.

1.  Define your loop (e.g., name it `relatedPosts`) with a `$post_id` argument and exclude it via `post__not_in`:
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => 3,  'post_status' => 'publish',  'orderby' => 'date',  'order' => 'DESC',  'post__not_in' => [$post_id]];
```
**Note:** `post__not_in` must be an array, so that's why it is wrapped in brackets.

1.  Use the loop in your single post template, passing the current post’s ID into `$post_id`. In Etch, `this.id` refers to the current post’s ID in a singular context:
```
  {#loop relatedPosts($post_id: this.id) as post}

### {post.title}

        {/loop}
```
If you want the related posts to be in the same taxonomy term (e.g., same category), add a taxonomy filter to the saved loop and pass the current post’s term dynamically.

Update your loop definition to accept `$taxonomy` and `$term_id` and add a `tax_query`:
```
$query_args = [  'post_type' => 'post',  'posts_per_page' => 3,  'post_status' => 'publish',  'orderby' => 'date',  'order' => 'DESC',  'post__not_in' => [$post_id],  'tax_query' => [    [      'taxonomy' => $taxonomy,      'field' => 'term_id',      'terms' => [$term_id]    ]  ]];
```
Then, pass the current post’s first category ID (as an example) from the template:
```
  {#loop relatedPosts($post_id: this.id, $taxonomy: "category", $term_id:  this.categories.at(0).id) as post}

### {post.title}

        {/loop}
```
**Notes:**   We have to put quotes around the taxonomy value in the loop arg (e.g., `$taxonomy: "category"`) because in the PHP query, `$taxonomy` is a variable and must remain unquoted. If you quoted it there, it would become the literal string `$taxonomy`. Quoting the value at call time ensures the WP query receives a proper string (e.g., `category`).
*   `terms` must be an array. That's why `$term_id` is wrapped in brackets in the `tax_query`.
*   If you prefer to filter by term slug, set `'field' => 'slug'` and pass a slug value instead of an ID.
*   Adjust which term you pass (e.g., first category vs. a specific taxonomy) to match your content model.

## More to come![​](_loops_loop-arguments.md#more-to-come)

There will also be a fancy dancy UI to make everything so much easier and ensure that you don't have to touch the code if you don't want to.

Happy Etching!

#### _loops_looping-attachments.md

> Source: https://docs.etchwp.com/loops/looping-attachments
> Scraped: 10.03.2026 08:20:47

Attachments in WordPress are files that have been uploaded to the media library and are associated with a post, page, or taxonomy. When you loop attachments, you're iterating through all the attached files, or files of a specific type.

## Common Attachment Loop Sources[​](_loops_looping-attachments.md#common-attachment-loop-sources)

### Post Attachments[​](_loops_looping-attachments.md#post-attachments)

Loop through all files attached to a post or the current post:
```
// Query for all attachments of the current post (replace $id with the post ID or pass dynamic data to the query argument)$query_args = [  'post_type' => 'attachment',  'post_parent' => $id,  'posts_per_page' => -1,  'post_status' => 'inherit',  'orderby' => 'menu_order',  'order' => 'ASC'];
```
Read more about [loop arguments](_loops_loop-arguments.md).

### Taxonomized Attachments[​](_loops_looping-attachments.md#taxonomized-attachments)

Loop through all files in a specific category. This is common when using plugins that organize the media library or after you assign custom taxonomies to attachments.
```
// Query for all attachments of the current post (replace $id with the post ID or pass dynamic data to the query argument)$query_args = [  'post_type' => 'attachment',  'posts_per_page' => -1,  'post_status' => 'inherit',  'orderby' => 'menu_order',  'order' => 'ASC',  'tax_query'   => [    [      'taxonomy' => 'happyfiles_category',      'field'    => 'id',      'terms'    => '3', // The term ID    ],  ],];
```
### Specific Attachment Types[​](_loops_looping-attachments.md#specific-attachment-types)

Filter attachments by file type:
```
// Query for only image attachments$query_args = [  'post_type' => 'attachment',  'post_parent' => $id,  'posts_per_page' => -1,  'post_status' => 'inherit',  'post_mime_type' => 'image',  'orderby' => 'menu_order',  'order' => 'ASC'];
```
## Common Use Cases[​](_loops_looping-attachments.md#common-use-cases)

*   **Portfolio Galleries**: Display project images with captions
*   **Document Libraries**: List downloadable files with metadata
*   **Product Images**: Show multiple product photos
*   **Team Member Photos**: Display staff headshots
*   **Event Galleries**: Show event photos chronologically

Looping attachments provides a powerful way to create dynamic, media-rich content in your Etch designs while maintaining full control over presentation and functionality.

#### _loops_main-query.md

> Source: https://docs.etchwp.com/loops/main-query
> Scraped: 10.03.2026 08:20:48

Etch’s **Main Query** loop type is designed for **archive-style templates**, where WordPress already has a “main query” that determines _which posts are being listed_ (and how they’re paginated).

Instead of rebuilding that query from scratch (like a normal WP Query loop), a Main Query loop **inherits the current page’s query context** and then lets you optionally override parts of it.

## When to use Main Query[​](_loops_main-query.md#when-to-use-main-query)

Use **Main Query** when you’re building templates that represent a listing page driven by WordPress routing:

*   **Post type archives** (example: `Service Archive, Product Archive`)
*   **Taxonomy archives** (example: `Category Taxonomy Archive`, `Product Category Taxonomy Archive`)
*   **Search results** (`search`)

If you’re building a **static listing** that should be the same everywhere (ex: “Latest 3 posts” on the homepage), you usually want our regular **WP Query** loop instead.

## Why Main Query is useful[​](_loops_main-query.md#why-main-query-is-useful)

*   **Matches what WordPress is already doing**: the loop “just works” on archives without you having to re-enter post type / taxonomy / search conditions manually.

note

Main Query loops are intended for **archive templates**. If you use it in a context where WordPress does not have an archive-like main query, results may be empty or surprising.

## Creating a Main Query loop[​](_loops_main-query.md#creating-a-main-query-loop)

Etch ships with a global preset named **Main Query**:

*   **Loop name**: `Main Query`
*   **Loop key**: `mainQuery`
*   **Loop type**: `main-query`

You can use that preset as-is, or create your own Main Query loop preset if you want different defaults.

### Default arguments (built-in preset)[​](_loops_main-query.md#default-arguments-built-in-preset)

The built-in preset is designed to be easy to control via [Loop Arguments](_loops_loop-arguments.md):

*   `posts_per_page` uses `$count ?? 10`
*   `orderby` uses `$orderby ?? 'date'`
*   `order` uses `$order ?? 'DESC'`
*   `offset` uses `$offset ?? 0`

That means you can reuse the same loop and just pass different values per template or per component.

## Using a Main Query loop in markup[​](_loops_main-query.md#using-a-main-query-loop-in-markup)

Basic usage:
```
{#loop mainQuery as item}

## {item.title}

  [Read more](_%7Bitem.permalink.relative%7D.md){/loop}
```
Override how many items are shown:
```
{#loop mainQuery($count: 3) as item}

## {item.title}

{/loop}
```
Override ordering (strings should be quoted):
```
{#loop mainQuery($orderby: "title", $order: "ASC") as item}

## {item.title}

{/loop}
```
Show all posts (WordPress convention: `-1` means “no limit”):
```
{#loop mainQuery($count: -1) as item}

## {item.title}

{/loop}
```
## Dynamic data keys (same as other loops)[​](_loops_main-query.md#dynamic-data-keys-same-as-other-loops)

Main Query loop items use the **same dynamic data system** as any other post loop in Etch.

*   Use `{item.title}`, `{item.excerpt}`, `{item.image.url}`, `{item.author.displayName}`, etc.
*   For the full list of available keys, see [Dynamic Data Keys](_dynamic-data_dynamic-data-keys.md).
*   For an intro to how dynamic data works in general, see [Dynamic Data Intro](_dynamic-data_dynamic-data-intro.md).

## `item.main.*` (advanced passthrough)[​](_loops_main-query.md#itemmain-advanced-passthrough)

Main Query loops also support an **escape hatch** for integrations: `item.main.*`.

*   **What it is**: a passthrough object that can contain the **raw main query item data** (for example, if a third-party plugin attaches extra fields to posts during the main query).
*   **Why it exists**: Etch’s standard loop item (`item.*`) is normalized into Etch’s dynamic data shape. `item.main.*` exists so you can access any **extra/unmapped fields** without Etch transforming them.

Example:
```
{#loop mainQuery as item}

## {item.title}
```
{item.main.some_special_field_from_third_party_plugin}
```
{/loop}
```
caution

`item.main.*` is meant for advanced cases and may vary depending on the active theme/plugins and what they attach to the main query results. Prefer `item.*` for normal template work.

## See Also[​](_loops_main-query.md#see-also)

* [Loops](_loops_basic-loops.md)
* [Loop Arguments](_loops_loop-arguments.md)
* [Nested Loops](_loops_nested-loops.md)
* [Dynamic Data Keys](_dynamic-data_dynamic-data-keys.md)

#### _loops_nested-loops.md

> Source: https://docs.etchwp.com/loops/nested-loops
> Scraped: 10.03.2026 08:20:46

Nested loops in Etch allow you to repeat content within another loop, enabling you to display hierarchical or related data, such as categories with their posts, or authors with their books.

## Example: WP Query (Categories and Posts)[​](_loops_nested-loops.md#example-wp-query-categories-and-posts)

Suppose you want to display a list of categories, and under each category, a list of posts in that category:

**Parent Loop (Categories):**
```
// Query for all categories$category_args = [  'taxonomy' => 'category',  'hide_empty' => false];
```
**Nested Loop (Posts in Category):**
```
// Query for posts in the current category$post_args = [  'post_type' => 'post',  'posts_per_page' => 5,  'orderby' => 'date',  'order' => 'DESC',  'post_status' => 'publish',  'cat' => $cat // Use the current category\'s term_id];
```
*   Add a Loop element for categories, then inside it, add another Loop element for posts, using the current category's ID.
*   The outer loop syntax would be: `{#loop categories as category}`
*   The inner loop syntax would be: `{#loop posts($cat: category.id) as post}`

tip

The key relationship here is passing the `category.id` (term\_id) from the parent loop into the nested loop's `$cat` parameter. This creates the parent-child relationship, ensuring that each nested loop only displays posts belonging to the current category in the outer loop. Without this connection, the nested loop would show all posts regardless of category.

* * *

## Example: Custom Post Types and Custom Taxonomies[​](_loops_nested-loops.md#example-custom-post-types-and-custom-taxonomies)

Nested loops are particularly useful when working with Custom Post Types (CPTs) and their associated Custom Taxonomies. This example demonstrates how to display **Project Statuses** (`project-status`) and the **Projects** (`project`) within each status:

**Parent Loop (Project Status Taxonomy):**
```
// Query for all project statuses$query_args = [  'taxonomy' => 'project-status',  'orderby' => 'name',  'order' => 'ASC'];
```
**Nested Loop (Projects in each Status):**
```
// Query for projects with the current status$query_args = [  'post_type' => 'project',  'posts_per_page' => 10,  'post_status' => 'publish',  'orderby' => 'date',  'order' => 'DESC',  'tax_query' => [    [      'taxonomy' => 'project-status',      'field' => 'term_id',      'terms' => $status // Use the current status' term_id    ]  ]];
```
*   Add a Loop element for project statuses, then inside it, add another Loop element for projects.
*   The outer loop syntax would be: `{#loop project-status as status}`
*   The inner loop syntax would be: `{#loop projects($status: status.id) as project}`
*   This pattern works for any post type and its associated custom taxonomies.

tip

Just like in the Categories example, we're passing the `status.id` (which is the `term_id`) from the parent loop into the nested loop's `$status` parameter. This creates the relationship between the taxonomy term and its associated posts, ensuring each nested loop only shows projects with the current status. The main difference here from the previous example is that with custom taxonomies, we use the `tax_query` parameter instead of the `cat` parameter which is specific to the default Category taxonomy.

* * *

Suppose you have a list of authors, each with a list of books:
```
[    {        "name": "Jane Austen",        "books": [            { "title": "Pride and Prejudice" },            { "title": "Sense and Sensibility" }        ]    },    {        "name": "Mark Twain",        "books": [            { "title": "Adventures of Huckleberry Finn" },            { "title": "The Adventures of Tom Sawyer" }        ]    }]
```
*   Add a Loop element and set the data source type to JSON (use the above data).
*   Inside the author loop, add another Loop element and set its data source to `{item.books}`.
*   Add a child element (e.g., Heading) inside the nested loop and use `{item.title}` to display each book's title.

* * *

## See Also[​](_loops_nested-loops.md#see-also)

* [Loops](_loops_basic-loops.md)

#### _migration-guides_v1-migration.md

> Source: https://docs.etchwp.com/migration-guides/v1-migration
> Scraped: 10.03.2026 08:20:37

## Migrating to 1.0.0

Version **1.0.0** is the first stable release and marks the end of active support for pre-alpha, alpha, and beta versions. **We strongly recommend migrating to v1.0.0 as soon as possible** to ensure continued compatibility, stability, and access to ongoing improvements and fixes.

If you’re running a pre-alpha, alpha, or beta instance, migrating to v1 requires stepping through the release stages in order rather than upgrading directly. **Skipping intermediate versions may result in incomplete migrations or data loss.**

This guide outlines the recommended upgrade path and what to expect during the process. While migration steps are provided wherever possible, some breakages are unavoidable due to intentional breaking changes introduced over the course of development—particularly in early pre-alpha and alpha releases.

Before you begin, ensure you have **full backups** and allow time to **validate your instance** after each upgrade step.

## Recommended Migration Path[​](_migration-guides_v1-migration.md#recommended-migration-path)

### 1\. Back up your instances[​](_migration-guides_v1-migration.md#1-back-up-your-instances)

Create a full backup of your instances before starting. This allows you to safely roll back if anything goes wrong during the migration.

### 2\. Upgrade pre-alpha and alpha instances to the latest alpha[​](_migration-guides_v1-migration.md#2-upgrade-pre-alpha-and-alpha-instances-to-the-latest-alpha)

Upgrade all pre-alpha and early alpha instances to **`1.0.0-alpha-15`**.
This release includes required migration steps and **must not be skipped**.

When opening Etch on `alpha-15`, a modal will appear prompting you to complete the migration process. Follow the instructions in the modal carefully to ensure a successful upgrade.

### 3\. Upgrade alpha and beta instances to the latest beta[​](_migration-guides_v1-migration.md#3-upgrade-alpha-and-beta-instances-to-the-latest-beta)

Once you are on the latest alpha, upgrade to the most recent beta release to transition to the stabilized pre-v1 architecture.

The latest beta release is **`1.0.0-beta-15`**.

### 4\. Upgrade beta or RC instances straight to 1.0.0[​](_migration-guides_v1-migration.md#4-upgrade-beta-or-rc-instances-straight-to-100)

Finally, upgrade from the latest beta or RC to **`1.0.0`**.

## Known Caveats[​](_migration-guides_v1-migration.md#known-caveats)

Even when following the recommended path, you may encounter issues—especially when migrating from pre-alpha or early alpha versions. This is expected due to breaking changes introduced during development, including:

*   The move to **custom Gutenberg blocks**, which requires data migration in `alpha-15`
*   Changes to how **dynamic data** is handled
*   Structural refinements to internal APIs and block definitions

#### _responsive-development_container-queries.md

> Source: https://docs.etchwp.com/responsive-development/container-queries
> Scraped: 10.03.2026 08:20:49

Container queries are a powerful CSS feature that allows you to style elements based on the available space they're placed in, rather than the viewport. This enables more modular and reusable components that adapt to their context, regardless of where they're placed on the page.

info

Container queries are fundamentally different from media queries. While media queries respond to the size of the viewport (the device or browser window), container queries respond to available space, enabling truly context-aware responsive design. To learn more about the philosophy behind this approach and why Etch promotes container queries over traditional breakpoints, see the [Philosophy](_responsive-development_philosophy.md) article.

## How Container Queries Work[​](_responsive-development_container-queries.md#how-container-queries-work)

Container queries require two things:

1.  **A query container** — a parent element that tracks its own size
2.  **A container query rule** — a style block that applies when the container reaches a certain size

### Step 1: Define a container[​](_responsive-development_container-queries.md#step-1-define-a-container)

A parent element needs `container-type: inline-size` to become a query container. This tells the browser to track the element's inline (horizontal) size so that descendant elements can query against it.

The most effective way to do this is with the "Has Me" selector — `:has(> &)`. Instead of manually adding `container-type` to a specific parent class, you declare it from the component/block itself:
```
.card {	:has(> &) {		container-type: inline-size;	}}
```
This targets whatever element is the direct parent of `.card` and sets it as a container. The advantage is that the component carries its container context with it — no matter where `.card` is placed, the parent automatically becomes the query container. You don't have to remember to add `container-type` to a separate selector, and the component remains fully portable.

Etch can auto-insert the "Has Me" selector for you via the responsive controls — just click the "Has Me" icon in the CSS Quick Actions Bar. It's recommended to add it before writing any container queries.

![Has Me button in Etch's CSS Quick Actions Bar](https://docs.etchwp.com/assets/images/etch-has-me-button-11086162546a0322f6edb5f715f74ebb.png)

You can also define a container manually on a specific parent if needed:
```
.card-grid {	container-type: inline-size;}
```
This approach works fine, but couples the container query behavior to a specific parent. If `.card` moves to a different context, you'd need to ensure the new parent also has `container-type` set.

### Step 2: Write a container query[​](_responsive-development_container-queries.md#step-2-write-a-container-query)

Once a container is defined, you need a `@container` rule to apply styles based on the container's width.

The easiest way to do this in Etch is with **auto container query insertion**. Drag the canvas to the point where your design needs to change, and click the container query button in the CSS Quick Actions Bar. Etch will auto-insert an `@container` block using the selected element's exact measurement as the query condition — no manual pixel values needed. The CSS Quick Actions Bar then resets so you can immediately start adding styles inside the query.

![Container query button in Etch's CSS Quick Actions Bar](https://docs.etchwp.com/assets/images/etch-container-query-button-cd9b76420c1e30b952eb59b6d54040d7.png)

The result looks like this:
```
.card {	display: grid;	gap: 1rem;	:has(> &) {		container-type: inline-size;	}	@container (width >= 500px) {		grid-template-columns: 200px 1fr;	}}
```
In this example, `.card` switches to a two-column layout when its container is at least 500px wide — regardless of the viewport size. The same card could appear in a full-width section, a sidebar, or a grid column, and it adapts to each context automatically.

## Container Queries in Etch[​](_responsive-development_container-queries.md#container-queries-in-etch)

Etch streamlines the container query workflow so you rarely have to write query conditions by hand.

### Auto query insertion[​](_responsive-development_container-queries.md#auto-query-insertion)

When you have an element selected and drag the canvas to a size where you want responsive changes:

1.  Etch displays the **exact measurement** of the selected element
2.  Click the container query button in the responsive controls
3.  Etch auto-inserts a `@container` block using the element's current measurement as the query condition
4.  The CSS Quick Actions Bar resets so you can immediately add styles

This means your container query breakpoints are always driven by the actual dimensions where your design needs to change.

### Auto "Has Me" insertion[​](_responsive-development_container-queries.md#auto-has-me-insertion)

The responsive controls also include a dedicated button to auto-insert the `:has(> &)` container declaration. Use this before adding your first container query on a selector.

## When to Use Container Queries[​](_responsive-development_container-queries.md#when-to-use-container-queries)

Container queries are the right choice when a component's layout should depend on **how much space it has**, not how big the screen is. This covers most responsive scenarios:

*   **Cards** that switch between stacked and horizontal layouts
*   **Navigation** that collapses based on available width
*   **Sidebars** that reorganize when the main content area shrinks
*   **Grid items** that adapt as column counts change
*   **Any reusable component** that might appear in different contexts

|  | Container Queries | Media Queries |
| --- | --- | --- |
| **Responds to** | Available space (parent container) | Viewport size (browser window) |
| **Best for** | Component-level responsiveness | Global layout and viewport concerns |
| **Reusability** | Components adapt to any context | Components tied to viewport assumptions |
| **Etch's recommendation** | Primary tool for responsive design | Use when you specifically need viewport awareness |

For scenarios where you do need viewport-based queries, see [Using Media Queries](_responsive-development_using-media-queries.md).

## Syntax Reference[​](_responsive-development_container-queries.md#syntax-reference)

### Basic container query[​](_responsive-development_container-queries.md#basic-container-query)
```
.component {	@container (width >= 400px) {		/* styles when container is at least 400px */	}}
```
### With "Has Me" for automatic container context[​](_responsive-development_container-queries.md#with-has-me-for-automatic-container-context)
```
.component {	:has(> &) {		container-type: inline-size;	}	@container (width >= 400px) {		/* styles when container is at least 400px */	}}
```
### Multiple query thresholds[​](_responsive-development_container-queries.md#multiple-query-thresholds)
```
.component {	/* Base: single column, stacked */	:has(> &) {		container-type: inline-size;	}	@container (width >= 400px) {		/* Mid-size adjustments */	}	@container (width >= 700px) {		/* Larger container adjustments */	}}
```
### Using @custom-media tokens[​](_responsive-development_container-queries.md#using-custom-media-tokens)

If you have recurring container query conditions, define them as `@custom-media` tokens and reference them by name:
```
.component {	:has(> &) {		container-type: inline-size;	}	@container (--component-wide) {		grid-template-columns: 200px 1fr;	}}
```
See [Custom Media](_responsive-development_custom-media.md) for setup details.

#### _responsive-development_custom-media.md

> Source: https://docs.etchwp.com/responsive-development/custom-media
> Scraped: 10.03.2026 08:20:49

## Custom Media (Tokenized Media & Container Queries)

Since:

1.2.0

Etch supports CSS `@custom-media` definitions so you can tokenize your most common media/container queries once and reuse them throughout your project.

This is especially useful when you want consistent sizing for responsiveness (for example: `--small`, `--nav-collapse`, `--wide-layout`) without copying and pasting query conditions across multiple selectors.

This feature follows the `@custom-media` CSS spec being developed by the CSS Working Group. Etch isn’t inventing a new syntax here — it’s bringing `@custom-media` to Etch users early, ahead of broad native browser support.

## Enable the feature[​](_responsive-development_custom-media.md#enable-the-feature)

`@custom-media` support is currently gated behind the Etch experimental settings toggle.

Once enabled, Etch will create a Global Stylesheet named **Custom Media Definitions** where you can define your custom media queries.

Add `@custom-media` rules to the **Custom Media Definitions** stylesheet:
```
/* Global (site-wide) queries */@custom-media --small-screen (width <= 600px);@custom-media --large-screen (width >= 1200px);@custom-media --landscape-wide screen and (width >= 900px) and (orientation: landscape);/* Component-specific queries */@custom-media --news-card-wide (width >= 421px);
```
Etch will extract these definitions and make them available to all other stylesheets.

## Sharing & portability[​](_responsive-development_custom-media.md#sharing--portability)

When you copy an element that uses tokenized media queries, Etch will bring along your custom media definitions.

That means if you share an element with someone else, they’ll get your `@custom-media` definitions too when they import it.

Once defined, you can reference a custom media name anywhere you would normally write a query condition.

### Global aliases in media queries[​](_responsive-development_custom-media.md#global-aliases-in-media-queries)

Global aliases are best for viewport-driven concerns like overall layout changes or top-level element behavior.
```
.my-component {	...		@media (--small-screen) {		...	}}
```
### Component-specific aliases in container queries[​](_responsive-development_custom-media.md#component-specific-aliases-in-container-queries)

Component-specific aliases are ideal when you want a component to respond to the space it has available, regardless of where it’s placed.
```
.news-card {	display: grid;	gap: 1rem;		:has(> &) {		container-type: inline-size;	}	@container (--news-card-wide) {		grid-template-columns: 160px 1fr;	}}
```
You can still use global aliases in container queries (and vice versa), but using intent-specific names like `--news-card-wide` helps keep responsive rules readable.

## Syntax & naming conventions[​](_responsive-development_custom-media.md#syntax--naming-conventions)

*   **Use `@custom-media`**, then add the token name and query condition.
*   **When choosing a token name, prefix with `--`** (required by the syntax).
*   **Use “intent-based” tokens** for clarity and maintainability
    *   e.g. `--nav-collapse`, `--sidebar-stacks`, `--content-narrow`

#### _responsive-development_intrinsic-responsiveness.md

> Source: https://docs.etchwp.com/responsive-development/intrinsic-responsiveness
> Scraped: 10.03.2026 08:20:49

Container queries and media queries are not the only way to do responsive development. In fact, many techniques achieve what we call "intrinsic responsiveness" — layouts and sizing that adapt naturally without any explicit queries.

Projects should take advantage of intrinsic responsiveness wherever possible. Every element that adapts on its own is one fewer query you need to write and maintain. The goal is to use queries only for the changes that can't be handled intrinsically.

## Fluid Typography[​](_responsive-development_intrinsic-responsiveness.md#fluid-typography)

Fluid typography scales text smoothly across the entire range of screen sizes instead of jumping between fixed sizes at breakpoints. The most common approach uses CSS `clamp()` to set a minimum size, a preferred fluid size, and a maximum size:
```
h1 {	font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem);}p {	font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);}
```
In this example, the `h1` scales fluidly between `1.75rem` and `3rem` based on the viewport width. There's no breakpoint involved — the browser calculates the right size at every width.

This is far more precise than setting `font-size: 2rem` at one breakpoint and `font-size: 3rem` at another, which creates an abrupt jump at the threshold.

[Automatic.css](https://automaticcss.com/) provides a complete fluid type scale out of the box — all heading sizes, body text, and small text scale fluidly without you needing to write any `clamp()` values.

## Fluid Spacing[​](_responsive-development_intrinsic-responsiveness.md#fluid-spacing)

The same `clamp()` technique works for spacing — margins, padding, and gaps that scale fluidly:
```
.section {	padding-block: clamp(2rem, 1rem + 4vw, 6rem);}.card-grid {	gap: clamp(1rem, 0.5rem + 2vw, 2.5rem);}
```
This eliminates the need for queries that do nothing more than adjust spacing at different sizes. The spacing responds continuously instead of in discrete steps.

You can also use fluid spacing for consistent vertical rhythm throughout a page:
```
:root {	--space-s: clamp(0.5rem, 0.3rem + 1vw, 1rem);	--space-m: clamp(1rem, 0.7rem + 1.5vw, 2rem);	--space-l: clamp(2rem, 1rem + 4vw, 4rem);}
```
[Automatic.css](https://automaticcss.com/) includes a full fluid spacing system with pre-built variables at multiple scales (xs through xxl), plus section spacing tokens — all fluid by default.

## Variable Grid Layouts (`auto-fit` and `auto-fill`)[​](_responsive-development_intrinsic-responsiveness.md#variable-grid-layouts-auto-fit-and-auto-fill)

CSS Grid's `auto-fit` and `auto-fill` keywords create layouts that automatically adjust the number of columns based on available space — no queries needed:
```
.card-grid {	display: grid;	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));	gap: 1.5rem;}
```
This creates as many columns as will fit, with each column being at least `280px` wide. On a wide screen you might get four columns; on a narrow screen, one. The transition is completely automatic.

*   **`auto-fit`** collapses empty tracks, letting existing items stretch to fill the row
*   **`auto-fill`** keeps empty tracks, maintaining the column sizing even when there aren't enough items to fill the row

For most card grids and gallery layouts, `auto-fit` is what you want.

[Automatic.css](https://automaticcss.com/) provides grid utility classes with built-in `auto-fit` and `auto-fill` support, so you can create variable-column grids without writing the `repeat(auto-fit, minmax(...))` pattern manually.

## Viewport Units (`vw`, `vh`, `dvh`, `svh`, etc.)[​](_responsive-development_intrinsic-responsiveness.md#viewport-units-vw-vh-dvh-svh-etc)

Viewport units size elements relative to the browser window, making them inherently responsive:

| Unit | Description |
| --- | --- |
| `vw` | 1% of viewport width |
| `vh` | 1% of viewport height |
| `vmin` | 1% of the smaller viewport dimension |
| `vmax` | 1% of the larger viewport dimension |
| `dvh` | 1% of dynamic viewport height (accounts for mobile browser chrome) |
| `svh` | 1% of small viewport height (smallest possible viewport) |
| `lvh` | 1% of large viewport height (largest possible viewport) |
```
.hero {	min-height: 80dvh;}.full-bleed-image {	width: 100vw;	margin-inline: calc(50% - 50vw);}
```
note

On mobile browsers, `vh` doesn't account for the address bar appearing and disappearing. Use `dvh` (dynamic viewport height) for elements that need to respond to the actual visible area.

## Relative Units (`em`, `%`, etc.)[​](_responsive-development_intrinsic-responsiveness.md#relative-units-em--etc)

Relative units make elements scale in relation to their context rather than being locked to fixed pixel values:

*   **`em`** — relative to the element's own font size. Useful for spacing that should scale with text.
*   **`%`** — relative to the parent element's corresponding property.
*   **`ch`** — the width of the "0" character. Great for constraining line lengths.
```
p {	max-width: 65ch;}.button {	padding: 0.5em 1.2em;	border-radius: 0.3em;}.sidebar {	width: 30%;	min-width: 200px;}
```
The button example is particularly useful — because the padding uses `em`, it scales proportionally if the button's font size changes. A small button and a large button maintain the same visual proportions without any extra code.

## `min()`, `max()`, and `clamp()`[​](_responsive-development_intrinsic-responsiveness.md#min-max-and-clamp)

These CSS math functions let you set dynamic, context-aware sizing constraints:

*   **`min()`** — uses the smallest of the provided values
*   **`max()`** — uses the largest of the provided values
*   **`clamp(min, preferred, max)`** — constrains a value between a minimum and maximum
```
.container {	width: min(1200px, 100% - 2rem);}
```
This sets the container to either `1200px` or the full width minus some padding — whichever is smaller. No media query needed for the container to stop growing at `1200px`.
```
.hero-title {	font-size: max(2rem, 5vw);}
```
This ensures the title is never smaller than `2rem`, even on very narrow screens, while scaling up with the viewport on larger ones.
```
.sidebar {	width: clamp(200px, 25%, 350px);}
```
The sidebar is fluid between `200px` and `350px`, preferring `25%` of its parent. It adapts to its context without any queries.

[Automatic.css](https://automaticcss.com/) uses `clamp()` extensively under the hood for its typography, spacing, and container width systems — so you get the benefits of these math functions without writing them yourself.

## Flex Wrap[​](_responsive-development_intrinsic-responsiveness.md#flex-wrap)

Flexbox's `flex-wrap` property lets items flow to the next line when there isn't enough space, creating naturally responsive layouts:
```
.tag-list {	display: flex;	flex-wrap: wrap;	gap: 0.5rem;}.tag-list > * {	flex: 0 1 auto;}
```
For layouts where you want items to share space and wrap when they get too narrow, combine `flex-wrap` with a minimum width:
```
.content-layout {	display: flex;	flex-wrap: wrap;	gap: 2rem;}.content-layout > .main {	flex: 1 1 600px;}.content-layout > .sidebar {	flex: 1 1 250px;}
```
This creates a two-column layout where the sidebar wraps below the main content when there isn't enough space for both — no query required. The `flex-basis` values (`600px` and `250px`) control when the wrapping happens.

## `aspect-ratio`[​](_responsive-development_intrinsic-responsiveness.md#aspect-ratio)

The `aspect-ratio` property maintains an element's proportions at any width, eliminating the old padding-bottom hack:
```
.video-wrapper {	aspect-ratio: 16 / 9;}.avatar {	aspect-ratio: 1;	border-radius: 50%;}.card-image {	aspect-ratio: 3 / 2;	object-fit: cover;}
```
As the element's width changes — whether from a fluid grid, a percentage width, or a container resizing — the height adjusts automatically to preserve the ratio. No queries needed.

## `object-fit`[​](_responsive-development_intrinsic-responsiveness.md#object-fit)

When images or videos are placed in containers of varying sizes, `object-fit` controls how they fill the space without distortion:
```
.card img {	width: 100%;	height: 100%;	object-fit: cover;}
```
| Value | Behavior |
| --- | --- |
| `cover` | Fills the container completely, cropping if needed — the most common choice for responsive images |
| `contain` | Fits entirely within the container, adding letterboxing if the aspect ratios don't match |
| `fill` | Stretches to fill the container (default — usually causes distortion) |
| `none` | Keeps the image's natural size, ignoring the container |

Combined with `aspect-ratio`, `object-fit: cover` is one of the most powerful intrinsic patterns — you get perfectly sized image containers that adapt to any width while the image always fills them cleanly:
```
.card img {	aspect-ratio: 3 / 2;	width: 100%;	object-fit: cover;}
```
## Combining Techniques[​](_responsive-development_intrinsic-responsiveness.md#combining-techniques)

The real power of intrinsic responsiveness comes from combining these techniques. A well-built component might use fluid typography, `clamp()` spacing, an `auto-fit` grid, and relative units — handling most of its responsive behavior without a single query.

Queries then become a tool for the few remaining changes that can't be expressed intrinsically, like switching from a horizontal navigation to a hamburger menu or rearranging a complex layout.

#### _responsive-development_philosophy.md

> Source: https://docs.etchwp.com/responsive-development/philosophy
> Scraped: 10.03.2026 08:20:46

## A New Era of Responsive Development

Every other builder in current existence promotes a traditional media query workflow with device-oriented "breakpoints."

Etch, on the other hand, promotes a **container-query-first workflow**.

This isn't just a technical difference — it's a fundamental shift in how we think about building responsive websites. And it's important for you to understand it so that you're comfortable with the approach and the interface differences.

### The Problem with Media Queries[​](_responsive-development_philosophy.md#the-problem-with-media-queries)

Media queries ask: "How big is the screen?"

Container queries ask: "How much space is available for the elements?"

This subtle difference is actually massive. With over 2,300 unique device sizes on the modern web, trying to optimize for "standard breakpoints" is increasingly meaningless.

Additionally, a card that works perfectly in your main content area might look terrible when dropped into a grid. Media queries can't solve this problem because they only know about the viewport, not the component's actual context and location on the page.

### Why Container Queries Are Better[​](_responsive-development_philosophy.md#why-container-queries-are-better)

Container queries let your components adapt to their actual available space, regardless of where they're placed and regardless of the device being used.

This means:

*   **Truly reusable components** that work anywhere
*   **No more breakpoint guessing** or arbitrary device sizes
*   **Better performance** with fewer media queries
*   **More logical responsive behavior**

Container queries solve the problem of context-based-responsiveness while simultaneously solving the problem of device-based-responsiveness. It's the best of both worlds and the future of modern responsive development.

## The Absence of Traditional "Breakpoints" in Etch[​](_responsive-development_philosophy.md#the-absence-of-traditional-breakpoints-in-etch)

If you're used to seeing predefined breakpoints (like "Mobile: 768px, Tablet: 1024px"), you won't find them in Etch. Here's why:

**Container queries don't need global breakpoints.** Each component or Block defines its own responsive behavior based on its actual context.

A card might switch layouts at 412px, while a navigation might adapt at 322px. The numbers chosen are based on the dimensions that make sense for that specific component, which is the most logical and appropriate way to build responsive websites.

Breakpoints are from Era 1, 2, and 3 of web development. Etch is an Era 4+ tool that isn't interested in copying and promoting outdated, illogical, and clearly inferior approaches to building websites.

## Making the Adjustment[​](_responsive-development_philosophy.md#making-the-adjustment)

The container-query-first workflow creates a small learning curve when you're first transitioning to it, but the benefits are well worth the adjustment.

And when I say that it's a small learning curve, I really mean it. Container queries use the exact same syntax as media queries and we're working very hard to make sure they're as easy as possible to implement in Etch.

To help make your transition feel effortless, here are three tips:

1.  **Think component-first**: Instead of "mobile vs desktop," think "how should this component/block adapt to its space?"
2.  **Embrace the flexibility**: Your components will work in more contexts than ever before
3.  **Trust the process**: The discomfort will fade as you see how much more logical this approach is

The modern web demands this shift. Container queries are the future of responsive design, and Etch is built to help you embrace that future.

## Recommended Further Reading[​](_responsive-development_philosophy.md#recommended-further-reading)

For a deeper dive into container queries vs media queries and the reasoning behind this shift, check out [Container Queries vs Media Queries: A New Era of Responsive Web Design](https://geary.co/container-queries-vs-media-queries-a-new-era-of-responsive-web-design/) by Etch's founder, Kevin Geary.

#### _responsive-development_using-media-queries.md

> Source: https://docs.etchwp.com/responsive-development/using-media-queries
> Scraped: 10.03.2026 08:20:49

While Etch promotes a [container-query-first workflow](_responsive-development_philosophy.md), there are still legitimate use cases for media queries. This guide covers when and how to use them effectively in Etch.

Media queries respond to the **viewport** — the size of the browser window or device screen. They're the right tool when your styling decisions genuinely depend on the overall screen size rather than an individual component's available space.

Common use cases include:

*   **Top-level page layout** — switching between a sidebar layout and a stacked layout based on screen width
*   **Global typography adjustments** — scaling root font sizes or line heights for different screen categories
*   **Showing or hiding global UI elements** — like a mobile hamburger menu that replaces a desktop navigation bar
*   **Print styles** — `@media print` for controlling how pages render when printed
*   **Orientation or input-based queries** — `@media (orientation: landscape)` or `@media (hover: hover)` for device capability detection

If the responsive behavior is about **a component adapting to its space**, use a [container query](_responsive-development_container-queries.md) instead. If it's about **the viewport or device itself**, a media query is appropriate.

### Auto query insertion[​](_responsive-development_using-media-queries.md#auto-query-insertion)

Etch handles media query insertion the same way it handles container queries — automatically, based on your canvas state:

1.  Drag the canvas to the width where you want a responsive change
2.  Etch displays the **exact canvas measurement** at the top of the canvas
3.  Click the media query button in the CSS Quick Actions Bar
4.  Etch auto-inserts a `@media` block using the current canvas width as the query condition
5.  The CSS Quick Actions Bar resets so you can start adding styles immediately

![Media query button in Etch's CSS Quick Actions Bar](https://docs.etchwp.com/assets/images/etch-media-query-button-fa7c087be0d46a5c9c1c2215202e5f2e.png)

This means you never have to guess at pixel values or remember arbitrary breakpoint numbers. Your media query conditions are always driven by the exact point where your design needs to change.

## Syntax Reference[​](_responsive-development_using-media-queries.md#syntax-reference)

### Basic media query[​](_responsive-development_using-media-queries.md#basic-media-query)
```
.site-header {	display: flex;	flex-direction: column;	@media (width >= 900px) {		flex-direction: row;		justify-content: space-between;	}}
```
### Max-width (mobile-first inversion)[​](_responsive-development_using-media-queries.md#max-width-mobile-first-inversion)
```
.sidebar {	@media (width <= 768px) {		display: none;	}}
```
### Range syntax[​](_responsive-development_using-media-queries.md#range-syntax)

Modern CSS supports range syntax for media queries, which is more readable than the traditional `min-width` / `max-width` approach:
```
/* Modern range syntax (recommended) */@media (width >= 600px) { }@media (width <= 900px) { }@media (400px <= width <= 800px) { }/* Traditional syntax (also valid) */@media (min-width: 600px) { }@media (max-width: 900px) { }@media (min-width: 400px) and (max-width: 800px) { }
```
Both syntaxes work in Etch. The range syntax is generally preferred for readability.

### Multiple conditions[​](_responsive-development_using-media-queries.md#multiple-conditions)
```
.element {	@media (width >= 900px) and (orientation: landscape) {		/* landscape on larger screens */	}}
```
note

Multiple conditions using `and` are not compatible with [`@custom-media` tokens](_responsive-development_custom-media.md). If you need a reusable query with multiple conditions, define the full compound condition as a single `@custom-media` rule instead.

### Non-size queries[​](_responsive-development_using-media-queries.md#non-size-queries)

Media queries aren't limited to dimensions. They can also detect device capabilities:
```
/* Only apply hover styles on devices that support hover */.button {	@media (hover: hover) {		&:hover {			background-color: var(--accent);		}	}}/* Respect user preference for reduced motion */.animated-element {	transition: transform 0.3s ease;	@media (prefers-reduced-motion: reduce) {		transition: none;	}}/* Dark mode preference */.surface {	@media (prefers-color-scheme: dark) {		background-color: var(--dark-bg);	}}
```
### Using @custom-media tokens[​](_responsive-development_using-media-queries.md#using-custom-media-tokens)

For recurring media query conditions, define them as `@custom-media` tokens to avoid repeating raw values:
```
/* In your Custom Media Definitions stylesheet */@custom-media --nav-collapse (width <= 820px);@custom-media --large-screen (width >= 1200px);
```
```
/* Then reference by name */.nav {	@media (--nav-collapse) {		/* collapsed layout */	}}.hero {	@media (--large-screen) {		padding-block: 6rem;	}}
```
See [Custom Media](_responsive-development_custom-media.md) for setup details.

If you're unsure which to use, ask yourself: "Does this style depend on the viewport, or on the space available to the component?"

*   **Viewport** → media query
*   **Available space** → [container query](_responsive-development_container-queries.md)

In practice, most component-level responsiveness is better handled with container queries. Media queries are best reserved for global layout decisions and device/user-preference detection.

#### _responsive-development_workflow.md

> Source: https://docs.etchwp.com/responsive-development/workflow
> Scraped: 10.03.2026 08:20:49

This guide walks through a practical, start-to-finish workflow for building fully responsive pages and components in Etch. If you follow this approach, you'll end up with designs that respond smoothly across the entire range of device sizes — not just at a handful of arbitrary breakpoints.

## Step 1: Build the structure and add your selectors[​](_responsive-development_workflow.md#step-1-build-the-structure-and-add-your-selectors)

Before thinking about responsiveness, focus on building the HTML structure for your page or component. Add your elements, nest them properly, and assign your CSS selectors (classes, IDs, etc.) using the selector bar (`Cmd/Ctrl + Enter`).

Getting a clean, semantic structure in place first gives you a solid foundation. Responsive adjustments are much easier when your markup is well-organized and your selectors are already attached.

## Step 2: Style mobile-first (recommended)[​](_responsive-development_workflow.md#step-2-style-mobile-first-recommended)

While Etch doesn't force any particular direction, starting from the smallest canvas size and working up is generally more efficient. Here's why:

*   **Less code overall.** Small-screen layouts tend to be simpler — usually a single column with stacked elements. Writing your base styles for this simple layout means your responsive queries only need to _add_ complexity (like multi-column grids) rather than _undo_ it.
*   **Progressive enhancement.** You're layering on enhancements as space becomes available, which is more logical than writing complex layouts first and then overriding them for smaller screens.
*   **Fewer overrides.** Desktop-first workflows often require more `max-width` queries to strip away styles at smaller sizes. Mobile-first naturally avoids this.

In most other page builders, working desktop-down is often more practical — not because it's the better approach in theory, but because those tools are built around fixed breakpoint systems with inefficient styling panels, no canvas measuring, and no auto-query insertion. Their workflows simply aren't optimized for mobile-first development, so fighting against their grain costs you time.

Etch is different. It's a fully featured responsive development environment with a fluid canvas, precise auto-measuring, and automatic query generation. These tools remove the friction that makes mobile-first tedious in other builders, letting you take the approach that actually produces cleaner, more efficient code.

That said, this is a recommendation, not a requirement. Some components or layouts genuinely make more sense to style desktop-first. Use your judgment.

## Step 3: Use the dynamic canvas and auto-generated queries[​](_responsive-development_workflow.md#step-3-use-the-dynamic-canvas-and-auto-generated-queries)

This is where Etch's responsive workflow really shines compared to traditional builders.

1.  **Drag the canvas** using the responsive handles to preview your design fluidly across the full range of sizes. There are no preset "breakpoints" to click through — you see exactly how your design behaves at every width.
2.  **Spot where things break.** As you drag, you'll notice points where your layout stops working well — text overflows, columns get too narrow, spacing looks off. These are the points where you need responsive adjustments.
3.  **Let Etch generate the query.** When you find a point that needs a change, use the responsive controls to auto-insert a container query or media query. Etch reads the current canvas measurement (for media queries) or element measurement (for container queries) and writes the query condition for you with the exact value.
4.  **Add your style changes inside the query.** Once Etch inserts the query block, the CSS Quick Actions Bar resets so you can immediately start adding the styles that should apply at that size — no manual query writing required.

This approach means your responsive "breakpoints" are determined by your content and layout needs, not by arbitrary device sizes. Every query exists because something actually needed to change at that specific dimension.

tip

When using container queries, add the "Has Me" selector first (available in the responsive controls). This ensures your container query context is automatically established wherever the component is placed. See the [Responsive Controls](_interface_responsive-controls.md) article for details.

If you find yourself writing the same query condition across multiple selectors — for example, a width where your site's navigation collapses, or a size threshold shared by several card components — define it as a `@custom-media` token.
```
@custom-media --nav-collapse (width <= 820px);@custom-media --card-wide (width >= 421px);
```
Then reference the token instead of repeating raw values:
```
.nav {	@media (--nav-collapse) {		/* collapsed nav styles */	}}
```
Named tokens make your responsive code more readable, easier to maintain, and portable when sharing components. See the [Custom Media](_responsive-development_custom-media.md) article for setup details.

## The result: full-range responsiveness[​](_responsive-development_workflow.md#the-result-full-range-responsiveness)

When you follow this workflow — clean structure, mobile-first base styles, content-driven queries via the dynamic canvas, and named tokens for shared conditions — your designs won't just work at "mobile, tablet, and desktop." They'll work smoothly at every size in between.

This is the core difference between Etch's approach and traditional breakpoint-based builders. Instead of optimizing for three or four snapshot sizes and hoping everything in between looks acceptable, you're building a design that genuinely responds to available space throughout the entire device range.

#### _templates_archive-templates.md

> Source: https://docs.etchwp.com/templates/archive-templates
> Scraped: 10.03.2026 08:20:51

Archive templates control how WordPress displays lists of posts that belong to categories, tags, CPTs, authors, and date-based archives.

## When to Use Archive Templates[​](_templates_archive-templates.md#when-to-use-archive-templates)

Archive templates are automatically used by WordPress when:

*   A user visits a **post type archive** (e.g. `/services/` for a custom post type)
*   Someone clicks on a **category** or **tag** link (to see all the posts in that taxonomy)
*   A user navigates to a **date-based archive** (e.g., posts from a specific month or year)
*   WordPress needs to display a **collection of posts** rather than a single post

"Post" Archive Warning

The native "Post" post type in WordPress, which is typically used for blog posts, does not have any native archive functionality. The only way to loop through posts is to create a page called "Blog" or "Articles" (or similar) and then loop through posts using a standard post loop.

## Building Archive Pages Automatically With the Main Query Loop[​](_templates_archive-templates.md#building-archive-pages-automatically-with-the-main-query-loop)

The best way to build an archive template is with the **Main Query** loop. Unlike regular WP Query loops that require you to manually specify which posts to display, the Main Query loop automatically inherits WordPress's current query context.

This means:

*   On a category page, it automatically shows posts from that category
*   On a post type archive, it automatically shows posts of that type
*   On a date archive, it automatically shows posts from that date range
*   Pagination works automatically

[Read More: Main Query Loop](_loops_main-query.md)

## Dynamic Data for Archive Templates[​](_templates_archive-templates.md#dynamic-data-for-archive-templates)

For a complete list of available dynamic data keys, see [Dynamic Data Keys](_dynamic-data_dynamic-data-keys.md).

#### _templates_author-template.md

> Source: https://docs.etchwp.com/templates/author-template
> Scraped: 10.03.2026 08:20:52

[Skip to main content](#__docusaurus_skipToContent_fallback)
# Author Template

More to come...

#### _templates_index-template-catch-all.md

> Source: https://docs.etchwp.com/templates/index-template-catch-all
> Scraped: 10.03.2026 08:20:51

The index template is the most fundamental template in WordPress and serves as the ultimate fallback for all content types. Think of it as the safety net that ensures your website always has a way to display content, regardless of what specific template might be missing.

## When is the Index Template Used?[​](_templates_index-template-catch-all.md#when-is-the-index-template-used)

The index template is used in these scenarios:

*   **No specific template exists**: When WordPress can't find a more specific template for the current request.
*   **Missing templates**: If you haven't created templates for certain content types (like single posts, archives, etc.).
*   **Custom post types**: When custom post types don't have their own templates.
*   **Taxonomy pages**: When taxonomy archive pages don't have specific templates.
*   **Search results**: When no search template exists.
*   **404 pages**: When no 404 template exists.

## The Template Hierarchy[​](_templates_index-template-catch-all.md#the-template-hierarchy)

WordPress follows a specific template hierarchy when deciding which template to use. The index template sits at the very bottom of this hierarchy:

1.  **Most specific templates first** (like `single-post.php`, `archive.php`, etc.)
2.  **Generic templates** (like `single.php`, `archive.php`)
3.  **Index template** (the final fallback)

This means WordPress will try to use more specific templates first, and only use the index template if none of the others exist or match the current request.

## Setting Up Your Index Template[​](_templates_index-template-catch-all.md#setting-up-your-index-template)

The Index template is already created for you. All you have to do is edit it!

Since the index template is a catch-all, it's the template that should contain, at minimum:

*   **Header**: Your header component.
*   **Content Slot**: An Etch element that pulls the requested data from WordPress.
*   **Footer**: Your footer component.

Open Etch, navigate to the Template Manager, and click "edit" on the Index template.

**Follow these steps:**

1.  Create a header and save it as a component.
2.  Create a footer and save it as a component.
3.  Add a Div between the header and footer components and change the HTML tag to `main`.
4.  Add a Content Slot element.
5.  Hit save.

You now have a template that will render every page of your website with a header and footer and any content pulled from WordPress will be placed inside a semantic `main` tag. That's all you have to do here.

You can test out your template by visiting the home page of your website. You should now see, at minimum, your header and footer. Well done!

#### _templates_intro-to-templates.md

> Source: https://docs.etchwp.com/templates/intro-to-templates
> Scraped: 10.03.2026 08:20:51

Templates are the foundation of your website's structure and content organization. Think of them as the architectural blueprints that determine how your content is displayed across different pages and contexts.

While a website might have 100 URLs, there's a good chance that a vast majority of those URLs are generated by templates.

Good development practices suggest that you should consider creating a template any time multiple URLs are going to render the exact same layout and content type.

## Mandatory Templates[​](_templates_intro-to-templates.md#mandatory-templates)

WordPress requires a few core templates to ensure your site displays content correctly. The most important mandatory template is the **index template** (`index`), which acts as the ultimate fallback for all content types. If no other, more specific template matches a request, WordPress will use the index template to render the page.

**At minimum, every WordPress site must have:**   **Index Template (`index`)**: The catch-all template. If you only have one template, it should be this one.

## Recommended Templates[​](_templates_intro-to-templates.md#recommended-templates)

The following templates are not required, but are highly recommended:

*   **Single Template (`single`)**: For displaying individual blog posts (if the site has a blog).
*   **Archive Template (`archive`)**: For displaying lists of posts, such as blog archives, category pages, or custom post type listings. This template is used whenever WordPress needs to show a collection of items rather than a single post or page.
*   **Author Template (`author`)**: For displaying posts written by a specific author, often including the author's bio and a list of their posts (if the site has a blog).
*   **404 Template (`404`)**: For handling "Page Not Found" errors.

## Why Templates Matter[​](_templates_intro-to-templates.md#why-templates-matter)

Templates provide several key benefits:

*   **Consistency**: Ensure a uniform look and feel across your specific parts of your website.
*   **Efficiency**: Create once, use everywhere - templates eliminate repetitive design & dev work.
*   **Maintainability**: Update a template once to change the appearance of all pages using it.
*   **Scalability**: Easily add new pages that follow your established design patterns.
*   **User Experience**: Provide predictable navigation and content presentation.

## WordPress FSE Integration[​](_templates_intro-to-templates.md#wordpress-fse-integration)

All templates created in Etch are automatically authored to WordPress' Full Site Editing (FSE) templating system. This liberates your templates the same way your page development is liberated into custom blocks.

## Getting Started[​](_templates_intro-to-templates.md#getting-started)

In the following sections, you'll learn how to create, customize, and manage templates in Etch. You'll discover how to build templates from the ground up, how to work with dynamic content, and how to create variations for different page types.

Remember, templates are not just about visual design - they're about creating a systematic approach to content presentation that serves both your users and your content management needs.

#### _templates_page-templates.md

> Source: https://docs.etchwp.com/templates/page-templates
> Scraped: 10.03.2026 08:20:52

warning

It is our official stance that WordPress page templates are dinosaur architecture. While you can create them, you're almost always better off creating a Custom Post Type and using CPT-related templates.

Page templates in Etch are created from the Posts/Pages column in the Template Manager.

Currently, it's only possible to create a template that would override your index template for any page-based content. Since pages tend to be unique in layout and content, they typically don't need to be templated. We'll be producing more content in the future as to why templating pages is not a great idea. For now, we recommend turning your attention to Custom Post Types, components, and patterns.

#### _templates_post-content-slot.md

> Source: https://docs.etchwp.com/templates/post-content-slot
> Scraped: 10.03.2026 08:20:49

The **Post Content** tag pulls Gutenberg-based content into Etch. It's used almost exclusively when creating templates.

Instead of pulling Gutenberg's content into a template with a dynamic data tag like `{this.content}`, you should pull Gutenberg's content with Post Content `{@post-content}`.

When editing a template, you'll see the icon for the Post Content Slot in the Element Bar:

Click that icon and Etch will insert a Post Content Slot for you automatically.
```
    {@post-content}
```
It's your job as a developer to determine where the content should be appropriately injected into any given template based on the structure of that template.

Note about @post-content "slot"

The @post-content dynamic data tag is sometimes referred to as a "slot," but it's a specialized dynamic data tag that is not subject to slot logic the way other slots are. Don't try to use slot logic on this tag.

#### _templates_search-results-template.md

> Source: https://docs.etchwp.com/templates/search-results-template
> Scraped: 10.03.2026 08:20:51

A Search Results Template displays the results of an internal site search.

To build a functional search results template, you'll need:

1.  The template itself (via Etch).
2.  A loop that uses WordPress's **main query** to display the results.
3.  (Optional) Loop arguments to control how many results are shown. You can see the available query arguments for `mainQuery` in the Loop Manager and use them as loop arguments.
4.  A search form (custom or pre-made).

Follow the steps below to build a search results template in Etch.

## Step #1: Create the Template[​](_templates_search-results-template.md#step-1-create-the-template)

![Search Results Template in Etch](https://docs.etchwp.com/assets/images/etch-search-results-template-7c0649a14f67301e9308caba3f9b2f5c.webp)

From the Etch Template Manager, click the plus sign next to "Miscellaneous" and then choose "Search Results."

This will generate a WordPress search results template.

Once the template appears in the Misc column, hover over its thumbnail area and click "edit."

## Step #2: Configure the Loop with the WordPress Main Query[​](_templates_search-results-template.md#step-2-configure-the-loop-with-the-wordpress-main-query)

You can add whatever content you want to the search results template, but the heart of the template is the loop that will dynamically display a visitor's search results.

On a search results template, WordPress already builds a **main query** that contains the visitor's search results based on the `s` parameter in the URL. In most cases, you don't need to configure a separate custom loop. You can simply use Etch's `mainQuery` data source, which is pre-configured to work with WordPress's search results. For a deeper dive into how `mainQuery` works, see [Main Query Loops](_loops_main-query.md).

The simplest version looks like this:
```
{#loop mainQuery as item}  {/loop}
```
This will iterate over whatever WordPress has already queried for the search results page.

If you want more control (for example, limiting the number of results shown in this specific loop), you can use [loop arguments](_loops_loop-arguments.md) with `mainQuery`:
```
{#loop mainQuery($count: 10) as item}  {/loop}
```
`$count` here is a loop argument that tells Etch how many items to return from the main query for this loop.

Once your loop is in place, you can add whatever markup you want inside it to display each search result.

At a minimum, you might include a heading with a link inside it. The heading would display `{item.title}` and the link would point to `{item.permalink.relative}`. For example:
```
{#loop mainQuery as item}

## [{item.title}](_%7Bitem.permalink.relative%7D.md)

{/loop}
```
This will output a list of search result titles, each linked to its corresponding post or page.

When you first create a Search Results template in Etch, the generated markup is typically just a `<main>` element with a `{@post-content}` element inside it. This needs to be replaced with your custom search layout when using `mainQuery`.

Here's an example of a more complete search archive layout:
```
            # Search results for: {url.parameter.s}

      {#loop mainQuery as item}

## [{item.title}](_%7Bitem.permalink.relative%7D.md)

{item.excerpt}

              {/loop}
```
You can customize the classes and structure to match your design system, but the core idea is the same: use `{#loop mainQuery as item}` to iterate over search results, then map `item` fields (like `title`, `permalink.relative`, and `excerpt`) into your markup.

## Step #3: Add a Search Form[​](_templates_search-results-template.md#step-3-add-a-search-form)

You can add a search form in WordPress any number of ways. Our recommended approach at this time is to use [WS Form](https://gearyco.link/wsform). There's a 1-click search results form template in both the free and pro version.

#### _templates_single-post-templates.md

> Source: https://docs.etchwp.com/templates/single-post-templates
> Scraped: 10.03.2026 08:20:51

Single post templates control how individual blog posts are displayed on your website. These templates are essential for any site with a blog or content that needs individual post pages.

## When to Use Single Post Templates[​](_templates_single-post-templates.md#when-to-use-single-post-templates)

Single post templates are automatically used by WordPress when:

*   A user clicks on a blog post title from an archive or listing page
*   Someone visits a direct URL to a specific blog post
*   You want to display individual posts with full content, metadata, and related elements

## Key Dynamic Data Keys[​](_templates_single-post-templates.md#key-dynamic-data-keys)

When building single post templates, you have access to all the standard dynamic data keys using the `this.` prefix.

For example, `this.title` will display the title of the post. You can see [all dynamic data keys here](_dynamic-data_dynamic-data-keys.md).

#### _templates_template-manager.md

> Source: https://docs.etchwp.com/templates/template-manager
> Scraped: 10.03.2026 08:20:51

![Template Manager UI](https://docs.etchwp.com/assets/images/template-manager-edf57b3cb57cef405b11fa1d10682b3f.webp)

Etch allows you to create and manage templates at any time via the template manager.

This area of Etch presents your site's templates in a column-based layout, giving you a convenient overview of you site's architecture.

As you create new content types (custom post types) or taxonomies, new columns will show up here to signify that new templates can be created.

Remember, every template created here is automatically authored to WordPress' FSE templating system, so you're always fully synced with core WordPress.

#### _templates_template.md

> Source: https://docs.etchwp.com/templates/template
> Scraped: 10.03.2026 08:20:51

The 404 template is displayed when a user visits a URL that doesn't exist on your website. This template is crucial for maintaining a good user experience and helping visitors find what they're looking for when they encounter broken or mistyped links.

## When the 404 Template is Used[​](_templates_template.md#when-the-404-template-is-used)

WordPress automatically displays the 404 template when:

*   A user visits a URL that doesn't match any existing content
*   A post or page has been deleted but the URL is still being accessed
*   Someone types an incorrect URL
*   A link points to content that no longer exists
*   Search engines or other sites link to outdated URLs

## Creating a 404 Template[​](_templates_template.md#creating-a-404-template)

You can create a 404 template from Etch's Template Hub, within the Miscellaneous area.

#### _top-priorities.md

> Source: https://docs.etchwp.com/top-priorities
> Scraped: 10.03.2026 08:20:36

## Current Priorities

This page outlines the key areas we're focusing on most actively, but it's important to understand that priorities can change quickly based on various factors:

1.  **Our vision** - What we think needs to happen next.
2.  **Real-world use cases** - Where people are getting stuck.
3.  **User feedback** - What people are saying about their experience.

**This page should not be treated as a fixed roadmap.** It's a fluid and flexible attempt to communicate what's currently important. It's also limited to the top 5 large-scale items across two different categories because prioritization beyond that is too fluid to worry about.

note

Bug fixes, general improvements, and minor features are not listed here. The purpose of this page is for communicating larger-scale priorities. It goes without saying that bug fixes and general improvements are always a top priority.

| Feature | Description |
| --- | --- |
| **Native AI** | Agent-powered workflow |
| **Expanded Component Functionality** | Groups, Repeaters |
| **Components API** | A way for 3rd party devs to create/register native Etch elements for custom functionality and for internal use for creating Etch dynamic elements. |

## High Priority Items (Soon)[​](_top-priorities.md#high-priority-items-soon)

| Feature | Description |
| --- | --- |
| **PHP Authoring** | PHP authoring inside the HTML editor |
| **Native Components** | Prioritization of our native [components (native)](_components-native_overview.md). |
| **Recipes** | Custom/importable/exportable code snippets for maximum development efficiency. |
| **Facets/Filters** | Facets and filters for loops. |
| **Loop Through External API** | External API support for loops. |
| **Shortcuts** | Customizable shortcut architecture |

We actively monitor user feedback and feature requests to ensure our priorities align with what matters most to our users. If you have suggestions for improvements or encounter issues, please let us know so we can incorporate your feedback into our development plans.

#### _troubleshooting_activity-log.md

> Source: https://docs.etchwp.com/troubleshooting/activity-log
> Scraped: 10.03.2026 08:20:39

Etch includes an activity log that records structured information about plugin operations. When you report an issue, this log helps us understand what happened alongside the reproduction steps you provide.

## How It Works[​](_troubleshooting_activity-log.md#how-it-works)

The activity log captures one event per request — what operation was attempted, whether it succeeded or failed, and relevant context. Errors are always logged so problems are never missed, while successful requests are sampled to keep file sizes manageable. The log automatically rotates so it won't fill your disk.

## What Data Is Collected[​](_troubleshooting_activity-log.md#what-data-is-collected)

The activity log records operational data — things like request URLs, plugin version, timing, and success/failure status. It does not collect passwords, personal information, or authentication tokens.

This feature is evolving as we refine our support workflows, so the specific data points logged may change over time.

## Log File Location[​](_troubleshooting_activity-log.md#log-file-location)

The activity log is stored at:
```
wp-content/uploads/etch/activity.log
```
You can safely delete these files if you want to clear your logs.

## Security[​](_troubleshooting_activity-log.md#security)

### Apache / LiteSpeed (Automatic)[​](_troubleshooting_activity-log.md#apache--litespeed-automatic)

Etch automatically creates an `.htaccess` file that blocks direct HTTP access to log files. No action needed.

### Nginx (Manual Configuration Required)[​](_troubleshooting_activity-log.md#nginx-manual-configuration-required)

warning

Nginx does not read `.htaccess` files. You must add this configuration to your server block:
```
location ~* /wp-content/uploads/etch/.*\.log$ {    deny all;}
```
### IIS (Manual Configuration Required)[​](_troubleshooting_activity-log.md#iis-manual-configuration-required)

warning

IIS requires manual configuration to block access to log files.

Add this to your `web.config`:

## Sharing Logs with Support[​](_troubleshooting_activity-log.md#sharing-logs-with-support)

If we ask for your activity log during troubleshooting:

1.  Navigate to `wp-content/uploads/etch/` via FTP or file manager
2.  Download `activity.log` (and any `.log.1`, `.log.2` files if they exist)
3.  Share the files through the support channel

#### _utilities_functions.md

> Source: https://docs.etchwp.com/utilities/functions
> Scraped: 10.03.2026 08:20:49

This page documents utility functions available in Etch for common development tasks.

## to-rem()[​](_utilities_functions.md#to-rem)

The `to-rem()` function converts pixel values to rem units on the front-end while maintaining proper pixel reference in the editor. This is a pure DX feature that makes your life as a developer easier while the rem unit output makes your site more accessible.

**Example Usage:** `to-rem(800px)`

**Example Output:** `50rem`

This function is commonly used in media queries and container queries, but it works anywhere in the interface.

note

This function uses a base font size of 16px (100%) for conversion. In the future, you'll be able to control the divisor for this function if you decided to use a custom root font size, but the point of this function is to make `rem` usage easier so you feel more comfortable with leaving your root font-size at 100%.

info

Before version **1.0.0-alpha-4**, this function was named `rem()`. To avoid conflicts with the CSS native [`rem()`](https://developer.mozilla.org/en-US/docs/Web/CSS/rem) function, it was renamed to `to-rem()`.
If you were using a version prior to that, it should have been automatically migrated to `to-rem()` during the update.

#### _utilities_quick-notes.md

> Source: https://docs.etchwp.com/utilities/quick-notes
> Scraped: 10.03.2026 08:20:50

Quick Notes allows you to add developer notes to any element in the Etch builder. These notes are visible when hovering over elements on the canvas, making it easy to leave reminders, instructions, or context for yourself or team members.

This is one of two pathways for creating developer only notes. A "note" element will be coming in the future for adding long-form notes.

note

These notes will only show up in the Etch builder and not in Gutenberg. There will be dedicated way to display notes for clients in the future.

## Enabling Quick Notes[​](_utilities_quick-notes.md#enabling-quick-notes)

Quick Notes can be toggled on or off in the **Structure Panel** settings:

1.  Click the **settings icon** (⚙️) in the Structure Panel header
2.  Toggle **Quick Notes** on or off

When enabled, any element with a note will display its note as an overlay when you hover over it on the canvas.

## Adding a Note to an Element[​](_utilities_quick-notes.md#adding-a-note-to-an-element)

To add a note to an element:

1.  Select the element you want to annotate
2.  In the **Attributes Panel**, add the `data-etch-note` attribute
3.  Enter your note as the attribute value

**Example:**
```
data-etch-note="This section needs review before launch"
```
## How Notes Are Displayed[​](_utilities_quick-notes.md#how-notes-are-displayed)

When Quick Notes is enabled and you hover over an element that has a `data-etch-note` attribute, the note appears as a tooltip overlay near the element. The note is prefixed with "Note:" for clarity.

## Important: Notes Are Not Published[​](_utilities_quick-notes.md#important-notes-are-not-published)

Quick Notes are a **builder-only feature**. The `data-etch-note` attribute is automatically stripped from the HTML when your page is rendered on the frontend. This means:

*   Notes are only visible in the Etch builder
*   Notes do not affect your live site
*   Notes add zero overhead to your published pages

This makes Quick Notes perfect for leaving development reminders without any impact on production.

## Use Cases[​](_utilities_quick-notes.md#use-cases)

*   **Development reminders**: Leave notes about incomplete features or TODOs
*   **Team communication**: Share context with collaborators about specific elements
*   **Client instructions**: Document why certain design decisions were made
*   **Accessibility notes**: Remind yourself to add ARIA attributes or alt text
*   **Responsive design**: Note breakpoint-specific styling requirements

#### _utilities_recipes_accessibility-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/accessibility-recipes
> Scraped: 10.03.2026 08:20:50

Accessibility recipes help you create more inclusive and accessible user experiences in Etch.

*   **clickable-parent**: Makes any element group clickable and hoverable by expanding the clickable area of a child link to the entire parent element.

*   **focus-parent**: Used in conjunction with Clickable Parent, this recipe removes focus styles from the child link and adds the focus styles to the parent.

*   **skip-link**: Styles an element as an accessible skip link that is hidden off-screen until focused. When the user tabs to the link, it slides into view for keyboard navigation.

#### _utilities_recipes_color-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/color-recipes
> Scraped: 10.03.2026 08:20:50

[Skip to main content](_utilities_recipes_color-recipes.md#__docusaurus_skipToContent_fallback)

[

![Etch Logo](https://docs.etchwp.com/img/etch-logo.svg)![Etch Logo](https://docs.etchwp.com/img/etch-logo-white.svg)

**Etch**](index.md)

[Documentation](index.md)[Purchase](https://etchwp.com/pricing)

*   Utilities
*   Recipes
*   Color Recipes

Color recipes provide utility patterns for working with colors in Etch.

*   **color-mix**: Adds a color-mix function so you can easily mix two colors or create transparencies.

[

Previous

Accessibility Recipes

](_utilities_recipes_accessibility-recipes.md)[

Next

Pseudo Selector Recipes

](_utilities_recipes_pseudo-selector-recipes.md)

#### _utilities_recipes_custom.md

> Source: https://docs.etchwp.com/utilities/recipes/custom
> Scraped: 10.03.2026 08:20:50

*   Utilities
*   Recipes
*   Custom Recipes

Right now, the only recipes available in Etch are native recipes provided by the Etch team. In future versions of Etch, users will have the ability to create, edit, export, share, and even sell recipe libraries.

Stay tuned!

[

Previous

Introduction

](_utilities_recipes_intro.md)[

Next

Accessibility Recipes

](_utilities_recipes_accessibility-recipes.md)

#### _utilities_recipes_fade-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/fade-recipes
> Scraped: 10.03.2026 08:20:51

*   Utilities
*   Recipes
*   Fade Recipes

Fade recipes offer utility patterns for creating visual fade effects that are compatible with any background color, pattern, or gradient.

*   **fade-block**: Adds a fade effect to the top and bottom.

*   **fade-inline**: Adds a fade effect to the left and right sides.

*   **fade-top**: Fades out content at the top edge.

*   **fade-right**: Fades out content at the right edge.

*   **fade-bottom**: Fades out content at the bottom edge.

*   **fade-left**: Fades out content at the left edge.

[

Previous

Pseudo Selector Recipes

](_utilities_recipes_pseudo-selector-recipes.md)[

Next

Gradient Recipes

](_utilities_recipes_gradients-recipes.md)

#### _utilities_recipes_flex-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/flex-recipes
> Scraped: 10.03.2026 08:20:51

Flex recipes provide utility patterns for working with CSS Flexbox layouts in Etch.

*   **flex-row**: Creates a flex container with horizontal (row) orientation.

*   **flex-column**: Creates a flex container with vertical (column) orientation.

*   **center-all**: Centers content horizontally and vertically, with text aligned to the center.

*   **center-left**: Vertically centers content, aligning items to the left and text to the left.

*   **center-right**: Vertically centers content, aligning items to the right and text to the right.

*   **center-top**: Horizontally centers items at the top, with centered text.

*   **center-bottom**: Horizontally centers items at the bottom, with centered text.

*   **flex-grid**: Creates a responsive flex-based grid with configurable columns. Uses `--columns` to set column count (default 3), `--gap` for spacing, and `--stretch` to control whether items stretch. Includes built-in responsive breakpoints that reduce columns at 900px and 600px.

#### _utilities_recipes_gradients-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/gradients-recipes
> Scraped: 10.03.2026 08:20:51

Gradient recipes provide utility patterns for creating CSS gradients in Etch. All gradient recipes use CSS custom properties for colors and stops, making them easy to customize.

*   **gradient-linear**: Creates a linear gradient with a default 180deg direction. Uses `--color-1` and `--color-2` custom properties for the gradient colors.

*   **gradient-radial**: Creates a radial gradient in a circular shape. Uses `--color-1` and `--color-2` custom properties for the gradient colors.

*   **gradient-conic**: Creates a conic gradient starting from 0deg. Uses `--color-1` and `--color-2` custom properties for the gradient colors.

*   **gradient-sharp**: Creates a linear gradient with a sharp transition at a specified stop point. Uses `--color-1`, `--color-2`, and `--stop` custom properties. The `--stop` property controls where the color transition occurs (default: 50%).

*   **gradient-fade**: Creates a linear gradient that fades from a color to transparent. Uses `--color-1` custom property for the starting color.

*   **gradient-vignette**: Creates a radial gradient vignette effect that transitions from transparent in the center to a color at the edges. Uses `--color-1` and `--stop` custom properties. The `--stop` property controls the size of the transparent center (default: 50%).

*   **gradient-text**: Creates a gradient text effect using background-clip. Uses `--color-1` and `--color-2` custom properties for the gradient colors. This recipe sets the text color to transparent and applies the gradient as the background.

*   **gradient-border**: Creates a gradient border effect using a double background technique. Uses `--color-1` for the background color, and `--color-2` and `--color-3` for the border gradient colors. The border width defaults to 2px.

#### _utilities_recipes_grid-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/grid-recipes
> Scraped: 10.03.2026 08:20:51

Grid recipes offer utility patterns for working with CSS Grid layouts in Etch.

*   **auto-grid**: Creates a responsive grid that automatically adjusts the number of columns based on container width and predefined variables. Allows configuration of column count and "aggressiveness" for stacking on narrow screens.

*   **variable-grid**: Defines a grid where the minimum item width is configurable, and columns auto-fit as space allows.

*   **grid-1** to **grid-12**: Creates a grid with a fixed number of equal-width columns (from 1 up to 12).

*   **grid-1-2**, **grid-1-3**, **grid-2-1**, **grid-2-3**, **grid-3-1**, **grid-3-2**: Sets up two-column grids with custom fractional column sizing (e.g., 1:2, 2:3, 3:1, etc.).

*   **content-grid**: Provides an advanced grid layout for content sections, with dedicated columns for features, max-width features, gutters, and full background elements. Useful for complex page layouts with side features or full-bleed backgrounds.

#### _utilities_recipes_intro.md

> Source: https://docs.etchwp.com/utilities/recipes/intro
> Scraped: 10.03.2026 08:20:50

Recipes are code snippets that can be expanded in Etch. They save a tremendous amount of typing and give users instant access to solving various development challenges with instant code expansions.

Typing the same property/value pairs over and over again in CSS is inefficient and boring. For example, setting a div to flex column:

It's not a ton of typing, but it's really annoying and unnecessary.

This will instantly expand the recipe to the code above.

The `?` triggers the expansion system for auto-suggest and auto-complete, so you don't even really have to type the full recipe name.

Recipes aren't just for simple stuff. They can be used to solve complex problems as well. For example, we've cooked up an extremely powerful Auto Grid recipe for making automatically responsive grids that perfectly match the minimum allowable size of your grid items.
```
.foo {    /* Begin Auto Grid */    display: grid !important;    grid-template-columns: var(--grid-template-columns);    /* Set or change column count */    --column-count: 4;    /* Set or change stacking aggressiveness */    --auto-grid-aggressiveness: .7;    /* Don't touch the stuff below unless you have a PhD in CSS */    --min: calc(((var(--content-width) - ((var(--column-count) - 1) * var(--grid-gap))) / var(--column-count)) * var(--auto-grid-aggressiveness));    --grid-template-columns: repeat(auto-fit, minmax(var(--min-formula), 1fr));    --grid-template-columns-even: repeat(auto-fit, minmax(var(--min-formula), 1fr) minmax(var(--min-formula), 1fr));    --min-formula: min(100%, max(var(--min), (100% - (var(--column-count) - 1) * var(--grid-gap)) / var(--column-count)));    /* Special handling for children */    > * {    min-width: 0;    max-width: 100%;    overflow-wrap: break-word;    }    gap: var(--grid-gap); /* No touchey - redefine this variable if you want to change the gap, but don't replace the variable or your grid will break */    /* End Auto Grid */}
```
Recipes is a development innovation we first introduced in Automatic.css in 2024 and it proved to be an absolute game changer for development efficiency. We're proud to have this functionality merged into Etch core now – we know users are going to love it.

#### _utilities_recipes_miscellaneous-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/miscellaneous-recipes
> Scraped: 10.03.2026 08:20:48

Miscellaneous recipes provide additional utility patterns for various common tasks in Etch.

*   **columns**: Creates auto-responsive multi-column layouts with configurable column count, minimum width, gaps, and custom visual separators between columns. Ensures items do not break awkwardly between columns.

*   **line-clamp**: Limits multi-line content to a maximum number of lines with an ellipsis for overflowing text. The number of visible lines can be easily configured.

*   **concentric-radius**: Applies concentric border radius and enhances padding for nested elements, ensuring child elements have a unified rounded appearance and remain visually cohesive.

*   **concentric-radius-reverse**: The reverse of concentric-radius. Sets `--radius` on the outer element and calculates a smaller inner radius for child elements. Useful when you want to define the outer radius and have inner elements automatically adjust. Includes a `--minimum-inner-radius` to prevent the inner radius from becoming too small.

*   **font-face**: Outputs a complete `@font-face` declaration template for adding custom fonts. Includes placeholders for font family name, file path, style, weight, and uses `font-display: swap` for optimal loading.

*   **is-bg**: Turns any element into a background element and automatically handles the layering of multiple background elements.

*   **brace-contain**: Outputs escaped curly braces with an empty interior `{""}` for use in dynamic data contexts where you need to wrap content in literal braces.

*   **brace-left**: Outputs an escaped left curly brace `{"{"}` for use in dynamic data contexts where a literal opening brace is needed.

*   **brace-right**: Outputs an escaped right curly brace `{"}"}` for use in dynamic data contexts where a literal closing brace is needed.

*   **footer-reveal**: Creates a "reveal" effect where the footer is sticky at the bottom and appears to be revealed as the main content scrolls away. Automatically styles the main element with proper z-index and shadow for the effect. Must be used in a template on a footer element that is adjacent to the main tag.

#### _utilities_recipes_pseudo-selector-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/pseudo-selector-recipes
> Scraped: 10.03.2026 08:20:51

Pseudo selector recipes provide utility patterns for working with CSS pseudo-classes and pseudo-elements in Etch.

*   **::before**: Creates a `::before` pseudo-element with an empty `content` property. Useful for decorative elements, icons, or overlays.

*   **::after**: Creates an `::after` pseudo-element with an empty `content` property. Useful for decorative elements, icons, or overlays.

*   **::before, ::after**: Creates both `::before` and `::after` pseudo-elements with empty `content` properties in a single selector. Useful when you need to style both pseudo-elements the same way.

*   **:hover**: Creates a `:hover` pseudo-class selector. Useful for interactive states and hover effects.

*   **:focus-visible**: Creates a `:focus-visible` pseudo-class selector. Useful for keyboard navigation focus states that should only appear when using keyboard navigation.

*   **:hover, :focus-visible**: Creates a combined selector for both `:hover` and `:focus-visible` states. Useful when you want the same styling for both hover and keyboard focus states.

*   **hover-exclude-touch**: Creates a media query that only applies styles on devices with a mouse/trackpad, excluding touch devices. This prevents hover effects from being triggered on mobile/touch devices where hover states can cause usability issues.

#### _utilities_recipes_ribbons-recipes.md

> Source: https://docs.etchwp.com/utilities/recipes/ribbons-recipes
> Scraped: 10.03.2026 08:20:50

Ribbon recipes help you create decorative corner ribbons for cards, images, and other container elements.

*   **corner-ribbon**: Creates a corner ribbon element that can be positioned at the top-left or top-right of a parent container. Includes configurable width, offset, colors, shadow, and text styling.

## Usage[​](_utilities_recipes_ribbons-recipes.md#usage)

1.  Add a text element (span, div, etc.) inside the container where you want the ribbon
2.  Apply the `corner-ribbon` recipe to the element
3.  Add the `data-ribbon-position` attribute with value `top-left` or `top-right` to position the ribbon

## Available Variables[​](_utilities_recipes_ribbons-recipes.md#available-variables)

| Variable | Default | Description |
| --- | --- | --- |
| `--ribbon-width` | `300px` | Width of the ribbon |
| `--ribbon-offset` | `to-rem(20px)` | Offset from the corner |
| `--ribbon-background-color` | `var(--black, #000)` | Background color |
| `--ribbon-text-color` | `var(--white, #fff)` | Text color |
| `--ribbon-text-size` | `1em` | Font size |
| `--ribbon-shadow` | `0 5px 10px #ccc` | Box shadow |
| `--ribbon-padding` | `.5em 1em` | Padding |

## Position Attributes[​](_utilities_recipes_ribbons-recipes.md#position-attributes)

*   `data-ribbon-position="top-right"` - Positions ribbon at top-right corner
*   `data-ribbon-position="top-left"` - Positions ribbon at top-left corner

#### index.md

> Source: https://docs.etchwp.com/
> Scraped: 10.03.2026 08:20:35

Etch is the first and only Unified Visual Development Environment for WordPress. It empowers users to build WordPress websites efficiently in a scalable, maintainable way with full code access. It's all the benefits of a traditional page builder with none of the downsides.

## What Makes Etch Different[​](index.md#what-makes-etch-different)

Unlike traditional page builders that generate bloated code, block code access, and lock you into proprietary systems, Etch provides a transparent visual interface that directly manipulates real HTML, CSS, PHP, and JavaScript. You get the speed and convenience of visual development without sacrificing code quality, control, or web standards.

**Key Principles:**   **Total Transparency** – Every element is accessible and editabl via GUI or code. No hidden wrappers or mysterious containers.
*   **Auto Block Authoring** – Everything you build is authored to Gutenberg blocks instantly and automatically for data liberation and easy client editing.
*   **Crystal Clean Output** – Professional-grade code that you'd be proud to write by hand.
*   **Web Standards** – Work with Semantic HTML, CSS, PHP, and JavaScript as they were designed to work.
*   **Full Empowerment** – Complete control over your code without limitations.
*   **Hyper-Efficiency** – Etch turns traditionally complex tasks like building loops, components, dynamic templates, conditional elements, and custom blocks into easy money.

## Who Etch Is For[​](index.md#who-etch-is-for)

Etch is built for freelancers, agencies, and developers who want to:

*   Build WordPress sites faster without compromising code quality
*   Maintain full control over their markup and styling
*   Scale projects with reusable components and systematic workflows
*   Deliver clean, maintainable code to clients with a simple client editing interface

**Etch also happens to be the best tool for beginners who are learning the craft of web development** because it respects web development fundamentals and best practices, doesn't box you into learning a proprietary system, and also happens to have the highest quality free education in the WordPress space along with a robust community of users willing to help you learn.

## Getting Started[​](index.md#getting-started)

Ready to dive in? Start with these essential guides:

1.  **[Installation](_getting-started_installation.md)** – Get Etch installed and running
2.  **[Etch Theme](_getting-started_etch-theme.md)** – Understand the required companion theme
3.  **[Things to Know](_getting-started_things-to-know.md)** – Important concepts before you begin
4.  **[Core Principles](_getting-started_core-principles.md)** – The philosophy behind Etch's design

## Need Help?[​](index.md#need-help)

This documentation covers everything from basic concepts to advanced workflows. Use the search function or browse the sidebar to find specific topics.

If you encounter issues, check the [Known Issues](_known-issues.md) section for common problems and solutions.

