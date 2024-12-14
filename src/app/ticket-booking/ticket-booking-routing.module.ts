import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainSearchComponent } from './train-search/train-search.component';
import { TrainAvailableComponent } from './train-available/train-available.component';

const routes: Routes = [
  {
    path: '',
    component: TrainSearchComponent
  },
  {
    path: 'train',
    component: TrainAvailableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketBookingRoutingModule { }
