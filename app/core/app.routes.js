(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/todos/dash');
        $urlRouterProvider.when('/', '/todos/dash');
        $urlRouterProvider.when('/todos', '/todos/dash');
        $urlRouterProvider.when('/todos/', '/todos/dash');
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('root', {
                    abstract: true,
                    url: '/',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'menu': {
                            templateUrl: 'core/navigation/menuView.html',
                            controller: 'MenuController',
                            controllerAs: 'MC'
                        },
                        'breadcrumbs': {
                            templateUrl: 'core/navigation/breadcrumbsView.html',
                            controller: 'BreadcrumbsController',
                            controllerAs: 'BC'
                        },
                        'content': {
                            template: 'Choose option from menu...'
                        },
                        'footer': {
                            templateUrl: 'core/navigation/footerView.html',
                            controller: 'FooterController',
                            controllerAs: 'FC'
                        }
                    }
                })
                .state('root.todos', {
                    abstract: true,
                    url: 'todos',
                    data: {
                        title: 'Todos',
                        breadcrumb: 'Todos'
                    }
                })
                .state('root.todos.dash1', {
                    url: '/dash',
                    data: {
                        title: 'Dash1',
                        breadcrumb: 'New1'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/dash1/dashView.html',
                            controller: 'Dash1Controller',
                            controllerAs: 'DSH1'
                        }
                    }
                })
                .state('root.todos.dash2', {
                    url: '/dash2',
                    data: {
                        title: 'Dash2',
                        breadcrumb: 'New2'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/dash2/dash2View.html',
                            controller: 'Dash2Controller',
                            controllerAs: 'DSH2'
                        }
                    }
                })
                .state('root.todos.dash3', {
                    url: '/dash3',
                    data: {
                        title: 'Dash3',
                        breadcrumb: 'New3'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/dash3/dash3View.html',
                            controller: 'Dash3Controller',
                            controllerAs: 'DSH3'
                        }
                    }
                })
                .state('root.todos.list', {
                    url: '/list',
                    data: {
                        title: 'Lista',
                        breadcrumb: 'List'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/lista/listView.html',
                            controller: 'TodosListController',
                            controllerAs: 'TLC'
                        }
                    }
                })
    }
})();
