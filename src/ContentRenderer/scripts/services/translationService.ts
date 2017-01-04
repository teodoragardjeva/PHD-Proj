import {Injectable, Inject} from '@angular/core';
import {Localization} from '../data/translations/localization';

@Injectable()
export class TranslationService {
    private _currentLanguage: string = 'bg';

    public get currentLanguage() {
        return this._currentLanguage;
    }

    public set currentLanguage(val: string) {
        this._currentLanguage = val;
    }

    public translate(key: string) {
        if (typeof key === 'undefined' || key === null || typeof Localization[key] === 'undefined' || Localization[key] === null ||
            typeof Localization[key][this._currentLanguage] === 'undefined' || Localization[key][this._currentLanguage] === null) {
            return '';
        }

        return Localization[key][this._currentLanguage];
    }
}