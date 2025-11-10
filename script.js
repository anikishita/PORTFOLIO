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

// Contact form behavior
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        formStatus.textContent = 'Transmission successful!';
        form.reset();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            formStatus.textContent = data["errors"].map(error => error["message"]).join(", ")
          } else {
            formStatus.textContent = 'Oops! There was a problem sending your message.'
          }
        })
      }
    }).catch(error => {
      formStatus.textContent = 'Oops! There was a problem sending your message.'
    });
  });
}

// Loading screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500); // Corresponds to fade-out duration
    }, 4000); // Show loading screen for 4 seconds
  }
});

// Optional: reduce motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.animate-glowPulse, .animate-float, .animate-scanline').forEach(el => {
    el.style.animation = 'none';
  });
}