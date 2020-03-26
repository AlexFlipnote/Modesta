---
layout: docs
permalink: /nav_bar

title: Navigation Bar
description: The navigation bar in Modesta
---
# Usage
```html
<header class="nav-bar">
  <span class="nav-bars"></span>
  <section class="nav">
    <span class="nav-close"></span>
    <div class="nav-scroller">
      <a class="selected" href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </section>
  <h1>Example Site</h1>
</header>
```
<br>

The collapsed navigation bar has a scroller inside, so you can add as many links as you want!  
Having a title and an `<img>` in the nav-bar is optional, but the extra elements must be **after** the `nav` section.  
You can also add the `fixed` class to the `nav-bar` header to have the header stay on top of the page. If you have a fixed nav-bar, then you can remove the `nav-close` element.

You can also indent links by adding an `indent-NUM` class with the number being between 1 and 5.

# Navigation Bar Example:
[Click here](../examples/nav_bar)