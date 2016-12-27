import {Component} from '@angular/core';
import {TreeView} from './treeView';
import {MenuListItem} from '../models/menuListItem';
import {WebService} from '../services/webService';
import {OnInit} from '@angular/core';
import {GridElement} from './grid';
import {UserProfile} from './userProfile';
import {FormsElement} from './forms';
import { RouterModule } from '@angular/router';
import {Configurations} from '../helpers/globals';




@Component({
    selector: 'main-menu',
    templateUrl: "../../views/navigationSidebar.html",
    providers: [WebService]
})
    
export class MenuComponent implements OnInit {
    items: MenuListItem[];
    iconUrl:string = Configurations.serviceUrl + 'elements/icon/';
    constructor(private _webService: WebService) {

    }

    ngOnInit() {
        this._webService.getMenuItems().then((result: any) => this.items = result);
    }
}