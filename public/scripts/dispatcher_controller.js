"use strict";

app.controller("DispatcherController", ["$scope", "statusService", function(scope, statusService){
	scope.statuses = statusService.getStatuses();
	scope.name = "test";
}]);
