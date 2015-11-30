var LocationData = [
   [35.514523, 23.943559, "Lila Villas"],
   [35.5792671, 23.5887205, "Balos"],
   [35.5019631, 23.5799002, "Falassarna"],
   [35.2695139, 23.5304403, "Elafonisi"],
   [35.2689729, 24.0963705, "Sfakia"],
   [35.3303832, 24.2761982, "Kournas-Aptera"],
   [35.2911342, 23.9593437, "Samaria Gorge"],
   [35.4323351, 23.9833843, "Therisso Gorge"],
   
];

    
function initialize()
{
    var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 10,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(35.38121267, 23.89801025),
                       
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    // http://www.mapstylr.com/
        styles : [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 65
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "weight": 0.29
            },
            {
                "saturation": -100
            },
            {
                "lightness": -13
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#00b3ff"
            },
            {
                "saturation": -21
            },
            {
                "lightness": -25
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#8693a1"
            },
            {
                "weight": 2.3
            },
            {
                "lightness": -13
            },
            {
                "gamma": 1.08
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "weight": 0.48
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 2.6
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": -37
            },
            {
                "gamma": 0.01
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f5f0f5"
            },
            {
                "weight": 4.43
            }
        ]
    }
]						
                };
    var mapElement = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapElement, mapOptions);
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow({ maxWidth: 200 });
     
    for (var i in LocationData)
    {
        var p = LocationData[i];
        var latlng = new google.maps.LatLng(p[0], p[1]);
        bounds.extend(latlng);
         
        
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: p[2],
            mob: p[3],
            address: p[4]
        });
        
        
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent( "<div class='map-sugtitle'>" + this.title );
            infowindow.open(map, this);
        });
    }
            
   
    var listener = google.maps.event.addListener(map, "idle", function() { 
      if (map.getZoom() > 16) map.setZoom(12); 
      google.maps.event.removeListener(listener); 
    });
}
 google.maps.event.addDomListener(window, 'load', initialize);