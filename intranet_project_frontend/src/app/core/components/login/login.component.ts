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

  email: string = "";

  loginForm = this.formBuilder.group({
    email: [, [Validators.required, ]],
    motdePasse: ["", [, ]]
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {}

  login() {
    this.email = this.loginForm.get('email')?.value!;
    if (this.email != null){
  
    this.authService.authenticateUser(this.email).subscribe(
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
        // Afficher un message d'erreur à l'utilisateur
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
