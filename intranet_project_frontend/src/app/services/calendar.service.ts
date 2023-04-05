import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ical from 'ical';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IcalService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('../../../../Emploi_du_temps/calendar.ics', { responseType: 'text' }).pipe(
      map(response => {
        const events = [];
        const data = ical.parseICS(response);
        for (const event of Object.values(data)) {
          if (event.type === 'VEVENT') {
            events.push(event);
          }
        }
        return events;
      })
    );
  }
}
