import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message, Messagerie } from 'src/app/models/messagerie.model';
import  { MessagerieService } from 'src/app/services/messagerie.service';
import { io, Socket } from 'socket.io-client';
import { MessageriePanelGaucheComponent } from '../messagerie-panel-gauche/messagerie-panel-gauche.component';
import { MessagerieComponent } from '../messagerie/messagerie.component';
import { MessagePrive, MessageriePrivee } from 'src/app/models/messagePrivee.model';
import { CurrentUserMessageDirective } from './CurrentUserMessageDirective';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-messagerie-discussion',
  templateUrl: './messagerie-discussion.component.html',
  styleUrls: ['./messagerie-discussion.component.css']
})
export class MessagerieDiscussionComponent implements OnInit {
  currentUserEmail = localStorage.getItem('currentUserEmail')!;
  showScrollArrow = false;

  @Input() nomConversation: String = '';
  messagerieDiscussion: any;

@Input() nomConversationPrive: String = '';
  @Input() messagerie: Messagerie = {
    nomConversation: '',
    messages: []
  };
  conversations!: any[];
  sub!: Subscription;
  messageString: String = '';
  message: Message = {
    emeteur:'',
    text: ''
  };
 
  socket!: Socket;
  messagePriveInfo: any;
  //MessageriePrivee
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
  url: string = 'http://localhost:3000';
  clickedUserName: string = localStorage.getItem('currentUserName')!;
  clickedUserEmail: string = localStorage.getItem('currentUserEmail')!;




  constructor(private service: MessagerieService) {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
   }
  private _snackBar!: MatSnackBar;
  async ngOnInit() {
    // A chaque qu'on click sur un user ce composant met à jour la variable messageriePrivee
    //Il est averti par le service
      if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

   this.service.messageriePrive$.subscribe(messageriePrivee => {
    this.messageriePrive = messageriePrivee;
     
     this.clickedUserName = this.service.clickedUser.name;
     this.clickedUserEmail = this.service.clickedUser.email;
   
  

   }); 
    this.service.getIsMessageriePrivateObservable().subscribe(isPrivate => {
      this.isPrivateMessage = isPrivate;
  
});

    //this.socket = io(this.url);
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
    this.socket.on('new-message', (message: Message) => {
      console.log('New message received', message);
      this.messagerie.messages.push(message);
      //this.messagerie.messages.push()
    });
  
     this.socket.on('new-private-message', (message: any) => {
       console.log("PRIVé: Reçu un message privé: ", message);
       const room = `${message.recepteur}-${message.emeteur}`;
  // Vérifier si le message appartient à la salle actuelle
       console.log(' M_D *******Privé nouveau message********', message);
     
  if ( localStorage.getItem('currentRoom')?.includes(message.recepteur) && localStorage.getItem('currentRoom')?.includes(message.emeteur)) {
    // Ajouter le message à la liste des messages si c'est la discussion en cours
    //addMessageToList(message);
    console.log(' if *******Privé nouveau message********');
      this.messageriePrive.messagesPrive.push({
        emeteur: message.emeteur,
        text: message.text,
        recepteur: message.recepteur,
      
      });
 
  } else if (localStorage.getItem('currentRoom')?.includes(message.recepteur)) {
      const notification = new Notification('Nouveau message reçu', {
          body: `Vous avez reçu un message de ${message.emetteur}`,
          icon: 'path/to/icon.png'
        });
    //Montrez un PoP'Up
    console.log(' vous avez reçu un message de ', message.emetteur);

    console.log(localStorage.getItem('currentRoom'));
    console.log(room);
    this.showNotification(); 
  
       }
  else {
    console.log('Un message privé a été reçu par un User');
       }
  
       
});
  }
 
sendMessage(messageString: String, sender: string) {
  const currentUserName = localStorage.getItem('currentUserName')!;
  this.message.text = messageString;
  this.message.emeteur = currentUserName

  this.socket.emit('new-message', this.message);
  this.sub = this.service.sendMessage(this.message).subscribe({
    next: messagerie => {
      this.messagerie = messagerie;
    }
  });
  this.messageString = '';
  }


  sendMessagePrivate(recepteur: string, messageString: String) {
    const currentUserName = localStorage.getItem('currentUserName')!;
    this.messagePrive.text =  <string>messageString;
    this.messagePrive.emeteur = currentUserName;
    this.messagePrive.recepteur = recepteur;

    
   
    console.log('Envoie du message privé depuis MESSAGERIE DISCUSSION');
    this.sub = this.service.sendPrivateMessage(this.currentUserEmail,recepteur, messageString).subscribe({
      next: messagerie => {
       //tout ce passe dans le service un changement de sa variable messagerie privé 
        //est repéré par cette classe
      }
    });
    
   
    this.messageString = '';
  }
  
  isCurrentUser(emetteur: String): boolean {
  return emetteur === localStorage.getItem('currentUserName');
  }
  isCurrentUserPrivate(emetteur: String): boolean {
   return this.currentUserEmail === emetteur;
}
  
  
  getDisplayEmitter(emitter: String): String {
    let displayEmitter = emitter;
    if (emitter === localStorage.getItem('currentUserName')) {
      displayEmitter = 'moi';
    }
    return displayEmitter;
  }

 
  onInput() {
  const input = document.getElementById('messageInput') as HTMLInputElement;
  input.style.height = 'auto'; /* réinitialiser la hauteur à "auto" pour obtenir la hauteur naturelle */
  input.style.height = (input.scrollHeight + 2) + 'px'; /* ajuster la hauteur de l'input en fonction de son contenu */
  }
  onScroll() {
  const element = document.querySelector('.bodyMessages') as HTMLElement;
  /*const arrow = document.querySelector('.scroll-arrow') as HTMLElement; */
  
  const scrollTop = element.scrollTop;
  const offsetHeight = element.offsetHeight;
  const scrollHeight = element.scrollHeight;
  
  if (scrollTop + offsetHeight < scrollHeight) {
   /* arrow.style.display = 'inline-block';*/
  } else {
    /*arrow.style.display = 'none'; */
  }
  }
 showNotification() {
    this._snackBar.open('Vous avez reçu un nouveau message !', 'Fermer', {
      duration: 50000, // Durée d'affichage de la notification en ms
    });
  }
  
 
}