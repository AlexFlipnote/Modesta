---
layout: docs
permalink: /cards

title: Cards
description: Generate lovely card profiles
---
# Normal card
Cards must always be inside a card container.
If you're making multiple cards, just add all the cards inside of the container.
```html
<section class="card-container">
  <div class="card">
    <div class="avatar">
      <img src="URL/PATH">
    </div>
    <h1 class="title">Username</h1>
    <p class="description">Text under username</p>
    <div class="footer">
      <a href="#">Website</a>
      <a href="#">Website 2</a>
    </div>
  </div>

  <div class="card">...
</section>
```

## Preview
<section class="card-container">
  <div class="card">
    <div class="avatar">
      <img src="../css/images/avatar.png" style="filter: none;">
    </div>
    <h1 class="title">Username</h1>
    <p class="description">Text under username</p>
    <div class="footer">
      <a href="#">Website</a>
      <a href="#">Website 2</a>
    </div>
  </div>

  <div class="card">
    <div class="avatar">
      <img src="../css/images/avatar.png" style="filter: none;">
    </div>
    <h1 class="title">Username</h1>
    <p class="description">Text under username</p>
  </div>
</section>

# Worker card
Have an image card on your website to display something with more style.

You can replace `<span>` with whatever text type you want.
```html
<section class="workcard-container">
  <div class="card">
    <img src="https://i.alexflipnote.xyz/7c4714.png">
    <div class="overlay">
      <span class="text">Hello world<br>Have a nice day</span>
    </div>
  </div>
  <!-- and more cards if wanted -->
</section>
```

NOTE: If you want to have a clickable card:
```html
<!-- Target -->
<div class="overlay"></div>

<!-- Replace to -->
<a href="LINK HERE" class="overlay"></a>
```
## Preview
<section class="workcard-container">
  <div href="#" class="card">
    <img src="https://i.alexflipnote.xyz/7c4714.png">
    <a class="overlay">
      <h1 class="text">Hello world<br>Have a nice day</h1>
    </a>
  </div>
  <div class="card">
    <img src="https://i.alexflipnote.xyz/7c4714.png">
    <div class="overlay">
      <h2 class="text">Hello world</h2>
    </div>
  </div>
  <div class="card">
    <img src="https://i.alexflipnote.xyz/7c4714.png">
    <div class="overlay">
      <h3 class="text">Hello world</h3>
    </div>
  </div>
  <div class="card">
    <img src="https://i.alexflipnote.xyz/7c4714.png">
    <div class="overlay">
      <p class="text">Hello world<br>Have a nice day</p>
    </div>
  </div>
</section>
