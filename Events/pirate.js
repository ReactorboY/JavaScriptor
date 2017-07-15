window.onload = init;

function init() {
  var map = document.getElementById("map");
  map.onmousemove = showCord;
}

function showCord(eventObj) {
  var map = document.getElementById("coords");
  var x = eventObj.clientX;
  var y = eventObj.clientY;
  map.innerHTML = "Coordinates are " + x + "," + y;
}
