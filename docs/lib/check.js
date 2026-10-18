// npm run check: fails when a class in modesta.css is not documented, or an example uses one that does not exist
import { BuildError, Docs } from "./modesta.js"

try {
  const docs = new Docs()
  const problems = docs.check(docs.pages())
  for (const problem of problems) console.warn(`warning: ${problem}`)
  if (problems.length) throw new BuildError(`${problems.length} documentation problem(s)`)
  console.log("Docs cover every class in modesta.css")
} catch (error) {
  if (!(error instanceof BuildError)) throw error
  console.error(`error: ${error.message}`)
  process.exit(1)
}
