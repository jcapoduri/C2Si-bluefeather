define(['backbone', 
        'models/workorder.model'], 
  function (Backbone, workorderModel) {
  return Backbone.Collection.extend({
    url: 'api/workorder',
    model: workorderModel
  });
});