import {Injectable} from '@angular/core';
import {WebService} from './webService';
import {MenuListItem} from '../models/menuListItem';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedNavigationService {
    public data: BehaviorSubject<Array<MenuListItem>> = new BehaviorSubject(new Array<MenuListItem>());
    public selectedMenuItem: MenuListItem;

    constructor(private _webService: WebService) {
        this._webService.getMenuItems().then((result: any) => {
            if (!result) {
                result = [];
            }

            this.data.next(result);
            this.data.complete();
        });
    }

    public selectNavigationMenu(item: MenuListItem) {
        this.selectedMenuItem = item;
    }
}