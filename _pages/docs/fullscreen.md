---
layout: docs
permalink: /docs/fullscreen

title: Fullscreen
description: The simplest way to make a website in <CURRENT YEAR>
---
This will fill the current screen 100% on height and width.
You can also do `<section class="fullscreen half">` to only fill 50% of the screen.
If you add anything under it, then of course more content will be under, but you will always
start with a fullscreen/half screen on the start.
```html
<section class="fullscreen">
  <div class="background" style="background-image: url('URL/PATH');"></div>
  <div class="center-object">
    <section class="me">
      <img draggable="false" src="URL/PATH" class="image-title">
      <h1 class="title">Username</h1>
      <span class="undertitle">Text under username</span>
    </section>
    <div class="buttons">
      <a href="#" class="btn animation turquoise" target="_blank">Website 1</a>
      <a href="#" class="btn animation nephritis-flat" target="_blank">Website 2</a>
    </div>
  </div>
  <!-- <div id="fade" class="arrow bounce"></div> -->
</section>
```

# Example:
[Click here](../examples/fullscreen)
