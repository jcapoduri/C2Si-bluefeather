define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    url: 'api/request',
    defaults: {
      description: '',  
      title: '',
      done: false,
      ignore: false,
      deliveryDate: new Date(),
      kind: 'lista'
    }
  });
});