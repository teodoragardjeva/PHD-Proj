System.register(['@angular/core', '../services/translationService', '../helpers/utils', '../models/gridConfiguration', '../models/filterRule'], function(exports_1, context_1) {
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
    var core_1, translationService_1, utils_1, gridConfiguration_1, filterRule_1;
    var ExtendedFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (translationService_1_1) {
                translationService_1 = translationService_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (gridConfiguration_1_1) {
                gridConfiguration_1 = gridConfiguration_1_1;
            },
            function (filterRule_1_1) {
                filterRule_1 = filterRule_1_1;
            }],
        execute: function() {
            let ExtendedFilter = class ExtendedFilter {
                constructor(_translationService) {
                    this.visible = false;
                    this.visibleAnimate = false;
                    this._translationService = _translationService;
                }
                initialize() {
                    let visibleColumnsMeta = [];
                    this.filterRules = [];
                    for (let i = 0; i < this.config.meta.length; i += 1) {
                        if (!this.config.meta[i] || this.config.configuration.visibleColumns.indexOf(this.config.meta[i].name) < 0) {
                            continue;
                        }
                        visibleColumnsMeta.push(this.config.meta[i]);
                    }
                    this.filterContexts = utils_1.Utils.setFilterOperators(this._translationService, visibleColumnsMeta);
                }
                addFilter() {
                    if (!this.filterRules) {
                        this.filterRules = [];
                    }
                    this.filterRules.push(new filterRule_1.FilterRule());
                }
                columnSelected(val, filter) {
                    if (!filter || !filter.model) {
                        return;
                    }
                    filter.selectedContext = val;
                    filter.model.field = !val ? void (0) : val.name;
                }
                show() {
                    this.initialize();
                    this.visible = true;
                    setTimeout(() => this.visibleAnimate = true);
                }
                hide() {
                    this.visibleAnimate = false;
                    setTimeout(() => this.visible = false, 300);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', gridConfiguration_1.GridConfiguration)
            ], ExtendedFilter.prototype, "config", void 0);
            ExtendedFilter = __decorate([
                core_1.Component({
                    selector: 'extended-filter',
                    templateUrl: '../../views/extendedFilterView.html'
                }),
                core_1.Injectable(), 
                __metadata('design:paramtypes', [translationService_1.TranslationService])
            ], ExtendedFilter);
            exports_1("ExtendedFilter", ExtendedFilter);
        }
    }
});

//# sourceMappingURL=extendedFilter.js.map
