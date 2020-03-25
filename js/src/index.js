import { check_arrow } from "./components/arrow.js"
import { check_scroll_ins } from "./components/scroll_in.js"
import { check_nav_bar } from "./components/nav_bar.js"

check_nav_bar()
check_arrow()

window.addEventListener('scroll', function() {
  check_arrow()
  check_scroll_ins()
})

window.addEventListener('load', function() {
  check_scroll_ins()
  check_nav_bar()
})

window.addEventListener('resize', function() {
  check_nav_bar()
})
