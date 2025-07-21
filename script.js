// Animate title when scrolled into view
const title = document.querySelector('.title-animated');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.classList.add('animate-glow');
      } else {
        title.classList.remove('animate-glow');
      }
    });
  },
  { threshold: 0.5 }
);

if (title) observer.observe(title);

// Button click animation (optional ripple effect)
document.querySelectorAll('.button-animated').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    // Position ripple where mouse was clicked
    const x = e.clientX - this.getBoundingClientRect().left;
    const y = e.clientY - this.getBoundingClientRect().top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Remove after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
