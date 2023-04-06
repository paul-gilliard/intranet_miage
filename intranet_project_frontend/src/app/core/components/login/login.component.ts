import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = "";

  loginForm = this.formBuilder.group({
    email: [, [Validators.required, ]],
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService) {
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
      
  }

  close() {
    this.loginForm.reset();
  }

  login() {
    this.email = this.loginForm.get('email')?.value!;
    if (this.email != null){
  
    this.authService.authenticateUser(this.email).subscribe(
      (response:any) => {
        const token:string = response?.accessToken;
        const currentUserName:string = response?.userData?.name;
        const currentUserEmail:string = response?.userData?.email;
        const currentUserPromo:string = response?.userData?.promo;
        const currentUserStatut:string = response?.userData?.statut;
        
        localStorage.setItem('token', token);
        localStorage.setItem('currentUserName', currentUserName);
        localStorage.setItem('currentUserEmail', currentUserEmail);
        localStorage.setItem('currentUserPromo', currentUserPromo);
        localStorage.setItem('currentUserStatut', currentUserStatut);
        console.log('Authentification réussie');
        
        
        // Rediriger vers la page d'accueil ou la page souhaitée après la connexion réussie.
        
      },
      (error) => {
        console.error('Erreur d\'authentification', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    )};

    this.close();
  }

}
