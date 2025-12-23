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


// Hide loading screen immediately for instantaneous page loads
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
});

// Optional: reduce motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.animate-glowPulse, .animate-float, .animate-scanline').forEach(el => {
    el.style.animation = 'none';
  });
}

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('modal-placeholder');
  if (placeholder) {
    fetch('modal.html')
      .then(response => response.text())
      .then(data => {
        placeholder.innerHTML = data;
        initializeModal();
      })
      .catch(error => console.error('Error loading modal:', error));
  }
});

function initializeModal() {
  const modal = document.getElementById('imageModal');
  const profileImage = document.querySelector('img[src="images/profile.png"]');
  const modalImage = document.getElementById('modalImage');
  const closeButton = document.querySelector('.close-button');

  if (!modal || !profileImage || !modalImage || !closeButton) {
    console.error('Modal elements not found.');
    return;
  }

  profileImage.addEventListener('click', () => {
    modalImage.src = profileImage.src;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });

  const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
  };

  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
}