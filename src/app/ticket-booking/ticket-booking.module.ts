import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { TrainSearchComponent } from './train-search/train-search.component';
import { TrainAvailableComponent } from './train-available/train-available.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { InputvaluestyleDirective } from '../directives/inputvaluestyle.directive';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    TrainSearchComponent,
    TrainAvailableComponent,
    InputvaluestyleDirective
  ],
  imports: [
    CommonModule,
    TicketBookingRoutingModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDividerModule,
    
  ]
})
export class TicketBookingModule { }
