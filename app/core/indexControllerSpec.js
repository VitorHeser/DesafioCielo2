"use strict";

describe("IndexController", function () {
    var log, location, todosService, controller, httpBackend, vm;

    beforeEach(module("app.index"));
    beforeEach(module("app.pagamentosService"));

    beforeEach(inject(function ($controller, $httpBackend, _pagamentosService_, $log, $location) {
        location = $location;
        log = $log;
        pagamentosService = _pagamentosService_;
        httpBackend = $httpBackend;
        controller = $controller("IndexController", {});
        vm = controller;
    })); 

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

  
});
