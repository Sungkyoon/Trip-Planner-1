
const mapboxgl = require('mapbox-gl');

const icon = {
  Activity: 'http://i.imgur.com/WbMOfMl.png',

  Hotel: 'http://i.imgur.com/D9574Cu.png',

  Restaurant: 'http://i.imgur.com/cqR6pUI.png'

}


const buildMarker = function (type, coords) {
  if (type === 'Activity'){
    new mapboxgl.Marker(icon.Activity).setLngLat(coords);
  } else if (type === 'Hotel'){
    new mapboxgl.Marker(icon.Hotel).setLngLat(coords);
  } else {
    new mapboxgl.Marker(icon.Restaurant).setLngLat(coords);
  }

}




export default buildMarker;
