System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Helpers;
    return {
        setters:[],
        execute: function() {
            class Helpers {
                static getNavigationTree(items) {
                    let transformedData = {};
                    let item;
                    for (let i = 0; i < items.length; i += 1) {
                        item = items[i];
                        if (!item) {
                            continue;
                        }
                        transformedData[item.id] = item;
                    }
                    for (let i = 0; i < items.length; i += 1) {
                        item = items[i];
                        if (!item || !item.parentId || !transformedData[item.parentId]) {
                            continue;
                        }
                        if (!transformedData[item.parentId].subItems) {
                            transformedData[item.parentId].subItems = [];
                        }
                        transformedData[item.parentId].subItems.push(item);
                    }
                    return transformedData;
                }
            }
            exports_1("Helpers", Helpers);
        }
    }
});

//# sourceMappingURL=helpers.js.map
