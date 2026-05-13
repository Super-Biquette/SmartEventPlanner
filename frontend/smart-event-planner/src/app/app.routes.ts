import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { EventDetails } from './components/event-details/event-details';


export const routes: Routes = [{ path: '', component: Home },
  { path:'event/:id', component: EventDetails },];
