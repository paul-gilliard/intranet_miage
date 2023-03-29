import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
  ]
})
export class CoreModule { }
