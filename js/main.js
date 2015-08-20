
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

  var autoClick = window.setTimeout(function () {
    var spins = $('article.media-spin');
    $( spins[ _.random(0, spins.length) ] ).click(); 


  }, 1500); 



});

// $(document).bind('cbox_complete', function(){
//   $('.lb').magnify({
//     speed: 200
//   });
// });

