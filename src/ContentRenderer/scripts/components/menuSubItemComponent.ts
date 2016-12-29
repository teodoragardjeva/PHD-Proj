import {Component} from '@angular/core';
import {SharedNavigationService} from '../services/sharedNavigationService';
import {MenuListItem} from '../models/menuListItem';
import {OnInit} from '@angular/core';
import {Configurations} from '../helpers/globals';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'menu-sub-item',
    templateUrl: "../../views/menuSubItemView.html"
})

export class MenuSubItemComponent implements OnInit {
    public item: MenuListItem;
    iconUrl: string = Configurations.serviceUrl + 'elements/icon/';


    constructor(public _sharedNavigationService: SharedNavigationService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        let subscription = this._sharedNavigationService.data.subscribe(
            value => void (0),
            error => void (0),
            () => {
                this.item = this._sharedNavigationService.getItem(parseInt(this.route.snapshot.params['id'], 10));
            }
        );

    }
}