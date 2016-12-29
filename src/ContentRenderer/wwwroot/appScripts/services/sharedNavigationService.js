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
const webService_1 = require("./webService");
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
const helpers_1 = require("../helpers/helpers");
let SharedNavigationService = class SharedNavigationService {
    constructor(_webService) {
        this._webService = _webService;
        this.data = new BehaviorSubject_1.BehaviorSubject(new Array());
        this._webService.getMenuItems().then((result) => {
            if (!result) {
                result = [];
            }
            this.kvpMenuItems = helpers_1.Helpers.getNavigationTree(result);
            this.data.next(result);
            this.data.complete();
        });
    }
    selectNavigationMenu(id) {
        let arr = [];
        let item;
        while (id > 0) {
            item = this.kvpMenuItems[id];
            if (!item) {
                return;
            }
            arr.push({ id: item.id, title: item.title });
            id = item.parentId;
        }
        arr.reverse();
        this.navigationHistory = arr;
    }
    getItem(id) {
        return !id || isNaN(id) || !this.kvpMenuItems || !this.kvpMenuItems[id] ? null : this.kvpMenuItems[id];
    }
};
SharedNavigationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [webService_1.WebService])
], SharedNavigationService);
exports.SharedNavigationService = SharedNavigationService;

//# sourceMappingURL=sharedNavigationService.js.map
