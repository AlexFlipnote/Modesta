---
layout: docs
permalink: /navbar

title: Navbar
description: Make a navigation bar for your website
---
Navigation bar is made to be responsive, but do not add too many links.
```html
<div class="nav-container">
  <span id="menu-icon"></span>

  <h1 class="nav-title">Cool website</h1>
  <!-- OR -->
  <div class="nav-content">
    <h4>Nice stuff</h4>
  </div>

  <div id="navside" class="sidenav">
    <a href="#" class="current">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  <script>
    var navside = document.getElementById('navside');
    document.getElementById("menu-icon").onclick = function() { navside.style.transform = "translateX(0)"; }
    document.addEventListener("click", function(event) {
      if (event.target.closest(".nav-container")) return;
      navside.style.transform = "translateX(-250px)";
    });
    </script>
</div>
```

# Example:
[Click here](../examples/navbar)
