(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.menu',
        
        'app.todos.dash1',
        'app.todos.dash2',
        'app.todos.dash3',
        'app.todos.list',

        'app.directives.datepicker',
        'app.directives.about',
        'app.filters'
    ]);
})();
