import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message, Messagerie } from 'src/app/models/messagerie.model';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-messagerie-discussion',
  templateUrl: './messagerie-discussion.component.html',
  styleUrls: ['./messagerie-discussion.component.css']
})
export class MessagerieDiscussionComponent implements OnInit {

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

  constructor(private service : MessagerieService){ }

  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
    this.socket.on('new-message', (message: Message) => {
      console.log('New message received', message);
      this.messagerie.messages.push(message);
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
 
}