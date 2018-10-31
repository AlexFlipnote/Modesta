---
layout: docs
permalink: /github

title: GitHub
description: GitHub objects in ModestaCSS
---
# Pinned repository
Creating the familiar GitHub repo. shown on your profile is easy to do, but just keep in mind that the SVG can be a bit long.
You can also change the colour in `<span class="colour meta">` to match whatever you need, there's no default colour so having no style background will result in transparent output.

If you want this synced with one of your repo. on GitHub, use [https://api.github.com/users/alexflipnote](https://api.github.com/users/alexflipnote) (replace **alexflipnote** with your GitHub username) and make some JavaScript to pull information and replace the code below.
```html
<section class="github-repo-item">
  <div class="content">
    <a href="#" class="name">ModestaCSS</a>
    <p class="description">🎨 A clean CSS framework made to be dark, responsive and easy to build with.</p>
    <p class="information">
      <span class="colour meta" style="background-color: #563d7c;"></span> CSS
      <a href="#" class="meta link">
        <svg class="star"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
        1337
      </a>
      <a href="#" class="meta link">
        <svg class="fork"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        1337
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
        <svg class="star"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
        1337
      </a>
      <a href="#" class="meta link">
        <svg class="fork"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        1337
      </a>
    </p>
  </div>
</section>
