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
const platform_browser_1 = require("@angular/platform-browser");
const menuComponent_1 = require("./components/menuComponent");
const masterLayoutComponent_1 = require("./components/masterLayoutComponent");
const router_1 = require("@angular/router");
const list_1 = require("./components/list");
const grid_1 = require("./components/grid");
const userProfile_1 = require("./components/userProfile");
const forms_1 = require("./components/forms");
const dashboard_1 = require("./components/dashboard");
const treeView_1 = require("./components/treeView");
const entityTypes_1 = require("./enums/entityTypes");
const listResolver_1 = require("./helpers/listResolver");
const webService_1 = require("./services/webService");
const translationService_1 = require("./services/translationService");
const translationPipe_1 = require("./pipes/translationPipe");
const fieldFilterPipe_1 = require("./pipes/fieldFilterPipe");
const sharedNavigationService_1 = require("./services/sharedNavigationService");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'grid-ui', component: list_1.ListElement },
                { path: 'users', component: list_1.ListElement, data: { type: entityTypes_1.EntityType.User }, resolve: { items: listResolver_1.ListResolver } },
                { path: 'user-profile', component: userProfile_1.UserProfile },
                { path: 'forms-ui', component: forms_1.FormsElement },
                { path: 'dashboard', component: menuComponent_1.MenuComponent },
                { path: '', component: menuComponent_1.MenuComponent },
            ])
        ],
        providers: [listResolver_1.ListResolver, webService_1.WebService, translationService_1.TranslationService, sharedNavigationService_1.SharedNavigationService],
        declarations: [translationPipe_1.TranslatePipe, fieldFilterPipe_1.FilterByFieldPipe, masterLayoutComponent_1.MasterLayoutComponent, menuComponent_1.MenuComponent, grid_1.GridElement, userProfile_1.UserProfile, forms_1.FormsElement,
            dashboard_1.Dashboard, treeView_1.TreeView, list_1.ListElement],
        bootstrap: [masterLayoutComponent_1.MasterLayoutComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
