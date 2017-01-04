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
let GridElement = class GridElement {
    constructor() {
        this.cardColumns = {};
        this.headerColumns = {};
    }
    ngOnInit() {
        if (!this.data || !this.data.meta) {
            return;
        }
        for (let i = 0; i < this.data.meta.length; i += 1) {
            if (!this.data.meta[i]) {
                continue;
            }
            this.cardColumns[this.data.meta[i].name] = this.data.meta[i].card;
            this.headerColumns[this.data.meta[i].name] = this.data.meta[i].header;
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', gridConfiguration_1.GridConfiguration)
], GridElement.prototype, "data", void 0);
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
