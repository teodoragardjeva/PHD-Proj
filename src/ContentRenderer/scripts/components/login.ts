import { Component, Injectable } from '@angular/core';
import { WebService } from '../services/webService';
import { Helpers} from '../helpers/helpers'
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: '../../views/login.html'
})

@Injectable()
export class LoginComponent {
    public username: string;
    public password: string;

    constructor(private webService: WebService, private router: Router) { }

    Login() {
        this.webService.login(this.username, this.password, (data) => {
            if (!data.sessionKey) {
                return;
            }

            Helpers.setSession(data.sessionKey);
            this.router.navigate(['dashboard']);
        });
    }
}