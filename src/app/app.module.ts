import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UIRouterModule} from "@uirouter/angular";
import { AppComponent } from './app.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { ProfilesComponent } from '../app/Profiles/profiles.component';
import { FooterComponent } from '../app/shared/footer/footer.component';
import { NavBarComponent } from '../app/shared/navbar/nav-bar.component';

/** States */

let dashboardState = { name: 'dashboard', url: '/dashboard',  component: DashboardComponent };
let profilesState = { name: 'profiles', url: '/profiles',  component: ProfilesComponent };

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, ProfilesComponent, FooterComponent, NavBarComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: [ dashboardState, profilesState ], useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
