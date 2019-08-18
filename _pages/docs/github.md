---
layout: docs
permalink: /github

title: GitHub
description: GitHub objects in ModestaCSS
---
# Pinned Repository
Creating the familiar GitHub repo object shown on your profile is easy to do, but just keep in mind that the SVG can be a bit long.
You can also change the colour in `<span class="colour meta">` to match whatever you need, there's no default colour so having no style background will result in transparent output.

If you want this synced with one of your repos on GitHub, use [https://api.github.com/users/AlexFlipnote](https://api.github.com/users/AlexFlipnote) (replace **AlexFlipnote** with your GitHub username) and write some JavaScript to pull information and replace the code below.

There's no need to enter anything inside the `<path>` tag as ModestaCSS will handle that all for you without any issues.
```html
<section class="github-repo-item">
  <div class="content">
    <a href="#" class="name">ModestaCSS</a>
    <p class="description">🎨 A clean CSS framework made to be dark, responsive and easy to build with.</p>
    <p class="information">
      <span class="colour meta" style="background-color: #563d7c;"></span> CSS
      <a href="#" class="meta link">
        <svg class="star"><path></path></svg>
        1337
      </a>
      <a href="#" class="meta link">
        <svg class="fork"><path></path></svg>
        1337
      </a>
      <a href="#" class="meta link">
        <svg class="license"><path></path></svg>
        GPL-3.0
      </a>
    </p>
  </div>
</section>
```

# Preview
<section class="github-repo-item">
  <div class="content">
    <a href="#" class="name">ModestaCSS</a>
    <p class="description">🎨 A clean CSS framework made to be dark, responsive and easy to build with.</p>
    <p class="information">
      <span class="colour meta" style="background-color: #563d7c;"></span> CSS
      <a href="#" class="meta link">
        <svg class="star"><path></path></svg>
        1337
      </a>
      <a href="#" class="meta link">
        <svg class="fork"><path></path></svg>
        1337
      </a>
      <a href="#" class="meta link">
        <svg class="license"><path></path></svg>
        GPL-3.0
      </a>
    </p>
  </div>
</section>
