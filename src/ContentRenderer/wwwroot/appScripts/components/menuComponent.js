System.register(['@angular/core', '../services/webService', '../services/sharedNavigationService', '../helpers/globals', '../enums/navigationTypes'], function(exports_1, context_1) {
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
    var core_1, webService_1, sharedNavigationService_1, globals_1, navigationTypes_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (webService_1_1) {
                webService_1 = webService_1_1;
            },
            function (sharedNavigationService_1_1) {
                sharedNavigationService_1 = sharedNavigationService_1_1;
            },
            function (globals_1_1) {
                globals_1 = globals_1_1;
            },
            function (navigationTypes_1_1) {
                navigationTypes_1 = navigationTypes_1_1;
            }],
        execute: function() {
            let MenuComponent = class MenuComponent {
                constructor(_webService, _sharedNavigationService) {
                    this._webService = _webService;
                    this._sharedNavigationService = _sharedNavigationService;
                    this.iconUrl = globals_1.Configurations.serviceUrl + 'elements/icon/';
                }
                ngOnInit() {
                    let subscription = this._sharedNavigationService.data.subscribe(value => void (0), error => void (0), () => {
                        let result = this._sharedNavigationService.data.getValue();
                        if (!result) {
                            this.items = [];
                            this.recent = [];
                            this.favourites = [];
                        }
                        this.items = result.filter(function (item) { return item && !item.parentId; });
                        this.recent = result.filter(function (item) { return item && item.navigationTypes !== null && typeof item.navigationTypes !== 'undefined' && item.navigationTypes.indexOf(navigationTypes_1.NavigationType.Recent) > -1; });
                        this.favourites = result.filter(function (item) { return item && item.navigationTypes !== null && typeof item.navigationTypes !== 'undefined' && item.navigationTypes.indexOf(navigationTypes_1.NavigationType.Favourite) > -1; });
                    });
                }
            };
            MenuComponent = __decorate([
                core_1.Component({
                    selector: 'main-menu',
                    templateUrl: "../../views/navigationSidebar.html",
                    providers: [webService_1.WebService],
                    host: {
                        '[@routeAnimation]': "true"
                    },
                    animations: [
                        core_1.trigger('routeAnimation', [
                            core_1.transition('* => void', core_1.animate('100ms ease-in')),
                            core_1.transition('void => *', core_1.animate('100ms ease-out')) // For next page
                        ])
                    ]
                }), 
                __metadata('design:paramtypes', [webService_1.WebService, sharedNavigationService_1.SharedNavigationService])
            ], MenuComponent);
            exports_1("MenuComponent", MenuComponent);
        }
    }
});

//# sourceMappingURL=menuComponent.js.map
