import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { EventsService } from '../../../core/services/events/events.service';
import { ActivatedRoute } from '@angular/router';
import { CreateEventModel } from '../../../core/models/event-model/create-event.model';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  editForm = new FormGroup({
    "title": new FormControl('', [Validators.required]),
    "organizer": new FormControl('', [Validators.required]),
    "venue": new FormControl('', [Validators.required, Validators.maxLength(80)]),
    "description": new FormControl('', [Validators.required, Validators.minLength(50)]),
    "image": new FormControl('', [Validators.required]),
    "capacity": new FormControl('', [Validators.required, Validators.min(0)]),
    "startDate": new FormControl('', [Validators.required]),
    "startTime": new FormControl('', [Validators.required]),
    "status": new FormControl('', [Validators.required]),
    "category": new FormControl('', [Validators.required])
  });

  id: string;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.eventService
      .getEventById(this.id)
      .subscribe(data => {
        this.editForm = new FormGroup({
          "title": new FormControl(data['title'], [Validators.required]),
          "organizer": new FormControl(data['organizer'], [Validators.required]),
          "venue": new FormControl(data['venue'], [Validators.required, Validators.maxLength(80)]),
          "description": new FormControl(data['description'], [Validators.required, Validators.minLength(50)]),
          "image": new FormControl(data['image'], [Validators.required]),
          "capacity": new FormControl(data['capacity'], [Validators.required, Validators.min(0)]),
          "startDate": new FormControl(data['startDate'], [Validators.required]),
          "startTime": new FormControl(data['startTime'], [Validators.required]),
          "status": new FormControl(data['status'], [Validators.required]),
          "category": new FormControl(data['category'], [Validators.required]),
          "orders": new FormControl(data['orders']),
        });
      });
  }

  edit() {
    this.eventService
      .editEvent(this.id, this.editForm.value)
      .subscribe();
  }
}
