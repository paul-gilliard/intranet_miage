import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IIcsCalendar } from '../models/icsCalendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  //Email de l'émetteur
  getEventsFrom(name: string){
    return this.http.get<IIcsCalendar>('http://localhost:3000/api/calendar/getAllEventsFrom/'+ name);
  }

  getNumberOfEventToday(promo : string){
    return this.http.get<number>('http://localhost:3000/api/calendar/getCountEventTodayByPromo/' + promo);
  }
}