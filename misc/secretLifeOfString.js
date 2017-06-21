var hello = "My Name is Hussain";
var hugs = 0;
var kisses = 0;

// hello = hello.trim();  trim() used to remove whitespaces
hello = hello.toUpperCase();

for(var i =0; i < hello.length; i++){
  if(hello.charAt(i) == "H")
    hugs++;
  else if(hello.charAt(i) == "A")
    kisses++;
}

console.log(hugs);
console.log(kisses);

var spliter = "name|phone|address";
var vals = spliter.split('|');
console.log("Split Array is ", vals);
