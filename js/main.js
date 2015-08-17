
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
    renderedTiles = tileItemTemplate(itemList);
    var tileContainer = document.getElementById('tiles-container'); 
    tileContainer.innerHTML = renderedTiles;
  },
  error: function(jqXHR, textStatus, errorThrown){
  	console.log(errorThrown);
  }
});


/*--------------
  
----------------*/
