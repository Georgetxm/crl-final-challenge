# Conquering Responsive Layout - Final Challenge solution

This is a solution to the [21 Days Conquering Responsive Layout Course](https://courses.kevinpowell.co/conquering-responsive-layouts), by Kevin Powell.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot
Desktop             |  Mobile
:-------------------------:|:-------------------------:
![Screenshot Desktop](./screenshots/Conquering%20Responsive%20Layouts%20-%20Desktop.png)  |  ![Screenshot Mobile](./screenshots/Conquering%20Responsive%20Layouts%20-%20Mobile.png)

### Links

- Solution URL: [Github Repo](https://github.com/Georgetxm/crl-final-challenge)
- Live Site URL: [Vercel App](https://crl-final-challenge-5gasbx0td-georgetxm.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

Creating complex layout that functions for both mobile and desktop by nesting Flexboxes.

```html
<div class="container hero-area">
  <h1>Responsive layouts <span class="title-olive">don’t have to be a struggle</span></h1>
  <div class="hero-area__inner-flex">
    <p>Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.</p>
    <a href="#" class="hero-btn">I want to learn</a>
  </div>
</div>
```

```css
.hero-area {
  display: flex;
  flex-direction: column;
}

.hero-area__inner-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

Utilising Flexbox's shrink, grow and wrap.

```css
.footer-flex {
  margin-top: 2em;
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1.5em;
}

```

Combining JavaScript and CSS's custom data attribute to create the navigation bar.

```css
.primary-navigation[data-visible="true"] {
  display: block;
  position: absolute;
  "..."
}
```

```js
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
```

Custom root properties, and utilising it to create responsive text sizes.

```css
:root {
  --fs-header-title: 2em;
  "..."
  --fs-social-icons: 1.5em;
}
```

```css
@media (min-width: 16em) {
  :root {
    --fs-header-title: 1.5em;
    "..."
    --fs-social-icons: 1em;
  }
}
```

```css
@media (min-width: 80em) {
  :root {
    --fs-header-title: 3em;
    "..."
    --fs-social-icons: 2em;
  }
}
```

### Continued development

Moving forward, I'll continue to implement a mobile-first workflow as a practice I've learned in this course that greatly reduced my CSS code. With knowledge on both Grids and Flexbox, I better put them into practice to create dynamic layouts for responsive designs. My next steps are to implement these CSS knowledge I have attained into a React project with best practices in place.


### Useful resources

- [Conquering Resonsive Layouts 21-Day Challenge](https://courses.kevinpowell.co/conquering-responsive-layouts) - The course I embarked on to better understand responsive web design.
- [CSS Breakpoints](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/) - This is an amazing article elaborates on the common breakpoints to use based on analysis of the width of common devices.

## Author

- LinkedIn - [George Teo Xuan Ming](https://www.linkedin.com/in/georgetxm/?originalSubdomain=sg)
- Frontend Mentor - [@Georgetxm](https://www.frontendmentor.io/profile/Georgetxm)
