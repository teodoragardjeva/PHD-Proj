import {WebService} from '../services/webService';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import {Injectable} from '@angular/core';
import {GridConfiguration} from '../models/gridConfiguration';

@Injectable()
export class ListResolver implements Resolve<any> {
    data: any;
    constructor(private _webService: WebService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot): Promise<any> | any {
        const type: number = +route.params['type'];
        return this._webService.getGridItem(type).then((result: GridConfiguration) => {
            if (result) {
                return result;
            } else {
                //this.router.navigate(['/crisis-center']);
                return [];
            }
        });
    }
}