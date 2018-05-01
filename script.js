/*global $*/
/*global google*/
/*global service*/

$("#result").hide();
//$(".alert").hide();

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


$(".alert").hide();

$("#about").click(function(){
    $(".alert").show();
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
    
    var isOpentext;
    var ifOpen = results[i].opening_hours.open_now;
    if (ifOpen) {
      isOpentext = "Is Open Now";
    } else {
      isOpentext = "Is Not Open Now";
    }
    
    $("#result").append(
     '<ul class = "result-div">'+
        '<h2>' + results[i].name + '</h2>'+
        '<img src="'+ results[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) + '"/>'+
        '<a href="https://www.google.com/maps/place/' + results[i].formatted_address + '"> <p class="location">' + results[i].formatted_address + '</p> </a>' +
        '<p class="opening_hours">' + isOpentext + '</p>' +
        '<p class="rating"> Rating: ' + results[i].rating + '</p>' +
        '<p class="price_level"> Pricing Level: ' + results[i].price_level + '</p>' +
      '</ul>'
      );
    }
   }
  
}
