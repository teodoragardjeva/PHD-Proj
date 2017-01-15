System.register(['@angular/core', '../services/sharedNavigationService', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, sharedNavigationService_1, router_1;
    var MasterLayoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sharedNavigationService_1_1) {
                sharedNavigationService_1 = sharedNavigationService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let MasterLayoutComponent = class MasterLayoutComponent {
                constructor(_sharedNavigationService, router, route) {
                    this._sharedNavigationService = _sharedNavigationService;
                    this.router = router;
                    this.route = route;
                    this.subscription = this._sharedNavigationService.data.subscribe(value => void (0), error => void (0), () => {
                        this._sharedNavigationService.selectNavigationMenu(parseInt(this.route.snapshot.params['navId'], 10));
                        router.events.forEach((event) => {
                            if (event instanceof router_1.NavigationEnd) {
                                if (!this.route.firstChild) {
                                    this._sharedNavigationService.selectNavigationMenu(null);
                                }
                                else {
                                    this._sharedNavigationService.selectNavigationMenu(parseInt(this.route.firstChild.snapshot.params['navId'], 10));
                                }
                            }
                        });
                    });
                }
                ngOnInit() {
                }
                ngOnDestroy() {
                    // prevent memory leak by unsubscribing
                    this.subscription.unsubscribe();
                }
            };
            MasterLayoutComponent = __decorate([
                core_1.Component({
                    selector: 'main-view',
                    templateUrl: "../../views/masterLayout.html",
                }), 
                __metadata('design:paramtypes', [sharedNavigationService_1.SharedNavigationService, router_1.Router, router_1.ActivatedRoute])
            ], MasterLayoutComponent);
            exports_1("MasterLayoutComponent", MasterLayoutComponent);
        }
    }
});

//# sourceMappingURL=masterLayoutComponent.js.map
