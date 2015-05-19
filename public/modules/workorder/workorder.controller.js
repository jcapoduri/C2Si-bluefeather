;(function (angular) {
    angular.module("bluefeather.features.workorder")
    
    .controller("workorderEditCtrl",['$scope', 'feeResource', function($scope, Fee) {
      $scope.inputFrom = "fromClient";
      $scope.state = 'Waiting';
      $scope.howTo = 'likeThat';
      $scope.ringing = 'nope';
      $scope.copies = 1;
      $scope.doComplete =  true;
      $scope.pages =  "";
      $scope.observation =  "";
      $scope.ignore =  false;
      $scope.isLista = false;
      $scope.deadline = new Date();
      $scope.senna = 0.0;
      $scope.total = 0.0;
      $scope.charges = [];
    }]);
})(angular);