// MissionLog Web Component
class MissionLog extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .log {
          position: relative;
          border: 1px solid rgba(14,165,233,.35);
          background: linear-gradient(180deg, rgba(14,165,233,.08), rgba(14,165,233,.03));
          border-radius: .8rem;
          padding: 1rem 1rem 1rem 3.2rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .log:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.5);
          background: linear-gradient(180deg, rgba(14,165,233,.12), rgba(14,165,233,.05));
        }
        .log::after {
          content: "";
          position: absolute;
          left: 1rem; top: 1rem; bottom: 1rem;
          width: 2px;
          background: linear-gradient(180deg, rgba(14,165,233,.8), transparent);
          border-radius: 1px;
        }
        .time {
          position: absolute;
          left: 1.2rem;
          top: .9rem;
          font-family: 'Orbitron', sans-serif;
          font-size: .7rem;
          letter-spacing: .16em;
          color: #bde9ff;
        }
.title {
          font-family: 'Orbitron', sans-serif;
          color: #e6f9ff;
          letter-spacing: .08em;
          margin-top: 1.5rem;
        }
.desc {
          color: #cde7f7;
          opacity: .9;
          margin-top: .35rem;
        }
      </style>
      <div class="log">
        <div class="time"><slot name="time"></slot></div>
        <div class="title"><slot name="title"></slot></div>
        <div class="desc"><slot name="desc"></slot></div>
      </div>
    `;
  }
}
customElements.define('mission-log', MissionLog);