import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  createUserForm = this.formBuilder.group({
    name: [, [Validators.required, ]],
    password: [, [Validators.required, ]],
    email: [, [Validators.required, ]],
    promo: [, [Validators.required, ]],
    statut: [, [Validators.required, ]]
  });

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
    
  }

  close() {
    this.createUserForm.reset();
  }

  createUser() {
    let userToCreate: User = {
      name: this.createUserForm.get('name')?.value!,
      email: this.createUserForm.get('email')?.value!,
      password: this.createUserForm.get('password')?.value!,
      promo: this.createUserForm.get('promo')?.value!,
      statut: this.createUserForm.get('statut')?.value!
    };
    this.userService.createUser(userToCreate).subscribe(
      (response) => {
        if (response) {
          confirm('Utilisateur créé ! Vous pouvez maintenant vous connecter en utilisant l\'adresse mail renseignée !')
        }
      },
      (error) => {
        console.error('Erreur de creation', error);
        
      }
    );
    this.close();
  }

}
