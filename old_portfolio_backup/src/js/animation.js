// =========================================
// SAMUEL BARBOSA PORTFOLIO — animation.js
// =========================================

const header = document.getElementById('header');
const backToTopBtn = document.getElementById('backToTop');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// ===== SCROLL: Hide/show header + Back to top =====
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Hide header on scroll down
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  // Add scrolled class for stronger bg
  header.classList.toggle('scrolled', scrollTop > 50);

  // Back to top button
  backToTopBtn.classList.toggle('show', scrollTop > 400);

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== BACK TO TOP =====
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link-mobile').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
  });
});

// ===== SCROLL SPY: Active nav link =====
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => scrollObserver.observe(section));

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.section, .project-card, .stack-card, .service-card, .tl-item, .code-card, .cert-block');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

reveals.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Fallback: reveal any still-hidden elements after 1.5s (e.g. already-in-viewport on load)
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 80);
  });
}, 800);

// ===== TECH TAG ACTIVE STATE =====
document.querySelectorAll('.tech-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.tech-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
  });
});

// Show mouse near top to reveal header
document.addEventListener('mousemove', (e) => {
  if (e.clientY < 80) header.classList.remove('hide');
});

// ===== FLOATING RADIAL MENU =====
function toggleFloatMenu() {
  const menu = document.getElementById('floatMenu');
  if (menu) menu.classList.toggle('open');
}

// Close float menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('floatMenu');
  const toggle = document.getElementById('floatToggle');
  if (menu && toggle && !menu.contains(e.target)) {
    menu.classList.remove('open');
  }
});

