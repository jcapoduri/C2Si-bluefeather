define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    url: 'api/workorder',
    defaults: {
      state: 'Waiting',
      howTo: 'likeThat',
      ringing: 'nope',
      copies: 0,
      isLista: false,
      deadline: new Date(),
      senna: 0.0,
      total: 0.0,
      charges: []
    }
  });
});