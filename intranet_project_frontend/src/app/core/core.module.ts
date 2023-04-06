import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { CalendarComponent } from '../emploi-du-temps/calendar/calendar.component';
import { SharedModule } from '../shared/shared.module';
import { EmploiDuTempsModule } from '../emploi-du-temps/emploi-du-temps.module';


@NgModule({
  declarations: [
  ],
  imports: [
    EmploiDuTempsModule,
    CommonModule,
    CoreRoutingModule,
   
    
  ],
  exports: [
  ]
})
export class CoreModule { }
