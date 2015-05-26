/*global define */

define([
    'backbone',
    'marionette',
    'regions/dialog',
    'views/sidebar.view',
    'views/request.list.view',
    'views/request.edit.view',
    'routes/routes.router'
    ], 
    function (Backbone, Marionette, DialogRegion, sidebarView, requestListView, requestEditView, Router) {
        'use strict';

        var app = new Marionette.Application();

        app.addRegions({
            sidebar: 'body > aside',
            main: 'body > section',
            dialog: {
                selector: "body > div",
                regionClass: DialogRegion
            }
        });

        var menu = new sidebarView();

        app.addInitializer(function () {
            app.sidebar.show(menu);
        });

        app.on("start", function(options){
            if (Backbone.history){
                Backbone.history.start();
            }
            if(Backbone.history.fragment === '') {
                Backbone.history.navigate('/page/home');
            }
        });

        app.controller = {};

        app.controller.dashboard = function () {};

        app.controller.requestList = function () {
            app.main.show(new requestListView());
        };

        app.controller.requestEdit = function () {
            app.main.show(new requestEditView());
        };


        app.router = new Router({
            controller: app.controller
        });

        return app;
    });