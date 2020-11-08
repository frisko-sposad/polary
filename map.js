var image = 'map';
var width = 4967;
var height = 7092;
var maxLevel = 5;
var minLevel = 2;
var orgLevel = 5;

// Some weird calculations to fit the image to the initial position
// Leaflet has some bugs there. The fitBounds method is not correct for large scale bounds
var tileWidth = 256 * Math.pow(2, orgLevel);
var radius = tileWidth / 2 / Math.PI;
var rx = width - tileWidth / 2;
var ry = -height + tileWidth / 2;

var west = -180;
var east = (180 / Math.PI) * (rx / radius);
var north = 85.05;
var south = (360 / Math.PI) * (Math.atan(Math.exp(ry / radius)) - Math.PI / 4);
var rc = (tileWidth / 2 + ry) / 2;
var centerLat =
  (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - Math.PI / 4);
var centerLon = (west + east) / 2;
var bounds = [
  [south, west],
  [north, east],
];

var map = new L.Map('map', { maxBounds: bounds });

L.tileLayer(image + '/{z}-{x}-{y}.jpg', {
  maxZoom: maxLevel,
  minZoom: minLevel,
  opacity: 1.0,
  zIndex: 1,
  noWrap: true,
  bounds: bounds,
  attribution:
    '<a href="https://github.com/oliverheilig/LeafletPano">LeafletPano</a>',
}).addTo(map);

var zoom = map.getBoundsZoom(bounds);
var center = new L.latLng(centerLat, centerLon);

map.setView(center, zoom);

var LeafIcon = L.Icon.extend({
  options: {
    //shadowUrl: 'js/images/marker-shadow.png',
    iconSize: [40, 40],
    shadowSize: [45, 45],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -30],
  },
});

var castle = new LeafIcon({ iconUrl: './images/castle.png' });

BaseLabel.map((e) => {
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  })
    .bindPopup(`<strong>${e.name}<br>${e.description}</strong><br />`)
    .addTo(map);
});
