/*global define */

define([
  'marionette',
  'text!templates/sidebar.tpl.html'
  ], function (Marionette, tpl) {
    'use strict';

    return Marionette.ItemView.extend({
      template: _.template(tpl)      
    });
  });