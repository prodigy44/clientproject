/*global $*/

$("#result").hide();

var map;
var infowindow;

function initMap() {
var pyrmont = {lat: -33.867, lng: 151.195};
console.log(pyrmont);
map = new google.maps.Map(document.getElementById('map'), {
  center: pyrmont,
  zoom: 15
});

infowindow = new google.maps.InfoWindow();
var service = new google.maps.places.PlacesService(map);
service.nearbySearch({
  location: pyrmont,
  radius: 500,
  type: ['store']
}, callback);
}

function callback(results, status) {
console.log(results)
if (status === google.maps.places.PlacesServiceStatus.OK) {
  for (var i = 0; i < results.length; i++) {
    createMarker(results[i]);
  }
}
}






//button to show result
$("#go").click(function(){
$("#result").show();
});