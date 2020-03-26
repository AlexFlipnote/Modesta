<div align="center">
  <h1 id="modesta"><img src="https://get.snaz.in/82bKRQV.svg" height=100 alt="Modesta"></h1>
  <p>A clean CSS framework made to be dark and responsive.</p>
  
[_Find legacy versions of Modesta here_](https://modesta.alexflipnote.dev/legacy)
  
</div>

## Install to your website
```html
<!-- Use this line to have the theme on your website -->
<link href="https://modesta.alexflipnote.dev/css/modesta.css" type="text/css" rel="stylesheet">

<!-- If you need the special JavaScript stuff, add this as well -->
<script src="https://modesta.alexflipnote.dev/js/modesta.js" type="text/javascript" charset="utf-8"></script>
```
If you wish to use local files, please copy the CSS folder into your website.
Everything from images and all CSS packages is included inside it.

## Best practice
Include these inside `<head>` to ensure that the responsiveness works well and all UTF-8 characters work, in case you use any symbols like copyright, other language letters, etc.
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
```

## Colour scheme
Here's the main colour scheme to ModestaCSS if you're going to need them to build on-top of it with your own CSS components:
```
highlight    #181818    rgb(24, 24, 24)
primary      #282828    rgb(40, 40, 40)
secondary    #303030    rgb(48, 48, 48)
```

## Using \_watcher.py
To use this file, you need the following installed:
- Python (of course...)
- NodeJS
  - rollup
  - rollup-plugin-terser
  - [ Optional: jshint ]
- Ruby
  - bundler
  - jekyll
  - sass
  - scss_lint
```
[sudo] gem install bundler jekyll sass scss_lint
npm i
```

## Documentation
Visit this link for docs: [https://modesta.alexflipnote.dev/](https://modesta.alexflipnote.dev/)

## Used Resources:
- [blobcat](https://discord.gg/nG8fy52)
- [skeleton](http://getskeleton.com/)
- [twemoji-awesome](https://github.com/ellekasai/twemoji-awesome)

## Pages that uses Modesta 2.0
- [alexflipnote.dev](https://alexflipnote.dev/)
- [AlexFlipnote/Homepage](https://alexflipnote.dev/homepage)
- [HotImage](https://github.com/Snazzah/HotImage)
- [Snazzah's API](https://api.snaz.in/docs)

## Pages that uses Modesta 1.0
- [Terminal Bot List](https://ls.terminal.ink/)

## Contribution
If you plan to contribute, please use **scss_lint** (Ruby Package) to be sure everything is linted.
Thanks <3
