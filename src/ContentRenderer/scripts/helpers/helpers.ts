import {MenuListItem} from '../models/menuListItem';
import { Configurations } from './globals';

export class Helpers {
    static getNavigationTree(items: MenuListItem[]): { [id: string]: MenuListItem } {
        let transformedData: { [id: string]: MenuListItem } = {};
        let item: MenuListItem;

        for (let i = 0; i < items.length; i += 1) {
            item = items[i];
            if (!item) {
                continue;
            }

            transformedData[item.Id] = item;
        }

        for (let i = 0; i < items.length; i += 1) {
            item = items[i];
            if (!item || !item.ParentId || !transformedData[item.ParentId]) {
                continue;
            }
            if (!transformedData[item.ParentId].SubItems) {
                transformedData[item.ParentId].SubItems = [] as MenuListItem[];
            }

            transformedData[item.ParentId].SubItems.push(item);
        }

        return transformedData;
    }

    static getSession(): string {
        let name: string = Configurations.sessionKey + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    static setSession(value) {
        let date = new Date();
        date.setTime(date.getTime() + (20 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = Configurations.sessionKey + "=" + value + ";" + expires + ";path=/";
    }
}