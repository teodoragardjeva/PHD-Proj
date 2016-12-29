import {MenuListItem} from '../models/menuListItem';

export class Helpers {
    static getNavigationTree(items: MenuListItem[]): { [id: number]: MenuListItem } {
        let transformedData: { [id: number]: MenuListItem } = {};
        let item: MenuListItem;

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
                transformedData[item.parentId].subItems = [] as MenuListItem[];
            }

            transformedData[item.parentId].subItems.push(item);
        }

        return transformedData;
    }
}