//add-light-box.js

/*--------------
	Get display go through rendered HTML 
	tiles and attach lightbox events 
	for each scpefic media types

	##Dependencies
	Colorbox >> http://www.jacklmoore.com/colorbox/
	JQuery
	Underscore.js >> http://underscorejs.org/
----------------*/

//FUNCTION to be called when HTML is loaded
function attachLightboxes () {
	attachPhotoLightboxes(); 
	attachSpin360Lightboxes(); 
}


///colorbox STANDARDS
var LB_SETTINGS = {
	FADEIN_SPEED: function () { return 150; }, 
	SCROLLING: function () { return true; }, 
	OPATICY: function () { return 0.75; }, 
	FADEOUT_SPEED: function () { return 150; }
	
};
///end colorbox settings


//PHOTO media
function attachPhotoLightboxes () {
	var photoItemsArray = $('.media-image'); 

	_.each(photoItemsArray, function(element, index, list){

		var media = element.getAttribute('media'); 
		var description = element.getElementsByClassName('tile-description')[0].innerHTML || ""; 
		var imgHTML =  '<div class="lightboxHTML"><img class="lb" src="' + media + '"/>'+ description +'</div>'; 

		$(element).colorbox({
			html: imgHTML, 
			speed: LB_SETTINGS.FADEIN_SPEED(), 
			scrolling: LB_SETTINGS.SCROLLING(), 
			opacity: LB_SETTINGS.OPATICY(),
			fadeOut: LB_SETTINGS.FADEOUT_SPEED()

		}); 
	});
}

//ArqSpin Media Embeds
function attachSpin360Lightboxes(){
	var spinItemsArray = document.getElementsByClassName('media-spin');
	
	_.each(spinItemsArray, function (element, index, list) {
		
		var spinID = element.id; 

		var tileData = _.find( itemList.displayitems, function(item) {
		 	return (item.id === spinID); 
		}); 

		var spinHTML = '<div class="spin360-Embed">'+ tileData.spinEmbed +'</div>';

		$(element).colorbox({
			html: spinHTML, 
			speed: LB_SETTINGS.FADEIN_SPEED(), 
			scrolling: LB_SETTINGS.SCROLLING(), 
			opacity: LB_SETTINGS.OPATICY(),
			fadeOut: LB_SETTINGS.FADEOUT_SPEED()

		}); 



	}); 


}
