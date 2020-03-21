export function check_arrow() {
  var scrollPosition = window.scrollY
  var logoContainer = document.getElementsByClassName('arrow')

  if (logoContainer.length) {
    if (scrollPosition >= 100) {
      logoContainer[0].classList.add('arrow--scrolled')
    } else {
      logoContainer[0].classList.remove('arrow--scrolled')
    }
  }
}
