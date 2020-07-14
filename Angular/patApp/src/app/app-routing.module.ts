import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CodingComponent } from './coding/coding.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'coding', component: CodingComponent },
  { path: 'login', component: LoginComponent },

  //// otherwise redirect to home
  //{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
