import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../core/services/events/events.service';
import { Observable } from '../../../../node_modules/rxjs';
import { EventModel } from '../../core/models/event-model/event.model';
// import {
//   trigger,
//   transition,
//   style,
//   animate,
//   query,
//   stagger
// } from '@angular/animations';
import { AuthService } from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  events$: Observable<EventModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private eventsService: EventsService,
    private authService: AuthService) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
  }

  pageChanged(page) {
    this.currentPage = page;
  }

  delete(id: string) {
    this.eventsService
      .deleteEvent(id)
      .subscribe(() => {
        this.events$ = this.eventsService.getAllEvents();
      });
  }
}
