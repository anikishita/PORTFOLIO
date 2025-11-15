class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Shared styles */
        :host {
          display: block;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .field {
          background-color: rgba(11, 16, 32, 0.7);
          border: 1px solid rgba(14, 165, 233, 0.4);
          border-radius: 0.375rem;
          padding: 0.75rem 1rem;
          color: white;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.6);
        }
        .btn-primary {
          background-color: #0ea5e9;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: #00bfff;
        }
        #formStatus {
          margin-top: 1rem;
        }
      </style>
      <form id="contactForm" class="grid gap-4">
        <div class="grid sm:grid-cols-2 gap-4">
          <label class="input-group">
            <span>Callsign</span>
            <input required name="name" placeholder="Your name" class="field"/>
          </label>
          <label class="input-group">
            <span>Channel</span>
            <input required type="email" name="email" placeholder="your@email.com" class="field"/>
          </label>
        </div>
        <label class="input-group">
          <span>Subject</span>
          <input required name="subject" placeholder="Project or mission" class="field"/>
        </label>
        <label class="input-group">
          <span>Message</span>
          <textarea required name="message" rows="5" placeholder="Brief your mission..." class="field"></textarea>
        </label>
        <div class="flex items-center gap-4">
          <button type="submit" class="btn-primary">> SEND TRANSMISSION</button>
          <div id="formStatus" class="text-sm text-slate-400"></div>
        </div>
      </form>
    `;
  }
}

customElements.define('contact-form', ContactForm);
