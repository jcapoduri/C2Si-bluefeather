;(function (angular) {
    angular.module("bluefeather.features.request")
      .config([ "$routeProvider", function ($routeProvider) {
        $routeProvider.
              when('/request', {
                templateUrl: 'modules/request/request.list.partial.html',
                controller: 'requestCtrl'
              }).
              when('/request/new', {
                templateUrl: 'modules/request/request.partial.html',
                controller: 'requestEditCtrl'
              })
      }]);
})(angular);