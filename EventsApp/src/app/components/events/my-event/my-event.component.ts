import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../core/services/events/events.service';
import { Observable } from '../../../../../node_modules/rxjs';
import { EventModel } from '../../../core/models/event-model/event.model';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {
  events$: Observable<EventModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private eventsSerice: EventsService) { }

  ngOnInit() {
    this.events$ = this.eventsSerice.getMyEvents();
  }

  pageChanged(page) {
    this.currentPage = page;
  }

  delete(id: string) {
    this.eventsSerice
      .deleteEvent(id)
      .subscribe();
  }
}
