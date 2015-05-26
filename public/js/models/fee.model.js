define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    url: 'api/fee',
    defaults: {
      description: "",
      price: 0.0,
      doNotUse: false
    }
  }); 
});