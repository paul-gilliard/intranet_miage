import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

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
              private authService: AuthService, 
              private router: Router,
              private homeComponent: HomeComponent) {}

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
        
        
    // Rediriger vers la page d'accueil ou la page souhaitée après la connexion réussie.
     this.router.navigate(['home']); // Changez 'home-connect' avec le nom de votre route
    // this.authService.isLoggedIn = true;
      },
      (error) => {
        console.error('Erreur d\'authentification', error); 
        // Afficher un message d'erreur à l'utilisateur
      }
    )};
    
    this.loginForm.reset();
  }

}
