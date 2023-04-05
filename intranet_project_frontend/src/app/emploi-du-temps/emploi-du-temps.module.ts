import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploiDuTempsRoutingModule } from './emploi-du-temps-routing.module';
import { CelcatComponent } from './celcat/celcat.component';


@NgModule({
  declarations: [
    CelcatComponent
  ],
  imports: [
    CommonModule,
    EmploiDuTempsRoutingModule
  ]
})
export class EmploiDuTempsModule { }
