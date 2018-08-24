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
  orderEvent: Object;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.event$ = this.eventService.getEventDetails(this.id);
  }

  order(id) {
    this.eventService.getEventById(id)
      .subscribe(data => {
        let claimOrder = Number(data['orders']) + 1;

        if (claimOrder <= data['capacity']) {
          this.orderEvent = {
            "title": data['title'],
            "organizer": data['organizer'],
            "venue": data['venue'],
            "description": data['description'],
            "image": data['image'],
            "capacity": data['capacity'],
            "startDate": data['startDate'],
            "startTime": data['startTime'],
            "status": data['status'],
            "category": data['category'],
            "orders": claimOrder
          };
        }

        this.eventService
          .editEvent(this.id, this.orderEvent)
          .subscribe();
      });
  }
}
