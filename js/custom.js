$(document).ready(function() {

	setInterval(displayNextImage, 5000);

	function displayNextImage() {
	  x = (x === images.length - 1) ? 0 : x + 1;
		$('#main_home').fadeTo('slow', 0.7, function()
		{
		    $('header').css("background-image", "url("+images[x]+")");
		}).fadeTo('slow', 1);	  
	}

	function displayPreviousImage() {
	  x = (x <= 0) ? images.length - 1 : x - 1;
		$('#main_home').fadeTo('slow', 0.7, function()
		{
		    $('header').css("background-image", "url("+images[x]+")");
		}).fadeTo('slow', 1);
	}

	var images = [], x = -1;
	images[0] = "img/solar_panel.jpg";
	images[1] = "img/house_solar_panel.jpg";
	images[2] = "img/city_solar_panel.jpg";

});