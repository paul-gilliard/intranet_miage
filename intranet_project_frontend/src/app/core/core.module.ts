import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { CalendarComponent } from '../emploi-du-temps/calendar/calendar.component';
import { SharedModule } from '../shared/shared.module';
import { EmploiDuTempsModule } from '../emploi-du-temps/emploi-du-temps.module';
import { BodyOfHomeComponent } from './components/body-of-home/body-of-home.component';
import { HomeConnectComponent } from './components/home-connect/home-connect.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
//import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    BodyOfHomeComponent,
    HomeConnectComponent,
    CreateUserComponent,
    LoginComponent,
    
  ],
  imports: [
    EmploiDuTempsModule,
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    //NgImageSliderModule
    


  ],
  exports: [
    BodyOfHomeComponent,
    HomeConnectComponent,
    CreateUserComponent,
    LoginComponent,

  ]
  
})
export class CoreModule { }
