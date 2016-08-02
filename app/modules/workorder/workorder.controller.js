    angular.module("bluefeather.features.workorder")
    
    .controller("workorderEditCtrl",['$scope', 'feeResource', function($scope, Fee) {
      $scope.model = {};
      $scope.model.inputFrom = "fromClient";
      $scope.model.state = 'Waiting';
      $scope.model.howTo = 'likeThat';
      $scope.model.ringing = 'nope';
      $scope.model.copies = 1;
      $scope.model.doComplete =  true;
      $scope.model.pages =  "";
      $scope.model.observation =  "";
      $scope.model.ignore =  false;
      $scope.model.isLista = false;
      $scope.model.deadline = new Date();
      $scope.model.senna = 0.0;
      $scope.model.total = 0.0;
      $scope.model.charges = [{
        "quantity": 3
      }];
    }]);