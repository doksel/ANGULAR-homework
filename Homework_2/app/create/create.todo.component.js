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
var CreateTodoComponent = (function () {
    function CreateTodoComponent() {
        this.onCreated = new core_1.EventEmitter();
    }
    CreateTodoComponent.prototype.onCreate = function (newTaskTitle) {
        this.onCreated.emit(newTaskTitle);
        this.newTaskTitle = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CreateTodoComponent.prototype, "newTaskTitle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CreateTodoComponent.prototype, "onCreated", void 0);
    CreateTodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'form-todo',
            templateUrl: 'create.todo.component.html',
            styleUrls: ['create.todo.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CreateTodoComponent);
    return CreateTodoComponent;
}());
exports.CreateTodoComponent = CreateTodoComponent;
//# sourceMappingURL=create.todo.component.js.map