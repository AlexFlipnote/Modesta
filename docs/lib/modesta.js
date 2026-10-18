/**
 * Reads the docs out of the SCSS sources, for the docs site (data/docs.js) and `npm run check`.
 *
 * Documentation lives next to the code, as `///` comment blocks:
 *
 *   /// Buttons
 *   /// @group Components
 *   ///
 *   /// Markdown text describing the component.
 *   ///
 *   /// @modifier btn.hover Floats the button upwards on hover
 *   /// @modifier {colour}-dropshadow Coloured background with a drop shadow
 *   ///
 *   /// @example
 *   /// <div class="buttons">
 *   ///   <a class="btn" href="#">Nice link</a>
 *   /// </div>
 *
 * - The first line is the title. Every SCSS file with blocks becomes one page,
 *   in the order modesta.scss loads them, and each block is a section on it
 * - `@group` puts the page under a sidebar heading
 * - `@modifier` lines are collected into a table of classes. `{colour}`, `{size}`
 *   and `{n}` stand for every colour, grid size and column number
 * - `@example` takes the lines below it, up to a blank one, and shows them as a
 *   live preview with their code. `code` skips the preview, `height=400px` gives
 *   it a fixed height that the example fills edge to edge, anything else is a caption
 * - `@table colours|breakpoints|theme|keyframes` inserts a table generated from
 *   the source, so it never goes out of date
 *
 * `check` fails when a class in modesta.css is not documented, or an example
 * uses a class that does not exist.
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import hljs from "highlight.js"
import MarkdownIt from "markdown-it"
import postcss from "postcss"
import * as sass from "sass"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..")
const SCSS = path.join(ROOT, "scss")
const SOURCE_URL = "https://github.com/AlexFlipnote/Modesta/blob/master/"

export class BuildError extends Error {}

const read = file => fs.readFileSync(file, "utf8")
const relative = file => path.relative(ROOT, file).split(path.sep).join("/")
const escape = text => String(text)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll("\"", "&quot;").replaceAll("'", "&#x27;")

function dedent(text) {
  const lines = text.split("\n")
  const indents = lines.filter(line => line.trim()).map(line => line.match(/^ */)[0].length)
  const indent = Math.min(...indents, Infinity)
  return lines.map(line => line.slice(indent === Infinity ? 0 : indent)).join("\n")
}

const packageJson = () => JSON.parse(read(path.join(ROOT, "package.json")))


// ----- CSS -----

/** The licence comment the released modesta.css starts with */
export function banner() {
  return [
    "/*!",
    ` * Modesta v${packageJson().version} (https://modesta.alexflipnote.dev)`,
    " * Made by AlexFlipnote (https://alexflipnote.dev)",
    " * Licensed under MIT (https://github.com/AlexFlipnote/Modesta/blob/master/LICENSE)",
    " */",
  ].join("\n")
}

/** modesta.css, to read which classes it has */
function compileCss() {
  try {
    return sass.compile(path.join(SCSS, "modesta.scss"), { style: "compressed" }).css
  } catch (error) {
    throw new BuildError(error.message)
  }
}


// ----- Reading the SCSS -----

function resolve(base, name) {
  const target = path.join(base, name)
  for (const candidate of [
    path.join(path.dirname(target), `_${path.basename(target)}.scss`),
    `${target}.scss`,
  ]) {
    if (fs.existsSync(candidate)) return candidate
  }
  throw new BuildError(`${relative(base)}: cannot find '${name}'`)
}

/** Every SCSS file, in the order the entry file loads them */
function loadOrder(entry) {
  const seen = []
  const visit = file => {
    if (seen.includes(file)) return
    seen.push(file)
    for (const [, name] of read(file).matchAll(/^@(?:use|forward) '([^']+)'/gm)) {
      if (!name.startsWith("sass:")) visit(resolve(path.dirname(file), name))
    }
  }
  visit(entry)
  return seen
}

/** Turn the `///` blocks in a file into sections */
function parseSections(file) {
  const blocks = []
  let current = null

  for (const line of read(file).replaceAll("\r\n", "\n").split("\n")) {
    const stripped = line.trim()
    if (stripped.startsWith("///")) {
      const content = stripped.slice(3)
      current ??= []
      current.push(content.startsWith(" ") ? content.slice(1) : content)
    } else if (current) {
      blocks.push(current)
      current = null
    }
  }
  if (current) blocks.push(current)

  return blocks.map(block => parseBlock(block, file))
}

function parseBlock(lines, file) {
  const section = { title: lines[0].trim(), group: null, parts: [] }
  const text = []
  let example = null

  const flushText = () => {
    if (text.some(line => line.trim())) section.parts.push({ kind: "text", value: text.join("\n") })
    text.length = 0
  }

  for (const line of lines.slice(1)) {
    if (example) {
      if (line.trim()) {
        example.lines.push(line)
        continue
      }
      example = null
      continue
    }

    const [tag, ...words] = line.split(" ")
    const rest = words.join(" ").trim()

    if (tag === "@group") {
      section.group = rest
    } else if (tag === "@modifier") {
      flushText()
      const [name, ...description] = rest.split(" ")
      const row = [name, description.join(" ").trim()]
      const last = section.parts.at(-1)
      if (last?.kind === "modifiers") last.value.push(row)
      else section.parts.push({ kind: "modifiers", value: [row] })
    } else if (tag === "@example") {
      flushText()
      example = { lines: [], preview: true, height: null, caption: "" }
      const caption = []
      for (const word of rest.split(" ").filter(Boolean)) {
        if (word === "code") example.preview = false
        else if (word.startsWith("height=")) example.height = word.slice("height=".length)
        else caption.push(word)
      }
      example.caption = caption.join(" ")
      section.parts.push({ kind: "example", value: example })
    } else if (tag === "@table") {
      flushText()
      section.parts.push({ kind: "table", value: rest })
    } else if (tag.startsWith("@")) {
      throw new BuildError(`${relative(file)}: unknown tag ${tag} in '${section.title}'`)
    } else {
      text.push(line)
    }
  }

  flushText()
  return section
}

const exampleCode = example => dedent(example.lines.join("\n")).trim()

/** The $colours map, grouped by the comments inside it */
function scssColours() {
  const source = read(path.join(SCSS, "assets", "_colours.scss")).replaceAll("\r\n", "\n")
  const body = source.match(/\$colours: \(([\s\S]*?)\n\);/)[1]
  const groups = []

  for (let line of body.split("\n")) {
    line = line.trim()
    if (line.startsWith("//")) {
      groups.push([line.replace(/^\/+\s*/, "").trim(), []])
    } else {
      const match = line.match(/^'([\w-]+)': ([^,]+),?/)
      if (!match) continue
      if (!groups.length) groups.push(["Colours", []])
      groups.at(-1)[1].push([match[1], match[2]])
    }
  }

  return groups
}

function scssBreakpoints() {
  const source = read(path.join(SCSS, "assets", "_layout.scss"))
  const body = source.match(/\$breakpoints: \(([\s\S]*?)\);/)[1]
  return [...body.matchAll(/(\w+): (\d+)px/g)].map(([, name, px]) => [name, Number(px)])
}


// ----- Reading the compiled CSS -----

/** '.a .b.c > d' -> [['a'], ['b', 'c'], []] */
function compounds(selector) {
  selector = selector.replace(/\[[^\]]*\]/g, "")
  while (/\([^()]*\)/.test(selector)) selector = selector.replace(/\([^()]*\)/g, "")
  return selector.trim().split(/\s*[>+~]\s*|\s+/)
    .map(part => [...part.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map(match => match[1]))
}

class Stylesheet {
  constructor(css) {
    const root = postcss.parse(css)
    this.selectors = []
    this.variables = new Map()
    this.keyframes = []

    root.walkAtRules("keyframes", rule => { this.keyframes.push(rule.params) })
    root.walkRules(rule => {
      if (rule.parent?.type === "atrule" && rule.parent.name === "keyframes") return
      this.selectors.push(...rule.selectors.map(selector => selector.trim()))
      rule.walkDecls(/^--modesta-/, decl => {
        if (!this.variables.has(rule.selector)) this.variables.set(rule.selector, new Map())
        this.variables.get(rule.selector).set(decl.prop, decl.value.trim())
      })
    })

    this.classes = new Set(this.selectors.flatMap(selector => compounds(selector).flat()))
  }
}


// ----- Rendering -----

const slugify = title => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

/** 'col-{size}-{n}' -> every concrete class name it stands for */
function expand(name, values) {
  let names = [name]
  for (const [, key] of name.matchAll(/\{(\w+)\}/g)) {
    names = names.flatMap(current => values[key].map(value => current.replace(`{${key}}`, value)))
  }
  return names
}

const htmlClasses = code => new Set(
  [...code.matchAll(/class="([^"]*)"/g)].flatMap(match => match[1].split(/\s+/).filter(Boolean))
)

/** The first paragraph of some markdown, as plain text */
const summary = text => dedent(text).trim().split(/\n\s*\n/)[0]
  .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[`*_]/g, "").replace(/\s+/g, " ")

// Modesta's markdown theme colours code with Pygments class names, as Jekyll and
// GitHub Pages output them, so highlight.js classes are renamed to match
const PYGMENTS = {
  "tag": "p", "name": "nt", "attr": "na", "string": "s", "comment": "c",
  "keyword": "k", "number": "m", "literal": "kc", "built_in": "nb",
  "title": "nf", "variable": "nv", "meta": "cp", "symbol": "ss", "punctuation": "p",
  "selector-tag": "nt", "selector-class": "nc", "selector-id": "nn",
  "selector-pseudo": "nd", "attribute": "na", "property": "na", "operator": "o",
}

function highlight(code, language) {
  const lexer = language && hljs.getLanguage(language) ? language : "xml"
  const html = hljs.highlight(code, { language: lexer, ignoreIllegals: true }).value
  const pygments = html.replace(/<span class="hljs-([\w-]+)">/g, (_, name) => {
    const short = PYGMENTS[name.split(" ")[0]]
    return short ? `<span class="${short}">` : "<span>"
  })
  return `<div class="highlight"><pre><code>${pygments}</code></pre></div>`
}

export class Docs {
  constructor() {
    this.css = new Stylesheet(compileCss())
    this.package = packageJson()
    this.colours = scssColours()
    this.breakpoints = scssBreakpoints()
    this.placeholders = {
      colour: this.colours.flatMap(([, colours]) => colours.map(([name]) => name)),
      size: ["xs", ...this.breakpoints.map(([name]) => name)],
      n: Array.from({ length: 12 }, (_, i) => String(i + 1)),
    }
    this.markdownIt = new MarkdownIt({
      html: true,
      highlight: (code, language) => highlight(code.replace(/\n$/, ""), language),
    })
  }

  pages() {
    const pages = []
    for (const file of loadOrder(path.join(SCSS, "modesta.scss"))) {
      const sections = parseSections(file)
      if (!sections.length) continue
      const intro = sections[0].parts.find(part => part.kind === "text")
      pages.push({
        title: sections[0].title,
        slug: slugify(sections[0].title),
        group: sections[0].group ?? "Other",
        description: intro ? summary(intro.value) : `${sections[0].title} in Modesta`,
        source: relative(file),
        sections,
      })
    }
    return pages
  }

  // -- Parts --

  markdown(text) {
    return this.markdownIt.render(dedent(text))
  }

  modifiers(rows) {
    const body = rows.map(([name, description]) =>
      `<tr><td><code>${escape(name)}</code></td><td>${this.markdownIt.renderInline(description)}</td></tr>`
    ).join("")
    return `<table><thead><tr><th>Class</th><th>Description</th></tr></thead><tbody>${body}</tbody></table>`
  }

  example(example) {
    const code = exampleCode(example)
    const parts = ["<figure class=\"docs-example\">"]
    if (example.caption) parts.push(`<figcaption>${escape(example.caption)}</figcaption>`)

    if (example.preview) {
      const fill = example.height ? "height: 100%;" : "padding: 1rem;"
      // A srcdoc frame has the page's URL, so the site's own paths work in it
      const document = (
        "<!DOCTYPE html><html><head><meta charset=\"utf-8\">"
        + "<link href=\"/assets/modesta.css\" rel=\"stylesheet\">"
        + "<script src=\"/assets/preview.js\"></script>"
        + `</head><body class="github"><div id="example" style="display: flow-root; box-sizing: border-box; ${fill}">`
        + `${code}</div></body></html>`
      )
      const height = example.height ? ` data-height style="height: ${example.height}"` : ""
      parts.push(`<iframe class="docs-preview" title="Example" srcdoc="${escape(document)}"${height}></iframe>`)
    }

    parts.push(highlight(code, "xml"), "</figure>")
    return parts.join("")
  }

  table(name) {
    if (name === "colours") {
      return this.colours.map(([group, colours]) => {
        const swatches = colours.map(([colour, value]) =>
          `<div class="docs-swatch"><span style="background: ${value}"></span>`
          + `<code>${colour}</code><small>${value}</small></div>`
        ).join("")
        return `<h3>${escape(group)}</h3><div class="docs-swatches">${swatches}</div>`
      }).join("")
    }

    if (name === "breakpoints") {
      const smallest = this.breakpoints[0][1]
      const rows = [
        `<tr><td><code>xs</code></td><td><code>col-xs-*</code></td><td>Above ${smallest}px</td></tr>`,
        ...this.breakpoints.map(([size, px]) =>
          `<tr><td><code>${size}</code></td><td><code>col-${size}-*</code></td><td>From ${px + 1}px</td></tr>`
        ),
      ]
      return (
        "<table><thead><tr><th>Size</th><th>Classes</th><th>Applies</th></tr></thead>"
        + `<tbody>${rows.join("")}</tbody></table>`
        + `<p>At ${smallest}px and below, every column is full width.</p>`
      )
    }

    if (name === "theme") {
      const themes = [...this.css.variables]
      const names = [...themes[0][1].keys()]
      const head = themes.map(([selector]) => `<th><code>${escape(selector)}</code></th>`).join("")
      const rows = names.map(variable =>
        `<tr><td><code>${variable}</code></td>` + themes.map(([, values]) => {
          const value = values.get(variable) ?? ""
          return `<td><span class="docs-dot" style="background: ${value}"></span>${value}</td>`
        }).join("") + "</tr>"
      ).join("")
      return `<table><thead><tr><th>Variable</th>${head}</tr></thead><tbody>${rows}</tbody></table>`
    }

    if (name === "keyframes") {
      const items = this.css.keyframes.map(name => `<li><code>${escape(name)}</code></li>`).join("")
      return `<ul class="docs-columns">${items}</ul>`
    }

    throw new BuildError(`unknown table '${name}'`)
  }

  section(section, first) {
    const heading = first ? "h1" : "h2"
    const out = [`<${heading} id="${slugify(section.title)}">${escape(section.title)}</${heading}>`]
    for (const { kind, value } of section.parts) {
      if (kind === "text") out.push(this.markdown(value))
      else if (kind === "modifiers") out.push(this.modifiers(value))
      else if (kind === "example") out.push(this.example(value))
      else if (kind === "table") out.push(this.table(value))
    }
    return out.join("")
  }

  // -- Checks --

  check(pages) {
    const documented = new Set()
    const problems = []

    for (const page of pages) {
      for (const section of page.sections) {
        for (const { kind, value } of section.parts) {
          if (kind === "modifiers") {
            for (const [name] of value) {
              for (const concrete of expand(name, this.placeholders)) {
                for (const cls of concrete.split(".").filter(Boolean)) documented.add(cls)
              }
            }
          } else if (kind === "example") {
            const used = htmlClasses(exampleCode(value))
            for (const cls of used) documented.add(cls)
            for (const missing of [...used].filter(cls => !this.css.classes.has(cls)).sort()) {
              problems.push(`${page.source}: example in '${section.title}' uses unknown class '${missing}'`)
            }
          }
        }
      }
    }

    // A class nested inside a documented component counts as part of it
    const undocumented = new Map()
    for (const selector of this.css.selectors) {
      let insideDocumented = false
      for (const part of compounds(selector)) {
        for (const cls of part) {
          if (!documented.has(cls) && !insideDocumented && !undocumented.has(cls)) undocumented.set(cls, selector)
        }
        if (part.some(cls => documented.has(cls))) insideDocumented = true
      }
    }

    for (const [cls, selector] of [...undocumented].sort(([a], [b]) => a.localeCompare(b))) {
      problems.push(`modesta.css: '${cls}' is not documented (used in '${selector}')`)
    }

    return problems
  }

  // -- For the site --

  /** What the pages are filled from, as {{ docs }} */
  site(pages) {
    const nav = []
    for (const page of pages) {
      let group = nav.find(item => item.name === page.group)
      if (!group) nav.push(group = { name: page.group, pages: [] })
      group.pages.push({ title: page.title, url: `/${page.slug}/` })
    }

    return {
      version: this.package.version,
      description: this.package.description,
      readme: this.markdown(read(path.join(ROOT, "README.md")).replaceAll("\r\n", "\n")),
      nav,
      pages: pages.map(page => ({
        slug: page.slug,
        title: page.title,
        description: page.description,
        source: page.source,
        sourceUrl: `${SOURCE_URL}${page.source}`,
        content: page.sections.map((section, i) => this.section(section, i === 0)).join("\n"),
        // Relative to docs/, so the sitemap dates each page by its own SCSS file
        sources: [`../${page.source}`],
      })),
    }
  }
}
