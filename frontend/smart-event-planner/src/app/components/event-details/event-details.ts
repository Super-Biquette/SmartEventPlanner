import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event';
import { Event } from '../../event';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails implements OnInit 
{
  event?: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void 
  {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) 
    {
      this.eventService.getEventById(id).subscribe((data) => 
        {
          this.event = data;
        });
    }
  }
}
