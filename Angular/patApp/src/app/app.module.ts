import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //required for ngModel to work

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { CodingComponent } from './coding/coding.component';

//Services
import { DataService } from './_services/data.service';

//Helpers
import { FilterPipe } from './_helpers/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HomeComponent,
    CodingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
