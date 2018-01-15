import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UIRouterModule} from "@uirouter/angular";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { ProfilesComponent } from '../app/Profiles/profiles.component';
import { FooterComponent } from '../app/shared/footer/footer.component';
import { NavBarComponent } from '../app/shared/navbar/nav-bar.component';

import { VideosService } from '../app/core/categories/videos.service';
import { CategoriesService } from '../app/core/videos/categories.service';


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
  providers: [ VideosService, CategoriesService ],
  bootstrap: [AppComponent]
})
export class AppModule{
  
}
