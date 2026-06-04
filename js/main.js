// ════════════════════════════════════════
//  BALDO DIGITAL — main.js
// ════════════════════════════════════════


  // ── Navbar: hide on scroll down, show on scroll up ──

  let lastScrollY = window.scrollY;
  const navbar = document.querySelector('.bd-navbar');

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 80) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = currentY;
  }, { passive: true });

  // Smooth navbar transition
  if (navbar) {
    navbar.style.transition = 'transform 0.3s ease';
  }

  // ── Subtle fade-in on scroll ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.bd-card, .bd-card-sm, .bd-form-wrap').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });


