"use strict";

requirejs.config({
    baseUrl: '.',
    paths: {
        controllers: 'controller',
        resources: 'resources',
        jquery: 'vendors/jquery/dist/jquery',
        bootstrap: 'vendors/bootstrap/dist/js/bootstrap.min',
        angular: 'vendors/angular/angular',
        angular_routes: 'vendors/angular-route/angular-route'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        angular_routes: {
            deps: ["angular"],
            exports: 'ngRoutes'
        }
    }
});

requirejs(['angular', 'app'], function (angular) {
    angular.bootstrap(document, ["bluesystem"]);
});