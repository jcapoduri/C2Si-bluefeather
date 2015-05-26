/*global define */

define([
  'marionette',
  'text!templates/workorder.tpl.html',
  'views/',
  'views/workorder.view'
  ], function (Marionette, tpl, workorderView) {
    'use strict';

    return Marionette.ItemView.extend({
      template: _.template(tpl),
      regions: {
        "workorders": "#workorderRegion"
      }
    });
  });