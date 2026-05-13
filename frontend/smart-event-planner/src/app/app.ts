import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { EventList } from './components/event-list/event-list';
import { Footer } from './components/footer/footer';
import { CreateEvent } from './components/create-event/create-event';
@Component({
  selector: 'app-root',
  imports: [Navbar,
    Footer,
    RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart-event-planner');
}
