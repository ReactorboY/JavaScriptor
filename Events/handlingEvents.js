//  Whenever there is a event, there is a opportunity to code to handle it.
//  Handler / Callback is just a ordinary function

function pageLoadedHandler() {
  alert("I'm Alive!");
}

// window.onload = pageLoadedHandler;
function init() {
  var images = document.getElementsByTagName("img");
  for(var i =0; i < images.length; i++){
    // to chnage image when hover use onmouseohover insead
    // images[i].onclick = showAnswer;
    images[i].onmouseover = showAnswer;
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
  setTimeout(reblur, 2000, image);
}

function reblur(image) {
  var name = image.id;
  name = name + "blur.jpg";
  image.src = name;
}

window.onload = init;

//  to handle time event

// function timerHandler() {
//   alert("HUrray, bc you're learning day by day")
// }
//
// setTimeout(timerHandler, 5000);

var tick = true;

function ticker() {
  if(tick){
    console.log("Tick");
    tick = false;
  }
  else {
    console.log("Tock");
    tick = true;
  }
}

setInterval(ticker,1000);
