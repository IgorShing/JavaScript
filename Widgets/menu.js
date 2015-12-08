function Menu(options) {
  var elem = options.elem;

  elem.onmousedown = function() {
    return false;
  }

  elem.onclick = function(event) {
    if (event.target.closest('.title')) {
      toggle();
    }
  };

  function toggle() {
    elem.classList.toggle('open');
  }

  this.toggle = toggle;

}