;(function (angular) {
    angular.module("bluefeather.features.dashboard")
    
    .controller("dashboardCtrl",['$scope', function($scope) {
      $scope.greeting = 'Hola!';
    }])
    
    .controller("feeListCtrl",['$scope', 'feeResource', function($scope, fee) {
      $scope.items = fee.query();
    }]);
    
})(angular);