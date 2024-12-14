import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketBookingModule } from './ticket-booking/ticket-booking.module';
import { InputvaluestyleDirective } from './directives/inputvaluestyle.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TicketBookingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
