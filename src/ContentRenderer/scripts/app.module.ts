import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuComponent} from './components/menuComponent';
import { RouterModule }   from '@angular/router';
import {ListElement} from './components/list';
import {GridElement} from './components/grid';
import {UserProfile} from './components/userProfile';
import {FormsElement} from './components/forms';
import {Dashboard} from './components/dashboard';
import {TreeView} from './components/treeView';
import {EntityType} from './enums/entityTypes';


@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: 'grid-ui', component: ListElement },
            { path: 'users', component: ListElement, data: {type: EntityType.User } },
            { path: 'user-profile', component: UserProfile },
            { path: 'forms-ui', component: FormsElement },
            { path: 'dashboard', component: Dashboard },
            { path: '', component: Dashboard },
        ])
    ],
    declarations: [MenuComponent, GridElement, UserProfile, FormsElement, Dashboard, TreeView, ListElement],
    bootstrap: [MenuComponent],
   
})

export class AppModule { }