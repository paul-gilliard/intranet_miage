import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { MessageriePanelGaucheComponent } from './components/messagerie-panel-gauche/messagerie-panel-gauche.component';
import { MessagerieDiscussionComponent } from './components/messagerie-discussion/messagerie-discussion.component';
import { MessagerieInfoComponent } from './components/messagerie-info/messagerie-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MessagerieComponent, 
    MessageriePanelGaucheComponent, 
    MessagerieDiscussionComponent, MessagerieInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MessagerieComponent, 
    MessageriePanelGaucheComponent, 
    MessagerieDiscussionComponent
  ]
})
export class MessagerieModule { }
