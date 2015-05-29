/*global define */

define([
  'marionette',
  'text!templates/request.edit.tpl.html',
  'models/request.model'
  ], function (Marionette, tpl, requestModel) {
    'use strict';

    return Marionette.ItemView.extend({
      template: _.template(tpl),
      model: requestModel,
      events: {
        'input:change': 'updateModel'
      },
      updateModel: function (evt) {
          var $el = $(evt.currentTarget),
              val = $el.val(),
              id = $el.attr('id'),
              date = {};
          data[id] = val;
          this.model.set(data);
      }
    });
  });