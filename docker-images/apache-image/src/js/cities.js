$(function() {
	function loadCities() {
		$.getJSON( "/api/students/", function( cities ) {
			console.log(cities);
			var message = cities[0].city + " " + cities[0].zip;

			$(".intro-text").text(message);
		});
	};

	loadCities();
	setInterval( loadCities, 2000 );
});
