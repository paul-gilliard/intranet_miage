import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;
  //private authenticated = false;

  constructor(private http: HttpClient) {
    // this.token = localStorage.getItem('token')!;
    // if (this.token) {
    //   this.authenticated = true;
    // }
  }

  authenticateUser(email: string) {
    return this.http.post('http://localhost:3000/login', { email });
  }

  // getIsAuthenticated(): boolean {
  //   return this.authenticated;
  // }

  // setIsAuthenticated(value: boolean): void {
  //   this.authenticated = value;
  // }

  isAuthenticated(): boolean {
    this.token = localStorage.getItem('token')!;
    return !!this.token;
  }
}