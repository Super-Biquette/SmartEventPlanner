import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event';
import { Event } from '../../event';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-event-list',
  imports: [CommonModule,
            RouterModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void 
  {
    this.eventService.getEvents().subscribe((data) => 
    {
      this.events = data;
      console.log(this.events);
    });
  }

  deleteEvent(id: string) 
  {
    this.eventService.deleteEvent(id).subscribe(() => 
    {
    this.events = this.events.filter(event => event._id !== id);
    });
  }
}
