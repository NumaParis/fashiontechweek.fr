var latitude = 48.867721,
	longitude = 2.34963,
	map_zoom = 17;



//google map custom marker icon - .png fallback for IE11
var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
var marker_url = ( is_internetExplorer11 ) ? 'images/cd-icon-location.png' : 'images/cd-icon-location.svg';
	
//define the basic color of your map, plus a value for saturation and brightness
var	main_color = '#2d313f',
	saturation_value= -20,
	brightness_value= 5;

//we define here the style of the map
var style= [ 
	{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{ hue: '#f3f3f3' },
			{ saturation: -100 },
			{ lightness: 57 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'road.local',
		elementType: 'geometry',
		stylers: [
			{ hue: '#ffbff4' },
			{ saturation: 100 },
			{ lightness: -13 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
			{ hue: '#161c13' },
			{ saturation: -81 },
			{ lightness: -86 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ hue: '#ff0000' },
			{ saturation: 100 },
			{ lightness: -36 },
			{ visibility: 'off' }
		]
	},{
		featureType: 'road.arterial',
		elementType: 'all',
		stylers: [
			{ hue: '#ff2dda' },
			{ saturation: 100 },
			{ lightness: -24 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{ hue: '#000000' },
			{ saturation: -100 },
			{ lightness: -100 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{ hue: '#ffe400' },
			{ saturation: 100 },
			{ lightness: -33 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ hue: '#f3f3f3' },
			{ saturation: -100 },
			{ lightness: 79 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'poi.government',
		elementType: 'all',
		stylers: [

		]
	},{
		featureType: 'poi.business',
		elementType: 'all',
		stylers: [

		]
	}
];

//set google map options
var map_options = {
  	center: new google.maps.LatLng(latitude, longitude),
  	zoom: map_zoom,
  	panControl: false,
  	zoomControl: false,
  	mapTypeControl: false,
  	streetViewControl: false,
  	mapTypeId: google.maps.MapTypeId.ROADMAP,
  	scrollwheel: false,
  	styles: style,
}
//inizialize the map
var map = new google.maps.Map(document.getElementById('google-container'), map_options);


function initialize() {
  setMarkers(map, beaches);
}


// The locations 
var numa = new google.maps.LatLng(48.867721, 2.34963);
var gaite = new google.maps.LatLng(48.86677, 2.35366);
var pail = new google.maps.LatLng(48.868451, 2.352168);
var escp = new google.maps.LatLng(48.864176, 2.380883);
var cnd = new google.maps.LatLng(48.894092,2.406816);

var lieux = [
    ['NUMA', 48.867721, 2.34963],
    ['Gaite', 48.86677, 2.35366],
    ['La Paillase', 48.868451, 2.352168],
    ['ESCP', 48.864176, 2.380883],
    ['CND', 48.894092,2.406816],
];




// var contentString = '<div id="content">'+
//   '<div id="siteNotice">'+
//   '</div>'+
//   '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//   '<div id="bodyContent">'+
//   '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//   'sandstone rock formation in the southern part of the '+
//   'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//   'south west of the nearest large town, Alice Springs; 450&#160;km '+
//   '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//   'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//   'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//   'Aboriginal people of the area. It has many springs, waterholes, '+
//   'rock caves and ancient paintings. Uluru is listed as a World '+
//   'Heritage Site.</p>'+
//   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//   'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//   '(last visited June 22, 2009).</p>'+
//   '</div>'+
//   '</div>';

// var infowindow = new google.maps.InfoWindow({
//   content: contentString
// });






//// -----------
function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.

  var image = {
    url: 'images/cd-icon-location.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    // size: new google.maps.Size(20, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  // var shape = {
  //     coords: [1, 1, 1, 20, 18, 20, 18 , 1],
  //     type: 'poly'
  // };
  for (var i = 0; i < locations.length; i++) {
    var lieu = locations[i];
    var myLatLng = new google.maps.LatLng(lieu[1], lieu[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        // shape: shape,
        title: lieu[0],
        zIndex: lieu[3]
    });
  }
}


setMarkers(map, lieux);

//add custom buttons for the zoom-in/zoom-out on the map
function CustomZoomControl(controlDiv, map) {
	//grap the zoom elements from the DOM and insert them in the map 
  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
  		controlUIzoomOut= document.getElementById('cd-zoom-out'),
  		// controlUIzoomOut= document.getElementsByClassName("stopButton")[0];
  		controlUIloc1= document.getElementById('loc1'),
  		controlUIloc2= document.getElementById('loc2');
  		controlUIloc3= document.getElementById('loc3');
  		controlUIloc4= document.getElementById('loc4');
  		controlUIloc5= document.getElementById('loc5');
  	// The locations etc.
  	controlDiv.appendChild(controlUIloc1);
  	controlDiv.appendChild(controlUIloc2);
  	controlDiv.appendChild(controlUIloc3);
  	controlDiv.appendChild(controlUIloc4);
  	controlDiv.appendChild(controlUIloc5);
  	controlDiv.appendChild(controlUIzoomIn);
  	controlDiv.appendChild(controlUIzoomOut);


	// Setup the click event listeners and zoom-in or out according to the clicked element
	google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
	    map.setZoom(map.getZoom()+1)
	});
	google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
	    map.setZoom(map.getZoom()-1)
	});

	google.maps.event.addDomListener(controlUIloc1, 'click', function() {
	    map.setCenter(numa)
	});
	google.maps.event.addDomListener(controlUIloc2, 'click', function() {
	    map.setCenter(gaite)
	});
	google.maps.event.addDomListener(controlUIloc3, 'click', function() {
	    map.setCenter(pail)
	});
	google.maps.event.addDomListener(controlUIloc4, 'click', function() {
	    map.setCenter(escp)
	});
	google.maps.event.addDomListener(controlUIloc5, 'click', function() {
	    map.setCenter(cnd)	    
	    // var infowindow = new google.maps.InfoWindow({
	    //     content: "something"
	    // });
	    // var marker = new google.maps.Marker({
	    // 	position: cnd,
	    // 	map: map,
	    // });
	    // infowindow.open(map,marker);
	});
}

var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	//insert the zoom div on the top left of the map
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);