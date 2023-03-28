import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  name: string = '';

  constructor(private http: HttpClient) { }

  submit() {
    // code pour envoyer le formulaire
    console.log(this.name)
    const formData = { title: this.name };
    this.http.post('http://localhost:3000/api', formData)
      .subscribe(response => {
        console.log('Données envoyées avec succès au backend Node.js', response);
      }, error => {
        console.error('Erreur lors de l\'envoi des données au backend Node.js', error);
      });
  }
}


