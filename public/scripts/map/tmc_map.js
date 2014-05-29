"use strict";

app.directive("tmcMap", [function(){

	var map;
	return {
		restrict: "C",
		compile: function(){
			map = L.map('map', { zoomControl: false }).setView([46, 20], 10);
			L.tileLayer('https://otile1-s.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
				attribution: '<p class="leaflet-attribution-label">Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="https://developer.mapquest.com/content/osm/mq_logo.png"></p>',
				maxZoom: 18
			}).addTo(map);
		}
	}
}]);
