;(function (angular) {
    angular.module("bluefeather.features.charge")
      .config([ "$routeProvider", function ($routeProvider) {
        $routeProvider.
              when('/charge/new', {
                templateUrl: 'modules/charge/charge.edit.partial.html',
                controller: 'chargeEditCtrl'
              }).
              when('/charge/list', {
                templateUrl: 'modules/charge/charge.list.partial.html',
                controller: 'chargeListCtrl'
              }).
              when('/charge/:id', {
                templateUrl: 'modules/charge/charge.edit.partial.html',
                controller: 'chargeEditCtrl'
              });
      }]);
})(angular);