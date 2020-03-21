import { terser } from "rollup-plugin-terser"

export default [
  {
    input: 'js/src/index.js',
    output: {file: 'js/modesta.js', format: 'iife'},
    plugins: [terser()]
  }
]
