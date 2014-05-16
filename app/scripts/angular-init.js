define([
    'angular',
    'angularSanitize',
    'controllers',
    'services',
    'directives',
    'filters'
], function(angular) {
    return angular.module('island',
        ['ngSanitize', 'controllers', 'services', 'directives', 'filters'],
        ['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        }]
    );
});