// js/menu.js

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("side-menu");
  
    hamburger.addEventListener("click", () => {
      sideMenu.classList.toggle("open");
    });
  });
