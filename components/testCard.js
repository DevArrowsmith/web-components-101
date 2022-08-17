const template = document.createElement('template');
template.innerHTML = ` 
  <style>
    h3 {
      color: var(--card-color-text)
      background-color: var(--card-color-bg)
    }
  </style>
  <div class="test-card">
    <h3>${this.getAttribute('name')}</h3>
  </div>
`;

class TestCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ``
  }
}

window.customElements.define('test-card', TestCard)