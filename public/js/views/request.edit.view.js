define([
  'marionette',
  'text!templates/request.edit.tpl.html',
  'views/workorder.collection.view',
  'models/request.model'
  ], function (Marionette, tpl, collectionView, requestModel) {
    'use strict';

    return Marionette.LayoutView.extend({
      template: _.template(tpl),
      regions: {
        'workorders': "#workorderRegion"
      },
      model: new requestModel(),
      ui: {
        'addBtn': 'button#addWorkorder'
      },
      events: {
        'change input': 'updateModel',
        'click @ui.addBtn': 'addNew'
      },
      updateModel: function (evt) {
          var $el = $(evt.currentTarget),
              val = $el.val(),
              id = $el.attr('id'),
              data = {};
          data[id] = val;
          this.model.set(data);
      },
      addNew: function(evt) {
        debugger;
        var orders = this.model.get('workorders');
        orders.push(new orders.model());
      },
      onBeforeShow: function () {
        this.showChildView('workorders', new collectionView({model: this.model.get('workorders')}));
      }
    });
  });