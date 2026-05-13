import { Component } from '@angular/core';
import { CreateEvent } from '../create-event/create-event';
import { EventList } from '../event-list/event-list';
@Component({
  selector: 'app-home',
  imports: [CreateEvent,
            EventList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
