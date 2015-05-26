/*global define */

define([
  'marionette',
  'text!templates/request.edit.tpl.html'
  ], function (Marionette, tpl) {
    'use strict';

    return Marionette.ItemView.extend({
      template: _.template(tpl)      
    });
  });