function checkSizeNavbar(navbar, navside) {
  if (window.innerWidth < 650) {
    navside.style.transform = "translateX(-250px)";
    navbar.classList.remove("default");
  } else {
    navside.style.transform = "translateX(0)";
    navbar.classList.add("default");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById('navbar');
  var navside = document.getElementById('navside');
  var menuicon = document.getElementById("menu-icon");

  document.getElementById("menu-icon").onclick = function() {
    navside.style.transform = "translateX(0)";
  }

  document.addEventListener("click", function(event) {
    if (window.getComputedStyle(menuicon).display == "block") {
      if (event.target.closest(".nav-container")) return;
      navside.style.transform = "translateX(-250px)";
    }
  });

  if (navbar) {
    checkSizeNavbar(navbar, navside);

    window.addEventListener("resize", function() {
      checkSizeNavbar(navbar, navside)
    });
  }
});
