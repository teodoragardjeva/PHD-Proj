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
const webService_1 = require("../services/webService");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let ListElement = class ListElement {
    constructor(_webService, route, router) {
        this._webService = _webService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.data
            .subscribe((result) => {
            //the result is {items:dataFromWS}, the structure is set in the resolve object
            this.data = result.items;
        });
    }
};
ListElement = __decorate([
    core_1.Component({
        selector: 'list-ui',
        templateUrl: '../../views/listView.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [webService_1.WebService,
        router_1.ActivatedRoute,
        router_1.Router])
], ListElement);
exports.ListElement = ListElement;
