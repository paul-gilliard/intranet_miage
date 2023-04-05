import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

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
      (response) => {
        console.log('Authentification réussie', response);
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
