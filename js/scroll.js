/* ==========================================================
   SCROLL REVEAL
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach((element) => observer.observe(element));

});