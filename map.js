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
var centerLat = (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - Math.PI / 4);
var centerLon = (west + east) / 2;
var bounds = [
  [south, west],
  [north, east],
];

var map = new L.Map('map', { maxBounds: bounds });

// шкала
// var scale = L.control.scale({
//   position: 'topleft',
//   maxWidth: 100,
//   metric: false,
//   imperial: true,
//   updateWhenIdle: true,
// }); // Creating scale control

// scale.addTo(map); // Adding scale control to the map
//шкала

L.tileLayer(image + '/{z}-{x}-{y}.jpg', {
  maxZoom: maxLevel,
  minZoom: minLevel,
  opacity: 1.0,
  zIndex: 1,
  noWrap: true,
  bounds: bounds,
  attribution: '<a href="https://github.com/oliverheilig/LeafletPano">LeafletPano</a>',
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

const settlementsArr = settlements.map((e) =>
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  }).bindPopup(`<strong>${e.name}</strong><br>${e.description}<br />`),
);
const settlementsMarker = L.layerGroup(settlementsArr).addTo(map);

const giftsArr = gifts.map((e) =>
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  }).bindPopup(`<strong>${e.name}</strong><br>${e.description}<br />`),
);
const giftsMarker = L.layerGroup(giftsArr).addTo(map);

const monasteriesArr = monasteries.map((e) =>
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  }).bindPopup(`<strong>${e.name}</strong><br>${e.description}<br />`),
);
const monasteriesMarker = L.layerGroup(monasteriesArr).addTo(map);

const foremothersCreationArr = foremothersCreation.map((e) =>
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  }).bindPopup(`<strong>${e.name}</strong><br>${e.description}<br />`),
);
const foremothersCreationMarker = L.layerGroup(foremothersCreationArr).addTo(map);

const descriptionOfAreaArr = descriptionOfArea.map((e) =>
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  }).bindPopup(`<strong>${e.name}</strong><br>${e.description}<br />`),
);
const descriptionOfAreaMarker = L.layerGroup(descriptionOfAreaArr).addTo(map);

const battleArr = battle.map((e) =>
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  }).bindPopup(`<strong>${e.name}</strong><br>${e.description}<br />`),
);
const battleMarker = L.layerGroup(battleArr).addTo(map);

const meetingsArr = meetings.map((e) =>
  L.marker(e.coordinates, {
    icon: new LeafIcon({ iconUrl: `./images/${e.ico}.svg` }),
  }).bindPopup(`<strong>${e.name}</strong><br>${e.description}<br />`),
);
const meetingsMarker = L.layerGroup(meetingsArr).addTo(map);

L.control
  .layers(
    {},
    {
      Поселения: settlementsMarker,
      Дары: giftsMarker,
      'Cвятые места и монастыри': monasteriesMarker,
      'Творения Праматерей': foremothersCreationMarker,
      Местность: descriptionOfAreaMarker,
      Битвы: battleMarker,
      Встречи: meetingsMarker,
    },
    { collapsed: false },
  )
  .addTo(map);

//remember last position
var rememberLat = document.getElementById('latitude').value;
var rememberLong = document.getElementById('longitude').value;
if (!rememberLat || !rememberLong) {
  rememberLat = 0;
  rememberLong = 0;
}

var marker = L.marker([0, 0], {
  icon: new LeafIcon({ iconUrl: `./images/castle.svg` }),
}).addTo(map);
marker.on('dragend', function (e) {
  updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
});
map.on('click', function (e) {
  marker.setLatLng(e.latlng);
  updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
});
function updateLatLng(lat, lng, reverse) {
  if (reverse) {
    marker.setLatLng([lat, lng]);
    map.panTo([lat, lng]);
  } else {
    document.getElementById('latitude').value = marker.getLatLng().lat;
    document.getElementById('longitude').value = marker.getLatLng().lng;
    map.panTo([lat, lng]);
  }
}
