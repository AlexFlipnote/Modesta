---
layout: docs
permalink: /scroll_ins

title: Scroll-ins
description: The types of scroll-ins in ModestaCSS
---
Scroll-ins are elements that fade into view once you scroll into them. These scroll-ins can have varying types of fade-in animations.  
In order to remove the orderly fade-in effect, you can add the `no-delay` class name.

**Note:** Scroll-in elements start fading in once the page has finished loading.

# Usage
```html
<p class="scroll-in">Fade-in scroll-in</p>
<p class="scroll-in from-left">Fade-in from the left</p>
<p class="scroll-in from-right">Fade-in from the right</p>
<p class="scroll-in from-top">Fade-in from the top</p>
<p class="scroll-in from-bottom">Fade-in from the bottom</p>
<p class="scroll-in from-front">Fade-in from the front</p>
<p class="scroll-in from-back">Fade-in from the back</p>
```
<br>

# Preview
<div>
  <span class="label scroll-in">1</span>
  <span class="label scroll-in">2</span>
  <span class="label scroll-in">3</span>
</div>

# Scroll-in Example:
[Click here](../examples/scroll_in)