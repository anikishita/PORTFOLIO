// HoloCard Web Component
class HoloCard extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host {
          display: block;
          --border: rgba(14,165,233,.35);
          --glow: rgba(14,165,233,.35);
        }
        .card {
          position: relative;
          border: 1px solid var(--border);
          background: linear-gradient(180deg, rgba(14,165,233,.10), rgba(14,165,233,.04));
          backdrop-filter: blur(6px);
          border-radius: .9rem;
          padding: 1rem;
          box-shadow: 0 0 0 rgba(0,0,0,0);
          transition: all .25s ease;
          overflow: hidden;
        }
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1200px 1200px at -10% -10%, rgba(14,165,233,.15), transparent 45%),
            radial-gradient(900px 900px at 120% 120%, rgba(0,234,255,.12), transparent 45%),
            linear-gradient(180deg, rgba(255,255,255,.06), transparent 20%);
          opacity: .6;
          pointer-events: none;
        }
        .card:hover {
          border-color: rgba(14,165,233,.75);
          box-shadow: 0 0 18px rgba(14,165,233,.25), inset 0 0 18px rgba(14,165,233,.15);
          transform: translateY(-2px);
        }
        .holo {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(14,165,233,.07) 0px,
            rgba(14,165,233,.07) 1px,
            transparent 2px,
            transparent 4px
          );
          mix-blend-mode: screen;
          pointer-events: none;
          opacity: .25;
          animation: holoShift 8s linear infinite;
        }
        @keyframes holoShift {
          0% { background-position-y: 0px; }
          100% { background-position-y: 80px; }
        }
        .slot {
          position: relative;
          z-index: 1;
        }
      </style>
      <div class="card">
        <div class="holo"></div>
        <div class="slot"><slot></slot></div>
      </div>
    `;
  }
}
customElements.define('holo-card', HoloCard);