"use strict";
const navigationItem_1 = require("./navigationItem");
class MenuListItem extends navigationItem_1.NavigationItem {
    constructor(id, title, url, icon, navigationTypes, type, parentId, subItems) {
        super(id, title);
        this.id = id;
        this.title = title;
        this.url = url;
        this.icon = icon;
        this.navigationTypes = navigationTypes;
        this.type = type;
        this.parentId = parentId;
        this.subItems = subItems;
    }
}
exports.MenuListItem = MenuListItem;
