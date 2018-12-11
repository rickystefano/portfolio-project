function myMap() {
  var mapCanvas = document.getElementById("googleMap");
  var myCenter = new google.maps.LatLng(52.077032, 5.106177);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}

function myMape() {
  var mapCanvas = document.getElementById("googleMap2");
  var myCenter = new google.maps.LatLng(52.077032, 5.106177);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMape(map);
}

function myMapee() {
  var mapCanvas = document.getElementById("googleMap3");
  var myCenter = new google.maps.LatLng(52.077032, 5.106177);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMapee(map);
}

function myMapeee() {
  var mapCanvas = document.getElementById("googleMap4");
  var myCenter = new google.maps.LatLng(52.077032, 5.106177);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMapeee(map);
}
