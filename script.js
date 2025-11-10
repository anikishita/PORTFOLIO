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

// Contact form behavior (mailto fallback)
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name') || '');
    const email = encodeURIComponent(data.get('email') || '');
const subject = encodeURIComponent((data.get('subject') || 'New message from KENITH site'));
const message = encodeURIComponent(`${data.get('message') || ''}\n\nFrom: ${name} <${email}>`);
    // Replace with your email
    const to = 'mosquera.kp10@gmail.com';
const mailto = `mailto:${to}?subject=${subject}&body=${message}`;

    // Try opening mail client
    window.location.href = mailto;

    if (formStatus) {
      formStatus.textContent = 'Transmission prepared. If your email client did not open, please send manually.';
    }
    form.reset();
  });
}

// Optional: reduce motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.animate-glowPulse, .animate-float, .animate-scanline').forEach(el => {
    el.style.animation = 'none';
  });
}