/**
 * Navigation and interaction script for xemX revamped website
 * Handles hamburger menu, mobile nav, and active link highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul a');
  const skipLink = document.querySelector('.skip-link');

  // Hamburger menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle && navToggle.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle && navToggle.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Update active nav link on scroll using IntersectionObserver
  const sections = document.querySelectorAll('[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('nav-link-active'));
        const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('nav-link-active');
        }
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    if (section.id) {
      observer.observe(section);
    }
  });

  // Skip link functionality
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainElement = document.querySelector('#main');
      if (mainElement) {
        mainElement.focus();
        mainElement.scrollIntoView();
      }
    });
  }
});
