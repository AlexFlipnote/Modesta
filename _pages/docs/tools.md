---
layout: docs
permalink: /tools

title: Tools
description: Multiple tools to use with your websites
---
# Progress bar
Progress bar can be used to track the progress of whatever you're making.
Keep in mind that you have to customize the width yourself with some JavaScript tricks or whatever pleases you.
```html
<div class="progress-container">
  <div class="progress-bar COLOUR-bar" style="width: 25%;"></div>
</div>

<!-- or if you want % number inside progress bar -->

<div class="progress-container">
  <div class="progress-bar COLOUR-bar" style="width: 25%;" data-progress="25%"></div>
</div>
```

You can use any [colours](/colours). Just replace the `COLOUR-bar` with whatever you desire.

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

<div class="progress-container">
  <div class="progress-bar sun-flower-bar black-text" style="width: 60%;" data-progress="60%"></div>
</div>

# Loading
It will only import the loading animation, not the text above.

`NOTE: It does not disappear by itself, you'll have to make it disappear yourself.`

```html
<div class="loader">Loading...</div>
```

<div class="loader">Loading...</div>

# Tooltip
You can use tooltip on any kind of element in your website, just keep in mind that you have to use tooltip class and data-tooltip.
By default, it's located at bottom, but you can change directions to either left or right.
```html
<p class="tooltip left|right" data-tooltip="Hello world.">Some nice text</p>
```
**Examples:**
<div class="flex-grid center-text">
  <div class="col-xs"><p class="primary tooltip" data-tooltip="Hello world.">Tooltip bottom</p></div>
  <div class="col-xs"><p class="primary tooltip left" data-tooltip="Hello world.">Tooltip left</p></div>
  <div class="col-xs"><p class="primary tooltip right" data-tooltip="Hello world.">Tooltip right</p></div>
</div>

# Label
You can customize the label to any colour you desire.
```html
<h3>Hello<span class="label COLOUR">BETA</span></h3>
```
<h3>Hello<span class="label sun-flower black-text">BETA</span></h3>
