---
layout: docs
permalink: /markdown

title: Markdown
description: Markdown for Jekyll
---

NOTE: This works best when you use [Jekyll's](https://jekyllrb.com/) markdown maker, but can be used without it too.
```html
<div class="markdown-container">
  <!-- Whatever markdown inside here -->
</div>
```

If you want to have the default font used by GitHub markdown generator, add the following class
```html
<div class="markdown-container github-font-standard">
  { content }
</div>
```

The `{ content }` is used for `_layouts` in Jekyll and would look like this:

![preview](https://i.alexflipnote.dev/c8cabd.png)

You can see a live example of all elements [here](examples/markdown)


If only using markdown without ModestaCSS is your thing, just use this:
```html
<link href="https://modesta.alexflipnote.dev/css/markdown.css" type="text/css" rel="stylesheet">
```
