export class EventModel {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private image: string,
    private venue: string,
    private organizer: string,
    private capacity: number,
    private category: string,
    private start: Date,
    private end: Date,
  ) { }
}
