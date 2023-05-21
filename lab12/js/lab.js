// index.js - LAB 12
// Author: Newton Novak
// Date: 5/20/23

function assignGender(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "TBoy"
  }
  else if (mod == 1){
    return "TGirl"
  }
  else if (mod == 2){
    return "BoyGirl"
  }
  else if (mod == 3){
    return "GirlBoy"
  }
}

var myButton = document.getElementById("submit");
myButton.className = "button";
myButton.addEventListener("click",function(){
  var name = document.getElementById("input").value;
  var gender = assignGender(name);
  newText = "<h3> The government has assigned you a new gender identity: " + gender + "<h3>"
  document.getElementById("output").innerHTML = newText;
})