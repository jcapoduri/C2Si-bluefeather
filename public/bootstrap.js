"use strict";

requirejs.config({
    baseUrl: '.',
    paths: {
        controllers: 'controller',
        resources: 'resources',
        jquery: 'vendors/jquery/dist/jquery',
        bootstrap: 'vendors/bootstrap/dist/js/bootstrap.min',
        angular: 'vendors/angular/angular',
        text: 'vendors/require/text',
    },
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        }
    }
});

requirejs(['angular', 'app'], function (angular) {
    angular.bootstrap(document, ["bluesystem"]);
});