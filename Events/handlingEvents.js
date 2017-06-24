//  Whenever there is a event, there is a opportunity to code to handle it.
//  Handler / Callback is just a ordinary function

function pageLoadedHandler() {
  alert("I'm Alive!");
}

// window.onload = pageLoadedHandler;
function init() {
  var images = document.getElementsByTagName("img");
  for(var i =0; i < images.length; i++){
    images[i].onclick = showAnswer;
  }
}
//  Whenever event happen it become a target and generate
//  id and some other genral information
function showAnswer(eventObj) {
  var image = eventObj.target;

  //  name of the variable
  var name = image.id;
  name = name + ".jpg";
  image.src = name;
}

window.onload = init;

//  page 407
