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
var PutComponent = (function () {
    function PutComponent(phonesListServise) {
        this.phonesListServise = phonesListServise;
        this.phones = [];
    }
    // images = [
    //     "./app/imgPhones/Xia omi_Redmi_4X_2_16Gb.jpg",
    //     "./app/imgPhones/Samsung_Galaxy_J7_(2017)_16Gb.jpg",
    //     "./app/imgPhones/Apple_iPhone_7_32Gb.jpg"
    // ];
    PutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phonesListServise
            .getPhones()
            .subscribe(function (phones) { return _this.phones = phones; });
    };
    // getRandImage(){
    //     const num = Math.round(Math.random()*this.images.length-1)
    //     return this.images[num];
    // }
    PutComponent.prototype.setPhone = function (phone, namePhone, typephonePhone, systemPhone, memoryPhone, screenPhone, cameraPhone) {
        this.phonesListServise.changePhone(phone, namePhone, typephonePhone, systemPhone, memoryPhone, screenPhone, cameraPhone)
            .subscribe(function (phone) { return console.log(phone); }, function (error) { return alert(error); });
    };
    PutComponent.prototype.deletePhone = function (phone) {
        var _this = this;
        this.phonesListServise.deletePhone(phone)
            .subscribe(function (phone) {
            _this.phones = _this.phones.filter(function (ph) { return ph.id !== phone.id; });
        }, function (error) { return alert(error); });
    };
    PutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-put',
            templateUrl: 'put.component.html',
            styleUrls: ['put.component.css']
        }), 
        __metadata('design:paramtypes', [phonesList_service_1.PhonesListServise])
    ], PutComponent);
    return PutComponent;
}());
exports.PutComponent = PutComponent;
//# sourceMappingURL=put.component.js.map