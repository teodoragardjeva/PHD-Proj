import {Injectable} from '@angular/core';
import {MenuListItem} from '../models/menuListItem';
import {Configurations} from '../helpers/globals';

@Injectable()
export class WebService {
    getData(url: string) {
        return new Promise(
            function (resolve, reject) {
                const request = new XMLHttpRequest();
                request.onload = function () {
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        // Success
                        resolve(result);
                    } else {
                        // Something went wrong (404 etc.)
                        reject(new Error(this.statusText));
                    }
                };
                request.onerror = function () {
                    reject(new Error(
                        'XMLHttpRequest Error: ' + this.statusText));
                };
                request.open('GET', url);
                //request.setRequestHeader('Access-Control-Allow-Headers', '*');
                //request.setRequestHeader('Content-Type', 'application/json');
                //request.setRequestHeader('Access-Control-Allow-Origin', '*');
                request.send();
            });
    }

    getGridItem(type: number) {
        return this.getData(Configurations.serviceUrl + 'elements/gridItems/'+ type);
    }

    getMenuItems() {
        return this.getData(Configurations.serviceUrl + 'elements');
    }

    getUsers() {
        return this.getData('../../data/users.json');
    }

}