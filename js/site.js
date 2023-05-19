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



 

function newjayPage() {
  
}
function validateForm(passInput) {
  
  if (passInput == "") {
    alert("Enter Password");
    return false;
  }
  if (passInput == "lavalamp") {
    location.replace("https://digdogger.github.io/art101/topsecret");
  }
  if (passInput == "samhain") {
    alert("OwO howdy! heres ur hint: 'a damn fine _________.' ");

  }
  else {
    alert("INCORRECT PASSWORD. Are you even supposed to be going here?  ")
    alert(" Enter the name of your cat to verify your identity and recieve a hint. ")

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




var buttonHpEl = document.getElementById("buttonhp");
var button2 = document.createElement("button");
button2.innerHTML = "SUBMIT"
button2.className = "button2";
buttonHpEl.appendChild(button2);

// find the form element
inputEl = document.getElementById("password");
console.log("input element:", inputEl);
// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);
var new1El = document.createElement("h4");
new1El.innerHTML = "Your New Name: " ;


// add an event listener to button
button2.addEventListener("click", function(){
  // get value from name element
  var passInput = inputEl.value;
  validateForm(passInput);
});