/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 5
Version: 5.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

var handleVectorMap = function() {
	if (('#world-map').length !== 0) {
		var wHeight = $(window).height();
		$('#world-map').css('height', wHeight);

		$(window).resize(function() {
			var wHeight = $(window).height();
			$('#world-map').css('height', wHeight);
		});
		$('#world-map').vectorMap({
			map: 'world_mill',
			scaleColors: ['rgba('+ app.color.gray900Rgb + ', .2)', 'rgba('+ app.color.gray900Rgb + ', .5)'],
			normalizeFunction: 'polynomial',
			hoverOpacity: 0.5,
			hoverColor: false,
			markerStyle: {
				initial: {
					fill: app.color.success,
					stroke: 'transparent',
					r: 3
				}
			},
			regionStyle: {
				initial: {
					fill: 'rgba('+ app.color.gray500Rgb + ', .25)',
					"fill-opacity": 1,
					stroke: 'none',
					"stroke-width": 0.4,
					"stroke-opacity": 1
				},
				hover: {
					"fill-opacity": 0.8
				},
				selected: {
					fill: 'yellow'
				},
				selectedHover: { }
			},
			focusOn: {
				x: 0.5,
				y: 0.5,
				scale: 2
			},
			backgroundColor: app.color.gray900,
			markers: [
				{latLng: [41.90, 12.45], name: 'Vatican City'},
				{latLng: [43.73, 7.41], name: 'Monaco'},
				{latLng: [-0.52, 166.93], name: 'Nauru'},
				{latLng: [-8.51, 179.21], name: 'Tuvalu'},
				{latLng: [43.93, 12.46], name: 'San Marino'},
				{latLng: [47.14, 9.52], name: 'Liechtenstein'},
				{latLng: [7.11, 171.06], name: 'Marshall Islands'},
				{latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
				{latLng: [3.2, 73.22], name: 'Maldives'},
				{latLng: [35.88, 14.5], name: 'Malta'},
				{latLng: [12.05, -61.75], name: 'Grenada'},
				{latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
				{latLng: [13.16, -59.55], name: 'Barbados'},
				{latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
				{latLng: [-4.61, 55.45], name: 'Seychelles'},
				{latLng: [7.35, 134.46], name: 'Palau'},
				{latLng: [42.5, 1.51], name: 'Andorra'},
				{latLng: [14.01, -60.98], name: 'Saint Lucia'},
				{latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
				{latLng: [1.3, 103.8], name: 'Singapore'},
				{latLng: [1.46, 173.03], name: 'Kiribati'},
				{latLng: [-21.13, -175.2], name: 'Tonga'},
				{latLng: [15.3, -61.38], name: 'Dominica'},
				{latLng: [-20.2, 57.5], name: 'Mauritius'},
				{latLng: [26.02, 50.55], name: 'Bahrain'},
				{latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
			]
		});
	}
};

var MapVector = function () {
	"use strict";
	return {
		//main function
		init: function () {
			handleVectorMap();
		}
	};
}();

$(document).ready(function() {
	MapVector.init();
});