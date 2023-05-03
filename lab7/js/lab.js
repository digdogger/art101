// index.js - Lab7 on js functions
// Author: Newton Novak
// Date: 5/2/23



// Functions

// fixUserName - takes input and sorts letters of their name 
function fixUserName() {
  var userName = window.prompt("Hello! Let me know your name, that way I can sort it out.");
  console.log("userName =", userName);
  //split it to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join the array back together
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // return results
  return nameSorted;
}

document.writeln("Howdy! Ive gone and sorted that out for you: ",
  fixUserName(), "</br>");
