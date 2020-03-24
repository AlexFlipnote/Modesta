import { check_arrow } from "./components/arrow.js"
import { check_scroll_ins } from "./components/scroll_in.js"

window.addEventListener('scroll', function() {
  check_arrow()
  check_scroll_ins()
})

window.addEventListener('load', function() {
  check_scroll_ins()
})
