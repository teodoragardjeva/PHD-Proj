import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuComponent} from './components/menuComponent';
import {MasterLayoutComponent} from './components/masterLayoutComponent';
import { RouterModule }   from '@angular/router';
import {ListElement} from './components/list';
import {GridElement} from './components/grid';
import {UserProfile} from './components/userProfile';
import {FormsElement} from './components/forms';
import {Dashboard} from './components/dashboard';
import {TreeView} from './components/treeView';
import {EntityType} from './enums/entityTypes';
import {ListResolver} from './helpers/listResolver';
import {WebService} from './services/webService';
import {TranslationService} from './services/translationService';
import {TranslatePipe} from './pipes/translationPipe';
import {FilterByFieldPipe} from './pipes/fieldFilterPipe';
import {SharedNavigationService} from './services/sharedNavigationService';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: 'grid-ui', component: ListElement },
            { path: 'users', component: ListElement, data: { type: EntityType.User }, resolve: { items: ListResolver} },
            { path: 'user-profile', component: UserProfile },
            { path: 'forms-ui', component: FormsElement },
            { path: 'dashboard', component: MenuComponent },
            { path: '', component: MenuComponent },
        ])
    ],
    providers: [ListResolver, WebService, TranslationService, SharedNavigationService],//SharedNavigationService
    declarations: [TranslatePipe, FilterByFieldPipe, MasterLayoutComponent, MenuComponent, GridElement, UserProfile, FormsElement,
        Dashboard, TreeView, ListElement],
    bootstrap: [MasterLayoutComponent],
   
})

export class AppModule { }