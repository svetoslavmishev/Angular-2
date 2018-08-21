import { NgModule } from '@angular/core';
import { eventComponents } from '.';
import { EventsService } from '../../core/services/events/events.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    NgxPaginationModule    
  ],
  declarations: [
    ...eventComponents
  ],
  providers: [EventsService]
})
export class EventsModule { }
