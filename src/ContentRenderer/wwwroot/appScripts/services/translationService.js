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
const core_1 = require("@angular/core");
const localization_1 = require("../data/translations/localization");
let TranslationService = class TranslationService {
    constructor() {
        this._currentLanguage = 'bg';
    }
    get currentLanguage() {
        return this._currentLanguage;
    }
    set currentLanguage(val) {
        this._currentLanguage = val;
    }
    translate(key) {
        if (typeof key === 'undefined' || key === null || typeof localization_1.Localization[key] === 'undefined' || localization_1.Localization[key] === null ||
            typeof localization_1.Localization[key][this._currentLanguage] === 'undefined' || localization_1.Localization[key][this._currentLanguage] === null) {
            return '';
        }
        return localization_1.Localization[key][this._currentLanguage];
    }
};
TranslationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TranslationService);
exports.TranslationService = TranslationService;

//# sourceMappingURL=translationService.js.map
