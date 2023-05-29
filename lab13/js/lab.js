// index.js - LAB 13
// Author: Newton Novak
// Date: 5/24/23




maxFactors = 4;

outputEl = document.getElementById("output");


function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
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
  for (var num=0; num<=maxNums; num++) {
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
  reportError("Hey! We need a maxium number to run this thing!");
    return;
  }
  if (max>500) {
    reportError("Sorry bud. We cap the cap at 500.");
      return;
    }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
    reportError("Well what am I supposed to do with so little info. AT LEAST give me one factor and a word to go with it....");
    return;
  }
  outputEl.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
})  