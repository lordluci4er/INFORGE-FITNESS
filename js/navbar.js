/* ==========================================
   IRONFORGE FITNESS
   NAVBAR
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(0,0,0,.90)";

        header.style.boxShadow="0 10px 35px rgba(0,0,0,.45)";

    }

    else{

        header.style.background="rgba(0,0,0,.35)";

        header.style.boxShadow="none";

    }

});