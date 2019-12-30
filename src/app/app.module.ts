import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// Httpclient es el mecanismo de angular para comunicarse
// con un servidor remoto a través de HTTP
import { HttpClientModule} from '@angular/common/http';

// despues de instalar la API web
// npm install angular-in-memory-web-api --save
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
// import { InMemoryDataService } from '/'
// import {InMemoryDataService} from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, {dataEncapsulation: false}
    //)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
