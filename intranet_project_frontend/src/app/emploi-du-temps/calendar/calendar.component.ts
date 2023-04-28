import { Calendar, EventInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
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
  calendarEvents!: IIcsCalendar;
  selectedValue: string = '';

  constructor(private service: CalendarService) { }

  ngOnInit(): void {
    this.calendarApi = new Calendar(this.calendarComponent.nativeElement, {
      plugins: [timeGridPlugin, interactionPlugin, dayGridPlugin],
      initialView: 'timeGridWeek',
      editable: true,
      selectable: true,
      dateClick: this.handleDateClick.bind(this),
      events: [], // initialisez le tableau d'événements avec une chaîne vide
      hiddenDays: [0, 6], // Masquer les weekends
      slotMinTime: '08:00:00', // Heure de début de la plage horaire visible
      slotMaxTime: '20:00:00', // Heure de fin de la plage horaire visible
      headerToolbar: {
        start: 'title prev,next dayGridMonth,timeGridWeek,timeGridDay',
        center: '',
        end: 'today'
      }
    });
    this.calendarApi.render();
    this.getEventsFrom();
  }

  getEventsFrom() {
    let name = "M2_calendar_events.ics"
    this.sub = this.service.getEventsFrom(name).subscribe({
      next: calendar => {
        // mise à jour de notre modèle ICalendar pour stocker les événements sous forme de tableau
        const events = Object.values(calendar.content).map(event => ({
          title: event['summary'],
          start: event.start ? new Date(event.start.toString()) : null,
          end: event.end ? new Date(event.end.toString()) : null,
          description: event['description'],
          summary: event['summary']
        })) as EventInput[];
        this.calendarEvents = {
          name: calendar.name,
          content: events
        };
        // ajouter les événements à notre calendrier
        this.calendarApi.addEventSource(this.calendarEvents.content);
      }
    });
  }

  getEventsFromByName(name: string) {
    this.sub = this.service.getEventsFrom(name).subscribe({
      next: calendar => {
        // mise à jour de notre modèle ICalendar pour stocker les événements sous forme de tableau
        this.calendarApi.removeAllEventSources();
        const events = Object.values(calendar.content).map(event => ({
          title: event['summary'],
          start: event.start ? new Date(event.start.toString()) : null,
          end: event.end ? new Date(event.end.toString()) : null,
          description: event['description'],
          summary: event['summary']
        })) as EventInput[];
        this.calendarEvents = {
          name: calendar.name,
          content: events
        };
        // ajouter les événements à notre calendrier
        this.calendarApi.addEventSource(this.calendarEvents.content);
      }
    });
  }

  // Handler pour passer à l'affichage jour
  onDayButtonClick() {
    this.calendarApi.changeView('timeGridDay');
  }

  // Handler pour passer à l'affichage semaine
  onWeekButtonClick() {
    this.calendarApi.changeView('timeGridWeek');
  }

  // Handler pour passer à l'affichage mois
  onMonthButtonClick() {
    this.calendarApi.changeView('dayGridMonth');
  }

  handleDateClick(arg: any) {
    console.log('date click! ' + arg.dateStr);
  }
  
  onSelectChange() {
    this.getEventsFromByName(this.selectedValue);
  }
}