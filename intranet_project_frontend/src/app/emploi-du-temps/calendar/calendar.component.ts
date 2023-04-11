import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
    @ViewChild('calendar',{ static: true }) calendarComponent!: ElementRef;
    calendarApi!: Calendar;
  
    ngOnInit() {
      this.calendarApi = new Calendar(this.calendarComponent.nativeElement, {
        plugins: [timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        editable: true, // Permet la modification des events
        selectable: true, // Permet la selection de cellule
        dateClick: this.handleDateClick.bind(this),
        events: [], // les events seront ajouté plus tard
      });
      this.calendarApi.render();
    }
  
    handleDateClick(arg: any) {
      console.log('date click! ' + arg.dateStr);
    }
  }
