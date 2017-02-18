import {NavigationItem } from './navigationItem';

export class MenuListItem extends NavigationItem{
    constructor(public Id: string, public Title, public Url?: string, public Icon?: string, public NavigationTypes?: number[],
        public Type?: number, public ParentId?: string, public SubItems?: MenuListItem[]) {
        super(Id, Title);
	}
}