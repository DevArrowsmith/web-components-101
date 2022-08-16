# Web Components 101

## Intro

This repo contains my first use of Web Components.

---

## Notes

### **Custom Element**
An element created by us.
- Defined using a JavaScript class that extends the `HTMLElement` class.
- The class is converted to a custom element and is made accessible to the DOM using `window.customeElements.define()` method.
  ```
  window.customElement.define('element-name', ClassName)
  ```
- The custom element's name must include a hyphen. Write in kebab-case.
- Import the js script into the HTML file.
  ```
  <body>
    <h1>Web Components 101</h1>
    <test-card></test-card>
    <script src="testCard.js"></script>
  </body>
  ```
- Can take attributes and pass these into the element's innerHTML.
  ```
  // testCard.js
  class TestCard extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `${this.getAttribute('name')}`
    }
  }

  // index.html
  <test-card name="Stede Bonnet"></test-card>
  ```

---

## Resources

### **Web Components**
- [Web Components Crash Course](https://www.google.com/search?q=tutorial+build+a+web+component&oq=tutorial+build+a+web+component&aqs=chrome..69i57j69i65l2j69i60l2j69i65j69i60j69i61.6352j0j4&sourceid=chrome&ie=UTF-8#kpvalbx=_3mP7Ytj2PI-agQbxnKaIAg22) video tutorial
- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [CSS Tricks: Introduction to Web Components](https://css-tricks.com/an-introduction-to-web-components/)

### **CSS Custom Properties**
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

## Color Pallettes

### Default

<div style='height: 60px; font-size: 1.2rem; display: grid; grid-template-columns: repeat(5, max(10%, 110px))'>
  <span style='
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EFEFEF;
    background-color:#060606;
  '>
    #060606
  </span>
  <span style='
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EFEFEF;
    background-color:#14213D;
  '>
    #14213D
  </span>
  <span style='
    display: flex;
    justify-content: center;
    align-items: center;
    color: #121212;
    background-color:#FCA311;
  '>
    #FCA311
  </span>
  <span style='
    display: flex;
    justify-content: center;
    align-items: center;
    color: #121212;
    background-color:#E5E5E5;
    '
  >
    #E5E5E5
  </span>
  <span style='
    display: flex;
    justify-content: center;
    align-items: center;
    color: #121212;
    background-color:#FEFEFE;
  '>
    #FEFEFE
  </span>
</div>