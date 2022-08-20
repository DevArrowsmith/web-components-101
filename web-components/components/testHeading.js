const testHeadingTemplate = document.createElement('template');
testHeadingTemplate.innerHTML = ` 
  <link rel="stylesheet" href="../../styles/components/testHeading.css" />

  <h2 class="test-heading"></h2>
`;

class TestHeading extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(testHeadingTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('.test-heading').innerText = this.getAttribute('heading');
  }
}

window.customElements.define('test-heading', TestHeading)