// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();



















// $('img.photo',this).imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images
 
// mit license. paul irish. 2010.
// webkit fix from Oren Solomianik. thx!
 
// callback function is passed the last image to load
//   as an argument, and the collection as `this`
 
 

function newjayPage() {
  location.replace("https://digdogger.github.io/art101/topsecret")
}
function validateForm() {
  let x = document.forms["pass"]["fname"].value;
  if (x == "") {
    alert("Enter Password");
    return false;
  }
  if (x == "horses") {
    alert("Enter Password");
    return false;
  }
} 

function msg() {
  alert("<3 OwO love u <3");
}

var buttonElement = document.getElementById("buttons");
var button1 = document.createElement("button");
button1.innerHTML = "CLICK ME"
button1.className = "button";
button1.addEventListener("click", msg);
buttonElement.appendChild(button1);


