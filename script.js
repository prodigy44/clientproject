/*global $*/
/*global google*/
/*global service*/

$("#result").hide();

var map;
var infowindow;
var query = 'none';

//button to show result
$("#go").click(function(){
  $("#result").empty();
  var inputVal = $("#input").val();
  query = inputVal;
  makeSearch();
  $("#result").show();
});



function makeSearch() {
  map = new google.maps.Map(document.getElementById('map'), {});
  var request = {
    query: query,
  };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, showResults);
}


function showResults(results, status) {
 console.log(results);
  
  
  for (var i=0; i < results.length; i++) {
    if(results[i].photos){
    $("#result").append(
     '<ul>'+
        '<h2>' + results[i].name + '</h2>'+
        '<img src="'+ results[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) + '"/>'+
      '</ul>'
      );
    }
   }
  
}
