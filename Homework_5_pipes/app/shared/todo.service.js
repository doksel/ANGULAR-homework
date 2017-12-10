"use strict";
var todos = [
    { title: 'Learn Angular',
        status: true },
    { title: 'Learn TypeScript',
        status: false },
    { title: 'Learn React',
        status: false },
];
var TodoService = (function () {
    function TodoService() {
        this.todos = todos;
    }
    TodoService.prototype.getTodoList = function () {
        return this.todos;
    };
    TodoService.prototype.creatTodo = function (newTaskTitle) {
        this.todos.push({ title: newTaskTitle, status: false });
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var i = this.todos.indexOf(todo);
        this.todos.splice(i, 1);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        todo.status = !todo.status;
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map