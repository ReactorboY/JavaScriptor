//  write onload function
window.onload = init;

function init() {
  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++){
    images[i].onclick = unblurred;
  }
}

function unblurred(eventObj) {
  // var image = document.getElementById("zero";
  //  Anither way to get which element generated the event
  var image = eventObj.target;
  // get id of that element
  var name = image.id;
  name = name + ".jpg";
  image.src = name;
}

//  403 
