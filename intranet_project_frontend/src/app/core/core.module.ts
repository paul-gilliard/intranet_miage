import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BodyOfHomeComponent } from './components/body-of-home/body-of-home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeConnectComponent } from './components/home-connect/home-connect.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BodyOfHomeComponent,
    HomeConnectComponent,
    CreateUserComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule

  ],
  exports: [
    BodyOfHomeComponent,
    HomeConnectComponent,
    CreateUserComponent,
    LoginComponent,

  ]
  
})
export class CoreModule { }
