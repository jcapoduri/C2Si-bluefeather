;(function (angular) {
    angular.module("bluefeather.features.dashboard")
      .config([ "$routeProvider", function ($routeProvider) {
        $routeProvider.
              when('/dashboard', {
                templateUrl: 'modules/dashboard/dashboard.partial.html',
                controller: 'requestEditCtrl'
              })
      }]);
})(angular);