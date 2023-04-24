import { Component, OnInit } from '@angular/core';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { Message, Messagerie } from 'src/app/models/messagerie.model';
import { Subscription } from 'rxjs';
import { MessagePrive, MessageriePrivee } from 'src/app/models/messagePrivee.model';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  messageries!: Messagerie[];
  sub!: Subscription;
  messagerie: Messagerie = {
    nomConversation: '',
    messages: []
  };
   messageriePrive: MessageriePrivee={
    messagesPrive: [] as MessagePrive[],
    emeteur: '',
    recepteur: '',
  };;
   messagePrive: MessagePrive = {
    emeteur:'',
    text: ''
  };
  privateMessagerie!: Messagerie;
  isMessagerieprivate: boolean = false;

  constructor(private service: MessagerieService) { }

  ngOnInit(): void {
    this.messageries = [];
    this.getAllMessages();
    /*this.getAllPrivateMessages();*/
    this.getAllPrivateMessages();
  }

  getAllMessages(){
    this.sub = this.service.getAllMessages().subscribe({
      next: messagerie => {
        this.messagerie = messagerie;
        this.messageries.push(messagerie);
      }
    });
  }
  getAllPrivateMessages() {
    this.service.getMessagesAvecContact(this.service.clickedUser.email).subscribe(
    (messageriePrive: MessageriePrivee) => {
        this.messageriePrive = messageriePrive;
        //on set la variable du service Pour mettre à jour la discussion
        //elle sera getter dans messagerie-composant pour envoyer les données à messagerie discussion
       // this.messageriePrivee = messageriePrive;
       // this.messagerieService.setSelectedMessageriePrive(messageriePrive);
        //console.log('Les messages avec ' + user.email + ':', this.messageriePrive.messagesPrive);
  }
    );
    if (this.service.clickedUser.email != this.service.currentUserEmail)
      this.isMessagerieprivate = true;
    else
      this.isMessagerieprivate = false;
    //this.messageriePrive = this.service.messageriePrive;
   
    
  }
  

  sendMessage(message: Message){
    this.service.sendMessage(message);
  }
  //Une fonction qui récupére tous les messages privés échangés
  //entre l'utilisateur courant et l'utilisateur cliqué
  //Dans ce cas il faut que le clic qui se passe dans panel-gauche
  //envoie les données au composant messagerie


/*
  getAllPrivateMessages(){
    let email = 'coucou@gmail.com';
    this.sub = this.service.getAllMessagesPrivate(email).subscribe({
      next: messagerie => {
        this.privateMessagerie = messagerie;
        this.messageries.push(messagerie);
      }
    });
  }
  */
/*
  sendPrivateMessage(email: String, message: Message){
    this.service.sendMessagePrivate(email, message);
  }
  */
}
