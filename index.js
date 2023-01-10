const header = document.querySelector('header');

///// Navbar //////
function navBar() {
   header.classList.toggle('scrolled', window.pageYOffset > 0);
}

window.addEventListener('scroll', navBar)