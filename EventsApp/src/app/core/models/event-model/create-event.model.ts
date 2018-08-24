export class CreateEventModel {
  constructor(
    private title: string,
    private description: string,
    private image: string,
    private venue: string,
    private organizer: string,
    private capacity: number,
    private category: string,
    private status: string,
    private startDate: Date,
    private startTime: Date
  ) { }
}
