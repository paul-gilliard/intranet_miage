import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SondagesRoutingModule } from './sondages-routing.module';
import { SondageComponent } from './components/sondage/sondage.component';


@NgModule({
  declarations: [
    SondageComponent
  ],
  imports: [
    CommonModule,
    SondagesRoutingModule
  ],
  exports: [
    SondageComponent
  ]
})
export class SondagesModule { }
