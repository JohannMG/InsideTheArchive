var tileDataJSON = {
// Pulled in for dynamic rendering into HTML.
// Each MUST hace a unique 'id' value for valid HTML and the lightboxes to work
// PLEASE VALIDATE JSON EDITS HERE ->> http://codebeautify.org/jsonvalidate

	displayitems : itemsJSON()

};

//SETTINGS TO USE:
//ARQSPIN include in iFrame ->> width=950 height=950
//YOUTUBE include in iFrame ->> width='853' height='480'
//make sure to turn "double quotes" to 'single quotes' or to \"escape them\"

function itemsJSON () {
return[

	{	"id": "tileitem-01",
		"title": "Weird Taxidermy",
		"description": "Artist Inflated Animals into Colorful Balloons", 
		"type": "image",
		"mediaURL": "http://www.ripleys.com/wp-content/uploads/2015/07/This-Horse-is-said-to-represent-harmony-harmoneigh.png"
	},
	{
		"id": "tileitem-02",
		"title": "Weird Taxidermy",
		"description": "Weird Taxidermy: Artist Inflated Animals into Colorful Balloons", 
		"type": "image",
		"mediaURL": "http://www.ripleys.com/wp-content/uploads/2015/08/Waffle-House-Index-Ripleys-Header.jpg" 
	},
	{
		"id": "tileitem-03",
		"title": "Tibetan Ram Skull", 
		"description": "Used by Lamaist monks during ritual ceremonies, animal votive skulls are cherished as religious relics in Tibet in the belief that the soul of the animal resides ",
		"type": "spin",
		"spinEmbed": "<iframe src='//spins0.arqspin.com/iframe.html?spin=esmxi9bojr6m&is=-0.16' width=950 height=950  frameborder='0'></iframe>",
		"mediaURL":"http://www.ripleys.com/wp-content/uploads/2015/06/Ripcycle-Entires-Week-3-Unbelievable-Art-Contest.jpg" 
	},
	{
		"id": "tileitem-04",
		"title": "Tibetan Ram Skull", 
		"description": "Used by Lamaist monks during ritual ceremonies, animal votive skulls are cherished as religious relics in Tibet in the belief that the soul of the animal resides ",
		"type": "spin",
		"spinEmbed": "<iframe src='//spins0.arqspin.com/iframe.html?spin=esmxi9bojr6m&is=-0.16' width=950 height=950 scrolling='no' frameborder='0'></iframe>",
		"mediaURL": "http://www.ripleys.com/wp-content/uploads/2015/06/Ripcycle-Entires-Week-3-Unbelievable-Art-Contest.jpg"
	},
	{
		"id": "tileitem-05",
		"title": "Tiger Woman", 
		"description": "FEATURED IN RIPLEY'S BELIEVE IT OR NOT! REALITY SHOCK: Katzen Hobbes is a real-life Catwoman with 90% of her body tattooed with black tiger stripes!",
		"type": "videoEmbed",
		"videoEmbed": "<iframe width='853' height='480' src='https://www.youtube-nocookie.com/embed/kqCPIDrPic8?autoplay=1&list=PL3fZl9yFVeRLJSAVEFPhrBe0d5hMRWtwu&amp;controls=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>",
		"mediaURL": "http://www.ripleys.com/wp-content/uploads/2014/10/Katzen-With-Jeep-Ripleys-BION.jpg" 
	},
	{
		"id": "tileitem-06",
		"title": "Wood Ferrari", 
		"description": "Believe It or Not! this floating “Ferrari” is actually a hand-carved wooden boat.<br>The Ferrari was created in 2001 by Italian artist Livio De Marchi, an old-world master known for his incredible wood carvings. The boat was created to sail the canals during the annual Carnival of Venice festival.",
		"type": "videoEmbed",
		"videoEmbed": "<iframe src='https://player.vimeo.com/video/106517498?autoplay=1&color=ff262a&byline=0&portrait=0' width='853' height='480' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
		"mediaURL": "http://www.ripleys.com/wp-content/uploads/2014/09/RipleysBION-2014WoodenFerrari_0177.jpg" 
	}




];//end return statement

}//end function itemsJSON()

