class TestHeading extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h2>${this.getAttribute('text')}</h2>`
  }
}

window.customElements.define('test-heading', TestHeading)