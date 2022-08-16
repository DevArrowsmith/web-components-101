class TestCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `TestCard Element`
  }
}

window.customElements.define('test-card', TestCard)