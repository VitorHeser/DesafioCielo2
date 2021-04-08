(function () {
    'use strict';

    angular.module('app.index', ['app.pagamentosService'])

            .controller('IndexController', IndexController);

    IndexController.$inject = ['$log', 'pagamentosService'];

    function IndexController($log, pagamentosService) {
        var vm = this;

        vm.todos = [];

        retrieve();

        function retrieve() {
            return getTodos().then(function () {
                $log.info('Retrieved Todos');
            });
        }

        function getTodos() {
            return pagamentosService.getTodos()
                    .then(function (data) {
                        vm.todos = data;
                        return vm.todos;
                    });
        }
    }
})();
