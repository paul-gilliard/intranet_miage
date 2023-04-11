import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { Subscription } from 'rxjs';
import { IIcsCalendar } from 'src/app/models/icsCalendar.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    @ViewChild('calendar',{ static: true }) calendarComponent!: ElementRef;
    calendarApi!: Calendar;
    sub!: Subscription;
    calendarEvents : IIcsCalendar = {
      name: '',
      content: []
    };

    constructor(private service: CalendarService) { }

    ngOnInit(): void {
      this.calendarApi = new Calendar(this.calendarComponent.nativeElement, {
        plugins: [timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        editable: true, // Permet la modification des events
        selectable: true, // Permet la selection de cellule
        dateClick: this.handleDateClick.bind(this),
        events: [], // les events seront ajouté plus tard
      });
      this.calendarApi.render();
      this.getEventsFrom();

    }

    getEventsFrom(){
      let name = "M2_calendar_events.ics"
      this.sub = this.service.getEventsFrom(name).subscribe({
        next: calendar => {
          this.calendarEvents = calendar;
        }
      });

    }
  
    handleDateClick(arg: any) {
      console.log('date click! ' + arg.dateStr);
    }
  }
