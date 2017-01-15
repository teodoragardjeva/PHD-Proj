System.register(['./navigationItem'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var navigationItem_1;
    var MenuListItem;
    return {
        setters:[
            function (navigationItem_1_1) {
                navigationItem_1 = navigationItem_1_1;
            }],
        execute: function() {
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
            exports_1("MenuListItem", MenuListItem);
        }
    }
});

//# sourceMappingURL=menuListItem.js.map
