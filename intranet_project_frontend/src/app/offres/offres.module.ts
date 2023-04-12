import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreComponent } from './components/offre/offre.component';



@NgModule({
  declarations: [
    OffreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OffreComponent
  ]
})
export class OffresModule { }
