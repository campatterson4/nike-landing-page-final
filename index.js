const header = document.querySelector('header');

///// Navbar //////
function navBar() {
   header.classList.toggle('scrolled', window.pageYOffset > 0);
}

window.addEventListener('scroll', navBar)

///// Scroll Reveal //////

let reveal = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

reveal.reveal(".main-image", {delay: 400, origin: "top"});
reveal.reveal(".main-info", {delay: 400, origin: "bottom"});
reveal.reveal(".btn-wrapper", {delay: 400, origin: "bottom"});