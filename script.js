// K/EN-ITH Portfolio — interactions

// Mobile menu
const menuBtn = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}

// Smooth anchor scroll highlight (optional)
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (!mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
      }
    }
  });
});

// Open contact modal
const openBtns = document.querySelectorAll('[data-open-contact]');
const modal = document.getElementById('contactModal');
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (modal) modal.showModal();
  });
});

// Loading screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500); // Corresponds to fade-out duration
    }, 3000); // Show loading screen for 3 seconds
  }
});

// Optional: reduce motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.animate-glowPulse, .animate-float, .animate-scanline').forEach(el => {
    el.style.animation = 'none';
  });
}

// Vercel Serverless Function form submission
document.addEventListener('DOMContentLoaded', () => {
  const contactFormComponent = document.querySelector('contact-form');
  if (contactFormComponent) {
    const form = contactFormComponent.shadowRoot.getElementById('contactForm');
    const formStatus = contactFormComponent.shadowRoot.getElementById('formStatus');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitButton.disabled = true;
      formStatus.textContent = 'Sending transmission...';

      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          formStatus.textContent = result.message;
          form.reset();
        } else {
          formStatus.textContent = `Error: ${result.message}`;
        }
      } catch (error) {
        console.error('Submission error:', error);
        formStatus.textContent = 'A network error occurred. Please try again.';
      } finally {
        submitButton.disabled = false;
      }
    });
  }
});
