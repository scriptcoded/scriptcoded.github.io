var map = null;
var markerArray = [];
var locations = [
    ['Weird old dock?', 55.596586, 12.928771, 1, 'http://i.imgur.com/Tk08d2g.png', 'http://i.imgur.com/wUyxNMj.png'],
    ['The one and only K well', 55.585927, 12.931623, 2, 'http://i.imgur.com/Tk08d2g.png'],
    ['Centralstationen', 55.608553, 13.000494, 3, 'http://i.imgur.com/Tk08d2g.png'],
    ['Auschwitz', 50.0293408, 19.202498, 4, 'http://i.imgur.com/Tk08d2g.png'],
    ['Malmborgs :D', 55.581631, 12.935303, 5, 'http://i.imgur.com/Tk08d2g.png']
];

function initialize() {
    // Create an array of styles.
    var styles = [
        {
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -20 }
            ]
        },{
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
                { hue: '#009933' },
                { lightness: -20 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,{name: "Second Dimention"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        //zoom: 17,
        zoom: 10,
        center: new google.maps.LatLng(55.5811471,12.9363754),
        disableDefaultUI: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        }
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    
    // Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    
    // New marker
    google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });
    // Add markers to the map
    // Set up markers based on the number of elements within the myPoints array
    for (var i = 0; i < locations.length; i++) {
        if (!locations[i][5]){locations[i][5]='http://i.imgur.com/zWuY9BN.png';}
        createMarker(new google.maps.LatLng(locations[i][1], locations[i][2]),locations[i][0], locations[i][3], locations[i][4], locations[i][5]);
    }
    mc.addMarkers(markerArray, true);
    
    
    
    
    /*Old marker function
    createMarker('First!', 55.5811471, 12.9363754, 'img/markerWarning.png', 0, 0, 32, 64, false);
    
    function createMarker(inputTitle, inputLat, inputLng, inputImgUrl, inputOriginX, inputOriginY, inputAnchorX, inputAnchorY, inputDraggable){
    // Create a marker
    var image = {
        url: inputImgUrl,
        //size: new google.maps.Size(64, 64),
        origin: new google.maps.Point(inputOriginX, inputOriginY),
        anchor: new google.maps.Point(inputAnchorX, inputAnchorY)
    };
    var markerLanlng = new google.maps.LatLng(inputLat,inputLng);
    var marker = new google.maps.Marker({
        position: markerLanlng,
        icon: image,
        draggable: inputDraggable,
        title: inputTitle
    });
    marker.setMap(map);
    }
    */
}

var infowindow = new google.maps.InfoWindow({
    size: new google.maps.Size(150, 50)
});

function createMarker(latlng, myTitle, myNum, myIcon, myThumbnail) {
    var contentString = myTitle;
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: myIcon,
        zIndex: Math.round(latlng.lat() * -100000) << 5,
        title: myTitle
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString + "<div><img src='" + myThumbnail + "'</div>");
        infowindow.open(map, marker);
    });

    markerArray.push(marker); //push local var marker into global array
}

window.onload = initialize;

google.maps.event.addDomListener(window, 'load', initialize);
