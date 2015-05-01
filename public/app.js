;(function (angular){
    angular.module("bluefeather", [
            "ngRoute",
            "bluefeather.features.fee",
            "bluefeather.features.workorder"
        ])
        .config(['$routeProvider',
          function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/'
              });
          }]);
})(angular);