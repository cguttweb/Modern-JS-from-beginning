const curSuccess = (position) => {
  console.log(position);

  const coords = position.coords

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} metres`);
}

const curError = (err) => {
  console.log(`Error: ${err.code} - ${err.message}`)
}

const curOptions = {
  enableHighAccuracy: true, // use GPS if it is available
  timeout: 4000, // time to wait to stop trying to find location
  maximumAge: 0 // don't use cached position
}

// getCurrentPosition()
// 3 args success, error, options
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions)

// watchPosition() - will fire when location changes
const target = {
  latitude: 49.098765,
  longitude: -81.345678
}

const watchSuccess = (position) => {
  console.log(position);

  const coords = position.coords

  if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
    console.log(`You have reached your destination`);
    navigator.geolocation.clearWatch(id)
  }

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} metres`);
}

const watchError = (err) => {
  console.log(`Error: ${err.code} - ${err.message}`)
}

const watchOptions = {
  enableHighAccuracy: true, // use GPS if it is available
  timeout: 4000, // time to wait to stop trying to find location
  maximumAge: 0 // don't use cached position
}

const id = navigator.geolocation.getCurrentPosition(
  watchSuccess, 
  watchError, 
  watchOptions)