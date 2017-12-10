"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var todo_1 = require('./todo');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.apiUrl = 'api/todos';
        this.listTodos = [];
    }
    TodoService.prototype.getTodoList = function () {
        var _this = this;
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (todos) { return _this.listTodos = todos; })
            .catch(this.handleError);
    };
    TodoService.prototype.createTodo = function (title) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var todo = new todo_1.Todo(title);
        this.http.post(this.apiUrl, todo, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (todo) { return _this.listTodos.push(todo); })
            .catch(this.handleError);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + todo.id;
        this.http.delete(url, options)
            .toPromise()
            .then(function (res) {
            var i = _this.listTodos.indexOf(todo);
            _this.listTodos.splice(i, 1);
        })
            .catch(this.handleError);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + todo.id;
        this.http.put(url, todo, options)
            .toPromise()
            .then(function (res) { todo.status = !todo.status; })
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.error('Произошла ошибка. Файл не найден или сервер перегружен.', error);
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map