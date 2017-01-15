System.register(['@angular/core', '@angular/platform-browser', './components/menuComponent', './components/masterLayoutComponent', '@angular/router', './components/list', './components/grid', './components/userProfile', './components/forms', './components/dashboard', './components/treeView', './components/menuSubItemComponent', './enums/entityTypes', './helpers/listResolver', './services/webService', './services/translationService', './pipes/translationPipe', './pipes/fieldFilterPipe', './services/sharedNavigationService', '@angular/forms', 'ng2-pagination'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, menuComponent_1, masterLayoutComponent_1, router_1, list_1, grid_1, userProfile_1, forms_1, dashboard_1, treeView_1, menuSubItemComponent_1, entityTypes_1, listResolver_1, webService_1, translationService_1, translationPipe_1, fieldFilterPipe_1, sharedNavigationService_1, forms_2, ng2_pagination_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (menuComponent_1_1) {
                menuComponent_1 = menuComponent_1_1;
            },
            function (masterLayoutComponent_1_1) {
                masterLayoutComponent_1 = masterLayoutComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            },
            function (userProfile_1_1) {
                userProfile_1 = userProfile_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (treeView_1_1) {
                treeView_1 = treeView_1_1;
            },
            function (menuSubItemComponent_1_1) {
                menuSubItemComponent_1 = menuSubItemComponent_1_1;
            },
            function (entityTypes_1_1) {
                entityTypes_1 = entityTypes_1_1;
            },
            function (listResolver_1_1) {
                listResolver_1 = listResolver_1_1;
            },
            function (webService_1_1) {
                webService_1 = webService_1_1;
            },
            function (translationService_1_1) {
                translationService_1 = translationService_1_1;
            },
            function (translationPipe_1_1) {
                translationPipe_1 = translationPipe_1_1;
            },
            function (fieldFilterPipe_1_1) {
                fieldFilterPipe_1 = fieldFilterPipe_1_1;
            },
            function (sharedNavigationService_1_1) {
                sharedNavigationService_1 = sharedNavigationService_1_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            }],
        execute: function() {
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_2.FormsModule, ng2_pagination_1.Ng2PaginationModule,
                        router_1.RouterModule.forRoot([
                            { path: 'grid-ui', component: list_1.ListElement },
                            { path: 'users', component: list_1.ListElement, data: { type: entityTypes_1.EntityType.User }, resolve: { items: listResolver_1.ListResolver } },
                            { path: 'items/:navId/:type', component: list_1.ListElement, resolve: { items: listResolver_1.ListResolver } },
                            { path: 'user-profile', component: userProfile_1.UserProfile },
                            { path: 'forms-ui', component: forms_1.FormsElement },
                            { path: 'dashboard', component: menuComponent_1.MenuComponent },
                            { path: '', component: menuComponent_1.MenuComponent },
                            { path: 'nav-item/:navId', component: menuSubItemComponent_1.MenuSubItemComponent },
                        ])
                    ],
                    providers: [listResolver_1.ListResolver, webService_1.WebService, translationService_1.TranslationService, sharedNavigationService_1.SharedNavigationService],
                    declarations: [translationPipe_1.TranslatePipe, fieldFilterPipe_1.FilterByFieldPipe, masterLayoutComponent_1.MasterLayoutComponent, menuComponent_1.MenuComponent, grid_1.GridElement, userProfile_1.UserProfile, forms_1.FormsElement,
                        dashboard_1.Dashboard, treeView_1.TreeView, list_1.ListElement, menuSubItemComponent_1.MenuSubItemComponent],
                    bootstrap: [masterLayoutComponent_1.MasterLayoutComponent],
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
