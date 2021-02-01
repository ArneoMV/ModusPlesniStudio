
$(document).ready(function() {

  const menuSlide = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    //const navLinksInner = document.querySelectorAll(".nav-links a");
  
    //menu-icon click event
    menuIcon.addEventListener("click", () => {
      //toggle active class
      navLinks.classList.toggle("menu-active");
      //toggle for menu-icon animation
      menuIcon.classList.toggle("span-anime");
    });

    //nav-link click event
    navLinks.addEventListener("click", () => {
      //toggle active class
      navLinks.classList.toggle("menu-active");
      //toggle for menu-icon animation
      menuIcon.classList.toggle("span-anime");
    });
  };
  
  menuSlide();

});