/*global define */

define([
  'marionette',
  'text!templates/workorder.tpl.html',
  'models/workorder.model'
  ], function (Marionette, tpl, workorderModel) {
    'use strict';

    return Marionette.ItemView.extend({
      template: _.template(tpl),
      model: new workorderModel(),
      initialize: function (opts) {
        debugger;
        if (!!opts.model)
          this.model = opts.model;
      }
    });
  });