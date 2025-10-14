const sections = document.querySelectorAll("section");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

sections.forEach((section) => {
    observer.observe(section);
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const heroSection = document.getElementById('hero');
    const navLogo = document.querySelector('.navlogo');
    
    // Set initial styles and transition for smooth opacity change
    navLogo.style.transition = 'opacity 0.3s ease';
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      
      if (entry.isIntersecting) {
        // Hero section is visible, set navLogo opacity to 0
        navLogo.style.opacity = '0';
      } else {
        // Hero section is not visible, set navLogo opacity to 1
        navLogo.style.opacity = '1';
      }
    }, {
      threshold: 0.1 // Trigger when at least 10% of the hero is visible
    });
    
    // Start observing the hero section
    observer.observe(heroSection);
  });
