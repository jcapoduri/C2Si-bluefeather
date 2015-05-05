;(function (angular) {
    angular.module("bluefeather.features.fee")
      .factory("feeResource", ['$resource', function($resource) {
          return $resource('api/fee/:id', { id: '@_id' }, {
            update: {
              method: 'PUT'
            }
          });
      }]);
})(angular);