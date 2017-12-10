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
var todos = [
    { title: 'Learn Angular',
        status: true },
    { title: 'Learn TypeScript',
        status: false },
    { title: 'Learn React',
        status: false },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular';
        this.appTodos = todos;
    }
    AppComponent.prototype.toggle = function (todo) {
        var i = this.appTodos.indexOf(todo);
        this.appTodos[i].status = !this.appTodos[i].status;
    };
    AppComponent.prototype.delete = function (todo) {
        var i = this.appTodos.indexOf(todo);
        this.appTodos.splice(i, 1);
    };
    AppComponent.prototype.create = function (newTaskTitle) {
        this.appTodos.push({ title: newTaskTitle, status: false });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map