import { EventInput } from '@fullcalendar/core';

export interface IIcsCalendar {
  name: string;
  content: EventInput[]; // stocker les événements sous forme de tableau
}