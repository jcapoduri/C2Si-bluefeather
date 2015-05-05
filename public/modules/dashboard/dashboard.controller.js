;(function (angular) {
    angular.module("bluefeather.features.dashboard")
    
    .controller("dashboardCtrl",['$scope', function($scope) {
      $scope.greeting = 'Hola!';
    }]);
    
})(angular);