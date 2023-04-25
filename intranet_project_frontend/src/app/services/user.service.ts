import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/api/user/';

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(this.baseUrl +'createUser', user);
  }
  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl +`users`);
  }
}