    angular.module("bluefeather.features.charge")
    
    .controller("chargeEditCtrl",['$scope', 'feeResource', function($scope, Fee) {
      $scope.cost = function () {
        debugger;
        return $scope.charge.fee.price * $scope.charge.quantity;
      };
    }])
    
    .controller("chargeListCtrl",['$scope', 'feeResource', function($scope, Fee) {
      $scope.fees = [];
      $scope.loading = true;

      Fee.query(function (data) {
        $scope.fees = data;
        $scope.loading = false;
      });

      $scope.addCharge = function(){
        $scope.charges.push({});
      };      
    }]);
