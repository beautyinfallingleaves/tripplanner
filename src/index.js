const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');
const chicagoCoords = [-87.641, 41.895];

// Pawel's
// mapboxgl.accessToken = 'pk.eyJ1IjoicGF3ZWwzIiwiYSI6ImNrMTZsOG55dTE2Yjcza3BrcDBwZGE2YmwifQ.9t0-DCmw8tlL15Lk3TVAuQ';

// Chris'
mapboxgl.accessToken = 'pk.eyJ1IjoiY2thbmciLCJhIjoiY2sxNmw4bDJ0MDBnaDNscXAwbm1sdTAyMCJ9.lthJJBYBh1uv_TExHMYzfA';

var map = new mapboxgl.Map({
  container: 'map',
  center: chicagoCoords,
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

const newMarker = buildMarker('activity', chicagoCoords);
newMarker.addTo(map);
