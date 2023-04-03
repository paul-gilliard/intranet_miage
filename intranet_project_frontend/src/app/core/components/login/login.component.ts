import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = this.formBuilder.group({
    email: [, [Validators.required, ]],
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
      
  }

  close() {
    this.loginForm.reset();
  }

  login() {
    let email = this.loginForm.getRawValue();
    this.http.get('http://localhost:3000/api/user/findByEmail/' + email)
      .subscribe(response => {
        console.log('Données envoyées avec succès au backend Node.js', response);
        let retour = response;
        
      }, error => {
        console.error('Erreur lors de l\'envoi des données au backend Node.js', error);
      });

    this.close();
  }

}
