import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import { ListSeatComponent } from './list-seat/list-seat.component';
import { ManageSeatComponent } from './manage-seat/manage-seat.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    ListSeatComponent,
    ManageSeatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
