import { Injectable } from '@angular/core';
import { WebService } from './webService';
import { KeyValuePair } from '../models/keyValuePair';

@Injectable()
export class UserService {
    public userSettings: KeyValuePair[];
    constructor(private _webService: WebService) {
        
    }

    public getUserSettings() {
        this._webService.getUserSettings()
            .then((result: KeyValuePair[]) => this.userSettings = result);
    }
}