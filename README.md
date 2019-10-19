# ModestaCSS
A clean CSS framework made to be dark and responsive.

[_Find legacy versions of ModestaCSS here_](https://modesta.alexflipnote.dev/legacy)

## Install to your website
```html
<!-- Use this line to have the theme on your website -->
<link href="https://modesta.alexflipnote.dev/css/modesta.css" type="text/css" rel="stylesheet">
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
- Ruby
  - bundler
  - jekyll
  - sass
  - scss_lint
```
[sudo] gem install bundler jekyll sass scss_lint
```

## Documentation
Visit this link for docs: [https://modesta.alexflipnote.dev/](https://modesta.alexflipnote.dev/)

## Used Resources:
- [blobcat](https://discord.gg/nG8fy52)
- [skeleton](http://getskeleton.com/)
- [twemoji-awesome](https://github.com/ellekasai/twemoji-awesome)

## Pages that uses ModestaCSS 2.0
- [alexflipnote.dev](https://alexflipnote.dev/)
- [AlexFlipnote/Homepage](https://alexflipnote.dev/homepage)

## Pages that uses ModestaCSS 1.0
- [React-Modesta](https://modesta.bowser65.xyz/)
- [Terminal Bot List](https://ls.terminal.ink/)

## Contribution
If you plan to contribute, please use **scss_lint** (Ruby Package) to be sure everything is linted.
Thanks <3
