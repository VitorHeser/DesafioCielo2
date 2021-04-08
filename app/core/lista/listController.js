(function () {
    'use strict';

    angular.module('app.todos.list', ['ngAnimate'])

            .controller('TodosListController', TodosListController);

    TodosListController.$inject = ['$scope'];

    function TodosListController($scope) {
    }
})();
