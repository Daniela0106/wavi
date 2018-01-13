import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UIRouterModule} from "@uirouter/angular";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { ProfilesComponent } from '../app/Profiles/profiles.component';
import { FooterComponent } from '../app/shared/footer/footer.component';
import { NavBarComponent } from '../app/shared/navbar/nav-bar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/** States */
let dashboardState = { name: 'dashboard', url: '/dashboard',  component: DashboardComponent };
let profilesState = { name: 'profiles', url: '/profiles',  component: ProfilesComponent };

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, ProfilesComponent, FooterComponent, NavBarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    UIRouterModule.forRoot({ states: [ dashboardState, profilesState ], useHash: true }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
