define(["angular", "modules/fee/fee.module"], function (angular, module) {
    var app = angular.module("bluesystem", [])
            .module(module);
    return app;
})