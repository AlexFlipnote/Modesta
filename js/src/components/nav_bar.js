export function add_nav_bar_events() {
  var navBars = document.getElementsByClassName('nav-bar')

  if (navBars.length) {
    var navBar = navBars[0]

    var navToggle = navBar.querySelector('.nav-bars')
    var navClose = navBar.querySelector('.nav-close')

    if(navToggle) navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('nav--expand')
    });

    if(navClose) navClose.addEventListener('click', () => {
      if(navToggle) navToggle.classList.remove('nav--expand')
    });
    
  }
}
