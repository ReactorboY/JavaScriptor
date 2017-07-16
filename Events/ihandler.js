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
  //  Another way to get which element generated the event
  var image = eventObj.target;
  // get id of that element
  var name = image.id;
  name = name + ".jpg";
  image.src = name;

  //  to reblur the image after some time
  setTimeout(reblur,2000,image);
}

function reblur(image) {
  var name = image.id;
  name = name + "blur.jpg";
  image.src = name;
}

//  How to use setTimeout event time function
// function timerHandler() {
//   alert("Are you allright !");
// }
//
// setTimeout(timerHandler,5000);
//
// //  An example of setInterval
// var tick = true;
// function ticker() {
//    if(tick){
//      console.log("Tick");
//      tick = false;
//    } else {
//         console.log("Tock");
//         tick = true;
//     }
// }
//
// setInterval(ticker,1000);

//  414
