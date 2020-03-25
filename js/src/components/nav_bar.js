export function check_nav_bar() {
  var navContainers = document.getElementsByClassName('nav-container')

  if (navContainers.length && navContainers[0].getElementsByTagName('nav').length) {
    var navContainer = navContainers[0]
    var nav = navContainer.getElementsByTagName('nav')[0]
    if (nav._collapedAt) {
      if(window.innerWidth > nav._collapedAt) {
        delete navContainer._collapedAt
        nav.classList.remove('nav--collapse')
        // Re-evaluate if anything after collapse changed
        if (navContainer.getBoundingClientRect().top !== nav.getBoundingClientRect().top) {
          nav.classList.add('nav--collapse')
          nav._collapedAt = window.innerWidth
        }
      }
    } else if (navContainer.getBoundingClientRect().top !== nav.getBoundingClientRect().top) {
      nav.classList.add('nav--collapse')
      nav._collapedAt = window.innerWidth
    }
  }
}
