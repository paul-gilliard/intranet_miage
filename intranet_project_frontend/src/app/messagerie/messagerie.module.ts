import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagerieRoutingModule } from './messagerie-routing.module';
import { EnvoiMessageComponent } from './components/envoi-message/envoi-message.component';
import { ReceptionMessageComponent } from './components/reception-message/reception-message.component';


@NgModule({
  declarations: [
    EnvoiMessageComponent,
    ReceptionMessageComponent
  ],
  imports: [
    CommonModule,
    MessagerieRoutingModule
  ],
  exports: [
    EnvoiMessageComponent,
    ReceptionMessageComponent
  ]
})
export class MessagerieModule { }
