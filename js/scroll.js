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

/* ==========================================================
   SCROLL PROGRESS + BACK TO TOP
========================================================== */

const progressBar = document.querySelector(".scroll-progress");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

    if (scrollTop > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});