import { Component, OnInit } from '@angular/core';
import { UsereService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-messagerie-panel-gauche',
  templateUrl: './messagerie-panel-gauche.component.html',
  styleUrls: ['./messagerie-panel-gauche.component.css']
})
export class MessageriePanelGaucheComponent implements OnInit {
  usersList: User[] = [];
 
  constructor(private userService: UsereService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        console.log('requête réussi', response);
        this.usersList = response;
      },
      (error) => {
        console.error('Erreur de requête', error);
      }
    );
  }
  onUserClick(user: User) {
    
  }
}
