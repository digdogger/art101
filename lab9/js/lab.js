// index.js - LAB 9
// Author: Newton Novak
// Date: 5/10/23

//retrieve the output <div> and assign it a variable
var outputElement = document.getElementById("output");
console.log("outputElement: ", outputElement);



//create  a new element and assign it a variable
var new1El = document.createElement("h1");


//changing the html element to say "something borrowed"
new1El.innerHTML = "something borrowed.";


//create  a new element and assign it a variable
var new2El = document.createElement("h1");


// Change the html attribute of new2El to say "something blue."
new2El.innerHTML = "something blue.";

// Append both new elements one at a time using appendChild() 
outputElement.appendChild(new1El);
outputElement.appendChild(new2El);

//changing css attributes
new1El.style.fontStyle = "italic";
new1El.style.fontSize = "40px";
new2El.style.color = "red";
new2El.style.fontSize = "30px";