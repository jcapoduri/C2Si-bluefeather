;(function (angular) {
    angular.module("bluefeather.features.fee")
      .config([ "$routeProvider", function ($routeProvider) {
        $routeProvider.
              when('/fees', {
                templateUrl: 'modules/fee/fee.edit.partial.html',
                controller: 'feeEditCtrl'
              }).
              when('/fees/list', {
                templateUrl: 'modules/fee/fee.list.partial.html',
                controller: 'feeListCtrl'
              });
      }]);
})(angular);