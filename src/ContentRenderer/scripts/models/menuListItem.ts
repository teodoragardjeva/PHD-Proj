export class MenuListItem {
	constructor(public title, public url?:string, public subItems?:MenuListItem[]) {
	}
}