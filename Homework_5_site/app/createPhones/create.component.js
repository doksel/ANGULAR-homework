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
var phonesList_service_1 = require('../shared/phonesList.service');
var CreateComponent = (function () {
    function CreateComponent(phonesListServise) {
        this.phonesListServise = phonesListServise;
        this.phones = [];
        this.namePhone = '';
        this.typephonePhone = '';
        this.systemPhone = '';
        this.memoryPhone = '';
        this.screenPhone = '';
        this.cameraPhone = '';
    }
    CreateComponent.prototype.createPhone = function () {
        var _this = this;
        this.phonesListServise
            .createPhone(this.namePhone, this.typephonePhone, this.systemPhone, this.memoryPhone, this.screenPhone, this.cameraPhone)
            .subscribe(function (phone) { return _this.phones.push(phone); }, function (error) { return alert(error); });
        this.namePhone = '';
        this.typephonePhone = '';
        this.systemPhone = '';
        this.memoryPhone = '';
        this.screenPhone = '';
        this.cameraPhone = '';
    };
    CreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-create',
            templateUrl: 'create.component.html',
            styleUrls: ['create.component.css']
        }), 
        __metadata('design:paramtypes', [phonesList_service_1.PhonesListServise])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map