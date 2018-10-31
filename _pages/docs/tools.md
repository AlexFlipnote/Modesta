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

# Loading
It will only import the loading animation, not the text above.

`NOTE: It does not disappear by itself, you'll have to make it disappear yourself.`

```html
<div class="loader">Loading...</div>
```

<div class="loader">Loading...</div>

# Label
You can customize the label to any colour you desire.
```html
<h3>Hello<span class="label COLOUR">BETA</span></h3>
```
<h3>Hello<span class="label sun-flower black-text">BETA</span></h3>
