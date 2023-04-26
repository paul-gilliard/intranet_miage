import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messagerie-info',
  templateUrl: './messagerie-info.component.html',
  styleUrls: ['./messagerie-info.component.css']
})
export class MessagerieInfoComponent {
@Input() isPrivateMessage: boolean = false;
  @Input() nomConversation: String ='';
}
