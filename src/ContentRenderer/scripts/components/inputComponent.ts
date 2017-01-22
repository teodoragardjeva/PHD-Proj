import { Component, Input } from '@angular/core';
import { PropertyMeta } from '../models/propertyMeta';

@Component({
    selector: 'generic-input',
    templateUrl: '../../views/helpers/inputView.html'
})

export class InputComponent {
    @Input()
    fieldMeta: PropertyMeta;
    @Input()
    model: any;
    @Input()
    field: string;
}