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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
// import 'rxjs/add/operator/throw';
var PhonesListServise = (function () {
    function PhonesListServise(http) {
        this.http = http;
    }
    PhonesListServise.prototype.getPhones = function () {
        return this.http.get('http://localhost:3000/phones')
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return Observable_1.Observable.throw('Сервер не доступен или файл не найден.');
        });
    };
    PhonesListServise.prototype.createPhone = function (namePhone, typephonePhone, systemPhone, memoryPhone, screenPhone, cameraPhone) {
        var data = {
            name: namePhone,
            typephone: typephonePhone,
            system: systemPhone,
            memory: memoryPhone,
            screen: screenPhone,
            camera: cameraPhone
        };
        return this.http.post('http://localhost:3000/phones', data)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return Observable_1.Observable.throw('Сервер не доступен или файл не найден.');
        });
    };
    PhonesListServise.prototype.changePhone = function (phone, namePhone, typephonePhone, systemPhone, memoryPhone, screenPhone, cameraPhone) {
        phone.name = namePhone;
        phone.typephone = typephonePhone;
        phone.system = systemPhone;
        phone.memory = memoryPhone;
        phone.screen = screenPhone;
        phone.camera = cameraPhone;
        return this.http.put("http://localhost:3000/phones/" + phone.id, phone)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return Observable_1.Observable.throw('Сервер не доступен или файл не найден.');
        });
    };
    PhonesListServise.prototype.deletePhone = function (phone) {
        return this.http.delete("http://localhost:3000/phones/" + phone.id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return Observable_1.Observable.throw('Сервер не доступен или файл не найден.');
        });
    };
    PhonesListServise = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhonesListServise);
    return PhonesListServise;
}());
exports.PhonesListServise = PhonesListServise;
//# sourceMappingURL=phonesList.service.js.map