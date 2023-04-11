import { Schema, model, Document } from 'mongoose';

export interface IIcsCalendar {
  name: string;
  content: Object;
}

const icsCalendarSchema = new Schema<IIcsCalendar>({
  name: { type: String, required: true },
  content: { type: Object, required: true },
});

export default model<IIcsCalendar>('IcsCalendar', icsCalendarSchema);
