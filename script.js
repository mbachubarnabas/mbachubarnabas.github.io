```javascript
/* =====================================================
   BARNABAS MBACHU PORTFOLIO
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after clicking a link */

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =====================================================
   NAVBAR SHADOW
===================================================== */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) return;


    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.18)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);


updateNavbar();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".highlight-card, .tool-card, .case-card, .timeline-content"
    );


if ("IntersectionObserver" in window) {


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add(
            "reveal-ready"
        );

        revealObserver.observe(element);

    });

}


/* =====================================================
   FOOTER YEAR
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   CLOSE MOBILE MENU WITH ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navMenu &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);
```
