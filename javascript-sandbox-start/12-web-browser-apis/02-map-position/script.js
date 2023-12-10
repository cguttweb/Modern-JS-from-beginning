// initialising map
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map)

const getCurPosition = (position) => {
  const lat = position.coords.latitude
  const long = position.coords.longitude

  marker.setLatLng([lat, long]).update()
  map.setView([lat, long], 9)

  marker.bindPopup('<p>This is my location</p>')
}

navigator.geolocation.getCurrentPosition(getCurPosition)