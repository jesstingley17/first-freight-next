document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');

  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  const smoothLinks = document.querySelectorAll(
    '.nav a[href^="#"], .nav-cta a[href^="#"], .hero-actions a[href^="#"], .btn-link[href^="#"]'
  );

  smoothLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight + 8 : 0;
      const rect = target.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      if (header && header.classList.contains('is-open') && navToggle) {
        header.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const quoteForm = document.querySelector('.quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Simple front-end only feedback
      alert(
        'Thank you for your interest in First Freight.\n\nThis demo form is not yet connected to a live system. Please forward these details to your nearest branch so our team can assist you.'
      );
    });
  }

  const trackSection = document.querySelector('#track');
  const trackForm = trackSection ? trackSection.querySelector('form') : null;
  if (trackForm) {
    trackForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = trackForm.querySelector('input[name="tracking-number"]');
      const value = input && 'value' in input ? input.value.trim() : '';

      if (!value) {
        alert('Please enter a tracking number.');
        return;
      }

      alert(
        `Tracking for ${value} is not yet wired to live scan data in this demo.\n\nPlease contact your nearest First Freight branch and provide this number for real-time status.`
      );
    });
  }
});


