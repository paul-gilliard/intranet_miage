import { Component, Input, OnInit } from '@angular/core';
import { UsereService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Messagerie } from 'src/app/models/messagerie.model';
import { MessagerieService } from 'src/app/services/messagerie.service';

@Component({
  selector: 'app-messagerie-panel-gauche',
  templateUrl: './messagerie-panel-gauche.component.html',
  styleUrls: ['./messagerie-panel-gauche.component.css']
})
export class MessageriePanelGaucheComponent implements OnInit {
  static getMessagerieDiscussion() {
    
     return this.getMessagerieDiscussion;
  }
  @Input() messagerie: Messagerie = {
    nomConversation: '',
    messages: []
  };
  @Input() usersList: User[] = [];
  currentUserEmail = localStorage.getItem('currentUserEmail')!;
  messagerieDiscussion: any;
 
  constructor(  private userService: UsereService,
                private messagerieService: MessagerieService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        console.log('requête réussi', response);
        this.usersList = response;
      },
      (error) => {
        console.error('Erreur de requête', error);
      }
    );
  }
  onUserClick(user: User) {
    this.messagerieService.getPrivateMessages(user.email, this.currentUserEmail).subscribe(
      (response: Messagerie) => {
        console.log('requête réussie', response);
        this.messagerieDiscussion.messagerie = response;
        this.messagerieDiscussion.nomConversation = user.name;
        //this.messagerie.messages.push(response)
        
      },
      (error) => {
        console.error('Erreur de requête', error);
      }
    );
  }
  
}
