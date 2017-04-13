import { Component, Injectable } from '@angular/core';
import { WebService } from '../services/webService';
import { Helpers } from '../helpers/helpers'
import { SharedNavigationService } from '../services/sharedNavigationService';
import { UserService } from '../services/userService';

import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: '../../views/login.html'
})

@Injectable()
export class LoginComponent {
    public username: string;
    public password: string;

    constructor(private _sharedNavigationService: SharedNavigationService, private webService: WebService, private router: Router, private _userService: UserService) {
        if (Helpers.getSession()) {
            this.router.navigate(['dashboard']);
        }
    }

    Login() {
        var promise = this.webService.login(this.username, this.password);
        promise.subscribe((data: any) => {
            if (!data.json) {
                return;
            }

            Helpers.setSession(data.json());
            this.router.navigate(['dashboard']);
        });
    }
}