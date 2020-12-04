import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import User from '../models/User';
import Login from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //crud user

  createUser(user: User) {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  readUserById(id: number){
    return this.http.get<User>(`${this.apiUrl}/users/${id}`)
  }

  editUser(user: User) {
    return this.http.post<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number){
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`)
  }

  //login

  getAllUserData(){
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(map((obj) => obj))
  }


}
