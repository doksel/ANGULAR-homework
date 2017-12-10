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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular';
        this.x = 5;
        this.str = 'рекурсия';
        this.objBefore = {
            name: 'Иван',
            secondname: 'Иванович',
            sername: 'Иванов',
            age: 30
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<header>\n                <img src=\"img/angular.svg\" />\n                 <h1>{{title}}</h1>\n            </header>\n            <div>\u041A\u0443\u0431 \u0447\u0438\u0441\u043B\u0430 {{x}} \u0440\u0430\u0432\u0435\u043D {{x | cube}}</div>\n            <div>\u0421\u043B\u043E\u0432\u043E \" {{str}} \" \u0441 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0431\u0443\u043A\u0432\u044B: \" {{str | str}} \"</div>\n            <div>\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C {{(objBefore | object).sernameAfter}} {{(objBefore | object).ageAfter}} \u043B\u0435\u0442</div>",
            styles: ['']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map