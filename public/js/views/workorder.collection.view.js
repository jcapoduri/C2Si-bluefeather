/*global define */

define([
  'marionette',
  'text!templates/workorder.tpl.html',
  'models/workorder.collection',
  'views/workorder.view'
  ], function (Marionette, tpl, workorderCollection, workorderView) {
    'use strict';

    return Marionette.CollectionView.extend({
      template: _.template(tpl),
      childView: workorderView,
      collection: workorderCollection,
      initialize: function (options) {
        if (!!options.model)
          this.model = options.model;
      }
    });
  });