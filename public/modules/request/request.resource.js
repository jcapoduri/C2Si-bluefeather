;(function (angular) {
    angular.module("bluefeather.features.request")
      .factory("requestResource", ['$resource', function($resource) {
          return $resource('api/request/:id', { id: '@_id' }, {
            update: {
              method: 'PUT'
            }
          });
      }]);
})(angular);