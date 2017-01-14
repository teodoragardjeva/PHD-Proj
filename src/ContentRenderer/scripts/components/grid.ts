import {Component, Input, OnInit, trigger, transition, animate, OnDestroy} from '@angular/core';
import {GridConfiguration} from '../models/gridConfiguration';
import { Subscription } from 'rxjs';
import {Observable} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PropertyMeta } from '../models/propertyMeta';

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

export class GridElement implements OnInit, OnDestroy {
    @Input()
    config: GridConfiguration;
    @Input()
    dataSource: BehaviorSubject<Array<Object>>;
    private subscription: Subscription;
    data: Object[];
    visibleItems: Object[];
    metaColumns: { [key: string]: PropertyMeta } = {}
    sortBy: string;
    reverse: boolean;

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
            this.subscription = this.dataSource.subscribe((collection: Object[]) => {
                this.data = collection;
                this.setOrder(this.sortBy, true);
            });
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private sortData() {
        this.data.sort((a: Object, b: Object) => {
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

    setOrder(key: string, forced?: boolean) {
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
}
/*test*/