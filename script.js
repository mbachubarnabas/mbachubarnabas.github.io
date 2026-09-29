```javascript
// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// ==========================================
// CLOSE MENU WHEN LINK IS CLICKED
// ==========================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ==========================================
// NAVBAR SHADOW ON SCROLL
// ==========================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// ==========================================
// REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".highlight-card, .case-card, .tool-card, .timeline-content"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});
```
