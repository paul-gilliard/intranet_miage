import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffresRoutingModule } from './offres-routing.module';
import { OffreComponent } from './components/offre/offre.component';



@NgModule({
  declarations: [
    OffreComponent
  ],
  imports: [
    CommonModule, 
    OffresRoutingModule
  ],
  exports: [
    OffreComponent
  ]
})
export class OffresModule { }
