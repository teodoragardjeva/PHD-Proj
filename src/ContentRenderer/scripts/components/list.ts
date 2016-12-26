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
            .subscribe((data: { items: any }) => {
                this.data = data.items;
            });
    }
    
}