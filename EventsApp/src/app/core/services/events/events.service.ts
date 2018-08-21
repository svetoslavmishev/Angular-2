import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../../models/event-model/event.model';
import { CreateEventModel } from '../../models/event-model/create-event.model';

const appKey = "kid_rymYd4nrm";
const baseUrl = `https://baas.kinvey.com/appdata`;
const eventsUrl = `${baseUrl}/${appKey}/events/`;
const queryDateSortAscending = `?query={}&sort={"startDate": 1}`;

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {
  }

  getAllEvents() {
    return this.http.get<EventModel[]>(eventsUrl + queryDateSortAscending);
  }

  getEventDetails(id: string) {
    return this.http.get<EventModel>(eventsUrl + id);
  }

  createEvent(data: CreateEventModel) {
    return this.http.post(eventsUrl, data);
  }

  getMyEvents() {
    let queryCreatorDateSort = `?query={"_acl.creator":"${JSON
      .parse(localStorage.getItem('currentUser'))['creatorID']}"}&sort={"startDate": 1}`;

    return this.http.get<EventModel[]>(eventsUrl + queryCreatorDateSort);
  }

  getEventById(id: string) {
    return this.http.get(eventsUrl + id);
  }

  editEvent(id: string, data) {
    return this.http.put(eventsUrl + id, data);
  }

  deleteEvent(id: string) {
    return this.http.delete(eventsUrl + id);
  }
}
