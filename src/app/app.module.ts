import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form/search-form.component';
import { SearchComponent } from './user/search/search.component';
import {RoutingModule} from './routing/routing/routing.module';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesComponent,
    SearchFormComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
