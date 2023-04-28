import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: [, [Validators.required, ]],
    password: [, [Validators.required, ]]
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {}

  login() {
    let email:string = this.loginForm.get('email')?.value!;
    let password:string = this.loginForm.get('password')?.value!;
    if (email != null && password != null){
  
    this.authService.authenticateUser(email, password).subscribe(
      (response:any) => {

        const token:string = response?.accessToken;
        const currentUserName:string = response.userData.name!;
        const currentUserEmail:string = response.userData.email!;
        const currentUserPromo:string = response.userData.promo!;
        const currentUserStatut:string = response.userData.statut!;
        
        localStorage.setItem('token', token);
        localStorage.setItem('currentUserName', currentUserName);
        localStorage.setItem('currentUserEmail', currentUserEmail);
        localStorage.setItem('currentUserPromo', currentUserPromo);
        localStorage.setItem('currentUserStatut', currentUserStatut);

        console.log('Authentification réussie');
      },
      (error) => {
        console.error('Erreur d\'authentification', error);
      }
    )};
    
    this.loginForm.reset();
  }

  openCreateUserModal ()  {
    let element = document.getElementById("createUserModal") as HTMLElement;
    let myModal = new Modal (element);
    myModal.show();
  }
}