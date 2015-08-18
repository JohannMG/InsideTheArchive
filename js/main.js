
/*--------------
  Get display items data and render the
  Handlebars template after a successful
  AJAX request
----------------*/

var itemList;
var tile  = $("#tile-item").html();
var tileItemTemplate = Handlebars.compile(tile);
var renderedTiles; 


$.ajax({
  url: "/items-data.json",
  data: {},
  dataType: "json",
  success: function( data ) {
    itemList = data;
    renderTilesTemplate();
  },
  error: function(jqXHR, textStatus, errorThrown){
  	console.log(errorThrown);
  }
});


//
function renderTilesTemplate (){
  //render and stick in DOM
  renderedTiles = tileItemTemplate(itemList);
  var tileContainer = document.getElementById('tiles-container'); 
  tileContainer.innerHTML = renderedTiles;

  //add-light-box.js
  attachLightboxes();
}



/*--------------
  
----------------*/
