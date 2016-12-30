import {Component} from '@angular/core';
import {SharedNavigationService} from '../services/sharedNavigationService';
import { Router, ActivatedRoute, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
    selector: 'main-view',
    templateUrl: "../../views/masterLayout.html"
})

export class MasterLayoutComponent {
    constructor(public _sharedNavigationService: SharedNavigationService, private router: Router, private route: ActivatedRoute) {
        
        let subscription = this._sharedNavigationService.data.subscribe(
            value => void (0),
            error => void (0),
            () => {
                this._sharedNavigationService.selectNavigationMenu(parseInt(this.route.snapshot.params['navId'], 10));

                router.events.forEach((event: NavigationEvent) => {
                    if (event instanceof NavigationStart) {
                        this._sharedNavigationService.selectNavigationMenu(parseInt(this.route.snapshot.params['navId'], 10));
                       
                    }
                });

            }
        );
    }
}