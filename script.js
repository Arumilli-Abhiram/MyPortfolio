// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typing animation
const phrases = ["I am a Tech Enthusiast", "I love solving real-world problems", "I build secure systems"];
let index = 0;
let char = 0;
const output = document.getElementById("dynamic-text");

function type() {
  const currentPhrase = phrases[index];
  output.textContent = currentPhrase.substring(0, char++);
  if (char > currentPhrase.length) {
    char = 0;
    index = (index + 1) % phrases.length;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}
type();

// Scroll reveal animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Navbar shadow on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});
