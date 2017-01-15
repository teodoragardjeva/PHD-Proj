System.register(['@angular/core', '../helpers/globals'], function(exports_1, context_1) {
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
    var core_1, globals_1;
    var WebService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (globals_1_1) {
                globals_1 = globals_1_1;
            }],
        execute: function() {
            let WebService = class WebService {
                getData(url) {
                    return new Promise(function (resolve, reject) {
                        const request = new XMLHttpRequest();
                        request.onload = function () {
                            if (this.status === 200) {
                                var result = JSON.parse(this.response);
                                // Success
                                resolve(result);
                            }
                            else {
                                // Something went wrong (404 etc.)
                                reject(new Error(''));
                            }
                        };
                        request.onerror = function () {
                            reject(new Error('XMLHttpRequest Error: ' + 'this.statusText'));
                        };
                        request.open('GET', url);
                        //request.setRequestHeader('Access-Control-Allow-Headers', '*');
                        //request.setRequestHeader('Content-Type', 'application/json');
                        //request.setRequestHeader('Access-Control-Allow-Origin', '*');
                        request.send();
                    });
                }
                getGridItem(type) {
                    return this.getData(globals_1.Configurations.serviceUrl + 'elements/gridConfigs/' + type);
                }
                getItems(type, search) {
                    return this.getData(globals_1.Configurations.serviceUrl + 'elements/gridItems/' + type + '/' + search);
                }
                getMenuItems() {
                    return this.getData(globals_1.Configurations.serviceUrl + 'elements');
                }
                getUsers() {
                    return this.getData('../../data/users.json');
                }
            };
            WebService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], WebService);
            exports_1("WebService", WebService);
        }
    }
});

//# sourceMappingURL=webService.js.map
