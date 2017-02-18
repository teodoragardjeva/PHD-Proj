import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription } from 'rxjs';
import {SharedNavigationService} from '../services/sharedNavigationService';
import { Router, ActivatedRoute, NavigationEnd, Params, Event as NavigationEvent } from '@angular/router';

@Component({
    selector: 'main-view',
    templateUrl: "../../views/masterLayout.html",
})

export class MasterLayoutComponent implements OnInit, OnDestroy{
    private subscription: Subscription;

    constructor(public _sharedNavigationService: SharedNavigationService, private router: Router, private route: ActivatedRoute) {

        this.subscription = this._sharedNavigationService.data.subscribe(
            value => void (0),
            error => void (0),
            () => {
                this._sharedNavigationService.selectNavigationMenu(this.route.snapshot.params['navId']);

                router.events.forEach((event: NavigationEvent) => {
                    if (event instanceof NavigationEnd) {
                        if (!this.route.firstChild) {
                            this._sharedNavigationService.selectNavigationMenu(null);
                        }
                        else {
                            this._sharedNavigationService.selectNavigationMenu(this.route.firstChild.snapshot.params['navId']);
                        }
                    }
                });

            }
        );
    }

    ngOnInit() {
     
    }

    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }

}