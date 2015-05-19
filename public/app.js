;(function (angular){
    angular.module("bluefeather", [
            "angular-loading-bar", 
            "ngAnimate",
            "ngRoute",
            "bluefeather.features.fee",
            "bluefeather.features.charge",
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
        }])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
          cfpLoadingBarProvider.includeSpinner = true;
        }]);
})(angular);