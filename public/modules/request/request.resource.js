;(function (angular) {
    angular.module("bluefeather.features.request")
      .factory("feeResource", ['$resource', function($resource) {
          return $resource('api/request/:id');
      }]);
})(angular);