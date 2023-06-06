// index.js - LAB 16
// Author: Newton Novak
// Date: 6/4/23


var URL = "https://xkcd.com/info.0.json";


var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

//lets not confuse the html
function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  // get data via ajax 
 
  $.ajax({
      // The URL 
      url: ourURL,
      //  POST or GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function(data) {
    
      var imageUrl = data.img;
      var title = data.title;
      console.log("orig title:", title);
      title = make_safe(title);
      console.log("safe title:", title);
      var alt = data.alt;
      console.log("orig alt:", alt);
      alt = make_safe(alt);
      console.log("safe alt:", alt);
      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <<img class="cat-photo" img src="${imageUrl}" title="${alt}"><br>
          <button id="prev" style="transform: translate(1000%);">Previous</button><button id="next" style="transform: translate(1300%);">Next</button>
        </div>`
      $("#output").html(html);

  
      $("#prev").click(function(){
        getComic(comicNum - 1);
      });
   
      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })
  .fail(function(){
    console.log("^^ Please ignore this error. It's okay.");
    console.log("Have a okay day! :-)");
  })

}

// start things off
getComic();