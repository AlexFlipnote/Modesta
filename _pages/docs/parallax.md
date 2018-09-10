---
layout: docs
permalink: /parallax

title: Parallax
description: Making your website a bit more fancy
---
This is basically a "parallax" which is a fixed image that stands still on scroll.
It is recommended to use a large image to take a good effect over the cover background.

```html
<section class="parallax-container">
  <div class="parallax" style="background-image: url('IMAGE URL')"></div>
  <div class="content">
    <h1>Hello world</h1>
  </div>
</section>
```

You can also customize the size of the parallax:
```html
<section class="parallax-container">
  <div class="parallax small|medium|large"></div>
</section>
```
- small = 15em
- medium = 26em
- large = 33em

# Preview
<section class="parallax-container">
  <div class="parallax" style="background-image: url('https://i.alexflipnote.xyz/86de96.jpg')"></div>
  <div class="content">
    <h1>Hello world</h1>
  </div>
</section>

# Example on live site:
[Click here](../examples/parallax)
