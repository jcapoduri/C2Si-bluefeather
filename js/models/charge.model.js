define(['backbone', 'models/fee.model'], function (Backbone, Fee) {
  return Backbone.Model.extend({
    url: 'api/charge',
    defaults: {
      fee: new Fee(),
      quantity: 0, 
      price: 0.0
    }
  });
});