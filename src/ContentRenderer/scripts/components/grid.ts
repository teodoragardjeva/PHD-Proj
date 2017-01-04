import {Component, Input, OnInit, trigger, transition, animate} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {GridConfiguration} from '../models/gridConfiguration';

@Component({
    selector: 'grid-ui',
    templateUrl: '../../views/gridView.html',
    host: {
        '[@routeAnimation]': "true"
    },
    animations: [
        trigger('routeAnimation', [
            transition('* => void', animate('100ms ease-in')),
            transition('void => *', animate('100ms ease-out'))  // For next page
        ])
    ]
})

export class GridElement implements OnInit {
    @Input()
    data: GridConfiguration;
    cardColumns: { [key: string]: boolean } = {};
    headerColumns: { [key: string]: boolean } = {};

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
}
/*test*/