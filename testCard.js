class TestCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `${this.getAttribute('name')}`
  }
}

window.customElements.define('test-card', TestCard)