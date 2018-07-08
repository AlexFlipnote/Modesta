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

## center-object
```html
<div class="center-object">
  <!-- Content inside here -->
</div>
```
If you're interested in only making the current website you're on center both horizontal and vertical, you can by using only the class **center-object**

## Extra styles
```html
<section class="me unset">
```
This will make both image and text on the same line

```html
<img draggable="false" src="URL/PATH" class="image-title no|small|medium|large-border">
```
If you don't enjoy the 100% border-radius, you can customize it to either be none or a small size.

| Class name    | What it does         |
| ------------- | -------------------- |
| no-border     | border-radius: 0;    |
| small-border  | border-radius: 5px;  |
| medium-border | border-radius: 15px; |
| large-border  | border-radius: 25px; |

# Example:
[Click here](../examples/fullscreen)
