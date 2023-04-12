import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  createUserForm = this.formBuilder.group({
    name: [, [Validators.required, ]],
    password: ["00000000", []],
    email: [, [Validators.required, ]],
    promo: [, [Validators.required, ]],
    statut: [, [Validators.required, ]]
  });

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService) {
    
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
        console.log('creation reussie', response);
        this.toastr.success('Votre compte a été créé avec succès, vous pouvez désormais vous connecter avec l\'email renseigné !', 'Création réussie');
      },
      (error) => {
        console.error('Erreur de creation', error);
        
      }
    );

    this.close();
  }

}
