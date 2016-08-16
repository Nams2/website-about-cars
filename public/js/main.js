$(document).ready(function(){
	$(".open-menu").on("click", function(){

		$(".hamburger-menu").toggleClass("hidden");		
	});

	$(".delete-button").on("click", function(){
		$(".hamburger-menu").toggleClass("hidden");
	});


	$("#myCarousel").on("swipeleft",function(){
		//alert("swipe left");
	});

	$("#myCarousel").on("swiperight",function(){
		//alert("swipe right");
	});


	/*$("#myCarousel").bind('swipeone', function (event, obj) {
	   var direction=obj.description.split(":")[2]
	   if (direction=="left"){
	        //alert("left");
	   } else if (direction=="right"){
	        //alert("right");
	   }
	});*/

   $(".ui-loader").remove();
});


function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
    
function isNumeric (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

function myLocation () {

	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(findDealer);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function findDealer (position) {
	var points = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	new google.maps.Geocoder().geocode({'latLng': points}, function (res, status) {
		const zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
		console.log(zip[1]);
		window.location = "#/find-a-dealer/" + zip[1];
	});
}

function toggle_visibility() {
	$(".hamburger-menu").toggleClass("hidden");	
}



