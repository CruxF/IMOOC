function $(id) {
  return document.getElementById(id);
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

function show(index) {
  var dd = $("type").getElementsByTagName("dd");
  for (var i = 0; i < dd.length; i++) {
    if (i == index) {
      dd[i].className = "selected";
    } else {
      dd[i].className = null;
    }
  }
}