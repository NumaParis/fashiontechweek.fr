var styles = [
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
var options = {
	mapTypeControlOptions: {
		mapTypeIds: [ 'Styled']
	},
	center: new google.maps.LatLng(48.87792231703206, 2.3684547305107317),
	zoom: 18,
	mapTypeId: 'Styled'
};
var div = document.getElementById('map');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
map.mapTypes.set('Styled', styledMapType);
