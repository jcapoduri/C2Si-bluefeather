"use strict";

requirejs.config({
    baseUrl: 'js/',
    paths: {
        controllers: 'controllers',
        models: 'models',
        views: 'views',
        jquery: '../vendors/jquery/dist/jquery',
        underscore: '../vendors/underscore/underscore',
        bootstrap: '../vendors/bootstrap/dist/js/bootstrap.min',
        backbone: '../vendors/backbone/backbone',
        marionette: '../vendors/marionette/lib/backbone.marionette',
        text: '../vendors/requirejs-text/text'
    },
    shim: {
        underscore: {
          exports: '_'
      },
      jquery: {
          exports: '$'
      },
      bootstrap: {
          deps: ['jquery']
      },
      backbone: {
          exports: 'Backbone',
          deps: ['jquery', 'underscore']
      },

      marionette: {
          exports: 'Backbone.Marionette',
          deps: ['backbone']
      }
  }
});

requirejs(['app'], function (app) {
    app.start();
});