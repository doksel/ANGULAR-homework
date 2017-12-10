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
var router_1 = require('@angular/router');
var home_page_component_1 = require('./home-page/home-page.component');
var catalog_component_1 = require('./catalogPhones/catalog.component');
var create_component_1 = require('./createPhones/create.component');
var put_component_1 = require('./putPhones/put.component');
var not_found_component_1 = require('./not-found/not-found.component');
var create_guard_1 = require('./create.guard');
var exit_create_guard_1 = require('./exit.create.guard');
var appRoutes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'catalog', component: catalog_component_1.CatalogComponent },
    { path: 'create', component: create_component_1.CreateComponent, canActivate: [create_guard_1.CreateGuard], canDeactivate: [exit_create_guard_1.ExitCreateGuard] },
    { path: 'put', component: put_component_1.PutComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            providers: [create_guard_1.CreateGuard, exit_create_guard_1.ExitCreateGuard],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map