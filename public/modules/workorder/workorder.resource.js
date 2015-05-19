;(function (angular) {
    angular.module("bluefeather.features.workorder")
      .factory("workorderResource", ['$resource', function($resource) {
          return $resource('api/workorder/:id', { id: '@_id' }, {
            update: {
              method: 'PUT'
            }
          });
      }]);
})(angular);