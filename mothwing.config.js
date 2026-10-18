import fs from "node:fs"
import path from "node:path"
import { defineConfig } from "mothwing"
import { banner } from "./docs/lib/modesta.js"

export default defineConfig({
  domain: "modesta.alexflipnote.dev",
  src: "docs",
  sass: { "../scss/modesta.scss": "assets/modesta.css" },
  exclude: ["lib"],
  // The docs are read out of the SCSS, and the front page is the README
  rerender: ["../scss", "../README.md", "../package.json"],
  seo: { siteName: "Modesta" },
  minify: true,
  sitemap: true,
  robots: true,
  cname: true,
  activeLinks: true,
  after: [
    // The released modesta.css, also at the root so sites can link https://modesta.alexflipnote.dev/index.css directly
    ({ site }) => {
      const css = fs.readFileSync(path.join(site.out, "assets", "modesta.css"), "utf8")
      fs.writeFileSync(path.join(site.out, "index.css"), `${banner()}${css}\n`)
    }
  ]
})
