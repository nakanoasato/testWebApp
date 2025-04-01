// js/menu.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("side-menu");
  
    hamburger.addEventListener("click", () => {
      sideMenu.classList.toggle("open");
    });
  
    // メニューを閉じるエリアクリック用（外側クリック時）
    document.addEventListener("click", function (e) {
      const isClickInside = hamburger.contains(e.target) || sideMenu.contains(e.target);
      if (!isClickInside) {
        sideMenu.classList.remove("open");
      }
    });
  });
