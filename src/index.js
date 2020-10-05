console.log('Hello World');

import buildMarker from './marker';
//import mapboxgl from "mapbox-gl";
const mapboxgl = require('mapbox-gl');


mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuZ2t5b29uIiwiYSI6ImNrZndvdHB6dDEwY3gyc285NDRscWVlNWcifQ.w-B9XvlN8H0ch9aV3uLo1A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDom = document.getElementsByTagName('div');

new mapboxgl.Marker(markerDom).setLngLat([-74.009, 40.705]).addTo(map);
const marker = buildMarker('Activity', [-74.009151, 40.705086]);
marker.addTo(map);
