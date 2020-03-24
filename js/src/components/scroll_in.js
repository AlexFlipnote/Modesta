export function check_scroll_ins() {
  var height = window.innerHeight
  var scrollIns = document.querySelectorAll('.scroll-in:not(.scroll-in--scrolled)')

  if (scrollIns.length)
    Array.from(scrollIns).forEach(element => {
      var y = element.getBoundingClientRect().y
      if (y < height)
        element.classList.add('scroll-in--scrolled')
    })
}
