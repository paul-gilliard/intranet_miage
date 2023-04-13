import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploiDuTempsRoutingModule } from './emploi-du-temps-routing.module';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    EmploiDuTempsRoutingModule
  ]
  ,exports: [
    CalendarComponent
  ]
})

export class EmploiDuTempsModule {

 }
