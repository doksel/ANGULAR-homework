"use strict";
var CreateGuard = (function () {
    function CreateGuard() {
    }
    CreateGuard.prototype.canActivate = function (route, state) {
        return confirm('Вы уверены, что хотите добавить новый телефон?');
    };
    return CreateGuard;
}());
exports.CreateGuard = CreateGuard;
//# sourceMappingURL=create.guard.js.map