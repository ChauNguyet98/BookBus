import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageSeatComponent } from './manage-seat/manage-seat.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bus', component: ManageSeatComponent },
  { path: '', redirectTo: '/home',  pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
