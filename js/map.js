function realizeMap ()
{

  var myLatlng = new google.maps.LatLng(50.624931, 26.2525444);

  var myOptions = {
		zoom: 20,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
  var marker = new google.maps.Marker({
  position: myLatlng,
  icon: 'img/map-contacts/map-pointer.svg'
});




marker.setMap(map);
}
