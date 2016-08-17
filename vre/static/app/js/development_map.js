var insertMap = (function () {
  'use strict';
  /*global google*/
  return function (latLng, mapTitle, zoom) {
    function init() {
      var mapZoom = zoom !== undefined ? zoom : 13,
        mapDOM = document.getElementById('location-map'),
        mapOptions,
        map,
        marker,
        aux = [];
      mapOptions = {
        zoom: mapZoom,
        center: new google.maps.LatLng(latLng[0], latLng[1]),
        styles: [{
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#e5e8e7"
          }, {
            "visibility": "off"
          }]
        }, {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#f5f5f2"
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.attraction",
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
          "featureType": "poi.government",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [{
            "color": "#91b65d"
          }, {
            "gamma": 1.51
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.place_of_worship",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.school",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.sports_complex",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.sports_complex",
          "elementType": "geometry",
          "stylers": [{
            "color": "#c7c7c7"
          }, {
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }, {
            "saturation": "-100"
          }, {
            "color": "#e5f2d9"
          }, {
            "lightness": "-67"
          }, {
            "weight": "0.48"
          }, {
            "gamma": "2.05"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "visibility": "off"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }, {
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": "#a0d3d3"
          }]
        }]
      };
      map = new google.maps.Map(mapDOM, mapOptions);
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(latLng[0], latLng[1]),
        map: map,
        title: mapTitle
      });
      aux.push(marker);
      aux = [];
    }
    google.maps.event.addDomListener(window, 'load', init);
  };
}());