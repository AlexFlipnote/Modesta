# Modesta
A responsive CSS framework with built-in dark and light theme, shipped as a single `modesta.css`

## Getting started
Download `modesta.css` from the [latest release](https://github.com/AlexFlipnote/Modesta/releases/latest) and add it to your page:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="modesta.css" rel="stylesheet">
  </head>
  <body>
    <section class="container">
      <h1>Hello there</h1>
    </section>
  </body>
</html>
```

Or skip the download and link the latest version straight from the docs site:
```html
<link href="https://modesta.alexflipnote.dev/index.css" rel="stylesheet">
```
This always serves the latest version.

Pages use the dark theme by default. Add `light-theme` to `<body>`, or to any element, to switch to the light one.

## Documentation
Every component, with live examples, is documented at [modesta.alexflipnote.dev](https://modesta.alexflipnote.dev)

## Development
Requires [Node.js](https://nodejs.org/) 20 or newer. Run `npm install` once, then:

| Command | What it does |
|---|---|
| `npm run build` | Build the docs site into `dist/` with [mothwing](https://github.com/AlexFlipnote/mothwing), `dist/index.css` is the compiled Modesta |
| `npm run dev` | Serve the docs at http://localhost:8080 and rebuild on every change |
| `npm run check` | Fail if a class in `modesta.css` is not documented |
| `npm run lint` | Check the SCSS with [stylelint](https://stylelint.io/) |

Docs are written next to the code as `///` comments, see [docs/lib/modesta.js](https://github.com/AlexFlipnote/Modesta/blob/master/docs/lib/modesta.js) for the format, and the site around them is in `docs/`.
Every push builds it, publishes `dist/` to the `gh-pages` branch, and releases the CSS, so `dist/` is never committed.

To release a new version, change `version` in `package.json`.
