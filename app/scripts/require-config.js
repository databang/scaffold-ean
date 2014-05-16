var require = {

    waitSeconds: 0,

    paths: {

        // from bower
        lodash: '/bower_components/lodash/dist/lodash.min',
        jquery: '/bower_components/jquery/dist/jquery.min',
        bootstrap: '/bower_components/bootstrap/dist/js/bootstrap.min',
        angular: '/bower_components/angular/angular.min',
        angularRoute: '/bower_components/angular-route/angular-route.min',
        angularSanitize: '/bower_components/angular-sanitize/angular-sanitize.min',
        angularCookies: '/bower_components/angular-cookies/angular-cookies.min',

        // angular modules
        controllers: '/scripts/controllers/controllers',
        directives: '/scripts/directives/directives',
        services: '/scripts/services/services',
        filters: '/scripts/filters/filters',

        // misc
        init: '/scripts/angular-init'

    },

    shim: {

        lodash: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        },
        angular: {
            deps: ['jquery', 'bootstrap'],
            exports: 'angular'
        },
        angularRoute: {
            deps: ['angular']
        },
        angularSanitize: {
            deps: ['angular']
        },
        angularCookies: {
            deps: ['angular']
        },

        controllers: {
            deps: ['angular']
        },
        directives: {
            deps: ['angular']
        },
        services: {
            deps: ['angular']
        },
        filters: {
            deps: ['angular']
        },

        init: {
            deps: ['lodash', 'bootstrap']
        }
    }

};
