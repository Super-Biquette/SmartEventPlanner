import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event';
import { Event } from '../../event';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-event-list',
  imports: [CommonModule,
            RouterModule,
          FormsModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList implements OnInit {
  events: Event[] = [];

  searchText = '';

  loading = true;

  constructor(private eventService: EventService) { }

  ngOnInit(): void 
  {
    this.eventService.getEvents().subscribe((data) => 
    {
      this.events = data;
      this.loading = false;
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

  getFilteredEvents() 
  {
    return this.events.filter(event =>
      event.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      event.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
      event.location.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
