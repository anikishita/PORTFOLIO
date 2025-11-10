// ObjectiveCard Web Component
class ObjectiveCard extends HTMLElement {
  static get observedAttributes() { return ['num']; }
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .card {
          position: relative;
          border: 1px solid rgba(14,165,233,.35);
          background: linear-gradient(180deg, rgba(14,165,233,.08), rgba(14,165,233,.03));
          border-radius: .8rem;
          padding: 1rem;
          transition: all .25s ease;
          overflow: hidden;
        }
        .card:hover {
          border-color: rgba(14,165,233,.75);
          box-shadow: 0 0 14px rgba(14,165,233,.25), inset 0 0 12px rgba(14,165,233,.15);
          transform: translateY(-1px);
        }
        .num {
          position: absolute;
          right: .8rem; top: .6rem;
          font-family: 'Orbitron', sans-serif;
          color: rgba(14,165,233,.9);
          letter-spacing: .18em;
          font-size: .8rem;
        }
        .content {
          position: relative;
          z-index: 1;
          color: #d9f4ff;
        }
      </style>
      <div class="card">
        <div class="num">${this.getAttribute('num') || '[000]'}</div>
        <div class="content"><slot></slot></div>
      </div>
    `;
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'num' && this.shadowRoot) {
      const numEl = this.shadowRoot.querySelector('.num');
      if (numEl) numEl.textContent = newVal || '[000]';
    }
  }
}
customElements.define('objective-card', ObjectiveCard);