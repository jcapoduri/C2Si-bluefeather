  angular.module("bluefeather.features.charge", [])
      .factory("chargeResource", ['Resource', function($resource) {
          return $resource('api/charge/:id', { id: '@id' }, {
            update: {
              method: 'PUT'
            }
          });
    }]);
    