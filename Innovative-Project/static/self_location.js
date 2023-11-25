var map = L.map('map').setView([51.505, -0.09], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    if (!navigator.geolocation) {
      console.log('Your browser doesn\'t support geolocation feature.');
    } else {
        // setInterval(() => {
            
        // }, interval);
      navigator.geolocation.getCurrentPosition(getPosition);
    }

    var marker, circle;

    function getPosition(position) {
      console.log(position);

      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var accuracy = position.coords.accuracy;

      // Extract latitude and longitude values
      var latitudeValue = lat.toFixed(4);
      var longitudeValue = long.toFixed(4);

      // Display latitude and longitude values in HTML
      document.getElementById('latitude').innerHTML = 'Latitude: ' + latitudeValue;
      document.getElementById('longitude').innerHTML = 'Longitude: ' + longitudeValue;

      if (marker) {
        map.removeLayer(marker);
      }
      if (circle) {
        map.removeLayer(circle);
      }

      marker = L.marker([lat, long]).addTo(map);
      circle = L.circle([lat, long], { radius: accuracy }).addTo(map);

      var featureGroup = L.featureGroup([marker, circle]).addTo(map);

      map.fitBounds(featureGroup.getBounds());

      console.log('Your coordinate is : Lat:' + lat + ' Long:' + long + ' Accuracy : ' + accuracy);
    }