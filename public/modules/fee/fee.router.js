;(function (angular) {
    angular.module("bluefeather.features.fee")
      .config([ "$routeProvider", function ($routeProvider) {
        $routeProvider.
              when('/fees', {
                templateUrl: 'modules/fee/fee.partial.html',
                controller: 'feeCtrl'
              });  
      }]);
})(angular);