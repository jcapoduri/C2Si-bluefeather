define(['backbone', 
        'models/charge.model'], 
  function (Backbone, chargeModel) {
  return Backbone.Collection.extend({
    url: 'api/charge',
    model: chargeModel
  });
});