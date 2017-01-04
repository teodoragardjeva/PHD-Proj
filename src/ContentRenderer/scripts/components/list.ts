import {WebService} from '../services/webService';
import {Component, Injectable, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'list-ui',
    templateUrl: '../../views/listView.html'
})

@Injectable()
export class ListElement implements OnInit, OnDestroy {
    data: any;
    subscription: Subscription;

    constructor(private _webService: WebService,
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.subscription = this.route.data
            .subscribe((result: any) => {//according to router definition  resolve: { items: ListResolver }
                //the result is {items:dataFromWS}, the structure is set in the resolve object
                this.data = result.items;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}