;(function (angular) {
    angular.module("bluefeather.features.fee")
    
    .controller("feeEditCtrl",['$scope', function($scope) {
      $scope.greeting = 'Hola!';
    }])
    
    .controller("feeListCtrl",['$scope', 'feeResource', function($scope, fee) {
      $scope.items = fee.query();
    }]);
    
})(angular);