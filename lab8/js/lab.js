// index.js - LAB 8
// Author: Newton Novak
// Date: 5/8/23

function yourNumberSquared(x){
  return x * x;
}

//test function
console.log("7 Squared is: ", yourNumberSquared(7));
console.log("12 Squared is: ", yourNumberSquared(12));


array1 = [2, 5, 10, 12, 15, 19, 22, 26]
console.log("My Array: ", array1);

var result = array.map(yourNumberSquared);
//should return [4, 25, 100, 144, 225, 361, 484, 676]
console.log("Test of My Array Elements Squared: ", result);

var result = array1.map(function(x){
  return x * 2
})
//should return [4, 10, 20, 24, 30, 38, 44, 52]
console.log("My Array Elements Doubled: ", result);