// index.js - LAB 10
// Author: Newton Novak
// Date: 5/14/23

function fixUserName(userName) {
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

// find the button element
buttonEl = document.getElementById("buttons");
console.log("button element:", buttonEl);
var button1 = document.createElement("button");
button1.innerHTML = "SUBMIT"
button1.className = "button";
buttonEl.appendChild(button1);
// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);
var new1El = document.createElement("h4");
new1El.innerHTML = "Your New Name: " ;


// add an event listener to button
button1.addEventListener("click", function(){
  // get value from name element
  var userName = inputEl.value;
  // modify value - either sort or shuffle
  var newName = fixUserName(userName);
  // put value in output element
  outputEl.appendChild(new1El);
  outputEl.innerHTML = "<h5 id=name-results>" + "Your New Name: " + newName + "</h5>";
});