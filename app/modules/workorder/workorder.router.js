    angular.module("bluefeather.features.workorder")
      .config([ "$routeProvider", function ($routeProvider) {
        $routeProvider.
              when('/workorder', {
                templateUrl: 'modules/workorder/workorder.partial.html',
                controller: 'feeEditCtrl'
              })
      }]);
