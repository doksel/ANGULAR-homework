"use strict";
var InMemoryTodoDataService = (function () {
    function InMemoryTodoDataService() {
    }
    InMemoryTodoDataService.prototype.createDb = function () {
        var todos = [
            { id: 1,
                title: 'Learn Angular',
                status: true },
            { id: 2,
                title: 'Learn TypeScript',
                status: false },
            { id: 3,
                title: 'Learn React',
                status: false },
        ];
        return { todos: todos };
    };
    return InMemoryTodoDataService;
}());
exports.InMemoryTodoDataService = InMemoryTodoDataService;
//# sourceMappingURL=todo-data.service.js.map