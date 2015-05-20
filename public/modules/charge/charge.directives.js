;(function (angular) {
    angular.module("bluefeather.features.charge")
    
    .directive("bfCharges", function() {
      return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'modules/charge/charge.list.partial.html'
      }
    })
    
    .directive("bfCharge", function() {
      return {
        require: ['^bfCharges', '^ngModel'],
        restrict: 'E',
        transclude: true,
        templateUrl: 'modules/charge/charge.partial.html'
      }
    });
})(angular);