import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroFilterPipe } from './hero-filter.pipe';
import { SearchInputComponent } from './search-input/search-input.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent,
    HeroAddComponent,
    HeroFilterPipe,
    SearchInputComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule, 
    NgbModule, 
    HttpClientModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
