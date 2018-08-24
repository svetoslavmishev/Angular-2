import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { MyEventComponent } from './my-event/my-event.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { eventComponents } from '.'
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEventComponent } from './edit-event/edit-event.component';

const eventRoutes: Routes = [
  //{ path: 'all', component: EventsListComponent },
  { path: 'create', component: CreateEventComponent },
  { path: 'my', component: MyEventComponent },
  { path: 'details/:id', component: DetailsEventComponent },
  { path: 'edit/:id', component: EditEventComponent }
]

@NgModule({
  declarations: [
    ...eventComponents
  ],
  imports: [
    RouterModule.forChild(eventRoutes),
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, CommonModule]
})
export class EventsRoutingModule { }