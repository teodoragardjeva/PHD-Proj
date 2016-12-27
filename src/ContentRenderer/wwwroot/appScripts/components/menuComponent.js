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
const core_1 = require('@angular/core');
const webService_1 = require('../services/webService');
const globals_1 = require('../helpers/globals');
let MenuComponent = class MenuComponent {
    constructor(_webService) {
        this._webService = _webService;
        this.iconUrl = globals_1.Configurations.serviceUrl + 'elements/icon/';
    }
    ngOnInit() {
        this._webService.getMenuItems().then((result) => this.items = result);
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: "../../views/navigationSidebar.html",
        providers: [webService_1.WebService]
    }), 
    __metadata('design:paramtypes', [webService_1.WebService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menuComponent.js.map