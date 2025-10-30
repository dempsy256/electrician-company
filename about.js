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