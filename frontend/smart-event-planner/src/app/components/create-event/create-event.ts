import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../services/event';
@Component({
  selector: 'app-create-event',
  imports: [FormsModule],
  templateUrl: './create-event.html',
  styleUrl: './create-event.css',
})
export class CreateEvent 
{
  title = '';
  date = '';
  location = '';
  category = '';
  description = '';

  constructor(private eventService: EventService) { }

  addEvent() 
  {
    const newEvent = 
    {
      title: this.title,
      date: this.date,
      location: this.location,
      category: this.category,
      description: this.description,
      attendees: 0
    };

    this.eventService.addEvent(newEvent).subscribe(() => 
      {
      alert('Event added successfully');

      this.title = '';
      this.date = '';
      this.location = '';
      this.category = '';
      this.description = '';
    });
  }
}
