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
import { NavigationType } from '../enums/navigationTypes';
import { UserService } from '../services/userService';




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
    iconUrl: string = Configurations.serviceUrl + 'GetIcon?icon=';

    constructor(private _webService: WebService, private _sharedNavigationService: SharedNavigationService, private _userService: UserService) {
        this._sharedNavigationService.getMenuItems();
        this._userService.getUserSettings();
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

                this.items = result.filter(function (item) { return item && !item.ParentId});
                this.recent = result.filter(function (item) { return item && item.NavigationTypes !== null && typeof item.NavigationTypes !== 'undefined' && item.NavigationTypes.indexOf(NavigationType.Recent) > -1 });
                this.favourites = result.filter(function (item) { return item && item.NavigationTypes !== null && typeof item.NavigationTypes !== 'undefined' && item.NavigationTypes.indexOf(NavigationType.Favourite) > -1 });
            }
        );
        
    }
}