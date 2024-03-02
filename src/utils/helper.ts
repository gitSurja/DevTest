export function getCurrentLocation(): void {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

export function showPosition(position: GeolocationPosition) {
  console.log('Latitude: ', position.coords.latitude);
  console.log('Longitude: ', position.coords.longitude);
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
}

export function showError(error: GeolocationPositionError): void {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.error('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      console.error('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      console.error('The request to get user location timed out.');
      break;
    default:
      console.error('An unknown error occurred.');
      break;
  }
}
