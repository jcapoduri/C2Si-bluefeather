;(function (angular) {
    angular.module("bluefeather.features.request")
    
    .controller("requestEditCtrl",['$scope', 'requestResource', 'workorderResource', function($scope, Request, Workorder) {
      $scope.client = 'Jorge';
      $scope.deadline = new Date();
      $scope.workorders = [];
      $scope.workorders.push(new Workorder());
      $scope.model = new Request();
      $scope.addWorkorder = function () {
        $scope.workorders.push(new Workorder());
      };
    }]);
})(angular);