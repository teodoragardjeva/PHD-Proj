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
const webService_1 = require('../services/webService');
const router_1 = require('@angular/router');
const core_1 = require('@angular/core');
let ListResolver = class ListResolver {
    constructor(_webService, router) {
        this._webService = _webService;
        this.router = router;
    }
    resolve(route) {
        const type = +route.data['type'];
        return this._webService.getGridItem(type).then((result) => {
            if (result) {
                return result;
            }
            else {
                //this.router.navigate(['/crisis-center']);
                return [];
            }
        });
    }
};
ListResolver = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [webService_1.WebService, router_1.Router])
], ListResolver);
exports.ListResolver = ListResolver;
//# sourceMappingURL=listResolver.js.map