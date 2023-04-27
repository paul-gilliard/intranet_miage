import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Messagerie } from 'src/app/models/messagerie.model';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { MessagePrive, MessageriePrivee } from 'src/app/models/messagePrivee.model';

@Component({
  selector: 'app-messagerie-panel-gauche',
  templateUrl: './messagerie-panel-gauche.component.html',
  styleUrls: ['./messagerie-panel-gauche.component.css']
})
export class MessageriePanelGaucheComponent implements OnInit {
  
  @Input() messagerie!: Messagerie;
  @Input() usersList: User[] = [];
  currentUserEmail = localStorage.getItem('currentUserEmail')!;
  messagerieDiscussion: any;
  conversation: any;

  //Messagerie Prive
  @Input() messageriePrive!: MessageriePrivee;
  @Input() isPrivateMessage: boolean = false;
  messagePrive!: MessagePrive;
  

  constructor(private userService: UserService, private messagerieService: MessagerieService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        const currentUsername = localStorage.getItem('currentUserName');
        this.usersList = response.filter(user => !/test/i.test(user.name) && user.name !== currentUsername);
      },
      (error) => {
        console.error('Erreur de requête', error);
      }
    );

    this.messagerieService.getMessagePrivate().subscribe();
  }
  
  onUserClick(user: User) {
    this.messagerieService.clickedUser = user;
    this.messagerieService.getMessagesAvecContact(user.email).subscribe((messageriePrive: MessageriePrivee) => {
        this.messageriePrive = messageriePrive;
        this.messageriePrivee = messageriePrive;
        this.messagerieService.setSelectedMessageriePrive(messageriePrive);
    });
   
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