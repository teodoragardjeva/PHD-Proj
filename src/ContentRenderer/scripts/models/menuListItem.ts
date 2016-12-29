import {NavigationItem } from './navigationItem';

export class MenuListItem extends NavigationItem{
    constructor(public id, public title, public url?: string, public icon?: string, public navigationTypes?: number[],
        public type?: number, public parentId?: number, public subItems?: MenuListItem[]) {
        super(id, title);
	}
}