// ProjectCard Web Component
class ProjectCard extends HTMLElement {
  static get observedAttributes() { return ['title', 'image', 'link']; }
  
  // Sanitize URL to only allow safe protocols
  static sanitizeUrl(url) {
    if (!url) return null;
    try {
      const parsed = new URL(url, window.location.origin);
      // Only allow http, https protocols
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        return parsed.href;
      }
      return null;
    } catch {
      return null;
    }
  }
  
  // Get placeholder SVG markup
  static getPlaceholderSvg() {
    return `<svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M3 7.8l9 5.4 9-5.4M12 21.6V13.2M21 16.2V7.8a1.8 1.8 0 00-.9-1.56l-7.2-4.2a1.8 1.8 0 00-1.8 0l-7.2 4.2A1.8 1.8 0 003 7.8v8.4a1.8 1.8 0 00.9 1.56l7.2 4.2a1.8 1.8 0 001.8 0l7.2-4.2a1.8 1.8 0 00.9-1.56z"/>
    </svg>`;
  }
  
  // Get link button SVG markup
  static getLinkButtonSvg() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>`;
  }
  
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
          background: linear-gradient(180deg, rgba(14,165,233,.10), rgba(14,165,233,.04));
          backdrop-filter: blur(6px);
          border-radius: .9rem;
          overflow: hidden;
          transition: all .25s ease;
        }
        .card:hover {
          border-color: rgba(14,165,233,.75);
          box-shadow: 0 0 18px rgba(14,165,233,.25), inset 0 0 18px rgba(14,165,233,.15);
          transform: translateY(-3px);
        }
        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          background: rgba(14,165,233,.08);
          border-bottom: 1px solid rgba(14,165,233,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .3s ease;
        }
        .card:hover .image-container img {
          transform: scale(1.05);
        }
        .placeholder-icon {
          width: 60px;
          height: 60px;
          color: rgba(14,165,233,.5);
        }
        .content {
          padding: 1rem;
        }
        .title {
          font-family: 'Orbitron', sans-serif;
          color: #0ea5e9;
          font-size: 1rem;
          letter-spacing: .08em;
          margin-bottom: .5rem;
        }
        .description {
          color: #94a3b8;
          font-size: .875rem;
          line-height: 1.5;
        }
        .tags {
          margin-top: .75rem;
          display: flex;
          flex-wrap: wrap;
          gap: .4rem;
        }
        ::slotted(.tag) {
          border: 1px solid rgba(14,165,233,.45);
          color: #cdefff;
          background: rgba(14,165,233,.08);
          padding: .25rem .5rem;
          border-radius: 999px;
          font-size: .75rem;
          letter-spacing: .06em;
        }
        .link-btn {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          margin-top: 1rem;
          padding: .5rem .75rem;
          background: rgba(14,165,233,.1);
          border: 1px solid rgba(14,165,233,.45);
          border-radius: .5rem;
          color: #e6f9ff;
          font-family: 'Orbitron', sans-serif;
          font-size: .75rem;
          letter-spacing: .1em;
          text-decoration: none;
          transition: all .2s ease;
        }
        .link-btn:hover {
          background: rgba(14,165,233,.2);
          border-color: rgba(14,165,233,.75);
          box-shadow: 0 0 12px rgba(14,165,233,.35);
        }
        .link-btn svg {
          width: 14px;
          height: 14px;
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
          opacity: .2;
        }
      </style>
      <div class="card">
        <div class="holo"></div>
        <div class="image-container"></div>
        <div class="content">
          <div class="title"></div>
          <div class="description"><slot></slot></div>
          <div class="tags"><slot name="tags"></slot></div>
          <div class="link-container"></div>
        </div>
      </div>
    `;
    
    // Initialize content after shadow DOM is set up
    this._updateImage();
    this._updateTitle();
    this._updateLink();
  }
  
  _updateImage() {
    const container = this.shadowRoot.querySelector('.image-container');
    if (!container) return;
    
    const imageSrc = ProjectCard.sanitizeUrl(this.getAttribute('image'));
    if (imageSrc) {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = this.getAttribute('title') || 'Project';
      container.innerHTML = '';
      container.appendChild(img);
    } else {
      container.innerHTML = ProjectCard.getPlaceholderSvg();
    }
  }
  
  _updateTitle() {
    const titleEl = this.shadowRoot.querySelector('.title');
    if (titleEl) {
      titleEl.textContent = this.getAttribute('title') || 'PROJECT TITLE';
    }
  }
  
  _updateLink() {
    const linkContainer = this.shadowRoot.querySelector('.link-container');
    if (!linkContainer) return;
    
    const linkUrl = ProjectCard.sanitizeUrl(this.getAttribute('link'));
    if (linkUrl) {
      const link = document.createElement('a');
      link.href = linkUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'link-btn';
      link.textContent = 'VIEW PROJECT ';
      link.innerHTML = 'VIEW PROJECT ' + ProjectCard.getLinkButtonSvg();
      linkContainer.innerHTML = '';
      linkContainer.appendChild(link);
    } else {
      linkContainer.innerHTML = '';
    }
  }
  
  attributeChangedCallback(name, oldVal, newVal) {
    if (!this.shadowRoot) return;
    
    if (name === 'title') {
      this._updateTitle();
      // Also update image alt if image exists
      const img = this.shadowRoot.querySelector('.image-container img');
      if (img) {
        img.alt = newVal || 'Project';
      }
    }
    if (name === 'image') {
      this._updateImage();
    }
    if (name === 'link') {
      this._updateLink();
    }
  }
}
customElements.define('project-card', ProjectCard);
