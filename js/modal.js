window.onload = function() {
  var modal = document.getElementById('modal');
  var modaltarget = document.getElementsByClassName('modal')[0];
  var btn = document.getElementById("trigger");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
    modaltarget.classList.remove('modal--close');
  }

  span.onclick = function() {
    modaltarget.classList.add('modal--close');
    setTimeout(function() { modal.style.display = "none"; }, 575);
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modaltarget.classList.add('modal--close');
      setTimeout(function() { modal.style.display = "none"; }, 575);
    }
  }
}
