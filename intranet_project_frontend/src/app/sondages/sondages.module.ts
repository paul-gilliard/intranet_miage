import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SondageComponent } from './components/sondage/sondage.component';


@NgModule({
  declarations: [
    SondageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SondageComponent
  ]
})
export class SondagesModule { }
