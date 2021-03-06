import {Injectable} from '@angular/core';
import {MenuListItem} from '../models/menuListItem';
import { Configurations } from '../helpers/globals';
import { Helpers } from '../helpers/helpers';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class WebService {

    constructor(private http: Http) {

    }
    
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
                        reject(new Error(''));
                    }
                };
                request.onerror = function () {
                    reject(new Error(
                        'XMLHttpRequest Error: ' + 'this.statusText'));
                };
                request.open('GET', url);
                //request.setRequestHeader('Access-Control-Allow-Headers', '*');
                //request.setRequestHeader('Content-Type', 'application/json');
                //request.setRequestHeader('Access-Control-Allow-Origin', '*');
                request.send();
            });
    }

    getGridItem(type: number) {
        return this.getData(Configurations.serviceUrl + 'elements/gridConfigs/'+ type);
    }

    getItems(type: number, search: string) {
        return this.getData(Configurations.serviceUrl + 'elements/gridItems/' + type + '/' + search);
    }

    getMenuItems() {
        return this.getData(Configurations.serviceUrl + 'GetMenuElements?sessionKey=' + Helpers.getSession());
    }

    getUserSettings() {
        return this.getData(Configurations.serviceUrl + 'GetUserSettings?sessionKey=' + Helpers.getSession());
    }

    getUsers() {
        return this.getData('../../data/users.json');
    }

    login(username: string, password: string) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(Configurations.serviceUrl + "Login", JSON.stringify({ Username: username, Password: password }), options);
    }
}