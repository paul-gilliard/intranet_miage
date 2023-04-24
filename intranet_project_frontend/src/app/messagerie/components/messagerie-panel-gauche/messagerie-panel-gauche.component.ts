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
    text: ''
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
    //le socket pour recevoir les messages Privés
    //////////////////////////////////////
   // this.socket.on("new-private-message", (data: any) => {
    //console.log("PRIVé: Reçu un message privé: ", data);
  // Vérifie si le message est destiné à la conversation actuellement affichée
  /*  if (
    (data.emeteur === this.currentUserEmail && data.recepteur === this.messagerieDiscussion.messagerie.emailContact) ||
    (data.emeteur === this.messagerieDiscussion.messagerie.emailContact && data.recepteur === this.currentUserEmail)
    ) {
      console.log("PRIVé: Reçu un message privé: ", data);
    // Ajoute le message à la conversation actuelle
    this.messagerieDiscussion.messagerie.messages.push({
      emeteur: data.emeteur,
      text: data.text
    }
    );
  } */
//});

    
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
    //console.log("la messagerie PRIVEE :", JSON.stringify(this.messageriePrive));
    //si c'est une discussion privée ou public
    //alors on met à jour le flag du service
    //if (user) {
    this.messagerieService._isMessageriePrivate = true;
    //joindre un room
    //this.socket.emit('join', this.currentUserEmail  + '-'+user.email);{user: username, room: roomId}
    this.messagerieService.joinRoom({ room: this.currentUserEmail + '-' + user.email });
    //stocker le room courant
    localStorage.setItem('currentRoom', this.currentUserEmail  + '-'+user.email );
    
    
  }
  /*
  onUserClick2Socket(user: User) {
    this.socket.emit("private-message-request", {
    emeteur: this.currentUserEmail,
    recepteur: user.email
    });
    this.socket.on("private-message", (data: any) => {
 
  // Vérifie si le message est destiné à la conversation actuellement affichée
  if (
    (data.emeteur === this.currentUserEmail && data.recepteur === this.messagerieDiscussion.messagerie.emailContact) ||
    (data.emeteur === this.messagerieDiscussion.messagerie.emailContact && data.recepteur === this.currentUserEmail)
  ) {
    // Ajoute le message à la conversation actuelle
    this.messagerieDiscussion.messagerie.messages.push({
      emeteur: data.emeteur,
      text: data.text
    });
     console.log(" PANEL GAUCHE: Reçu un message privé:", data);
  }
});


   
  }
  */
/*
  getMessagesAvecContact(emailContact: string) {
  this.service.getAllMessagesPrivate(localStorage.getItem('currentUserName')!).subscribe(
    (messagesPrive: any[]) => {
     // console.log(JSON.stringify(messagesPrive));
      this.messageriePrive.messagesPrive = messagesPrive.flatMap((mp: any) => {
        if (mp.emeteur === emailContact || mp.recepteur === emailContact) {
          return mp.messages.map((msg: any) => {
            return {
              emeteur: mp.emeteur,
              recepteur: mp.recepteur,
              text: msg.text
            };
          });
        } else {
          return [];
        }
      });
      console.log('les messages avec ' + emailContact + ':', this.messageriePrive.messagesPrive);
    },
    error => {
      console.log('Une erreur est survenue lors de la récupération des messages privés', error);
    }
  );
}
*/
  /*getMessagesAvecContact(emailContact: string) {
  this.service.getAllMessagesPrivate(localStorage.getItem('currentUserName')!).subscribe(
    (messagesPrive: any[]) => {
      this.messageriePrive.messagesPrive = messagesPrive.flatMap((mp: any) => {
        if (mp.emeteur === emailContact || mp.recepteur === emailContact) {
          return mp.messages.map((msg: any) => {
            return {
              emeteur: mp.emeteur,
              recepteur: mp.recepteur,
              text: msg.text
            };
          });
        } else {
          return [];
        }
      });
      this.messageriePrive.emeteur = ''; // mettez la valeur d'emetteur appropriée ici
      this.messageriePrive.recepteur = emailContact;
      console.log('les messages avec ' + emailContact + ':', this.messageriePrive.messagesPrive);
    },
    error => {
      console.log('Une erreur est survenue lors de la récupération des messages privés', error);
    }
  );
}
*/
  get messageriePrivee(): any {
    return this.messagerieService.messageriePrive;
  }

  set messageriePrivee(value: any) {
    this.messagerieService.messageriePrive = value;
  }

  
  
  
}
