;(function (angular) {
    angular.module("bluefeather.features.fee", [])
      .factory("feeResource", ['Resource', function($resource) {
          return $resource('api/fee/:id', { id: '@id' }, {
            update: {
              method: 'PUT'
            }
          });
    }]);
})(angular);