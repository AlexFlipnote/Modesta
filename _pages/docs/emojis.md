---
layout: docs
permalink: /docs/emojis

title: Emojis
description: Decorate your website with emojis~
---
While ModestaCSS offers many components for your desire, it also has emojis, the different emojis are:
- [blobcat](https://discord.gg/nG8fy52) (Blobcat emojis made from Discord community)
- twemoji (Twitter emojis)

Use this HTML to import the different emoji packs
```html
<!-- Twemoji version | ~190 KB -->
<link href="https://modesta.alexflipnote.xyz/css/twemoji.min.css" type="text/css" rel="stylesheet">

<!-- Blobcat version | ~20 KB -->
<link href="https://modesta.alexflipnote.xyz/css/blobcat.min.css" type="text/css" rel="stylesheet">
```

Usage of the emoji packs are easy, twemoji is based on all emoji names that are found, same with blobcat which are found [here](https://discord.gg/nG8fy52)

Note: Twemoji has a prefix called **twa-** due to some of the emojis starting with a number.

If any names are either miss spelled or missing, please make an issue [here](https://github.com/AlexFlipnote/ModestaCSS/issues)

# Preview
```html
<h2><i class="emoji twa-cookie"></i> This will display a cookie emoji</h2>
<h2><i class="emoji blobcat"></i> This will display a blobcat emoji</h2>
```
<h2><i class="emoji twa-cookie"></i> This will display a cookie emoji</h2>
<h2><i class="emoji blobcat"></i> This will display a blobcat emoji</h2>
