---
layout: docs
permalink: /nav_bar

title: Nav-bar
description: The navigation bar in ModestaCSS
---
# Usage
```html
<header class="nav-bar">
  <div class="nav-container">
    <!-- Having a title in the navigation bar is optional -->
    <h1>Title</h1>
    <nav>
      <span class="nav-bars"></span>
      <div class="nav-inner">
        <div class="nav-scroller">
          <a class="selected" href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </nav>
  </div>
</header>
```
<br>

The collapsed navigation bar has a scroller inside, so you can add as many links as you want!

# Navigation Bar Example:
[Click here](../examples/nav_bar)