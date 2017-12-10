"use strict";
var ExitCreateGuard = (function () {
    function ExitCreateGuard() {
    }
    ExitCreateGuard.prototype.canDeactivate = function (component) {
        return component.canDeacivate ? component.canDeacivate() : true;
    };
    return ExitCreateGuard;
}());
exports.ExitCreateGuard = ExitCreateGuard;
//# sourceMappingURL=exit.create.guard.js.map