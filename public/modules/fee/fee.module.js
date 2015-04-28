define(["angular", "modules/fee/fee.controller", "modules/fee/fee.resource"],
function (angular, ctrl, resource) {
    var module = angular.module("bluesystem")
        .controller(ctrl)
        .resource(resource);
    return module;
});