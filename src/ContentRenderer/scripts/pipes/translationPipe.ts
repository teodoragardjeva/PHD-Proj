import { Pipe, PipeTransform } from '@angular/core';
import {TranslationService} from '../services/translationService';


@Pipe({
    name: 'translate',
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translateService: TranslationService) { }

    transform(value: string, args: any[]): any {
        if (!value) return;
        return this._translateService.translate(value);
    }
}