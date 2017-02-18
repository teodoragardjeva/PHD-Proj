import {Injectable} from '@angular/core';
import {WebService} from './webService';
import {MenuListItem} from '../models/menuListItem';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Helpers} from '../helpers/helpers';
import {NavigationItem } from '../models/navigationItem';


@Injectable()
export class SharedNavigationService {
    public data: BehaviorSubject<Array<MenuListItem>> = new BehaviorSubject(new Array<MenuListItem>());
    public selectedMenuItem: MenuListItem;
    private kvpMenuItems: { [id: string]: MenuListItem }
    public navigationHistory: NavigationItem[];

    constructor(private _webService: WebService) {
       
    }

    public getMenuItems() {
        this._webService.getMenuItems().then((result: any) => {
            if (!result) {
                result = [];
            }

            this.kvpMenuItems = Helpers.getNavigationTree(result);

            this.data.next(result);
            this.data.complete();
        });
    }

    public selectNavigationMenu(id: string) {
        let arr: NavigationItem[] = [];
        let item: MenuListItem;

        while (id !== '' && id !== null) {
            item = this.kvpMenuItems[id];

            if (!item) {
                return;
            }

            arr.push({ Id: item.Id, Title: item.Title });
            id = item.ParentId;
        }

        arr.reverse();

        this.navigationHistory = arr;
    }

    public getItem(id: string): MenuListItem {
        return !id || !this.kvpMenuItems || !this.kvpMenuItems[id] ? null : this.kvpMenuItems[id];
    }
}