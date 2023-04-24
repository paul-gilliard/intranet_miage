import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message, Messagerie } from 'src/app/models/messagerie.model';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { io, Socket } from 'socket.io-client';
import { MessageriePanelGaucheComponent } from '../messagerie-panel-gauche/messagerie-panel-gauche.component';
import { MessagerieComponent } from '../messagerie/messagerie.component';


@Component({
  selector: 'app-messagerie-discussion',
  templateUrl: './messagerie-discussion.component.html',
  styleUrls: ['./messagerie-discussion.component.css']
})
export class MessagerieDiscussionComponent implements OnInit {
  currentUserEmail = localStorage.getItem('currentUserEmail')!;
  showScrollArrow = false;

  @Input() nomConversation: String = '';
  @Input() messagerie: Messagerie = {
    nomConversation: '',
    messages: []
  };
  sub!: Subscription;
  messageString: String = '';
  message: Message = {
    emeteur:'',
    text: ''
  };
  socket!: Socket;
  messagePriveInfo: any;
  

  constructor(private service : MessagerieService){ }

  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
    this.socket.on('new-message', (message: Message) => {
      console.log('New message received', message);
      this.messagerie.messages.push(message);
      this.messagerie.messages.push()
    });
    this.messagePriveInfo= MessageriePanelGaucheComponent.getMessagerieDiscussion();
  
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


  sendMessagePrivate(sender: String, messageString: String) {
    const currentUserName = localStorage.getItem('currentUserName')!;
    this.message.text = messageString;
    this.message.emeteur = currentUserName;
    
    this.socket.emit('new-message', {text: this.message.text, emeteur: currentUserName});
  
    this.sub = this.service.sendMessagePrivate(sender, this.message).subscribe({
      next: messagerie => {
        this.messagerie = messagerie;
      }
    });
    this.messageString = '';
  }
  
  isCurrentUser(emetteur: String): boolean {
  return emetteur === localStorage.getItem('currentUserName');
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
  const arrow = document.querySelector('.scroll-arrow') as HTMLElement;
  
  const scrollTop = element.scrollTop;
  const offsetHeight = element.offsetHeight;
  const scrollHeight = element.scrollHeight;
  
  if (scrollTop + offsetHeight < scrollHeight) {
    arrow.style.display = 'inline-block';
  } else {
    arrow.style.display = 'none';
  }
}

  //appeler la getPrivateMessage() du service
  //puis afficher tous les message privés
  
 
}