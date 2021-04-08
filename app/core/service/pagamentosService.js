(function () {
    'use strict';

    angular.module('app.pagamentosService', ['app'])

            .factory('pagamentosService', pagamentosService);

            pagamentosService.$inject = ['$http', '$log', '$q'];

    function pagamentosService($http, $log, $q) {
        return {
            getTodos: getTodos
        };

        function getTodos() {
            return $http.get('http://localhost:3000/posts')
                    .then(getTodosComplete)
                    .catch(getTodosFailed);

            function getTodosComplete(response) {
                return response.data;
            }

            function getTodosFailed(e) {
                var newMessage = 'XHR Failed for getTodos.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();
