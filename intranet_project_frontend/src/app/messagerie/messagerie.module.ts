import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagerieRoutingModule } from './messagerie-routing.module';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { MessageriePanelGaucheComponent } from './components/messagerie-panel-gauche/messagerie-panel-gauche.component';
import { MessagerieDiscussionComponent } from './components/messagerie-discussion/messagerie-discussion.component';

@NgModule({
  declarations: [
    MessagerieComponent, 
    MessageriePanelGaucheComponent, 
    MessagerieDiscussionComponent
  ],
  imports: [
    CommonModule,
    MessagerieRoutingModule
  ],
  exports: [
    MessagerieComponent, 
    MessageriePanelGaucheComponent, 
    MessagerieDiscussionComponent
  ]
})
export class MessagerieModule { }
