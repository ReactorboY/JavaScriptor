//  To check whether car suits my need
function prequal(car) {
  if(car.mileage > 10000)
    return false;
  else if(car.year > 1960)
    return false;
  return true;
}

//  our car object, taxi is a reference to taxi obj
var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

var cadi = {
make: "GM",
model: "Cadillac",
year: 1955,
color: "tan",
passengers: 5,
convertible: false,
mileage: 12892
};

var fiat = {
make: "Fiat",
model: "500",
year: 1957,
color: "Medium Blue",
passengers: 2,
convertible: false,
mileage: 88000
};

var chevy = {
make: "Chevy",
model: "Bel Air",
year: 1957,
color: "red",
passengers: 2,
convertible: false,
mileage: 1021
};

var worthALook = prequal(chevy);

if(worthALook)
  console.log("You gotta check out this " + chevy.make + " " + chevy.model);
else
  console.log("You should really pass on the  " + chevy.make + " " + chevy.model);
