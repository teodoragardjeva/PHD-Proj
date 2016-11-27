import {Component, Input} from '@angular/core';

@Component({
    selector: 'grid-ui',
    templateUrl: '../../views/gridView.html'
})

export class GridElement  {
    @Input()
    data: any;
}