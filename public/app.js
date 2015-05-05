;(function (angular){
    angular.module("bluefeather", [
            "ngRoute",
            "bluefeather.features.fee",
            "bluefeather.features.workorder",
            "bluefeather.features.request",
            "bluefeather.features.dashboard",
            "bluefeather.shared.resource"
        ])
        .config(['$routeProvider',
          function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/'
              });
          }]);
})(angular);