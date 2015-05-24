;(function (angular) {
    angular.module("bluefeather.features.charge")
    
    .directive("bfCharges", function() {
      return {
        restrict: 'A', // only activate on element attribute
        templateUrl: 'modules/charge/charge.list.partial.html',
        controller: 'chargeListCtrl',
        scope: {
          charges: '='
        }
      }
    })

    .directive("bfCharge", function() {
      return {
        restrict: 'EA', // only activate on element attribute
        templateUrl: 'modules/charge/charge.partial.html',
        controller: 'chargeEditCtrl',
        scope: {
          charge: '=',
          fees: '='
        }
      }
    });
})(angular);