import { Routes } from '@angular/router';
import { EventList } from './components/event-list/event-list';
import { EventDetails } from './components/event-details/event-details';
import { CreateEvent } from './components/create-event/create-event';

export const routes: Routes = [{ path: '', component:EventList },
  { path:'event/:id', component: EventDetails },
  { path:'create', component: CreateEvent },];
