/*global define */

define([
  'marionette',
  'text!templates/request.list.tpl.html'
  ], function (Marionette, tpl) {
    'use strict';

    return Marionette.ItemView.extend({
      template: _.template(tpl)      
    });
  });