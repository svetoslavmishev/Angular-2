import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from '../../../core/services/events/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createForm = new FormGroup({
    "title": new FormControl('', [Validators.required]),
    "organizer": new FormControl('', [Validators.required]),
    "venue": new FormControl('', [Validators.required, Validators.maxLength(80)]),
    "description": new FormControl('', [Validators.required, Validators.minLength(50)]),
    "image": new FormControl('', [Validators.required]),
    "capacity": new FormControl('0', [Validators.required, Validators.min(0)]),
    "startDate": new FormControl('', [Validators.required]),
    "startTime": new FormControl('', [Validators.required]),
    "status": new FormControl('', [Validators.required]),
    "category": new FormControl('Things to do in Sofia', [Validators.required]),
    "orders": new FormControl('0')
  });

  constructor(private eventService: EventsService) { }

  ngOnInit() {
  }

  create() {
    this.eventService
      .createEvent(this.createForm.value)
      .subscribe();
  }
}
