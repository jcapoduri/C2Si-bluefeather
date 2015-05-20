;(function (angular) {
    angular.module("bluefeather.features.charge")
    
    .controller("chargeEditCtrl",['$scope', 'feeResource', function($scope, Fee) {
      $scope.fees = [];
      Fee.query(function (data) {
        $scope.fees = data;
      });
      
      $scope.save = function () {
        $scope.model.$save(function () {
          $location.path("/fee/list");
        });
      }
    }])
    
    .controller("chargeListCtrl",['$scope', 'feeResource', function($scope, Fee) {
      debugger;
      
    }]);
    
})(angular);