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
const core_1 = require("@angular/core");
const webService_1 = require("../services/webService");
const sharedNavigationService_1 = require("../services/sharedNavigationService");
const globals_1 = require("../helpers/globals");
const navigationTypes_1 = require("../enums/navigationTypes");
let MenuComponent = class MenuComponent {
    constructor(_webService, _sharedNavigationService) {
        this._webService = _webService;
        this._sharedNavigationService = _sharedNavigationService;
        this.iconUrl = globals_1.Configurations.serviceUrl + 'elements/icon/';
    }
    selectNavigationItem(item) {
        this._sharedNavigationService.selectNavigationMenu(item);
    }
    ngOnInit() {
        let subscription = this._sharedNavigationService.data.subscribe(value => void (0), error => void (0), () => {
            let result = this._sharedNavigationService.data.getValue();
            if (!result) {
                this.items = [];
                this.recent = [];
                this.favourites = [];
            }
            this.items = result;
            this.recent = result.filter(function (item) { return item && item.navigationTypes !== null && typeof item.navigationTypes !== 'undefined' && item.navigationTypes.indexOf(navigationTypes_1.NavigationType.Recent) > -1; });
            this.favourites = result.filter(function (item) { return item && item.navigationTypes !== null && typeof item.navigationTypes !== 'undefined' && item.navigationTypes.indexOf(navigationTypes_1.NavigationType.Favourite) > -1; });
        });
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: "../../views/navigationSidebar.html",
        providers: [webService_1.WebService]
    }),
    __metadata("design:paramtypes", [webService_1.WebService, sharedNavigationService_1.SharedNavigationService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
