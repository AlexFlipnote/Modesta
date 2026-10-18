// {{ docs }} in every page: the docs read out of the SCSS, see lib/modesta.js
import { Docs } from "../lib/modesta.js"

// The front page is the README, so the sitemap dates it by that
export const sources = ["../README.md"]

export default () => {
  const docs = new Docs()
  const pages = docs.pages()
  for (const problem of docs.check(pages)) console.warn(`warning: ${problem}`)
  return docs.site(pages)
}
