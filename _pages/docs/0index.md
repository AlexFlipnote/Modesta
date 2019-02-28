---
layout: docs
permalink: /

title: ModestaCSS
description: A clean CSS framework made to be dark, responsive and easy to build with.
---
# ModestaCSS
A clean CSS framework made to be dark and responsive.

## Install to your website
```html
<!-- Use this line to have the theme on your website -->
<link href="https://modesta.alexflipnote.dev/css/modesta.min.css" type="text/css" rel="stylesheet">
```
If you wish to use local files, please copy the CSS folder into your website.
Everything from images and all CSS packages is included inside it.

## Best practice
Include these inside `<head>` to ensure that the responsiveness works well and all UTF-8 characters work, in case you use any symbols like copyright, other language letters, etc.
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
```

## Using \_watcher.py
To use this file, you need the following installed:
- Ruby
  - bundler
  - jekyll
  - sass
```
[sudo] gem install sass jekyll bundler
```

## Using \_watcherminify.py
To use this file, you need the following installed:
- Python 3.6 or above
  - csscompressor
  - watchgod
```
[sudo] python -m pip install csscompressor watchgod
NOTE: Use the python version that matches the requirement
```

## Documentation
Visit this link for docs: [https://modesta.alexflipnote.dev/](https://modesta.alexflipnote.dev/)

## Used Resources:
- [blobcat](https://discord.gg/nG8fy52)
- [skeleton](http://getskeleton.com/)
- [twemoji-awesome](https://github.com/ellekasai/twemoji-awesome)

## ModestaCSS on other applications
- [React-Modesta](https://modesta.bowser65.xyz/)

## Pages that uses ModestaCSS
- [alexflipnote.dev](https://alexflipnote.dev/)
- [AlexFlipnote/Homepage](https://alexflipnote.dev/homepage)
- [React-Modesta](https://modesta.bowser65.xyz/)
- [Terminal Bot List](https://ls.terminal.ink/)

## Contribution
If you plan to contribute, please use **scss_lint** (Ruby Package) to be sure everything is linted.
Thanks <3
