---
layout: docs
permalink: /emojis

title: Emojis
description: Decorate your website with emojis~
---

While ModestaCSS offers many useful components, you may optionally also add emojis and emoticons to your website.

Currently, ModestaCSS supports:
- [blobcat](https://discord.gg/nG8fy52) (Blobcat emoticons made from Discord community)
- twemoji (Twitter emojis)

Use this HTML to import the different emoji packs
```html
<!-- Twemoji version | ~190 KB -->
<link href="https://modesta.alexflipnote.xyz/css/twemoji.min.css" type="text/css" rel="stylesheet">

<!-- Blobcat version | ~20 KB -->
<link href="https://modesta.alexflipnote.xyz/css/blobcat.min.css" type="text/css" rel="stylesheet">
```

For the names of _twemoji_ emojis, use `twa-` followed by a code [found here](https://github.com/AlexFlipnote/ModestaCSS/blob/master/scss/assets/_emoji-map.scss)

For the names of _blobcat_ emoticons, join the [blobcat Discord Server](https://discord.gg/nG8fy52), and use the names of emoticons listed there.

If any names are either misspelt or missing, please [make an issue here](https://github.com/AlexFlipnote/ModestaCSS/issues)

# Preview
```html
<p><i class="emoji twa-cookie"></i> This will display a cookie emoji</p>
<p><i class="emoji blobcat"></i> This will display a blobcat emoji</p>
```

<h1><i class="emoji twa-cookie"></i> This will display a cookie emoji</h1>
<h1 class="no-margin"><i class="emoji blobcat"></i> This will display a blobcat emoji</h1>

# Emojis Example:
[Click here](../examples/emojis)
