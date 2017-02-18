import {Component, trigger, transition, animate} from '@angular/core';
import {SharedNavigationService} from '../services/sharedNavigationService';
import {MenuListItem} from '../models/menuListItem';
import {OnInit} from '@angular/core';
import {Configurations} from '../helpers/globals';
import { Router, ActivatedRoute, NavigationEnd, Params, Event as NavigationEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'menu-sub-item',
    templateUrl: "../../views/menuSubItemView.html",
    host: {
        '[@routeAnimation]': "true"
    },
    animations: [
        trigger('routeAnimation', [
            transition('* => void', animate('100ms ease-in')),
            transition('void => *', animate('100ms ease-out')) // For next page
        ])
    ]
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
                this.item = this._sharedNavigationService.getItem(this.route.snapshot.params['navId']);

                this.router.events.forEach((event: NavigationEvent) => {
                    if (event instanceof NavigationEnd) {
                        this.item = this._sharedNavigationService.getItem(this.route.snapshot.params['navId']);
                    }
                });
            }
        );

    }
}