document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const navbar = document.querySelector("nav");
  const percentDisplay = document.querySelector(".intern");
  const allSections = document.querySelectorAll("section, footer");

  // Initially hide everything except loader
  navbar.style.opacity = "0";
  allSections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "opacity 1s ease, transform 1s ease";
  });

  let percent = 0;
  const loadingInterval = setInterval(() => {
    percent += 5;
    percentDisplay.textContent = `${percent}%`;

    if (percent >= 99) {
      clearInterval(loadingInterval);

      // Fade out loader
      setTimeout(() => {
        loader.style.transition = "opacity 0.6s ease";
        loader.style.opacity = "0";

        // After loader fades out, remove it and show content
        setTimeout(() => {
          loader.style.display = "none";

          // Reveal navbar and first section
          navbar.style.opacity = "1";
          document.body.style.overflowY = "auto"; // enable scrolling

          // Fade in first visible sections
          revealVisibleSections();

          // Activate scroll reveal listener
          window.addEventListener("scroll", revealVisibleSections);
        }, 600);
      }, 500);
    }
  }, 100); // 0.1s per 5% = 2s total
  

  // Function to reveal sections as user scrolls
  function revealVisibleSections() {
    const triggerBottom = window.innerHeight * 0.85;

    allSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  }

  // Prevent scrolling during loading
  document.body.style.overflow = "hidden";
});



let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");

  if (window.scrollY > lastScrollY) {
    // User is scrolling down → hide navbar
    navbar.classList.add("hidden");
  } else {
    // User is scrolling up → show navbar
    navbar.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});
