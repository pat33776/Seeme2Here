import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //required for ngModel to work

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { CodingComponent } from './coding/coding.component';
import { LoginComponent } from './login/login.component';

//Services
import { DataService } from './_services/data.service';

//Helpers
//used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ReplaceTimePipe } from './_helpers/replace-time.pipe';
import { FilterPipe } from './_helpers/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HomeComponent,
    CodingComponent,
    LoginComponent,
    ReplaceTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
