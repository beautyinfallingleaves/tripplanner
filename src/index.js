const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

// Pawel's
// mapboxgl.accessToken = 'pk.eyJ1IjoicGF3ZWwzIiwiYSI6ImNrMTZsOG55dTE2Yjcza3BrcDBwZGE2YmwifQ.9t0-DCmw8tlL15Lk3TVAuQ';

// Chris'
mapboxgl.accessToken = 'pk.eyJ1IjoiY2thbmciLCJhIjoiY2sxNmw4bDJ0MDBnaDNscXAwbm1sdTAyMCJ9.lthJJBYBh1uv_TExHMYzfA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

// Set the initial marker.
const marker = buildMarker('activity', [-87.641, 41.895]);
// console.log(marker);
marker.addTo(map);
