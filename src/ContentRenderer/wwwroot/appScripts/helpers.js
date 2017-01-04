"use strict";
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
exports.Helpers = Helpers;
