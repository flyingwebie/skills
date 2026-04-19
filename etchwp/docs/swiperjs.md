---
title: "swiperjs Documentation"
source: "https://swiperjs.com/swiper-api"
scraped: "2026-03-16T06:44:39.204Z"
tokens: 9104
---
# swiperjs Documentation

> Source: https://swiperjs.com/swiper-api
> Generated: 16.03.2026 07:44:39

### swiperjs

#### _swiper-api.md

> Source: https://swiperjs.com/swiper-api
> Scraped: 16.03.2026 07:44:37

## Swiper Full HTML Layout
```
    Slide 1

Slide 2

Slide 3
    ...
```
## Styles

Swiper package contains different sets of CSS styles:

CSS styles for bundle version:

*   `swiper-bundle.css` - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
*   `swiper-bundle.min.css` - same as previous but minified

CSS styles for bundle version (package imports):

*   `swiper/css` - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
*   `swiper/css/bundle` - same as previous but minified

CSS styles for core version and modules (package imports):

*   `swiper/css` - only core Swiper styles
*   `swiper/css/a11y` - styles required for A11y module
*   `swiper/css/autoplay` - styles required for Autoplay module
*   `swiper/css/controller` - styles required for Controller module
*   `swiper/css/effect-cards` - styles required for Cards Effect module
*   `swiper/css/effect-coverflow` - styles required for Coverflow Effect module
*   `swiper/css/effect-creative` - styles required for Creative Effect module
*   `swiper/css/effect-cube` - styles required for Cube Effect module
*   `swiper/css/effect-fade` - styles required for Fade Effect module
*   `swiper/css/effect-flip` - styles required for Flip Effect module
*   `swiper/css/free-mode` - styles required for Free Mode module
*   `swiper/css/grid` - styles required for Grid module
*   `swiper/css/hash-navigation` - styles required for Hash Navigation module
*   `swiper/css/history` - styles required for History module
*   `swiper/css/keyboard` - styles required for Keyboard module
*   `swiper/css/manipulation` - styles required for Manipulation module
*   `swiper/css/mousewheel` - styles required for Mousewheel module
*   `swiper/css/navigation` - styles required for Navigation module
*   `swiper/css/pagination` - styles required for Pagination module
*   `swiper/css/parallax` - styles required for Parallax module
*   `swiper/css/scrollbar` - styles required for Scrollbar module
*   `swiper/css/thumbs` - styles required for Thumbs module
*   `swiper/css/virtual` - styles required for Virtual module
*   `swiper/css/zoom` - styles required for Zoom module

## Initialize Swiper

Now, when we have Swiper's HTML, we need to initialize it using the following function:

new Swiper(swiperContainer, parameters)- initialize swiper with options

*   swiperContainer - HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.
*   parameters - object - object with Swiper parameters. Optional.
*   **Method returns initialized Swiper instance**

For example:
```
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});
```
**After** you initialize Swiper it is possible to access to Swiper's instance on its HTMLElement. It is `swiper` property of Swiper's HTML container element:
```
const swiper = document.querySelector('.swiper').swiper;
// Now you can use all slider methods like
swiper.slideNext();
```
## Parameters

Let's look on list of all available parameters:
```
const swiper = new Swiper('.swiper', {
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});
```
## Methods & Properties

After we initialize Slider we have its initialized instance in variable (like `swiper` variable in example above) with helpful methods and properties:

| Properties |
| --- |
| [swiper.activeIndex](_swiper-api.md#prop-swiper-activeIndex) | number |
Index number of currently active slide

> Note, that in loop mode active index value will be always shifted on a number of looped slides

 |
| [swiper.allowSlideNext](_swiper-api.md#prop-swiper-allowSlideNext) | boolean |

Disable / enable ability to slide to the next slides by assigning `false` / `true` to this property

 |
| [swiper.allowSlidePrev](_swiper-api.md#prop-swiper-allowSlidePrev) | boolean |

Disable / enable ability to slide to the previous slides by assigning `false` / `true` to this property

 |
| [swiper.allowTouchMove](_swiper-api.md#prop-swiper-allowTouchMove) | boolean |

Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning `false` / `true` to this property

 |
| [swiper.animating](_swiper-api.md#prop-swiper-animating) | boolean |

`true` if swiper is in transition

 |
| [swiper.clickedIndex](_swiper-api.md#prop-swiper-clickedIndex) | number |

Index number of last clicked slide

 |
| [swiper.clickedSlide](_swiper-api.md#prop-swiper-clickedSlide) | HTMLElement |

Link to last clicked slide (HTMLElement)

 |
| [swiper.defaults](_swiper-api.md#prop-swiper-defaults) | SwiperOptions |

Swiper default options

 |
| [swiper.el](_swiper-api.md#prop-swiper-el) | HTMLElement |

Slider container HTML element

 |
| [swiper.enabled](_swiper-api.md#prop-swiper-enabled) | boolean |

`true` if Swiper is enabled, `false` otherwise

 |
| [swiper.extendedDefaults](_swiper-api.md#prop-swiper-extendedDefaults) | SwiperOptions |

Object with global Swiper extended options

 |
| [swiper.height](_swiper-api.md#prop-swiper-height) | number |

Height of container

 |
| [swiper.isBeginning](_swiper-api.md#prop-swiper-isBeginning) | boolean |

`true` if slider on most "left"/"top" position

 |
| [swiper.isEnd](_swiper-api.md#prop-swiper-isEnd) | boolean |

`true` if slider on most "right"/"bottom" position

 |
| [swiper.isLocked](_swiper-api.md#prop-swiper-isLocked) | boolean |

`true` if slide is "locked" (by `watchOverflow`) and slides can not be, e.g. when amount of slides is less that slides per view

 |
| [swiper.originalParams](_swiper-api.md#prop-swiper-originalParams) | SwiperOptions |

Object with original initialization parameters

 |
| [swiper.params](_swiper-api.md#prop-swiper-params) | SwiperOptions |

Object with passed initialization parameters

 |
| [swiper.previousIndex](_swiper-api.md#prop-swiper-previousIndex) | number |

Index number of previously active slide

 |
| [swiper.progress](_swiper-api.md#prop-swiper-progress) | number |

Current progress of wrapper translate (from 0 to 1)

 |
| [swiper.realIndex](_swiper-api.md#prop-swiper-realIndex) | number |

Index number of currently active slide considering rearranged slides in loop mode

 |
| [swiper.slides](_swiper-api.md#prop-swiper-slides) | HTMLElement\[\] |

Array of slides HTML elements. To get specific slide HTMLElement use `swiper.slides[1]`

 |
| [swiper.slidesEl](_swiper-api.md#prop-swiper-slidesEl) | HTMLElement |

Wrapper HTML element

 |
| [swiper.slidesGrid](_swiper-api.md#prop-swiper-slidesGrid) | number\[\] |

Slides grid

 |
| [swiper.slidesSizesGrid](_swiper-api.md#prop-swiper-slidesSizesGrid) | number\[\] |

Array of widths for slides

 |
| [swiper.snapGrid](_swiper-api.md#prop-swiper-snapGrid) | number\[\] |

Slides snap grid

 |
| [swiper.snapIndex](_swiper-api.md#prop-swiper-snapIndex) | number |

Index number of current snap in `snapGrid`

 |
| [swiper.swipeDirection](_swiper-api.md#prop-swiper-swipeDirection) | 'next' | 'prev' |

Direction of sliding

 |
| [swiper.touches](_swiper-api.md#prop-swiper-touches) | object |

Object with the following touch event properties:

*   `swiper.touches.startX`
*   `swiper.touches.startY`
*   `swiper.touches.currentX`
*   `swiper.touches.currentY`
*   `swiper.touches.diff`

 |
| [swiper.translate](_swiper-api.md#prop-swiper-translate) | number |

Current value of wrapper translate

 |
| [swiper.width](_swiper-api.md#prop-swiper-width) | number |

Width of container

 |
| [swiper.wrapperEl](_swiper-api.md#prop-swiper-wrapperEl) | HTMLElement |

Wrapper HTML element

 |
| Methods |
| [swiper.attachEvents()](_swiper-api.md#method-swiper-attachEvents) |

Attach all events listeners again

 |
| [swiper.changeDirection(direction, needUpdate)](_swiper-api.md#method-swiper-changeDirection) |

Changes slider direction from horizontal to vertical and back.

*   direction - 'horizontal' | 'vertical' - New direction. If not specified, then will automatically changed to opposite direction
*   needUpdate - boolean - Will call swiper.update(). Default true

 |
| [swiper.changeLanguageDirection(direction)](_swiper-api.md#method-swiper-changeLanguageDirection) |

Changes slider language

*   direction - 'rtl' | 'ltr' - New direction. Should be \`rtl\` or \`ltr\`

 |
| [swiper.destroy(deleteInstance, cleanStyles)](_swiper-api.md#method-swiper-destroy) |

Destroy slider instance and detach all events listeners

*   deleteInstance - boolean - Set it to false (by default it is true) to not to delete Swiper instance
*   cleanStyles - boolean - Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container. Useful if you need to destroy Swiper and to init again with new options or in different direction

 |
| [swiper.detachEvents()](_swiper-api.md#method-swiper-detachEvents) |

Detach all events listeners

 |
| [swiper.disable()](_swiper-api.md#method-swiper-disable) |

Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions

 |
| [swiper.emit(event, args)](_swiper-api.md#method-swiper-emit) |

Fire event on instance

 |
| [swiper.enable()](_swiper-api.md#method-swiper-enable) |

Enable Swiper (if it was disabled)

 |
| [swiper.extendDefaults(options)](_swiper-api.md#method-swiper-extendDefaults) |

Extend global Swiper defaults

 |
| [swiper.getTranslate()](_swiper-api.md#method-swiper-getTranslate) |

Get current value of swiper wrapper css3 transform translate

 |
| [swiper.init(el)](_swiper-api.md#method-swiper-init) |

Initialize slider

 |
| [swiper.maxTranslate()](_swiper-api.md#method-swiper-maxTranslate) |

Get current maximal translate value

 |
| [swiper.minTranslate()](_swiper-api.md#method-swiper-minTranslate) |

Get current minimal translate value

 |
| [swiper.off(event, handler)](_swiper-api.md#method-swiper-off) |

Remove event handler

 |
| [swiper.offAny(handler)](_swiper-api.md#method-swiper-offAny) |

Remove event listener that will be fired on all events

 |
| [swiper.on(event, handler)](_swiper-api.md#method-swiper-on) |

Add event handler

 |
| [swiper.onAny(handler)](_swiper-api.md#method-swiper-onAny) |

Add event listener that will be fired on all events

 |
| [swiper.once(event, handler)](_swiper-api.md#method-swiper-once) |

Add event handler that will be removed after it was fired

 |
| [swiper.setGrabCursor()](_swiper-api.md#method-swiper-setGrabCursor) |

Set grab cursor

 |
| [swiper.setProgress(progress, speed)](_swiper-api.md#method-swiper-setProgress) |

Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide

*   progress - number - Swiper translate progress (from 0 to 1).
*   speed - number - Transition duration (in ms).

 |
| [swiper.setTranslate(translate)](_swiper-api.md#method-swiper-setTranslate) |

Set custom css3 transform's translate value for swiper wrapper

 |
| [swiper.slideNext(speed, runCallbacks)](_swiper-api.md#method-swiper-slideNext) |

Run transition to next slide.

*   speed - number - Transition duration (in ms).
*   runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.

 |
| [swiper.slidePrev(speed, runCallbacks)](_swiper-api.md#method-swiper-slidePrev) |

Run transition to previous slide.

*   speed - number - Transition duration (in ms).
*   runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.

 |
| [swiper.slideReset(speed, runCallbacks)](_swiper-api.md#method-swiper-slideReset) |

Reset swiper position to currently active slide for the duration equal to 'speed' parameter.

*   speed - number - Transition duration (in ms).
*   runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.

 |
| [swiper.slideTo(index, speed, runCallbacks)](_swiper-api.md#method-swiper-slideTo) |

Run transition to the slide with index number equal to 'index' parameter for the duration equal to 'speed' parameter.

*   index - number - Index number of slide.
*   speed - number - Transition duration (in ms).
*   runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.

 |
| [swiper.slideToClosest(speed, runCallbacks)](_swiper-api.md#method-swiper-slideToClosest) |

Reset swiper position to closest slide/snap point for the duration equal to 'speed' parameter.

*   speed - number - Transition duration (in ms).
*   runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.

 |
| [swiper.slideToLoop(index, speed, runCallbacks)](_swiper-api.md#method-swiper-slideToLoop) |

Does the same as .slideTo but for the case when used with enabled loop. So this method will slide to slides with realIndex matching to passed index

*   index - number - Index number of slide.
*   speed - number - Transition duration (in ms).
*   runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.

 |
| [swiper.slidesPerViewDynamic()](_swiper-api.md#method-swiper-slidesPerViewDynamic) |

Get dynamically calculated amount of slides per view, useful only when slidesPerView set to `auto`

 |
| [swiper.translateTo(translate, speed, runCallbacks, translateBounds)](_swiper-api.md#method-swiper-translateTo) |

Animate custom css3 transform's translate value for swiper wrapper

*   translate - number - Translate value (in px)
*   speed - number - Transition duration (in ms)
*   runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events
*   translateBounds - boolean - Set it to false (by default it is true) and transition value can extend beyond min and max translate

 |
| [swiper.unsetGrabCursor()](_swiper-api.md#method-swiper-unsetGrabCursor) |

Unset grab cursor

 |
| [swiper.update()](_swiper-api.md#method-swiper-update) |

You should call it after you add/remove slides manually, or after you hide/show it, or do any custom DOM modifications with Swiper This method also includes subcall of the following methods which you can use separately:

 |
| [swiper.updateAutoHeight(speed)](_swiper-api.md#method-swiper-updateAutoHeight) |

Force swiper to update its height (when autoHeight enabled) for the duration equal to 'speed' parameter

*   speed - number - Transition duration (in ms).

 |
| [swiper.updateProgress()](_swiper-api.md#method-swiper-updateProgress) |

recalculate swiper progress

 |
| [swiper.updateSize()](_swiper-api.md#method-swiper-updateSize) |

recalculate size of swiper container

 |
| [swiper.updateSlides()](_swiper-api.md#method-swiper-updateSlides) |

recalculate number of slides and their offsets. Useful after you add/remove slides with JavaScript

 |
| [swiper.updateSlidesClasses()](_swiper-api.md#method-swiper-updateSlidesClasses) |

update active/prev/next classes on slides and bullets

 |
| [swiper.use(modules)](_swiper-api.md#method-swiper-use) |

Installs modules on Swiper in runtime.

 |

## Events

Swiper comes with a bunch of useful events you can listen. Events can be assigned in two ways:

1.  Using `on` parameter on swiper initialization:

    ```
    const swiper = new Swiper('.swiper', {
      // ...
      on: {
        init: function () {
          console.log('swiper initialized');
        },
      },
    });

    ```
2.  Using `on` method after swiper initialization.

    ```
    const swiper = new Swiper('.swiper', {
      // ...
    });
    swiper.on('slideChange', function () {
      console.log('slide changed');
    });

    ```
Please note, that `this` keyword within event handler always points to Swiper instance
```
const swiper = new Swiper('.swiper', {
  init: false,
  // other parameters
});
swiper.on('init', function() {
 // do something
});
// init Swiper
swiper.init();
```
## Modules

### Scrollbar

#### Scrollbar Parameters
```
const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
```
#### Scrollbar Methods

| Properties |
| --- |
| [swiper.scrollbar.dragEl](_swiper-api.md#prop-swiper-scrollbar-dragEl) | HTMLElement |
HTMLElement of Scrollbar draggable handler element

 |
| [swiper.scrollbar.el](_swiper-api.md#prop-swiper-scrollbar-el) | HTMLElement |

HTMLElement of Scrollbar container element

 |
| Methods |
| [swiper.scrollbar.destroy()](_swiper-api.md#method-swiper-scrollbar-destroy) |

Destroy scrollbar

 |
| [swiper.scrollbar.init()](_swiper-api.md#method-swiper-scrollbar-init) |

Initialize scrollbar

 |
| [swiper.scrollbar.setTranslate()](_swiper-api.md#method-swiper-scrollbar-setTranslate) |

Updates scrollbar translate

 |
| [swiper.scrollbar.updateSize()](_swiper-api.md#method-swiper-scrollbar-updateSize) |

Updates scrollbar track and handler sizes

 |

#### Scrollbar Events

| Name | Arguments | Description |
| --- | --- | --- |
| [scrollbarDragEnd](_swiper-api.md#event-scrollbarDragEnd) | (swiper, event) |
Event will be fired on draggable scrollbar drag end

 |
| [scrollbarDragMove](_swiper-api.md#event-scrollbarDragMove) | (swiper, event) |

Event will be fired on draggable scrollbar drag move

 |
| [scrollbarDragStart](_swiper-api.md#event-scrollbarDragStart) | (swiper, event) |

Event will be fired on draggable scrollbar drag start

 |

#### Scrollbar CSS Custom Properties
```
 {
  --swiper-scrollbar-border-radius: 10px;
  --swiper-scrollbar-top: auto;
  --swiper-scrollbar-bottom: 4px;
  --swiper-scrollbar-left: auto;
  --swiper-scrollbar-right: 4px;
  --swiper-scrollbar-sides-offset: 1%;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  --swiper-scrollbar-size: 4px;
}
```
### Autoplay

#### Autoplay Parameters
```
const swiper = new Swiper('.swiper', {
 autoplay: {
   delay: 5000,
 },
});
```
#### Autoplay Methods

| Properties |
| --- |
| [swiper.autoplay.paused](_swiper-api.md#prop-swiper-autoplay-paused) | boolean |
Whether autoplay is paused

 |
| [swiper.autoplay.running](_swiper-api.md#prop-swiper-autoplay-running) | boolean |

Whether autoplay enabled and running

 |
| [swiper.autoplay.timeLeft](_swiper-api.md#prop-swiper-autoplay-timeLeft) | number |

If autoplay is paused, it contains time left (in ms) before transition to next slide

 |
| Methods |
| [swiper.autoplay.pause()](_swiper-api.md#method-swiper-autoplay-pause) |

Pause autoplay

 |
| [swiper.autoplay.resume()](_swiper-api.md#method-swiper-autoplay-resume) |

Resume autoplay

 |
| [swiper.autoplay.start()](_swiper-api.md#method-swiper-autoplay-start) |

Start autoplay

 |
| [swiper.autoplay.stop()](_swiper-api.md#method-swiper-autoplay-stop) |

Stop autoplay

 |

#### Autoplay Events

| Name | Arguments | Description |
| --- | --- | --- |
| [autoplay](_swiper-api.md#event-autoplay) | (swiper) |
Event will be fired when slide changed with autoplay

 |
| [autoplayPause](_swiper-api.md#event-autoplayPause) | (swiper) |

Event will be fired on autoplay pause

 |
| [autoplayResume](_swiper-api.md#event-autoplayResume) | (swiper) |

Event will be fired on autoplay resume

 |
| [autoplayStart](_swiper-api.md#event-autoplayStart) | (swiper) |

Event will be fired in when autoplay started

 |
| [autoplayStop](_swiper-api.md#event-autoplayStop) | (swiper) |

Event will be fired when autoplay stopped

 |
| [autoplayTimeLeft](_swiper-api.md#event-autoplayTimeLeft) | (swiper, timeLeft, percentage) |

Event triggers continuously while autoplay is enabled. It contains time left (in ms) before transition to next slide and percentage of that time related to autoplay delay

 |

Looking for more advanced effects?

### Free Mode

#### Free Mode Parameters
```
const swiper = new Swiper('.swiper', {
  freeMode: true,
});
const swiper = new Swiper('.swiper', {
  freeMode: {
    enabled: true,
    sticky: true,
  },
});
```
### Grid

#### Grid Parameters
```
const swiper = new Swiper('.swiper', {
  grid: {
    rows: 2,
  },
});
```
### Manipulation

Manipulation module adds useful Swiper methods to manipulate slides. It makes sense to use it only with Swiper Core version, not intended to be uses with Swiper React or Vue.

#### Manipulation Methods
```
addSlide(1, 'Slide 10"')
addSlide(1, [
 'Slide 10"',
 'Slide 11"'
]);
```
### Parallax

Swiper supports parallax transition effects for swiper/slides nested elements. There are two types of parallax elements supported:

*   Direct child elements of `swiper`. Parallax effect for such elements will depend on total slider progress. Useful for parallax backgrounds
*   Slides child elements. Parallax effect for such elements will depend on slide progress

To enable parallax effects you need to init Swiper with passed `parallax:true` parameter and add one of the following (or mix) attributes to required elements:

*   `data-swiper-parallax` - enable transform-translate parallax transition. This attribute may accept:
    *   `number` - value in px (as for title, subtitle in example above) to move element depending on progress. In this case such element will be moved on ± this value in px depending on slide position (next or previous)
    *   `percentage` - (as for "parallax-bg") to move element depending on progress and on its size. In this case such element will be moved on ± this percentage of its size (width in horizontal direction, and height in vertical direction) depending on slide position (next or previous). So if element has 400px width and you specified data-swiper-parallax="50%" then it will be moved on ± 200px
*   `data-swiper-parallax-x` - same but for x-axis direction
*   `data-swiper-parallax-y` - same but for y-axis direction
*   `data-swiper-parallax-scale` - scale ratio of the parallax element when it is in "inactive" (not on active slide) state
*   `data-swiper-parallax-opacity` - opacity of the parallax element when it is in "inactive" (not on active slide) state
*   `data-swiper-parallax-duration` - custom transition duration for parallax elements
```
      Slide 1

Subtitle

Lorem ipsum dolor sit amet, ...

I will change opacity

I will change scale

    ...
```
#### Parallax Parameters
```
const swiper = new Swiper('.swiper', {
  parallax: true,
});
```
Looking for more advanced effects?

### Lazy Loading

Since version 9 Swiper doesn't have a specific lazy loading API, as it relies on native browser lazy loading feature. To use lazy loading, we just need to set `loading="lazy"` on images and add preloader element:
```
!

      !
```
As you see:

*   Lazy image must have `loading="lazy"` attribute
*   Add animated preloader spinner to slide which will be removed automatically after image loaded:

Or white one for dark layout:

### Fade Effect

Be sure to have the `effect` param set to `'fade'` in order for this to work.

Note that `crossFade` should be set to `true` in order to avoid seeing content behind or underneath.

#### Fade Effect Parameters
```
const swiper = new Swiper('.swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
```
### Coverflow Effect

Be sure to have the `effect` param set to `'coverflow'` in order for this to work.

#### Coverflow Effect Parameters
```
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});
```
Looking for more advanced effects?

### Flip Effect

Be sure to have the `effect` param set to `'flip'` in order for this to work.

#### Flip Effect Parameters
```
const swiper = new Swiper('.swiper', {
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
});
```
### Cube Effect

Be sure to have the `effect` param set to `'cube'` in order for this to work.

#### Cube Effect Parameters
```
const swiper = new Swiper('.swiper', {
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
});
```
### Cards Effect

Be sure to have the `effect` param set to `'cards'` in order for this to work.

#### Cards Effect Parameters
```
const swiper = new Swiper('.swiper', {
  effect: 'cards',
  cardsEffect: {
    // ...
  },
});
```
Looking for more advanced effects?

### Creative Effect

Be sure to have the `effect` param set to `'creative'` in order for this to work.

#### Creative Effect Parameters
```
const swiper = new Swiper('.swiper', {
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
});
```
Looking for more advanced effects?

### Thumbs

In addition to [Controller](_swiper-api.md#controller) component Swiper comes with Thumbs component that is designed to work with additional thumbs swiper in a more correct way than Controller which is used for syncing two swipers.

#### Thumbs Parameters
```
const swiper = new Swiper('.swiper', {
  ...
  thumbs: {
    swiper: thumbsSwiper
  }
});
```
#### Thumbs Methods

| Properties |
| --- |
| [swiper.thumbs.swiper](_swiper-api.md#prop-swiper-thumbs-swiper) | Swiper |
Swiper instance of thumbs swiper

 |
| Methods |
| [swiper.thumbs.init()](_swiper-api.md#method-swiper-thumbs-init) |

Initialize thumbs

 |
| [swiper.thumbs.update(initial, p)](_swiper-api.md#method-swiper-thumbs-update) |

Update thumbs

 |

### Zoom

Swiper supports zoom images functionality (similar to what you see on iOS when browsing single photo) where you can zoom-in image by pinch gesture and or by zoom-in/out by double tap on it. In this case, additional layout is required:
```
    !

        !

Plain slide with text

        !
```
*   All "zoomable" images should be wrapped with the div with `swiper-zoom-container` class.
*   By default it expects to zoom one of the `img`, `picture` or `canvas` element. If you want to make zoom on some other custom element, then just add `swiper-zoom-target` class to this element. For example:

*   You can override `maxRatio` parameter for specific slides by using `data-swiper-zoom` attribute on zoom container.

#### Zoom Parameters
```
const swiper = new Swiper('.swiper', {
  zoom: {
    maxRatio: 5,
  },
});
```
#### Zoom Methods

| Properties |
| --- |
| [swiper.zoom.enabled](_swiper-api.md#prop-swiper-zoom-enabled) | boolean |
Whether the zoom module is enabled

 |
| [swiper.zoom.scale](_swiper-api.md#prop-swiper-zoom-scale) | number |

Current image scale ratio

 |
| Methods |
| [swiper.zoom.disable()](_swiper-api.md#method-swiper-zoom-disable) |

Disable zoom module

 |
| [swiper.zoom.enable()](_swiper-api.md#method-swiper-zoom-enable) |

Enable zoom module

 |
| [swiper.zoom.in(ratio)](_swiper-api.md#method-swiper-zoom-in) |

Zoom in image of the currently active slide. Optionally accepts custom zoom ratio

 |
| [swiper.zoom.out()](_swiper-api.md#method-swiper-zoom-out) |

Zoom out image of the currently active slide

 |
| [swiper.zoom.toggle(event)](_swiper-api.md#method-swiper-zoom-toggle) |

Toggle image zoom of the currently active slide

 |

#### Zoom Events

| Name | Arguments | Description |
| --- | --- | --- |
| [zoomChange](_swiper-api.md#event-zoomChange) | (swiper, scale, imageEl, slideEl) |
Event will be fired on zoom change

 |

### Keyboard Control

#### Keyboard Control Parameters
```
const swiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
```
#### Keyboard Control Methods

| Properties |
| --- |
| [swiper.keyboard.enabled](_swiper-api.md#prop-swiper-keyboard-enabled) | boolean |
Whether the keyboard control is enabled

 |
| Methods |
| [swiper.keyboard.disable()](_swiper-api.md#method-swiper-keyboard-disable) |

Disable keyboard control

 |
| [swiper.keyboard.enable()](_swiper-api.md#method-swiper-keyboard-enable) |

Enable keyboard control

 |

#### Keyboard Events

| Name | Arguments | Description |
| --- | --- | --- |
| [keyPress](_swiper-api.md#event-keyPress) | (swiper, keyCode) |
Event will be fired on key press

 |

### Mousewheel Control

#### Mousewheel Control Parameters
```
const swiper = new Swiper('.swiper', {
  mousewheel: {
    invert: true,
  },
});
```
#### Mousewheel Control Methods

| Properties |
| --- |
| [swiper.mousewheel.enabled](_swiper-api.md#prop-swiper-mousewheel-enabled) | boolean |
Whether the mousewheel control is enabled

 |
| Methods |
| [swiper.mousewheel.disable()](_swiper-api.md#method-swiper-mousewheel-disable) |

Disable mousewheel control

 |
| [swiper.mousewheel.enable()](_swiper-api.md#method-swiper-mousewheel-enable) |

Enable mousewheel control

 |

#### Mousewheel Events

| Name | Arguments | Description |
| --- | --- | --- |
| [scroll](_swiper-api.md#event-scroll) | (swiper, event) |
Event will be fired on mousewheel scroll

 |

### Virtual Slides

Virtual Slides module allows to keep just required amount of slides in DOM. It is very useful in terms in performance and memory issues if you have a lot of slides, especially slides with heavyweight DOM tree or images.

Note that according to Virtual Slides realization it **doesn't work** with Grid module and `slidesPerView: 'auto'`

#### Virtual Slides Parameters
```
const swiper = new Swiper('.swiper', {
  virtual: {
    slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
  },
});
```
#### Virtual Slides Methods

| Properties |
| --- |
| [swiper.virtual.cache](_swiper-api.md#prop-swiper-virtual-cache) | object |
Object with cached slides HTML elements

 |
| [swiper.virtual.from](_swiper-api.md#prop-swiper-virtual-from) | number |

Index of first rendered slide

 |
| [swiper.virtual.slides](_swiper-api.md#prop-swiper-virtual-slides) | T\[\] |

Array with slide items passed by `virtual.slides` parameter

 |
| [swiper.virtual.to](_swiper-api.md#prop-swiper-virtual-to) | number |

Index of last rendered slide

 |
| Methods |
| [swiper.virtual.appendSlide(slide)](_swiper-api.md#method-swiper-virtual-appendSlide) |

Append slide. `slides` can be a single slide item or array with such slides.

> Only for Core version (in React & Vue it should be done by modifying slides array/data/source)

 |
| [swiper.virtual.prependSlide(slide)](_swiper-api.md#method-swiper-virtual-prependSlide) |

Prepend slide. `slides` can be a single slide item or array with such slides.

> Only for Core version (in React & Vue it should be done by modifying slides array/data/source)

 |
| [swiper.virtual.removeAllSlides()](_swiper-api.md#method-swiper-virtual-removeAllSlides) |

Remove all slides

> Only for Core version (in React & Vue it should be done by modifying slides array/data/source)

 |
| [swiper.virtual.removeSlide(slideIndexes)](_swiper-api.md#method-swiper-virtual-removeSlide) |

Remove specific slide or slides. `slideIndexes` can be a number with slide index to remove or array with indexes.

> Only for Core version (in React & Vue it should be done by modifying slides array/data/source)

 |
| [swiper.virtual.update(force)](_swiper-api.md#method-swiper-virtual-update) |

Update virtual slides state

 |

#### Virtual Slides Dom

Since version 9, Swiper virtual slides can work with slides originally rendered in DOM. On initialize it will remove them from DOM, cache and then re-use the ones which are required:
```
    Slide 1

Slide 2
    ...

Slide 100

  const swiper = new Swiper('.swiper', {
    virtual: {
      enabled: true,
    },
  });
```
### Hash Navigation

Hash navigation is intended to have a link to specific slide that allows to load page with specific slide opened.

To make it work, you need to enable it by passing `hashNavigation:true` parameter and adding slides hashes in `data-hash` attribute:
```
    Slide 1

Slide 2

Slide 3

Slide 4

Slide 5
    ...
```
```
const swiper = new Swiper('.swiper', {
  //enable hash navigation
  hashNavigation: true,
});
```
#### Hash Navigation Parameters
```
const swiper = new Swiper('.swiper', {
  hashNavigation: {
    replaceState: true,
  },
});
```
#### Hash Navigation Events

| Name | Arguments | Description |
| --- | --- | --- |
| [hashChange](_swiper-api.md#event-hashChange) | (swiper) |
Event will be fired on window hash change

 |
| [hashSet](_swiper-api.md#event-hashSet) | (swiper) |

Event will be fired when swiper updates the hash

 |

### History Navigation

#### History Navigation Parameters
```
const swiper = new Swiper('.swiper', {
  history: {
    replaceState: true,
  },
});
```
### Controller

#### Controller Parameters
```
const swiper = new Swiper('.swiper', {
  controller: {
    inverse: true,
  },
});
```
#### Controller Methods

| Properties |
| --- |
| [swiper.controller.control](_swiper-api.md#prop-swiper-controller-control) | Swiper | Swiper\[\] |
Pass here another Swiper instance or array with Swiper instances that should be controlled by this Swiper

 |

### Accessibility (a11y)

#### Accessibility Parameters
```
const swiper = new Swiper('.swiper', {
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});
```
## Custom Build

You have two options of making custom version of Swiper.

### Using JS Modules

If you use bundler with JS modules support in your project you can import only the modules you need:
```
// Import Swiper and modules
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // ...
});
```
The following modules are exported:

*   `Virtual` - Virtual Slides module
*   `Keyboard` - Keyboard Control module
*   `Mousewheel` - Mousewheel Control module
*   `Navigation` - Navigation module
*   `Pagination` - Pagination module
*   `Scrollbar` - Scrollbar module
*   `Parallax` - Parallax module
*   `FreeMode` - Free Mode module
*   `Grid` - Grid module
*   `Manipulation` - Slides manipulation module (only for Core version)
*   `Zoom` - Zoom module
*   `Controller` - Controller module
*   `A11y` - Accessibility module
*   `History` - History Navigation module
*   `HashNavigation` - Hash Navigation module
*   `Autoplay` - Autoplay module
*   `EffectFade` - Fade Effect module
*   `EffectCube` - Cube Effect module
*   `EffectFlip` - Flip Effect module
*   `EffectCoverflow` - Coverflow Effect module
*   `EffectCards` - Cards Effect module
*   `EffectCreative` - Creative Effect module
*   `Thumbs` - Thumbs module

### Using Build Script

Swiper comes with gulp builder that allows to build custom library version where you may include only required modules. We need the following:

1.  Download and unzip [Swiper GitHub repository](https://github.com/nolimits4web/swiper) to local folder

2.  Install Node.js (if not installed)

3.  Now, we need to install required dependencies. Go to the folder with downloaded and unzipped Swiper repository and execute in terminal:

    ```
    npm install

    ```
4.  Open `scripts/build-config.js` file:

    ```
    module.exports = {
      // remove modules you don't need
      modules: [
        'virtual',
        'keyboard',
        'mousewheel',
        'navigation',
        'pagination',
        'scrollbar',
        'parallax',
        'zoom',
        'controller',
        'a11y',
        'history',
        'hash-navigation',
        'autoplay',
        'thumbs',
        'free-mode',
        'grid',
        'manipulation',
        'effect-fade',
        'effect-cube',
        'effect-flip',
        'effect-coverflow',
        'effect-creative',
        'effect-cards',
      ],
    };

    ```
5.  Now, we are ready to build custom version of Swiper:

    ```
    npm run build:prod

    ```
6.  That is all. Generated CSS and JS files and their minified versions will be available in `dist/` folder.

## TypeScript Definitions

Swiper is fully typed, it exports `Swiper` and `SwiperOptions` types:
```
// main.ts
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
};
const swiper = new Swiper('.swiper', swiperParams);
```
You can also check auto generated [TypeScript definitions explorer](_types.md) for all the types, options, properties and methods.

