import {WebService} from '../services/webService';
import {Component, Injectable, OnInit, OnDestroy, trigger, transition, animate} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {GridConfiguration} from '../models/gridConfiguration';

@Component({
    selector: 'list-ui',
    templateUrl: '../../views/listView.html',
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

@Injectable()
export class ListElement implements OnInit, OnDestroy {
    config: GridConfiguration;
    private subscription: Subscription;
    search: string;
    public collection: BehaviorSubject<Array<Object>> = new BehaviorSubject(new Array<Object>());


    constructor(private _webService: WebService,
        private route: ActivatedRoute,
        private router: Router) {

    }

    searchItems(newVal) {
        this._webService.getItems(+this.route.snapshot.params['type'], this.search).then((result: Object[]) => {
            this.collection.next(result);
        });
    }

    ngOnInit() {
        this.subscription = this.route.data
            .subscribe((result: any) => {//according to router definition  resolve: { items: ListResolver }
                //the result is {items:dataFromWS}, the structure is set in the resolve object
                this.config = result.items;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}