import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../core/services/events/events.service';
import { EventModel } from '../../../core/models/event-model/event.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events$: Observable<EventModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private eventsService: EventsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
  }

  pageChanged(page) {
    this.currentPage = page;
  }

  //TODO DELETE AND EDIT EVENT FUNCTIONS


}
