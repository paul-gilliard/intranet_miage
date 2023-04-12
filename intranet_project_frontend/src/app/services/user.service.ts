import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsereService {
  private baseUrl = 'http://localhost:3000/api/user/';

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post('http://localhost:3000/api/user/createUser', user);
  }
  getAllUsers() {
    return this.http.get<User>(`http://localhost:3000/api/user/users`);
  }
}