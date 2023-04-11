import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  constructor(private http: HttpClient) {

  }

  authenticateUser(email: string) {
    return this.http.post('http://localhost:3000/login', { email });
  }
  
  isAuthenticated(): boolean {
    this.token = localStorage.getItem('token')!;
    return !!this.token;
  }
}