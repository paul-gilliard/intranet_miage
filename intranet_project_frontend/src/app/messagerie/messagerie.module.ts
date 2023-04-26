import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagerieRoutingModule } from './messagerie-routing.module';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { MessageriePanelGaucheComponent } from './components/messagerie-panel-gauche/messagerie-panel-gauche.component';
import { MessagerieDiscussionComponent } from './components/messagerie-discussion/messagerie-discussion.component';
import { MessagerieInfoComponent } from './components/messagerie-info/messagerie-info.component';
import { FormsModule } from '@angular/forms';
import { CurrentUserMessageDirective } from './components/messagerie-discussion/CurrentUserMessageDirective';
import { HighlightDirective } from './components/messagerie-panel-gauche/highlightClickedUser.directive';


@NgModule({
  declarations: [
    MessagerieComponent, 
    MessageriePanelGaucheComponent, 
    MessagerieDiscussionComponent,
    MessagerieInfoComponent,
    CurrentUserMessageDirective,
    HighlightDirective
   
  ],
  imports: [
    CommonModule,
    MessagerieRoutingModule, 
    FormsModule,
  
    
  ],
  exports: [
    MessagerieComponent, 
    MessageriePanelGaucheComponent, 
    MessagerieDiscussionComponent,
    CurrentUserMessageDirective,
    HighlightDirective
  
  ]
})
export class MessagerieModule { }
