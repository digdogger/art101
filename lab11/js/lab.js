// index.js - LAB 10
// Author: Newton Novak
// Date: 5/14/23
$("#challenge").append("<button id='challenge-button'>CLICK ME</button>");
$("#problem").append("<button id='problem-button'>CLICK ME TOO!</button>");
$("#results").append("<button id='results-button'>please dont click me :(</button>");

$("#challenge-button").toggleClass("button");
$("#problem-button").toggleClass("button");
$("#results-button").toggleClass("button");

$("#challenge-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#problem-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#results-button").click(function(){

  $(this).html("thats rude >:(")
  $(this).parent().toggleClass("angry");
})