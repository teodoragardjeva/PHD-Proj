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
import {MenuSubItemComponent} from './components/menuSubItemComponent';
import {EntityType} from './enums/entityTypes';
import {ListResolver} from './helpers/listResolver';
import {WebService} from './services/webService';
import {TranslationService} from './services/translationService';
import {TranslatePipe} from './pipes/translationPipe';
import {FilterByFieldPipe} from './pipes/fieldFilterPipe';
import {SharedNavigationService} from './services/sharedNavigationService';
import { FormsModule } from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination'; 
import { ExtendedFilter } from './components/extendedFilter';
import { InputComponent } from './components/inputComponent';
import { AuthGuard } from './helpers/authGuard';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login';
import { UserService } from './services/userService';

@NgModule({
    imports: [BrowserModule, FormsModule, Ng2PaginationModule, HttpModule,
        RouterModule.forRoot([
            { path: 'grid-ui', component: ListElement, canActivate: [AuthGuard] },
            { path: 'users', component: ListElement, data: { type: EntityType.User }, resolve: { items: ListResolver }, canActivate: [AuthGuard] },
            { path: 'items/:navId/:type', component: ListElement, resolve: { items: ListResolver }, canActivate: [AuthGuard] },
            { path: 'user-profile', component: UserProfile, canActivate: [AuthGuard] },
            { path: 'forms-ui', component: FormsElement, canActivate: [AuthGuard] },
            { path: 'dashboard', component: MenuComponent, canActivate: [AuthGuard] },
            { path: '', component: MenuComponent, canActivate: [AuthGuard] },
            { path: 'nav-item/:navId', component: MenuSubItemComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent},

        ])
    ],
    providers: [ListResolver, WebService, TranslationService, SharedNavigationService, AuthGuard, UserService],
    declarations: [TranslatePipe, FilterByFieldPipe, MasterLayoutComponent, MenuComponent, GridElement, UserProfile, FormsElement,
        Dashboard, TreeView, ListElement, MenuSubItemComponent, ExtendedFilter, InputComponent, LoginComponent],
    bootstrap: [MasterLayoutComponent],
   
})

export class AppModule { }