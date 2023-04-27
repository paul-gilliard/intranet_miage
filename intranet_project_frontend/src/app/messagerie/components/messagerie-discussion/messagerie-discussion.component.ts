import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message, Messagerie } from 'src/app/models/messagerie.model';
import  { MessagerieService } from 'src/app/services/messagerie.service';
import { io, Socket } from 'socket.io-client';
import { MessagePrive, MessageriePrivee } from 'src/app/models/messagePrivee.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messagerie-discussion',
  templateUrl: './messagerie-discussion.component.html',
  styleUrls: ['./messagerie-discussion.component.css']
})

export class MessagerieDiscussionComponent implements OnInit {

  @Input() nomConversation: string = '';
  @Input() nomConversationPrive: string = '';
  @Input() messagerie!: Messagerie;

  private _snackBar!: MatSnackBar;
  currentUserEmail = localStorage.getItem('currentUserEmail')!;
  showScrollArrow = false;
  messagerieDiscussion: any;
  conversations!: any[];
  sub!: Subscription;
  messageString: string = '';
  message!: Message;
  socket!: Socket;
  messagePriveInfo: any;

  //MessageriePrivee
  @Input() messageriePrive!: MessageriePrivee;
  @Input() isPrivateMessage: boolean = false;
  messagePrive!: MessagePrive;
 
  url: string = 'http://localhost:3000';
  clickedUserName: string = localStorage.getItem('currentUserName')!;
  clickedUserEmail: string = localStorage.getItem('currentUserEmail')!;

  constructor(private service: MessagerieService) {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }

  async ngOnInit() {
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
    this.socket.on('connect', () =>{});
    this.socket.on('new-message', (message: Message) => {
      this.messagerie.messages.push(message);
    });
    this.socket.on('new-private-message', (message: any) => {
      if (localStorage.getItem('currentRoom')?.includes(message.recepteur) && localStorage.getItem('currentRoom')?.includes(message.emeteur)) {
        this.messageriePrive.messagesPrive.push({
          emeteur: message.emeteur,
          text: message.text,
          recepteur: message.recepteur,
        });
      } else if (localStorage.getItem('currentRoom')?.includes(message.recepteur)) {
        this.showNotification(); 
      }
    });
  }
  
  sendMessage(messageString: string) {
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

  sendMessagePrivate(recepteur: string, messageString: string) {
    const currentUserName = localStorage.getItem('currentUserName')!;
    this.messagePrive.text =  messageString;
    this.messagePrive.emeteur = currentUserName;
    this.messagePrive.recepteur = recepteur;
    this.sub = this.service.sendPrivateMessage(this.currentUserEmail,recepteur, messageString).subscribe();
    this.messageString = '';
  }
  
  isCurrentUser(emetteur: string): boolean {
    return emetteur === localStorage.getItem('currentUserName');
  }

  isCurrentUserPrivate(emetteur: string): boolean {
    return this.currentUserEmail === emetteur;
  }
  
  getDisplayEmitter(emitter: string): string {
    let displayEmitter = emitter;
    if (emitter === localStorage.getItem('currentUserName')) {
      displayEmitter = 'moi';
    }
    return displayEmitter;
  }

  onInput() {
    const input = document.getElementById('messageInput') as HTMLInputElement;
    input.style.height = 'auto';
    input.style.height = (input.scrollHeight + 2) + 'px';
  }

  showNotification() {
    this._snackBar.open('Vous avez reçu un nouveau message !', 'Fermer', {
      duration: 50000, // Durée d'affichage de la notification en ms
    });
  }
}