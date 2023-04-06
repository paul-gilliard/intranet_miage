import { Component, OnInit } from '@angular/core';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { Message, Messagerie } from 'src/app/models/messagerie.model';
import { Subscription } from 'rxjs';

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
  privateMessagerie! : Messagerie;

  constructor(private service: MessagerieService) { }

  ngOnInit(): void {
    this.messageries = [];
    this.getAllMessages();
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

  sendMessage(message: Message){
    this.service.sendMessage(message);
  }

  getAllPrivateMessages(){
    let email = 'coucou@gmail.com';
    this.sub = this.service.getAllMessagesPrivate(email).subscribe({
      next: messagerie => {
        this.privateMessagerie = messagerie;
        this.messageries.push(messagerie);
      }
    });
  }

  sendPrivateMessage(email: String, message: Message){
    this.service.sendMessagePrivate(email, message);
  }
}
