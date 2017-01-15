System.register(['../services/webService', '@angular/router', '@angular/core'], function(exports_1, context_1) {
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
    var webService_1, router_1, core_1;
    var ListResolver;
    return {
        setters:[
            function (webService_1_1) {
                webService_1 = webService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ListResolver = class ListResolver {
                constructor(_webService, router) {
                    this._webService = _webService;
                    this.router = router;
                }
                resolve(route) {
                    const type = +route.params['type'];
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
            exports_1("ListResolver", ListResolver);
        }
    }
});

//# sourceMappingURL=ListResolver.js.map
