// ---------------------
// LOADER CONTROL
// ---------------------
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const nav = document.querySelector("nav");
  const mainContent = document.querySelector("body");

  // Simulate the loader progress up to 99%
  let percent = 0;
  const intern = document.querySelector(".intern");

  const loading = setInterval(() => {
    percent += 3;
    if (percent >= 99) {
      clearInterval(loading);
      percent = 100;
      intern.textContent = "100%";

      // Fade out loader
      loader.style.transition = "opacity 1s ease";
      loader.style.opacity = 0;

      // Reveal the website after loader
      setTimeout(() => {
        loader.style.display = "none";
        nav.style.opacity = 1;
        document.body.style.overflowY = "auto"; // Allow scrolling
      }, 1000);
    } else {
      intern.textContent = `${percent}%`;
    }
  }, 80);
});

// ---------------------
// SCROLL ANIMATIONS
// ---------------------
const observerOptions = {
  threshold: 0.2
};

// Observe when sections enter viewport
const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add scroll effect to all important sections
document.querySelectorAll(".intro, .services, .service-card, .why, .why-card, .start, footer").forEach(el => {
  el.classList.add("hidden");
  revealOnScroll.observe(el);
});
