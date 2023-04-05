import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsereService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  createUserForm = this.formBuilder.group({
    name: [, [Validators.required, ]],
    password: ["00000000", []],
    email: [, [Validators.required, ]],
    promo: [, [Validators.required, ]],
    statut: [, [Validators.required, ]]
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UsereService) {
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
      
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
        
      },
      (error) => {
        console.error('Erreur de creation', error);
        
      }
    );

    this.close();
  }

}
