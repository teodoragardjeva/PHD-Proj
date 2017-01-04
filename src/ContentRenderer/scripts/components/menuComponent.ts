import {Component, trigger, transition, animate} from '@angular/core';
import {TreeView} from './treeView';
import {MenuListItem} from '../models/menuListItem';
import {WebService} from '../services/webService';
import {SharedNavigationService} from '../services/sharedNavigationService';
import {OnInit} from '@angular/core';
import {GridElement} from './grid';
import {UserProfile} from './userProfile';
import {FormsElement} from './forms';
import { RouterModule } from '@angular/router';
import {Configurations} from '../helpers/globals';
import {NavigationType} from '../enums/navigationTypes';




@Component({
    selector: 'main-menu',
    templateUrl: "../../views/navigationSidebar.html",
    providers: [WebService],
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
    
export class MenuComponent implements OnInit {
    items: MenuListItem[];
    recent: MenuListItem[];
    favourites: MenuListItem[];
    iconUrl: string = Configurations.serviceUrl + 'elements/icon/';

    constructor(private _webService: WebService, private _sharedNavigationService: SharedNavigationService) {

    }
    ngOnInit() {
        let subscription = this._sharedNavigationService.data.subscribe(
            value => void (0),
            error => void (0),
            () => {
                let result = this._sharedNavigationService.data.getValue();
                if (!result) {
                    this.items = [];
                    this.recent = [];
                    this.favourites = [];
                }

                this.items = result.filter(function (item) { return item && !item.parentId});
                this.recent = result.filter(function (item) { return item && item.navigationTypes !== null && typeof item.navigationTypes !== 'undefined' && item.navigationTypes.indexOf(NavigationType.Recent) > -1 });
                this.favourites = result.filter(function (item) { return item && item.navigationTypes !== null && typeof item.navigationTypes !== 'undefined' && item.navigationTypes.indexOf(NavigationType.Favourite) > -1 });
            }
        );
        
    }
}