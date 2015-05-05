;(function (angular) {
    angular.module("bluefeather.features.fee")
    
    .controller("feeEditCtrl",['$scope', '$routeParams', 'feeResource', function($scope, $routeParams, Fee, $location) {
      var id = $routeParams.id;
      if (id && id !== 'new') {
        $scope.model = Fee.get({ id: id });
      } else {
        $scope.model = new Fee();
      };
      
      $scope.save = function () {
        debugger;
        $scope.model.$save(function () {
          $location.path("/fee/list");
        });
      }
    }])
    
    .controller("feeListCtrl",['$scope', 'feeResource', function($scope, Fee) {
      $scope.fees = [];
      Fee.query(function (data) {
        $scope.fees = data;
      });
    }]);
    
})(angular);