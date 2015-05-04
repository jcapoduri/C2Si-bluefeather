;(function (angular) {
    angular.module("bluefeather.features.request")
    
    .controller("requestEditCtrl",['$scope', function($scope) {
      $scope.greeting = 'Hola!';
      $scope.workorders = [{    
        state: 'Waiting',
        howTo: 'likeThat',
        ringing: 'nope',
        copies: 1,
        isLista: false,
        deadline: new Date(),
        senna: 0.0,
        total: 0.0
      }];
    }])

    .controller("requestCtrl",['$scope', function($scope) {
      $scope.greeting = 'Hola!';
    }])
    
    
})(angular);