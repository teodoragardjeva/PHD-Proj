System.register(['../services/webService', '@angular/core', '@angular/router', 'rxjs/BehaviorSubject', './extendedFilter'], function(exports_1, context_1) {
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
    var webService_1, core_1, router_1, BehaviorSubject_1, extendedFilter_1;
    var ListElement;
    return {
        setters:[
            function (webService_1_1) {
                webService_1 = webService_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (extendedFilter_1_1) {
                extendedFilter_1 = extendedFilter_1_1;
            }],
        execute: function() {
            let ListElement = class ListElement {
                constructor(_webService, route, router) {
                    this._webService = _webService;
                    this.route = route;
                    this.router = router;
                    this.collection = new BehaviorSubject_1.BehaviorSubject(new Array());
                }
                searchItems(newVal) {
                    this._webService.getItems(+this.route.snapshot.params['type'], this.search).then((result) => {
                        this.collection.next(result);
                    });
                }
                ngOnInit() {
                    this.subscription = this.route.data
                        .subscribe((result) => {
                        //the result is {items:dataFromWS}, the structure is set in the resolve object
                        this.config = result.items;
                    });
                }
                ngOnDestroy() {
                    this.subscription.unsubscribe();
                }
            };
            __decorate([
                core_1.ViewChild(extendedFilter_1.ExtendedFilter), 
                __metadata('design:type', extendedFilter_1.ExtendedFilter)
            ], ListElement.prototype, "extendedFilter", void 0);
            ListElement = __decorate([
                core_1.Component({
                    selector: 'list-ui',
                    templateUrl: '../../views/listView.html',
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
                core_1.Injectable(), 
                __metadata('design:paramtypes', [webService_1.WebService, router_1.ActivatedRoute, router_1.Router])
            ], ListElement);
            exports_1("ListElement", ListElement);
        }
    }
});

//# sourceMappingURL=list.js.map
