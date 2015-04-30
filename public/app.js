;(function (angular){
    angular.module("bluefeather", [
            "ngRoute",
            "bluefeather.features.fee"
        ])
        .config(['$routeProvider',
          function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/'
              });
          }]);
})(angular);