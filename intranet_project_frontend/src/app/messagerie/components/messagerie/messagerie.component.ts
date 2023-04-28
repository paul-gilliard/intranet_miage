import { Component, OnInit } from '@angular/core';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { Message, Messagerie } from 'src/app/models/messagerie.model';
import { Subscription } from 'rxjs';
import { MessageriePrivee } from 'src/app/models/messagePrivee.model';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  messageries!: Messagerie[];
  sub!: Subscription;
  messagerie!: Messagerie;
  messageriePrive!: MessageriePrivee;
  privateMessagerie!: Messagerie;
  isMessagerieprivate: boolean = false;

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

  getAllPrivateMessages() {
    this.service.getMessagesAvecContact(this.service.clickedUser.email).subscribe((messageriePrive: MessageriePrivee) => {
      this.messageriePrive = messageriePrive;
    });
    this.isMessagerieprivate = (this.service.clickedUser.email != this.service.currentUserEmail);
  }
  
  sendMessage(message: Message){
    this.service.sendMessage(message);
  }
}
