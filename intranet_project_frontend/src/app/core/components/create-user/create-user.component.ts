import { Component } from '@angular/core';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user: User = new User('', '', '');

  constructor(private userService: UserService) {}

  onSubmit() {
    // Code pour envoyer les données du formulaire à votre API pour créer ou mettre à jour un utilisateur
    this.userService.createUser(this.user)
      .subscribe((user) => {
        console.log('Utilisateur créé', user);
      });
      
      
  }

}

