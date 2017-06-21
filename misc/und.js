var x;

if(x === undefined)
  console.log("You're awesome");

var z = {
  number: 98
}

if(z.email === undefined)
  console.log("Again");

//  check header
//  getElementById privies NULL if element id not found

//  ONLY WORK on browser console
// var header = document.getElementById('header');
// if(header == null)
//   console.log("Nothing to do here");

// comparing a number nd a string
var k = "9";
if(k == 9)
  console.log("true");

// CASE 1# comparing string with a number
if(99 == "vanilla")
  // vanilla == NaN => false
  console.log("vanilla");

//  case 2# comparing boolean with any other type
if(1 == true)
  console.log("sach me");
if(1 === true)
  //  cannot be executed bcoz false
  console.log('let us see');

//  case 3# comparing null nd undefined
if(undefined == null)
  console.log('sahi h');

//  empty string is false
if(1 == "")
 // " "  FALSE
  console.log("nhi aayega log m");

//  all the falsey value in the JS
//  undefined, null,  , "", NAN
//  rest  everything is truthy...
