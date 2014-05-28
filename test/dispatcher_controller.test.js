"use strict";

describe("Dispatcher controller", function(){
	var controller, scope;

	beforeEach(function(){
		module("tmc-dispatcher", "tmcTemplates");

		inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			controller = $controller("DispatcherController", { $scope: scope });
		});
	});

	it("should contain name: test", function(){
		expect(scope.name).toBe("test");
	});
});
