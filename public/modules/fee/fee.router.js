;(function (angular) {
    angular.module("bluefeather.features.fee")
      .config([ "$routeProvider", function ($routeProvider) {
        $routeProvider.
              when('/fee/new', {
                templateUrl: 'modules/fee/fee.edit.partial.html',
                controller: 'feeEditCtrl'
              }).
              when('/fee/list', {
                templateUrl: 'modules/fee/fee.list.partial.html',
                controller: 'feeListCtrl'
              }).
              when('/fee/:id', {
                templateUrl: 'modules/fee/fee.edit.partial.html',
                controller: 'feeEditCtrl'
              });
      }]);
})(angular);