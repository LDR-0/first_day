const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.setAttribute('aria-pressed', String(!isDark));
  });
}

const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

function revealSections() {
  document.querySelectorAll('[data-reveal]').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    const value = bar.getAttribute('data-value');
    if (value) bar.style.width = value + '%';
  });
});

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
document.querySelectorAll('.project-item__link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    if (modal && modalContent) {
      modalContent.innerHTML = `<iframe src='${this.href}' style='width:100%;height:60vh;border:none;'></iframe>`;
      modal.classList.add('active');
    }
  });
});
if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
}
