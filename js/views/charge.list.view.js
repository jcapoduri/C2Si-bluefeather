/*global define */

define([
  'marionette',
  'text!templates/charge.list.tpl.html',
  'models/charge.collection',
  'views/charge.view'
  ], function (Marionette, tpl, workorderCollection, workorderView) {
    'use strict';

    return Marionette.CollectionView.extend({
      template: _.template(tpl),
      childView: workorderView,
      //collection: workorderCollection,
      initialize: function (options) {
        if (!!options.model)
          this.collection = options.model;
      }
    });
  });