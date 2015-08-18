
/*--------------
  Get display items data from variable
----------------*/
var itemList = tileDataJSON;


document.addEventListener("DOMContentLoaded", function(event) { 
  
  var tile  = $("#tile-item").html();
  var tileItemTemplate = Handlebars.compile(tile);
  var renderedTiles; 

  //render and stick in DOM
  renderedTiles = tileItemTemplate(itemList);
  var tileContainer = document.getElementById('tiles-container'); 
  tileContainer.innerHTML = renderedTiles;

  //add-light-box.js
  attachLightboxes();

});
