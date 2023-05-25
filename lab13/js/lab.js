// index.js - LAB 13
// Author: Newton Novak
// Date: 5/24/23


function fizzBuzz() {
  console.log("Yes, my function is running.");

  for (var i=1; i<=200; i++) {
    // start w empty string to build up
    var str = '';
    // If the number is a multiple of 3, if should print "Fizz!"
    if (i % 3 == 0) {
      str += "Fizz";
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    if (i % 5 == 0) {
      str += "Buzz";
    }
    // If the number is a multiple of 7, it should print "Boom!"
    if (i % 7 == 0) {
      str += "Boom";
    }
    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
    if (str == '') {
      str += i;
    } else {
      str += "!";
    }
    debugger;
    $("#output").append("<p>" + str + "</p>")
  }
}

maxFactors = 4;

outputEl = document.getElementById("output");

// get the values from the webpage and write them in an object
// this expects to have input fields with ids num0, text0, num1, text1, etc
// returns an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}


function fizzBuzzBoom(maxNums, factorObj) {
  for (var num=0; num<maxNums; num++) {
    debugger;
    var outputStr ="";
    for (var factor in factorObj) {
      if (num % factor == 0) {
        outputStr += factorObj[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max) {
  reportError("You must provide a maximum");
    return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
    reportError("You must provide at least one factor and text");
    return;
  }
  outputEl.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
})  