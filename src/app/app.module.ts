import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

import {FormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import { NousaiderComponent } from './components/nousaider/nousaider.component';
import { GallerieComponent } from './components/gallerie/gallerie.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nousaider',
    component: NousaiderComponent
  },
  {
    path: 'gallerie',
    component: GallerieComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NousaiderComponent,
    GallerieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
