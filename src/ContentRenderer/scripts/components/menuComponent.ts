import {Component} from '@angular/core';
import {TreeView} from './treeView';
import {MenuListItem} from '../models/menuListItem';
import {WebService} from '../services/webService';
import {OnInit} from '@angular/core';
import {GridElement} from './grid';
import {UserProfile} from './userProfile';
import {FormsElement} from './forms';
import {Dashboard} from './dashboard';
import { RouterModule } from '@angular/router';




@Component({
    selector: 'main-menu',
    templateUrl: "../../views/navigationSidebar.html",
    providers: [WebService]
})
    
export class MenuComponent implements OnInit {
    items: MenuListItem[];
    constructor(private _webService: WebService) {

    }

    ngOnInit() {
        this._webService.getMenuItems().then((result: any) => this.items = result);
    }
}