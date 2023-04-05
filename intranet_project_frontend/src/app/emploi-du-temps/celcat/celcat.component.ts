/*import { Component, OnInit } from '@angular/core';
import * as ical from 'ical';
import { IcalService } from '../../services/calendar.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-celcat',
  templateUrl: './celcat.component.html',
  styleUrls: ['./celcat.component.css']
})
export class CelcatComponent implements OnInit {
  events: any[] = [];

  constructor(private icalService: IcalService) {}

  ngOnInit() {
    const path = '../../../../Emploi_du_temps/calendar.ics';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path);
    xhr.onload = () => {
      const data = xhr.responseText;
      const events = ical.parseICS(data);
      console.log(events); // Afficher les événements dans la console
    };
    xhr.send();

    this.icalService.getEvents().pipe(
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
    ).subscribe(events => {
      this.events = events;
    });
  }
}
*/

import { Component, OnInit } from '@angular/core';
import * as ical from 'ical';
import { IcalService } from '../../services/calendar.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-celcat',
  templateUrl: './celcat.component.html',
  styleUrls: ['./celcat.component.css']
})
export class CelcatComponent implements OnInit {
  events: any[] = [];

  constructor(private icalService: IcalService) {}

  ngOnInit() {
    const path = '../../../../Emploi_du_temps/calendar.ics';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path);
    xhr.onload = () => {
      const data = xhr.responseText;
      const events = ical.parseICS(data);
      console.log(events); // Afficher les événements dans la console
    };
    xhr.send();

    this.icalService.getEvents().subscribe(events => {
      this.events = events;
    });
  }
}
