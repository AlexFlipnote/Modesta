---
layout: docs
permalink: /2

title: ModestaCSS v2
description: A clean CSS framework made to be dark, responsive and easy to build with.
---
# ModestaCSS 2.0
A lot have changed in 2.0 release and I will make a short document explaining all the changes. The goal of 2.0 is to be smaller and only provide the building tools to create a website in a dark theme-scale. The filesize has also been reduced from **152 KB** to **120 KB**.

## Multiple classes removed
I have removed a lot of classes and a few small stuff to make ModestaCSS more like a builder rather than an entire copy-paste framework that it was fully known as. This means that if you want to take usage of this, you'll have to know CSS as well to build on top of it. If you only used the `.fullscreen` class, don't worry, I will keep it alive for legacy reasons.

## Legacy version
If you dislike how ModestaCSS looks today, you can always get the legacy version [here](https://modesta.alexflipnote.dev/legacy).

## Minify version
Considering that the source is SCSS and easy to read from there, I have made the .css files minify'd as a standard to both make loading faster and be consistent on how things work with ModestaCSS.

## More dark elements
With ModestaCSS 2.0, the default elements to HTML like dropdown, input, textarea and more have finally been converted over to a dark theme instead of the standard white theme provided by HTML standards. This is to make it much easier to have everything dark already.

## No standard font
With ModestaCSS 1.0, Roboto and Montserrat font from [Google Fonts](https://fonts.google.com) where used as a standard font for everything, now they are both removed to let users choose the font they desire instead. This will require you to import a font through HTML or CSS, then having the following code in CSS:
```css
html, body {
  font-family: 'Your font here, yes';
}
```

## Button style change
A lot of people were confused on why buttons had a drop shadow as a standard form, so I have made it to an entier new class and having a flag button instead as the new standard for less confusion.

## Fullscreen
A few things where changed in this one as well, the text inside `.me` does no longer provide a drop-shadow by default to make it more flat style'd. Nothing much was changed in here, you can enjoy having the same style to it if you only want a simple one-page site. The arrow in `.arrow` class is now using an SVG instead to not rely on me hosting a consistent PNG all the time and as well give an easy option for you to replace the arrow with any other SVG of your choice.

## Emojis
They are mostly going to stay the same as always, while blobcat has been updated with even more emojis!

## Markdown
While it stays mostly the same with using Jekyll's markdown style, the default font has been removed to stay with same style for main theme, however I made a class you can add to get the fonts it used back to normal.

## Column/Grid
The manual non-flex version has been removed in favour of having only flex that works best for today's standard. There's no plan to make it back to ModestaCSS.
