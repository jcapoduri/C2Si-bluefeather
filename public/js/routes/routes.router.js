define(['marionette'], function (Marionette) {
  return Marionette.AppRouter.extend({
    appRoutes: {
      'dashboard': 'dashboard',
      'request': 'requestList',
      'request/:id': 'requestEdit'
    }
  });
});