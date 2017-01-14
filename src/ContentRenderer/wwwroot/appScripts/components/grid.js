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
const core_1 = require('@angular/core');
const gridConfiguration_1 = require('../models/gridConfiguration');
const BehaviorSubject_1 = require('rxjs/BehaviorSubject');
let GridElement = class GridElement {
    constructor() {
        this.metaColumns = {};
    }
    ngOnInit() {
        if (!this.config || !this.config.meta) {
            return;
        }
        for (let i = 0; i < this.config.meta.length; i += 1) {
            if (!this.config.meta[i]) {
                continue;
            }
            this.metaColumns[this.config.meta[i].name] = this.config.meta[i];
        }
        if (this.dataSource) {
            this.subscription = this.dataSource.subscribe((collection) => {
                this.data = collection;
                this.setOrder(this.sortBy, true);
            });
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    sortData() {
        this.data.sort((a, b) => {
            var aVal, bVal;
            aVal = a === null || a === void (0) ? void (0) : a[this.sortBy];
            bVal = b === null || b === void (0) ? void (0) : b[this.sortBy];
            if (this.reverse) {
                return aVal > bVal ? -1 : (aVal < bVal ? 1 : 0);
            }
            else {
                return aVal > bVal ? 1 : (aVal < bVal ? -1 : 0);
            }
        });
        this.visibleItems = this.data;
    }
    setOrder(key, forced) {
        if (!key) {
            this.visibleItems = this.data;
            return;
        }
        if (!forced) {
            this.reverse = !forced && this.sortBy === key && !this.reverse;
        }
        if (!this.reverse) {
            this.sortBy = key;
        }
        this.sortData();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', gridConfiguration_1.GridConfiguration)
], GridElement.prototype, "config", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', BehaviorSubject_1.BehaviorSubject)
], GridElement.prototype, "dataSource", void 0);
GridElement = __decorate([
    core_1.Component({
        selector: 'grid-ui',
        templateUrl: '../../views/gridView.html',
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
    __metadata('design:paramtypes', [])
], GridElement);
exports.GridElement = GridElement;
/*test*/ 

//# sourceMappingURL=grid.js.map
