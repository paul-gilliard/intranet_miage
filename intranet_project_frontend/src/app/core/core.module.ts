import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BodyOfHomeComponent } from './components/body-of-home/body-of-home.component';



@NgModule({
  declarations: [
  
  
    BodyOfHomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    BodyOfHomeComponent
   ]
  
})
export class CoreModule { }
