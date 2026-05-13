import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../event';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:5000/api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> 
  {
    return this.http.get<Event[]>(this.apiUrl);
  }
  addEvent(event: Event): Observable<Event> 
  {
  return this.http.post<Event>(this.apiUrl, event);
  }

  deleteEvent(id: string): Observable<Event> 
  {
  return this.http.delete<Event>(`${this.apiUrl}/${id}`);
  }

  getEventById(id: string): Observable<Event> 
  {
  return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }
}
