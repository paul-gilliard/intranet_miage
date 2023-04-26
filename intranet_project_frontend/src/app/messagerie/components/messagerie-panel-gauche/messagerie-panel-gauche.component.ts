import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Messagerie } from 'src/app/models/messagerie.model';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { MessagePrive, MessageriePrivee } from 'src/app/models/messagePrivee.model';
import { MessagerieDiscussionComponent } from '../messagerie-discussion/messagerie-discussion.component';
import { Socket, io } from 'socket.io-client';
@Component({
  selector: 'app-messagerie-panel-gauche',
  templateUrl: './messagerie-panel-gauche.component.html',
  styleUrls: ['./messagerie-panel-gauche.component.css']
})
export class MessageriePanelGaucheComponent implements OnInit {
conversation: any;
  
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
  //Messagerie Prive
  @Input() messageriePrive: MessageriePrivee={
    messagesPrive: [] as MessagePrive[],
    emeteur: '',
    recepteur: '',
  };;
   messagePrive: MessagePrive = {
    emeteur:'',
     text: '',
     recepteur: '',
   
    
  };
  @Input() isPrivateMessage: boolean = false;
 
  constructor(  private userService: UserService,
                private messagerieService: MessagerieService) {
                  
                }

  ngOnInit() {
    
   this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        console.log('requête réussi', response);
        //faire appel à la fonction qui donne tous les utlisteurs avec qui on a échangé!!!!!!!!
        this.usersList = response;
      },
      (error) => {
        console.error('Erreur de requête', error);
      }
    ); 
    this.messagerieService.getMessagePrivate().subscribe(data => {
      console.log("dans panel :",data);
      // Traitez ici les données reçues du socket
    });
  

    
  }
  
  onUserClick(user: User) {
    console.log(user.email + 'est cliqué');
    console.log('Les messages échangés avec', user.email,);
    this.messagerieService.clickedUser = user;
    //console.log("%%%%%%%USER CLICKED",this.messagerieService.clickedUser);
    //this.getMessagesAvecContact(user.email);
    this.messagerieService.getMessagesAvecContact(user.email).subscribe(
    (messageriePrive: MessageriePrivee) => {
        this.messageriePrive = messageriePrive;
        //on set la variable du service Pour mettre à jour la discussion
        //elle sera getter dans messagerie-composant pour envoyer les données à messagerie discussion
        this.messageriePrivee = messageriePrive;
        this.messagerieService.setSelectedMessageriePrive(messageriePrive);
        console.log('Les messages avec ' + user.email + ':', this.messageriePrive.messagesPrive);
  }
);
   
    this.messagerieService._isMessageriePrivate = true;
    this.messagerieService.clickedUser.name = user.name;
    this.messagerieService.clickedUser.email = user.email;

   
    this.messagerieService.joinRoom({ room: this.currentUserEmail + '-' + user.email });
    //stocker le room courant
    localStorage.setItem('currentRoom', this.currentUserEmail + '-' + user.email);
     this.messagerieService.setIsMessageriePrivate(true);
    
    
  }
  onMiageClick() {
    this.messagerieService.setIsMessageriePrivate(false);
    
  }
 
  get messageriePrivee(): any {
    return this.messagerieService.messageriePrive;
  }

  set messageriePrivee(value: any) {
    this.messagerieService.messageriePrive = value;
  }

  
  
  
}
