import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoginComponent } from './components/home-login/home-login.component';
import { SharedModule } from '../shared/shared.module';
import { EmploiDuTempsModule } from '../emploi-du-temps/emploi-du-temps.module';
import { HomeConnectComponent } from './components/home-connect/home-connect.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeLoginComponent,
    HomeConnectComponent,
    CreateUserComponent,
    LoginComponent,
  ],
  imports: [
    EmploiDuTempsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HomeLoginComponent,
    HomeConnectComponent,
    CreateUserComponent,
    LoginComponent,
  ]
})
export class CoreModule { }
