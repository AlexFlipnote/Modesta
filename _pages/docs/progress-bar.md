---
layout: docs
permalink: /progress-bar

title: Progress Bar
description: Making progress viewable at least
---
Progress bar can be used to track the progress of whatever you're making.
Keep in mind that you have to customize the width yourself with some JavaScript tricks or whatever pleases you.
```html
<div class="progress-container">
  <div class="progress-bar COLOUR-bar" style="width: 25%;"></div>
</div>
```

You can use any [colours](/colours). Just replace the `COLOUR-bar` in **COLOUR-bar** with whatever you desire.

# Examples:
<style>.progress-container { margin-bottom: .75em; }</style>

<div class="progress-container">
  <div class="progress-bar sun-flower-bar" style="width: 0%;"></div>
</div>

<div class="progress-container">
  <div class="progress-bar sun-flower-bar" style="width: 25%;"></div>
</div>

<div class="progress-container">
  <div class="progress-bar sun-flower-bar" style="width: 50%;"></div>
</div>

<div class="progress-container">
  <div class="progress-bar sun-flower-bar" style="width: 75%;"></div>
</div>

<div class="progress-container">
  <div class="progress-bar sun-flower-bar" style="width: 100%;"></div>
</div>
