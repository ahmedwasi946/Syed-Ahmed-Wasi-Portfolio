document.addEventListener("DOMContentLoaded", () => {
  // 1. Animate skill progress bars when scrolled into view
  const skillValues = document.querySelectorAll(".skill-value");

  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetWidth = target.getAttribute("data-target");
          if (targetWidth) {
            target.style.width = targetWidth;
          }
          observer.unobserve(target); // Animate once
        }
      });
    },
    { threshold: 0.3 }
  );

  skillValues.forEach((skill) => skillObserver.observe(skill));

  // 2. Contact form submission handler
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent successfully.");
      contactForm.reset();
    });
  }

  // 3. Newsletter form submission handler
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for subscribing to the newsletter!");
      newsletterForm.reset();
    });
  }

  // 4. Download CV action placeholder
  const downloadCvBtn = document.querySelector(".nav-button");
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", () => {
      alert("Downloading Alex Carter's Resume...");
    });
  }
});
