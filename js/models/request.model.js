define(['backbone', 
        'models/workorder.collection'], 
  function (Backbone, workorderCollection) {
  return Backbone.Model.extend({
    url: 'api/request',
    defaults: {
      client: '',  
      deliveryDate: new Date(),
      workorders: new workorderCollection()
    }
  });
});