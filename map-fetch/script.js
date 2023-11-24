var map = L.map('map').setView([51.505, -0.09], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var layerGroup = L.layerGroup().addTo(map);
var markerArray = []

map.on('click', function(e){
    var poplocation = e.latlng
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
    marker.addTo(layerGroup)
    var coordinates = [marker.getLatLng().lat, marker.getLatLng().lng]
    markerArray.push(coordinates)
    drawLine(markerArray)
})

function drawLine(marray){
    var polyline = L.polyline(marray, {color:"red"}).addTo(map)
    polyline.addTo(layerGroup)
}



function testFunction1(){
    layerGroup.clearLayers()
    map.closePopup()
    marker = L.marker([22.572645,  88.363892]).addTo(layerGroup)
    marker.bindPopup("Shyam").openPopup()
}
function testFunction2(){
    layerGroup.clearLayers()
    map.closePopup()
    marker = L.marker([40.743,  -73.822]).addTo(layerGroup)
    marker.bindPopup("Sraddha").openPopup()
}
function testFunction3(){
    layerGroup.clearLayers()
    map.closePopup()
    marker = L.marker([28.644800,  77.216721]).addTo(layerGroup)
    marker.bindPopup("Arindam").openPopup()
}