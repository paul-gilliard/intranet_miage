import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BodyOfHomeComponent } from './components/body-of-home/body-of-home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BodyOfHomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    
    
    
    
    
  ],
  exports: [
    BodyOfHomeComponent
  
   ]
  
})
export class CoreModule { }
