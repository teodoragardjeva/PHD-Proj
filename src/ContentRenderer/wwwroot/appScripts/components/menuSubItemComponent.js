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
const sharedNavigationService_1 = require('../services/sharedNavigationService');
const globals_1 = require('../helpers/globals');
const router_1 = require('@angular/router');
let MenuSubItemComponent = class MenuSubItemComponent {
    constructor(_sharedNavigationService, route, router) {
        this._sharedNavigationService = _sharedNavigationService;
        this.route = route;
        this.router = router;
        this.iconUrl = globals_1.Configurations.serviceUrl + 'elements/icon/';
    }
    ngOnInit() {
        let subscription = this._sharedNavigationService.data.subscribe(value => void (0), error => void (0), () => {
            this.item = this._sharedNavigationService.getItem(parseInt(this.route.snapshot.params['navId'], 10));
        });
    }
};
MenuSubItemComponent = __decorate([
    core_1.Component({
        selector: 'menu-sub-item',
        templateUrl: "../../views/menuSubItemView.html"
    }), 
    __metadata('design:paramtypes', [sharedNavigationService_1.SharedNavigationService, router_1.ActivatedRoute, router_1.Router])
], MenuSubItemComponent);
exports.MenuSubItemComponent = MenuSubItemComponent;
//# sourceMappingURL=menuSubItemComponent.js.map