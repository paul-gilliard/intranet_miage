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

  sendMessage(messageString: String, emeteur: String){
    this.message.text = messageString;
    this.message.emeteur = emeteur;

    this.socket.emit('new-message', this.message);
    this.sub = this.service.sendMessage(this.message).subscribe({
      next: messagerie => {
        this.messagerie = messagerie;
      }
    });
  }
}