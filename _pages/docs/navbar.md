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

If you do not wish to have only menu icon, you can simple add this to nav-container.
```html
<div class="nav-container default">
  <!-- [...] -->
</div>
```
and you can also drop the `<script>` part as well

## Responsive
```html
<!-- Include this in your website -->
<script src="https://modesta.alexflipnote.dev/js/navbar.js"></script>

<!-- Then add ID and class to nav-container -->
<div id="navbar" class="nav-container default">
  <!-- [...] -->
</div>
```

# Example:
[Click here](../examples/navbar)
