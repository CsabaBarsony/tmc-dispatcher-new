"use strict";

app.factory("statusService", ["$interval", function(interval){
	var statuses = [
		{
			id: 1,
			lat: 46.2,
			lng: 20
		},
		{
			id: 2,
			lat: 46.1,
			lng: 20.1
		},
		{
			id: 3,
			lat: 46,
			lng: 20.2
		}
	];

	interval(function(){
		for(var i = 0, l = statuses.length; i < l; i++){
			statuses[i].lat += (Math.random() - 0.5) * 0.0001;
			statuses[i].lng += (Math.random() - 0.5) * 0.0001;
		}
	}, 1000);

	return {
		getStatuses: function(){
			return statuses;
		}
	}
}]);
