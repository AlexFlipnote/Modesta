---
layout: docs
permalink: /fullscreen

title: Fullscreen
description: The simplest way to make a website in CURRENT_YEAR
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
      <p class="undertitle">Text under username</p>
    </section>
    <div class="buttons">
      <a href="#" class="btn animation turquoise" target="_blank">Website 1</a>
      <a href="#" class="btn animation nephritis-flat" target="_blank">Website 2</a>
    </div>
  </div>
  <!--<div class="arrow bounce">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.32 291.98" class="white-fill">
    <path d="M466.5,15.5L466,15c-19.8-19.8-52-19.8-71.9,0L240.8,168.3L87.2,14.8C67.4-5,35.2-5,15.4,14.8l-0.5,0.5 C-5,35.2-5,67.4,14.8,87.2l186.6,186.6c0.9,1,1.8,2,2.7,3v0c3.8,3.8,8.1,6.9,12.7,9.3c17,9,38.1,7.7,53.9-3.9 c2.2-1.6,4.4-3.4,6.4-5.4L466.5,87.4C486.4,67.6,486.4,35.4,466.5,15.5z"/>
  </svg>
  </div>-->
</section>
```

## arrow
The arrow is based of SVG, meaning it might seem a bit long, but it's better than needing to rely on an image being hosted somewhere. You can change the colour of it by changing the class like `white-fill` to `COLOUR-fill` of your choice. Any colours that are included from ModestaCSS works as long as you add `-fill` at the end of it.

## center-object
```html
<div class="center-object">
  <!-- Content inside here -->
</div>
```
If you're interested in only making the current website you're on center both horizontal and vertical, you can by using only the class **center-object**

## Extra styles
#### Avatar and Text on same line
```html
<section class="me">
  <img draggable="false" src="URL/PATH" class="image-title">
  <!-- Add a new div here -->
  <div class="unset">
    <h1 class="title">Username</h1>
    <span class="undertitle">Text under username</span>
  </div>
</section>
```

#### one-line responsive
```html
<div class="buttons one-line">
  <!-- Insert buttons here -->
</div>
```
Preview:

![preview](https://i.alexflipnote.dev/52d38a.gif)

NOTE: The button is only to showcase the change, you won't need such when using it live.

#### Corner control on avatar
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

# Fullscreen Example:
[Click here](../examples/fullscreen)
