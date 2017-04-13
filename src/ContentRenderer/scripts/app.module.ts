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
import {SharedNavigationService} from './services/sharedNavigationService';
import { FormsModule } from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination'; 
import { ExtendedFilter } from './components/extendedFilter';
import { InputComponent } from './components/inputComponent';
import { AuthGuard } from './helpers/authGuard';
import { HttpModule } from '@angular/http';
import { UserService } from './services/userService';
import { CommonModule } from './common.module';
import { LoginComponent } from './components/login';
import { SecuredMasterComponent } from './components/securedMasterComponent';

@NgModule({
    imports: [BrowserModule, FormsModule, Ng2PaginationModule, HttpModule, CommonModule,
        RouterModule.forRoot([
            
            {
                path: '', component: SecuredMasterComponent, canActivate: [AuthGuard],
                children: [
                    { path: 'dashboard', component: MenuComponent, canActivate: [AuthGuard], },
                    { path: 'grid-ui', component: ListElement, canActivate: [AuthGuard] },
                    { path: 'users', component: ListElement, data: { type: EntityType.User }, resolve: { items: ListResolver }, canActivate: [AuthGuard] },
                    { path: 'items/:navId/:type', component: ListElement, resolve: { items: ListResolver }, canActivate: [AuthGuard] },
                    { path: 'user-profile', component: UserProfile, canActivate: [AuthGuard] },
                    { path: 'forms-ui', component: FormsElement, canActivate: [AuthGuard] },]
            },
            { path: 'login', component: LoginComponent },
            { path: 'nav-item/:navId', component: MenuSubItemComponent, canActivate: [AuthGuard] }
        ])
    ],
    providers: [ListResolver, WebService, SharedNavigationService, AuthGuard, UserService],
    declarations: [MasterLayoutComponent, MenuComponent, GridElement, UserProfile, FormsElement,
        Dashboard, TreeView, ListElement, LoginComponent, MenuSubItemComponent, ExtendedFilter, InputComponent, SecuredMasterComponent],
    bootstrap: [MasterLayoutComponent],
   
})

export class AppModule { }