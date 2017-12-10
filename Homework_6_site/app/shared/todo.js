"use strict";
var Todo = (function () {
    function Todo(title, status) {
        if (status === void 0) { status = false; }
        this.title = title;
        this.status = status;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map