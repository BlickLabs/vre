var insertMap = (function () {
  'use strict';
  /*global google*/
  return function (latLng, mapTitle, zoom, locations) {
    function init() {
      var mapZoom = zoom !== undefined ? zoom : 13,
        mapDOM = document.getElementById('location-map'),
        mapOptions,
        map,
        marker,
        markers = [];
      mapOptions = {
        zoom: mapZoom,
        center: new google.maps.LatLng(latLng[0], latLng[1]),
        styles: [{
          "featureType": "all",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#444444"
          }]
        }, {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "weight": "1.2"
          }]
        }, {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
            "weight": "1"
          }, {
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 45
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "transit.station",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": "#b4d2dc"
          }]
        }]
      };
      map = new google.maps.Map(mapDOM, mapOptions);
      if (!locations) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng[0], latLng[1]),
          map: map,
          title: mapTitle
        });
        markers.push(marker);
      } else {
        locations.forEach(function (item) {
          var item_marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.coordinates[0], item.coordinates[1]),
            map: map,
            title: item.title
          });
          markers.push(item_marker);
        });
      }
    }
    google.maps.event.addDomListener(window, 'load', init);
  };
}());