/* ==========================================
   IRONFORGE FITNESS
   NAVBAR
========================================== */

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

/* Header Scroll Effect */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.90)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});

/* Mobile Menu */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* Close Menu After Click */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});