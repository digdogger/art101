// index.js - LAB 6
// Author: Newton Novak
// Date: 5/1/23

// Define Variables
myTransport = ["Toyota Camry"," walking"," and the bus"]


//create an object for main ride
var myMainRide = {
  make:"Toyota",
  model: "Camry",
  color: "grey",
  year: 2013,
  age: function() { 
    return 2023 - this.year;
  }
}

//output
document.writeln("The kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: " + myMainRide.make + " " + myMainRide.model + "</br>");
document.writeln("The specs on that baby: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
  
  

