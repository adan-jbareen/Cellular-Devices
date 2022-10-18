import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  nameUser: String = "";
  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) { }
  getUser(): Observable<any> {
    return this.http.get(this.baseURL + 'user');
  }
  
  getUsers() {
    return [
      new User('Adan', 'Adan1234567'),
      new User('Fatima', 'Fatima123789')
    ];
  }
  // createUser(user: User): Observable<any> {
  //   let body = JSON.stringify(user);
  //   return this.http.post(this.baseURL + 'user', body, {
  //   headers: this.headers,
  //   });
  // }

}

class User {
  name: string;
  password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}
