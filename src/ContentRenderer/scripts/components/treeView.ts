import {Component, Input} from '@angular/core';
import {MenuListItem} from '../models/menuListItem';

@Component({
    selector: 'tree-view',
    templateUrl: '../../views/treeView.html'
})

export class TreeView {
    @Input()
    listItems: MenuListItem[];
    constructor() {
        console.log('here');
    }
}