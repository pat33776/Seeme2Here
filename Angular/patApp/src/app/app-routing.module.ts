import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CodingComponent } from './coding/coding.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coding', component: CodingComponent }
  
  //// otherwise redirect to home
  //{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
