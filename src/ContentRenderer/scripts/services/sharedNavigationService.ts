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
    private kvpMenuItems: { [id: number]: MenuListItem }
    public navigationHistory: NavigationItem[];

    constructor(private _webService: WebService) {
        this._webService.getMenuItems().then((result: any) => {
            if (!result) {
                result = [];
            }

            this.kvpMenuItems = Helpers.getNavigationTree(result);

            this.data.next(result);
            this.data.complete();
        });
    }

    public selectNavigationMenu(id: number) {
        let arr: NavigationItem[] = [];
        let item: MenuListItem;

        while (id > 0) {
            item = this.kvpMenuItems[id];

            if (!item) {
                return;
            }

            arr.push({ id: item.id, title: item.title });
            id = item.parentId;
        }

        arr.reverse();

        this.navigationHistory = arr;
    }

    public getItem(id: number): MenuListItem {
        return !id || isNaN(id) || !this.kvpMenuItems || !this.kvpMenuItems[id] ? null : this.kvpMenuItems[id];
    }
}