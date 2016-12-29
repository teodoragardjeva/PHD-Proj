export class MenuListItem {
    constructor(public title, public url?: string, public icon?: string, public navigationTypes?: number[],
        public type?: number,  public subItems?: MenuListItem[]) {
	}
}