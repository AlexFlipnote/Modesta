import { check_arrow } from "./components/arrow.js"
import { check_scroll_ins } from "./components/scroll_in.js"
import { add_nav_bar_events } from "./components/nav_bar.js"

check_arrow()

window.addEventListener('scroll', function() {
  check_arrow()
  check_scroll_ins()
})

window.addEventListener('load', function() {
  check_scroll_ins()
  add_nav_bar_events()
})
