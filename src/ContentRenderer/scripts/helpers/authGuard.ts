import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Helpers } from './helpers';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        // Check to see if a user has a valid JWT
        if (Helpers.getSession()) {
            // If they do, return true and allow the user to load the home component
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/login']);
        return false;
    }
}