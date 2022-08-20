const testCardTemplate = document.createElement('template');
testCardTemplate.innerHTML = ` 
  <link rel="stylesheet" href="../../styles/components/testCard.css" />

  <div class="test-card">
    <h3 class="test-card__title"></h3>
    <h4 class="test-card__subtitle"></h4>
    <p class="test-card__flavour-text"></p>
  </div>
`;

class TestCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(testCardTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('.test-card__title').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('.test-card__subtitle').innerText = this.getAttribute('subtitle');
    this.shadowRoot.querySelector('.test-card__flavour-text').innerText = this.getAttribute('flavour-text');
  }
}

window.customElements.define('test-card', TestCard)