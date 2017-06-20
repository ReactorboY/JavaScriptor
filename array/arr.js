//  bubble-r-us
var scores = [60,50,60,58,54,54,58,50,52,48,69,
                  34,55,51,52,44,51,69,64,66,65,52,61,
                  46,31,57,52,44,18,41,53,55,61,51,44];

var output;
var highScore = 0;
var highArray = [];
for(var i =0; i < scores.length; i++){
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
  if(scores[i] > highScore)
    highScore = scores[i];
}
for (var i = 0; i < scores.length; i++) {
  if(scores[i] == highScore)
    highArray.push(i);
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest Bubble Score: " + highScore);
console.log("Scores with High Score: " + highArray);

function printAndGetHighScore(scores) {
  var highScore =0;
  var output;
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if(scores[i] > highScore)
      highScore = scores[i];
  }
  return highScore;
}
var high = printAndGetHighScore(scores);
