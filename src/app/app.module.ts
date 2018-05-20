import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { AddconnectionComponent } from './pages/addconnection/addconnection.component';
import { ListconnectionsComponent } from './pages/listconnections/listconnections.component';
import { StatsComponent } from './pages/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdduserComponent,
    AddconnectionComponent,
    ListconnectionsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
