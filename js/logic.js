
// self explanatory 1 - 18 columns
column = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
// 0 - 8
row = ["a","b","c","d","e","f","g","h","i","j",];

ships = {
    "big": 5,
    "small": 2
    };


var returnShips = function(e) {
    return ships.e;
//    for(var i = 0; i < e; i++) {
    console.log("fired");
//    }
}



//random number w/ base of 0
function rando(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

var compPair = function(e) {
  return row[rando(0,8)] + rando(1,18);
//console.log("inside compPair", test)
}

var test = compPair();
console.log(test);

/// Grid 1 - 18, A-I, this is how we decide placement. Elements correspond w/ that grid.

var getPlacement = function(size, orientation) {
//   var result = rando();
//   if(orientation === "hor") {

//   }
//   locations.push(result)

}
