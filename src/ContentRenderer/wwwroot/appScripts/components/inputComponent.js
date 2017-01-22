System.register(['@angular/core', '../models/propertyMeta'], function(exports_1, context_1) {
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
    var core_1, propertyMeta_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (propertyMeta_1_1) {
                propertyMeta_1 = propertyMeta_1_1;
            }],
        execute: function() {
            let InputComponent = class InputComponent {
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', propertyMeta_1.PropertyMeta)
            ], InputComponent.prototype, "fieldMeta", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], InputComponent.prototype, "model", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "field", void 0);
            InputComponent = __decorate([
                core_1.Component({
                    selector: 'generic-input',
                    templateUrl: '../../views/helpers/inputView.html'
                }), 
                __metadata('design:paramtypes', [])
            ], InputComponent);
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=inputComponent.js.map
