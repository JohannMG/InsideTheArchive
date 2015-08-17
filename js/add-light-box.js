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


///colorbox STANDARDS
var LB_SETTINGS = {
	FADEIN_SPEED: function () { return 150; }, 
	SCROLLING: function () { return true; }, 
	OPATICY: function () { return 0.75; }, 
	FADEOUT_SPEED: function () { return 150; }, 
	
};
///end colorbox settings


//PHOTO media
function attachPhotoLightboxes () {
	var photoItemsArray = $('.media-image'); 

	_.forEach(photoItemsArray, function(element, indes, list){

		var media = element.getAttribute('media'); 
		var imgHTML =  '<div class="lightboxHTML"><img class="lb" src="' + media + '"/></div>'; 

		$(element).colorbox({
			html: imgHTML, 
			speed: LB_SETTINGS.FADEIN_SPEED(), 
			scrolling: LB_SETTINGS.SCROLLING(), 
			opacity: LB_SETTINGS.OPATICY(),
			fadeOut: LB_SETTINGS.FADEOUT_SPEED()
		}); 
	});
}



//method calls async
attachPhotoLightboxes(); 

