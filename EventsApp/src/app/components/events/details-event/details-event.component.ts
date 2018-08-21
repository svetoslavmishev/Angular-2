import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../../core/models/event-model/event.model';
import { EventsService } from '../../../core/services/events/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit {
  event$: Observable<EventModel>
  id: string;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.event$ = this.eventService.getEventDetails(this.id);
  }
}
