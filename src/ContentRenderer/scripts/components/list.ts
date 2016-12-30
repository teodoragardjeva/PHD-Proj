import {WebService} from '../services/webService';
import {Component, Injectable, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'list-ui',
    templateUrl: '../../views/listView.html'
})

@Injectable()
export class ListElement implements OnInit {
    data: any;
    constructor(private _webService: WebService,
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.route.data
            .subscribe((result: any) => {//according to router definition  resolve: { items: ListResolver }
                //the result is {items:dataFromWS}, the structure is set in the resolve object
                this.data = result.items;
            });
    }
    
}